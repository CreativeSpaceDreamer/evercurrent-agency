const pillars = [
  {
    title: "Relationship-first",
    detail: "We build rituals that make customers feel known. Every playbook starts with consent, context, and value."
  },
  {
    title: "Evidence-led",
    detail: "Hypotheses, testing, and instrumentation drive decisions. Reporting speaks the language of finance and product."
  },
  {
    title: "Operator mindset",
    detail: "We plug in like an internal retention team—standing up cadences, tooling, and documentation." 
  }
];

const rituals = [
  "Weekly lifecycle standup",
  "KPI review + risk log",
  "Launch retro with learnings",
  "Quarterly roadmap planning"
];

export default function AboutPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">About</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Evercurrent.agency is a lifecycle operating team.</h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-2">
            We exist to make lifecycle marketing feel like a relationship: anticipatory, respectful, and revenue-positive. Our team carries experience from DTC, product-led, and subscription brands.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card">
              <h2 className="text-2xl font-semibold text-ink">{pillar.title}</h2>
              <p className="mt-4 text-sm text-ink-2">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[3fr,2fr]">
          <article>
            <p className="section-eyebrow">Operating cadence</p>
            <h2 className="section-title mt-3">We plug into your team structure.</h2>
            <p className="section-subtitle mt-4">
              You get lifecycle strategists, copy + design, builders, QA, and analysts who operate like in-house teammates.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink">
              {rituals.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2 className="text-2xl font-semibold text-ink">Leadership</h2>
            <p className="mt-4 text-sm text-ink-2">
              Founders with background in leading retention at venture-backed DTC and SaaS brands. Specialists in email, SMS, lifecycle design, and analytics lead each pod.
            </p>
            <p className="mt-4 text-sm text-ink-2">
              Want to connect? Email <a href="mailto:hello@evercurrent.agency" className="underline hover:text-accent">hello@evercurrent.agency</a>.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

