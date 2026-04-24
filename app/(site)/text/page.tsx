"use client";
import { Suspense } from "react";
import { TextSupportForm } from "@/components/text-support-form";

export default function TextSupportPage() {
  return (
    <Suspense>
      <div className="bg-slate">
        <section className="bg-paper">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[2fr,3fr] md:items-start">
            <div>
              <p className="section-eyebrow">Support</p>
              <h1 className="mt-4 text-5xl font-semibold text-ink md:text-6xl">
                Text Lifecycle Inbox Support
              </h1>
              <p className="mt-6 text-lg text-ink-2">
                Need help or want to book a time to talk? Text (401) 992-5475 for customer support and scheduling.
              </p>
              <p className="mt-4 text-sm text-ink-2">
                What you’ll receive: appointment confirmations, scheduling updates, and customer support messages related to Lifecycle Inbox.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <TextSupportForm />
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
