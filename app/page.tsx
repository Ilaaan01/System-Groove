import Link from "next/link";
import HashLink from "./hash-link";
import { JsonLd } from "@/components/json-ld";
import { CaseStudyCard } from "@/components/case-study-card";
import { FitSection } from "@/components/fit-section";
import { ProcessCard } from "@/components/process-card";
import { ServiceRow } from "@/components/service-row";
import { SearchExplorer } from "@/components/search-explorer";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from "@/lib/constants";
import { caseStudies } from "@/lib/content/case-studies";
import { marketingProcess } from "@/lib/content/process";
import { allServices } from "@/lib/content/services";
import { buildFaqSchema, buildOrganizationSchema, type FaqItem } from "@/lib/schema";

const featuredServices = allServices.filter((s) => s.featured);

const faqs: FaqItem[] = [
  { q: "What is AI SEO—and what do you call it?", a: "You may hear AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), or AI search optimization. The goal is the same: make your company easy for AI-powered search experiences to understand, trust, and cite. It complements traditional SEO; it does not replace it." },
  { q: "Can you handle both the marketing and the software?", a: "Yes. System Groove leads the growth and marketing strategy—Meta Ads, Google Ads, local visibility, landing pages, review systems—with product, website, and software delivery backed by ALCA Software’s design and engineering capabilities. That means the same partner can run the growth system and build the product it needs." },
  { q: "Do we own the website or software you build?", a: "Yes. For custom builds, you own the source code, infrastructure, and project documentation specified in your agreement. We avoid unnecessary platform lock-in." },
  { q: "How long does a project take?", a: "Marketing engagements typically move from diagnosis to launch in 4–8 weeks, then continue as an ongoing improvement cycle. Custom software and apps are scoped separately and usually delivered in phased releases. See our process for details." },
  { q: "Do you guarantee rankings, leads, or AI citations?", a: "No responsible partner can guarantee rankings, lead volume, or AI citations. We build strong systems, real tracking, and a measurement loop that improves your odds over time—see our case studies for real, campaign-specific results." },
];

export default function Home() {
  return (
    <main id="main-content">
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildFaqSchema(faqs)} />

      <section className="home-hero" id="top">
        <div className="shell">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="pulse" /> Charlotte, NC · Built for growing businesses</p>
              <h1>Build what’s next.<br /><em>Be found<br className="hero-break" /> everywhere.</em></h1>
              <p className="hero-description">Turn visibility into opportunity. We connect your marketing, website, and software so your business can grow as one system.</p>
              <div className="hero-actions">
                <Link className="button" href="/contact">Plan your project <span aria-hidden="true">↗</span></Link>
                <a className="hero-phone" href={`tel:${CONTACT_PHONE_E164}`}><span>Let’s talk</span>{CONTACT_PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="growth-map" aria-label="A connected growth system: get found, earn trust, and turn interest into inquiries">
              <div className="map-heading"><span>THE CONNECTED BUSINESS</span><span aria-hidden="true">↗</span></div>
              <div className="map-center"><span className="map-symbol" aria-hidden="true">✳</span><div><span>At the center</span><strong>Your business.</strong></div></div>
              <ol className="map-steps">
                <li><span className="map-index">01</span><div><strong>Get found.</strong><p>Search, local visibility & paid ads</p></div><span className="map-arrow" aria-hidden="true">↗</span></li>
                <li><span className="map-index">02</span><div><strong>Earn trust.</strong><p>Websites, content & reviews</p></div><span className="map-arrow" aria-hidden="true">↗</span></li>
                <li><span className="map-index">03</span><div><strong>Make it happen.</strong><p>Software, apps & follow-up</p></div><span className="map-arrow" aria-hidden="true">↗</span></li>
              </ol>
              <p className="map-caption"><span aria-hidden="true">↻</span> One strategy. Every part working together.</p>
            </div>
          </div>
          <div className="hero-disciplines"><span>Strategy</span><i aria-hidden="true">/</i><span>Design</span><i aria-hidden="true">/</i><span>Engineering</span><i aria-hidden="true">/</i><span>Growth</span><HashLink href="/#services">Explore our capabilities <span aria-hidden="true">↓</span></HashLink></div>
        </div>
      </section>

      <section className="proof-band" aria-label="System Groove difference">
        <div className="shell proof-grid">
          <p className="kicker">Connected from day one</p>
          <div>
            <p className="proof-statement">Different moving parts.<br /><em>One clear direction.</em></p>
            <p className="proof-description">Your ads, website, search presence, and follow-up should strengthen each other. We bring them together around what your business needs next.</p>
            <div className="proof-note"><span className="proof-line" /> Strategy by System Groove. Product and engineering backed by ALCA Software.</div>
          </div>
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="section-intro">
          <p className="kicker">Capabilities</p>
          <div>
            <h2>Growth and visibility.<br />Digital products, too.</h2>
            <p className="section-lede">Meta Ads, Google Ads, local visibility, and review systems that turn attention into qualified inquiries—plus the websites, software, and apps to back them up when off-the-shelf tools aren’t enough.</p>
          </div>
        </div>
        <div className="service-list">
          {featuredServices.map((service, index) => (
            <ServiceRow key={service.slug} service={service} index={index} compact />
          ))}
        </div>
        <p style={{ marginTop: 32 }}>
          <Link className="text-link" href="/services">View the complete service catalog <span aria-hidden="true">↗</span></Link>
        </p>
      </section>

      <section className="services shell" id="proof" aria-label="Case studies">
        <div className="section-intro compact">
          <p className="kicker">Real results</p>
          <div>
            <h2>Campaign-specific proof,<br />not universal promises.</h2>
            <p className="section-lede">Every number below is from one tracked campaign for one client—reported exactly as measured, not projected onto your business.</p>
          </div>
        </div>
        <div className="case-study-grid">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
        <p style={{ marginTop: 32 }}>
          <Link className="text-link" href="/case-studies">Read all case studies <span aria-hidden="true">↗</span></Link>
        </p>
      </section>

      <section className="ai-section" id="about">
        <div className="shell ai-grid">
          <SearchExplorer />
          <div className="ai-copy">
            <p className="kicker inverse">Search is changing</p>
            <h2>Rank in results.<br />Earn a place in answers.</h2>
            <p>People still search on Google—but they also ask ChatGPT, Gemini, Perplexity, and AI Overviews for recommendations. We prepare your business for both.</p>
            <div className="definition"><span>AEO / GEO</span><p>Answer Engine Optimization and Generative Engine Optimization: the work of making your expertise easy for AI systems to discover, interpret, and cite. Both complement traditional SEO—they don’t replace it.</p></div>
            <Link className="button button-light" href="/contact">Build your search roadmap <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="approach shell" id="approach">
        <div className="section-intro compact">
          <p className="kicker">How we work</p>
          <h2>Clarity before complexity.</h2>
        </div>
        <div className="process-grid">
          {marketingProcess.map((item) => (
            <ProcessCard key={item.step} step={item.step} title={item.title} copy={item.copy} />
          ))}
        </div>
        <div className="principles">
          <p>Designed for decisions</p><p>Built to be owned</p><p>Measured by business impact</p>
        </div>
        <p style={{ marginTop: 32 }}>
          <Link className="text-link" href="/process">See the full process, including custom software timelines <span aria-hidden="true">↗</span></Link>
        </p>
      </section>

      <section className="work-section shell" aria-label="Industries served">
        <div className="section-intro compact">
          <p className="kicker">Experience across industries</p>
          <div><h2>Different businesses.<br />One growth problem.</h2><p className="section-lede">System Groove has supported service companies and local operators—from water technology and plumbing to specialty flooring, sports coaching, and beauty.</p></div>
        </div>
        <div className="industry-track" aria-label="Industries served">
          <span>HOME SERVICES</span><i>✦</i><span>HEALTH & WELLNESS</span><i>✦</i><span>PROFESSIONAL SERVICES</span><i>✦</i><span>LOCAL RETAIL</span><i>✦</i><span>SPORTS & EDUCATION</span>
        </div>
        <blockquote>“The best solution is the one your team can use, your customers can understand, and your business can grow with.”<cite>System Groove working principle</cite></blockquote>
      </section>

      <section className="faq shell">
        <div className="faq-heading"><p className="kicker">Good questions</p><h2>Before we start.</h2><p>Clear answers, no inflated promises.</p></div>
        <div className="faq-list">
          {faqs.map((item, index) => <details key={item.q} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<i>+</i></summary><p>{item.a}</p></details>)}
        </div>
      </section>

      <FitSection />

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span>LET’S<br />GROOVE.</span></div>
        <div className="shell contact-inner">
          <p className="kicker inverse">Your next move</p>
          <h2>Tell us what needs<br />to work <em>better.</em></h2>
          <p>Bring us the offer, the market, and the gap. We’ll help you identify the smartest next step—and back it with a guided project brief, not just an inbox.</p>
          <div className="contact-actions">
            <Link className="button button-lime" href="/contact">Start your project brief <span aria-hidden="true">↗</span></Link>
            <a className="contact-phone" href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
