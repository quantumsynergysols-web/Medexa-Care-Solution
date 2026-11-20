"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LEGACY_ANCHORS, PAGES } from "@/lib/site";

/**
 * Page-level behaviour carried over from the prototype:
 *  - staggered reveal of .reveal / .reveal-l / .reveal-r elements on every page change
 *  - redirect of old hash links (#/services, #audit-form …) to the new clean URLs
 */
export default function RouteEffects() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const raw = window.location.hash.replace(/^#\/?/, "");
    if (!raw) return;
    const target = PAGES[raw] ?? PAGES[LEGACY_ANCHORS[raw] ?? ""];
    if (target) router.replace(target.route);
  }, [router]);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("main .reveal, main .reveal-l, main .reveal-r"));
    els.forEach((el) => el.classList.remove("in"));
    // Timers rather than requestAnimationFrame: rAF pauses while a tab is not painting,
    // which would leave content invisible. A short first delay still lets the hidden
    // state paint, so the staggered entrance animates as in the prototype.
    const timers = els.map((el, i) => window.setTimeout(() => el.classList.add("in"), 30 + Math.min(i * 40, 400)));
    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return null;
}
