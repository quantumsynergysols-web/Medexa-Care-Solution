import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("svc-clearinghouse");

export default function SvcClearinghousePage() {
  return (
    <>
<div className="page active" data-page="svc-clearinghouse">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/services">{"Medical Billing Services"}</Link><span className="sep">{"/"}</span><span className="cur">{"Clearinghouse Services"}</span></nav>
<p className="kicker">{"Medical Billing · Service Detail"}</p>
<h1>{"Clearinghouse Services — "}<span className="hl">{"claims that arrive clean"}</span></h1>
<p className="lede">{"One reliable connection between your practice and every payer: claims scrubbed and polished before they go out, submitted instantly, and tracked until the payer confirms receipt."}</p>
<div className="hero-ctas-row">
<Link href="/pricing" className="btn btn-glow">{"Get Your Custom Pricing Quote"}</Link>{" "}
<Link href="/services" className="btn btn-ghost">{"Back to Medical Billing Services"}</Link>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"What this is"}</p>
<h2>{"Clearinghouse Services — explained plainly"}</h2>
<p>{"Clearinghouse Services are the bridge between your EHR and the payers. Instead of sending claims payer by payer and discovering errors days later, every claim passes through one clearinghouse connection where it is scrubbed against payer rules, corrected, submitted electronically and tracked. Rejections come back fast — usually the same day — so they can be fixed and resent while the claim is still fresh, not discovered weeks later in a denial report."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Fewer rejections, faster payer confirmation, and one clear view of every claim in flight. Problems surface in hours instead of weeks, which means denials drop and payments arrive sooner."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Practices tired of rejection backlogs, practices billing many payers, and any team that wants claim status visibility without logging into a dozen payer portals."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Clearinghouse Services works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once it is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Claims are scrubbed first"}</b><p>{"Every claim is checked against payer-specific edits and coding rules before submission — errors are polished out, not sent out."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Submission is instant and tracked"}</b><p>{"Claims go electronically to all major payers through one connection, with confirmation and status tracked claim by claim."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Rejections are worked same-day"}</b><p>{"Anything a payer bounces comes back quickly, gets corrected, and is resubmitted within one business day."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Clearinghouse Services"}</h2>
<p>{"Everything listed here is part of it — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Electronic claims submission to all major payers"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Claim scrubbing and polishing against payer edits"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Eligibility checking through the clearinghouse connection"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Claim status tracking and payer confirmations"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Rejection management — corrected and resent within one business day"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Remittance (ERA) delivery organized for payment posting"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Payment posting automation support"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Clear reporting on submitted, accepted and rejected claims"}</span></li></ul></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="ai-process reveal">
<h3>{"The process — step by step"}</h3>
<p>{"From first conversation to a running service, in order. You approve each step before the next one begins."}</p>
<div className="ai-steps"><div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Free Review"}</b><p>{"We start with a free review of your current setup — what is working, what is leaking, and what this would change."}</p></div><div className="ai-step"><span className="n">{"Step 2"}</span><b>{"Written Plan & Quote"}</b><p>{"You receive the exact scope, workflow and price in writing. Nothing starts without your approval."}</p></div><div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Setup & BAA"}</b><p>{"Secure access is arranged, and a BAA is signed before any patient information is touched."}</p></div><div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Go Live"}</b><p>{"The service starts on an agreed date, inside your existing systems — no migration, no disruption to your clinic day."}</p></div><div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Reporting & Review"}</b><p>{"You receive regular plain-language reports, and we review results together and fix root causes as they appear."}</p></div></div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-primary">{"Talk to Us About Clearinghouse Services"}</Link>{" "}
<span className="note">{"Questions? Contact us below — we'll scope it on a free call and quote it in writing."}</span>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Put your claims on a clean connection"}</h2>
<p className="cs-lede">{"Tell us about your practice and we will show you how our clearinghouse connection would clean up your claim flow — findings and an exact quote in writing."}</p>
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
