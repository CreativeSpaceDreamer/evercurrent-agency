import Link from "next/link";

const pillars = [
  {
    title: "Consent + compliance",
    detail: "Opt‑in journeys, preference management, and policy alignment."
  },
  {
    title: "Lifecycle triggers",
    detail: "Welcome, abandon, post‑purchase, win‑back, and VIP moments."
  },
  {
    title: "Two‑way support",
    detail: "Concierge flows, routing rules, and escalation paths."
  }
];

export default function SmsServicePage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Services · SMS Programs</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">SMS built for trust and timing.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            We integrate SMS into your lifecycle so messages feel helpful, not intrusive.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Work with us
            </Link>
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-secondary text-base">
              Book a strategy call
            </Link>
          </div>
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

      <section className="bg-slate text-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Integrate SMS the right way.</h2>
            <p className="mt-4 text-base text-ink-2">
              Book a strategy call and we’ll show where SMS fits your lifecycle.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Work with us
          </Link>
        </div>
      </section>
    </div>
  );
}

