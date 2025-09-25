import { notFound } from "next/navigation";
import Link from "next/link";

type Study = {
  slug: string;
  category: string;
  title: string;
  hero: string;
  stats: { label: string; value: string; detail: string }[];
  challenge: string[];
  approach: string[];
  outcomes: string[];
};

const CASE_STUDIES: Record<string, Study> = {
  "habit-coaching": {
    slug: "habit-coaching",
    category: "Wellness Subscription",
    title: "Habit coaching lifted subscription retention by 19%",
    hero: "Protocol onboarding, SMS nudges, and consult offers turned stalled cohorts into loyal subscribers.",
    stats: [
      { label: "Subscription save rate", value: "+19%", detail: "Triggered save journey + concierge support." },
      { label: "Day-90 LTV", value: "+27%", detail: "Habit content and replenishment automation." },
      { label: "Opt-out", value: "0.11%", detail: "Compliance-first quiet hours + segmentation." }
    ],
    challenge: [
      "Churn spike at months 2-3 with habit drop-off.",
      "Uncoordinated email + SMS messaging causing fatigue.",
      "No cohesive view of subscription cohorts."
    ],
    approach: [
      "Lifecycle audit across email, SMS, and in-app notifications.",
      "Protocol onboarding with day-by-day education and habit milestones.",
      "Two-way SMS concierge for dose check-ins and objections.",
      "Dashboard correlating engagement to subscription retention."
    ],
    outcomes: [
      "Subscription save journey with consult offer improved saves by 19%.",
      "Refill reminders and habit nudges shortened time-to-reorder by 6 days.",
      "Cohort dashboard flagged churn risk segments weekly for proactive actions."
    ]
  },
  "fashion-drops": {
    slug: "fashion-drops",
    category: "Fashion Drops",
    title: "Drop orchestration doubled launch-week revenue",
    hero: "We synchronized email, SMS, and paid to elevate VIP waitlists and inventory-aware messaging.",
    stats: [
      { label: "Flow revenue share", value: "32?58%", detail: "Drop waitlists, browse triggers, and VIP previews." },
      { label: "Launch-week revenue", value: "2.1�", detail: "Sequenced VIP, general list, and paid retargeting." },
      { label: "Unsub rate", value: "0.18%", detail: "Fatigue controls and post-drop segmentation." }
    ],
    challenge: [
      "Launch comms were chaotic and fatigued top segments.",
      "No waitlist or VIP prioritization for high-value customers.",
      "Limited visibility into drop performance by cohort."
    ],
    approach: [
      "Audit of launch comms, flows, and segmentation rules.",
      "Build VIP waitlist flows, size-memory browse, and drop alerts.",
      "Campaign playbook with creative system and risk mitigations.",
      "Real-time launch dashboard with cohort + stock breakouts."
    ],
    outcomes: [
      "Drop flows drove 26% of launch revenue in week one.",
      "VIP segments converted 2.4� baseline thanks to early access.",
      "Inventory-aware suppression protected late buyers and reduced complaints." 
    ]
  },
  "cpg-bundles": {
    slug: "cpg-bundles",
    category: "Food & Drink CPG",
    title: "Bundle builder unlocked higher reorder velocity",
    hero: "Cadence-matched replenishment, recipe storytelling, and bundle logic pushed AOV up 22%.",
    stats: [
      { label: "Reorder cadence", value: "-8 days", detail: "Recipe flows pulled forward repeat orders." },
      { label: "Bundle AOV", value: "+22%", detail: "Preset + build-your-own bundles with incentives." },
      { label: "Deliverability", value: "99% inbox", detail: "List hygiene and cadence controls." }
    ],
    challenge: [
      "Customers lapsed after first order with no cadence reminders.",
      "Bundles underperformed due to lack of storytelling.",
      "Deliverability risk from sporadic promos."
    ],
    approach: [
      "Audit flows and campaign cadence for reorder alignment.",
      "Build recipe-driven welcome + reorder sequences with personalization.",
      "Bundle builder flows comparing preset bundles vs. build-your-own path.",
      "Deliverability hygiene: sunset, suppression, domain monitoring."
    ],
    outcomes: [
      "Bundle builder flows drove 32% of reorder revenue within 6 weeks.",
      "List health improved with 0.09% complaint rate and stable inbox placement.",
      "Cohort LTV at 60 days increased by 18%."
    ]
  }
};

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES[params.slug];
  if (!study) {
    notFound();
  }

  return (
    <div className="bg-slate">
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Case study � {study.category}</p>
          <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">{study.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-2">{study.hero}</p>
          <Link href="/contact" className="btn-primary mt-8 text-base">
            Build a similar program
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {study.stats.map((stat) => (
            <article key={stat.label} className="card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{stat.label}</h3>
              <p className="mt-4 text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-3 text-sm text-ink-2">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          <article className="card">
            <h2 className="text-2xl font-semibold text-ink">Challenges</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              {study.challenge.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2 className="text-2xl font-semibold text-ink">Approach</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              {study.approach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2 className="text-2xl font-semibold text-ink">Outcomes</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              {study.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Want results like this?</h2>
            <p className="mt-4 text-base text-slate">
              Book a session and we will walk through your audit preview with uplift scenarios tailored to your business.
            </p>
          </div>
          <Link href="/audit" className="btn-primary bg-paper text-ink hover:bg-slate">
            Request lifecycle audit
          </Link>
        </div>
      </section>
    </div>
  );
}
