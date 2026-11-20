import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("solutions");

export default function SolutionsPage() {
  return (
    <>
<div className="page active" data-page="solutions">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"Solutions"}</span></nav>
<p className="kicker">{"Solutions · The Medexa Platform"}</p>
<h1>{"The platform behind the service — "}<span className="hl">{"built into how we work"}</span></h1>
<p className="lede">{"Our Solutions are the technology layer of Medexa: the billing platform our team works on, the clearinghouse connection your claims travel through, and a simple promise about your own software — you keep it, we plug into it."}</p>
<div className="hero-stats">
<div className="hstat"><b>{"3"}</b><span>{"Solutions"}</span></div>
<div className="hstat"><b>{"1"}</b><span>{"Connected platform"}</span></div>
<div className="hstat"><b>{"0"}</b><span>{"Software changes for you"}</span></div>
<div className="hstat"><b>{"24"}<em>{"/7"}</em></b><span>{"Dashboard visibility"}</span></div>
</div>
<div className="hero-ctas-row">
<Link href="/pricing" className="btn btn-glow">{"Get Your Custom Pricing Quote"}</Link>{" "}
<Link href="/services" className="btn btn-ghost">{"See Medical Billing Services"}</Link>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"Our solutions"}</p>
<h2>{"Three solutions, one connected platform"}</h2>
<p>{"Open any solution to see exactly what it is, how it works, what's included and the step-by-step process."}</p>
</div>
<div className="svc-grid"><div className="svc reveal"><span className="snum">{"01"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></svg></div><h3>{"Medexa Billing Platform"}</h3><p>{"Electronic claims submission, a real-time reporting dashboard, automated workflows, patient invoicing and appointment reminders — the platform our billing runs on, and the window you see it through."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Electronic claims submission"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Real-time reporting dashboard"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Patient invoicing & appointment reminders"}</li></ul><Link href="/solutions/billing-platform" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div><div className="svc reveal"><span className="snum">{"02"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></svg></div><h3>{"Clearinghouse"}</h3><p>{"One clean connection to every payer: claims scrubbed and polished, submitted instantly, eligibility checked, and remittances flowing back for automated payment posting."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Claim scrubbing & polishing"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Instant electronic submission"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Eligibility checker & payment posting automation"}</li></ul><Link href="/solutions/clearinghouse" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div><div className="svc reveal"><span className="snum">{"03"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></svg></div><h3>{"Practice Software"}</h3><p>{"No new software to buy or learn. Our platform is EHR- and PMS-friendly — we connect to the practice software you already run and fit our workflow around it."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Works with your existing EHR"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Works with your existing PMS"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No migration, no retraining"}</li></ul><Link href="/solutions/practice-software" className="detail-link">{"View full detail — how it works, what's included & process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div></div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="sec-head reveal">
<p className="kicker">{"How Solutions work here"}</p>
<h2>{"Software that serves the service — not the other way round"}</h2>
<p>{"We are a billing team first. The platform exists so our work is fast, accurate and visible to you — you get the benefits of serious billing software without buying it, learning it or maintaining it."}</p>
</div>
<div className="plain-steps">
<div className="plain-step reveal"><span className="how-num">{"Step 1"}</span><b>{"We connect to your systems"}</b><p>{"Setup links our platform to your EHR/PMS and payers under a signed BAA. Your software and routines stay exactly as they are."}</p></div>
<div className="plain-step reveal" style={{ "--d": ".08s" } as CSSProperties}><span className="how-num">{"Step 2"}</span><b>{"Claims flow through one pipe"}</b><p>{"Charges move from your system into the platform, through the clearinghouse scrub, and out to payers — tracked at every step."}</p></div>
<div className="plain-step reveal" style={{ "--d": ".16s" } as CSSProperties}><span className="how-num">{"Step 3"}</span><b>{"You watch it in real time"}</b><p>{"The dashboard shows claims, collections, denials and A/R as they stand today — not in a report you receive next month."}</p></div>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"See the platform working on your numbers"}</h2>
<p className="cs-lede">{"Tell us about your practice and we will show you — in a free audit — what the platform would show for your claims, collections and denials."}</p>
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
