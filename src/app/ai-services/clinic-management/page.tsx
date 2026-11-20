import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ai-clinic");

export default function AiClinicPage() {
  return (
    <>
<div className="page active" data-page="ai-clinic">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/ai-services">{"AI Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"AI Clinic Management"}</span></nav>
<p className="kicker">{"AI Services · Service Detail"}</p>
<h1>{"AI Clinic Management — "}<span className="hl">{"one clinic, or many, in one AI system"}</span></h1>
<p className="lede">{"A single clinic or a whole group of clinics — managed together from one AI system, with the same standards, visibility and patient experience at every location."}</p>
<div className="hero-ctas-row">
<Link href="/contact" className="btn btn-glow">{"Book a Free AI Consultation"}</Link>{" "}
<Link href="/ai-services" className="btn btn-ghost">{"Back to AI Services"}</Link>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"What this service is"}</p>
<h2>{"AI Clinic Management — explained plainly"}</h2>
<p>{"AI Clinic Management brings a clinic's daily running — patients, appointments, records, staff workflows and administration — into one AI system. For groups, every clinic runs on the same system, so owners and managers see and manage all locations together instead of juggling separate tools and reports per clinic."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Less admin per clinic, consistent patient experience across locations, and one clear view of the whole group — without adding management headcount as you grow."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Single clinics that want hospital-grade organisation, and clinic groups or chains that need every branch managed together, consistently."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How AI Clinic Management works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once the service is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Daily running in one system"}</b><p>{"Patient flow, scheduling, records and routine administration are handled inside one AI system built around your clinic's day."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Many clinics, one view"}</b><p>{"Each location runs on the same system; group leadership sees performance, workload and patient flow across all clinics together."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Grows with you"}</b><p>{"Adding a doctor, a service or a whole new clinic means extending the same system — not starting again with new tools."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in AI Clinic Management"}</h2>
<p>{"Everything listed here is part of the service — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Complete AI system for one clinic or a clinic group"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Patient flow and daily clinic operations covered"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Multi-clinic management from a single system"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Records, documents and administration handled by AI"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Group-wide reporting and visibility"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Staff training and ongoing support as you grow"}</span></li></ul></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="ai-process reveal">
<h3>{"The process — step by step"}</h3>
<p>{"From first conversation to a running service, in order. You approve each step before the next one begins."}</p>
<div className="ai-steps"><div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Free AI Consultation"}</b><p>{"We walk through how your facility runs today — departments, patient flow, records and admin — and where a complete AI system helps most."}</p></div><div className="ai-step"><span className="n">{"Step 2"}</span><b>{"Written AI Plan & Quote"}</b><p>{"You receive a written plan: what the system will cover, what it connects to, the timeline, and the exact price."}</p></div><div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Build & Connect"}</b><p>{"We build the system around your facility and connect it to the software and workflows you already use."}</p></div><div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Test With Your Team"}</b><p>{"Your staff test real scenarios with us. We refine everything together before anything goes live."}</p></div><div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Go Live & Training"}</b><p>{"Launch with hands-on training and simple guides, so every team member knows what the system handles."}</p></div><div className="ai-step"><span className="n">{"Step 6"}</span><b>{"Run, Support & Improve"}</b><p>{"We run and monitor the system with you, review performance regularly, and keep improving it as your facility grows."}</p></div></div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-primary">{"Book a Free AI Consultation"}</Link>{" "}
<span className="note">{"Questions about this service? Contact us below — we'll scope it on a free call and quote it in writing."}</span>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Talk to us about AI Clinic Management"}</h2>
<p className="cs-lede">{"One clinic or several — book a free AI consultation and we'll map, in writing, how one AI system would run your clinic or your whole group."}</p>
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

    </>
  );
}
