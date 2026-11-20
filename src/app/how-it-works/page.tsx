import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("process");

export default function ProcessPage() {
  return (
    <>
<div className="page active" data-page="process">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"How It Works"}</span></nav>
<p className="kicker">{"How It Works"}</p>
<h1>{"From first look to full visibility, "}<span className="hl">{"in five steps"}</span></h1>
<p className="lede">{"No disruption, no system change, no leap of faith. It starts with a free, written review of where your revenue stands today — and every step after that is mapped before it happens."}</p>
<div className="hero-chips">
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Free audit first"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No system change"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"BAA before any PHI"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Written plan before you commit"}</span>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"Billing onboarding"}</p>
<h2>{"The five steps, in detail"}</h2>
<p>{"What happens, what we need from you, and what you receive at each step."}</p>
</div>
<div className="timeline">
<div className="tstep reveal"><div className="tnum">{"1"}</div><div className="tcard"><span className="twhen">{"Start here · Free"}</span><h3>{"Free Billing Audit"}</h3><p>{"We review your claims, denials, and aging A/R and share our findings with you in writing — what's leaking, and why."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"You receive: a written findings report — yours to keep either way"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"From you: practice details via the request form — no PHI needed"}</li></ul></div></div>
<div className="tstep reveal"><div className="tnum">{"2"}</div><div className="tcard"><span className="twhen">{"After the audit"}</span><h3>{"Custom Plan"}</h3><p>{"Services and workflow fitted to your specialty, your payers, and your EHR — not a one-size package. You get an exact written quote."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"You receive: scope, workflow and exact pricing in writing"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No obligation — the plan is yours whether you proceed or not"}</li></ul></div></div>
<div className="tstep reveal"><div className="tnum">{"3"}</div><div className="tcard"><span className="twhen">{"Setup"}</span><h3>{"Onboarding & Setup"}</h3><p>{"Payer and EHR access arranged securely. A BAA is signed before any patient information is accessed."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"BAA signed first — always before PHI access"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Credentialing / enrollment gaps fixed during setup"}</li></ul></div></div>
<div className="tstep reveal"><div className="tnum">{"4"}</div><div className="tcard"><span className="twhen">{"Launch"}</span><h3>{"Go Live"}</h3><p>{"Claims submitted, denials worked, A/R followed up — your billing runs on a disciplined daily rhythm inside your existing systems."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Daily rhythm: submit → track → work denials → follow up A/R"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Your staff keep your EHR — nothing to relearn"}</li></ul></div></div>
<div className="tstep reveal"><div className="tnum">{"5"}</div><div className="tcard"><span className="twhen">{"Ongoing"}</span><h3>{"Transparent Reporting"}</h3><p>{"Regular reports on claims, collections, denials, and A/R — so you always know exactly where your revenue stands."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Claims, collections, denials & A/R — in plain language"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Denial trends reviewed so the same errors stop repeating"}</li></ul></div></div>
</div>
</div>
</section>
<section className="section section-soft" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"AI projects"}</p>
<h2>{"How an AI Services project runs"}</h2>
<p>{"The same discipline, applied to AI Services: a staged rollout where you approve each step before we build the next."}</p>
</div>
<div className="ai-process reveal" style={{ marginTop: "0" } as CSSProperties}>
<div className="ai-steps">
<div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Discovery Call"}</b><p>{"We map how your whole facility runs — departments, patient flow and administration — to design your complete AI system."}</p></div>
<div className="ai-step"><span className="n">{"Step 2"}</span><b>{"AI Plan & Quote"}</b><p>{"A written plan: what will be built, what it connects to, timeline, and exact price."}</p></div>
<div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Build & Integrate"}</b><p>{"We build your complete AI system and connect it to your existing software and workflows."}</p></div>
<div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Test With Your Team"}</b><p>{"Real scenarios tested with your staff — scripts, routing, and handoffs refined."}</p></div>
<div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Go Live & Training"}</b><p>{"Launch with team training and simple guides for everyone."}</p></div>
<div className="ai-step"><span className="n">{"Step 6"}</span><b>{"Support & Optimization"}</b><p>{"We monitor performance and keep improving accuracy and coverage."}</p></div>
</div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-primary">{"Start Step 1 — It's Free"}</Link>{" "}
<span className="note">{"Billing audit or AI Services discovery call — they are separate, tell us which in the form."}</span>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Start step 1 — it's free"}</h2>
<p className="cs-lede">{"Billing audit or AI consultation: tell us which (or both), and we'll take the first step with you — free, in writing, and with no obligation."}</p>
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
