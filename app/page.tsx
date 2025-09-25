import Link from "next/link";

const services = [
  {
    title: "Email lifecycle programs",
    summary: "Full-stack strategy, creative, build, QA, and performance for every lifecycle touch.",
    href: "/services/email",
    metrics: ["Core 8+ flows", "Campaign engine", "Deliverability rituals"]
  },
  {
    title: "SMS retention systems",
    summary: "Compliance-first messaging, triggered journeys, and two-way automations that feel human.",
    href: "/services/sms",
    metrics: ["Quiet-hour logic", "Responses + concierge", "Integrated testing"]
  },
  {
    title: "Push & in-app orchestration",
    summary: "Behavior-led push, in-app, and onsite triggers that extend lifecycle stories across the stack.",
    href: "/services/push",
    metrics: ["Channel choreography", "Experiment pipeline", "Consent playbooks"]
  }
];

const proofPoints = [
  { label: "Lifecycle revenue share", value: "38?64%", detail: "Lift achieved in 2 quarters via rebuild + campaign ops." },
  { label: "Opt-out protection", value: "0.12%", detail: "Average unsub rate while scaling send volume 1.9×." },
  { label: "Refill cohort LTV", value: "+27%", detail: "90-day LTV growth from habit coaching + subscription saves." }
];

const resources = [
  {
    eyebrow: "Guide",
    title: "Retention Systems Blueprint",
    description: "How we install the Evercurrent operating system across email, SMS, and push.",
    href: "/resources/guides"
  },
  {
    eyebrow: "Email Design",
    title: "Lifecycle Design Library",
    description: "Reusable blocks, typography, and hierarchy patterns for lifecycle conversions.",
    href: "/resources/email-designs"
  }
];

export default function HomePage() {
  return (
    <div className="bg-slate">
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <p className="section-eyebrow">Lifecycle partner for DTC growth teams</p>
            <h1 className="mt-6 text-5xl font-semibold text-ink sm:text-6xl md:text-7xl">
              Relationship-first lifecycle marketing.
            </h1>
            <p className="mt-6 text-lg text-ink-2 sm:max-w-xl">
              Evercurrent.agency builds retention machines that feel personal at scale. Strategy, creative, build, and optimization—under one relationship-first team.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Book strategy session
              </Link>
              <Link href="/audit" className="btn-secondary text-base">
                Get lifecycle audit
              </Link>
            </div>
            <dl className="mt-12 grid gap-6 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.label} className="card-muted">
                  <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{point.label}</dt>
                  <dd className="mt-4 text-3xl font-semibold text-ink">{point.value}</dd>
                  <p className="mt-2 text-sm text-ink-2">{point.detail}</p>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:flex-1">
            <div className="card space-y-6">
              <h2 className="text-xl font-semibold text-ink">Lifecycle operating system</h2>
              <ul className="space-y-4 text-sm text-ink-2">
                <li><strong className="font-semibold text-ink">Core 10 flows</strong> tailored by vertical, versioned, and QA&#39;d weekly.</li>
                <li><strong className="font-semibold text-ink">Campaign engine</strong> with testing rituals and creative sprints.</li>
                <li><strong className="font-semibold text-ink">Revenue intelligence</strong> dashboards with cohort insights and alerts.</li>
                <li><strong className="font-semibold text-ink">Retention ops</strong> rituals (standups, retro, risk reviews) run by our team.</li>
              </ul>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent">
                Explore the services hub
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">Services</p>
            <h2 className="section-title mt-2">The channels we own end-to-end.</h2>
            <p className="section-subtitle mt-4">
              Strategy, creative, deployment, analytics. Operated as one lifecycle machine with compliance and consent built in.
            </p>
          </div>
          <Link href="/services" className="btn-secondary">
            View all services
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card flex h-full flex-col justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm text-ink-2">{service.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-ink">
                {service.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    {metric}
                  </li>
                ))}
              </ul>
              <Link className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent" href={service.href}>
                Learn more
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row">
          <div className="lg:w-2/5">
            <p className="section-eyebrow">Case studies</p>
            <h2 className="section-title mt-3">Proof built on relationships.</h2>
            <p className="section-subtitle mt-4">
              Every engagement starts with a lifecycle audit and evolves through collaborative sprints. We publish the metrics that matter.
            </p>
            <Link href="/case-studies" className="btn-secondary mt-8">
              Browse case studies
            </Link>
          </div>
          <div className="lg:flex-1">
            <div className="grid gap-6">
              <article className="card">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Refill DTC Wellness</div>
                <h3 className="mt-4 text-2xl font-semibold text-ink">Habit coaching lifted subscription retention by 19%.</h3>
                <p className="mt-3 text-sm text-ink-2">
                  We rebuilt onboarding, layered SMS habit nudges, and instituted a save sequence with consult offers. Cohort LTV +27% at 90 days.
                </p>
                <Link href="/case-studies/habit-coaching" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent">
                  Read the engagement
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
              <article className="card">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Fashion Drops</div>
                <h3 className="mt-4 text-2xl font-semibold text-ink">Drop orchestration doubled launch-week revenue.</h3>
                <p className="mt-3 text-sm text-ink-2">
                  VIP segmentation, waitlist flows, and inventory-aware comms took flow revenue from 32% ? 58% in 8 weeks without raising unsub rates.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Resources</p>
          <h2 className="section-title mt-3">Give your lifecycle team a head start.</h2>
          <p className="section-subtitle mt-4">
            Guides, templates, and email designs from the Evercurrent operating system.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.title} className="card flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{resource.eyebrow}</span>
              <h3 className="text-2xl font-semibold text-ink">{resource.title}</h3>
              <p className="text-sm text-ink-2">{resource.description}</p>
              <Link className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent" href={resource.href}>
                View the collection
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-2">Next step</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Audit your lifecycle program with Evercurrent.
            </h2>
            <p className="mt-4 text-base text-slate">
              Get the lifecycle scorecard, roadmap, and revenue model that powers every engagement. We uncover quick wins within 10 business days.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <Link href="/audit" className="btn-primary bg-paper text-ink hover:bg-slate">
              Request lifecycle audit
            </Link>
            <Link href="/contact" className="btn-secondary border-paper text-paper hover:border-accent hover:text-accent">
              Book strategy session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
