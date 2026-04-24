
"use client";
import { Suspense } from "react";
import Link from "next/link";
import { SystemDiagram } from "@/components/system-diagram";

const principles = [
  {
    title: "Brand and performance are one system",
    detail:
      "Retention messaging should protect brand perception while driving repeat revenue. Separating those goals creates weak execution."
  },
  {
    title: "Structure beats sporadic output",
    detail:
      "Single campaigns can spike. Structured lifecycle systems create consistent outcomes and cleaner decision-making."
  },
  {
    title: "Context drives better decisions",
    detail:
      "E-commerce retention has real category nuance. Understanding your market improves strategy, creative, and channel decisions."
  }
];

const whyEcommerce = [
  "Replenishment timing varies by product category and needs to be reflected in lifecycle logic.",
  "Customer trust depends on claims accuracy, education quality, and presentation tone.",
  "Growing brands need conversion systems that still feel authentic and brand-aligned.",
  "Mobile execution quality matters because most retention touchpoints happen there."
];

const operatingBeliefs = [
  "Templates are useful only when they are brand-aligned and strategically placed.",
  "Campaign and flow teams should not operate in silos.",
  "Retention performance improves when strategy and execution stay in the same room."
];

export default function AboutPage() {
  return (
    <Suspense>
      <div className="bg-paper">
        <section className="border-b border-stroke">
          <div className="section-shell py-20 md:py-24">
            <p className="section-eyebrow">About</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-ink md:text-6xl">
              Built for brands that care about both performance and presentation.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-ink-2 md:text-xl">
              Lifecycle Inbox exists to solve a persistent gap in retention: strong strategy with weak execution, or polished
              execution without system-level thinking. We are built to handle both.
            </p>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="premium-panel p-8">
                <h2 className="text-2xl font-semibold text-ink">{principle.title}</h2>
                <p className="mt-4 text-sm text-ink-2">{principle.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-stroke bg-slate/30">
          <div className="section-shell grid gap-8 py-16 md:grid-cols-[1.1fr,0.9fr] md:py-20">
            <article className="premium-panel bg-slate p-8 text-ink md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">Founder Point of View</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Retention should feel like an extension of the brand, not a disconnected conversion layer.
              </h2>
              <p className="mt-6 text-base text-ink-2">
                Generic promo patterns create short-term noise. Growing e-commerce brands need lifecycle systems that build
                trust and commercial performance in the same motion.
              </p>
            </article>
            <article className="premium-panel p-8">
              <p className="section-eyebrow">Why E-commerce Retention Matters</p>
              <ul className="mt-5 space-y-3 text-sm text-ink">
                {whyEcommerce.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="premium-panel p-8 md:p-10">
            <p className="section-eyebrow">Operating Beliefs</p>
            <ul className="mt-6 grid gap-4 text-sm text-ink md:grid-cols-3">
              {operatingBeliefs.map((belief) => (
                <li key={belief} className="rounded-2xl border border-stroke bg-slate/35 px-4 py-4">
                  {belief}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SystemDiagram />
            </div>
          </div>
        </section>

        <section className="section-shell pb-20">
          <div className="rounded-[2rem] border border-stroke bg-slate px-8 py-12 text-ink md:flex md:items-end md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">Work With Lifecycle Inbox</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                If your team is ready to treat retention as infrastructure, we should talk.
              </h2>
            </div>
            <div className="mt-8 flex flex-col gap-4 md:mt-0">
              <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

