import Link from "next/link";

const collections = [
  {
    title: "Guides",
    summary: "Deep dives into lifecycle architecture, playbooks, and operating cadences.",
    href: "/resources/guides",
    items: ["Lifecycle systems blueprint", "Retention forecasting model", "Core 10 QA playbook"]
  },
  {
    title: "Email designs",
    summary: "Modular email patterns for lifecycle flows, campaigns, and testing.",
    href: "/resources/email-designs",
    items: ["Welcome frameworks", "Drop launch set", "Post-purchase nurture blocks"]
  }
];

export default function ResourcesPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Resources</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Resources for lifecycle operators.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Frameworks, checklists, and email designs used inside Evercurrent engagements. Download, adapt, and ship faster.
          </p>
          <Link href="/audit" className="btn-primary mt-8 text-base">
            Get lifecycle audit
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {collections.map((collection) => (
            <article key={collection.title} className="card flex flex-col gap-5">
              <div>
                <h2 className="text-3xl font-semibold text-ink">{collection.title}</h2>
                <p className="mt-3 text-sm text-ink-2">{collection.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-ink">
                {collection.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={collection.href} className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent">
                Explore {collection.title.toLowerCase()}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

