import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ADDRESS, CONTACT_EMAIL, OG_IMAGE, ORG_NAME } from "@/lib/constants";

const title = "Terms of Service";
const description = "Draft terms of service for System Groove, pending final legal review.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", title, description, images: [OG_IMAGE] },
  twitter: { title, description, images: [OG_IMAGE.url] },
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }]} />
      <section className="page-hero shell">
        <p className="kicker">Legal</p>
        <h1>Terms of Service</h1>
        <p>Last updated: draft, not yet published.</p>
      </section>

      <section className="shell" style={{ paddingBottom: 60 }}>
        <div className="data-limitations">
          <p>
            <strong>Draft for legal review.</strong> This page is a working placeholder, not a finished legal document.
            It has not been reviewed by a lawyer and should not be relied on as complete or binding terms until it is.
          </p>
        </div>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Who these terms are between</h2>
        <p className="section-lede">
          These draft terms would govern use of this website, operated by {ORG_NAME} ({ADDRESS.streetAddress},{" "}
          {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}), and any visitor or client using it.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Use of this website</h2>
        <p className="section-lede">
          This website is provided to describe System Groove&rsquo;s services, share case studies, and let visitors
          request a project brief. It is not to be used to submit false information, attempt to disrupt the site, or
          misrepresent a business or its results.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>No guaranteed results</h2>
        <p className="section-lede">
          As stated throughout this site, System Groove does not guarantee lead volume, search rankings, or AI-search
          citations. Case-study figures reflect specific, individual campaigns and are not a promise of similar results
          for any other business.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Intellectual property</h2>
        <p className="section-lede">
          The content, design, and branding of this website belong to {ORG_NAME} unless otherwise noted. Client work
          delivered under a signed agreement is governed by that agreement, not by this page.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Limitation of liability and governing law</h2>
        <div className="data-limitations">
          <p>
            <strong>To be completed by legal review.</strong> Liability limitations, dispute resolution or arbitration
            terms, and the governing jurisdiction for these terms have not been determined and are intentionally left
            out of this draft rather than assumed.
          </p>
        </div>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Changes to these terms</h2>
        <p className="section-lede">
          This is a draft. When it is finalized, this page will be updated and the date above will reflect that update.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Contact</h2>
        <p className="section-lede">
          Questions about this draft can be sent to <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>
    </main>
  );
}
