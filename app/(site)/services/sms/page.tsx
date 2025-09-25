import Link from "next/link";

const pillars = [
  {
    title: "Acquisition & consent",
    detail: "Growth loops with popups, post-purchase, QR, and keyword flows plus compliance management."
  },
  {
    title: "Two-way automations",
    detail: "Trigger journeys, concierge replies, and escalation workflows connecting to CX platforms."
  },
  {
    title: "Lifecycle promotions",
    detail: "Playbooks for drops, replenishment, VIP moments, and retention-specific offers."
  }
];

const metrics = [
  { label: "Opt-in growth", value: "+41%", detail: "From list hygiene, capture incentives, and triggered replenishment." },
  { label: "Reply satisfaction", value: "94%", detail: "Two-way concierge responses under 12 minutes avg." },
  { label: "Revenue per send", value: "+26%", detail: "Segmentation + multi-touch flows with quiet-hour logic." }
];

export default function SmsServicePage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Services · SMS Programs</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">SMS built for consent and connection.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Lifecycle-led SMS that respects quiet hours, supports two-way conversations, and reinforces your brand’s voice.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-base">Talk SMS strategy</Link>
            <Link href="/audit" className="btn-secondary text-base">Request SMS audit</Link>
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

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Operating system</p>
          <h2 className="section-title mt-3">What’s included</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-[2fr,3fr]">
            <ul className="card space-y-3 text-sm text-ink">
              <li>Lifecycle audit covering compliance, data, and creative.</li>
              <li>Opt-in program (keyword, onsite, post-purchase, in-store).</li>
              <li>Triggered flows for welcome, abandon, replenish, VIP, winback.</li>
              <li>Template library + testing roadmap.</li>
              <li>Two-way concierge scripts and escalation protocols.</li>
              <li>Analytics dashboard: revenue, opt-in/out, response SLAs.</li>
            </ul>
            <article className="card">
              <h3 className="text-2xl font-semibold text-ink">Tooling expertise</h3>
              <p className="mt-4 text-sm text-ink-2">
                Klaviyo SMS, Postscript, Attentive, and proprietary stacks. We integrate with CX platforms such as Gorgias, Zendesk, and Recharge for subscription events.
              </p>
              <p className="mt-4 text-sm text-ink-2">
                We document compliance policy, maintain opt-out workflows, and partner with legal when needed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((item) => (
            <article key={item.label} className="card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{item.label}</h3>
              <p className="mt-4 text-4xl font-semibold text-ink">{item.value}</p>
              <p className="mt-3 text-sm text-ink-2">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Scale SMS with the right guardrails.</h2>
            <p className="mt-4 text-base text-slate">
              Share your current tool stack and campaign cadence—we will map the next 90 days of SMS growth.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-paper text-ink hover:bg-slate">
            Start the conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
