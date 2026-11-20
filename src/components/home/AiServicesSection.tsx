import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

/**
 * Home page AI Services section (added at the team lead's request: AI Services must be
 * introduced on the home page, not only linked from it). Uses the same service-card
 * design as the AI Services hub so the two pages stay visually identical.
 */
type Capability = { num: string; title: string; text: string; href: string; icon: ReactNode };

const CAPABILITIES: Capability[] = [
  {
    num: "AI · 01",
    title: "Complete AI Hospital Management",
    text: "Front desk, patients, departments and administration — connected and run through one AI system designed around how your hospital actually works.",
    href: "/ai-services/hospital-management",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M12 8v4M10 10h4" /></svg>
    ),
  },
  {
    num: "AI · 02",
    title: "AI Clinic Management",
    text: "A single clinic or a whole group of clinics — managed together from one AI system, with the same standards, visibility and patient experience at every location.",
    href: "/ai-services/clinic-management",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V10M20 21V10M2 21h20" /><path d="M12 3v4M10 5h4" /><path d="M9 21v-4a3 3 0 0 1 6 0v4" /></svg>
    ),
  },
  {
    num: "AI · 03",
    title: "Medical Research & Data",
    text: "Medical research, data analysis, reports and insights through AI — turning the data your facility already holds into decisions, publications and improvements.",
    href: "/ai-services/research-and-data",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></svg>
    ),
  },
  {
    num: "AI · 04",
    title: "Patient Journey Automation",
    text: "From the patient's first inquiry to their appointment to treatment follow-up — the entire journey automated as one connected flow, so no patient is lost between steps.",
    href: "/ai-services/patient-journey",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="2.2" /><circle cx="12" cy="12" r="2.2" /><circle cx="19" cy="12" r="2.2" /><path d="M7.2 12h2.6M14.2 12h2.6" /></svg>
    ),
  },
  {
    num: "AI · 05",
    title: "Hospital Operations & Administration",
    text: "Staff workflows, records, documents and reporting — the everyday manual work of running a facility, moved to AI so your people can do the work only people can do.",
    href: "/ai-services/operations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v5M16 4v5" /><path d="M7 14h4M7 17h7" /></svg>
    ),
  },
  {
    num: "AI · 06",
    title: "Custom AI Solutions for Healthcare",
    text: "Don't see what you need? Any medical-related AI service — for a hospital, a medical centre, a clinic or a research team — designed and built around your exact requirement.",
    href: "/ai-services/custom",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9zM4 10H2M4 15H2M22 10h-2M22 15h-2M10 4V2M15 4V2M10 22v-2M15 22v-2" /></svg>
    ),
  },
];

const ARROW = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function AiServicesSection() {
  return (
    <section className="section" style={{ paddingTop: "56px" }} aria-labelledby="home-ai-title">
      <div className="wrap">
        <div className="sec-head center reveal">
          <p className="kicker">AI Services · Separate from Medical Billing</p>
          <h2 id="home-ai-title">Complete AI systems for healthcare — from a single clinic to a full hospital</h2>
          <p>
            Our second, separate service line. We design, build and run connected AI systems for hospitals, medical
            centres, clinics and practices — take AI Services on their own, or alongside Medical Billing.
          </p>
        </div>
        <div className="svc-grid">
          {CAPABILITIES.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="svc reveal"
              style={{ "--d": `${(i * 0.06).toFixed(2)}s` } as CSSProperties}
            >
              <span className="snum">{item.num}</span>
              <div className="sic">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="detail-link">View this AI service {ARROW}</span>
            </Link>
          ))}
        </div>
        <p className="ai-home-note reveal">
          <b>Human oversight, HIPAA-conscious by design.</b> AI handles the routine; your doctors and staff keep control
          of clinical and sensitive decisions.
        </p>
        <div className="ai-home-ctas reveal">
          <Link href="/ai-services" className="btn btn-primary">
            Explore AI Services
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Book a Free AI Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
