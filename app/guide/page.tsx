"use client";
import Image from "next/image";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-paper text-ink flex flex-col items-center px-4 py-8 sm:py-16">
      {/* Hero Section */}
      <section className="w-full max-w-2xl text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Free Guide: Build A Stronger Retention Engine For Your Ecommerce Brand</h1>
        <p className="text-lg sm:text-xl text-ink-2 mb-6">
          Learn how to identify retention leaks, install the right lifecycle flows, and build a system that drives more repeat revenue over time.
        </p>
        <div className="flex justify-center mb-6">
          <Image
            src="/images/guide/freeguidecover.png"
            alt="The Master Guide To Building A Retention Engine For Your Ecommerce Brand"
            width={320}
            height={420}
            className="rounded-2xl shadow-soft w-48 sm:w-64 h-auto"
            priority
          />
        </div>
      </section>

      {/* Embedded Kit Form */}
      <section className="w-full max-w-md bg-white rounded-2xl shadow-soft p-6 mb-10 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2">Get The Free Guide</h2>
        {/* Kit embed script */}
        <div id="kit-form-container" className="w-full flex flex-col items-center">
          {/* Kit will inject the form here */}
        </div>
        <p className="text-sm text-ink-2 mt-4">No spam. Unsubscribe anytime.</p>
        <script
          async
          data-uid="c41d418059"
          src="https://lifecycle-inbox.kit.com/c41d418059/index.js"
        ></script>
      </section>

      {/* What's Inside Section */}
      <section className="w-full max-w-2xl mb-10">
        <h3 className="text-lg font-semibold mb-3">Inside the guide:</h3>
        <ul className="list-disc list-inside text-base text-ink-2 space-y-1">
          <li>Diagnose where retention is breaking</li>
          <li>Install the core lifecycle flows</li>
          <li>Improve messaging, design, and conversion</li>
          <li>Fix the leaks that hurt performance</li>
          <li>Build a stronger repeat purchase engine</li>
        </ul>
      </section>

      {/* Who It's For Section */}
      <section className="w-full max-w-2xl mb-10">
        <h3 className="text-lg font-semibold mb-3">Built for ecommerce brands that want:</h3>
        <ul className="list-disc list-inside text-base text-ink-2 space-y-1">
          <li>Better subscriber conversion</li>
          <li>Stronger abandonment recovery</li>
          <li>Better post-purchase retention</li>
          <li>More repeat purchases</li>
          <li>A more dependable retention system</li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-md text-center mb-8">
        <a
          href="#form"
          className="inline-block bg-accent text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-soft hover:bg-accent-2 transition"
        >
          Get The Free Guide
        </a>
      </section>
    </main>
  );
}
