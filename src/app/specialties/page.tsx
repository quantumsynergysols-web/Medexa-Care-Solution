import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import SpecialtyFx from "@/components/fx/SpecialtyFx";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("specialties");

export default function SpecialtiesPage() {
  return (
    <>
<div className="page active" data-page="specialties">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"Specialties"}</span></nav>
<p className="kicker">{"Specialties We Serve"}</p>
<h1>{"Billing that speaks "}<span className="hl">{"your specialty's language"}</span></h1>
<p className="lede">{"Every specialty has its own codes, modifiers, and payer quirks. We match our coding and denial work to the rules of yours — search below to find yours."}</p>
<div className="hero-chips">
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"12 specialties covered"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Specialty-matched coding"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Solo to multi-provider groups"}</span>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="spec-tools reveal">
<div className="spec-search">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>{" "}
<input type="search" id="specSearch" placeholder="Search specialties — try “cardio”, “therapy”, “peds”…" aria-label="Search specialties" />
</div>
<span className="spec-count" id="specCount">{"Showing 12 of 12 specialties"}</span>
</div>
<div className="spec-grid" id="specGrid">
<div className="spec reveal" data-name="family medicine primary care"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg></span><h3>{"Family Medicine"}</h3></div><p>{"High-volume E/M billing, preventive-visit coding and chronic-care management — handled with the payer mix family practices actually face."}</p><div className="tags"><span>{"E/M coding"}</span><span>{"Preventive visits"}</span><span>{"CCM"}</span></div></div>
<div className="spec reveal" data-name="internal medicine internist"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span><h3>{"Internal Medicine"}</h3></div><p>{"Complex multi-problem visits, hospital and office coding, and careful medical-necessity documentation support for internists."}</p><div className="tags"><span>{"Complex E/M"}</span><span>{"Inpatient"}</span><span>{"Medical necessity"}</span></div></div>
<div className="spec reveal" data-name="pediatrics children kids peds"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" /></svg></span><h3>{"Pediatrics"}</h3></div><p>{"Well-child visits, immunization billing and age-based coding — including the vaccine administration rules that trip up general billers."}</p><div className="tags"><span>{"Well-child"}</span><span>{"Immunizations"}</span><span>{"Age-based coding"}</span></div></div>
<div className="spec reveal" data-name="cardiology heart cardio"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg></span><h3>{"Cardiology"}</h3></div><p>{"Echo, stress testing, cath-lab and device-check billing with the modifier and bundling rules cardiology claims live or die by."}</p><div className="tags"><span>{"Diagnostics"}</span><span>{"Modifiers"}</span><span>{"Device checks"}</span></div></div>
<div className="spec reveal" data-name="orthopedics ortho surgery bone"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /></svg></span><h3>{"Orthopedics"}</h3></div><p>{"Surgical global periods, fracture care, injections and DME — with global-period tracking so post-op visits bill correctly."}</p><div className="tags"><span>{"Surgical globals"}</span><span>{"Fracture care"}</span><span>{"Injections"}</span></div></div>
<div className="spec reveal" data-name="dermatology skin derm"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l2.5 2.5" /></svg></span><h3>{"Dermatology"}</h3></div><p>{"Biopsies, excisions, Mohs support and cosmetic-vs-medical separation — coded so medical claims don't get tangled with elective work."}</p><div className="tags"><span>{"Procedures"}</span><span>{"Pathology"}</span><span>{"Medical vs cosmetic"}</span></div></div>
<div className="spec reveal" data-name="behavioral health mental health therapy psychiatry counseling"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span><h3>{"Behavioral Health / Mental Health"}</h3></div><p>{"Session-based billing, telehealth modifiers and authorization tracking — the details behavioral health claims are most often denied for."}</p><div className="tags"><span>{"Telehealth"}</span><span>{"Session billing"}</span><span>{"Authorizations"}</span></div></div>
<div className="spec reveal" data-name="physical therapy pt rehab"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" /></svg></span><h3>{"Physical Therapy"}</h3></div><p>{"Unit-based billing, visit-cap tracking and KX-threshold monitoring, so therapy claims stay compliant and paid through the full plan of care."}</p><div className="tags"><span>{"Timed units"}</span><span>{"Visit caps"}</span><span>{"KX modifier"}</span></div></div>
<div className="spec reveal" data-name="urgent care walk in"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span><h3>{"Urgent Care"}</h3></div><p>{"High-volume, same-day billing with place-of-service accuracy and rapid eligibility checks built for walk-in pace."}</p><div className="tags"><span>{"Same-day billing"}</span><span>{"POS accuracy"}</span><span>{"Fast eligibility"}</span></div></div>
<div className="spec reveal" data-name="gastroenterology gi gastro endoscopy"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg></span><h3>{"Gastroenterology"}</h3></div><p>{"Endoscopy and screening-colonoscopy coding with screening-vs-diagnostic rules applied correctly the first time."}</p><div className="tags"><span>{"Endoscopy"}</span><span>{"Screening rules"}</span><span>{"Sedation"}</span></div></div>
<div className="spec reveal" data-name="nephrology kidney dialysis"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><circle cx="12" cy="12" r="4" /></svg></span><h3>{"Nephrology"}</h3></div><p>{"Monthly dialysis capitation, CKD visit coding and hospital dialysis billing — handled on the monthly rhythm nephrology runs on."}</p><div className="tags"><span>{"Dialysis MCP"}</span><span>{"CKD visits"}</span><span>{"Hospital rounds"}</span></div></div>
<div className="spec reveal" data-name="pain management pain"><div className="stop"><span className="sic2"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg></span><h3>{"Pain Management"}</h3></div><p>{"Injection and procedure billing, drug-screen coding and prior-auth support for the procedures payers scrutinize most."}</p><div className="tags"><span>{"Injections"}</span><span>{"Drug screens"}</span><span>{"Prior auth"}</span></div></div>
</div>
<div className="spec-empty" id="specEmpty">{"No specialty matches that search. "}<Link href="/contact" style={{ fontWeight: "700" } as CSSProperties}>{"Ask us directly"}</Link>{" — if we aren't the right fit for your specialty, we'll tell you honestly."}</div>
<p className="reveal" style={{ margin: "24px 0 0", color: "var(--muted)", fontSize: "16px" } as CSSProperties}>{"Don't see yours? "}<Link href="/contact" style={{ fontWeight: "700" } as CSSProperties}>{"Ask us"}</Link>{" — if we aren't the right fit for your specialty, we'll tell you honestly."}</p>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Don't see your specialty? Contact us"}</h2>
<p className="cs-lede">{"Ask us directly — if we're not the right fit for your specialty, we'll tell you honestly. Start with the free audit and find out where your revenue stands."}</p>
<div className="contact-points">
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Free first step"}</b>{" — a free billing audit or a free AI consultation, with written findings."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Exact quote in writing"}</b>{" — before any work begins, with no obligation to proceed."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"BAA before PHI"}</b>{" — signed before any patient information is ever accessed."}</span></div>
</div>
<div style={{ marginTop: "22px", display: "flex", gap: "12px", flexWrap: "wrap" } as CSSProperties}><Link href="/contact" className="btn btn-ghost">{"Open the Full Contact Page"}</Link></div>
</div>
<ContactForm />
</div>
</section>
</div>
<SpecialtyFx />
    </>
  );
}
