'use client';

import Link from "next/link";
import { useEffect } from "react";

export type AddOnItem = {
  id: string;
  title: string;
  punch: string;
  body: string;
  bullets: string[];
  badge: string;
};

export type Tier = {
  name: string;
  outcome: string;
  price: string;
  includes: string[];
  featured?: boolean;
  cta: { label: string; href: string };
};

const addOns: AddOnItem[] = [
  {
    id: "reviews-referrals",
    title: "Reviews & Referrals Autopilot",
    punch: "UGC that builds compounding trust",
    body: "Automate review capture, highlight social proof, and route high intent advocates into referral loops.",
    bullets: ["Timeline: 3 weeks", "Primary KPI: Review volume +35%", "Investment: $2.5k project"],
    badge: "DTC-ready"
  },
  {
    id: "deliverability-watch",
    title: "Deliverability & Reputation Watch",
    punch: "Keep inbox placement green",
    body: "Domain monitoring, seed tests, and remediation playbooks so growth never outruns reputation.",
    bullets: ["Timeline: 4 weeks", "KPI: Spam complaints <0.08%", "Investment: $1.8k project"],
    badge: "Always-on"
  },
  {
    id: "personalization-lite",
    title: "Dynamic Personalization Lite",
    punch: "Serve the right product path in every flow",
    body: "Lightweight dynamic content using zero/first-party data—no heavy engineering required.",
    bullets: ["Timeline: 3 weeks", "KPI: Flow conversion +12%", "Investment: $3.2k project"],
    badge: "Personalization"
  },
  {
    id: "promo-calendar",
    title: "Promo Calendar Builder",
    punch: "Launch cadence teams actually use",
    body: "Codify promos, drops, and replenishment windows with guardrails that align marketing and ops.",
    bullets: ["Timeline: 2 weeks", "KPI: Campaign revenue consistency", "Investment: $1.4k project"],
    badge: "Ops sync"
  },
  {
    id: "subject-testing",
    title: "AI Subject Line & Hook Multivariate",
    punch: "Creative testing that feeds future campaigns",
    body: "Multivariate subject + preheader testing powered by our AI prompt libraries and reporting loops.",
    bullets: ["Timeline: 4 weeks", "KPI: OR + CTR uplift", "Investment: $2.1k project"],
    badge: "Testing"
  },
  {
    id: "lead-reply",
    title: "Lead Reply Copilot (Optional)",
    punch: "Instant inbox replies that feel human",
    body: "Hand off lead replies to an Evercurrent-trained concierge with escalation paths for your team.",
    bullets: ["Timeline: 2 weeks", "SLA: <10 min replies", "Investment: $1.2k/mo retainer"],
    badge: "Toggle"
  }
];

const tiers: Tier[] = [
  {
    name: "Starter Growth",
    outcome: "Launch Core 10 flows and dial in campaign cadence",
    price: "$8.5k build + $3.5k/mo",
    includes: [
      "Lifecycle audit + roadmap",
      "Core 10 flows with testing plan",
      "Campaign engine + deliverability rituals"
    ],
    cta: { label: "Request audit", href: "/audit" }
  },
  {
    name: "Revenue Sprint Plus (60 days)",
    outcome: "Stand up flows, campaigns, and analytics with sprint-level pace",
    price: "$18k sprint",
    includes: [
      "Core 10 + add-on sequencing",
      "Capture, segmentation, and dashboards",
      "Weekly experiments + reporting ops"
    ],
    featured: true,
    cta: { label: "Book a session", href: "/book" }
  },
  {
    name: "Social Proof & Loyalty",
    outcome: "Retain VIPs and amplify advocates",
    price: "$6k build + $2.8k/mo",
    includes: [
      "Reviews + referral automations",
      "VIP & loyalty campaign playbooks",
      "Quarterly strategy + testing backlog"
    ],
    cta: { label: "Request audit", href: "/audit" }
  }
];

const isDevelopment = process.env.NODE_ENV !== "production";

function runSmokeTests() {
  const issues: string[] = [];

  if (addOns.length === 0) {
    issues.push("Add-ons list is empty");
  }

  addOns.forEach((item) => {
    const { id, title, punch, body, bullets, badge } = item;
    if (!id || !title) issues.push(`Add-on missing id/title (${JSON.stringify(item)})`);
    if (bullets.length === 0) issues.push(`Add-on missing bullets (${id})`);
    [punch, body, badge].forEach((field, idx) => {
      if (!field) issues.push(`Add-on ${id} missing field index ${idx}`);
    });
  });

  if (tiers.length === 0) {
    issues.push("Packages list is empty");
  }

  tiers.forEach((tier) => {
    const { name, price, includes, cta } = tier;
    if (!name) issues.push("Tier missing name");
    if (!price) issues.push(`Tier ${name} missing price`);
    if (includes.length === 0) issues.push(`Tier ${name} missing includes`);
    if (!cta?.href) issues.push(`Tier ${name} missing CTA href`);
  });

  if (issues.length > 0) {
    console.warn("[Evercurrent] Component smoke tests:", issues);
  } else {
    console.info("[Evercurrent] Component smoke tests: all pass");
  }
}

export function AddOnsSection() {
  useEffect(() => {
    if (isDevelopment) {
      runSmokeTests();
    }
  }, []);

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Plug-in accelerators</p>
            <h2 className="section-title mt-2">Add capacity without bloating headcount.</h2>
            <p className="section-subtitle mt-4">
              Pick the focused sprints that amplify your lifecycle engine. Each accelerator ships with playbooks, QA, and measurement.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {addOns.map((addon) => (
            <article key={addon.id} className="card flex h-full flex-col gap-4">
              <span className="badge inline-flex w-fit items-center gap-2 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {addon.badge}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-ink">{addon.title}</h3>
                <p className="mt-2 text-sm font-semibold text-accent">{addon.punch}</p>
              </div>
              <p className="text-sm text-ink-2">{addon.body}</p>
              <ul className="mt-auto space-y-2 text-sm text-ink">
                {addon.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackagesSection() {
  return (
    <section className="bg-slate py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Packages</p>
            <h2 className="section-title mt-2">Choose the engagement that fits your lifecycle maturity.</h2>
            <p className="section-subtitle mt-4">
              Outcomes, pricing anchors, and CTAs are productized so stakeholders see the value fast.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`card flex h-full flex-col gap-5 ${tier.featured ? 'border-ink shadow-lift' : ''}`}
            >
              {tier.featured && (
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-paper">
                  Most popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-semibold text-ink">{tier.name}</h3>
                <p className="mt-2 text-sm text-ink-2">{tier.outcome}</p>
              </div>
              <p className="text-xl font-semibold text-ink">{tier.price}</p>
              <ul className="space-y-2 text-sm text-ink">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link href={tier.cta.href} className={`btn-${tier.featured ? 'primary' : 'secondary'} mt-4 w-full justify-center`}>
                  {tier.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
