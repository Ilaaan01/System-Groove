import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/app/contact/contact-form";
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, OG_IMAGE } from "@/lib/constants";

const title = "Contact | Start a Project Brief";
const description = "Tell System Groove about your services of interest, growth gap, and market—get a guided project brief, plus direct email and phone.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title, description, images: [OG_IMAGE] },
  twitter: { title, description, images: [OG_IMAGE.url] },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <section className="shell contact-workspace" aria-labelledby="contact-title">
        <div className="contact-story">
          <p className="kicker inverse">Let’s make it work</p>
          <h1 id="contact-title">Your next move.<br /><em>Starts here.</em></h1>
          <p className="contact-intro">More visibility. A better website. Software that saves your team time. Tell us what you have in mind—we’ll help you find a clear way forward.</p>
          <div className="contact-direct">
            <p>Prefer a conversation?</p>
            <a href={`tel:${CONTACT_PHONE_E164}`}><span><small>Give us a call</small>{CONTACT_PHONE_DISPLAY}</span><span aria-hidden="true">↗</span></a>
            <a href={`mailto:${CONTACT_EMAIL}`}><span><small>Drop us a note</small>{CONTACT_EMAIL}</span><span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-expectation">
            <span className="contact-small-mark" aria-hidden="true">↗</span>
            <div><h2>A starting point, not a final scope.</h2><p>You don’t need all the answers yet. Share what you know, and we can work through the rest together.</p></div>
          </div>
          <address className="contact-location"><span>Based in Charlotte. Working wherever you are.</span>{ADDRESS.streetAddress}<br />{ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}</address>
        </div>
        <ContactForm />
      </section>
      <section className="shell contact-fit-note" aria-label="Who we work with"><p><strong>Built for businesses ready to move forward.</strong> We work best with local service companies with a clear offer, room to grow, or a practical software problem to solve.</p><p>Thoughtful strategy and measurable work. No guaranteed rankings or lead counts.</p></section>
    </main>
  );
}
