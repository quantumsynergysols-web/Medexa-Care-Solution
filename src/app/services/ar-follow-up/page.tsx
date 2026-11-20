import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("svc-ar-followup");

export default function SvcArFollowupPage() {
  return (
    <>
<div className="page active" data-page="svc-ar-followup">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/services">{"Medical Billing Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"A/R Follow-Up"}</span></nav>
<p className="kicker">{"Medical Billing · Service Detail"}</p>
<h1>{"A/R Follow-Up — "}<span className="hl">{"old balances worked, not abandoned"}</span></h1>
<p className="lede">{"Systematic follow-up on everything you are owed, organised by aging bucket — payer calls, claim-status tracking and persistent work until every balance is resolved."}</p>
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
<h2>{"A/R Follow-Up — explained plainly"}</h2>
<p>{"Accounts Receivable (A/R) is the money payers and patients owe you for care already delivered. As balances age, they get harder to collect — which is why A/R cannot be worked 'when there is time'. We work your A/R on a disciplined rhythm, oldest risk first, with payer calls and claim-status checks until each balance is paid, corrected or honestly resolved."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Days in A/R come down, old balances stop ageing into write-offs, and you can see — in plain reports — exactly what is outstanding, what is being worked, and what came in."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Practices with growing 90+ day balances, a front desk with no time for payer calls, or no clear picture of what is actually owed."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How A/R Follow-Up works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once the service is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Worked by aging bucket"}</b><p>{"Balances are prioritised by age and risk — the oldest, most at-risk money gets attention first, not last."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Payers chased, claims tracked"}</b><p>{"We call payers, check claim status, and document every follow-up — nothing depends on one person's memory."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Reported in plain language"}</b><p>{"Your reports show A/R by bucket, what was worked, and what was collected — so progress is visible, not promised."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in A/R Follow-Up"}</h2>
<p>{"Everything listed here is part of the service — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"A/R worked by aging bucket, oldest risk first"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Payer calls and claim-status tracking"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Follow-up on unpaid and underpaid claims"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Patient-balance follow-up support"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Aging analysis in your regular reporting"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Escalation of stalled claims with a clear next step"}</span></li></ul></div>
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
<h2>{"Talk to us about A/R Follow-Up"}</h2>
<p className="cs-lede">{"Old balances sitting untouched? Contact us — the free audit shows which balances are still collectible and which need action now."}</p>
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
