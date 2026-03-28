const SITE_URL = "https://utopiagroup.com.my";

/** Type alias for JSON-LD data passed to the JsonLd component */
type JsonLdData = Record<string, unknown>;

// ─── Organization Schema ────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Utopia Group",
  legalName: "Utopia Accelerator Sdn Bhd",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Malaysia's #1 AI Implementation Partner — 35+ companies, 173 business units, 400+ staff. We build and deploy AI infrastructure for Malaysian businesses.",
  foundingDate: "2014",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+60146869468",
    contactType: "sales",
    email: "hello@utopiagroup.com.my",
    availableLanguage: ["English", "Malay"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "33.01 Sunway Putra Tower, 100 Jalan Putra, Chow Kit",
    addressLocality: "Kuala Lumpur",
    postalCode: "50350",
    addressCountry: "MY",
  },
  sameAs: [
    "https://www.linkedin.com/company/utopiagroupmy/",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 400,
  },
};

// ─── WebSite Schema with SearchAction ───────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Utopia Group",
  url: SITE_URL,
  description:
    "Malaysia's #1 AI Implementation Partner. AI tools, training, and full implementation for Malaysian businesses.",
  publisher: {
    "@type": "Organization",
    name: "Utopia Group",
    url: SITE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── BreadcrumbList Factory ─────────────────────────────────────
export function breadcrumbSchema(
  items: { name: string; href: string }[]
): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ─── FAQ Schema (for /how-we-charge) ────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is the setup cost RM12,000?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install a physical Mac Mini in your office, set up your custom AI dashboard, build your knowledge base, and deploy TrueAI on your WhatsApp. This isn't a subscription toggle — it's real infrastructure built specifically for your business.",
      },
    },
    {
      "@type": "Question",
      name: "What does the RM3,000/month cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly AI optimization, support, server costs, and continuous improvement of your AI systems. It's cheaper than one junior staff member — and AI never sleeps or takes leave.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start without paying anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our free tools (SlipMatch, AutoViral, RecurPay) require no signup and no credit card. Use them first, see the value, then decide if you want full implementation.",
      },
    },
    {
      "@type": "Question",
      name: "How long until I see ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see ROI within the first month. Our SME clients save an average of RM15,000/month. The RM12,000 setup pays for itself in under 30 days for most businesses.",
      },
    },
    {
      "@type": "Question",
      name: "What if it doesn't work for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a 30-day money-back guarantee. If you don't see measurable improvement within the first month, we refund your setup fee. No questions asked.",
      },
    },
    {
      "@type": "Question",
      name: "Why is this cheaper than other AI companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because we built these tools for ourselves first. We run 35+ companies on the same AI. You're not paying for R&D — you're paying for battle-tested systems that already work.",
      },
    },
  ],
};

// ─── Course Schema (for /masterclass) ───────────────────────────
export const masterclassCompanySchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Utopia AI Masterclass — Company Training",
  description:
    "On-site AI training for companies. Learn Claude, ChatGPT, Gemini, and workflow automation from a team that runs 35+ businesses on AI daily. Half-day crash course or 2-week full program.",
  provider: {
    "@type": "Organization",
    name: "Utopia Group",
    url: SITE_URL,
  },
  offers: [
    {
      "@type": "Offer",
      name: "Crash Course (Half-day)",
      price: "5000",
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
      category: "Half-day, 4 hours",
    },
    {
      "@type": "Offer",
      name: "Full Program (2 Weeks)",
      price: "25000",
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
      category: "2 weeks, on-site",
    },
  ],
  courseMode: "onsite",
  locationCreated: {
    "@type": "Place",
    name: "Your Office (On-site Training)",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
    },
  },
  inLanguage: ["en", "ms"],
  teaches:
    "AI tools for business: Claude, ChatGPT, Gemini, GitHub Copilot, workflow automation, WhatsApp AI, content generation, finance automation",
};

// ─── Course Schema (for /masterclass/individual) ────────────────
export const masterclassIndividualSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Utopia AI Masterclass — Individual Training",
  description:
    "8-session individual AI training program. Learn Claude Code, ChatGPT, Gemini, GitHub Copilot, image AI, and workflow automation. RM299/session, 2 hours each, weekly.",
  provider: {
    "@type": "Organization",
    name: "Utopia Group",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    name: "8-Session Pack",
    price: "2392",
    priceCurrency: "MYR",
    availability: "https://schema.org/InStock",
    category: "8 sessions, 2 hours each, weekly",
  },
  courseMode: "onsite",
  totalHistoricalEnrollment: 50,
  locationCreated: {
    "@type": "Place",
    name: "Sunway Putra Tower, Kuala Lumpur",
    address: {
      "@type": "PostalAddress",
      streetAddress: "33.01 Sunway Putra Tower, 100 Jalan Putra",
      addressLocality: "Kuala Lumpur",
      postalCode: "50350",
      addressCountry: "MY",
    },
  },
  inLanguage: ["en", "ms"],
  teaches:
    "Claude Code, ChatGPT, Google Gemini, GitHub Copilot, Cursor, Midjourney, DALL-E, workflow automation",
};
