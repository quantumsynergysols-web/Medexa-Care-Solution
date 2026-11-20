import Link from "next/link";
import { AuditForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
<div className="page active" data-page="contact">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"Contact"}</span></nav>
<p className="kicker">{"Contact · Free Billing Audit · Free AI Consultation"}</p>
<h1>{"Let's look at your numbers — "}<span className="hl">{"together"}</span></h1>
<p className="lede">{"Request a free billing audit, a free AI consultation, or both. Written findings, an exact quote, and no obligation — whichever you choose."}</p>
<div className="hero-chips">
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Free — no obligation"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Written findings you keep"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Takes about a minute"}</span>
</div>
</div>
</section>
<section className="section">
<div className="wrap contact-grid">
<div className="contact-copy reveal-l">
<p className="kicker">{"Request your free audit or AI consultation"}</p>
<h2>{"Tell us what you need — we'll do the homework"}</h2>
<p>{"Fill in the form and tell us what you're interested in — a billing audit, an AI services, or both. For billing, we'll review your denial patterns, aging A/R, and coding with written findings. For AI, we'll map how your facility runs and where a complete AI system saves your team the most time. No obligation either way."}</p>
<div className="contact-points">
<div className="cp"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 14h6M9 17h4" /></svg><span><b>{"Written findings"}</b>{" — you keep the audit report either way."}</span></div>
<div className="cp"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg><span><b>{"BAA before PHI"}</b>{" — signed before any patient data is accessed."}</span></div>
<div className="cp"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 9h18" /></svg><span><b>{"Exact quote after the audit"}</b>{" — priced for your specialty and volume."}</span></div>
</div>
<div className="info-cards">
<div className="info-card"><span className="iic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 13h6M9 17h6" /></svg></span><div><b>{"Free Billing Audit"}</b><span>{"Denials, aging A/R and coding reviewed — findings in writing."}</span></div></div>
<div className="info-card"><span className="iic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" /></svg></span><div><b>{"Free AI Consultation"}</b><span>{"For hospitals, medical centres, clinics & practices — we map how your facility runs and where a complete AI system fits."}</span></div></div>
<div className="info-card"><span className="iic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span><div><b>{"What happens next"}</b><span>{"We review your details, then follow up at the email or phone you give us to arrange your audit or consultation."}</span></div></div>
</div>
</div>
<AuditForm />
</div>
<div className="wrap">
</div>
</section>
</div>

    </>
  );
}
