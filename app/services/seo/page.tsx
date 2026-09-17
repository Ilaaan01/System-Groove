import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SearchExplorer } from "@/components/search-explorer";
import { BASE_OPEN_GRAPH, OG_IMAGE, ORG_NAME } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/content/services";
import { buildServiceSchema } from "@/lib/schema";

const service = getServiceBySlug("seo-local-seo-aeo-geo")!;

// Verbatim from the homepage FAQ list (app/page.tsx) — reused here, not duplicated as FAQPage JSON-LD.
const faq = {
  q: "What is AI SEO—and what do you call it?",
  a: "You may hear AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), or AI search optimization. The goal is the same: make your company easy for AI-powered search experiences to understand, trust, and cite. It complements traditional SEO; it does not replace it.",
};

const title = "SEO & AI Search for Local Service Businesses";
const socialTitle = `${title}: Local SEO, AEO & GEO | ${ORG_NAME}`;
const description = "Technical SEO, local search, content strategy, and AI-search optimization (AEO/GEO) for local service businesses—tied to qualified leads, not vanity metrics.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/seo" },
  openGraph: { ...BASE_OPEN_GRAPH, url: "/services/seo", title: socialTitle, description, images: [OG_IMAGE] },
  twitter: { title: socialTitle, description, images: [OG_IMAGE.url] },
};

export default function SeoServicePage() {
  return (
    <main id="main-content">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "SEO & AI Search", path: "/services/seo" },
        ]}
      />
      <JsonLd data={buildServiceSchema(service)} />

      <section className="page-hero shell">
        <p className="kicker">{service.tag}</p>
        <h1>SEO and AI search for local service businesses</h1>
        <p>{service.description}</p>
        <div className="hero-actions">
          <Link className="button" href="/contact">
            Build your search roadmap <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/process">
            See how we work <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="ai-section" aria-labelledby="seo-search-heading">
        {/* Copy precedes the explorer so its h2 comes before the explorer's h3 (no heading-level skip). */}
        <div className="shell ai-grid ai-grid-copy-first">
          <div className="ai-copy">
            <p className="kicker inverse">Search is changing</p>
            <h2 id="seo-search-heading">
              Rank in results.<br />Earn a place in answers.
            </h2>
            <p>People still search on Google—but they also ask ChatGPT, Gemini, Perplexity, and AI Overviews for recommendations. We prepare your business for both.</p>
            <div className="definition">
              <span>AEO / GEO</span>
              <p>Answer Engine Optimization and Generative Engine Optimization: the work of making your expertise easy for AI systems to discover, interpret, and cite. Both complement traditional SEO—they don&rsquo;t replace it.</p>
            </div>
          </div>
          <SearchExplorer />
        </div>
      </section>

      {service.deliverables && (
        <section className="pillar shell" aria-labelledby="seo-included-heading">
          <div className="pillar-heading">
            <p className="kicker">What&apos;s included</p>
            <h2 id="seo-included-heading">What an SEO and AI search engagement includes.</h2>
          </div>
          <div className="fit-grid" style={{ gridTemplateColumns: "1fr" }}>
            <div className="fit-card">
              <span className="fit-label">Included</span>
              <ul>
                {service.deliverables.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="pillar shell" aria-labelledby="seo-faq-heading">
        <div className="pillar-heading">
          <p className="kicker">Common question</p>
          <h2 id="seo-faq-heading">{faq.q}</h2>
          <p>{faq.a}</p>
        </div>
      </section>

      <div className="shell" style={{ padding: "0 0 120px" }}>
        <p>Thoughtful strategy and measurable work. No guaranteed rankings or lead counts.</p>
        <p>
          Not sure where your search visibility stands? <Link className="text-link" href="/contact">Send us your project brief <span aria-hidden="true">↗</span></Link>
        </p>
      </div>
    </main>
  );
}
