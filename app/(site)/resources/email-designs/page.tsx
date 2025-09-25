const patterns = [
  {
    name: "Welcome frameworks",
    description: "Three variants covering offer-led, content-led, and quiz-led welcomes with personalization tokens.",
    includes: ["Hero modules", "Proof stack", "Next step CTA"]
  },
  {
    name: "Drop launch set",
    description: "VIP preview, waitlist, general launch, and last-call templates with inventory logic.",
    includes: ["Countdown blocks", "Size selectors", "VIP badges"]
  },
  {
    name: "Post-purchase nurture",
    description: "Usage onboarding, cross-sell, and review request flows with dynamic content.",
    includes: ["How-to timeline", "Care instructions", "UGC spotlight"]
  }
];

export default function EmailDesignsPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <p className="section-eyebrow">Resources · Email designs</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Email design library built for lifecycle conversion.</h1>
          <p className="mt-6 text-lg text-ink-2">
            Use our modular library for flows and campaigns. Each block is audit-ready with accessibility best practices.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="grid gap-6">
          {patterns.map((pattern) => (
            <article key={pattern.name} className="card flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-ink">{pattern.name}</h2>
                <p className="mt-3 text-sm text-ink-2">{pattern.description}</p>
              </div>
              <ul className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {pattern.includes.map((item) => (
                  <li key={item} className="rounded-full bg-accent/10 px-3 py-1 text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-ink-2">
                Available as Figma, HTML, and Klaviyo templates. Delivered post-audit with setup instructions and testing notes.
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-2">
          Request sample exports by emailing <a className="underline hover:text-accent" href="mailto:designs@evercurrent.agency">designs@evercurrent.agency</a>.
        </p>
      </section>
    </div>
  );
}

