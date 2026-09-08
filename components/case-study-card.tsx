import Link from "next/link";
import type { CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="case-study-card">
      <span className="case-study-industry">{caseStudy.industry} · {caseStudy.market}</span>
      <h3>{caseStudy.title}</h3>
      <p>{caseStudy.summary}</p>
      <div className="case-study-metrics">
        {caseStudy.results.slice(0, 2).map((metric) => (
          <span key={metric.label} className="metric-badge">
            <strong>{metric.value}</strong>
            {metric.label}
          </span>
        ))}
      </div>
      <span className="case-study-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
