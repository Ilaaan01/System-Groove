"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const stages = [
  {
    label: "Discover",
    name: "Technical SEO",
    query: "Find a local specialist near me",
    title: "Make your business easy to find.",
    description: "Fast pages, clear service information, and an accurate local presence give search engines a stronger foundation to understand your business.",
    signals: ["Crawlable pages", "Local business details", "Structured data"],
    takeaway: "Start with a site that search engines can read and customers can use.",
  },
  {
    label: "Trust",
    name: "Credibility & citations",
    query: "Who has the experience I can trust?",
    title: "Give people reasons to choose you.",
    description: "Specific case studies, genuine reviews, and consistent business information help customers evaluate your experience and put your claims in context.",
    signals: ["Customer reviews", "Relevant case studies", "Consistent listings"],
    takeaway: "Back up your expertise with evidence people can check.",
  },
  {
    label: "Answer",
    name: "Answer-ready content",
    query: "Which service is right for my project?",
    title: "Be useful at the moment of decision.",
    description: "Direct answers, useful comparisons, and clear service pages make your expertise easier for people and AI search experiences to interpret.",
    signals: ["Clear answers", "Service comparisons", "Useful FAQs"],
    takeaway: "Answer the real questions your customers ask before they get in touch.",
  },
] as const;

export function SearchExplorer() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % stages.length;
    else if (event.key === "ArrowLeft") next = (index + stages.length - 1) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className="search-explorer">
      <div className="explorer-heading">
        <span className="explorer-label">The path to discovery</span>
        <span className="explorer-example">Interactive example</span>
      </div>
      <div className="explorer-tabs" role="tablist" aria-label="Explore search visibility">
        {stages.map((item, index) => (
          <button
            key={item.label}
            ref={(node) => { buttons.current[index] = node; }}
            type="button"
            role="tab"
            id={`search-stage-${index}`}
            aria-controls="search-stage-panel"
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleKey(event, index)}
          >
            <span className="explorer-step">0{index + 1}</span>{item.label}
          </button>
        ))}
      </div>
      <div id="search-stage-panel" role="tabpanel" aria-labelledby={`search-stage-${active}`} tabIndex={0} className="explorer-panel">
        <div className="explorer-content" key={active}>
          <div className="explorer-query">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
            <p>{stage.query}</p>
          </div>
          <div className="explorer-connection" aria-hidden="true"><span /><span /><span /></div>
          <div className="explorer-result">
            <p className="explorer-result-label"><span aria-hidden="true">✳</span>{stage.name}</p>
            <h3>{stage.title}</h3>
            <p className="explorer-description">{stage.description}</p>
            <ul className="explorer-signals">
              {stage.signals.map((signal) => <li key={signal}><span aria-hidden="true">✓</span>{signal}</li>)}
            </ul>
          </div>
          <p className="explorer-takeaway">{stage.takeaway}</p>
        </div>
      </div>
      <div className="explorer-footer"><span>Explore all three foundations</span><span aria-hidden="true">0{active + 1} / 03</span></div>
    </div>
  );
}
