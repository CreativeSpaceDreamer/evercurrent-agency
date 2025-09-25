import Link from "next/link";

const guides = [
  {
    title: "Lifecycle Systems Blueprint",
    description: "Step-by-step build of the Evercurrent operating system with templates.",
    length: "32 pages",
    format: "PDF"
  },
  {
    title: "Retention Forecast Model",
    description: "Scenario planning sheet for capture, flows, campaigns, and paid amplification.",
    length: "Google Sheet",
    format: "Sheet"
  },
  {
    title: "Core 10 QA Playbook",
    description: "Checklists for flows, campaigns, deliverability, and compliance sign-off.",
    length: "16 pages",
    format: "Notion"
  }
];

export default function GuidesPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <p className="section-eyebrow">Resources · Guides</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Guides to install the Evercurrent system.</h1>
          <p className="mt-6 text-lg text-ink-2">
            Download the playbooks we use internally to operationalize lifecycle marketing.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="grid gap-6">
          {guides.map((guide) => (
            <article key={guide.title} className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-ink">{guide.title}</h2>
                <p className="mt-3 text-sm text-ink-2">{guide.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-accent">{guide.length} · {guide.format}</p>
              </div>
              <Link href="/audit" className="btn-primary">
                Access via audit
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-2">
          Access all guides after your lifecycle audit, or request a specific resource by emailing <a href="mailto:hello@evercurrent.agency" className="underline hover:text-accent">hello@evercurrent.agency</a>.
        </p>
      </section>
    </div>
  );
}

