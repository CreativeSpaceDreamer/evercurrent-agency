import type { Metadata } from "next";
import { Suspense } from "react";
import { CalendlyInline } from "@/components/calendly-inline";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a strategy call with Lifecycle Inbox to review your lifecycle gaps, priorities, and recommended next steps."
};

const CALENDLY_URL = "https://calendly.com/hello-lifecycleinbox/30min";

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <div className="bg-paper">
        <section id="strategy-call" className="bg-paper">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
            <div className="mb-8 text-center">
              <h1 className="section-title text-ink">Book a strategy call</h1>
              <p className="section-subtitle text-base">
                Pick a time that works and answer a few quick questions. We will confirm next steps before the call.
              </p>
            </div>
            <CalendlyInline url={CALENDLY_URL} />
          </div>
        </section>
      </div>
    </Suspense>
  );
}
