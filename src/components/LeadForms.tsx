"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { PhiIcon } from "@/components/icons";
import {
  fieldErrors,
  INTERESTS,
  leadSchema,
  PRACTICE_TYPES,
  SPECIALTIES,
  type FieldErrors,
} from "@/lib/lead-schema";

type FormType = "contact" | "audit" | "pricing";
type Values = Record<string, string>;
type Status = "idle" | "sending" | "done";

const FULL_WIDTH = { width: "100%", justifyContent: "center" } as const;

/** Shared submit logic: validate in the browser, POST to /api/leads, surface per-field errors. */
function useLeadForm(formType: FormType, successText: (values: Values) => string) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [doneText, setDoneText] = useState("");
  const doneRef = useRef<HTMLDivElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const values: Values = {};
    new FormData(form).forEach((value, key) => {
      values[key] = String(value);
    });
    const payload = { ...values, formType, sourcePage: window.location.pathname };

    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const found = fieldErrors(parsed.error);
      setErrors(found);
      setFormError("");
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setFormError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(data.errors ?? {});
        setFormError(data.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setDoneText(successText(values));
      setStatus("done");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() =>
        doneRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" }),
      );
    } catch {
      setFormError("We could not reach the server. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  return { errors, formError, status, doneText, doneRef, onSubmit };
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: (props: { id: string; name: string; "aria-invalid"?: true; "aria-describedby"?: string }) => ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children({ id, name, ...(error ? { "aria-invalid": true as const, "aria-describedby": errorId } : {}) })}
      {error ? (
        <span className="field-error" id={errorId} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

function Honeypot() {
  return (
    <div className="hp-field" aria-hidden="true">
      <label>
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

function Consent() {
  return (
    <p className="consent">
      By sending this form you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.
    </p>
  );
}

function InterestField({ error }: { error?: string }) {
  return (
    <Field label="I'm interested in" name="interest" error={error}>
      {(p) => (
        <select {...p} defaultValue={INTERESTS[0]}>
          {INTERESTS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
    </Field>
  );
}

const REMINDER = "Reminder: never share patient information outside a signed BAA.";

/* ---------- Contact strip form (end of every page) ---------- */
export function ContactForm() {
  const { errors, formError, status, doneText, doneRef, onSubmit } = useLeadForm(
    "contact",
    (v) =>
      `Thank you, ${v.name.trim()} — your request has been noted. We'll review your details and follow up at the contact you gave us to arrange your free audit or AI consultation. ${REMINDER}`,
  );
  const sent = status === "done";
  return (
    <form className="audit-form reveal-r" noValidate onSubmit={onSubmit}>
      <h3>Contact Us — send your request</h3>
      <p className="fsub">
        Takes about a minute. Practice / facility details only — please never send patient (PHI) information.
      </p>
      {formError ? (
        <div className="form-error" role="alert">
          {formError}
        </div>
      ) : null}
      <InterestField error={errors.interest} />
      <div className="frow">
        <Field label="Your Name *" name="name" error={errors.name}>
          {(p) => <input {...p} type="text" autoComplete="name" required placeholder="Dr. Jane Smith" />}
        </Field>
        <Field label="Practice / Facility Name *" name="practice" error={errors.practice}>
          {(p) => <input {...p} type="text" autoComplete="organization" required placeholder="Smith Family Medicine" />}
        </Field>
      </div>
      <Field label="Email or Phone *" name="contact" error={errors.contact}>
        {(p) => <input {...p} type="text" autoComplete="email" required placeholder="office@yourpractice.com" />}
      </Field>
      <Field label="Message" name="message" error={errors.message}>
        {(p) => (
          <textarea
            {...p}
            placeholder="Tell us what you need — denials, old A/R, a complete AI system for your hospital or clinic, research support, anything medical."
          />
        )}
      </Field>
      <Honeypot />
      <button className="btn btn-primary" type="submit" style={FULL_WIDTH} disabled={status !== "idle"}>
        {sent ? "Request Sent ✓" : status === "sending" ? "Sending…" : "Contact Us — Send Request"}
      </button>
      <Consent />
      <div className={`cs-done${sent ? " show" : ""}`} role="status" ref={doneRef}>
        <b>Thank you — your request has been noted.</b>
        <span className="cs-done-text">{doneText}</span>
      </div>
    </form>
  );
}

/* ---------- Audit / AI consultation form (Contact page) ---------- */
export function AuditForm() {
  const { errors, formError, status, doneText, doneRef, onSubmit } = useLeadForm("audit", (v) => {
    const interest = v.interest ?? INTERESTS[0];
    const nextStep = interest.startsWith("AI Services")
      ? "to arrange your free AI consultation"
      : interest.startsWith("Both")
        ? "to arrange your free billing audit and AI consultation"
        : interest.startsWith("Not sure")
          ? "to discuss what fits your practice best"
          : "to arrange your free billing audit";
    return `Thank you, ${v.name.trim()} — your request for ${v.practice.trim()} (${v.specialty} · ${interest}) has been noted. We'll follow up at ${v.contact.trim()} ${nextStep}. ${REMINDER}`;
  });
  const sent = status === "done";
  return (
    <form className="audit-form reveal-r" id="audit-form" noValidate onSubmit={onSubmit}>
      <h3>Request a Free Billing Audit or AI Consultation</h3>
      <p className="fsub">Practice details only — it takes about a minute.</p>
      {formError ? (
        <div className="form-error" role="alert">
          {formError}
        </div>
      ) : null}
      <InterestField error={errors.interest} />
      <div className="frow">
        <Field label="Your Name *" name="name" error={errors.name}>
          {(p) => <input {...p} type="text" autoComplete="name" required placeholder="Dr. Jane Smith" />}
        </Field>
        <Field label="Practice Name *" name="practice" error={errors.practice}>
          {(p) => <input {...p} type="text" autoComplete="organization" required placeholder="Smith Family Medicine" />}
        </Field>
      </div>
      <div className="frow">
        <Field label="Specialty *" name="specialty" error={errors.specialty}>
          {(p) => (
            <select {...p} required defaultValue="">
              <option value="">Select specialty…</option>
              {SPECIALTIES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Practice Email or Phone *" name="contact" error={errors.contact}>
          {(p) => <input {...p} type="text" autoComplete="email" required placeholder="office@yourpractice.com" />}
        </Field>
      </div>
      <Field label="Message" name="message" error={errors.message}>
        {(p) => (
          <textarea
            {...p}
            placeholder="Tell us your biggest headache — denials, old A/R, missed calls, scheduling, staffing, anything."
          />
        )}
      </Field>
      <div className="phi">
        <PhiIcon />
        <span>
          <b>Please do not send patient / PHI information through this form.</b> Practice and billing questions only —
          patient details are never needed for an audit request.
        </span>
      </div>
      <Honeypot />
      <button className="btn btn-primary" type="submit" style={FULL_WIDTH} disabled={status !== "idle"}>
        {sent ? "Request Sent ✓" : status === "sending" ? "Sending…" : "Request Free Audit / AI Consultation"}
      </button>
      <Consent />
      <div
        className={`form-done${sent ? " show" : ""}`}
        id="formDone"
        role="status"
        ref={doneRef}
        style={{ marginTop: 14 }}
      >
        <b>Thank you — your request has been noted.</b>
        <span id="formDoneText">{doneText}</span>
      </div>
    </form>
  );
}

/* ---------- Pricing quote form (Home and Pricing) ---------- */
export function PricingForm() {
  const { errors, formError, status, doneText, doneRef, onSubmit } = useLeadForm("pricing", (v) => {
    const amount = parseFloat(v.collections);
    const collections = Number.isNaN(amount) ? "" : ` of $${amount.toLocaleString("en-US")} in monthly collections`;
    const name = v.name?.trim() ? `, ${v.name.trim()}` : "";
    return `Thank you${name} — your pricing request${collections} has been noted. We'll review your practice details and send your custom quote — priced as a percentage of collections, so you only pay when you get paid. ${REMINDER}`;
  });
  const sent = status === "done";
  return (
    <form className="audit-form reveal-r" noValidate onSubmit={onSubmit}>
      <h3>Get Your Custom Pricing Quote</h3>
      <p className="fsub">
        Tiered rates based on your monthly collections: 4.99% up to $50,000, 3.99% from $50,000–$150,000, and 2.99% over
        $150,000 — and you only pay when you get paid. Tell us your collections and we&apos;ll confirm your tier and
        exact rate in writing.
      </p>
      {formError ? (
        <div className="form-error" role="alert">
          {formError}
        </div>
      ) : null}
      <div className="frow">
        <Field label="Practice Type *" name="ptype" error={errors.ptype}>
          {(p) => (
            <select {...p} required defaultValue="">
              <option value="">Select practice type…</option>
              {PRACTICE_TYPES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Practice Name *" name="practice" error={errors.practice}>
          {(p) => <input {...p} type="text" autoComplete="organization" required placeholder="Smith Family Medicine" />}
        </Field>
      </div>
      <div className="frow">
        <Field label="Your Name *" name="name" error={errors.name}>
          {(p) => <input {...p} type="text" autoComplete="name" required placeholder="Dr. Jane Smith" />}
        </Field>
        <Field label="Monthly Collections (USD) *" name="collections" error={errors.collections}>
          {(p) => <input {...p} type="number" min={0} step="any" inputMode="numeric" required placeholder="e.g. 85000" />}
        </Field>
      </div>
      <div className="frow">
        <Field label="Email *" name="email" error={errors.email}>
          {(p) => <input {...p} type="email" autoComplete="email" required placeholder="office@yourpractice.com" />}
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          {(p) => <input {...p} type="tel" autoComplete="tel" placeholder="(555) 010-2030" />}
        </Field>
      </div>
      <Field label="Message" name="message" error={errors.message}>
        {(p) => (
          <textarea
            {...p}
            placeholder="Anything we should know — specialty, number of providers, current billing situation, biggest headache."
          />
        )}
      </Field>
      <div className="phi">
        <PhiIcon />
        <span>
          <b>Please do not send patient / PHI information through this form.</b> Practice and collections figures only.
        </span>
      </div>
      <Honeypot />
      <button className="btn btn-primary" type="submit" style={FULL_WIDTH} disabled={status !== "idle"}>
        {sent ? "Quote Requested ✓" : status === "sending" ? "Sending…" : "Get My Custom Quote"}
      </button>
      <Consent />
      <div className={`cs-done${sent ? " show" : ""}`} role="status" ref={doneRef}>
        <b>Thank you — your pricing request has been noted.</b>
        <span className="cs-done-text">{doneText}</span>
      </div>
    </form>
  );
}
