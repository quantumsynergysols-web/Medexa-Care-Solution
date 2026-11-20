import { NextResponse } from "next/server";
import { fieldErrors, isEmail, leadSchema } from "@/lib/lead-schema";
import { containsLikelyPhi, PHI_BLOCK_MESSAGE } from "@/lib/phi";
import { estimateFee } from "@/lib/pricing";
import { allowRequest } from "@/lib/rate-limit";
import { newReference, notifyNewLead, saveLead, type StoredLead } from "@/lib/lead-store";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowRequest(ip)) {
    return NextResponse.json(
      { error: "Too many requests from this connection. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "The request could not be read. Please try again." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", errors: fieldErrors(parsed.error) },
      { status: 422 },
    );
  }
  const data = parsed.data;

  // Honeypot filled: answer as if accepted, store nothing.
  if (data.website) return NextResponse.json({ reference: "MX-RECEIVED" }, { status: 201 });

  if (containsLikelyPhi(data.message, data.name, data.practice)) {
    return NextResponse.json({ error: PHI_BLOCK_MESSAGE, errors: { message: PHI_BLOCK_MESSAGE } }, { status: 400 });
  }

  const lead: StoredLead = {
    reference: newReference(),
    createdAt: new Date().toISOString(),
    status: "New",
    formType: data.formType,
    name: data.name,
    practice: data.practice,
    message: data.message,
    sourcePage: data.sourcePage,
    referrer: request.headers.get("referer") ?? "",
  };

  if (data.formType === "pricing") {
    const { tier, fee } = estimateFee(data.collections);
    lead.practiceType = data.ptype;
    lead.email = data.email;
    lead.phone = data.phone || undefined;
    lead.monthlyCollections = data.collections;
    lead.pricingTier = tier.id;
    lead.ratePercent = tier.ratePercent;
    lead.estimatedFee = fee;
  } else {
    lead.interest = data.interest;
    if (data.formType === "audit") lead.specialty = data.specialty;
    if (isEmail(data.contact)) lead.email = data.contact;
    else lead.phone = data.contact;
  }

  try {
    await saveLead(lead);
  } catch (err) {
    console.error("[leads] could not save lead:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "We could not save your request just now. Please try again in a moment." },
      { status: 500 },
    );
  }

  await notifyNewLead(lead);

  return NextResponse.json(
    {
      reference: lead.reference,
      tier: lead.pricingTier,
      ratePercent: lead.ratePercent,
      estimatedFee: lead.estimatedFee,
    },
    { status: 201 },
  );
}
