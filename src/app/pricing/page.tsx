import type { CSSProperties } from "react";
import Link from "next/link";
import { PricingForm } from "@/components/LeadForms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("pricing");

export default function PricingPage() {
  return (
    <>
<div className="page active" data-page="pricing">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"Pricing"}</span></nav>
<p className="kicker">{"Pricing · Based on Your Collections"}</p>
<h1>{"Rates as low as "}<span className="hl">{"2.99% of collections"}</span></h1>
<p className="lede">{"Tiered pricing based on your monthly collections — 4.99% up to $50,000, 3.99% from $50,000–$150,000, and 2.99% over $150,000. You only pay when you get paid, with no setup surprises."}</p>
<div className="hero-chips">
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Rates as low as 2.99%"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"You pay when you get paid"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Custom quote in writing"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No obligation"}</span>
</div>
</div>
</section>
<section className="section" style={{ paddingBottom: "8px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head center reveal">
<p className="kicker">{"Tiered Pricing"}</p>
<h2>{"Three tiers. Your collections pick your rate."}</h2>
<p>{"Find your monthly collections below — that is your tier. The rate applies only to money actually collected for you, never to claims submitted."}</p>
</div>
<div className="tier-grid">
<div className="tier-card reveal">
<p className="t-name">{"Tier 1 · Growing Practice"}</p>
<p className="t-range">{"Up to $50,000"}<small>{"monthly collections"}</small></p>
<p className="t-rate">{"4.99"}<span>{"%"}</span></p>
<p className="t-per">{"of monthly collections"}</p>
<p className="t-eg">{"Example: collect "}<b>{"$30,000"}</b>{" in a month → your fee is "}<b>{"$1,497"}</b>{"."}</p>
<ul>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Full medical billing & RCM service"}</li>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Pay for paid — no charge on unpaid claims"}</li>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No setup surprises — rate confirmed in writing"}</li>
</ul>
<Link href="/contact" className="btn btn-ghost">{"Get This Tier"}</Link>
</div>
<div className="tier-card featured reveal" style={{ "--d": ".08s" } as CSSProperties}>
<span className="tier-badge">{"Most Popular"}</span>
<p className="t-name">{"Tier 2 · Established Practice"}</p>
<p className="t-range">{"$50,000 – $150,000"}<small>{"monthly collections"}</small></p>
<p className="t-rate">{"3.99"}<span>{"%"}</span></p>
<p className="t-per">{"of monthly collections"}</p>
<p className="t-eg">{"Example: collect "}<b>{"$100,000"}</b>{" in a month → your fee is "}<b>{"$3,990"}</b>{"."}</p>
<ul>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Everything in Tier 1, at a lower rate"}</li>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Pay for paid — no charge on unpaid claims"}</li>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No setup surprises — rate confirmed in writing"}</li>
</ul>
<Link href="/contact" className="btn btn-glow">{"Get This Tier"}</Link>
</div>
<div className="tier-card reveal" style={{ "--d": ".16s" } as CSSProperties}>
<p className="t-name">{"Tier 3 · High-Volume & Hospitals"}</p>
<p className="t-range">{"Over $150,000"}<small>{"monthly collections"}</small></p>
<p className="t-rate">{"2.99"}<span>{"%"}</span></p>
<p className="t-per">{"of monthly collections — our lowest rate"}</p>
<p className="t-eg">{"Example: collect "}<b>{"$300,000"}</b>{" in a month → your fee is "}<b>{"$8,970"}</b>{"."}</p>
<ul>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Everything in Tier 2, at our lowest rate"}</li>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Pay for paid — no charge on unpaid claims"}</li>
<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No setup surprises — rate confirmed in writing"}</li>
</ul>
<Link href="/contact" className="btn btn-ghost">{"Get This Tier"}</Link>
</div>
</div>
<div className="tier-notes reveal">
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Percentage of collections — not of claims billed"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Pay for paid — you only pay when you get paid"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"No setup surprises — your tier is confirmed in writing first"}</span>
</div>
</div>
</section>
<section className="section">
<div className="wrap contact-grid">
<div className="contact-copy reveal-l">
<p className="kicker">{"How our pricing works"}</p>
<h2>{"Your collections set your price"}</h2>
<p>{"Your rate is set by one thing: how much your practice collects each month. Collect up to $50,000 and your rate is 4.99%. From $50,000–$150,000 it drops to 3.99%. Over $150,000 it drops to 2.99% — our lowest rate. The percentage applies only to money actually collected for you, so the more we help you collect, the more we earn. Our success is tied to yours, in writing."}</p>
<div className="contact-points">
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Percentage of collections"}</b>{" — priced on what is actually collected for you, not on claims submitted."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Pay for paid"}</b>{" — if a claim is not paid, you are not charged for it."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"No setup surprises"}</b>{" — your tier and exact rate are confirmed in writing before any work begins."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Exact figure in writing"}</b>{" — after you send the form, we review your numbers and send your custom quote. No obligation to proceed."}</span></div>
</div>
</div>
<PricingForm />
</div>
</section>
<section className="section section-soft" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap contact-strip-grid" style={{ alignItems: "start" } as CSSProperties}>
<div className="reveal-l">
<p className="kicker">{"Pricing · Based on Your Collections"}</p>
<h2 style={{ fontSize: "clamp(25px,3.2vw,34px)", lineHeight: "1.18", margin: "0 0 12px" } as CSSProperties}>{"Or get your custom pricing quote"}</h2>
<p style={{ color: "var(--muted)", margin: "0 0 18px", fontSize: "16.5px" } as CSSProperties}>{"Prefer to start with price? Rates run from 4.99% down to as low as 2.99% of collections, depending on your monthly volume — you only pay when you get paid. Send your collections and we will confirm your tier and exact rate in writing."}</p>
<div className="contact-points">
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Percentage of collections"}</b>{" — tied to what we actually collect for you."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Pay for paid"}</b>{" — no charge on unpaid claims."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"No obligation"}</b>{" — the quote is yours to keep either way."}</span></div>
</div>
</div>
<PricingForm />
</div>
</section>
</div>

    </>
  );
}
