import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CaseStudyCard } from "@/components/case-study-card";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE } from "@/lib/constants";
import { caseStudies, getCaseStudyBySlug, type CaseStudy } from "@/lib/content/case-studies";
import { getServiceBySlug, type Service } from "@/lib/content/services";
import { buildCreativeWorkSchema } from "@/lib/schema";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};
  const title = `${caseStudy.title} | Case Study`;
  return {
    title,
    description: caseStudy.metaDescription,
    alternates: { canonical: `/case-studies/${caseStudy.slug}` },
    openGraph: { url: `/case-studies/${caseStudy.slug}`, title, description: caseStudy.metaDescription, images: [OG_IMAGE] },
    twitter: { title, description: caseStudy.metaDescription, images: [OG_IMAGE.url] },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const relatedServices = caseStudy.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => s !== undefined);
  const relatedCaseStudies = caseStudy.relatedCaseStudySlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((cs): cs is CaseStudy => cs !== undefined);

  return (
    <main id="main-content">
      <JsonLd data={buildCreativeWorkSchema(caseStudy)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: caseStudy.title, path: `/case-studies/${caseStudy.slug}` },
        ]}
      />

      <section className="page-hero shell">
        <p className="kicker">{caseStudy.industry} · {caseStudy.market}</p>
        <h1>{caseStudy.title}</h1>
        <p>{caseStudy.summary}</p>
        <div className="case-study-detail-grid">
          {caseStudy.results.map((metric) => (
            <span key={metric.label} className="metric-badge">
              <strong>{metric.value}</strong>
              {metric.label}
            </span>
          ))}
        </div>
      </section>

      {caseStudy.heroImage && (
        <section className="shell">
          <div className="case-study-hero-image">
            <Image src={caseStudy.heroImage.src} alt={caseStudy.heroImage.alt} fill sizes="(max-width: 768px) 100vw, 1240px" />
          </div>
        </section>
      )}

      <section className="shell" style={{ padding: "0 0 40px" }}>
        <dl className="process-meta" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          <div><dt>Client</dt><dd>{caseStudy.client}</dd></div>
          <div><dt>Industry</dt><dd>{caseStudy.industry}</dd></div>
          <div><dt>Market</dt><dd>{caseStudy.market}</dd></div>
          <div><dt>Duration</dt><dd>{caseStudy.duration}</dd></div>
        </dl>
      </section>

      <section className="shell" style={{ padding: "0 0 40px" }}>
        <h2 style={{ font: "600 32px var(--font-display)", letterSpacing: "-.03em" }}>The challenge</h2>
        <p className="section-lede">{caseStudy.challenge}</p>
      </section>

      <section className="shell" style={{ padding: "0 0 40px" }}>
        <h2 style={{ font: "600 32px var(--font-display)", letterSpacing: "-.03em" }}>How the system worked</h2>
        <p className="section-lede">{caseStudy.systemMove}</p>
      </section>

      <section className="shell" style={{ padding: "0 0 40px" }}>
        <h2 style={{ font: "600 32px var(--font-display)", letterSpacing: "-.03em" }}>Timeline</h2>
        <ul className="timeline">
          {caseStudy.timeline.map((entry) => (
            <li key={entry.label}>
              <span className="timeline-label">{entry.label}</span>
              <p className="timeline-description">{entry.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {caseStudy.quote && (
        <section className="shell" style={{ padding: "0 0 40px" }}>
          <div className="quote-block">
            <p>“{caseStudy.quote.text}”</p>
            <cite>{caseStudy.quote.attribution}</cite>
          </div>
        </section>
      )}

      <section className="shell" style={{ padding: "0 0 40px" }}>
        <h2 style={{ font: "600 32px var(--font-display)", letterSpacing: "-.03em" }}>Before and after</h2>
        <div className="process-meta" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 20 }}>
          <div>
            <dt>Before</dt>
            <dd style={{ fontSize: 14, lineHeight: 1.6 }}>{caseStudy.beforeAfter.before}</dd>
          </div>
          <div>
            <dt>After</dt>
            <dd style={{ fontSize: 14, lineHeight: 1.6 }}>{caseStudy.beforeAfter.after}</dd>
          </div>
        </div>
      </section>

      <section className="shell" style={{ padding: "0 0 40px" }}>
        <h2 style={{ font: "600 32px var(--font-display)", letterSpacing: "-.03em" }}>Strongest learning</h2>
        <p className="section-lede">{caseStudy.learning}</p>
      </section>

      <section className="shell" style={{ padding: "0 0 40px" }}>
        <div className="data-limitations">
          <p><strong>Data limitations:</strong> {caseStudy.dataLimitations}</p>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="shell" style={{ padding: "0 0 40px" }}>
          <p className="kicker">Related services</p>
          <div className="related-grid">
            {relatedServices.map((service) => (
              <Link key={service.slug} className="related-link" href={`/services#${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedCaseStudies.length > 0 && (
        <section className="shell" style={{ padding: "0 0 60px" }}>
          <p className="kicker">Related case studies</p>
          <div className="case-study-grid" style={{ marginTop: 20 }}>
            {relatedCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </section>
      )}

      <section className="shell" style={{ padding: "0 0 120px" }}>
        <Link className="button button-lime" href="/contact">
          Start your project brief <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
