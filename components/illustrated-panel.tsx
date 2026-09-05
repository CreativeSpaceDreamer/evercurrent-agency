import type { ReactNode } from "react";

type IllustratedPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  illustration: ReactNode;
};

/**
 * Reusable feature panel: soft accent-tinted illustration area on top,
 * eyebrow + title + description below. Used anywhere we need to present
 * a short list of offerings/capabilities with a light visual anchor.
 */
export function IllustratedPanel({ eyebrow, title, description, illustration }: IllustratedPanelProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-stroke bg-paper">
      <div
        className="flex h-[280px] items-center justify-center sm:h-[300px]"
        style={{
          background: "radial-gradient(120% 140% at 50% 0%, rgba(0, 217, 255, 0.16) 0%, rgba(0, 217, 255, 0) 70%)"
        }}
      >
        {illustration}
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="section-eyebrow">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-[1.7rem]">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-2 sm:text-base">{description}</p>
      </div>
    </article>
  );
}

function ArrowConnector() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-ink-2/50" fill="none" aria-hidden="true">
      <path d="M2 8h9M7 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Two overlapping audience-segment cards, stacked with a small bar-chart card behind. */
export function StrategyIllustration() {
  return (
    <div className="relative h-40 w-56" aria-hidden="true">
      <div className="absolute left-1 top-9 w-36 -rotate-6 rounded-2xl border border-stroke bg-paper p-3 shadow-soft">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
          <span className="h-2 w-16 rounded-full bg-fog" />
        </div>
        <div className="mt-2.5 flex items-end gap-1">
          <span className="h-5 w-2 rounded-sm bg-accent/40" />
          <span className="h-8 w-2 rounded-sm bg-accent/70" />
          <span className="h-3 w-2 rounded-sm bg-accent/25" />
          <span className="h-6 w-2 rounded-sm bg-accent/55" />
        </div>
      </div>
      <div className="absolute right-0 top-0 w-36 rotate-3 rounded-2xl border border-stroke bg-paper p-3 shadow-lift">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2 w-14 rounded-full bg-fog" />
        </div>
        <div className="mt-2.5 h-1.5 w-full rounded-full bg-fog" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-fog" />
      </div>
      <div className="absolute bottom-0 left-10 w-32 rounded-2xl border border-stroke bg-paper p-3 shadow-soft">
        <div className="h-2 w-20 rounded-full bg-fog" />
        <div className="mt-2 h-1.5 w-full rounded-full bg-fog" />
        <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-fog" />
      </div>
    </div>
  );
}

/** Trigger, email, and action mini-cards connected with arrows. */
export function FlowsIllustration() {
  return (
    <div className="flex items-center gap-2.5" aria-hidden="true">
      <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-2xl border border-stroke bg-paper shadow-soft">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" aria-hidden="true">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" opacity="0.8" />
        </svg>
        <span className="h-1.5 w-9 rounded-full bg-fog" />
      </div>
      <ArrowConnector />
      <div className="flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-stroke bg-paper shadow-lift">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 6.5 12 13l8-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="h-1.5 w-10 rounded-full bg-fog" />
      </div>
      <ArrowConnector />
      <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-2xl border border-stroke bg-paper shadow-soft">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" aria-hidden="true">
          <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="h-1.5 w-9 rounded-full bg-fog" />
      </div>
    </div>
  );
}

/** Content-calendar card with a highlighted send date, plus an overlapping campaign-note card. */
export function CampaignsIllustration() {
  const cells = Array.from({ length: 15 });
  return (
    <div className="relative h-36 w-52" aria-hidden="true">
      <div className="w-44 rounded-2xl border border-stroke bg-paper p-3.5 shadow-lift">
        <div className="flex items-center justify-between">
          <span className="h-2 w-14 rounded-full bg-fog" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </div>
        <div className="mt-3 grid grid-cols-5 gap-1.5">
          {cells.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-[3px] ${i === 7 ? "bg-accent" : "bg-fog/70"}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 -right-3 w-32 rounded-xl border border-stroke bg-paper p-2.5 shadow-soft">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
          <span className="h-1.5 w-16 rounded-full bg-fog" />
        </div>
        <div className="mt-1.5 h-1.5 w-full rounded-full bg-fog" />
        <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-fog" />
      </div>
    </div>
  );
}

/** Three overlapping mini email-template preview cards. */
export function CreativeIllustration() {
  return (
    <div className="relative h-40 w-56" aria-hidden="true">
      <div className="absolute left-0 top-4 w-28 -rotate-6 overflow-hidden rounded-xl border border-stroke bg-paper shadow-soft">
        <div className="h-10 bg-accent/10" />
        <div className="space-y-1.5 p-2.5">
          <span className="block h-1.5 w-full rounded-full bg-fog" />
          <span className="block h-1.5 w-2/3 rounded-full bg-fog" />
        </div>
      </div>
      <div className="absolute left-1/2 top-0 w-32 -translate-x-1/2 rotate-2 overflow-hidden rounded-xl border border-stroke bg-paper shadow-lift">
        <div className="h-14 bg-accent/25" />
        <div className="space-y-1.5 p-2.5">
          <span className="block h-1.5 w-full rounded-full bg-fog" />
          <span className="block h-1.5 w-4/5 rounded-full bg-fog" />
          <span className="mt-1.5 block h-4 w-14 rounded-full bg-ink" />
        </div>
      </div>
      <div className="absolute right-0 top-6 w-28 rotate-6 overflow-hidden rounded-xl border border-stroke bg-paper shadow-soft">
        <div className="h-10 bg-accent/15" />
        <div className="space-y-1.5 p-2.5">
          <span className="block h-1.5 w-full rounded-full bg-fog" />
          <span className="block h-1.5 w-1/2 rounded-full bg-fog" />
        </div>
      </div>
    </div>
  );
}
