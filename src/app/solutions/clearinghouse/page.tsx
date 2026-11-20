import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("sol-clearinghouse");

export default function SolClearinghousePage() {
  return (
    <>
<div className="page active" data-page="sol-clearinghouse">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><Link href="/solutions">{"Solutions"}</Link><span className="sep">{"/"}</span><span className="cur">{"Clearinghouse"}</span></nav>
<p className="kicker">{"Solutions · Platform"}</p>
<h1>{"Clearinghouse — "}<span className="hl">{"one clean connection to every payer"}</span></h1>
<p className="lede">{"Our clearinghouse connection scrubs and polishes every claim, submits it instantly, checks eligibility, and feeds payment posting automatically — one pipe between you and every payer."}</p>
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
<h2>{"Clearinghouse — explained plainly"}</h2>
<p>{"The Clearinghouse is the connection layer of our platform: a single, reliable pipe between your practice and every payer you bill. Claims are scrubbed and polished against payer rules before they move, submitted instantly and electronically, and confirmed by the payer. Eligibility can be checked through the same connection before a visit, and remittances flow back in a form that makes payment posting largely automatic. One connection, every payer, no portals to juggle."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><h3>{"What it does for you"}</h3><p>{"Claims arrive clean and confirmed, eligibility surprises disappear, and remittance data lands ready to post. Your team stops logging into payer portals and starts seeing one clear claim pipeline."}</p></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><h3>{"Who it is for"}</h3><p>{"Any practice billing multiple payers — especially teams losing time to rejections, portal logins and manual remittance handling."}</p></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How it works"}</p>
<h2>{"How Clearinghouse works, day to day"}</h2>
<p>{"No black box — this is exactly what happens once it is running."}</p>
</div>
<div className="plain-steps"><div className="plain-step reveal"><span className="how-num">{"How it works · 1"}</span><b>{"Scrubbed and polished before sending"}</b><p>{"Each claim passes payer-specific edits and coding checks in the clearinghouse — what goes out is what payers accept."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 2"}</span><b>{"Submitted instantly, confirmed visibly"}</b><p>{"Electronic submission with payer confirmation and claim-by-claim status, so nothing disappears into a black hole."}</p></div><div className="plain-step reveal"><span className="how-num">{"How it works · 3"}</span><b>{"Remittances flow back automatically"}</b><p>{"Payer responses and remittance files return through the same connection, organized for fast, accurate payment posting."}</p></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"What's included"}</p>
<h2>{"What's included in Clearinghouse"}</h2>
<p>{"Everything listed here is part of it — scoped and priced in writing before we start."}</p>
</div>
<div className="detail-grid">
<div className="detail-card reveal"><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Claim scrubbing and polishing against payer edits"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Instant electronic submission to all major payers"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Built-in eligibility checker"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Payer confirmation and claim status tracking"}</span></li></ul></div>
<div className="detail-card reveal" style={{ "--d": ".08s" } as CSSProperties}><ul className="check-list"><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Electronic remittance (ERA) delivery"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Payment posting automation"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"Rejection alerts — corrected and resent within one business day"}</span></li><li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span>{"One connection for every payer — no portal juggling"}</span></li></ul></div>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="ai-process reveal">
<h3>{"The process — step by step"}</h3>
<p>{"From first conversation to a running service, in order. You approve each step before the next one begins."}</p>
<div className="ai-steps"><div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Free Review"}</b><p>{"We start with a free review of your current setup — what is working, what is leaking, and what this would change."}</p></div><div className="ai-step"><span className="n">{"Step 2"}</span><b>{"Written Plan & Quote"}</b><p>{"You receive the exact scope, workflow and price in writing. Nothing starts without your approval."}</p></div><div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Setup & BAA"}</b><p>{"Secure access is arranged, and a BAA is signed before any patient information is touched."}</p></div><div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Go Live"}</b><p>{"The service starts on an agreed date, inside your existing systems — no migration, no disruption to your clinic day."}</p></div><div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Reporting & Review"}</b><p>{"You receive regular plain-language reports, and we review results together and fix root causes as they appear."}</p></div></div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-primary">{"Talk to Us About the Clearinghouse"}</Link>{" "}
<span className="note">{"Questions? Contact us below — we'll scope it on a free call and quote it in writing."}</span>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Clean up your claim connection"}</h2>
<p className="cs-lede">{"Tell us about your practice and we will map how the clearinghouse connection would fit your payers and your EHR — in writing, with an exact quote."}</p>
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
