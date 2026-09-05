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
        className="flex h-40 items-center justify-center sm:h-44"
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

/** Rising trend line with three nodes — audits, roadmaps, prioritization. */
export function StrategyIllustration() {
  return (
    <svg viewBox="0 0 160 96" className="h-20 w-36 text-accent" fill="none" aria-hidden="true">
      <path
        d="M18 68L58 46L96 56L142 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
      <circle cx="18" cy="68" r="5" fill="currentColor" opacity="0.35" />
      <circle cx="58" cy="46" r="5" fill="currentColor" opacity="0.55" />
      <circle cx="96" cy="56" r="5" fill="currentColor" opacity="0.35" />
      <circle cx="142" cy="24" r="7" fill="currentColor" />
    </svg>
  );
}

/** Three connected steps — flow/automation sequence. */
export function FlowsIllustration() {
  return (
    <svg viewBox="0 0 160 96" className="h-20 w-36 text-accent" fill="none" aria-hidden="true">
      <rect x="10" y="38" width="34" height="24" rx="7" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <rect x="63" y="30" width="34" height="24" rx="7" stroke="currentColor" strokeWidth="2" />
      <rect x="116" y="46" width="34" height="24" rx="7" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M46 47L61 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M99 45L114 53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/** Calendar card with send-date markers — campaign planning. */
export function CampaignsIllustration() {
  return (
    <svg viewBox="0 0 160 96" className="h-20 w-36 text-accent" fill="none" aria-hidden="true">
      <rect x="24" y="18" width="112" height="60" rx="10" stroke="currentColor" strokeWidth="2" opacity="0.45" />
      <path d="M24 40H136" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="52" cy="59" r="5" fill="currentColor" />
      <circle cx="80" cy="59" r="5" fill="currentColor" opacity="0.5" />
      <circle cx="108" cy="59" r="5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

/** Simplified email/creative frame — design and layout hierarchy. */
export function CreativeIllustration() {
  return (
    <svg viewBox="0 0 160 96" className="h-20 w-36 text-accent" fill="none" aria-hidden="true">
      <rect x="30" y="14" width="100" height="68" rx="10" stroke="currentColor" strokeWidth="2" opacity="0.45" />
      <rect x="42" y="26" width="76" height="26" rx="4" fill="currentColor" opacity="0.16" />
      <path d="M42 62H92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M42 72H74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
