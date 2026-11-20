import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm, PricingForm } from "@/components/LeadForms";
import HomeFx from "@/components/fx/HomeFx";
import AiServicesSection from "@/components/home/AiServicesSection";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <>
<div className="page active" data-page="home">
<section className="hero">
<div className="hero-grid-bg" aria-hidden="true"></div>
<canvas id="netCanvas" aria-hidden="true"></canvas>
<div className="wrap">
<div className="hero-grid">
<div className="reveal-l">
<span className="hero-badge"><span className="pulse-dot" aria-hidden="true"></span>{"Medical Billing · RCM · AI Services"}</span>
<p className="kicker">{"Medexa Care Solutions · Two Separate Services, One Website"}</p>
<h1>{"Your Practice Earned It. "}<span className="hl">{"We Make Sure You Collect It."}</span></h1>
<p className="sub">{"We offer two separate services. "}<b style={{ color: "#eaf3fa" } as CSSProperties}>{"Medical Billing & RCM"}</b>{" — clean claims, fewer denials, faster payments for US practices. And "}<b style={{ color: "#eaf3fa" } as CSSProperties}>{"AI Services"}</b>{" — complete AI systems for healthcare: from a single clinic to a full hospital, we design, build and run AI that can run your facility end to end. Take either one on its own, so you can focus on patients, not paperwork."}</p>
<div className="hero-ctas">
<Link href="/contact" className="btn btn-glow">{"Get a Free Billing Audit"}</Link>{" "}
<Link href="/ai-services" className="btn btn-ghost">{"Explore AI Services"}</Link>
</div>
<div className="trust-row">
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"Built for independent practices & small groups "}<span>{"— solo providers to multi-provider teams."}</span></div></div>
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"Works inside your existing EHR "}<span>{"— we adapt to the system you already use."}</span></div></div>
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"No need to change your current system "}<span>{"— our workflow fits your practice, not the other way around."}</span></div></div>
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"AI Services, kept separate from billing "}<span>{"— complete AI systems for hospitals, medical centres, clinics & practices, built around how your facility already runs."}</span></div></div>
</div>
</div>
<div className="dash reveal" id="dashPanel" aria-label="Revenue cycle dashboard preview">
<div className="dash-head">
<span className="dash-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" /></svg>{"Revenue Cycle Command Center"}</span>{" "}
<span className="live-badge"><span className="pulse-dot" aria-hidden="true"></span>{"Live"}</span>
</div>
<p className="dash-note">{"// sample reporting view — the dashboard style your practice receives"}</p>
<div className="kpis">
<div className="kpi"><p className="k-label">{"Claims Processed"}</p><div className="k-val"><span className="count" data-target="12480" data-format="comma">{"0"}</span></div><p className="k-sub">{"this quarter"}</p></div>
<div className="kpi"><p className="k-label">{"Clean-Claim Rate"}</p><div className="k-val"><span className="count" data-target="98.2" data-decimals="1">{"0"}</span><span className="sfx">{"%"}</span></div><p className="k-sub">{"first-pass acceptance"}</p></div>
<div className="kpi"><p className="k-label">{"Denials Resolved"}</p><div className="k-val"><span className="count" data-target="1146" data-format="comma">{"0"}</span></div><p className="k-sub">{"worked, not written off"}</p></div>
<div className="kpi"><p className="k-label">{"Days in A/R"}</p><div className="k-val"><span className="count" data-target="27">{"0"}</span><span className="sfx">{" days"}</span></div><p className="k-sub">{"average, trending down"}</p></div>
</div>
<div className="dash-mid">
<div className="donut" role="img" aria-label="Clean claim rate 98.2 percent">
<svg width="124" height="124" viewBox="0 0 120 120">
<defs><linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2dd4bf" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient></defs>
<circle className="d-track" cx="60" cy="60" r="50" fill="none" strokeWidth="10" />
<circle className="d-val" id="donutVal" cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeDasharray="314.16" strokeDashoffset="314.16" />
</svg>
<div className="donut-center"><b><span className="count" data-target="98.2" data-decimals="1">{"0"}</span>{"%"}</b><span>{"Clean claims"}</span></div>
</div>
<div className="chart-box">
<p className="chart-title"><span>{"Collections — last 7 days"}</span><em>{"USD"}</em></p>
<div className="bars" aria-hidden="true">
<div className="bar" style={{ "--h": "42%" } as CSSProperties}></div><div className="bar" style={{ "--h": "58%" } as CSSProperties}></div><div className="bar" style={{ "--h": "50%" } as CSSProperties}></div><div className="bar" style={{ "--h": "72%" } as CSSProperties}></div><div className="bar" style={{ "--h": "64%" } as CSSProperties}></div><div className="bar hot" style={{ "--h": "88%" } as CSSProperties}></div><div className="bar" style={{ "--h": "78%" } as CSSProperties}></div>
</div>
<div className="bar-labels" aria-hidden="true"><span>{"Mon"}</span><span>{"Tue"}</span><span>{"Wed"}</span><span>{"Thu"}</span><span>{"Fri"}</span><span>{"Sat"}</span><span>{"Sun"}</span></div>
</div>
</div>
<div className="pipe">
<p className="pipe-title">{"Claim pipeline — live flow"}</p>
<div className="pipe-track" id="pipeTrack">
<div className="pipe-fill" id="pipeFill"></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Eligibility"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Coding"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Scrub Check"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Submitted"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Paid"}</span></div>
</div>
</div>
<div className="feed">
<p className="feed-title">{"Recent claim activity"}</p>
<ul className="feed-list" id="feedList"></ul>
</div>
</div>
</div>
<div className="marquee-zone">
<p className="marquee-label">{"We bill all major payers"}</p>
<div className="marquee" aria-hidden="true">
<div className="mq-track">
<div className="mq-set"><span>{"Medicare"}</span><span>{"Blue Cross Blue Shield"}</span><span>{"Aetna"}</span><span>{"Cigna"}</span><span>{"UnitedHealthcare"}</span><span>{"Humana"}</span><span>{"TRICARE"}</span><span>{"Medicaid"}</span><span>{"Anthem"}</span><span>{"Kaiser Permanente"}</span></div>
<div className="mq-set"><span>{"Medicare"}</span><span>{"Blue Cross Blue Shield"}</span><span>{"Aetna"}</span><span>{"Cigna"}</span><span>{"UnitedHealthcare"}</span><span>{"Humana"}</span><span>{"TRICARE"}</span><span>{"Medicaid"}</span><span>{"Anthem"}</span><span>{"Kaiser Permanente"}</span></div>
</div>
</div>
</div>
</div>
</section>
<section className="section" style={{ paddingTop: "64px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"Sound familiar?"}</p>
<h2>{"The billing problems quietly draining your practice"}</h2>
<p>{"Most revenue loss in a small practice isn't dramatic — it leaks out slowly, claim by claim. These are the problems we take off your plate."}</p>
</div>
<div className="pain-grid">
<div className="pain reveal" style={{ "--d": "0s" } as CSSProperties}><div className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" /></svg></div><h3>{"Denied claims piling up"}</h3><p>{"Denials land in a queue nobody has time to work — and unworked denials become lost revenue."}</p></div>
<div className="pain reveal" style={{ "--d": ".08s" } as CSSProperties}><div className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div><h3>{"Old A/R never followed up"}</h3><p>{"Aging balances sit untouched month after month while your team handles today's work first."}</p></div>
<div className="pain reveal" style={{ "--d": ".16s" } as CSSProperties}><div className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg></div><h3>{"Eligibility surprises"}</h3><p>{"The visit is done, the claim is sent — then you learn coverage lapsed or a prior auth was needed."}</p></div>
<div className="pain reveal" style={{ "--d": ".24s" } as CSSProperties}><div className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg></div><h3>{"Coding errors"}</h3><p>{"A mismatched code or missing modifier turns a payable claim into a rejection, a denial, or an underpayment."}</p></div>
<div className="pain reveal" style={{ "--d": ".32s" } as CSSProperties}><div className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c2413b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg></div><h3>{"Staff buried in billing"}</h3><p>{"Your front desk is chasing payers on hold instead of caring for the patients in front of them."}</p></div>
</div>
</div>
</section>
<section className="section section-soft" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head center reveal">
<p className="kicker">{"Explore the site"}</p>
<h2>{"Two separate services — each with its own page"}</h2>
<p>{"Medical Billing and AI Services are not mixed together here. Billing has its own page, AI Services has its own page — plus specialties, process and pricing questions, each laid out in full."}</p>
</div>
<div className="explore-grid">
<Link href="/services" className="explore-card reveal" style={{ "--d": "0s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 13h6M9 17h6" /></svg></div><h3>{"Medical Billing Services"}</h3><p>{"Billing, coding, denial management, A/R follow-up, eligibility and credentialing — plus full RCM. Billing only — AI lives on its own page."}</p><span className="go">{"View Services "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/ai-services" className="explore-card reveal" style={{ "--d": ".07s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" /></svg></div><h3>{"AI Services"}</h3><p>{"A separate service line: complete AI systems for healthcare — hospital management, clinic management, research & data, patient journey and operations, for hospitals, medical centres, clinics & practices."}</p><span className="go">{"Explore AI Services "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/why-us" className="explore-card reveal" style={{ "--d": ".14s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg></div><h3>{"Why Choose Us"}</h3><p>{"How we work, what we commit to on every account — and how we differ from a typical billing service."}</p><span className="go">{"Why Medexa "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/specialties" className="explore-card reveal" style={{ "--d": "0s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div><h3>{"Specialties"}</h3><p>{"12 specialties with coding and payer rules matched to each — search yours and see how we bill it."}</p><span className="go">{"Find Your Specialty "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/how-it-works" className="explore-card reveal" style={{ "--d": ".07s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div><h3>{"How It Works"}</h3><p>{"From free audit to go-live in five clear steps — plus how an AI Services project runs, separately."}</p><span className="go">{"See the Process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/contact" className="explore-card reveal" style={{ "--d": ".14s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg></div><h3>{"Free Audit & AI Consultation"}</h3><p>{"Free billing audit with written findings — or a free AI consultation for your facility. Yours to keep either way."}</p><span className="go">{"Request the Audit "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>
</div>
<div style={{ height: "48px" } as CSSProperties}></div>
<div className="audit reveal">
<div>
<h2>{"Find out where your revenue is leaking"}</h2>
<p>{"Our free billing audit looks at the places practices most often lose money — and gives you the findings in writing, whether you work with us or not."}</p>
<ul>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Denial patterns — what's being denied, and why it keeps happening"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Aging A/R — which balances are still collectible and which need action now"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Coding issues — mismatches between documentation, codes, and payer rules"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Written findings, no obligation"}</li>
</ul>
</div>
<div className="audit-side">
<h3>{"Start with the audit"}</h3>
<p>{"Tell us about your practice and we'll arrange your free billing audit. It costs nothing and commits you to nothing."}</p>
<Link href="/contact" className="btn btn-white" style={{ width: "100%", justifyContent: "center" } as CSSProperties}>{"Request Free Billing Audit"}</Link>
</div>
</div>
</div>
</section>
<AiServicesSection />
<section className="section section-soft" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head center reveal">
<p className="kicker">{"For You"}</p>
<h2>{"Built for the way your practice actually runs"}</h2>
<p>{"Different practices, different billing problems. Find the one that sounds like you — each leads to the service set shaped for it."}</p>
</div>
<div className="explore-grid">
<Link href="/for-you" className="explore-card reveal"><h3>{"Small Practices"}</h3><p>{"A full billing department without hiring one — billing, coding, denials and A/R handled for solo and small teams."}</p><span className="go">{"For Small Practices "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/for-you" className="explore-card reveal" style={{ "--d": ".07s" } as CSSProperties}><h3>{"Large Practices"}</h3><p>{"Structured workflows and reporting by provider and location — billing that scales with a growing group."}</p><span className="go">{"For Large Practices "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/for-you" className="explore-card reveal" style={{ "--d": ".14s" } as CSSProperties}><h3>{"Physicians"}</h3><p>{"Physician billing that respects your time — coding matched to your specialty, queries kept to a minimum."}</p><span className="go">{"For Physicians "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/for-you" className="explore-card reveal"><h3>{"Hospitals"}</h3><p>{"High-volume facility billing support — denials and A/R organized by department and payer, with clear reporting."}</p><span className="go">{"For Hospitals "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/for-you" className="explore-card reveal" style={{ "--d": ".07s" } as CSSProperties}><h3>{"Outsource Your Billing"}</h3><p>{"Hand the whole billing function to a dedicated team that works inside your EHR — without the payroll."}</p><span className="go">{"Outsource Billing "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/denial-management" className="explore-card reveal" style={{ "--d": ".14s" } as CSSProperties}><h3>{"Denial Management"}</h3><p>{"Denials your main leak? Every denial root-caused, corrected and appealed — plus fixes so they stop repeating."}</p><span className="go">{"Fix My Denials "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>
</div>
<div style={{ textAlign: "center", marginTop: "26px" } as CSSProperties} className="reveal"><Link href="/for-you" className="btn btn-ghost">{"See All — Who We Serve"}</Link></div>
</div>
</section>
<section className="section" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap contact-strip-grid" style={{ alignItems: "start" } as CSSProperties}>
<div className="reveal-l">
<p className="kicker">{"Pricing · Tiered Rates"}</p>
<h2 style={{ fontSize: "clamp(25px,3.2vw,34px)", lineHeight: "1.18", margin: "0 0 12px" } as CSSProperties}>{"Rates as low as 2.99% of collections"}</h2>
<p style={{ color: "var(--muted)", margin: "0 0 18px", fontSize: "16.5px" } as CSSProperties}>{"Simple tiered pricing based on your monthly collections — the more you collect, the lower your rate. You only pay when you get paid: "}<b style={{ color: "var(--ink)" } as CSSProperties}>{"4.99%"}</b>{" up to $50,000/month, "}<b style={{ color: "var(--ink)" } as CSSProperties}>{"3.99%"}</b>{" from $50,000–$150,000, and "}<b style={{ color: "var(--ink)" } as CSSProperties}>{"2.99%"}</b>{" over $150,000."}</p>
<div className="contact-points">
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Percentage of collections"}</b>{" — priced on what is actually collected for you."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Pay for paid"}</b>{" — no charge on claims that are not paid."}</span></div>
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Custom quote in writing"}</b>{" — sent after we review your numbers, no obligation."}</span></div>
</div>
<div style={{ marginTop: "22px" } as CSSProperties}><Link href="/pricing" className="btn btn-ghost">{"See All Tiers on the Pricing Page"}</Link></div>
</div>
<PricingForm />
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Not sure where to start? Contact us"}</h2>
<p className="cs-lede">{"Ask for a free billing audit, a free AI consultation, or both — they're separate services, and we'll scope whichever you choose on one free call, with written findings and an exact quote."}</p>
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
<HomeFx />
    </>
  );
}
