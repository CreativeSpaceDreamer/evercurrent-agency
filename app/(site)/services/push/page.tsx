import Link from "next/link";

const capabilities = [
  "Behavior‑based triggers for timely nudges",
  "Preference management and consent controls",
  "Message sequencing aligned with email + SMS",
  "Reporting on engagement and conversion"
];

export default function PushServicePage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Services · Push</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Push as a lifecycle extension.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Push and in‑app can support key lifecycle moments once email + SMS foundations are in place.
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
        <article className="card">
          <h2 className="text-3xl font-semibold text-ink">What we include</h2>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="bg-slate text-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Align push with your lifecycle.</h2>
            <p className="mt-4 text-base text-ink-2">
              We’ll evaluate whether push supports your goals after the audit.
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

