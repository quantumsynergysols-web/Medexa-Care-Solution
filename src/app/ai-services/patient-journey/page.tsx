import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ai-journey");

export default function AiJourneyPage() {
  return (
    <>
<div className="page active" data-page="ai-journey">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/ai-services">{"AI Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"Patient Journey Automation"}</span></nav>
<p className="kicker">{"AI Services · Service Detail"}</p>
<h1>{"Patient Journey Automation — "}<span className="hl">{"the whole journey, handled"}</span></h1>
<p className="lede">{"From the patient's first inquiry to their appointment to treatment follow-up — the entire journey automated as one connected flow, so no patient is lost between steps."}</p>
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
<h2>{"Patient Journey Automation — explained plainly"}</h2>
<p>{"A patient passes through many steps: first inquiry, booking, preparation, the visit itself, treatment, follow-up and review. Patients are lost in the gaps between those steps — an unanswered inquiry, a forgotten follow-up, a missed recall. Patient Journey Automation connects the whole journey into one automated flow, with your staff stepping in personally wherever a human touch matters."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"More inquiries become appointments, fewer patients disappear after the first visit, and follow-up and recalls happen reliably — without your team manually chasing every step."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Hospitals, medical centres and clinics that lose patients between inquiry, appointment and follow-up — or whose follow-up depends entirely on staff memory."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Patient Journey Automation works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once the service is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"First inquiry to appointment"}</b><p>{"Every inquiry is answered and guided toward a booked appointment — no enquiry sits unanswered overnight or over a weekend."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Visit preparation handled"}</b><p>{"Patients arrive prepared: their details collected, their questions answered, and your team ready — because the system prepared both sides."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Follow-up that never forgets"}</b><p>{"After treatment, follow-up, recalls and check-ins run automatically on the right schedule for each patient — reliably, every time."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Patient Journey Automation"}</h2>
<p>{"Everything listed here is part of the service — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Complete patient journey mapped and automated"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Inquiry-to-appointment flow covered end to end"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Pre-visit preparation for patients and staff"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Post-treatment follow-up automation"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Recall and review flows that run on schedule"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Human handover at every sensitive or clinical step"}</span></li></ul></div>
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
<h2>{"Talk to us about Patient Journey Automation"}</h2>
<p className="cs-lede">{"Where do patients drop off in your facility? Book a free AI consultation — we'll map your patient journey and show where automation recovers them."}</p>
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
