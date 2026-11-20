import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("why");

export default function WhyPage() {
  return (
    <>
<div className="page active" data-page="why">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"Why Us"}</span></nav>
<p className="kicker">{"Why Medexa Care Solutions"}</p>
<h1>{"A billing partner, "}<span className="hl">{"not a black box"}</span></h1>
<p className="lede">{"You should never have to wonder what your billing company did this week. Here's how we work — and how we're different from the typical billing service."}</p>
<div className="hero-chips">
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Dedicated team"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Visible reporting"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Two separate services, one partner"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"HIPAA-conscious processes"}</span>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"How we work"}</p>
<h2>{"Ten commitments, kept on every account"}</h2>
</div>
<div className="why-grid">
<div className="why reveal" style={{ "--d": "0s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Dedicated billing team for your practice"}</b><span>{"The same people who know your payers, your providers, and your patterns — not a rotating queue."}</span></div></div>
<div className="why reveal" style={{ "--d": ".07s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Specialty-matched coding knowledge"}</b><span>{"Coding review aligned to your specialty's codes, modifiers, and documentation habits."}</span></div></div>
<div className="why reveal" style={{ "--d": "0s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Clean-claim focus before submission"}</b><span>{"We scrub and verify before the claim goes out — not after the denial comes back."}</span></div></div>
<div className="why reveal" style={{ "--d": ".07s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Every denial worked — not written off"}</b><span>{"Root-cause review, correction, and appeal. A denial is a task, not an ending."}</span></div></div>
<div className="why reveal" style={{ "--d": "0s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Clear reporting, no hidden work"}</b><span>{"You see claims, collections, denials, and A/R in plain reports — the work is visible."}</span></div></div>
<div className="why reveal" style={{ "--d": ".07s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Works in your existing EHR & clearinghouse"}</b><span>{"We plug into the systems you already run. No migration, no retraining your staff."}</span></div></div>
<div className="why reveal" style={{ "--d": "0s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"HIPAA-conscious, secure processes"}</b><span>{"Access controls, a signed BAA before any PHI is touched, and disciplined handling of patient data."}</span></div></div>
<div className="why reveal" style={{ "--d": ".07s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Flexible — solo to multi-provider groups"}</b><span>{"Engagements sized to your practice, whether that's one provider or a growing group."}</span></div></div>
<div className="why reveal" style={{ "--d": "0s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Two separate services, one partner"}</b><span>{"Medical Billing and AI Services are scoped and priced separately — take either one alone, or both from the same team instead of juggling vendors."}</span></div></div>
<div className="why reveal" style={{ "--d": ".07s" } as CSSProperties}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div><b>{"Human oversight on every AI system"}</b><span>{"AI handles routine operations and administration — your staff keep control of clinical and sensitive decisions, always."}</span></div></div>
</div>
</div>
</section>
<section className="section section-soft" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"The difference"}</p>
<h2>{"Typical billing service vs. Medexa"}</h2>
</div>
<div className="compare">
<div className="compare-card bad reveal">
<h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" /></svg>{"The typical experience"}</h3>
<ul>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 9l-6 6M9 9l6 6" /></svg>{"Denials quietly written off when they're hard to work"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 9l-6 6M9 9l6 6" /></svg>{"A different stranger on your account every month"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 9l-6 6M9 9l6 6" /></svg>{"Reports you have to chase — or can't read when they arrive"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 9l-6 6M9 9l6 6" /></svg>{"\"Switch to our software\" before they'll work with you"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 9l-6 6M9 9l6 6" /></svg>{"Old A/R ages untouched while new claims get the attention"}</li>
</ul>
</div>
<div className="compare-card good reveal" style={{ "--d": ".08s" } as CSSProperties}>
<h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"How Medexa works"}</h3>
<ul>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Every denial gets a root-cause review, correction and appeal"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"A dedicated team that learns your payers and patterns"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Plain-language reporting on a regular rhythm — no chasing"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"We work inside your EHR and clearinghouse from day one"}</li>
<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"A/R worked by aging bucket — oldest risk first, nothing abandoned"}</li>
</ul>
</div>
</div>
<div style={{ height: "44px" } as CSSProperties}></div>
<div className="audit reveal">
<div>
<h2>{"Judge us by the audit — it's free"}</h2>
<p>{"The fastest way to see the difference is to let us look at your numbers. Written findings, no obligation, yours to keep."}</p>
<ul>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Denial patterns — what's being denied, and why it keeps happening"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Aging A/R — which balances are still collectible and which need action now"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Coding issues — mismatches between documentation, codes, and payer rules"}</li>
</ul>
</div>
<div className="audit-side">
<h3>{"Start with the audit"}</h3>
<p>{"It costs nothing and commits you to nothing — and you'll keep the findings either way."}</p>
<Link href="/contact" className="btn btn-white" style={{ width: "100%", justifyContent: "center" } as CSSProperties}>{"Request Free Billing Audit"}</Link>
</div>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Judge us by the free audit"}</h2>
<p className="cs-lede">{"The fastest way to see how we work is to let us look at your numbers. Contact us for a free billing audit or a free AI consultation — written findings either way."}</p>
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
