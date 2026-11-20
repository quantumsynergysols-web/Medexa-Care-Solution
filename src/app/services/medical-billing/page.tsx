import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("svc-billing");

export default function SvcBillingPage() {
  return (
    <>
<div className="page active" data-page="svc-billing">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/services">{"Medical Billing Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"Medical Billing"}</span></nav>
<p className="kicker">{"Medical Billing · Service Detail"}</p>
<h1>{"Medical Billing — "}<span className="hl">{"done accurately, every day"}</span></h1>
<p className="lede">{"The complete day-to-day billing engine for your practice: charges entered, claims scrubbed and submitted, payments posted, and patients billed — accurately and on schedule, inside your existing EHR."}</p>
<div className="hero-ctas-row">
<Link href="/contact" className="btn btn-glow">{"Get a Free Billing Audit"}</Link>{" "}
<Link href="/services" className="btn btn-ghost">{"Back to Medical Billing Services"}</Link>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"What this service is"}</p>
<h2>{"Medical Billing — explained plainly"}</h2>
<p>{"Medical Billing is the daily work that turns the care you delivered into paid claims. We take over charge entry, claim preparation, scrubbing, electronic submission, rejection handling, payment posting and patient statements — so claims go out clean and come back paid, instead of piling up on your front desk."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Cleaner claims mean a higher first-pass acceptance rate, fewer rejections to chase, and steadier cash flow. Your staff stop spending their day on billing queues and get their time back for patients."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Independent practices and small groups of any specialty who want their billing handled by a dedicated team without hiring, training and managing in-house billers."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Medical Billing works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once the service is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Charges in, claims out — daily"}</b><p>{"Encounters from your EHR are entered and checked every business day. Nothing sits waiting for a weekly batch."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Scrubbed before submission"}</b><p>{"Every claim is checked against payer rules, coding edits and eligibility before it goes out — errors are fixed first, not after a denial."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Payments posted, patients billed"}</b><p>{"Payer payments and adjustments are posted accurately, and clear patient statements go out for balances that are the patient's responsibility."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Medical Billing"}</h2>
<p>{"Everything listed here is part of the service — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Daily charge entry from your EHR"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Claim scrubbing against payer rules before submission"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Electronic claim submission to all major payers"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Rejection clearing within one business day"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Payment posting — payer payments and adjustments"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Patient statements for patient-responsibility balances"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Regular reporting on claims, collections and outstanding balances"}</span></li></ul></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="ai-process reveal">
<h3>{"The process — step by step"}</h3>
<p>{"From first conversation to a running service, in order. You approve each step before the next one begins."}</p>
<div className="ai-steps"><div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Free Review"}</b><p>{"We start with a free review of your current billing — what is working, what is leaking, and what this service would change."}</p></div><div className="ai-step"><span className="n">{"Step 2"}</span><b>{"Written Plan & Quote"}</b><p>{"You receive the exact scope, workflow and price in writing. Nothing starts without your approval."}</p></div><div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Setup & BAA"}</b><p>{"Secure access to your EHR and payers is arranged, and a BAA is signed before any patient information is touched."}</p></div><div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Go Live"}</b><p>{"The service starts on an agreed date, inside your existing systems — no migration, no disruption to your clinic day."}</p></div><div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Reporting & Review"}</b><p>{"You receive regular plain-language reports, and we review results together and fix root causes as they appear."}</p></div></div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-primary">{"Get a Free Billing Audit"}</Link>{" "}
<span className="note">{"Questions about this service? Contact us below — we'll scope it on a free call and quote it in writing."}</span>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Talk to us about Medical Billing"}</h2>
<p className="cs-lede">{"Tell us about your practice and we'll review your billing free of charge — written findings, an exact quote, and no obligation."}</p>
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
