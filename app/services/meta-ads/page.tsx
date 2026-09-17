import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CaseStudyCard } from "@/components/case-study-card";
import { JsonLd } from "@/components/json-ld";
import { BASE_OPEN_GRAPH, OG_IMAGE, ORG_NAME } from "@/lib/constants";
import { caseStudies } from "@/lib/content/case-studies";
import { getServiceBySlug } from "@/lib/content/services";
import { buildServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("meta-ads")!;
const metaAdsCaseStudies = caseStudies.filter((cs) => cs.services.includes("meta-ads"));

const title = "Meta Ads for Local Service Businesses";
const socialTitle = `${title}: Facebook & Instagram Campaigns | ${ORG_NAME}`;
const description = "Facebook and Instagram campaigns for local service businesses: campaign strategy, audience targeting, ad-account setup, tracking, and ongoing optimization.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/meta-ads" },
  openGraph: { ...BASE_OPEN_GRAPH, url: "/services/meta-ads", title: socialTitle, description, images: [OG_IMAGE] },
  twitter: { title: socialTitle, description, images: [OG_IMAGE.url] },
};

export default function MetaAdsServicePage() {
  return (
    <main id="main-content">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Meta Ads", path: "/services/meta-ads" },
        ]}
      />
      <JsonLd data={buildServiceSchema(service)} />

      <section className="page-hero shell">
        <p className="kicker">{service.tag}</p>
        <h1>Meta Ads for local service businesses</h1>
        <p>{service.description}</p>
        <div className="hero-actions">
          <Link className="button" href="/contact">
            Start a project brief <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/process">
            See how we work <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {service.bestFor && (
        <section className="pillar shell" aria-labelledby="meta-ads-who-heading">
          <div className="pillar-heading">
            <p className="kicker">Who it&apos;s for</p>
            <h2 id="meta-ads-who-heading">Is Meta Ads the right fit?</h2>
            <p>
              <strong>Best for:</strong> {service.bestFor}
            </p>
          </div>
        </section>
      )}

      {(service.deliverables || service.outcomes) && (
        <section className="pillar shell" aria-labelledby="meta-ads-included-heading">
          <div className="pillar-heading">
            <p className="kicker">What&apos;s included</p>
            <h2 id="meta-ads-included-heading">What a Meta Ads engagement includes.</h2>
          </div>
          <div className="fit-grid">
            {service.deliverables && (
              <div className="fit-card">
                <span className="fit-label">Included</span>
                <ul>
                  {service.deliverables.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.outcomes && (
              <div className="fit-card">
                <span className="fit-label">Expected outcomes</span>
                <ul>
                  {service.outcomes.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {metaAdsCaseStudies.length > 0 && (
        <section className="shell" style={{ padding: "60px 0 100px" }} aria-labelledby="meta-ads-proof-heading">
          <div className="pillar-heading">
            <p className="kicker">Real results</p>
            <h2 id="meta-ads-proof-heading">Meta Ads case studies.</h2>
            <p>Every case study below reports exactly what was tracked for one client during one campaign. None of these numbers are guarantees for your business.</p>
          </div>
          <div className="case-study-grid">
            {metaAdsCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </section>
      )}

      <div className="shell" style={{ padding: "0 0 120px" }}>
        <p>Thoughtful strategy and measurable work. No guaranteed rankings or lead counts.</p>
        <p>
          Ready to see if Meta Ads fits your business? <Link className="text-link" href="/contact">Send us your project brief <span aria-hidden="true">↗</span></Link>
        </p>
      </div>
    </main>
  );
}
