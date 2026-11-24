"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BurgerIcon } from "@/components/icons";
import { isActive, isItemActive, NAV, type NavItem } from "@/lib/site";

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Desktop dropdown: opens on hover, on the chevron button (click / keyboard), closes on Escape. */
function DesktopMenu({
  item,
  pathname,
  open,
  setOpen,
}: {
  item: NavItem & { menu: NonNullable<NavItem["menu"]> };
  pathname: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const active = isItemActive(item, pathname);
  const panelId = `menu-${item.href.replace(/\W/g, "") || "home"}`;
  const cols = item.menu.groups.length;
  return (
    <div
      className={`nav-dd${open ? " open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          (e.currentTarget.querySelector(".dd-toggle") as HTMLElement | null)?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        className={active ? "active" : undefined}
        aria-current={pathname === item.href ? "page" : undefined}
        onClick={() => setOpen(false)}
      >
        {item.label}
      </Link>
      <button
        type="button"
        className="dd-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${item.label} pages`}
        onClick={() => setOpen(!open)}
      >
        <Chevron />
      </button>
      <div className="dd-wrap" id={panelId}>
        <div className="dd-panel" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {item.menu.groups.map((group, gi) => (
            <div className="dd-group" key={gi}>
              <p className="dd-title" aria-hidden={group.title ? undefined : true}>
                {group.title || " "}
              </p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={isActive(link.href, pathname) ? "active" : undefined}
                      aria-current={pathname === link.href ? "page" : undefined}
                      tabIndex={open ? undefined : -1}
                      onClick={() => setOpen(false)}
                    >
                      <span className="dd-t">{link.label}</span>
                      {link.hint ? <span className="dd-d">{link.hint}</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="dd-foot">
            <Link href={item.href} className="dd-all" tabIndex={open ? undefined : -1} onClick={() => setOpen(false)}>
              {item.menu.allLabel} <Arrow />
            </Link>
            <Link href={item.menu.cta.href} className="btn btn-primary btn-sm dd-cta" tabIndex={open ? undefined : -1} onClick={() => setOpen(false)}>
              {item.menu.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open dropdown when clicking elsewhere on the page.
  useEffect(() => {
    if (!desktopMenu) return;
    const onDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setDesktopMenu(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [desktopMenu]);

  const closeAll = () => {
    setMobileOpen(false);
    setDesktopMenu(null);
  };

  const toggleMobile = () => {
    if (!mobileOpen) {
      // Open the group that contains the current page, so the visitor sees where they are.
      const current = NAV.find((item) => item.menu && isItemActive(item, pathname));
      setMobileGroup(current?.href ?? null);
    }
    setMobileOpen((v) => !v);
  };

  const logo = <Image src="/logo.png" alt="Medexa Care Solutions" width={1804} height={728} priority />;

  return (
    <header ref={headerRef} className={`site${scrolled ? " scrolled" : ""}`} id="siteHeader">
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="Medexa Care Solutions — home" onClick={closeAll}>
          {logo}
        </Link>
        <nav className="links" aria-label="Main">
          {NAV.map((item) => {
            if (item.menu) {
              return (
                <DesktopMenu
                  key={item.href}
                  item={item as NavItem & { menu: NonNullable<NavItem["menu"]> }}
                  pathname={pathname}
                  open={desktopMenu === item.href}
                  setOpen={(open) => setDesktopMenu(open ? item.href : null)}
                />
              );
            }
            const active = isItemActive(item, pathname);
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
          <Link className="btn btn-primary" href="/contact" onClick={closeAll}>
            Free AI Consultation
          </Link>
          <button
            className="burger"
            id="burger"
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobileMenu"
            onClick={toggleMobile}
          >
            <BurgerIcon />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} id="mobileMenu">
        <Link className="mobile-brand" href="/" aria-label="Medexa Care Solutions — home" onClick={closeAll}>
          {logo}
        </Link>
        {NAV.map((item) => {
          const active = isItemActive(item, pathname);
          if (!item.menu) {
            return (
              <Link key={item.href} href={item.href} className={active ? "active" : undefined} onClick={closeAll}>
                {item.label} <span className="m-arr">→</span>
              </Link>
            );
          }
          const expanded = mobileGroup === item.href;
          const subId = `m-sub-${item.href.replace(/\W/g, "")}`;
          return (
            <div key={item.href} className={`m-group${expanded ? " expanded" : ""}`}>
              <div className="m-head">
                <Link href={item.href} className={active ? "active" : undefined} onClick={closeAll}>
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="m-toggle"
                  aria-expanded={expanded}
                  aria-controls={subId}
                  aria-label={`${expanded ? "Hide" : "Show"} ${item.label} pages`}
                  onClick={() => setMobileGroup(expanded ? null : item.href)}
                >
                  <Chevron />
                </button>
              </div>
              <div className="m-sub" id={subId} hidden={!expanded}>
                {item.menu.groups.flatMap((g) => g.links).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={pathname === link.href ? "active" : undefined}
                    onClick={closeAll}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <Link href="/contact" className="m-cta" style={{ color: "var(--teal)" }} onClick={closeAll}>
          Book a Free AI Consultation <span className="m-arr">→</span>
        </Link>
        <Link href="/contact" className="m-cta" style={{ color: "var(--teal)" }} onClick={closeAll}>
          Get a Free Billing Audit <span className="m-arr">→</span>
        </Link>
      </div>
    </header>
  );
}
