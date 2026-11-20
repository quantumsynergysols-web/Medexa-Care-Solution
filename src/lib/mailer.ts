import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * SMTP email for lead notifications (SRS FR-NTF-01, FR-NTF-02).
 * Configured entirely by environment variables; when SMTP_HOST is unset, email is skipped.
 * Hostinger mailboxes: SMTP_HOST=smtp.hostinger.com, SMTP_PORT=465, SMTP_SECURE=true.
 */
let transporter: Transporter | null = null;

export function mailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.LEAD_NOTIFY_TO);
}

function getTransporter(): Transporter {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: (process.env.SMTP_SECURE ?? (port === 465 ? "true" : "false")) === "true",
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
  }
  return transporter;
}

export type Mail = { to: string; subject: string; text: string; replyTo?: string };

/** Sends with up to 3 attempts and exponential back-off (1 s, 2 s). Throws after the last failure. */
export async function sendMail(mail: Mail): Promise<void> {
  const from = process.env.LEAD_FROM ?? process.env.SMTP_USER;
  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await getTransporter().sendMail({ from, ...mail });
      return;
    } catch (err) {
      lastError = err;
      if (attempt < 3) await new Promise((r) => setTimeout(r, 1000 * 2 ** (attempt - 1)));
    }
  }
  throw lastError;
}
