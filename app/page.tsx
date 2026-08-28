const services = [
  {
    number: "01",
    title: "Websites that win the click",
    tag: "WEB DESIGN + DEVELOPMENT",
    copy: "Fast, accessible marketing sites built to rank, explain your value, and turn visits into real inquiries.",
    points: ["Conversion-focused UX", "Core Web Vitals", "Analytics & integrations"],
  },
  {
    number: "02",
    title: "Software built around your business",
    tag: "CUSTOM SOFTWARE",
    copy: "Portals, dashboards, internal tools, and platforms designed around the way your team actually works.",
    points: ["Product strategy", "Web platforms & SaaS", "Secure, scalable engineering"],
  },
  {
    number: "03",
    title: "Apps people keep using",
    tag: "MOBILE APPS",
    copy: "Polished iOS and Android products, from a focused first release to an app ready to scale.",
    points: ["iOS & Android", "Cross-platform builds", "Launch & ongoing support"],
  },
  {
    number: "04",
    title: "Search visibility that compounds",
    tag: "SEO + LOCAL SEARCH",
    copy: "Technical SEO, content strategy, local search, and authority-building tied to qualified leads—not vanity metrics.",
    points: ["Technical & local SEO", "Content architecture", "Measurement & iteration"],
  },
  {
    number: "05",
    title: "Show up in AI answers",
    tag: "AEO + GEO",
    copy: "AI search optimization helps engines understand, trust, and cite your business in generated answers.",
    points: ["Entity & topic coverage", "Answer-ready content", "Structured data & citations"],
  },
  {
    number: "06",
    title: "Less busywork. Better follow-up.",
    tag: "AUTOMATION + REPUTATION",
    copy: "Connect the tools you already use, automate repetitive tasks, nurture leads, and build a stronger review profile.",
    points: ["Workflow automation", "Review generation", "Lead capture & nurturing"],
  },
];

const process = [
  { step: "01", title: "Find the real constraint", copy: "We learn your goals, customers, workflow, and numbers before recommending a deliverable." },
  { step: "02", title: "Shape the right system", copy: "You get a focused plan with priorities, scope, milestones, and a clear definition of success." },
  { step: "03", title: "Build in visible cycles", copy: "Strategy, design, engineering, and quality checks move together. You see progress throughout." },
  { step: "04", title: "Launch, learn, improve", copy: "We measure what matters and keep refining the system as your business grows." },
];

const faqs = [
  { q: "What is AI SEO—and what do you call it?", a: "You may hear AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), or AI search optimization. The goal is the same: make your company easy for AI-powered search experiences to understand, trust, and cite. It complements traditional SEO; it does not replace it." },
  { q: "Can you handle both the strategy and the development?", a: "Yes. System Groove leads the business and growth strategy, with software delivery backed by ALCA Software’s product, design, and engineering capabilities. That means recommendations can actually be implemented instead of living in a report." },
  { q: "Do we own the website or software you build?", a: "Yes. For custom builds, you own the source code, infrastructure, and project documentation specified in your agreement. We avoid unnecessary platform lock-in." },
  { q: "How long does a project take?", a: "A focused website can move from strategy to launch in a matter of weeks. Custom software and apps are usually delivered in phased releases. After a short discovery conversation, we’ll provide a realistic roadmap." },
  { q: "Do you guarantee first-page rankings?", a: "No responsible partner can guarantee rankings or AI citations. We build strong technical foundations, useful content, trustworthy signals, and a measurement loop that improves your odds over time." },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "System Groove",
  url: "https://www.systemgroove.com",
  email: "contact@systemgroove.com",
  telephone: "+1-980-303-2697",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1235 East Blvd #E-2094",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "28203",
    addressCountry: "US",
  },
  areaServed: "United States",
  serviceType: ["Web design", "Custom software development", "Mobile app development", "Search engine optimization", "AI search optimization", "Business automation"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="System Groove home">
          <span className="brand-mark">SG</span>
          <span>system/groove</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="https://app.systemgroove.com">Client login</a>
        </div>
        <a className="button button-small" href="#contact">Start a project <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-orbit" aria-hidden="true"><span>SG</span></div>
        <p className="eyebrow"><span className="pulse" /> Charlotte, NC · Working with growing businesses everywhere</p>
        <h1>Build what’s next.<br /><em>Be found everywhere.</em></h1>
        <div className="hero-bottom">
          <p>We design high-converting websites, custom software, and mobile apps—then make sure your customers can find them in search engines and AI answers.</p>
          <div className="hero-actions">
            <a className="button" href="#contact">Plan your project <span>↗</span></a>
            <a className="text-link" href="tel:+19803032697">Or call (980) 303-2697</a>
          </div>
        </div>
        <div className="hero-rule"><span>STRATEGY</span><span>DESIGN</span><span>ENGINEERING</span><span>GROWTH</span></div>
      </section>

      <section className="proof-band" aria-label="System Groove difference">
        <div className="shell proof-grid">
          <p className="kicker inverse">Not another disconnected vendor</p>
          <p className="proof-statement">Your website, software, search presence, reputation, and follow-up should work like <em>one system.</em></p>
          <div className="proof-note"><span className="proof-line" /> Strategy-led by System Groove. Product and engineering delivery backed by ALCA Software.</div>
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="section-intro">
          <p className="kicker">Capabilities</p>
          <div>
            <h2>One partner from first idea<br />to measurable growth.</h2>
            <p className="section-lede">Build the product. Create the demand. Connect the follow-up. We bring the pieces together so growth does not get lost between vendors.</p>
          </div>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-main"><h3>{service.title}</h3><p>{service.copy}</p></div>
              <div className="service-meta"><span className="service-tag">{service.tag}</span><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-section" id="about">
        <div className="shell ai-grid">
          <div className="ai-visual" aria-hidden="true">
            <div className="search-pill">Who’s the best fit for my project?<span>↗</span></div>
            <div className="signal signal-one">TECHNICAL SEO</div>
            <div className="signal signal-two">TRUSTED CITATIONS</div>
            <div className="signal signal-three">ANSWER-READY CONTENT</div>
            <div className="answer-card"><span>AI ANSWER</span><strong>Brands become visible when their expertise is clear, structured, and trusted.</strong></div>
          </div>
          <div className="ai-copy">
            <p className="kicker inverse">Search is changing</p>
            <h2>Rank in results.<br />Earn a place in answers.</h2>
            <p>People still search on Google—but they also ask ChatGPT, Gemini, Perplexity, and AI Overviews for recommendations. We prepare your business for both.</p>
            <div className="definition"><span>AEO / GEO</span><p>Answer Engine Optimization and Generative Engine Optimization: the work of making your expertise easy for AI systems to discover, interpret, and cite.</p></div>
            <a className="button button-light" href="#contact">Build your search roadmap <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="approach shell" id="approach">
        <div className="section-intro compact">
          <p className="kicker">How we work</p>
          <h2>Clarity before complexity.</h2>
        </div>
        <div className="process-grid">
          {process.map((item) => <article className="process-card" key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
        <div className="principles">
          <p>Designed for decisions</p><p>Built to be owned</p><p>Measured by business impact</p>
        </div>
      </section>

      <section className="work-section shell" id="work">
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

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span>LET’S<br />GROOVE.</span></div>
        <div className="shell contact-inner">
          <p className="kicker inverse">Your next move</p>
          <h2>Tell us what needs<br />to work <em>better.</em></h2>
          <p>Bring us the goal, the bottleneck, or even the messy first idea. We’ll help you identify the smartest next step.</p>
          <div className="contact-actions">
            <a className="button button-lime" href="mailto:contact@systemgroove.com?subject=Let%27s%20plan%20a%20project">contact@systemgroove.com <span>↗</span></a>
            <a className="contact-phone" href="tel:+19803032697">(980) 303-2697</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark">SG</span><span>system/groove</span></a><p>Websites, software, apps, search, and automation—built to work together.</p></div>
          <div><span className="footer-label">Explore</span><a href="#services">Services</a><a href="#approach">Approach</a><a href="#work">Experience</a><a href="https://app.systemgroove.com">Client login</a></div>
          <div><span className="footer-label">Connect</span><a href="mailto:contact@systemgroove.com">Email</a><a href="https://www.facebook.com/SystemGroove1">Facebook</a><a href="https://instagram.com/systemgroove_">Instagram</a></div>
          <div><span className="footer-label">Charlotte, NC</span><p>1235 East Blvd #E-2094<br />Charlotte, NC 28203</p><a href="tel:+19803032697">(980) 303-2697</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} System Groove</span><span>Strategy / Design / Engineering / Growth</span></div>
      </footer>
    </main>
  );
}
