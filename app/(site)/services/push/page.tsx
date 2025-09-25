import Link from "next/link";

const orchestrations = [
  "Behavioral push journeys tied to lifecycle milestones",
  "In-app messaging for onboarding, upgrades, and retention",
  "Cross-channel orchestration with email/SMS campaigns",
  "Experimentation backlog: timing, frequency, creative" 
];

const integrations = [
  "Mixpanel",
  "Segment",
  "Braze",
  "Iterable",
  "OneSignal",
  "Firebase"
];

export default function PushServicePage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Services · Push & In-app</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Push & in-app orchestration that respects context.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Connect lifecycle touchpoints across mobile to keep users engaged, retained, and excited for the next interaction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-base">Plan your orchestration</Link>
            <Link href="/audit" className="btn-secondary text-base">Request channel audit</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
          <article className="card">
            <h2 className="text-3xl font-semibold text-ink">What we orchestrate</h2>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              {orchestrations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2 className="text-3xl font-semibold text-ink">Data & tooling sync</h2>
            <p className="mt-4 text-sm text-ink-2">
              We partner with your product and analytics teams to ensure events, user properties, and consent states are clean. Our team handles experimentation, analysis, and reporting using your preferred stack.
            </p>
            <div className="mt-6 rounded-3xl border border-slate bg-paper px-6 py-5">
              <h3 className="text-xl font-semibold text-ink">Platforms</h3>
              <p className="mt-2 text-sm text-ink-2">{integrations.join(" · ")}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Success snapshot</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Activation lift</h3>
              <p className="mt-4 text-4xl font-semibold text-ink">+18%</p>
              <p className="mt-3 text-sm text-ink-2">Education and checklist push journey for onboarding improved day-7 retention.</p>
            </article>
            <article className="card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Frequency control</h3>
              <p className="mt-4 text-4xl font-semibold text-ink">-34%</p>
              <p className="mt-3 text-sm text-ink-2">Dynamic suppression logic reduced fatigue and increased opt-in longevity.</p>
            </article>
            <article className="card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Winback contribution</h3>
              <p className="mt-4 text-4xl font-semibold text-ink">+22%</p>
              <p className="mt-3 text-sm text-ink-2">Push + email sequences brought repeat orders forward by 9 days average.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Let’s audit your event architecture.</h2>
            <p className="mt-4 text-base text-slate">
              We will assess tracking, consent, and flow orchestration to identify quick wins and longer-term experiments.
            </p>
          </div>
          <Link href="/audit" className="btn-primary bg-paper text-ink hover:bg-slate">
            Start push audit
          </Link>
        </div>
      </section>
    </div>
  );
}
