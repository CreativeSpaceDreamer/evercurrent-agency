import Link from "next/link";

type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  result: string;
  summary: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "habit-coaching",
    category: "Wellness Subscription",
    title: "Habit coaching lifted subscription retention by 19%",
    result: "+27% cohort LTV",
    summary: "Protocol onboarding, SMS nudges, and save offers layered into the lifecycle raised 90-day LTV."
  },
  {
    slug: "fashion-drops",
    category: "Fashion Drops",
    title: "Drop orchestration doubled launch-week revenue",
    result: "Flow revenue 32?58%",
    summary: "Waitlists, VIP previews, and inventory-aware automations scaled launch performance without list fatigue."
  },
  {
    slug: "cpg-bundles",
    category: "Food & Drink CPG",
    title: "Bundle builder unlocked higher reorder velocity",
    result: "+22% AOV",
    summary: "Bundle flows and recipe storytelling compressed reorder windows and raised AOV."
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Case studies</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Stories from relationship-first lifecycle engagements.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-2">
            Every case study includes the audit hypothesis, build roadmap, and KPIs we tracked along the way.
          </p>
          <Link href="/contact" className="btn-primary mt-8 text-base">
            Start your engagement
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article key={study.slug} className="card flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{study.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-ink">{study.title}</h2>
                <p className="mt-4 text-sm text-ink-2">{study.summary}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Outcome: {study.result}</p>
                <Link href={`/case-studies/${study.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent">
                  Read the case study
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
