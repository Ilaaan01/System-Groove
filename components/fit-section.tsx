export function FitSection() {
  return (
    <section className="fit shell" id="fit" aria-labelledby="fit-heading">
      <div className="section-intro compact">
        <p className="kicker">Fit check</p>
        <h2 id="fit-heading">Is this the right system for you?</h2>
      </div>
      <div className="fit-grid">
        <div className="fit-card fit-good">
          <span className="fit-label">Good fit</span>
          <p>Local service companies with a real offer, defined market, capacity for more inquiries, or a concrete software/automation problem.</p>
        </div>
        <div className="fit-card fit-not">
          <span className="fit-label">Not a fit</span>
          <p>Anyone demanding guaranteed lead volume, guaranteed rankings, fake reviews, fabricated testimonials, or guaranteed AI citations.</p>
        </div>
      </div>
    </section>
  );
}
