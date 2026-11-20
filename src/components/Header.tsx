"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BurgerIcon } from "@/components/icons";
import { isActive, MAIN_NAV, MOBILE_NAV } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const logo = <Image src="/logo.png" alt="Medexa Care Solutions" width={1804} height={728} priority />;

  return (
    <header className={`site${scrolled ? " scrolled" : ""}`} id="siteHeader">
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="Medexa Care Solutions — home" onClick={close}>
          {logo}
        </Link>
        <nav className="links" aria-label="Main">
          {MAIN_NAV.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="nav-cta">
          <Link className="btn btn-primary" href="/contact" onClick={close}>
            Free Billing Audit
          </Link>
          <button
            className="burger"
            id="burger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen((v) => !v)}
          >
            <BurgerIcon />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        <Link className="mobile-brand" href="/" aria-label="Medexa Care Solutions — home" onClick={close}>
          {logo}
        </Link>
        {MOBILE_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href, pathname) ? "active" : undefined}
            onClick={close}
          >
            {item.label} <span className="m-arr">→</span>
          </Link>
        ))}
        <Link href="/contact" style={{ color: "var(--teal)" }} onClick={close}>
          Get a Free Billing Audit <span className="m-arr">→</span>
        </Link>
        <Link href="/contact" style={{ color: "var(--teal)" }} onClick={close}>
          Book a Free AI Consultation <span className="m-arr">→</span>
        </Link>
      </div>
    </header>
  );
}
