import type { Metadata } from "next";
import content from "@/content/pages.json";

export const SITE_NAME = "Medexa Care Solutions";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

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

/** Desktop navigation, in the same order as the approved prototype. */
export const MAIN_NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Medical Billing" },
  { href: "/ai-services", label: "AI Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/specialties", label: "Specialties" },
  { href: "/how-it-works", label: "Process" },
  { href: "/why-us", label: "Why Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const MOBILE_NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Medical Billing" },
  { href: "/ai-services", label: "AI Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/for-you", label: "For You" },
  { href: "/specialties", label: "Specialties" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/why-us", label: "Why Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing — Get a Quote" },
] as const;

/** A detail page highlights its parent hub, as in the prototype router. */
export function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}
