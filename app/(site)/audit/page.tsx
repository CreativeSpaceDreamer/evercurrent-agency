import { LeadCaptureForm } from "@/components/lead-capture-form";

const checklist = [
  "Technical: domain auth, deliverability scoring, event integrity",
  "Flows: coverage, versioning, KPI baselines",
  "Campaigns: calendar, segmentation, fatigue controls",
  "Data: source tagging, lifecycle dashboards",
  "Compliance: claims, consent, SMS policy"
];

const deliverables = [
  "Lifecycle scorecard (100-point scale)",
  "Revenue model with uplift scenarios",
  "30-60-90 roadmap + resource plan",
  "Testing backlog with hypotheses",
  "Executive readout with next steps"
];

export default function AuditPage() {
  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[3fr,2fr] md:items-center">
          <div>
            <p className="section-eyebrow">Lifecycle audit</p>
            <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">See your lifecycle program through our operators’ lens.</h1>
            <p className="mt-6 text-lg text-ink-2">
              In two weeks, receive the scorecard, roadmap, and revenue model that guides every Evercurrent engagement.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="card">
                <h2 className="text-xl font-semibold text-ink">What we assess</h2>
                <ul className="mt-4 space-y-3 text-sm text-ink">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="card">
                <h2 className="text-xl font-semibold text-ink">Deliverables</h2>
                <ul className="mt-4 space-y-3 text-sm text-ink">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
          <LeadCaptureForm
            headline="Request your lifecycle audit"
            description="Share your email/SMS revenue mix, list size, and goals. We will confirm the audit kickoff within one business day."
            intent="audit"
          />
        </div>
      </section>
    </div>
  );
}

