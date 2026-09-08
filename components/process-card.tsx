export function ProcessCard({
  step,
  title,
  copy,
  duration,
  clientInvolvement,
  completionCriteria,
}: {
  step: string;
  title: string;
  copy: string;
  duration?: string;
  clientInvolvement?: string;
  completionCriteria?: string;
}) {
  const hasMeta = duration || clientInvolvement || completionCriteria;
  return (
    <article className="process-card">
      <span>{step}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
      {hasMeta && (
        <dl className="process-meta">
          {duration && (
            <div>
              <dt>Duration</dt>
              <dd>{duration}</dd>
            </div>
          )}
          {clientInvolvement && (
            <div>
              <dt>Client involvement</dt>
              <dd>{clientInvolvement}</dd>
            </div>
          )}
          {completionCriteria && (
            <div>
              <dt>Done when</dt>
              <dd>{completionCriteria}</dd>
            </div>
          )}
        </dl>
      )}
    </article>
  );
}
