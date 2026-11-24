import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm, PricingForm } from "@/components/LeadForms";
import HomeFx from "@/components/fx/HomeFx";
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
<span className="hero-badge"><span className="pulse-dot" aria-hidden="true"></span>{"AI Services for Healthcare · Complete AI Systems"}</span>
<p className="kicker">{"Medexa Care Solutions · AI Services First · Two Separate Services, One Website"}</p>
<h1>{"AI That Can Run Your Clinic — "}<span className="hl">{"Or Your Whole Hospital."}</span></h1>
<p className="sub">{"Our lead service is "}<b style={{ color: "#eaf3fa" } as CSSProperties}>{"AI Services for healthcare"}</b>{" — complete, connected AI systems that can run a facility end to end: front desk, patient journey, departments, research & data, and day-to-day operations. From a single clinic to a full hospital, we design, build and run the whole system for you. "}<b style={{ color: "#eaf3fa" } as CSSProperties}>{"Medical Billing & RCM"}</b>{" is our second, separate service line — you'll find it further down this page, on its own page, kept completely separate."}</p>
<div className="hero-ctas">
<Link href="/contact" className="btn btn-glow">{"Book a Free AI Consultation"}</Link>{" "}
<Link href="/ai-services" className="btn btn-ghost">{"Explore AI Services"}</Link>
</div>
<div className="trust-row">
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"Complete AI systems, not one-off tools "}<span>{"— one connected system designed around how your facility actually runs."}</span></div></div>
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"For hospitals, medical centres, clinics & practices "}<span>{"— sized to your facility, from one clinic to a whole hospital group."}</span></div></div>
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"Connected to the tools you already use "}<span>{"— your EHR, calendar, phone system, WhatsApp and website."}</span></div></div>
<div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><div>{"Human oversight, HIPAA-conscious by design "}<span>{"— AI handles the routine; your doctors and staff keep control of clinical decisions."}</span></div></div>
</div>
</div>
<div className="dash reveal" id="dashPanel" aria-label="AI operations dashboard preview">
<div className="dash-head">
<span className="dash-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" /></svg>{"AI Operations Command Center"}</span>{" "}
<span className="live-badge"><span className="pulse-dot" aria-hidden="true"></span>{"Live"}</span>
</div>
<p className="dash-note">{"// sample view — the AI operations dashboard style your facility receives"}</p>
<div className="kpis">
<div className="kpi"><p className="k-label">{"Patient Inquiries Handled"}</p><div className="k-val"><span className="count" data-target="8460" data-format="comma">{"0"}</span></div><p className="k-sub">{"this month, around the clock"}</p></div>
<div className="kpi"><p className="k-label">{"Appointments Automated"}</p><div className="k-val"><span className="count" data-target="3920" data-format="comma">{"0"}</span></div><p className="k-sub">{"booked, confirmed & reminded"}</p></div>
<div className="kpi"><p className="k-label">{"Staff Hours Saved"}</p><div className="k-val"><span className="count" data-target="1184" data-format="comma">{"0"}</span></div><p className="k-sub">{"admin moved to AI this month"}</p></div>
<div className="kpi"><p className="k-label">{"Departments Connected"}</p><div className="k-val"><span className="count" data-target="18">{"0"}</span></div><p className="k-sub">{"in one connected AI system"}</p></div>
</div>
<div className="dash-mid">
<div className="donut" role="img" aria-label="94.2 percent of patient journeys automated end to end">
<svg width="124" height="124" viewBox="0 0 120 120">
<defs><linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2dd4bf" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient></defs>
<circle className="d-track" cx="60" cy="60" r="50" fill="none" strokeWidth="10" />
<circle className="d-val" id="donutVal" data-rate="0.942" cx="60" cy="60" r="50" fill="none" strokeWidth="10" strokeDasharray="314.16" strokeDashoffset="314.16" />
</svg>
<div className="donut-center"><b><span className="count" data-target="94.2" data-decimals="1">{"0"}</span>{"%"}</b><span>{"Automated"}</span></div>
</div>
<div className="chart-box">
<p className="chart-title"><span>{"Patient flow — last 7 days"}</span><em>{"AI-handled"}</em></p>
<div className="bars" aria-hidden="true">
<div className="bar" style={{ "--h": "46%" } as CSSProperties}></div><div className="bar" style={{ "--h": "62%" } as CSSProperties}></div><div className="bar" style={{ "--h": "54%" } as CSSProperties}></div><div className="bar" style={{ "--h": "74%" } as CSSProperties}></div><div className="bar" style={{ "--h": "68%" } as CSSProperties}></div><div className="bar hot" style={{ "--h": "90%" } as CSSProperties}></div><div className="bar" style={{ "--h": "80%" } as CSSProperties}></div>
</div>
<div className="bar-labels" aria-hidden="true"><span>{"Mon"}</span><span>{"Tue"}</span><span>{"Wed"}</span><span>{"Thu"}</span><span>{"Fri"}</span><span>{"Sat"}</span><span>{"Sun"}</span></div>
</div>
</div>
<div className="pipe">
<p className="pipe-title">{"Patient journey — live flow"}</p>
<div className="pipe-track" id="pipeTrack">
<div className="pipe-fill" id="pipeFill"></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Inquiry"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Triage"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Booking"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Check-in"}</span></div>
<div className="pipe-step"><span className="pipe-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span>{"Follow-up"}</span></div>
</div>
</div>
<div className="feed">
<p className="feed-title">{"Recent AI activity"}</p>
<ul className="feed-list" id="feedList"></ul>
</div>
</div>
</div>
<div className="hero-billing-strip reveal">
<div className="hbs-txt">
<span className="hbs-tag">{"Service Line 2 · Separate"}</span>
<p><b>{"Medical Billing & RCM"}</b>{" — Your Practice Earned It. We Make Sure You Collect It. Clean claims, fewer denials, faster payments for US practices."}</p>
</div>
<div className="hbs-ctas">
<Link href="/contact" className="btn btn-white btn-sm">{"Get a Free Billing Audit"}</Link>{" "}
<Link href="/services" className="hbs-link">{"See Billing Services "}<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
</div>
</div>
<div className="marquee-zone">
<p className="marquee-label">{"Complete AI systems for every kind of facility"}</p>
<div className="marquee" aria-hidden="true">
<div className="mq-track">
<div className="mq-set"><span>{"Hospitals"}</span><span>{"Medical Centres"}</span><span>{"Clinics"}</span><span>{"Group Practices"}</span><span>{"Hospital Management"}</span><span>{"Clinic Management"}</span><span>{"Patient Journey"}</span><span>{"Research & Data"}</span><span>{"Operations"}</span><span>{"Custom AI"}</span></div>
<div className="mq-set"><span>{"Hospitals"}</span><span>{"Medical Centres"}</span><span>{"Clinics"}</span><span>{"Group Practices"}</span><span>{"Hospital Management"}</span><span>{"Clinic Management"}</span><span>{"Patient Journey"}</span><span>{"Research & Data"}</span><span>{"Operations"}</span><span>{"Custom AI"}</span></div>
</div>
</div>
</div>
</div>
</section>
<section className="section system">
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"AI Services · Service Line 1"}</p>
<h2>{"Six AI capabilities. One complete system for your facility."}</h2>
<p>{"We don't sell one-off tools. We design, build and run complete, connected AI systems for healthcare — in the six capability areas below. Open any one for the full detail: what it is, how it works, what's included and the step-by-step process. And if what you need isn't listed — if it's medical and it's AI, we can build it."}</p>
</div>
<div className="ai-cap-grid">
<div className="ai-cap reveal" style={{ "--d": "0s" } as CSSProperties}><span className="anum">{"AI · 01"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M12 8v4M10 10h4" /></svg></div><h3>{"Complete AI Hospital Management"}</h3><p>{"Front desk, patients, departments and administration — connected and run through one AI system designed around how your hospital actually works."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Whole-hospital AI system design, build and operation"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Front desk and patient flow covered end to end"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Department coordination inside one connected system"}</li></ul><Link href="/ai-services/hospital-management" className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
<div className="ai-cap reveal" style={{ "--d": ".07s" } as CSSProperties}><span className="anum">{"AI · 02"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V10M20 21V10M2 21h20" /><path d="M12 3v4M10 5h4" /><path d="M9 21v-4a3 3 0 0 1 6 0v4" /></svg></div><h3>{"AI Clinic Management"}</h3><p>{"A single clinic or a whole group of clinics — managed together from one AI system, with the same standards, visibility and patient experience at every location."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Complete AI system for one clinic or a clinic group"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Patient flow and daily clinic operations covered"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Multi-clinic management from a single system"}</li></ul><Link href="/ai-services/clinic-management" className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
<div className="ai-cap reveal" style={{ "--d": ".14s" } as CSSProperties}><span className="anum">{"AI · 03"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></svg></div><h3>{"Medical Research & Data"}</h3><p>{"Medical research, data analysis, reports and insights through AI — turning the data your facility already holds into decisions, publications and improvements."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Medical research support powered by AI"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Clinical and operational data analysis"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Outcome and cohort analysis from your own data"}</li></ul><Link href="/ai-services/research-and-data" className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
<div className="ai-cap reveal" style={{ "--d": "0s" } as CSSProperties}><span className="anum">{"AI · 04"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="2.2" /><circle cx="12" cy="12" r="2.2" /><circle cx="19" cy="12" r="2.2" /><path d="M7.2 12h2.6M14.2 12h2.6" /></svg></div><h3>{"Patient Journey Automation"}</h3><p>{"From the patient's first inquiry to their appointment to treatment follow-up — the entire journey automated as one connected flow, so no patient is lost between steps."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Complete patient journey mapped and automated"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Inquiry-to-appointment flow covered end to end"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Pre-visit preparation for patients and staff"}</li></ul><Link href="/ai-services/patient-journey" className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
<div className="ai-cap reveal" style={{ "--d": ".07s" } as CSSProperties}><span className="anum">{"AI · 05"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v5M16 4v5" /><path d="M7 14h4M7 17h7" /></svg></div><h3>{"Hospital Operations & Administration"}</h3><p>{"Staff workflows, records, documents and reporting — the everyday manual work of running a facility, moved to AI so your people can do the work only people can do."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Staff workflow automation across departments"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Records and document handling by AI"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Forms and routine paperwork automated"}</li></ul><Link href="/ai-services/operations" className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
<div className="ai-cap reveal" style={{ "--d": ".14s" } as CSSProperties}><span className="anum">{"AI · 06"}</span><div className="sic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9zM4 10H2M4 15H2M22 10h-2M22 15h-2M10 4V2M15 4V2M10 22v-2M15 22v-2" /></svg></div><h3>{"Custom AI Solutions for Healthcare"}</h3><p>{"Don't see what you need? Any medical-related AI service — for a hospital, a medical centre, a clinic or a research team — designed and built around your exact requirement."}</p><ul><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Any medical-related AI requirement considered"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Solution designed around your facility, not a template"}</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Written plan and exact quote before any build"}</li></ul><Link href="/ai-services/custom" className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
</div>
<div style={{ height: "44px" } as CSSProperties}></div>
<div className="sys-grid">
<div className="reveal-l">
<div className="sec-head" style={{ marginBottom: "22px" } as CSSProperties}>
<p className="kicker">{"How the system works"}</p>
<h2 style={{ fontSize: "clamp(24px,3vw,32px)" } as CSSProperties}>{"One system, working across your whole facility"}</h2>
</div>
<div className="sys-feats">
<div className="sys-feat"><div className="sic"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" /></svg></div><div><b>{"Complete system, not one-off tools"}</b><p>{"Front desk, patient journey, departments, research and admin — designed together, so nothing falls between separate tools."}</p></div></div>
<div className="sys-feat"><div className="sic"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg></div><div><b>{"Connected to the tools you already use"}</b><p>{"Your EHR, hospital or practice software, calendar, phone system, WhatsApp, website and CRM — the AI works inside your existing stack."}</p></div></div>
<div className="sys-feat"><div className="sic"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg></div><div><b>{"Human oversight, HIPAA-conscious by design"}</b><p>{"AI handles the routine; your doctors and staff keep control of clinical and sensitive decisions. Access is scoped, and patient data stays inside the agreed workflow."}</p></div></div>
<div className="sys-feat"><div className="sic"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4" /><path d="M21 3v6h-6" /></svg></div><div><b>{"We build it, run it, and keep improving it"}</b><p>{"You approve each stage before we build the next, your team is trained before go-live, and we keep monitoring and optimizing with you."}</p></div></div>
</div>
<div className="sys-note"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M12 11v5" /></svg><span>{"Sized to your facility — a single clinic does not get a hospital-sized project, and a hospital does not get a one-size tool."}</span></div>
</div>
<div className="scan-card reveal-r" aria-label="AI patient journey check preview">
<div className="scan-beam" aria-hidden="true"></div>
<div className="scan-head"><span className="t">{"AI Patient Journey — Live Check"}</span><span className="amt">{"24/7"}</span></div>
<p className="scan-sub">{"// sample view — one patient's journey, handled end to end by AI"}</p>
<div className="scan-row"><span className="code">{"INQ"}</span><span className="lbl">{"Patient inquiry answered"}<small>{"WhatsApp & phone · day or night"}</small></span><span className="scan-ck" style={{ animationDelay: ".4s" } as CSSProperties}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span className="pill ok" style={{ animationDelay: ".4s" } as CSSProperties}>{"Answered"}</span></div>
<div className="scan-row"><span className="code">{"APPT"}</span><span className="lbl">{"Appointment booked & confirmed"}<small>{"Synced to your calendar and EHR"}</small></span><span className="scan-ck" style={{ animationDelay: "1.4s" } as CSSProperties}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span className="pill sub" style={{ animationDelay: "1.4s" } as CSSProperties}>{"Booked"}</span></div>
<div className="scan-row"><span className="code">{"INTK"}</span><span className="lbl">{"Reminder & intake sent"}<small>{"Forms completed before the visit"}</small></span><span className="scan-ck" style={{ animationDelay: "2.4s" } as CSSProperties}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span className="pill ok" style={{ animationDelay: "2.4s" } as CSSProperties}>{"Ready"}</span></div>
<div className="scan-row"><span className="code">{"FUP"}</span><span className="lbl">{"Follow-up & recall scheduled"}<small>{"No patient lost after treatment"}</small></span><span className="scan-ck" style={{ animationDelay: "3.4s" } as CSSProperties}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span className="pill paid" style={{ animationDelay: "3.4s" } as CSSProperties}>{"Done"}</span></div>
<div className="scan-foot"><span className="res">{"Journey completed "}<b>{"end to end"}</b></span><span className="time">{"handled in minutes, not days"}</span></div>
</div>
</div>
<div className="integrate-bar on-dark reveal">
<h3>{"Your complete AI system, connected to the tools you already use"}</h3>
<p>{"A complete system only works if it talks to your existing stack. We connect it to:"}</p>
<div className="int-chips"><span>{"Your EHR"}</span><span>{"Hospital / Practice Management Software"}</span><span>{"Google Calendar"}</span><span>{"Phone / VoIP Systems"}</span><span>{"WhatsApp"}</span><span>{"Your Website"}</span><span>{"CRM"}</span><span>{"Clearinghouse"}</span><span>{"Email & SMS"}</span></div>
</div>
<div className="ai-process reveal">
<h3>{"How an AI Services project runs"}</h3>
<p>{"A clear, staged rollout — you approve each step before we build the next, and your team is trained before anything goes live."}</p>
<div className="ai-steps">
<div className="ai-step"><span className="n">{"Step 1"}</span><b>{"Discovery Call"}</b><p>{"We map how your whole facility runs — departments, patient flow, records and administration."}</p></div>
<div className="ai-step"><span className="n">{"Step 2"}</span><b>{"AI Plan & Quote"}</b><p>{"A written plan: which capabilities your system covers, what it connects to, timeline and exact price."}</p></div>
<div className="ai-step"><span className="n">{"Step 3"}</span><b>{"Build & Connect"}</b><p>{"We build your complete AI system and connect it to your existing software and workflows."}</p></div>
<div className="ai-step"><span className="n">{"Step 4"}</span><b>{"Test With Your Team"}</b><p>{"Real scenarios tested with your staff — routing and handoffs refined before launch."}</p></div>
<div className="ai-step"><span className="n">{"Step 5"}</span><b>{"Go Live & Training"}</b><p>{"Launch with team training and simple guides, so everyone knows what the AI handles."}</p></div>
<div className="ai-step"><span className="n">{"Step 6"}</span><b>{"Support & Optimization"}</b><p>{"We run and monitor your system with you, and keep improving its coverage."}</p></div>
</div>
</div>
<div className="ai-ctas reveal">
<Link href="/contact" className="btn btn-glow">{"Book a Free AI Consultation"}</Link>{" "}
<Link href="/ai-services" className="btn btn-ghost" style={{ color: "#eaf3fa", borderColor: "rgba(255,255,255,.35)" } as CSSProperties}>{"See the Full AI Services Page"}</Link>{" "}
<span className="note">{"Free consultation, written plan and exact quote — no obligation to proceed."}</span>
</div>
</div>
</section>
<section className="section" style={{ paddingTop: "64px", paddingBottom: "64px" } as CSSProperties}>
<div className="wrap">
<div className="audit reveal">
<div>
<p className="kicker" style={{ color: "#5eead4" } as CSSProperties}>{"Free AI Consultation"}</p>
<h2>{"See what a complete AI system would do for your facility"}</h2>
<p>{"Tell us about your hospital, medical centre or clinic — we'll map how it runs today and show you, in a written plan, exactly what an AI system would cover."}</p>
<ul>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"A map of your facility's workflows — where AI saves the most time"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Which of the six capabilities fit you — and in what order to roll them out"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"What it connects to in your existing stack — EHR, calendar, phone, WhatsApp"}</li>
<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Written plan and exact quote, no obligation"}</li>
</ul>
</div>
<div className="audit-side">
<h3>{"Book your free consultation"}</h3>
<p>{"One free call about your facility — hospitals, medical centres, clinics and practices of every size."}</p>
<Link href="/contact" className="btn btn-white" style={{ width: "100%", justifyContent: "center" } as CSSProperties}>{"Book a Free AI Consultation"}</Link>
</div>
</div>
</div>
</section>
<section className="section section-soft" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head center reveal">
<p className="kicker">{"Explore the site"}</p>
<h2>{"Two separate services — AI first, each with its own page"}</h2>
<p>{"AI Services and Medical Billing are not mixed together here. AI Services leads — with its own page and the full showcase above — and Medical Billing has its own page too, plus specialties, process and pricing, each laid out in full."}</p>
</div>
<div className="explore-grid">
<Link href="/ai-services" className="explore-card reveal" style={{ "--d": ".07s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" /></svg></div><h3>{"AI Services"}</h3><p>{"A separate service line: complete AI systems for healthcare — hospital management, clinic management, research & data, patient journey and operations, for hospitals, medical centres, clinics & practices."}</p><span className="go">{"Explore AI Services "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services" className="explore-card reveal" style={{ "--d": "0s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 13h6M9 17h6" /></svg></div><h3>{"Medical Billing Services"}</h3><p>{"Billing, coding, denial management, A/R follow-up, eligibility and credentialing — plus full RCM. Billing only — AI lives on its own page."}</p><span className="go">{"View Services "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/why-us" className="explore-card reveal" style={{ "--d": ".14s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg></div><h3>{"Why Choose Us"}</h3><p>{"How we work, what we commit to on every account — and how we differ from a typical billing service."}</p><span className="go">{"Why Medexa "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/specialties" className="explore-card reveal" style={{ "--d": "0s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div><h3>{"Specialties"}</h3><p>{"12 specialties with coding and payer rules matched to each — search yours and see how we bill it."}</p><span className="go">{"Find Your Specialty "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/how-it-works" className="explore-card reveal" style={{ "--d": ".07s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div><h3>{"How It Works"}</h3><p>{"From free audit to go-live in five clear steps — plus how an AI Services project runs, separately."}</p><span className="go">{"See the Process "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/contact" className="explore-card reveal" style={{ "--d": ".14s" } as CSSProperties}><div className="eic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg></div><h3>{"Free AI Consultation & Audit"}</h3><p>{"Start with a free AI consultation for your facility — or a free billing audit with written findings. Yours to keep either way."}</p><span className="go">{"Book the Consultation "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>
</div>
</div>
</section>
<section className="section section-soft" style={{ paddingBottom: "8px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"Medical Billing & RCM · Service Line 2"}</p>
<h2>{"Your Practice Earned It. We Make Sure You Collect It."}</h2>
<p>{"Our second, separate service line: medical billing & revenue cycle management for US practices — clean claims, fewer denials, faster payments. It is scoped, priced and delivered separately from AI Services; take either one on its own. Rates as low as "}<b style={{ color: "var(--ink)" } as CSSProperties}>{"2.99% of collections"}</b>{", tiered by your monthly collections — and you only pay when you get paid."}</p>
</div>
<div className="int-chips reveal" style={{ marginBottom: "8px" } as CSSProperties}><span>{"We bill all major payers"}</span><span>{"Medicare"}</span><span>{"Blue Cross Blue Shield"}</span><span>{"Aetna"}</span><span>{"Cigna"}</span><span>{"UnitedHealthcare"}</span><span>{"Humana"}</span><span>{"TRICARE"}</span><span>{"Medicaid"}</span><span>{"Anthem"}</span><span>{"Kaiser Permanente"}</span></div>
</div>
</section>
<section className="section" style={{ paddingTop: "64px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"Medical Billing · Sound familiar?"}</p>
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
<section className="section" style={{ paddingTop: "56px" } as CSSProperties}>
<div className="wrap">
<div className="sec-head reveal">
<p className="kicker">{"Billing services at a glance"}</p>
<h2>{"Nine billing services, one goal: paid claims"}</h2>
<p>{"Take one service or hand us the full cycle. Every service includes specialist review, payer-rule checks and clear reporting — the full detail for each lives on the Medical Billing page."}</p>
</div>
<div className="svc-grid">
<Link href="/services/medical-billing" className="svc reveal" style={{ "--d": "0s" } as CSSProperties}><h3>{"Medical Billing"}</h3><p>{"Charge entry, claim scrubbing and electronic submission, with payment posting and patient statements."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/medical-coding" className="svc reveal" style={{ "--d": ".07s" } as CSSProperties}><h3>{"Medical Coding"}</h3><p>{"ICD-10, CPT and HCPCS review matched to your documentation and each payer's rules."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/denial-management" className="svc reveal" style={{ "--d": ".14s" } as CSSProperties}><h3>{"Denial Management"}</h3><p>{"Every denial root-caused, corrected and appealed — plus prevention so the same denial stops repeating."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/ar-follow-up" className="svc reveal" style={{ "--d": "0s" } as CSSProperties}><h3>{"A/R Follow-Up"}</h3><p>{"Systematic follow-up by aging bucket — old balances worked until every dollar is resolved."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/eligibility-verification" className="svc reveal" style={{ "--d": ".07s" } as CSSProperties}><h3>{"Eligibility & Benefits Verification"}</h3><p>{"Coverage, copay and deductible verified before the visit, with prior-authorization support."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/credentialing" className="svc reveal" style={{ "--d": ".14s" } as CSSProperties}><h3>{"Credentialing & Payer Enrollment"}</h3><p>{"Applications, CAQH and re-credentialing timelines tracked — so enrollment gaps never block payments."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/billing-audit" className="svc reveal" style={{ "--d": "0s" } as CSSProperties}><h3>{"Medical Billing Audit"}</h3><p>{"A structured review of claims, coding, denials and aging A/R — findings in writing, with a fix list."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/clearinghouse" className="svc reveal" style={{ "--d": ".07s" } as CSSProperties}><h3>{"Clearinghouse Services"}</h3><p>{"One reliable connection to every payer — claims scrubbed, submitted and tracked electronically."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>{" "}
<Link href="/services/healthcare-seo" className="svc reveal" style={{ "--d": ".14s" } as CSSProperties}><h3>{"Healthcare SEO"}</h3><p>{"Patients find you first — local search, your Google profile and your website, optimized."}</p><span className="detail-link">{"View full detail "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></Link>
</div>
<div style={{ height: "36px" } as CSSProperties}></div>
<div className="rcm-banner reveal">
<p className="kicker" style={{ color: "#5eead4" } as CSSProperties}>{"Full Revenue Cycle Management"}</p>
<h2>{"One team for the entire journey of every dollar"}</h2>
<p>{"End-to-end revenue cycle management — from the eligibility check before the visit to final payment posting and reporting. Nothing falls between departments, because there are no gaps between steps."}</p>
<div style={{ marginBottom: "22px" } as CSSProperties}><Link href="/services/revenue-cycle-management" className="btn btn-white">{"View the Full RCM Detail Page"}</Link></div>
<div className="rcm-chain">
<span className="chip">{"Eligibility Check"}</span><span className="arr">{"→"}</span><span className="chip">{"Coding"}</span><span className="arr">{"→"}</span><span className="chip">{"Claim Submission"}</span><span className="arr">{"→"}</span><span className="chip">{"Denial Management"}</span><span className="arr">{"→"}</span><span className="chip">{"A/R Follow-Up"}</span><span className="arr">{"→"}</span><span className="chip">{"Payment Posting"}</span><span className="arr">{"→"}</span><span className="chip">{"Reporting"}</span>
</div>
</div>
<div style={{ height: "44px" } as CSSProperties}></div>
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
<h2>{"Start with a free AI consultation"}</h2>
<p className="cs-lede">{"Ask for a free AI consultation, a free billing audit, or both — they're separate services, and we'll scope whichever you choose on one free call, with written findings and an exact quote."}</p>
<div className="contact-points">
<div className="cp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span><b>{"Free first step"}</b>{" — a free AI consultation or a free billing audit, with written findings."}</span></div>
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
