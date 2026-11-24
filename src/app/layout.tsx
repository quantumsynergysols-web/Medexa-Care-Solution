import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Public_Sans, Sora } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RouteEffects from "@/components/RouteEffects";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

/* The three typefaces of the approved design, self-hosted by next/font (no request to Google at runtime). */
const sora = Sora({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-sora", display: "swap" });
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-public-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — AI Services for Healthcare & Medical Billing`, template: `%s | ${SITE_NAME}` },
  description:
    "Medexa Care Solutions — AI Services first: complete AI systems for hospitals, medical centres, clinics and practices, plus Medical Billing & RCM for US practices as a separate service.",
  applicationName: SITE_NAME,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "AI Services for hospitals, medical centres, clinics and practices, and Medical Billing & RCM for US practices.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${publicSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables the reveal animations only when JavaScript runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body>
        <a className="skip-link" href="#top">
          Skip to main content
        </a>
        <Header />
        <main id="top" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RouteEffects />
      </body>
    </html>
  );
}
