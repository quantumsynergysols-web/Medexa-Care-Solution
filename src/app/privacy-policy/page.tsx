import type { Metadata } from "next";
import Link from "next/link";

/* PLACEHOLDER: the final text must be supplied by Medexa's legal counsel before launch (SRS question Q9). */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Medexa Care Solutions website.",
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
            <span className="cur">Privacy Policy</span>
          </nav>
          <p className="kicker">Legal</p>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap legal">
          <p>
            <b>This page is awaiting its final text.</b> The full policy describing what contact details our forms collect, why, and how long we keep them will be published here before launch.
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
