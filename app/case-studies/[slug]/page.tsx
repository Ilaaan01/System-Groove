import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteNav from "../../site-nav";
import SiteFooter from "../../site-footer";
import { caseStudies, getCaseStudyBySlug } from "../data";
import {
  Breadcrumb,
  HeroMetrics,
  BulletBlock,
  Timeline,
  HowItWorked,
  BeforeAfter,
  TestimonialBlock,
  CreativeLearning,
  Specifications,
  ServicesInvolved,
  DataBoundaryPanel,
  PrevNextNav,
  CaseStudyFinalCta,
} from "../components";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {
      title: "Case study not found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: study.seo.title,
    description: study.seo.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: "article",
      url: `/case-studies/${study.slug}`,
      siteName: "System Groove",
      title: study.seo.title,
      description: study.seo.description,
      images: [{ url: "/og.png", width: 1731, height: 909, alt: study.seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.seo.title,
      description: study.seo.description,
      images: ["/og.png"],
    },
  };
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.seo.title,
    about: study.client,
    author: { "@type": "Organization", name: "System Groove" },
    description: study.seo.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.systemgroove.com/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.systemgroove.com/case-studies" },
      { "@type": "ListItem", position: 3, name: study.client, item: `https://www.systemgroove.com/case-studies/${study.slug}` },
    ],
  };

  return (
    <main>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteNav />

      <Breadcrumb client={study.client} />

      <section className="cs-hero shell" id="main-content">
        <p className="cs-hero-tag kicker">{study.category}</p>
        <h1>{study.client}</h1>
        <p className="cs-hero-summary">{study.summary}</p>
        <div className="cs-hero-meta">
          <span><strong>Industry</strong>{study.industry}</span>
          <span><strong>Market</strong>{study.market}</span>
          <span><strong>Duration</strong>{study.duration}</span>
          <span><strong>Year</strong>{study.year}</span>
        </div>
      </section>

      <section className="cs-metrics-section shell">
        <HeroMetrics metrics={study.heroMetrics} />
      </section>

      <section className="cs-section shell">
        <div className="cs-section-block">
          <p className="kicker">The Challenge</p>
          <p className="cs-prose">{study.challenge}</p>
        </div>
        <div className="cs-section-block">
          <p className="kicker">The Move</p>
          <BulletBlock intro={study.move.intro} points={study.move.points} closing={study.move.closing} />
        </div>
      </section>

      <section className="cs-system-section">
        <div className="shell">
          <p className="kicker inverse">The System</p>
          <BulletBlock intro={study.system.intro} points={study.system.points} />
        </div>
      </section>

      <section className="cs-timeline-section shell">
        <div className="section-intro compact">
          <p className="kicker">Campaign Timeline</p>
          <h2>How it unfolded.</h2>
        </div>
        <Timeline steps={study.timeline} note={study.timelineNote} />
      </section>

      <section className="cs-how-section shell">
        <div className="section-intro compact">
          <p className="kicker">How the system worked</p>
          <h2>The system, in motion.</h2>
        </div>
        <HowItWorked items={study.howItWorked} />
      </section>

      <section className="cs-before-after-section shell">
        <div className="section-intro compact">
          <p className="kicker">Before / After</p>
        </div>
        <BeforeAfter before={study.before} after={study.after} />
      </section>

      <section className="cs-testimonial-section shell">
        <TestimonialBlock testimonial={study.testimonial} />
      </section>

      <section className="cs-creative-section shell">
        <div className="section-intro compact">
          <p className="kicker">Creative-Performance Learning</p>
          <h2>What the creative proved.</h2>
        </div>
        <CreativeLearning learning={study.specifications.creativeLearning} testing={study.creativeTesting} />
      </section>

      <section className="cs-specs-section shell">
        <div className="section-intro compact">
          <p className="kicker">System Specifications</p>
          <h2>The specifics, spelled out.</h2>
        </div>
        <Specifications specifications={study.specifications} />
      </section>

      <section className="cs-services-section shell">
        <div className="section-intro compact">
          <p className="kicker">Services Involved</p>
          <h2>Where the work happened.</h2>
        </div>
        <ServicesInvolved services={study.services} />
      </section>

      <section className="cs-boundary-section shell">
        <div className="section-intro compact">
          <p className="kicker">What We Can Verify</p>
          <h2>Transparent by design.</h2>
        </div>
        <DataBoundaryPanel verified={study.dataBoundary.verified} notProvided={study.dataBoundary.notProvided} />
      </section>

      <CaseStudyFinalCta />

      <section className="cs-prevnext-section shell">
        <PrevNextNav prev={prev} next={next} />
      </section>

      <SiteFooter />
    </main>
  );
}
