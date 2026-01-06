import { LeadCaptureForm } from "@/components/lead-capture-form";

const info = [
  {
    title: "What to prep",
    items: [
      "Lifecycle KPIs from the last 90 days",
      "Core tools (ESP, SMS, push, CDP)",
      "Team structure and responsibilities"
    ]
  },
  {
    title: "What you get",
    items: [
      "Strategy session with senior operators",
      "Audit preview with topline findings",
      "Clear next steps + timeline"
    ]
  }
];

export default function ContactPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[2fr,3fr] md:items-center">
          <div>
            <p className="section-eyebrow">Contact</p>
            <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Book a strategy session with Evercurrent.</h1>
            <p className="mt-6 text-lg text-ink-2">
              We will review your lifecycle KPIs, walk through our playbooks, and identify the biggest revenue unlocks.
            </p>
            <div className="mt-8 grid gap-6">
              {info.map((block) => (
                <article key={block.title} className="card">
                  <h2 className="text-xl font-semibold text-ink">{block.title}</h2>
                  <ul className="mt-4 space-y-3 text-sm text-ink">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-2">
              Prefer email? Reach us at <a href="mailto:hello@evercurrent.agency" className="underline hover:text-accent">hello@evercurrent.agency</a> or call +1 (401) 992-5475.
            </p>
          </div>
          <LeadCaptureForm
            headline="Book your strategy session"
            description="Pick a focus—email, SMS, push, or paid retention—and we will tailor the agenda."
            intent="strategy"
          />
        </div>
      </section>
    </div>
  );
}

