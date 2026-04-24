
"use client";
import { Suspense } from "react";
import type { Metadata } from "next";
import { StrategyCallForm } from "@/components/strategy-call-form";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a strategy call with Lifecycle Inbox to review your lifecycle gaps, priorities, and recommended next steps."
};

export default function ContactPage() {
  return (
    <Suspense>
      <div className="bg-paper">
        <section id="strategy-call" className="bg-paper">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
            <StrategyCallForm />
          </div>
        </section>
      </div>
    </Suspense>
  );
}


