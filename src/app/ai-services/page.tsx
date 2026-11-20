import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ai-services");

export default function AiServicesPage() {
  return (
    <>
<div className="page active" data-page="ai-services">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"AI Services"}</span></nav>
<p className="kicker">{"AI Services · Separate from Medical Billing"}</p>
<h1>{"From a single clinic to a full hospital — "}<span className="hl">{"we design, build and run complete AI systems for healthcare."}</span></h1>
<p className="lede">{"This is our second, separate service line. Medical Billing lives on its own page — here, AI Services stand on their own. We don't sell one-off tools. We build complete, connected AI systems for hospitals, medical centres, clinics and practices — systems that can run a whole facility. Take either service on its own, or both — they are scoped, priced and delivered separately."}</p>
<div className="hero-stats">
<div className="hstat"><b>{"6"}</b><span>{"Capability areas"}</span></div>
<div className="hstat"><b>{"1"}</b><span>{"Connected AI system"}</span></div>
<div className="hstat"><b>{"4"}</b><span>{"Facility types served"}</span></div>
<div className="hstat"><b>{"6"}<em>{"-step"}</em></b><span>{"Guided rollout"}</span></div>
</div>
<div className="hero-ctas-row">
<Link href="/contact" className="btn btn-glow">{"Book a Free AI Consultation"}</Link>{" "}
<Link href="/services" className="btn btn-ghost">{"See Medical Billing Instead"}</Link>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"AI Services · What we do"}</p>
<h2>{"Complete AI systems for healthcare — in six capabilities"}</h2>
<p>{"From a single clinic to a full hospital — we design, build and run complete AI systems for healthcare. We don't list dozens of small tools. Below are the six capability areas we work in: open any one to see exactly what it is, how it works, what's included and the step-by-step process. And if what you need isn't listed — if it's medical and it's AI, we can build it."}</p>
</div>
<div className="svc-grid"><div className="svc reveal" style={{ "--d": "0.00s" } as CSSProperties}><span className="snum">{"AI · 01"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M12 8v4M10 10h4" /></svg></div><h3>{"Complete AI Hospital Management"}</h3><p>{"Front desk, patients, departments and administration — connected and run through one AI system designed around how your hospital actually works."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Whole-hospital AI system design, build and operation"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Front desk and patient flow covered end to end"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Department coordination inside one connected system"}</li></ul><Link href="/ai-services/hospital-management" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div><div className="svc reveal" style={{ "--d": "0.08s" } as CSSProperties}><span className="snum">{"AI · 02"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V10M20 21V10M2 21h20" /><path d="M12 3v4M10 5h4" /><path d="M9 21v-4a3 3 0 0 1 6 0v4" /></svg></div><h3>{"AI Clinic Management"}</h3><p>{"A single clinic or a whole group of clinics — managed together from one AI system, with the same standards, visibility and patient experience at every location."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Complete AI system for one clinic or a clinic group"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Patient flow and daily clinic operations covered"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Multi-clinic management from a single system"}</li></ul><Link href="/ai-services/clinic-management" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div><div className="svc reveal" style={{ "--d": "0.16s" } as CSSProperties}><span className="snum">{"AI · 03"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></svg></div><h3>{"Medical Research & Data"}</h3><p>{"Medical research, data analysis, reports and insights through AI — turning the data your facility already holds into decisions, publications and improvements."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Medical research support powered by AI"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Clinical and operational data analysis"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Outcome and cohort analysis from your own data"}</li></ul><Link href="/ai-services/research-and-data" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div><div className="svc reveal" style={{ "--d": "0.00s" } as CSSProperties}><span className="snum">{"AI · 04"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="2.2" /><circle cx="12" cy="12" r="2.2" /><circle cx="19" cy="12" r="2.2" /><path d="M7.2 12h2.6M14.2 12h2.6" /></svg></div><h3>{"Patient Journey Automation"}</h3><p>{"From the patient's first inquiry to their appointment to treatment follow-up — the entire journey automated as one connected flow, so no patient is lost between steps."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Complete patient journey mapped and automated"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Inquiry-to-appointment flow covered end to end"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Pre-visit preparation for patients and staff"}</li></ul><Link href="/ai-services/patient-journey" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div><div className="svc reveal" style={{ "--d": "0.08s" } as CSSProperties}><span className="snum">{"AI · 05"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v5M16 4v5" /><path d="M7 14h4M7 17h7" /></svg></div><h3>{"Hospital Operations & Administration"}</h3><p>{"Staff workflows, records, documents and reporting — the everyday manual work of running a facility, moved to AI so your people can do the work only people can do."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Staff workflow automation across departments"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Records and document handling by AI"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Forms and routine paperwork automated"}</li></ul><Link href="/ai-services/operations" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div><div className="svc reveal" style={{ "--d": "0.16s" } as CSSProperties}><span className="snum">{"AI · 06"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9zM4 10H2M4 15H2M22 10h-2M22 15h-2M10 4V2M15 4V2M10 22v-2M15 22v-2" /></svg></div><h3>{"Custom AI Solutions for Healthcare"}</h3><p>{"Don't see what you need? Any medical-related AI service — for a hospital, a medical centre, a clinic or a research team — designed and built around your exact requirement."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Any medical-related AI requirement considered"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Solution designed around your facility, not a template"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Written plan and exact quote before any build"}</li></ul><Link href="/ai-services/custom" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div></div>
<div className="ai-note reveal">
<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg>{" "}
<span><b>{"Human oversight, HIPAA-conscious by design."}</b>{" AI handles the routine; your doctors and staff keep control of clinical and sensitive decisions. Access is scoped to what's needed, and patient data is never used outside the agreed workflow."}</span>
</div>
<div style={{ height: "44px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"Who these AI services are for"}</p>
<h2>{"Built for every kind of medical facility"}</h2>
<p>{"The same complete AI systems, sized to your facility — a single clinic does not get a hospital-sized project, and a hospital does not get a one-size tool. Each capability above has its own detail page explaining exactly how it works."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal">
<h3>{"Hospitals"}</h3>
<p>{"High call volumes, multiple departments and round-the-clock patient contact."}</p>
<ul className="check-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Whole-hospital system"}</b>{" — front desk, departments and administration in one connected system."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Departments coordinated"}</b>{" — patient flow and handovers handled across the hospital."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Full patient journey"}</b>{" — from first inquiry to treatment follow-up, connected."}</span></li>
</ul>
</div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}>
<h3>{"Medical Centres"}</h3>
<p>{"Multi-specialty centres where patients, doctors and services all meet in one place."}</p>
<ul className="check-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"One system for the centre"}</b>{" — every specialty and service line managed together."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Operations handled by AI"}</b>{" — records, documents and reporting across departments."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Research & data ready"}</b>{" — your centre's data analysed for decisions and reporting."}</span></li>
</ul>
</div>
<div className="detail-card reveal">
<h3>{"Clinics & Group Practices"}</h3>
<p>{"Busy clinics that lose patients to missed calls and manual admin."}</p>
<ul className="check-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Complete clinic system"}</b>{" — the clinic's daily running managed by one AI system."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Patient journey covered"}</b>{" — inquiry to appointment to follow-up, with no gaps."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Admin moved to AI"}</b>{" — records, documents and routine work off your staff's desks."}</span></li>
</ul>
</div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}>
<h3>{"Independent Practices"}</h3>
<p>{"Solo and small practices that need hospital-grade automation without hospital-grade cost or complexity."}</p>
<ul className="check-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Start with one capability"}</b>{" — clinic management or patient journey is usually first."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Built around your practice"}</b>{" — designed for how your facility already runs."}</span></li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Grow into the full system"}</b>{" — add capabilities as separate, optional projects."}</span></li>
</ul>
</div>
</div>
<div className="closing-line reveal">
<h3>{"Don't see what you need? "}<em>{"If it's medical and it's AI — we can build it."}</em></h3>
<p>{"Tell us what your hospital, medical centre or clinic needs — even if it isn't in the six capabilities above. We design, build and run custom AI for healthcare."}</p>
<Link href="/ai-services/custom" className="btn btn-glow">{"See Custom AI Solutions"}</Link>{" "}
<Link href="/contact" className="btn btn-white" style={{ marginLeft: "10px" } as CSSProperties}>{"Contact Us"}</Link>
</div>
<div className="integrate-bar reveal">
<h3>{"Your complete AI system, connected to the tools you already use"}</h3>
<p>{"A complete system only works if it talks to your existing stack. We connect it to:"}</p>
<div className="int-chips"><span>{"Your EHR"}</span><span>{"Hospital / Practice Management Software"}</span><span>{"Google Calendar"}</span><span>{"Phone / VoIP Systems"}</span><span>{"WhatsApp"}</span><span>{"Your Website"}</span><span>{"CRM"}</span><span>{"Clearinghouse"}</span><span>{"Email & SMS"}</span></div>
</div>
<div className="ai-process reveal">
<h3>{"How an AI Services project runs"}</h3>
<p>{"A clear, staged rollout — you approve each step before we build the next, and your team is trained before anything goes live."}</p>
<div className="ai-steps">
<div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Discovery Call"}</b><p>{"We map how your whole facility runs — departments, patient flow, records and administration — to design your complete AI system."}</p></div>
<div className="ai-step"><span className="n">{"Step 2"}</span><b>{"AI Plan & Quote"}</b><p>{"You get a written plan: which capabilities your system will cover, what it connects to, timeline, and exact price."}</p></div>
<div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Build & Connect"}</b><p>{"We build your complete AI system and connect it to your existing software and workflows."}</p></div>
<div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Test With Your Team"}</b><p>{"Real scenarios tested with your staff — scripts, routing, and handoffs refined before launch."}</p></div>
<div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Go Live & Training"}</b><p>{"Launch with team training and simple guides, so everyone knows what the AI handles — and what it doesn't."}</p></div>
<div className="ai-step"><span className="n">{"Step 6"}</span><b>{"Support & Optimization"}</b><p>{"We run and monitor your system with you, review performance, and keep improving coverage."}</p></div>
</div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-primary">{"Book a Free AI Consultation"}</Link>{" "}
<span className="note">{"AI Services only, Medical Billing only, or both as separate projects — tell us what you need in the form and we'll scope it on the call."}</span>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Book your free AI consultation"}</h2>
<p className="cs-lede">{"Tell us about your hospital, medical centre or clinic — we'll map how it runs today and show you, in a written plan, what a complete AI system would cover. If it's medical and it's AI, we can build it."}</p>
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
