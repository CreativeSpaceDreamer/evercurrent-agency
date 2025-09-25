import Link from "next/link";

const serviceTiers = [
  {
    name: "Email Lifecycle",
    summary: "Core 10 flows + campaign engine with experimentation and deliverability ops.",
    href: "/services/email",
    inclusions: [
      "Audit & roadmap",
      "Capture & segmentation systems",
      "Creative, build, QA",
      "Lifecycle reporting + insights"
    ]
  },
  {
    name: "SMS Programs",
    summary: "Compliance-first triggers, 2-way concierge, and retention-first promos.",
    href: "/services/sms",
    inclusions: ["Opt-in strategy", "Journey build + testing", "Two-way support", "Revenue + CX analytics"]
  },
  {
    name: "Push & In-app",
    summary: "Behavioral push/in-app orchestrated with lifecycle campaigns and experimentation.",
    href: "/services/push",
    inclusions: ["Consent flows", "Behavioral orchestration", "Creative system", "Test-and-learn pods"]
  },
  {
    name: "Paid Retention",
    summary: "Lifecycle-aligned paid media to retarget, win back, and amplify launches.",
    href: "/services/paid",
    inclusions: ["Audience architecture", "Creative & funnels", "Budget pacing", "Attribution & insights"]
  }
];

const process = [
  {
    step: "Discovery",
    detail: "Context deep-dive, data access, KPI alignment, success criteria."
  },
  {
    step: "Lifecycle audit",
    detail: "Technical, data, creative, and compliance scorecard across channels."
  },
  {
    step: "Roadmap & resourcing",
    detail: "30-60-90 plan, test backlog, playbook selection, staffing cadence."
  },
  {
    step: "Build & orchestrate",
    detail: "Flows, campaigns, experiments, QA, deliverability, analytics."
  },
  {
    step: "Measure & iterate",
    detail: "Weekly KPI review, retros, backlog grooming, roadmap refresh."
  }
];

const pricing = [
  {
    tier: "Foundations",
    listSize: "= 50k subscribers",
    audit: "$4.5k–$7.5k",
    build: "$8k–$16k",
    retainer: "$4k–$7k/mo"
  },
  {
    tier: "Growth",
    listSize: "50k–250k subscribers",
    audit: "$7.5k–$12k",
    build: "$16k–$32k",
    retainer: "$7k–$12k/mo"
  },
  {
    tier: "Scale",
    listSize: "250k–1M subscribers",
    audit: "$12k+",
    build: "$32k+",
    retainer: "$12k–$18k/mo"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Services</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Lifecycle programs operated as one team.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Evercurrent.agency integrates strategy, creative, build, QA, analytics, and operations so lifecycle leaders can act on insights faster. Explore the channels we own end-to-end.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Book strategy session
            </Link>
            <Link href="/audit" className="btn-secondary text-base">
              Request audit & roadmap
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {serviceTiers.map((service) => (
            <article key={service.name} className="card flex flex-col gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-ink">{service.name}</h2>
                <p className="mt-3 text-sm text-ink-2">{service.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-ink">
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent" href={service.href}>
                Dive into {service.name.toLowerCase()}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Engagement cadence</p>
          <h2 className="section-title mt-2">Operating rhythm designed for lifecycle momentum.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {process.map((phase) => (
              <article key={phase.step} className="card-muted">
                <h3 className="text-xl font-semibold text-ink">{phase.step}</h3>
                <p className="mt-3 text-sm text-ink-2">{phase.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Investment ranges</p>
          <h2 className="section-title mt-2">Anchored to list size and lifecycle complexity.</h2>
          <p className="section-subtitle mt-4">
            Final proposals are calibrated after the audit. Ranges below reflect recent engagements.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => (
            <article key={tier.tier} className="card">
              <h3 className="text-2xl font-semibold text-ink">{tier.tier}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-accent">{tier.listSize}</p>
              <dl className="mt-6 space-y-3 text-sm text-ink">
                <div>
                  <dt className="font-semibold text-ink-2">Audit</dt>
                  <dd>{tier.audit}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-2">Build / foundations</dt>
                  <dd>{tier.build}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-2">Retainer</dt>
                  <dd>{tier.retainer}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-2">Next conversation</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Want a tailored scope?</h2>
            <p className="mt-4 text-base text-slate">
              Tell us about your lifecycle stack and growth goals. We will map the first 90 days and build the team to run it.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-paper text-ink hover:bg-slate">
            Connect with Evercurrent
          </Link>
        </div>
      </section>
    </div>
  );
}
