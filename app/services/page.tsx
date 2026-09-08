import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ServiceRow } from "@/components/service-row";
import { OG_IMAGE } from "@/lib/constants";
import { servicePillars } from "@/lib/content/services";
import { buildServiceSchema } from "@/lib/schema";

const title = "Services | Growth, Visibility, and Digital Products";
const description = "Meta Ads, Google Ads, local visibility, landing pages, and review systems—plus websites, custom software, and apps backed by ALCA Software.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title, description, images: [OG_IMAGE] },
  twitter: { title, description, images: [OG_IMAGE.url] },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <section className="page-hero shell">
        <p className="kicker">Complete service catalog</p>
        <h1>Two pillars. One connected system.</h1>
        <p>System Groove leads growth and visibility for local service businesses. When the gap is the product itself—not the marketing—ALCA Software backs the website, software, or app that closes it.</p>
      </section>

      {servicePillars.map((pillar) => (
        <section className="pillar shell" key={pillar.id} aria-labelledby={`pillar-${pillar.id}`}>
          <JsonLd data={pillar.services.map((s) => buildServiceSchema(s))} />
          <div className="pillar-heading">
            <p className="kicker">{pillar.label}</p>
            <h2 id={`pillar-${pillar.id}`}>{pillar.label}</h2>
            <p>{pillar.intro}</p>
          </div>
          <div className="service-list">
            {pillar.services.map((service, index) => (
              <ServiceRow key={service.slug} service={service} index={index} />
            ))}
          </div>
        </section>
      ))}

      <section className="shell" style={{ padding: "60px 0 120px" }}>
        <p>
          Not sure which service fits your gap? <Link className="text-link" href="/contact">Send a project brief <span aria-hidden="true">↗</span></Link>
        </p>
      </section>
    </main>
  );
}
