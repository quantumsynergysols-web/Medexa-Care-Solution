import { z } from "zod";

/** Shared by the browser forms and the /api/leads route, so both apply identical rules. */

export const INTERESTS = [
  "Medical Billing & RCM — Free Billing Audit",
  "AI Services — Free AI Consultation",
  "Both — Medical Billing & AI Services (separate projects)",
  "Not sure yet — advise me",
] as const;

export const SPECIALTIES = [
  "Family Medicine",
  "Internal Medicine",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "Dermatology",
  "Behavioral Health / Mental Health",
  "Physical Therapy",
  "Urgent Care",
  "Gastroenterology",
  "Nephrology",
  "Pain Management",
  "Other",
] as const;

export const PRACTICE_TYPES = [
  "Physician",
  "Healthcare Provider",
  "Practice Staff",
  "Laboratory",
  "Consultant",
  "Hospital",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

/** A phone number is 7–15 digits once spaces, dashes, dots, brackets and a leading + are removed. */
export function isPhone(value: string): boolean {
  const v = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(v)) return false;
  const digits = v.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

const name = z.string().trim().min(2, "Please enter your name.").max(100, "That name is too long.");
const practice = z
  .string()
  .trim()
  .min(2, "Please enter your practice or facility name.")
  .max(150, "That name is too long.");
const message = z.string().trim().max(2000, "Please keep the message under 2,000 characters.").optional().default("");
const contact = z
  .string()
  .trim()
  .min(1, "Please enter an email address or phone number.")
  .refine((v) => isEmail(v) || isPhone(v), "Enter a valid email address or phone number.");

const common = {
  sourcePage: z.string().max(300).optional().default(""),
  /** Honeypot: real visitors never see or fill this field. */
  website: z.string().max(200).optional().default(""),
};

export const contactLeadSchema = z.object({
  formType: z.literal("contact"),
  interest: z.enum(INTERESTS),
  name,
  practice,
  contact,
  message,
  ...common,
});

export const auditLeadSchema = z.object({
  formType: z.literal("audit"),
  interest: z.enum(INTERESTS),
  name,
  practice,
  specialty: z.enum(SPECIALTIES, { message: "Please select your specialty." }),
  contact,
  message,
  ...common,
});

export const pricingLeadSchema = z.object({
  formType: z.literal("pricing"),
  ptype: z.enum(PRACTICE_TYPES, { message: "Please select your practice type." }),
  practice,
  name,
  collections: z.coerce
    .number({ message: "Enter your monthly collections as a number." })
    .positive("Monthly collections must be greater than 0.")
    .max(100_000_000, "That figure looks too large — please check it."),
  email: z.string().trim().refine(isEmail, "Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .default("")
    .refine((v) => v === "" || isPhone(v), "Enter a valid phone number."),
  message,
  ...common,
});

export const leadSchema = z.discriminatedUnion("formType", [contactLeadSchema, auditLeadSchema, pricingLeadSchema]);

export type LeadInput = z.infer<typeof leadSchema>;
export type FieldErrors = Record<string, string>;

/** First error message per field, keyed by field name. */
export function fieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
