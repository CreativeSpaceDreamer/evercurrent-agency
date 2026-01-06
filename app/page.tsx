import Link from "next/link";

const services = [
  {
    title: "Email + Lifecycle Systems",
    summary: "Automated email flows and campaigns that grow repeat revenue 10-30% within 60-90 days.",
    href: "/services/email",
    metrics: [
      "High-impact revenue flows installed + QA (welcome, abandon, post-purchase, winback).",
      "90-day campaign calendar (offers, creative, and testing plan).",
      "Deliverability + list hygiene rituals (warmups, suppression, compliance)."
    ]
  },
  {
    title: "Retention Operations Support",
    summary: "We run the weekly segmentation, testing, and reporting cadence so you stay focused on new creative and offers.",
    href: "/services",
    metrics: [
      "Optimization sprints (hypothesis -> test -> recap).",
      "Revenue + LTV dashboards (flow share, cohorts, list health).",
      "Actionable weekly recaps (next steps, owners, deadlines)."
    ]
  },
  {
    title: "SMS & Push Upgrades",
    summary: "Layer conversational SMS, push, and onsite triggers once email is compounding to extend every lifecycle moment.",
    href: "/services/sms",
    metrics: [
      "Two-way SMS concierge (human replies for VIPs).",
      "Behavior-led push + onsite (triggered nudges, reminders, promos).",
      "Consent + compliance playbooks (TCPA, carrier, platform rules)."
    ]
  }
];

const proofPoints = [
  { label: "Flow revenue share", value: "38-64%", detail: "Refill SKU brand doubled revenue from automation in 60 days." },
  { label: "Cohort LTV lift", value: "+27%", detail: "Apparel client gained 27% LTV in 90 days while keeping unsubscribes at 0.18%." },
  { label: "Send volume growth", value: "2x", detail: "Scaled campaigns without hurting deliverability for a CPG subscription." }
];

const mobileProofPreview = proofPoints.slice(0, 2);

const caseSnapshot = {
  brand: "Lumen & Loom - sustainable apparel",
  headline: "Case snapshot",
  result: "+27% cohort LTV in 90 days",
  summary: "Plateaued LTV? We rebuilt the revenue flows, launched a campaign engine, and held unsubscribes under 0.2% while doubling contribution.",
  link: "/case-studies/lumen-and-loom"
};

const lifecycleProcess = [
  {
    title: "Audit & Scorecard",
    detail: "List health, tracking, attribution, and missed revenue opportunities mapped within 10 business days."
  },
  {
    title: "Foundations",
    detail: "Domain + deliverability, capture, creative system, and KPI targets locked before scaling volume."
  },
  {
    title: "Lifecycle Engine",
    detail: "Flows, campaigns, and revenue intelligence dashboards deployed and stress-tested."
  },
  {
    title: "Optimize & Scale",
    detail: "Weekly ops rituals, experiments, and segmentation roadmaps that keep the list compounding."
  }
];

const idealClientSignals = [
  "Shopify or DTC brand with consistent traffic (250+ orders/month) but plateauing repeat revenue.",
  "Existing Klaviyo (or similar ESP) data with gaps in flows, segmentation, or deliverability hygiene.",
  "High-margin SKUs, subscriptions, or bundles where a 10% bump in LTV moves overall growth.",
  "Lean growth teams that need a retention partner who can own strategy, creative, and ops."
];

const whyEvercurrent = [
  {
    title: "Systems first",
    detail: "We build the revenue flows, monitoring, and reporting before sending more campaigns - no spray and pray."
  },
  {
    title: "Revenue accountability",
    detail: "Every engagement ties back to LTV, flow share, and cash collected, not vanity opens or impressions."
  },
  {
    title: "Retention experts",
    detail: "We stay in lifecycle. Acquisition, ads, or random projects get declined so your team knows our focus."
  },
  {
    title: "Operator mindset",
    detail: "We work like an embedded retention lead: agendas, retros, and decision logs that keep stakeholders aligned."
  }
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

const caseStudyHighlights = [
  {
    slug: "lumen-and-loom",
    category: "Sustainable Fashion",
    title: "Lifecycle rebuild lifted revenue 23% for Lumen & Loom.",
    description: "Audit -> Sprint -> Retainer rewired lifecycle for the regenerative apparel brand.",
    result: "+23% revenue lift"
  },
  {
    slug: "habit-coaching",
    category: "Wellness Subscription",
    title: "Habit Coach Co regained retention rituals with coaching journeys.",
    description: "Concierge SMS, habit stacking, and progressive profiling boosted subscription saves nineteen percent.",
    result: "+19% subscription saves"
  },
  {
    slug: "cpg-bundles",
    category: "Food & Drink CPG",
    title: "Gather Goods pulled repeat orders forward with dynamic bundles.",
    description: "Recipe storytelling, reorder intelligence, and deliverability guardrails raised bundle AOV and cadence.",
    result: "+22% bundle AOV"
  }
];

export default function HomePage() {
  return (
    <div className="bg-slate">
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <p className="section-eyebrow">Evercurrent.agency - Lifecycle retention for DTC</p>
            <h1 className="mt-6 text-4xl font-semibold text-ink sm:text-5xl md:text-6xl">
              Grow repeat revenue with automated email + SMS systems.
            </h1>
            <p className="mt-6 text-lg text-ink-2 sm:max-w-xl">
              We grow repeat purchase revenue and LTV with lifecycle email systems (flows + campaigns + measurement). Every engagement delivers flows, campaigns, and measurement in 60-90 days.
            </p>
            <p className="mt-4 text-sm font-semibold text-ink sm:max-w-lg">For DTC brands with traffic + sales but weak repeat purchase performance.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
                Book strategy session
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
            <div className="space-y-6">
              <article className="card space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{caseSnapshot.headline}</span>
                <h2 className="text-2xl font-semibold text-ink">{caseSnapshot.result}</h2>
                <p className="text-sm text-ink-2">{caseSnapshot.summary}</p>
                <p className="text-sm font-semibold text-ink">{caseSnapshot.brand}</p>
                <Link href={caseSnapshot.link} className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent">
                  View the playbook
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
              <article className="card space-y-6">
                <h2 className="text-xl font-semibold text-ink">What we set up for you</h2>
                <ul className="space-y-4 text-sm text-ink-2">
                  <li><strong className="font-semibold text-ink">Automated email systems</strong> built for your top products, promos, and retention plays.</li>
                  <li><strong className="font-semibold text-ink">Campaign engine</strong> that ships a 90-day plan with creative, offers, and tests.</li>
                  <li><strong className="font-semibold text-ink">Revenue dashboards</strong> that show flow share, LTV lift, and list health at a glance.</li>
                  <li><strong className="font-semibold text-ink">Retention workflows</strong> with agendas, recaps, and next actions run by our team.</li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent">
                  Book a strategy session
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:hidden">
        <div className="space-y-4 rounded-3xl bg-ink p-6 text-paper">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">Mobile summary</p>
          <h2 className="text-2xl font-semibold text-paper">Need fast answers?</h2>
          <p className="text-sm text-paper/80">
            Book a quick strategy call and we&#39;ll review your flows, deliverability, and the fastest way to grow repeat purchases from your phone.
          </p>
          <ul className="space-y-3 text-sm text-paper">
            {mobileProofPreview.map((point) => (
              <li key={point.label} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-2" aria-hidden="true" />
                <div>
                  <p className="text-base font-semibold text-paper">{point.value}</p>
                  <p className="text-xs text-paper/70">{point.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary w-full">
            Book strategy session
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 rounded-3xl bg-ink p-8 text-paper md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">Who we work with</p>
            <h2 className="mt-4 text-3xl font-semibold">Brands that benefit the most.</h2>
            <p className="mt-4 text-base text-slate">You don&#39;t need another agency deck - you need a retention partner who understands your revenue model and can operate independently.</p>
          </div>
          <ul className="space-y-4 text-sm text-paper/90">
            {idealClientSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-2" aria-hidden="true" />
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">Services</p>
            <h2 className="section-title mt-2">Email first. Lifecycle always.</h2>
            <p className="section-subtitle mt-4">
              We build the revenue-critical flows and campaigns first, then layer SMS, push, and onsite extensions once the foundation is compounding.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">
            Book strategy session
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
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="section-eyebrow">How we work</p>
            <h2 className="section-title mt-3">An operating cadence you can rely on.</h2>
            <p className="section-subtitle mt-4">Every engagement follows the same sequence so your team knows exactly what&#39;s shipping and when.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {lifecycleProcess.map((step) => (
              <article key={step.title} className="card space-y-3">
                <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                <p className="text-sm text-ink-2">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Why Evercurrent</p>
          <h2 className="section-title mt-3">Built for operators, not vanity metrics.</h2>
          <p className="section-subtitle mt-4">
            We measure success by repeat revenue and LTV. Here&#39;s how that looks when we&#39;re embedded with your team.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whyEvercurrent.map((reason) => (
            <article key={reason.title} className="card space-y-3">
              <h3 className="text-xl font-semibold text-ink">{reason.title}</h3>
              <p className="text-sm text-ink-2">{reason.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            Book strategy session
          </Link>
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
              {caseStudyHighlights.map((study) => (
                <article key={study.slug} className="card">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{study.category}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">{study.title}</h3>
                  <p className="mt-3 text-sm text-ink-2">{study.description}</p>
                  <p className="mt-5 text-sm font-semibold text-ink">Outcome: {study.result}</p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
                  >
                    Read the case study
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </article>
              ))}
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
            <p className="mt-3 text-sm text-slate">
              Prefer email or phone? Reach us at <a href="mailto:hello@evercurrent.agency" className="underline hover:text-accent">hello@evercurrent.agency</a> or call +1 (401) 992-5475.
            </p>
          </div>
        <div className="flex flex-col gap-4 text-sm font-semibold">
          <Link href="/contact" className="btn-primary w-full bg-paper text-ink hover:bg-slate sm:w-auto">
            Book strategy session
          </Link>
          <Link href="/audit" className="btn-secondary w-full border-paper text-paper hover:border-accent hover:text-accent sm:w-auto">
            Request lifecycle audit
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
