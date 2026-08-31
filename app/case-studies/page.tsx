import type { Metadata } from "next";
import SiteNav from "../site-nav";
import SiteFooter from "../site-footer";
import { caseStudies } from "./data";
import { Breadcrumb, CaseStudyCard, CaseStudyFinalCta } from "./components";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Verified lead-generation case studies from System Groove — real Meta Ads results, cost per lead, and transparent reporting for local service businesses.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "/case-studies",
    siteName: "System Groove",
    title: "Case Studies | System Groove",
    description: "Verified lead-generation case studies from System Groove — real Meta Ads results, cost per lead, and transparent reporting for local service businesses.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "System Groove case studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | System Groove",
    description: "Verified lead-generation case studies from System Groove — real Meta Ads results, cost per lead, and transparent reporting for local service businesses.",
    images: ["/og.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.systemgroove.com/" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.systemgroove.com/case-studies" },
  ],
};

export default function CaseStudiesIndex() {
  return (
    <main>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteNav />

      <Breadcrumb />

      <section className="cs-index-hero shell" id="main-content">
        <div className="section-intro compact">
          <p className="kicker">Case Studies</p>
          <div>
            <h1>Real campaigns.<br />Verified results.</h1>
            <p className="section-lede">Every number on these pages is drawn directly from the client&apos;s own reporting — with clear notes on what wasn&apos;t measured, not what we&apos;d like you to assume.</p>
          </div>
        </div>
      </section>

      <section className="cs-index-list shell">
        <div className="cs-card-grid">
          {caseStudies.map((study) => (
            <CaseStudyCard study={study} key={study.slug} />
          ))}
        </div>
      </section>

      <CaseStudyFinalCta />

      <SiteFooter />
    </main>
  );
}
