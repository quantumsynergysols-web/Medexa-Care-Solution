import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ai-custom");

export default function AiCustomPage() {
  return (
    <>
<div className="page active" data-page="ai-custom">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/ai-services">{"AI Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"Custom AI Solutions for Healthcare"}</span></nav>
<p className="kicker">{"AI Services · Service Detail"}</p>
<h1>{"Custom AI Solutions — "}<span className="hl">{"if it's medical and it's AI, we can build it"}</span></h1>
<p className="lede">{"Don't see what you need? Any medical-related AI service — for a hospital, a medical centre, a clinic or a research team — designed and built around your exact requirement."}</p>
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
<h2>{"Custom AI Solutions for Healthcare — explained plainly"}</h2>
<p>{"Every facility has needs no standard list covers: a specific department, a unique workflow, a research idea, a new service line. Custom AI Solutions is our open door for exactly that. If it is medical and it is AI, we will design it, build it and run it with you — scoped honestly, quoted in writing, and tested with your team before it goes live."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"You are not limited to a menu. You get an AI system shaped around your facility's actual problem — with the same discipline as our standard services: written plan, staged build, staff testing, training and ongoing support."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Any healthcare organisation with a medical AI requirement that doesn't fit a standard category — from a single department to a whole new service."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Custom AI Solutions for Healthcare works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once the service is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Start with the problem"}</b><p>{"You describe what you need in plain words — a bottleneck, an idea, a service you want to offer. No technical knowledge needed."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"We design the solution"}</b><p>{"You receive a written plan: what will be built, how it fits your facility, what it connects to, timeline and exact price."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Built, tested, run with you"}</b><p>{"We build it, test it with your staff on real scenarios, train your team, and keep improving it after launch."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Custom AI Solutions for Healthcare"}</h2>
<p>{"Everything listed here is part of the service — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Any medical-related AI requirement considered"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Solution designed around your facility, not a template"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Written plan and exact quote before any build"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Built and connected to your existing systems"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Tested with your staff before go-live"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Training, support and ongoing improvement included"}</span></li></ul></div>
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
<h2>{"Tell us what you need built"}</h2>
<p className="cs-lede">{"If it's medical and it's AI — we can build it. Contact us, describe it in your own words, and we'll respond with a written plan and an exact quote."}</p>
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
