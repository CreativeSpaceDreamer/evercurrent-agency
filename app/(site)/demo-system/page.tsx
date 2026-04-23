
"use client";
import { Suspense } from "react";
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

  return (
    <Suspense>
      <div className="bg-paper">
        {/* ...existing code... */}
      </div>
    </Suspense>
  );
}


