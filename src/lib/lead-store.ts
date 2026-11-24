import "server-only";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { mailConfigured, sendMail } from "@/lib/mailer";

/**
 * Lead persistence and notification.
 *
 * Storage: an append-only JSON Lines file (LEADS_FILE, default .data/leads.jsonl). This suits a
 * single Node server or VPS. It is the seam where PostgreSQL replaces the file (SRS section 7):
 * keep `saveLead` as the only write path and swap its body.
 *
 * Notification: when SMTP is configured, the sales team gets an alert email and the lead gets an
 * acknowledgement; if LEAD_WEBHOOK_URL is set, each lead is also POSTed there as JSON (Slack-compatible
 * `text` plus the full `lead`). A notification failure never fails the submission.
 */
export type StoredLead = {
  reference: string;
  createdAt: string;
  status: "New";
  formType: "contact" | "audit" | "pricing";
  interest?: string;
  name: string;
  practice: string;
  practiceType?: string;
  specialty?: string;
  email?: string;
  phone?: string;
  monthlyCollections?: number;
  pricingTier?: number;
  ratePercent?: number;
  estimatedFee?: number;
  message: string;
  sourcePage: string;
  referrer: string;
};

export function newReference(): string {
  const d = new Date();
  const ymd = `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
  return `MX-${ymd}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export async function saveLead(lead: StoredLead): Promise<void> {
  // Serverless hosts (Vercel) only allow writes under /tmp, which is temporary: rely on email there.
  const defaultDir = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), ".data");
  const file = process.env.LEADS_FILE ?? path.join(defaultDir, "leads.jsonl");
  await mkdir(path.dirname(file), { recursive: true });
  await appendFile(file, JSON.stringify(lead) + "\n", "utf8");
}

const FORM_LABEL: Record<StoredLead["formType"], string> = {
  contact: "Contact request",
  audit: "Free audit / AI consultation request",
  pricing: "Pricing quote request",
};

function leadSummary(lead: StoredLead): string {
  const rows: Array<[string, string | number | undefined]> = [
    ["Reference", lead.reference],
    ["Form", FORM_LABEL[lead.formType]],
    ["Interest", lead.interest],
    ["Name", lead.name],
    ["Practice / facility", lead.practice],
    ["Practice type", lead.practiceType],
    ["Specialty", lead.specialty],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Monthly collections", lead.monthlyCollections ? `$${lead.monthlyCollections.toLocaleString("en-US")}` : undefined],
    [
      "Pricing tier",
      lead.pricingTier
        ? `Tier ${lead.pricingTier} at ${lead.ratePercent}% — estimated fee $${lead.estimatedFee?.toLocaleString("en-US")}/month`
        : undefined,
    ],
    ["Source page", lead.sourcePage],
    ["Received", lead.createdAt],
  ];
  const body = rows
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return `${body}\n\nMessage:\n${lead.message || "(none)"}`;
}

/** Sales alert + acknowledgement to the lead (when an email address was given). Never throws. */
async function emailNewLead(lead: StoredLead): Promise<void> {
  if (!mailConfigured()) return;
  const tasks: Promise<void>[] = [
    sendMail({
      to: process.env.LEAD_NOTIFY_TO!,
      subject: `New lead ${lead.reference} — ${lead.name}, ${lead.practice}`,
      text: `A new request arrived on the Medexa Care Solutions website.\n\n${leadSummary(lead)}\n`,
      replyTo: lead.email,
    }),
  ];
  if (lead.email) {
    const what =
      lead.formType === "pricing"
        ? "your custom pricing quote"
        : lead.interest?.startsWith("AI Services")
          ? "your free AI consultation"
          : lead.interest?.startsWith("Both")
            ? "your free billing audit and AI consultation"
            : "your free billing audit";
    tasks.push(
      sendMail({
        to: lead.email,
        subject: `We received your request — Medexa Care Solutions (${lead.reference})`,
        text: [
          `Hello ${lead.name},`,
          "",
          `Thank you for contacting Medexa Care Solutions. We have received your request for ${lead.practice} and will follow up shortly about ${what}.`,
          "",
          `Your reference: ${lead.reference}`,
          "",
          "Please do not send patient information (PHI) by email. Patient details are only ever shared under a signed Business Associate Agreement (BAA).",
          "",
          "Medexa Care Solutions",
        ].join("\n"),
        replyTo: process.env.LEAD_NOTIFY_TO,
      }),
    );
  }
  const results = await Promise.allSettled(tasks);
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      const which = i === 0 ? "sales alert" : "acknowledgement";
      console.error(`[leads] ${which} email failed for ${lead.reference}:`, r.reason instanceof Error ? r.reason.message : r.reason);
    }
  });
}

export async function notifyNewLead(lead: StoredLead): Promise<void> {
  await Promise.allSettled([emailNewLead(lead), postWebhook(lead)]);
}

async function postWebhook(lead: StoredLead): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;
  const lines = [
    `New ${lead.formType} lead ${lead.reference}`,
    `${lead.name} — ${lead.practice}`,
    lead.interest ? `Interest: ${lead.interest}` : "",
    lead.specialty ? `Specialty: ${lead.specialty}` : "",
    lead.monthlyCollections
      ? `Collections: $${lead.monthlyCollections.toLocaleString("en-US")} → Tier ${lead.pricingTier} (${lead.ratePercent}%)`
      : "",
    `Contact: ${[lead.email, lead.phone].filter(Boolean).join(" / ")}`,
    `Source: ${lead.sourcePage || "unknown"}`,
  ].filter(Boolean);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: lines.join("\n"), lead }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) console.error(`[leads] webhook responded ${res.status} for ${lead.reference}`);
  } catch (err) {
    console.error(`[leads] webhook failed for ${lead.reference}:`, err instanceof Error ? err.message : err);
  }
}
