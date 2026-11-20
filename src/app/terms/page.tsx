import type { Metadata } from "next";
import Link from "next/link";

/* PLACEHOLDER: the final text must be supplied by Medexa's legal counsel before launch (SRS question Q9). */
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Medexa Care Solutions website.",
  robots: { index: false },
};

export default function LegalPage() {
  return (
    <div className="page active">
      <section className="page-hero">
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="cur">Terms of Service</span>
          </nav>
          <p className="kicker">Legal</p>
          <h1>Terms of Service</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap legal">
          <p>
            <b>This page is awaiting its final text.</b> The full terms governing use of this website will be published here before launch.
          </p>
          <p>
            Please do not send patient / PHI information through this website. Questions in the meantime?{" "}
            <Link href="/contact">Contact us</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
