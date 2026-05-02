
"use client";
import { Suspense } from "react";
import Link from "next/link";

const engagements = [
  {
    id: "audit",
    step: "01",
    title: "Audit",
    summary:
      "Strategic diagnostic to identify retention leakage, sequence fixes, and define the most efficient execution path.",
    includes: [
      "Lifecycle scorecard and opportunity map",
      "Priority roadmap with sequence by impact",
      "Decision call with implementation direction"
    ],
    bestFor: "Teams needing strategic clarity before committing to production scope."
  },
  {
    id: "sprint",
    step: "02",
    title: "Sprint",
    summary:
      "Focused implementation window to install core lifecycle architecture and elevate message/creative quality quickly.",
    includes: [
      "Flow system build and QA",
      "Campaign engine setup",
      "Launch support and handoff structure"
    ],
    bestFor: "Brands that need a high-quality system foundation in a compressed timeline."
  },
  {
    id: "retainer",
    step: "03",
    title: "Retainer",
    summary:
      "Senior-led ongoing partnership for teams treating retention as a core operating function, not occasional output.",
    includes: [
      "Ongoing campaign and flow operations",
      "Testing roadmap and optimization rhythm",
      "Reporting and strategic iteration cycles"
    ],
    bestFor: "Teams that want to treat retention as a managed operating function."
  }
];

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <div className="bg-slate">
        <section className="bg-paper">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <p className="section-eyebrow">Services</p>
            <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">How we work with brands.</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-2">
              Choose the engagement that matches your needs and timeline.
            </p>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

