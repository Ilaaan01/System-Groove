import Link from "next/link";
import type { CaseStudy } from "./data";

export function Breadcrumb({ client }: { client?: string }) {
  return (
    <nav className="cs-breadcrumb shell" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">/</span>
      <Link href="/case-studies">Case Studies</Link>
      {client ? (
        <>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{client}</span>
        </>
      ) : null}
    </nav>
  );
}

export function HeroMetrics({ metrics }: { metrics: CaseStudy["heroMetrics"] }) {
  return (
    <div className="cs-metric-grid" aria-label="Key results">
      {metrics.map((metric) => (
        <div className="cs-metric" key={metric.label}>
          <span className="cs-metric-value">{metric.value}</span>
          <span className="cs-metric-label">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export function BulletBlock({
  intro,
  points,
  closing,
}: {
  intro: string;
  points: string[];
  closing?: string;
}) {
  return (
    <div className="cs-bullets">
      <p className="cs-bullets-intro">{intro}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {closing ? <p className="cs-bullets-closing">{closing}</p> : null}
    </div>
  );
}

export function Timeline({
  steps,
  note,
}: {
  steps: CaseStudy["timeline"];
  note?: string;
}) {
  return (
    <div>
      <div className="cs-timeline">
        {steps.map((item) => (
          <article className="cs-timeline-card" key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <ul>
              {item.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {note ? <p className="cs-timeline-note">{note}</p> : null}
    </div>
  );
}

export function HowItWorked({ items }: { items: CaseStudy["howItWorked"] }) {
  return (
    <div className="cs-how-grid">
      {items.map((item, index) => (
        <article className="cs-how-card" key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function BeforeAfter({ before, after }: { before: string[]; after: CaseStudy["after"] }) {
  return (
    <div className="cs-before-after">
      <div className="cs-before">
        <p className="kicker">Before</p>
        <ul>
          {before.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="cs-after">
        <p className="kicker">After</p>
        <p className="cs-after-body">{after.body}</p>
        <div className="cs-caveats">
          <p className="cs-caveats-label">Not included in this result:</p>
          <ul>
            {after.caveats.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TestimonialBlock({ testimonial }: { testimonial: CaseStudy["testimonial"] }) {
  if (testimonial.type === "quote") {
    return (
      <div className="cs-testimonial">
        <blockquote>
          “{testimonial.quote}”
          {testimonial.attribution ? <cite>{testimonial.attribution}</cite> : null}
        </blockquote>
        <p className="cs-testimonial-note">{testimonial.note}</p>
      </div>
    );
  }

  if (testimonial.type === "paraphrase") {
    return (
      <div className="cs-paraphrase">
        <p className="cs-paraphrase-label">Paraphrased client feedback — not a direct quote</p>
        <p className="cs-paraphrase-body">{testimonial.note}</p>
      </div>
    );
  }

  return (
    <div className="cs-transparency">
      <p className="cs-transparency-label">No approved testimonial yet</p>
      <p className="cs-transparency-body">{testimonial.note}</p>
    </div>
  );
}

export function CreativeLearning({
  learning,
  testing,
}: {
  learning: string;
  testing?: CaseStudy["creativeTesting"];
}) {
  return (
    <div className="cs-creative">
      <p>{learning}</p>
      {testing && testing.length > 0 ? (
        <div className="cs-creative-bars">
          {testing.map((item) => (
            <div className="cs-creative-bar-row" key={item.label}>
              <span className="cs-creative-bar-label">{item.label}</span>
              <span className="cs-creative-bar-value">{item.value}</span>
              {item.note ? <span className="cs-creative-bar-note">{item.note}</span> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Specifications({ specifications }: { specifications: CaseStudy["specifications"] }) {
  const rows: { label: string; value: string }[] = [
    { label: "Objective", value: specifications.objective },
    { label: "Market", value: specifications.market },
    { label: "Creative Learning", value: specifications.creativeLearning },
    { label: "Data Boundary Note", value: specifications.dataBoundaryNote },
  ];
  return (
    <dl className="cs-specs">
      {rows.map((row) => (
        <div className="cs-specs-row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ServicesInvolved({ services }: { services: CaseStudy["services"] }) {
  return (
    <div className="cs-services-list">
      {services.map((service, index) => (
        <article className="service-row" key={service.title}>
          <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
          <div className="service-main">
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function DataBoundaryPanel({
  verified,
  notProvided,
}: {
  verified: string[];
  notProvided: string[];
}) {
  return (
    <div className="cs-boundary">
      <div className="cs-boundary-col">
        <p className="kicker">Verified</p>
        <ul>
          {verified.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="cs-boundary-col cs-boundary-col-muted">
        <p className="kicker">Not Provided</p>
        <ul>
          {notProvided.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PrevNextNav({ prev, next }: { prev: CaseStudy; next: CaseStudy }) {
  return (
    <nav className="cs-prevnext" aria-label="More case studies">
      <Link className="cs-prevnext-link" href={`/case-studies/${prev.slug}`}>
        <span className="cs-prevnext-label">Previous</span>
        <span className="cs-prevnext-title">{prev.client}</span>
      </Link>
      <Link className="cs-prevnext-link cs-prevnext-link-next" href={`/case-studies/${next.slug}`}>
        <span className="cs-prevnext-label">Next</span>
        <span className="cs-prevnext-title">{next.client}</span>
      </Link>
    </nav>
  );
}

export function CaseStudyFinalCta() {
  return (
    <section className="contact" id="contact">
      <div className="contact-orbit" aria-hidden="true">
        <span>
          LET’S
          <br />
          GROOVE.
        </span>
      </div>
      <div className="shell contact-inner">
        <p className="kicker inverse">Your next move</p>
        <h2>
          Tell us what needs
          <br />
          to work <em>better.</em>
        </h2>
        <p>Bring us the goal, the bottleneck, or even the messy first idea. We’ll help you identify the smartest next step.</p>
        <div className="contact-actions">
          <Link className="button button-lime" href="/#contact">
            Talk to us about your growth system <span>↗</span>
          </Link>
          <a className="contact-phone" href="tel:+19803032697">
            (980) 303-2697
          </a>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link className="cs-card" href={`/case-studies/${study.slug}`}>
      <span className="cs-card-tag">{study.category}</span>
      <h2>{study.client}</h2>
      <div className="cs-card-metrics">
        {study.heroMetrics.slice(0, 2).map((metric) => (
          <div key={metric.label}>
            <span className="cs-card-metric-value">{metric.value}</span>
            <span className="cs-card-metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
      <div className="cs-card-meta">
        <span>{study.industry}</span>
        <span>{study.market}</span>
      </div>
      <span className="cs-card-link">Read the case study <i aria-hidden="true">↗</i></span>
    </Link>
  );
}
