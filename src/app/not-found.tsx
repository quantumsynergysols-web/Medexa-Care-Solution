import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page active">
      <section className="page-hero">
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="wrap">
          <p className="kicker">Error 404</p>
          <h1>
            This page <span className="hl">could not be found</span>
          </h1>
          <p className="lede">
            The link may be old or mistyped. Head back to the home page, or tell us what you were looking for.
          </p>
          <div className="hero-ctas-row">
            <Link href="/" className="btn btn-glow">
              Back to Home
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
