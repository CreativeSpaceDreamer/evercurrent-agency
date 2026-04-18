import Image from "next/image";
import Link from "next/link";
import LifecycleInboxResultsCard from "@/components/lifecycle-inbox-results-card";

function IvoryMaskIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <span
      role="img"
      aria-label={alt}
      className="block h-10 w-10 bg-ink sm:h-11 sm:w-11"
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain"
      }}
    />
  );
}

function ProcessLineIcon({ step }: { step: "Diagnose" | "Build" | "Scale" }) {
  if (step === "Diagnose") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 20L16.8 16.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (step === "Build") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="3.5" y="4.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13.5" y="4.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="8.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 8H13.5M12 11.5V13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M4 17L10 11L14 15L20 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 9H20V13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const strugglePoints = [
  {
    title: "Rising Acquisition Costs",
    body: "Paid traffic is powerful, but acquisition costs keep rising. Many brands believe spending more on growth will lead to sustained results. In reality, maintaining momentum often requires even more spend. Without a true retention system, margins get squeezed and long-term growth is capped.",
    icon: "/images/constraints/diagnose.png"
  },
  {
    title: "Low Conversion",
    body: "It's easy to drive traffic, but turning visitors into buyers is another challenge. Many brands accept low conversion rates, assuming they will improve over time. In reality, more traffic does not solve a weak customer journey. Without stronger conversion, revenue is lost at the point of intent.",
    icon: "/images/constraints/conversion-path.png"
  },
  {
    title: "Low Customer Lifetime Value",
    body: "Many brands are fixated on acquiring new customers, believing volume alone drives growth. But if those customers do not come back or spend more over time, growth begins to stall. Without retention, revenue stays shallow and scaling becomes far more difficult.",
    icon: "/images/constraints/lifetime-growth.png"
  }
];

const processSteps = [
  {
    title: "Diagnose",
    body: "We start by identifying where revenue is being lost across your customer journey - from list growth and conversion to retention, lifecycle gaps, and missed repeat purchase opportunities."
  },
  {
    title: "Build",
    body: "Next, we create the retention infrastructure your brand actually needs: flows, campaigns, segmentation, offers, and customer journey systems designed to support profitable growth."
  },
  {
    title: "Scale",
    body: "Once the foundation is in place, we optimize performance over time - improving conversion, increasing customer lifetime value, and helping retention become a stronger growth channel."
  }
] as const;

const designProofItems = [
  {
    title: "Welcome / First Purchase",
    caption: "Built to convert new subscribers into first-time customers while introducing the brand with clarity and taste.",
    image: "/images/design-proof/welcome-email.png"
  },
  {
    title: "Founder Story",
    caption: "Built to deepen connection and trust through brand story, emotion, and point of view.",
    image: "/images/design-proof/founder-note.png"
  },
  {
    title: "Hero Product Education",
    caption: "Built to turn product interest into purchase through education, positioning, and premium presentation.",
    image: "/images/design-proof/shop-barrier-serum.png"
  },
  {
    title: "Routine / Educational",
    caption: "Built to help customers understand how products work together and how to use them well.",
    image: "/images/design-proof/educational-email-v2.png"
  },
  {
    title: "Winback / Replenishment",
    caption: "Built to reactivate previous buyers and bring customers back into the lifecycle.",
    image: "/images/design-proof/winback-email-v2.png"
  }
];

const helpPillars = [
  {
    title: "Lifecycle strategy",
    body: "Retention audits, roadmaps, segmentation thinking, and offer logic based on how customers actually buy."
  },
  {
    title: "Flows and automation",
    body: "Full lifecycle flows built with clear intent and performance accountability behind every message."
  },
  {
    title: "Campaign systems",
    body: "Planned campaign execution with copy, design, merchandising, and calendar structure."
  },
  {
    title: "Premium creative execution",
    body: "Design and messaging quality that reflects the brand standard while converting at a high level."
  }
];

const faqItems = [
  {
    question: "What kinds of brands do you work with?",
    answer:
      "We work with growing e-commerce brands that want a stronger retention system behind their growth. Our sweet spot is brands that care about customer experience, conversion quality, and long-term customer value."
  },
  {
    question: "What do you actually help with?",
    answer:
      "We help brands improve repeat revenue through strategy-led email and SMS, lifecycle flows, campaigns, segmentation, offer logic, and retention infrastructure built to support a more premium customer journey."
  },
  {
    question: "Do you only work on email?",
    answer:
      "No. Email is a major part of retention, but we look at the broader lifecycle system behind growth. That includes list growth, conversion opportunities, flow architecture, campaign strategy, segmentation, and repeat purchase behavior. This is about building a stronger retention engine, not just sending more messages."
  },
  {
    question: "What is the first step to working together?",
    answer:
      "The first step is a strategy call. We use that conversation to understand your current lifecycle setup, where revenue may be leaking, what to fix first, and what a stronger retention system should look like for your stage."
  },
  {
    question: "Do you offer one-time projects or ongoing support?",
    answer:
      "Yes. Depending on what your brand needs, the right fit may be a focused strategy engagement, a retention buildout, or ongoing support to improve performance over time through testing, iteration, and optimization."
  },
  {
    question: "What makes Lifecycle Inbox different?",
    answer:
      "Lifecycle Inbox is built around one idea: growing e-commerce brands should not have to choose between strong performance and strong presentation. We focus on strategy-led retention systems, premium creative standards, full lifecycle thinking, intentional campaign planning, and founder-led oversight."
  }
] as const;

export default function HomePage() {
  return (
    <div className="bg-paper">
      <section
        id="home"
        className="scroll-mt-28 flex min-h-[calc(100svh-3.5rem)] flex-col bg-paper sm:min-h-0"
      >
        <div className="section-shell pt-2 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-14">
          <div className="mx-auto max-w-[52rem] text-center">
            <h1 className="mx-auto max-w-[21.5rem] text-[1.62rem] font-semibold leading-[0.98] text-ink sm:max-w-none sm:text-6xl md:text-[4.5rem] lg:text-[5.2rem]">
              We build the lifecycle engine behind growing e-commerce brands.
            </h1>
            <p className="mx-auto mt-3 max-w-[22rem] text-[0.95rem] leading-6 text-ink-2 sm:mt-7 sm:max-w-[40rem] sm:text-lg sm:leading-normal md:text-xl">
              We help you grow repeat revenue through strategy-led email, SMS, flows, campaigns, and retention
              infrastructure built to match a premium customer experience.
            </p>
          </div>
        </div>

        <div className="section-shell mt-auto -mt-6 pt-1 pb-10 sm:mt-0 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20">
          <div className="premium-panel mx-auto -mt-[43px] mb-[43px] max-w-5xl p-1.5 sm:mt-0 sm:mb-0 sm:p-3">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[1.1rem] border border-stroke bg-slate sm:aspect-video sm:rounded-[1.35rem]">
              <div className="absolute -left-12 -top-10 h-44 w-44 rounded-full bg-ink/5 blur-2xl" aria-hidden="true" />
              <div className="absolute -bottom-14 -right-10 h-48 w-48 rounded-full bg-ink/5 blur-2xl" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play VSL placeholder"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/90 text-ink shadow-soft sm:h-20 sm:w-20"
                >
                  <svg className="h-7 w-7 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 6v12l10-6-10-6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            id="strategy-call"
            className="scroll-mt-28 mx-auto mt-2 flex max-w-md flex-col items-center gap-2.5 sm:mt-8 sm:max-w-5xl sm:flex-row sm:justify-center sm:gap-4"
          >
            <Link
              href="https://www.lifecycleinbox.com/contact#strategy-call"
              className="btn-primary w-full max-w-[20rem] py-2.5 text-sm sm:w-auto sm:max-w-none sm:py-3 sm:text-base"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/#design-proof"
              className="btn-secondary w-full max-w-[20rem] py-2.5 text-sm sm:w-auto sm:max-w-none sm:py-3 sm:text-base"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <section id="what-we-build" className="scroll-mt-28 bg-paper">
        <div className="section-shell pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-9">
            <h2 className="section-title">What we&apos;ll build for you.</h2>
            <p className="mt-3 text-base text-ink-2 sm:text-lg">
              Snapshot of the backend eCommerce funnel we&apos;re building for your brand.
            </p>
          </div>
          <div className="premium-panel mx-auto max-w-6xl p-3 sm:p-5 md:p-6">
            <div className="overflow-hidden rounded-[1.35rem] bg-paper">
              <Image
                src="/images/Retention-System.png"
                alt="Retention system diagram showing backend ecommerce funnel architecture"
                width={1388}
                height={768}
                className="h-auto w-full"
                sizes="(max-width: 1023px) 95vw, 1120px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="section-shell pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-eyebrow">Common growth constraints</p>
            <h2 className="section-title mt-5">Are you struggling with...</h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {strugglePoints.map((item) => (
              <article key={item.title} className="mx-auto w-full max-w-sm text-center md:max-w-none md:text-left">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-stroke bg-slate/40 md:mx-0">
                  <IvoryMaskIcon src={item.icon} alt={`${item.title} icon`} />
                </div>
                <h3 className="mt-5 text-[1.8rem] font-semibold leading-tight text-ink sm:text-[2rem]">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-ink-2">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 border-t border-stroke bg-paper">
        <div className="section-shell pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title">
              Our simple 3-step process to build your <em className="italic">retention engine</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-ink-2 sm:text-lg">
              We help premium ecommerce brands turn more traffic into first-time customers, stronger repeat purchase behavior, and more predictable long-term revenue.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-3xl border border-stroke bg-slate/35 p-7 text-center sm:p-8 md:text-left">
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-stroke text-ink md:mx-0">
                  <ProcessLineIcon step={step.title} />
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-ink-2">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="email-designs" className="scroll-mt-28" />
      <section id="design-proof" className="scroll-mt-28 border-t border-stroke bg-paper">
        <div className="section-shell pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title">
              Beautiful designs that <em className="italic">convert.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-ink-2 sm:text-lg">
              Our designs not only look good, but they&apos;ll make you more money.
            </p>
          </div>

          <p className="mt-10 text-center text-sm text-ink-2">Swipe left or right to explore the designs.</p>

          <div className="-mx-6 mt-8 overflow-x-auto px-6 pb-4 sm:mt-10 sm:pb-5">
            <div className="flex w-max snap-x snap-mandatory gap-7 sm:gap-8">
              {designProofItems.map((item) => (
                <article key={item.title} className="w-[84vw] max-w-[28rem] shrink-0 snap-start sm:w-[26rem]">
                  <div className="rounded-[1.75rem] border border-stroke bg-slate/50 p-3 sm:p-4">
                    <div className="overflow-hidden rounded-[1.25rem] bg-paper">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1080}
                        height={1920}
                        className="h-auto w-full"
                        sizes="(max-width: 640px) 84vw, 416px"
                      />
                    </div>
                  </div>
                  <div className="mx-auto mt-6 max-w-[25rem] text-center">
                    <h3 className="text-2xl font-semibold text-ink sm:text-[2rem]">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-ink-2">{item.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="results" className="scroll-mt-56">
        <LifecycleInboxResultsCard />
      </section>

      <section className="bg-bone/48">
        <div className="section-shell pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title">How can we help?</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {helpPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl bg-paper/85 p-7 sm:p-8">
                <h3 className="text-2xl font-semibold text-ink sm:text-3xl">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-2 sm:text-base">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="testimonials" className="scroll-mt-28" />
      <section id="faq" className="scroll-mt-28 border-t border-stroke bg-paper">
        <div className="section-shell pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title">FAQ</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-ink-2 sm:text-lg">
              Answers to the questions most brands have before building a stronger retention system.
            </p>
          </div>

          <div className="mx-auto mt-12 w-full max-w-4xl rounded-[1.75rem] border border-stroke bg-slate/25 px-5 sm:px-8">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className={`group py-5 sm:py-6 ${index !== faqItems.length - 1 ? "border-b border-stroke" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="text-left text-xl font-semibold leading-tight text-ink sm:text-2xl">{item.question}</h3>
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stroke text-ink-2 transition group-open:rotate-45 group-open:text-ink">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-8 text-ink-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div id="trainings" className="scroll-mt-28" />
      <section id="about" className="scroll-mt-28 bg-slate text-ink">
        <div className="section-shell pt-12 pb-14 sm:pt-14 sm:pb-16 md:pt-16 md:pb-20">
          <div className="grid items-center gap-10 md:grid-cols-[0.92fr,1.08fr] md:gap-12">
            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full bg-paper/10 sm:h-80 sm:w-80">
              <Image src="/images/hero/founder-headshot.jpg" alt="Founder portrait" fill className="object-cover" sizes="320px" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">Meet the founder</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Retention should feel as premium as the brand.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-2 sm:text-lg">
                Lifecycle Inbox was built around one idea: growing e-commerce brands should not have to choose
                between strong performance and strong presentation. We build lifecycle systems that drive repeat revenue
                without compromising brand quality.
              </p>
              <div className="mt-7 flex justify-center md:justify-start">
                <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="section-shell pt-12 pb-16 text-center sm:pt-14 sm:pb-20 md:pt-16 md:pb-24">
          <h2 className="section-title mx-auto max-w-4xl">
            Ready to build a retention system that feels as considered as the brand itself?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base text-ink-2 sm:text-lg">
            Book a strategy call and we will show you where your lifecycle is leaking revenue, what to fix first, and
            what a premium retention system should look like for your stage.
          </p>
          <div className="mt-8">
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

