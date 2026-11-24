import type { Metadata } from "next";
import content from "@/content/pages.json";

export const SITE_NAME = "Medexa Care Solutions";
/**
 * Public base URL. Set NEXT_PUBLIC_SITE_URL for the real domain. On Vercel without it, the
 * project's production URL is used so canonical links and the sitemap never say "localhost".
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

/** A Vercel deployment without the real domain configured is a staging copy: keep it out of search engines. */
export const IS_STAGING = Boolean(process.env.VERCEL) && !process.env.NEXT_PUBLIC_SITE_URL;

type PageMeta = { route: string; title: string; description: string };

export const PAGES = content.pages as Record<string, PageMeta>;
/** Old single-page anchors from the prototype (#system, #audit-form …) mapped to page ids. */
export const LEGACY_ANCHORS = content.legacy as Record<string, string>;

export function pageMetadata(id: string): Metadata {
  const page = PAGES[id];
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.route },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.route,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: "/logo.png", width: 1804, height: 728, alt: SITE_NAME }],
    },
    twitter: { card: "summary", title: page.title, description: page.description },
  };
}

/* ---------------- Navigation ----------------
 * Team lead direction (24 Nov 2026): AI Services lead; Medical Billing is ONE menu entry whose
 * service pages live inside it. Billing-only pages (Solutions, Specialties, Pricing, For You)
 * therefore sit in the Medical Billing menu instead of the top bar.
 */
export type NavLink = { href: string; label: string; hint?: string };
/** An empty title continues the previous column's heading. */
export type NavGroup = { title: string; links: NavLink[] };
export type NavItem = {
  href: string;
  label: string;
  /** Extra path prefixes that mark this item active (detail pages highlight their parent). */
  match?: string[];
  menu?: { groups: NavGroup[]; allLabel: string; cta: NavLink };
};

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/ai-services",
    label: "AI Services",
    menu: {
      groups: [
        {
          title: "AI capabilities",
          links: [
            { href: "/ai-services/hospital-management", label: "Complete AI Hospital Management", hint: "Front desk, departments and admin in one system" },
            { href: "/ai-services/clinic-management", label: "AI Clinic Management", hint: "One clinic or a whole group, run together" },
            { href: "/ai-services/research-and-data", label: "Medical Research & Data", hint: "Analysis, reports and insights from your data" },
          ],
        },
        {
          title: "",
          links: [
            { href: "/ai-services/patient-journey", label: "Patient Journey Automation", hint: "Inquiry to appointment to follow-up" },
            { href: "/ai-services/operations", label: "Hospital Operations & Administration", hint: "Workflows, records and reporting moved to AI" },
            { href: "/ai-services/custom", label: "Custom AI Solutions", hint: "If it's medical and it's AI, we can build it" },
          ],
        },
      ],
      allLabel: "All AI Services",
      cta: { href: "/contact", label: "Book a Free AI Consultation" },
    },
  },
  {
    href: "/services",
    label: "Medical Billing",
    match: ["/solutions", "/specialties", "/pricing", "/for-you"],
    menu: {
      groups: [
        {
          title: "Billing services",
          links: [
            { href: "/services/medical-billing", label: "Medical Billing" },
            { href: "/services/medical-coding", label: "Medical Coding" },
            { href: "/services/denial-management", label: "Denial Management" },
            { href: "/services/ar-follow-up", label: "A/R Follow-Up" },
            { href: "/services/eligibility-verification", label: "Eligibility Verification" },
          ],
        },
        {
          title: "",
          links: [
            { href: "/services/credentialing", label: "Credentialing & Enrollment" },
            { href: "/services/revenue-cycle-management", label: "Full RCM" },
            { href: "/services/billing-audit", label: "Medical Billing Audit" },
            { href: "/services/clearinghouse", label: "Clearinghouse Services" },
            { href: "/services/healthcare-seo", label: "Healthcare SEO" },
          ],
        },
        {
          title: "Pricing & platform",
          links: [
            { href: "/pricing", label: "Pricing — Get a Quote" },
            { href: "/specialties", label: "Specialties" },
            { href: "/for-you", label: "Who We Serve" },
            { href: "/solutions", label: "Solutions — Billing Platform" },
            { href: "/solutions/clearinghouse", label: "Clearinghouse Platform" },
            { href: "/solutions/practice-software", label: "Practice Software" },
          ],
        },
      ],
      allLabel: "All Medical Billing services",
      cta: { href: "/contact", label: "Get a Free Billing Audit" },
    },
  },
  { href: "/how-it-works", label: "Process" },
  { href: "/why-us", label: "Why Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

/** Exact or nested match: a detail page highlights its parent hub, as in the prototype router. */
export function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function isItemActive(item: NavItem, pathname: string): boolean {
  return [item.href, ...(item.match ?? [])].some((h) => isActive(h, pathname));
}
