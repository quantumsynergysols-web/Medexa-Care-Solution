import type { CSSProperties } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/LeadForms";
import FaqFx from "@/components/fx/FaqFx";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("faq");

export default function FaqPage() {
  return (
    <>
<div className="page active" data-page="faq">
<section className="page-hero">
<div className="grid-bg" aria-hidden="true"></div>
<div className="wrap">
<nav className="crumbs" aria-label="Breadcrumb"><Link href="/">{"Home"}</Link><span className="sep">{"/"}</span><span className="cur">{"FAQ"}</span></nav>
<p className="kicker">{"Frequently Asked Questions"}</p>
<h1>{"Questions practices "}<span className="hl">{"ask us first"}</span></h1>
<p className="lede">{"Billing, pricing, security, AI Services and specialties — answered plainly. Search below, or ask us directly if yours isn't here."}</p>
<div className="hero-chips">
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"10 questions answered"}</span>{" "}
<span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>{"Billing · AI Services · Pricing · Security"}</span>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="faq-tools reveal">
<div className="faq-search">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>{" "}
<input type="search" id="faqSearch" placeholder="Search questions — try “cost”, “EHR”, “HIPAA”, “AI”…" aria-label="Search questions" />
</div>
</div>
<h3 className="faq-group-title reveal"><span className="gic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 13h6M9 17h6" /></svg></span>{"Billing & RCM"}</h3>
<div className="faq-list">
<div className="faq reveal" data-q="difference between medical billing and rcm revenue cycle"><button type="button" aria-expanded="false">{"What is the difference between medical billing and RCM?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"Medical billing is one part of the picture: preparing, submitting, and posting claims. Revenue cycle management (RCM) covers the whole financial journey of a patient visit — eligibility verification before the visit, coding, claim submission, denial management, A/R follow-up, payment posting, and reporting. Medexa Care Solutions handles the full cycle, so the gaps between steps — where revenue usually leaks — are covered."}</p></div></div>
<div className="faq reveal" data-q="ehr work with our system software"><button type="button" aria-expanded="false">{"Do you work with our EHR?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"Yes — our approach is to work inside your existing EHR and clearinghouse rather than asking you to change systems. During onboarding we set up secure access and fit our workflow to how your practice already documents and schedules. You keep your system; we handle the billing inside it."}</p></div></div>
<div className="faq reveal" data-q="onboarding how long take timeline setup"><button type="button" aria-expanded="false">{"How long does onboarding take?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"It depends mainly on payer setup and whether any credentialing or enrollment work is needed, which varies by practice. On your audit call, we'll map out your specific timeline — what we need from you, what payers need from us — so you know exactly what to expect before anything goes live."}</p></div></div>
<div className="faq reveal" data-q="specialties serve family cardiology"><button type="button" aria-expanded="false">{"Which specialties do you serve?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"We work with independent practices and small groups across specialties including Family Medicine, Internal Medicine, Pediatrics, Cardiology, Orthopedics, Dermatology, Behavioral Health, Physical Therapy, Urgent Care, Gastroenterology, Nephrology, and Pain Management. See the Specialties page for detail — and if yours isn't listed, ask us; if we're not the right fit, we'll say so."}</p></div></div>
</div>
<h3 className="faq-group-title reveal"><span className="gic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>{"Pricing & Terms"}</h3>
<div className="faq-list">
<div className="faq reveal" data-q="how much does it cost price pricing percentage"><button type="button" aria-expanded="false">{"How much does billing cost?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"Our billing is priced on a tiered percentage of your monthly collections — rates as low as 2.99% of collections. Up to $50,000/month in collections is 4.99%; $50,000–$150,000 is 3.99%; and over $150,000 is 2.99%. It is a pay-for-paid model: the percentage applies only to money actually collected for you, so you only pay when you get paid. Send us your monthly collections through the pricing form and we will confirm your tier and exact rate in writing — with no obligation to proceed."}</p></div></div>
<div className="faq reveal" data-q="long term contract lock in terms"><button type="button" aria-expanded="false">{"Do you require a long-term contract?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"We aim for flexible engagements that fit your practice rather than locking you in. The exact terms depend on the services you choose, and we'll walk through them openly on your audit call — before you sign anything — so there are no surprises."}</p></div></div>
</div>
<h3 className="faq-group-title reveal"><span className="gic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /></svg></span>{"Security & HIPAA"}</h3>
<div className="faq-list">
<div className="faq reveal" data-q="patient data secure hipaa baa phi privacy"><button type="button" aria-expanded="false">{"Is patient data secure? How do you handle HIPAA?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"Protecting patient information is built into how we work. A Business Associate Agreement (BAA) is signed before any patient information is accessed, access is limited to what's needed for your billing, and our processes are designed to be HIPAA-conscious throughout — in system access, communication, and reporting."}</p></div></div>
</div>
<h3 className="faq-group-title reveal"><span className="gic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" /></svg></span>{"AI Services"}</h3>
<div className="faq-list">
<div className="faq reveal" data-q="ai services without billing standalone separate"><button type="button" aria-expanded="false">{"Can we take AI Services without your Medical Billing services?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"Yes — that is exactly how it is set up. Medical Billing and AI Services are two separate service lines on this one website. AI Services — complete AI systems for healthcare, across six capabilities: Complete AI Hospital Management, AI Clinic Management, Medical Research & Data, Patient Journey Automation, Hospital Operations & Administration, and Custom AI Solutions — can be taken entirely on their own, with their own scope and quote. Many facilities start with one capability and grow into the full system later."}</p></div></div>
<div className="faq reveal" data-q="ai replace staff systems jobs"><button type="button" aria-expanded="false">{"Will your AI Services replace our staff or our current systems?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"No. Our AI Services are built around how your facility already runs and the systems you already use. The AI takes over routine operations, coordination, records and administration — the everyday manual work — while anything urgent, clinical or sensitive stays with your people. Your team keeps control; the system handles the volume."}</p></div></div>
<div className="faq reveal" data-q="ai services cost price how much"><button type="button" aria-expanded="false">{"How much do AI Services cost?"}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></button><div className="ans"><p>{"It depends on scope — running one clinic on an AI system is a very different project from a complete AI system for a full hospital. After a free AI consultation, you'll receive a written plan with an exact quote before any work begins. No build starts without your approval of that plan."}</p></div></div>
</div>
<div className="faq-empty" id="faqEmpty">{"No question matches that search. "}<Link href="/contact" style={{ fontWeight: "700" } as CSSProperties}>{"Ask us directly"}</Link>{" — we'll answer on your audit or consultation call."}</div>
<div style={{ maxWidth: "820px", margin: "40px auto 0" } as CSSProperties} className="reveal">
<div className="ai-note" style={{ marginTop: "0", maxWidth: "none" } as CSSProperties}>
<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0e7c7b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>{" "}
<span><b>{"Still have a question?"}</b>{" Send it with the contact form and we'll answer it on your free billing audit or AI consultation call — no obligation either way. "}<Link href="/contact" style={{ fontWeight: "700" } as CSSProperties}>{"Go to Contact →"}</Link></span>
</div>
</div>
</div>
</section>
<section className="contact-strip">
<div className="wrap contact-strip-grid">
<div className="reveal-l">
<p className="kicker">{"Contact Us"}</p>
<h2>{"Still have a question? Contact us"}</h2>
<p className="cs-lede">{"Send your question with this form and we'll answer it on your free billing audit or AI consultation call — no obligation either way."}</p>
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
<FaqFx />
    </>
  );
}
