import Link from "next/link";

const processSteps = [
  {
    step: "01",
    title: "Audit",
    goal: "Establish retention baseline and identify high-impact opportunities.",
    details: [
      "Lifecycle and channel diagnostic",
      "Flow and campaign performance review",
      "Gap list prioritized by commercial impact"
    ]
  },
  {
    step: "02",
    title: "Architect",
    goal: "Translate findings into a clear system plan.",
    details: [
      "Journey map and flow blueprint",
      "Campaign cadence and message structure",
      "Segmentation and channel coordination logic"
    ]
  },
  {
    step: "03",
    title: "Build",
    goal: "Ship production-ready assets with quality controls.",
    details: [
      "Flow implementation and QA",
      "Campaign modules and send system",
      "Creative framework aligned to brand presentation"
    ]
  },
  {
    step: "04",
    title: "Launch",
    goal: "Roll out changes with controlled activation.",
    details: [
      "Launch sequencing and checks",
      "Performance monitoring in early window",
      "Issue triage and adjustment protocol"
    ]
  },
  {
    step: "05",
    title: "Optimize",
    goal: "Turn retention into a managed operating function.",
    details: [
      "Testing roadmap by priority",
      "Monthly reporting and decision reviews",
      "Iteration backlog tied to repeat revenue goals"
    ]
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-paper">
      <section className="border-b border-stroke">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <p className="section-eyebrow">Process</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-ink md:text-6xl">
            A clear retention process from audit to ongoing optimization.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-2 md:text-xl">
            Lifecycle Inbox runs a five-step lifecycle system designed for skincare and beauty teams that need structure,
            quality, and momentum.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6">
          {processSteps.map((item) => (
            <article key={item.step} className="card md:grid md:grid-cols-[120px,1fr] md:gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Step {item.step}</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-base text-ink-2">{item.goal}</p>
                <ul className="mt-5 grid gap-3 text-sm text-ink md:grid-cols-3">
                  {item.details.map((detail) => (
                    <li key={detail} className="rounded-2xl border border-stroke bg-slate/40 px-4 py-3">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] border border-stroke bg-slate px-8 py-12 text-ink md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">Start Here</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              The process starts with strategy, then moves into execution.
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


