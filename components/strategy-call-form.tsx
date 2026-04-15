"use client";

import { useEffect, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HTTP_PROTOCOL_REGEX = /^https?:\/\//i;

const normalizeWebsiteInput = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return HTTP_PROTOCOL_REGEX.test(trimmed) ? trimmed : `https://${trimmed}`;
};

const isValidWebsiteUrl = (value: string) => {
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol) && parsed.hostname.includes(".");
  } catch {
    return false;
  }
};

export function StrategyCallForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("Something went wrong. Please try again.");
  const [pageSource, setPageSource] = useState("unknown");
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now().toString());

  useEffect(() => {
    setPageSource(window.location.href);
  }, []);

  const validateClientSubmission = (formData: FormData) => {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const company = String(formData.get("company") ?? "").trim();
    const website = normalizeWebsiteInput(String(formData.get("website") ?? ""));
    const notes = String(formData.get("notes") ?? "").trim();
    const revenue = String(formData.get("revenue") ?? "").trim();
    const platform = String(formData.get("platform") ?? "").trim();
    const esp = String(formData.get("esp") ?? "").trim();
    const timeline = String(formData.get("timeline") ?? "").trim();

    if (name.length < 2) return "Please enter your full name.";
    if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address.";
    if (company.length < 2) return "Please enter your company name.";
    if (!revenue) return "Please select a monthly revenue range.";
    if (!platform) return "Please select your platform.";
    if (!esp) return "Please select your ESP.";
    if (!timeline) return "Please select your preferred timing.";
    if (notes.length < 12) return "Please add more detail on what to focus on in the call.";

    if (website && !isValidWebsiteUrl(website)) {
      return "Please enter a valid website URL.";
    }

    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("inquiry_type", "strategy_call");
    formData.set("page_source", pageSource);
    formData.set("form_started_at", formStartedAt);
    formData.set("website", normalizeWebsiteInput(String(formData.get("website") ?? "")));

    const validationMessage = validateClientSubmission(formData);
    if (validationMessage) {
      setErrorMessage(validationMessage);
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: formData
      });
      const payload = (await response.json().catch(() => null)) as { error?: string; message?: string } | null;

      if (!response.ok) {
        setErrorMessage(
          payload?.error || "Something went wrong. Please try again or email hello@lifecycleinbox.com."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setFormStartedAt(Date.now().toString());
    } catch {
      setErrorMessage("Network issue while submitting. Please try again or email hello@lifecycleinbox.com.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card flex w-full flex-col gap-5">
      <input type="hidden" name="inquiry_type" value="strategy_call" />
      <input type="hidden" name="page_source" value={pageSource} />
      <input type="hidden" name="form_started_at" value={formStartedAt} />
      <input
        type="text"
        name="company_size"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      />
      <div>
        <h2 className="section-title text-ink">Book a strategy call</h2>
        <p className="section-subtitle text-base">
          Share context and preferred timing. We will confirm next steps quickly.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Name
          <input required name="name" className="input" placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Email
          <input required type="email" name="email" className="input" placeholder="you@company.com" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Company
          <input required name="company" className="input" placeholder="Brand name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Website
          <input name="website" className="input" placeholder="https://example.com" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Monthly revenue range
          <select required name="revenue" className="input">
            <option value="">Select</option>
            <option value="under-50k">Under $50k</option>
            <option value="50k-200k">$50k-$200k</option>
            <option value="200k-500k">$200k-$500k</option>
            <option value="500k-1m">$500k-$1M</option>
            <option value="1m-plus">$1M+</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Platform
          <select required name="platform" className="input">
            <option value="">Select</option>
            <option value="shopify">Shopify</option>
            <option value="shopify-plus">Shopify Plus</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          ESP
          <select required name="esp" className="input">
            <option value="">Select</option>
            <option value="klaviyo">Klaviyo</option>
            <option value="omnisend">Omnisend</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
        What should we focus on in the call?
        <textarea
          required
          name="notes"
          className="input min-h-[120px]"
          placeholder="Lifecycle issues, current stack, and what you want to improve."
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
        Preferred timing
        <select required name="timeline" className="input">
          <option value="">Select</option>
          <option value="this-week">This week</option>
          <option value="next-week">Next week</option>
          <option value="two-weeks">Within two weeks</option>
          <option value="flexible">Flexible</option>
        </select>
      </label>
      <button type="submit" className="btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Request Strategy Call"}
      </button>
      {status === "success" && (
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-ink">
          <p className="font-semibold">Request received.</p>
          <p className="mt-1 text-ink-2">
            Your strategy call request is in. We will reply shortly with scheduling options.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="rounded-2xl border border-accent-2/40 bg-accent-2/10 p-4 text-sm text-ink">
          {errorMessage || "Something went wrong. Please email hello@lifecycleinbox.com and we will take care of it."}
        </div>
      )}
    </form>
  );
}
