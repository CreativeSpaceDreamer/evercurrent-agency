"use client";

import Link from "next/link";
import { useState } from "react";

export function TextSupportForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="card flex w-full flex-col gap-5">
      <div>
        <h2 className="section-title text-ink">SMS opt-in form</h2>
        <p className="section-subtitle text-base">
          Use this form for customer support and scheduling only.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          First Name (optional)
          <input name="firstName" className="input" placeholder="First name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Phone Number (required)
          <input required type="tel" name="phone" className="input" placeholder="(401) 992-5475" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink md:col-span-2">
          Reason for texting
          <select name="reason" className="input">
            <option value="">Select a reason</option>
            <option value="scheduling">Scheduling</option>
            <option value="support">Support</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
        Message (optional)
        <textarea name="message" className="input min-h-[120px]" placeholder="How can we help?" />
      </label>
      <div className="rounded-2xl border border-stroke bg-slate p-4 text-sm text-ink-2">
        <p className="text-sm font-semibold text-ink">SMS Consent (required)</p>
        <p className="mt-2">
          By submitting your phone number and checking the box below, you agree to receive text messages from Lifecycle Inbox for
          customer support and scheduling. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe, HELP for help.
        </p>
        <p className="mt-3">
          Privacy & Terms: View our{" "}
          <Link href="https://lifecycleinbox.com/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="https://lifecycleinbox.com/terms" className="underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
      <label className="flex items-start gap-3 text-sm font-semibold text-ink">
        <input required type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-accent" />
        <span>
          I agree to receive text messages from Lifecycle Inbox for customer support and scheduling. Message frequency varies. Message
          & data rates may apply. Reply STOP to unsubscribe, HELP for help. I agree to the{" "}
          <Link href="https://lifecycleinbox.com/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="https://lifecycleinbox.com/terms" className="underline">
            Terms
          </Link>
          .
        </span>
      </label>
      <button type="submit" className="btn-primary">
        Text Me Back
      </button>
      {submitted && (
        <p className="text-sm text-ink-2">
          Thanks — we received your request. If you opted in, you may receive a text reply shortly from Lifecycle Inbox. Reply STOP to
          opt out.
        </p>
      )}
    </form>
  );
}

