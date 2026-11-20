import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("sol-platform");

export default function SolPlatformPage() {
  return (
    <>
<div className="page active" data-page="sol-platform">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/solutions">{"Solutions"}</Link><span className="sep">{"/"}</span><span className="cur">{"Medexa Billing Platform"}</span></nav>
<p className="kicker">{"Solutions · Platform"}</p>
<h1>{"Medexa Billing Platform — "}<span className="hl">{"your revenue cycle, in one view"}</span></h1>
<p className="lede">{"The working platform behind our billing service: electronic claims submission, a real-time reporting dashboard, automated workflows, patient invoicing and appointment reminders — all in one place."}</p>
<div className="hero-ctas-row">
<Link href="/pricing" className="btn btn-glow">{"Get Your Custom Pricing Quote"}</Link>{" "}
<Link href="/solutions" className="btn btn-ghost">{"Back to Solutions"}</Link>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"What this is"}</p>
<h2>{"Medexa Billing Platform — explained plainly"}</h2>
<p>{"The Medexa Billing Platform is the system our team runs your billing on — and the window you look through to see it. Claims are submitted electronically, collections and denials update in real-time reporting, routine steps run as automated workflows instead of manual chasing, and patient invoicing and appointment reminders go out on schedule. You are never wondering what your billing company did this week: the dashboard shows it."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Complete visibility without extra work: claims, collections, denials and A/R in one real-time view, plus the patient-facing pieces — invoices and reminders — handled automatically and on time."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Practices that want a billing service and the visibility of software — without buying, learning and maintaining a billing platform themselves."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Medexa Billing Platform works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once it is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Claims submitted electronically"}</b><p>{"Charges flow from your EHR into the platform, are scrubbed, and go out electronically to payers — no paper, no manual uploads."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Reporting updates in real time"}</b><p>{"The dashboard reflects claims, payments and denials as they happen, so the numbers you see are the current numbers."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Routine work runs automatically"}</b><p>{"Patient invoicing, appointment reminders and status checks run as automated workflows — your front desk stops chasing routine tasks."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Medexa Billing Platform"}</h2>
<p>{"Everything listed here is part of it — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Electronic claims submission to all major payers"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Real-time reporting dashboard — claims, collections, denials, A/R"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Automated billing workflows and task queues"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Patient invoicing and statements"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Appointment reminders for patients"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Denial and A/R work queues, organized by priority"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Payer confirmation and claim status tracking"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Plain-language summary reports on a regular rhythm"}</span></li></ul></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="ai-process reveal">
<h3>{"The process — step by step"}</h3>
<p>{"From first conversation to a running service, in order. You approve each step before the next one begins."}</p>
<div className="ai-steps"><div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Free Review"}</b><p>{"We start with a free review of your current setup — what is working, what is leaking, and what this would change."}</p></div><div className="ai-step"><span className="n">{"Step 2"}</span><b>{"Written Plan & Quote"}</b><p>{"You receive the exact scope, workflow and price in writing. Nothing starts without your approval."}</p></div><div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Setup & BAA"}</b><p>{"Secure access is arranged, and a BAA is signed before any patient information is touched."}</p></div><div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Go Live"}</b><p>{"The service starts on an agreed date, inside your existing systems — no migration, no disruption to your clinic day."}</p></div><div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Reporting & Review"}</b><p>{"You receive regular plain-language reports, and we review results together and fix root causes as they appear."}</p></div></div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-primary">{"See the Platform in Your Free Audit"}</Link>{" "}
<span className="note">{"Questions? Contact us below — we'll scope it on a free call and quote it in writing."}</span>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"See your billing in one view"}</h2>
<p className="cs-lede">{"Tell us about your practice and we will show you — in a free audit — exactly what your dashboard would show and where your revenue stands today."}</p>
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
