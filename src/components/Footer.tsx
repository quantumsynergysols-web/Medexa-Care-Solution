import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
<footer className="site">
<div className="wrap">
<div className="foot-grid">
<div>
<Link href="/" className="brand" aria-label="Medexa Care Solutions — home"><Image src="/logo.png" alt="Medexa Care Solutions" width={1804} height={728} /></Link>
<p className="tagline">{"Your Practice Earned It. We Make Sure You Collect It. Two separate services: Medical Billing & RCM for US practices — and AI Services for hospitals, medical centres, clinics & practices."}</p>
</div>
<div>
<h4>{"Pages"}</h4>
<ul>
<li><Link href="/">{"Home"}</Link></li>
<li><Link href="/services">{"Medical Billing"}</Link></li>
<li><Link href="/ai-services">{"AI Services"}</Link></li>
<li><Link href="/solutions">{"Solutions"}</Link></li>
<li><Link href="/for-you">{"For You — Who We Serve"}</Link></li>
<li><Link href="/pricing">{"Pricing — Get a Quote"}</Link></li>
<li><Link href="/how-it-works">{"How It Works"}</Link></li>
<li><Link href="/why-us">{"Why Us"}</Link></li>
<li><Link href="/faq">{"FAQ"}</Link></li>
<li><Link href="/contact">{"Contact Us"}</Link></li>
</ul>
</div>
<div>
<h4>{"Medical Billing"}</h4>
<ul>
<li><Link href="/services/medical-billing">{"Medical Billing"}</Link></li>
<li><Link href="/services/medical-coding">{"Medical Coding"}</Link></li>
<li><Link href="/services/denial-management">{"Denial Management"}</Link></li>
<li><Link href="/services/ar-follow-up">{"A/R Follow-Up"}</Link></li>
<li><Link href="/services/eligibility-verification">{"Eligibility Verification"}</Link></li>
<li><Link href="/services/credentialing">{"Credentialing & Enrollment"}</Link></li>
<li><Link href="/services/revenue-cycle-management">{"Full RCM"}</Link></li>
<li><Link href="/services/billing-audit">{"Medical Billing Audit"}</Link></li>
<li><Link href="/services/clearinghouse">{"Clearinghouse Services"}</Link></li>
<li><Link href="/services/healthcare-seo">{"Healthcare SEO"}</Link></li>
</ul>
</div>
<div>
<h4>{"AI Services"}</h4>
<ul>
<li><Link href="/ai-services/hospital-management">{"Complete AI Hospital Management"}</Link></li>
<li><Link href="/ai-services/clinic-management">{"AI Clinic Management"}</Link></li>
<li><Link href="/ai-services/research-and-data">{"Medical Research & Data"}</Link></li>
<li><Link href="/ai-services/patient-journey">{"Patient Journey Automation"}</Link></li>
<li><Link href="/ai-services/operations">{"Hospital Operations & Administration"}</Link></li>
<li><Link href="/ai-services/custom">{"Custom AI Solutions for Healthcare"}</Link></li>
<li><Link href="/specialties">{"All Specialties"}</Link></li>
<li><Link href="/solutions/billing-platform">{"Medexa Billing Platform"}</Link></li>
<li><Link href="/solutions/clearinghouse">{"Clearinghouse"}</Link></li>
<li><Link href="/solutions/practice-software">{"Practice Software"}</Link></li>
<li><Link href="/contact">{"Free AI Consultation"}</Link></li>
</ul>
</div>
</div>
<div className="foot-bottom">
<span>{"© 2026 Medexa Care Solutions. All rights reserved."} <Link href="/privacy-policy">{"Privacy Policy"}</Link>{" · "}<Link href="/terms">{"Terms"}</Link></span>{" "}
<span>{"Please do not send patient / PHI information through this website."}</span>
</div>
</div>
</footer>
  );
}
