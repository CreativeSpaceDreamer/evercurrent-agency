"use client";
import { Suspense } from "react";
import Link from "next/link";

const guides = [
  {
    title: "Lifecycle Systems Blueprint",
    description: "Step‑by‑step lifecycle playbook with practical templates.",
    length: "32 pages",
    format: "PDF"
  },
  {
    title: "Retention Forecast Model",
    description: "Scenario planning sheet for capture, flows, campaigns, and paid amplification.",
    length: "Google Sheet",
    format: "Sheet"
  },
  {
    title: "Core 10 Quality Checks Playbook",
    description: "Checklists for flows, campaigns, inbox health, and compliance sign‑off.",
    length: "16 pages",
    format: "Notion"
  }
];

export default function GuidesPage() {
  return (
    <Suspense>
      <div className="bg-slate">
        <section className="bg-paper">
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <p className="section-eyebrow">Resources · Guides</p>
            <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">Guides to build a clear retention playbook.</h1>
            <p className="mt-6 text-lg text-ink-2">
              Download the playbooks we use to run lifecycle marketing.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="grid gap-6">
            {guides.map((guide) => (
              <article key={guide.title} className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{guide.title}</h2>
                  <p className="mt-3 text-sm text-ink-2">{guide.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-accent">{guide.length} · {guide.format}</p>
                </div>
                <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary">
                  Book a strategy call
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink-2">
            Access guides after your application review, or request a specific resource by emailing{" "}
            <a href="mailto:hello@lifecycleinbox.com" className="underline hover:text-accent">hello@lifecycleinbox.com</a>.
          </p>
        </section>
      </div>
    </Suspense>
  );
}

