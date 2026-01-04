import Link from "next/link";

const deliverables = [
  "Lifecycle audit & KPI roadmap",
  "Acquisition capture + welcome variants",
  "Core 10 flows with testing backlog",
  "Campaign calendar & creative system",
  "Deliverability & compliance guardrails",
  "Lifecycle reporting + revenue intelligence"
];

const proof = [
  {
    label: "Flow revenue share",
    value: "32-58%",
    detail: "Rebuilt flows + segmentation for launch-heavy fashion brand."
  },
  {
    label: "Unsub rate",
    value: "0.18%",
    detail: "Scaled send volume 1.9× while holding complaint rate <0.08%."
  },
  {
    label: "Repeat purchase lift",
    value: "+24%",
    detail: "First-time nurture + winback loops for replenishable CPG."
  }
];

const operatingModel = [
  {
    title: "Strategy & architecture",
    detail: "Audit data, define flow hierarchy, segment frameworks, and testing plan for 90 days." 
  },
  {
    title: "Creative & production",
    detail: "Modular design system, copywriting, build, QA, and device rendering." 
  },
  {
    title: "Optimization & analytics",
    detail: "Run controlled tests, revenue analytics, deliverability checks, and weekly retros." 
  }
];

export default function EmailServicePage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Services · Email Lifecycle</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Email lifecycle programs built for relationships.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Full-stack strategy, creative, ops, and analytics for email programs where retention is mission critical.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-base">Book strategy session</Link>
            <Link href="/audit" className="btn-secondary text-base">Get email audit</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
          <article className="card">
            <h2 className="text-3xl font-semibold text-ink">What we deliver</h2>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2 className="text-3xl font-semibold text-ink">Operating model</h2>
            <div className="mt-6 grid gap-4">
              {operatingModel.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate bg-paper px-6 py-5">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Proof</p>
          <h2 className="section-title mt-3">Metrics from recent rebuilds.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {proof.map((item) => (
              <article key={item.label} className="card">
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{item.label}</h3>
                <p className="mt-4 text-4xl font-semibold text-ink">{item.value}</p>
                <p className="mt-3 text-sm text-ink-2">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-[3fr,2fr]">
          <article className="card">
            <h2 className="text-3xl font-semibold text-ink">Sample engagement timeline</h2>
            <ol className="mt-6 space-y-4 text-sm text-ink">
              <li><strong className="text-ink">Week 1:</strong> Stakeholder interviews, data access, deliverability check, baseline report.</li>
              <li><strong className="text-ink">Week 2:</strong> Audit readout, roadmap approval, segmentation and capture plan.</li>
              <li><strong className="text-ink">Weeks 3-6:</strong> Build & QA flows, launch capture, stand up reporting, begin campaign engine.</li>
              <li><strong className="text-ink">Weeks 7-12:</strong> Testing sprints, retention dashboard cadence, backlog grooming.</li>
            </ol>
          </article>
          <article className="card">
            <h2 className="text-3xl font-semibold text-ink">Acceptance criteria</h2>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              <li>Core flows launched with segmentation logic & QA receipts.</li>
              <li>Domain health scores green; complaint =0.1%.</li>
              <li>Lifecycle dashboard live with attribution & cohorts.</li>
              <li>90-day testing roadmap with owners and hypotheses.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Ready to modernize email lifecycle?</h2>
            <p className="mt-4 text-base text-slate">
              Bring your KPIs to the call—we will map uplift scenarios, required resourcing, and first tests in under 45 minutes.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-paper text-ink hover:bg-slate">
            Speak with Evercurrent
          </Link>
        </div>
      </section>
    </div>
  );
}
