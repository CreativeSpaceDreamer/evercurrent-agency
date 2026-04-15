export type EmailPortfolioCategory =
  | 'Welcome'
  | 'Abandon'
  | 'Promo'
  | 'Post-Purchase'
  | 'Winback'
  | 'Transactional'
  | 'Newsletter'
  | 'Education';

export type EmailPortfolioItem = {
  id: string;
  title: string;
  category: EmailPortfolioCategory;
  subtitle: string;
  description: string;
  images: {
    desktop: string;
    mobile?: string;
  };
  status: 'published' | 'wip';
  sort: number;
};

export const EMAIL_PORTFOLIO_ITEMS: EmailPortfolioItem[] = [
  {
    id: 'welcome-routine-education',
    title: 'Welcome - Routine Education',
    category: 'Welcome',
    subtitle: 'Welcome Flow E02 - v1.0',
    description: 'Educational welcome email that teaches a simple barrier-first routine.',
    images: {
      desktop:
        '/images/email-gallery/welcome-routine-education/EC_BEA_CP_Welcome_RoutineEducation_desktop_web1200.png',
      mobile:
        '/images/email-gallery/welcome-routine-education/EC_BEA_CP_Welcome_RoutineEducation_mobile_long_web900.png',
    },
    status: 'published',
    sort: 10,
  },
  {
    id: 'welcome-social-proof',
    title: 'Welcome - Social Proof',
    category: 'Welcome',
    subtitle: 'Welcome Flow E03 - v1.0',
    description: 'Proof-heavy welcome email focused on trust and before/after credibility.',
    images: {
      desktop:
        '/images/email-gallery/welcome-social-proof/EC_BEA_CP_Welcome_SocialProof_desktop_web1200.png',
      mobile:
        '/images/email-gallery/welcome-social-proof/EC_BEA_CP_Welcome_SocialProof_mobile_long_web900.png',
    },
    status: 'published',
    sort: 20,
  },
  {
    id: 'welcome-faq-close',
    title: 'Welcome - FAQ Close',
    category: 'Welcome',
    subtitle: 'Welcome Flow E04 - v1.0',
    description: 'FAQ close email that handles objections and pushes toward first purchase.',
    images: {
      desktop: '/images/email-gallery/welcome-faq/EC_BEA_CP_Welcome_FAQ_desktop_web1200.png',
      mobile: '/images/email-gallery/welcome-faq/EC_BEA_CP_Welcome_FAQ_mobile_long_web900.png',
    },
    status: 'published',
    sort: 30,
  },
  {
    id: 'abandoned-checkout-social-proof',
    title: 'Abandoned Checkout - Social Proof',
    category: 'Abandon',
    subtitle: 'Abandon Flow E02 - v1.0',
    description: 'Cart recovery email using proof stacks, testimonials, and confidence cues.',
    images: {
      desktop:
        '/images/email-gallery/abandoned-checkout-social-proof/EC_BEA_CP_AbandonedCheckout_SocialProof_desktop_web1200.png',
      mobile:
        '/images/email-gallery/abandoned-checkout-social-proof/EC_BEA_CP_AbandonedCheckout_SocialProof_mobile_long_web900.png',
    },
    status: 'published',
    sort: 40,
  },
  {
    id: 'abandoned-checkout-close-call',
    title: 'Abandoned Checkout - Close Call',
    category: 'Abandon',
    subtitle: 'Abandon Flow E01 - v1.0',
    description: 'Minimal close-call reminder with one clear CTA back to checkout.',
    images: {
      desktop:
        '/images/email-gallery/abandoned-checkout-close-call/EC_BEA_CP_AbandonedCheckout_CloseCall_desktop_web1200.png',
      mobile:
        '/images/email-gallery/abandoned-checkout-close-call/EC_BEA_CP_AbandonedCheckout_CloseCall_mobile_long_web900.png',
    },
    status: 'published',
    sort: 50,
  },
  {
    id: 'campaign-promo-3-step-routine',
    title: 'Campaign Promo - 3-Step Routine',
    category: 'Promo',
    subtitle: 'Campaign Promo - v1.0',
    description: 'Campaign send promoting a complete 3-step routine with product stack.',
    images: {
      desktop: '/email-gallery/EC_BEA_CP_CampaignPromo_desktop_web1200_v2.png',
      mobile: '/email-gallery/EC_BEA_CP_CampaignPromo_mobile_long_web900_v2.png',
    },
    status: 'published',
    sort: 60,
  },

  // Explicitly kept out of the website grid until they are fully production-ready.
  {
    id: 'welcome-last-call',
    title: 'Welcome - Last Call',
    category: 'Welcome',
    subtitle: 'Welcome Flow E05 - draft',
    description: 'Urgency-focused final nudge variation.',
    images: {
      desktop:
        '/images/email-gallery/welcome-last-call/EC_BEA_CP_Welcome_LastCall_desktop_web1200.png',
      mobile:
        '/images/email-gallery/welcome-last-call/EC_BEA_CP_Welcome_LastCall_mobile_long_web900.png',
    },
    status: 'wip',
    sort: 110,
  },
  {
    id: 'campaign-promo-clean-hero',
    title: 'Campaign Promo - Clean Hero + CTA',
    category: 'Promo',
    subtitle: 'Campaign template - draft',
    description: 'Legacy campaign template variant.',
    images: {
      desktop: '/images/email-gallery/thumbs/ec-skel01-campaignpromo-final.jpg',
    },
    status: 'wip',
    sort: 120,
  },
  {
    id: 'product-launch-new-drop',
    title: 'Product Launch - New Drop',
    category: 'Promo',
    subtitle: 'Launch template - draft',
    description: 'Launch template concept pending final production export.',
    images: {
      desktop: '/images/email-gallery/thumbs/ec-skel03-productlaunch-final.jpg',
    },
    status: 'wip',
    sort: 130,
  },
  {
    id: 'faq-close-winback',
    title: 'FAQ Close - Objections + Reassurance',
    category: 'Winback',
    subtitle: 'Winback template - draft',
    description: 'Winback FAQ variation not selected for current showcase.',
    images: {
      desktop: '/images/email-gallery/thumbs/ec-skel05-faqclose-prod.jpg',
    },
    status: 'wip',
    sort: 140,
  },
];
