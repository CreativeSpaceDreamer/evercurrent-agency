import Link from "next/link";

const focuses = [
  {
    title: "Lifecycle retargeting",
    detail: "Paid funnels aligned to lifecycle stages across Meta, Google, and programmatic." 
  },
  {
    title: "Creative system",
    detail: "Motion, UGC, and statics derived from lifecycle stories with rapid testing loops." 
  },
  {
    title: "Attribution & incrementality",
    detail: "Revenue contribution modeling, cohort tracking, and experiments to prove lift." 
  }
];

const stats = [
  { label: "ROAS lift", value: "+32%", detail: "Lifecycle audiences outperformed blended remarketing." },
  { label: "CAC payback", value: "<21 days", detail: "Subscriptions winback paid back inside one billing cycle." },
  { label: "Creative velocity", value: "18 concepts/mo", detail: "Derived from lifecycle testing and UGC sourcing." }
];

export default function PaidServicePage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Services · Paid Retention</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Paid retention that amplifies lifecycle momentum.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Extend lifecycle stories into paid channels to accelerate winbacks, subscription saves, and drop performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-base">Discuss retention media</Link>
            <Link href="/audit" className="btn-secondary text-base">Request paid audit</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {focuses.map((focus) => (
            <article key={focus.title} className="card">
              <h2 className="text-2xl font-semibold text-ink">{focus.title}</h2>
              <p className="mt-4 text-sm text-ink-2">{focus.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Operations</p>
          <div className="mt-10 grid gap-6 md:grid-cols-[3fr,2fr]">
            <article className="card">
              <h2 className="text-3xl font-semibold text-ink">What we manage</h2>
              <ul className="mt-6 space-y-3 text-sm text-ink">
                <li>Audience architecture synced with lifecycle segments and consent.</li>
                <li>Creative sourcing, briefing, production, and QA.</li>
                <li>Offer testing, landing pages, and post-click journeys.</li>
                <li>Daily pacing and budget allocation across platforms.</li>
                <li>Incrementality testing & cohort reporting.</li>
              </ul>
            </article>
            <article className="card">
              <h2 className="text-3xl font-semibold text-ink">Platforms</h2>
              <p className="mt-4 text-sm text-ink-2">
                Meta, Google, TikTok, YouTube, programmatic, and affiliate extensions. We integrate with your MMP or analytics stack for closed-loop measurement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{stat.label}</h3>
              <p className="mt-4 text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-3 text-sm text-ink-2">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Run paid media through the lifecycle lens.</h2>
            <p className="mt-4 text-base text-slate">
              Show us your current mix and goals—we will map audiences, offers, and creative velocity for the next quarter.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-paper text-ink hover:bg-slate">
            Align paid + lifecycle
          </Link>
        </div>
      </section>
    </div>
  );
}
