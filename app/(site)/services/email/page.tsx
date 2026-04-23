"use client";
import { Suspense } from "react";
import Link from "next/link";

const deliverables = [
  "Lifecycle audit and baseline metrics",
  "Core flows mapped and built with quality checks",
  "Segmentation framework and list hygiene",
  "Campaign plan and testing plan",
  "Reporting with clear metric definitions"
];

const timeline = [
  "Week 1: Access, baseline, lifecycle map",
  "Week 2: Roadmap + flow priorities",
  "Weeks 3–4: Build + quality checks on core flows",
  "Weeks 5–8: Launch, test, and refine"
];

export default function EmailServicePage() {
  return (
    <Suspense>
      <div className="bg-slate">
        <section className="bg-paper">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <p className="section-eyebrow">Services · Email Lifecycle</p>
            <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Email lifecycle built for repeat revenue.</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-2">
              We design and optimize email programs that support retention outcomes—typically as part of a Sprint or Retainer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
              <h2 className="text-3xl font-semibold text-ink">What we deliver</h2>
              <ul className="mt-6 space-y-3 text-sm text-ink">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h2 className="text-3xl font-semibold text-ink">Sample timeline</h2>
              <ol className="mt-6 space-y-4 text-sm text-ink">
                {timeline.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </section>

        <section className="bg-slate text-ink">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold md:text-4xl">Ready to strengthen email lifecycle?</h2>
              <p className="mt-4 text-base text-ink-2">
                Book a strategy call and we’ll map your highest-impact opportunities.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Work with us
            </Link>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

