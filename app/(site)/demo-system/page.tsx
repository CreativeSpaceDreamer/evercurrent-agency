import Link from "next/link";
import { ProofMediaCard } from "@/components/proof-media-card";
import { ProofCollageSystem } from "@/components/proof-collage-system";
import { EmailShowcaseStack } from "@/components/email-showcase-stack";
import { SystemDiagram } from "@/components/system-diagram";

const flowStack = [
  "Welcome flow",
  "Browse abandon flow",
  "Checkout abandon flow",
  "Post-purchase education flow",
  "Replenishment flow",
  "Winback flow"
];

const campaignSystem = [
  "Monthly campaign calendar",
  "Product education and conversion sequence",
  "Promo guardrails and send planning",
  "QA and post-send performance review loop"
];

const smsSupport = [
  "Consent-aware SMS architecture",
  "Message timing mapped to lifecycle stages",
  "Channel coordination between email and SMS",
  "Tone and presentation aligned to brand positioning"
];

const whatThisProves = [
  "Lifecycle Inbox can design and execute a complete retention operating system.",
  "Strategy and production quality can coexist without compromise.",
  "Lifecycle channels perform better when merchandising, creative, and channel logic are coordinated.",
  "E-commerce retention needs category-specific execution, not generic template deployment."
];

const collageItems = [
  {
    label: "Storefront",
    title: "Merchandising environment",
    src: "/email-gallery/EC_BEA_CP_CampaignPromo_desktop_web1200_v2.png",
    alt: "Merchandising and campaign creative system"
  },
  {
    label: "Flows",
    title: "Flow architecture",
    src: "/images/email-gallery/welcome-routine-education/EC_BEA_CP_Welcome_RoutineEducation_desktop_web1200.png",
    alt: "Lifecycle flow creative snapshot"
  },
  {
    label: "Campaigns",
    title: "Campaign execution board",
    src: "/email-gallery/EC_BEA_CP_CampaignPromo_desktop_web1200_v2.png",
    alt: "Campaign execution creative snapshot"
  },
  {
    label: "Email",
    title: "Current-standard creative",
    src: "/images/email-gallery/welcome-routine-education/EC_BEA_CP_Welcome_RoutineEducation_desktop_web1200.png",
    alt: "Calm Ritual Skin featured email creative"
  },
  {
    label: "SMS",
    title: "Support sequence",
    src: "/images/email-gallery/abandoned-checkout-social-proof/EC_BEA_CP_AbandonedCheckout_SocialProof_desktop_web1200.png",
    alt: "Email and SMS support layer snapshot"
  }
];

const showcaseFeatured = {
  src: "/images/email-gallery/welcome-social-proof/EC_BEA_CP_Welcome_SocialProof_desktop_web1200.png",
  alt: "Featured Calm Ritual Skin social proof email",
  label: "Featured: Welcome social proof"
};

const showcaseSupporting = [
  {
    src: "/images/email-gallery/welcome-routine-education/EC_BEA_CP_Welcome_RoutineEducation_desktop_web1200.png",
    alt: "Supporting welcome routine education email",
    label: "Routine education"
  },
  {
    src: "/email-gallery/EC_BEA_CP_CampaignPromo_desktop_web1200_v2.png",
    alt: "Supporting campaign promo email",
    label: "Campaign execution"
  },
  {
    src: "/images/email-gallery/abandoned-checkout-social-proof/EC_BEA_CP_AbandonedCheckout_SocialProof_desktop_web1200.png",
    alt: "Supporting abandoned checkout social proof email",
    label: "Checkout recovery"
  }
];

export default function DemoSystemPage() {
  return (
    <div className="bg-paper">
      <section className="border-b border-stroke">
        <div className="section-shell py-20 md:py-24">
          <p className="section-eyebrow">Demo System</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-ink md:text-6xl">
            The Calm Ritual Skin Demo System
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-2 md:text-xl">
            Calm Ritual Skin is a flagship proof environment built to show strategic depth and execution quality. It
            is explicitly a demo system, not a client case study.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-stroke bg-slate/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink-2">
            Honest framing: demonstration build
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">1. Why This Was Built</p>
          <h2 className="section-title mt-4">To show how a full retention system should work in practice.</h2>
          <p className="mt-5 text-base text-ink-2 md:text-lg">
            Instead of abstract claims, this page documents a complete operating system: storefront thinking, product
            architecture, lifecycle flows, campaign rhythm, SMS support, and creative standards.
          </p>
        </div>
        <div className="mt-10">
          <ProofCollageSystem items={collageItems} />
        </div>
        <div className="mt-6">
          <SystemDiagram />
        </div>
      </section>

      <section className="border-y border-stroke bg-slate/30">
        <div className="section-shell grid gap-6 py-16 md:grid-cols-2 md:py-20">
          <ProofMediaCard
            label="2. Storefront and Merchandising System"
            title="Storefront experience"
            caption="Merchandising, PDP hierarchy, and collection flow were designed to support lifecycle messaging after purchase."
            src="/email-gallery/EC_BEA_CP_CampaignPromo_desktop_web1200_v2.png"
            mediaHeightClassName="h-64"
          />
          <ProofMediaCard
            label="3. Product and Bundle Architecture"
            title="Offer structure"
            caption="Products and bundles are sequenced for education, cross-sell, and replenishment logic across channels."
            src="/images/email-gallery/welcome-routine-education/EC_BEA_CP_Welcome_RoutineEducation_desktop_web1200.png"
            mediaHeightClassName="h-64"
          />
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-[1.05fr,0.95fr]">
          <ProofMediaCard
            label="4. Flow Stack"
            title="Six live lifecycle flows"
            caption="Flow logic is built as one coordinated stack, not disconnected automations."
            src="/images/email-gallery/welcome-social-proof/EC_BEA_CP_Welcome_SocialProof_desktop_web1200.png"
            mediaHeightClassName="h-72"
          />
          <article className="premium-panel p-8">
            <p className="proof-note text-accent">Flow Coverage</p>
            <ul className="mt-5 space-y-3 text-sm text-ink">
              {flowStack.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-stroke bg-slate/30">
        <div className="section-shell grid gap-6 py-16 md:grid-cols-[1fr,1fr] md:py-20">
          <ProofMediaCard
            label="5. Campaign System"
            title="Campaign operating cadence"
            caption="Campaigns are managed as a structured rhythm with creative QA and post-send learning loops."
            src="/email-gallery/EC_BEA_CP_CampaignPromo_desktop_web1200_v2.png"
            mediaHeightClassName="h-64"
          />
          <article className="premium-panel p-8">
            <p className="proof-note text-accent">Campaign System Details</p>
            <ul className="mt-5 space-y-3 text-sm text-ink">
              {campaignSystem.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <ProofMediaCard
            label="6. SMS Support"
            title="Integrated SMS layer"
            caption="SMS is built as a support channel inside the lifecycle system, not a disconnected volume channel."
            src="/images/email-gallery/abandoned-checkout-close-call/EC_BEA_CP_AbandonedCheckout_CloseCall_desktop_web1200.png"
            mediaHeightClassName="h-56"
          />
          <article className="premium-panel p-8">
            <p className="proof-note text-accent">SMS System Details</p>
            <ul className="mt-5 space-y-3 text-sm text-ink">
              {smsSupport.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-2" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-stroke bg-slate/30">
        <div className="section-shell py-16 md:py-20">
          <p className="section-eyebrow">7. Design System / Creative System</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Brand-aligned creative standards with clear hierarchy and mobile polish.
          </h2>
          <div className="mt-10">
            <EmailShowcaseStack featured={showcaseFeatured} supporting={showcaseSupporting} />
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <p className="section-eyebrow">8. Current Creative Range</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-ink md:text-4xl">
          Variation inside one consistent brand standard.
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-ink-2 md:text-base">
          Different lifecycle moments require different creative emphasis. The system keeps visual consistency while
          changing message depth, framing, and CTA intent.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ProofMediaCard
            label="Welcome Sequence"
            title="Education-first structure"
            caption="Routine-building guidance with clear progression and soft conversion pressure."
            src="/images/email-gallery/welcome-routine-education/EC_BEA_CP_Welcome_RoutineEducation_desktop_web1200.png"
            mediaHeightClassName="h-64"
            titleClassName="text-xl"
          />
          <ProofMediaCard
            label="Recovery Sequence"
            title="Conversion with reassurance"
            caption="Abandonment recovery messaging that combines urgency with trust and proof."
            src="/images/email-gallery/abandoned-checkout-social-proof/EC_BEA_CP_AbandonedCheckout_SocialProof_desktop_web1200.png"
            mediaHeightClassName="h-64"
            titleClassName="text-xl"
          />
        </div>
      </section>

      <section className="border-y border-stroke bg-slate/30">
        <div className="section-shell py-16 md:py-20">
          <p className="section-eyebrow">9. What This Proves</p>
          <div className="premium-panel mt-6 p-8 md:p-10">
            <ul className="space-y-4 text-sm text-ink md:text-base">
              {whatThisProves.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="rounded-[2rem] border border-stroke bg-slate px-8 py-12 text-ink md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-2">10. CTA</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              If this is your expected retention standard, book a strategy call.
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:mt-0">
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-primary">
              Book a Strategy Call
            </Link>
            <Link href="https://www.lifecycleinbox.com/contact#strategy-call" className="btn-secondary">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


