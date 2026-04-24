"use client";
import { Suspense } from "react";
import Link from "next/link";

const resources = [
  {
    title: "The 8 Flows Every Shopify Brand Needs",
    description: "A quick guide to the automated flows that create stable repeat revenue."
  },
  {
    title: "Email + SMS Send Plan",
    description: "A simple way to balance campaigns with lifecycle flows."
  },
  {
    title: "Retention Metrics Cheat Sheet",
    description: "Definitions and targets for the metrics that actually matter."
  }
];

export default function ResourcesPage() {
  return (
    <Suspense>
      <div className="bg-slate">
        <section className="bg-paper">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <p className="section-eyebrow">Resources</p>
            <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Resources for clearer retention decisions.</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-2">
              Practical tools and frameworks to help you map the customer journey and prioritize the right lifecycle work.
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
          <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
            <article className="card">
              <h2 className="text-3xl font-semibold text-ink">Lifecycle Clarity Worksheet</h2>
              <p className="mt-4 text-sm text-ink-2">
                Map the customer journey, find gaps, and choose the next three flows to fix.
              </p>
              <p className="mt-4 text-sm text-ink-2">
                How you get it: apply for a free audit. If it’s a fit, we’ll send the worksheet with your scorecard within 24–48 hours.
              </p>
              <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-secondary mt-6 w-full sm:w-auto">
                Book a strategy call
              </Link>
              <p className="mt-4 text-xs text-ink-2">
                No spam. If you don’t see the email, check Promotions or Spam.
              </p>
            </article>
            <div className="grid gap-6 md:grid-cols-3">
              {resources.map((resource) => (
                <article key={resource.title} className="card">
                  <h3 className="text-xl font-semibold text-ink">{resource.title}</h3>
                  <p className="mt-3 text-sm text-ink-2">{resource.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
