import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CaseStudyCard } from "@/components/case-study-card";
import { OG_IMAGE } from "@/lib/constants";
import { caseStudies } from "@/lib/content/case-studies";

const title = "Case Studies | Real, Campaign-Specific Results";
const description = "Meta Ads case studies from Edmonton epoxy flooring and Greensboro concrete companies—tracked leads, cost per lead, and ad spend, reported exactly as measured.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: { url: "/case-studies", title, description, images: [OG_IMAGE] },
  twitter: { title, description, images: [OG_IMAGE.url] },
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }]} />
      <section className="page-hero shell">
        <p className="kicker">Real results</p>
        <h1>Campaign-specific proof, not universal promises.</h1>
        <p>Every case study below reports exactly what was tracked for one client during one campaign. None of these numbers are guarantees for your business.</p>
      </section>

      <section className="shell" style={{ paddingBottom: 120 }}>
        <div className="case-study-grid">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>
    </main>
  );
}
