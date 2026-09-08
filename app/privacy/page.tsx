import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ADDRESS, CONTACT_EMAIL, OG_IMAGE, ORG_NAME } from "@/lib/constants";

const title = "Privacy Policy";
const description = "Draft privacy policy for System Groove, describing what information is collected through this website and pending final legal review.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title, description, images: [OG_IMAGE] },
  twitter: { title, description, images: [OG_IMAGE.url] },
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />
      <section className="page-hero shell">
        <p className="kicker">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: draft, not yet published.</p>
      </section>

      <section className="shell" style={{ paddingBottom: 60 }}>
        <div className="data-limitations">
          <p>
            <strong>Draft for legal review.</strong> This page is a working placeholder, not a finished legal document. It
            describes only what is verifiably true about this website today. It has not been reviewed by a lawyer and
            should not be relied on as a complete or binding privacy policy until it is.
          </p>
        </div>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Who we are</h2>
        <p className="section-lede">
          {ORG_NAME} is based at {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}.
          You can reach us at <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Information you provide directly</h2>
        <p className="section-lede">
          The project-brief form on our <a className="text-link" href="/contact">Contact</a> page does not submit to a
          server or database. When you use it, your browser opens an email addressed to {CONTACT_EMAIL} with your answers
          pre-filled in the message body, and nothing is sent until you choose to send that email yourself. If you email
          or call us directly, we receive whatever information you choose to share.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Automatically collected information</h2>
        <div className="data-limitations">
          <p>
            <strong>To be completed by legal/technical review.</strong> As of this draft, this website does not include
            any analytics, advertising pixel, or cookie-based tracking script in its code. If that changes, this section
            must be updated to accurately describe what is collected, by whom, and why before publishing.
          </p>
        </div>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>How information is used</h2>
        <p className="section-lede">
          Information you send us is used to respond to your inquiry and, if you become a client, to deliver the
          services you engage us for.
        </p>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Third parties and service providers</h2>
        <div className="data-limitations">
          <p>
            <strong>To be completed by legal review.</strong> Product, website, and software delivery may be backed by
            ALCA Software. The specific data-sharing terms between System Groove and any delivery or technology partner
            have not been documented here and should be confirmed before this policy is finalized.
          </p>
        </div>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Data retention, your rights, and applicable law</h2>
        <div className="data-limitations">
          <p>
            <strong>To be completed by legal review.</strong> Retention periods, regional privacy-law compliance (such as
            GDPR or CCPA), and any user rights and how to exercise them have not been determined and are intentionally
            left out of this draft rather than assumed.
          </p>
        </div>

        <h2 style={{ font: "600 28px var(--font-display)", letterSpacing: "-.03em", marginTop: 40 }}>Changes to this policy</h2>
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
