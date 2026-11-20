import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("ai-research");

export default function AiResearchPage() {
  return (
    <>
<div className="page active" data-page="ai-research">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/ai-services">{"AI Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"Medical Research & Data"}</span></nav>
<p className="kicker">{"AI Services · Service Detail"}</p>
<h1>{"Medical Research & Data — "}<span className="hl">{"answers from your medical data, faster"}</span></h1>
<p className="lede">{"Medical research, data analysis, reports and insights through AI — turning the data your facility already holds into decisions, publications and improvements."}</p>
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
<h2>{"Medical Research & Data — explained plainly"}</h2>
<p>{"Hospitals and medical centres sit on years of valuable data — patient outcomes, operational records, studies and reports — that is too large and too messy to analyse by hand. Our Medical Research & Data service uses AI to organise, analyse and summarise that data: research support, cohort and outcome analysis, literature and evidence summaries, and clear reports your team can act on."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Research and reporting that would take weeks of manual work are delivered in days, and leadership decisions are based on your own facility's real data — analysed properly, not guessed from samples."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Hospitals, medical centres, research-minded clinics and healthcare organisations that need research support, data analysis or regular insight reporting."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Medical Research & Data works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once the service is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Data organised first"}</b><p>{"We structure your facility's data — records, outcomes, operational data — so it can actually be analysed, with access scoped and controlled."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"AI analysis, human review"}</b><p>{"AI performs the heavy analysis — patterns, comparisons, summaries — and every output is reviewed with your team before it is used."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Reports people can use"}</b><p>{"Findings are delivered as clear reports and insights, written for clinicians and decision-makers — not raw data dumps."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Medical Research & Data"}</h2>
<p>{"Everything listed here is part of the service — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Medical research support powered by AI"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Clinical and operational data analysis"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Outcome and cohort analysis from your own data"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Literature and evidence summaries for research teams"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Management reports and insight dashboards"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Ongoing research and reporting support"}</span></li></ul></div>
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
<h2>{"Talk to us about Medical Research & Data"}</h2>
<p className="cs-lede">{"Have a research question or data you can't analyse by hand? Contact us — the free AI consultation maps what your data can answer."}</p>
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
