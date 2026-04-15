import Link from "next/link";

const engagements = [
  {
    id: "audit",
    step: "01",
    title: "Audit",
    summary:
      "Strategic diagnostic to identify retention leakage, sequence fixes, and define the most efficient execution path.",
    includes: [
      "Lifecycle scorecard and opportunity map",
      "Priority roadmap with sequence by impact",
      "Decision call with implementation direction"
    ],
    bestFor: "Teams needing strategic clarity before committing to production scope."
  },
  {
    id: "sprint",
    step: "02",
    title: "Sprint",
    summary:
      "Focused implementation window to install core lifecycle architecture and elevate message/creative quality quickly.",
    includes: [
      "Flow system build and QA",
      "Campaign engine setup",
      "Launch support and handoff structure"
    ],
    bestFor: "Brands that need a high-quality system foundation in a compressed timeline."
  },
  {
    id: "retainer",
    step: "03",
    title: "Retainer",
    summary:
      "Senior-led ongoing partnership for teams treating retention as a core operating function, not occasional output.",
    includes: [
      "Ongoing campaign and flow operations",
      "Testing roadmap and optimization rhythm",
      "Reporting and strategic iteration cycles"
    ],
    bestFor: "E-commerce brands ready for sustained retention ownership."
  }
];

const capabilityRows = [
  { capability: "Strategy", audit: "Core", sprint: "Core", retainer: "Core" },
  { capability: "Flows", audit: "Advisory", sprint: "Build", retainer: "Build + optimize" },
  { capability: "Campaigns", audit: "Advisory", sprint: "Setup", retainer: "Managed" },
  { capability: "SMS", audit: "Advisory", sprint: "Build", retainer: "Managed" },
  { capability: "Creative", audit: "Direction", sprint: "Production", retainer: "Production + iterate" },
  { capability: "Reporting", audit: "Snapshot", sprint: "Launch baseline", retainer: "Ongoing" }
];

export default function ServicesPage() {
  return (
    <div className="bg-paper">
      <section className="border-b border-stroke">
        <div className="section-shell py-20 md:py-24">
          <p className="section-eyebrow">Services</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-ink md:text-6xl">
            Specialist retention engagements for e-commerce brands with traction.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-2 md:text-xl">
            Primary stack: Shopify + Klaviyo. Secondary: Omnisend. Every engagement is designed to improve repeat
            revenue while protecting premium brand presentation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary">
              Book a Strategy Call
            </Link>
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-secondary">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Engagement Models</p>
          <h2 className="section-title mt-4">Three models. One specialist retention standard.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {engagements.map((engagement) => (
            <article key={engagement.id} id={engagement.id} className="premium-panel flex h-full flex-col p-7">
              <p className="proof-note text-accent">Model {engagement.step}</p>
              <h3 className="mt-3 text-3xl font-semibold text-ink">{engagement.title}</h3>
              <p className="mt-4 text-sm text-ink-2">{engagement.summary}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Includes</p>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                {engagement.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-stroke bg-slate/35 px-4 py-3 text-sm text-ink-2">
                <span className="font-semibold text-ink">Best for:</span> {engagement.bestFor}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stroke bg-slate/30">
        <div className="section-shell py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
            <div>
              <p className="section-eyebrow">Capability Layers</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-4xl">
                Capabilities are consistent. Delivery depth changes by engagement model.
              </h2>
              <p className="mt-5 text-base text-ink-2">
                This avoids commodity packaging. You are choosing operating depth, not random service menus.
              </p>
            </div>
            <div className="premium-panel overflow-hidden p-0">
              <div className="grid grid-cols-4 border-b border-stroke bg-paper px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-2">
                <span>Capability</span>
                <span>Audit</span>
                <span>Sprint</span>
                <span>Retainer</span>
              </div>
              {capabilityRows.map((row) => (
                <div key={row.capability} className="grid grid-cols-4 border-b border-stroke px-4 py-4 text-sm last:border-b-0">
                  <span className="font-semibold text-ink">{row.capability}</span>
                  <span className="text-ink-2">{row.audit}</span>
                  <span className="text-ink-2">{row.sprint}</span>
                  <span className="text-ink-2">{row.retainer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="rounded-[2rem] border border-stroke bg-slate px-8 py-12 text-ink md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">Next Step</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Start with the right model, then run retention as a system.
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:mt-0">
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary">
              Book a Strategy Call
            </Link>
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-secondary">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

