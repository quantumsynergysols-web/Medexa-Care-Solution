import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ai-hospital");

export default function AiHospitalPage() {
  return (
    <>
<div className="page active" data-page="ai-hospital">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/ai-services">{"AI Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"Complete AI Hospital Management"}</span></nav>
<p className="kicker">{"AI Services · Service Detail"}</p>
<h1>{"Complete AI Hospital Management — "}<span className="hl">{"a whole hospital, run as one AI system"}</span></h1>
<p className="lede">{"Front desk, patients, departments and administration — connected and run through one AI system designed around how your hospital actually works."}</p>
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
<h2>{"Complete AI Hospital Management — explained plainly"}</h2>
<p>{"Complete AI Hospital Management means we design, build and run an AI system that covers the whole hospital — not a single tool for a single desk. Patient flow, department coordination, records, documents and administration are connected in one system, so information moves on its own instead of being carried, copied and chased by your staff."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Your hospital runs with less manual coordination, fewer delays between departments, and leadership visibility across the whole facility — while your clinical team keeps full control of every clinical decision."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Hospitals of any size that want their front desk, departments and administration working as one connected operation instead of disconnected manual processes."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Complete AI Hospital Management works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once the service is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"One system across the hospital"}</b><p>{"Front desk, departments and administration work inside one connected AI system — a patient, a record or a task never has to be re-entered or chased between desks."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Departments coordinated automatically"}</b><p>{"Handovers, requests and routine coordination between departments are handled by the system, with staff stepping in where judgement is needed."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Leadership sees the whole picture"}</b><p>{"Management reporting is generated from live operational data — patient flow, workload and bottlenecks visible without manual report-building."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Complete AI Hospital Management"}</h2>
<p>{"Everything listed here is part of the service — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Whole-hospital AI system design, build and operation"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Front desk and patient flow covered end to end"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Department coordination inside one connected system"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Records, documents and administration handled by the system"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Management reporting and operational visibility"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Staff training, human oversight and ongoing improvement"}</span></li></ul></div>
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
<h2>{"Talk to us about running your hospital with AI"}</h2>
<p className="cs-lede">{"Book a free AI consultation — we'll walk through how your hospital runs today and show you, in a written plan, what a complete AI system would cover."}</p>
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
