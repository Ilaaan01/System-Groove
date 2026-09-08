import type { Service } from "@/lib/content/services";

export function ServiceRow({ service, index, compact = false }: { service: Service; index: number; compact?: boolean }) {
  return (
    <article className="service-row" id={service.slug}>
      <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
      <div className="service-main">
        <h3>{service.title}</h3>
        <p>{compact ? service.summary : service.description}</p>
        {!compact && service.bestFor && (
          <p className="service-best-for">
            <strong>Best for:</strong> {service.bestFor}
          </p>
        )}
      </div>
      <div className="service-meta">
        <span className="service-tag">{service.tag}</span>
        {service.deliverables && (
          <ul>
            {(compact ? service.deliverables.slice(0, 3) : service.deliverables).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {!compact && service.outcomes && (
          <>
            <span className="service-meta-label">Expected outcomes</span>
            <ul>
              {service.outcomes.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <span className="service-arrow" aria-hidden="true">↗</span>
    </article>
  );
}
