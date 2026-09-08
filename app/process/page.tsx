import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProcessCard } from "@/components/process-card";
import { OG_IMAGE } from "@/lib/constants";
import { buildProcess, marketingProcess } from "@/lib/content/process";

const title = "Process | How We Work";
const description = "A 4-step marketing process—Diagnose, Build, Launch, Improve—with durations and completion criteria, plus how custom software and app projects are scoped.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { url: "/process", title, description, images: [OG_IMAGE] },
  twitter: { title, description, images: [OG_IMAGE.url] },
};

export default function ProcessPage() {
  return (
    <main id="main-content">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Process", path: "/process" }]} />
      <section className="page-hero shell">
        <p className="kicker">How we work</p>
        <h1>Clarity before complexity.</h1>
        <p>Marketing engagements move through four stages with clear durations and completion criteria. Custom software, websites, and apps are scoped separately.</p>
      </section>

      <section className="approach shell" aria-labelledby="marketing-process-heading">
        <div className="section-intro compact">
          <p className="kicker">Marketing engagements</p>
          <h2 id="marketing-process-heading">Diagnose. Build. Launch. Improve.</h2>
        </div>
        <div className="process-grid">
          {marketingProcess.map((item) => (
            <ProcessCard
              key={item.step}
              step={item.step}
              title={item.title}
              copy={item.copy}
              duration={item.duration}
              clientInvolvement={item.clientInvolvement}
              completionCriteria={item.completionCriteria}
            />
          ))}
        </div>
      </section>

      <section className="pillar shell" aria-labelledby="build-process-heading">
        <div className="pillar-heading">
          <p className="kicker">Custom websites, apps, and software</p>
          <h2 id="build-process-heading">Scoped separately, built in visible cycles.</h2>
          <p>Timelines for custom builds depend on scope and are set during discovery—not a fixed calendar. The normal phases:</p>
        </div>
        <div className="build-phase-list">
          {buildProcess.map((phase) => (
            <div className="build-phase" key={phase.phase}>
              <span>{phase.phase}</span>
              <p>{phase.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell" style={{ padding: "20px 0 120px" }}>
        <p>
          Ready to find your priority? <Link className="text-link" href="/contact">Start a project brief <span aria-hidden="true">↗</span></Link>
        </p>
      </section>
    </main>
  );
}
