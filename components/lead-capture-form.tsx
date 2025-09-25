"use client";

import { useState } from "react";

interface LeadFormProps {
  headline: string;
  intent: "strategy" | "audit" | "resource";
  description?: string;
}

const intentCopy: Record<LeadFormProps["intent"], string> = {
  strategy: "strategy-session",
  audit: "lifecycle-audit",
  resource: "resource-request"
};

export function LeadCaptureForm({ headline, description, intent }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="card flex w-full max-w-xl flex-col gap-4"
      method="post"
      action="/api/lead"
      onSubmit={() => setSubmitted(true)}
    >
      <h2 className="section-title text-ink">{headline}</h2>
      {description && <p className="section-subtitle text-base">{description}</p>}
      <input type="hidden" name="intent" value={intentCopy[intent]} />
      <label className="flex flex-col gap-1 text-sm font-medium text-ink">
        Name
        <input
          type="text"
          name="fullName"
          required
          autoComplete="name"
          className="rounded-xl border border-slate bg-paper px-3 py-3 text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-ink">
        Work email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="rounded-xl border border-slate bg-paper px-3 py-3 text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-ink">
        Company
        <input
          type="text"
          name="company"
          required
          autoComplete="organization"
          className="rounded-xl border border-slate bg-paper px-3 py-3 text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-ink">
        What should we know?
        <textarea
          name="notes"
          rows={4}
          className="rounded-xl border border-slate bg-paper px-3 py-3 text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
          placeholder="Lifecycle revenue share, list size, recent wins or roadblocks." 
        />
      </label>
      <button
        type="submit"
        className="btn-primary justify-center"
        disabled={submitted}
      >
        {submitted ? "Submitting…" : intent === "audit" ? "Request my audit" : "Book strategy session"}
      </button>
      <p className="text-xs text-ink-2">
        Submitting shares the details above with Evercurrent.agency. We respond within one business day.
      </p>
    </form>
  );
}
