import type { Metadata } from "next";
import BossHero from "@/components/sections/BossHero";
import BossROICalculator from "@/components/sections/BossROICalculator";
import BossCoreFeatures from "@/components/sections/BossCoreFeatures";
import BossDataReadiness from "@/components/sections/BossDataReadiness";
import BossIndustryGrid from "@/components/sections/BossIndustryGrid";
import BossPricing from "@/components/sections/BossPricing";
import BossCaseStudies from "@/components/sections/BossCaseStudies";
import BossDataPrivacy from "@/components/sections/BossDataPrivacy";
import BossFinalCTA from "@/components/sections/BossFinalCTA";

export const metadata: Metadata = {
  title: "Boss OS — Your Entire Business. One Screen. | Utopia Group",
  description:
    "Boss OS is a command center built for Malaysian SMEs. Sales, cash flow, staff, WhatsApp AI — all in one screen. Setup from RM5,000. Most clients save RM8,000-15,000/month.",
  openGraph: {
    title: "Boss OS — Your Entire Business. One Screen.",
    description:
      "Command center for Malaysian SMEs. Sales, cash flow, staff, WhatsApp AI. Setup from RM5,000. Save RM8,000-15,000/month.",
    url: "/",
  },
  twitter: {
    title: "Boss OS — Your Entire Business. One Screen.",
    description:
      "Command center for Malaysian SMEs. Sales, cash flow, staff, WhatsApp AI. Setup from RM5,000.",
  },
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero — 3-phone mockup with interactive industry switching */}
      <BossHero />
      {/* 2. ROI Calculator — "How much are you losing?" pain anchor */}
      <BossROICalculator />
      {/* 3. 5 Core Features — what Boss OS does from Day 1 */}
      <BossCoreFeatures />
      {/* 4. Data Readiness — "You only need 30% of your data" */}
      <BossDataReadiness />
      {/* 5. Industry Grid — click to see your vertical */}
      <BossIndustryGrid />
      {/* 6. Pricing — ROI-anchored, 2 tiers */}
      <BossPricing />
      {/* 7. Case Studies — before/after numbers */}
      <BossCaseStudies />
      {/* 8. Data Privacy — PDPA, NDA, trust badges */}
      <BossDataPrivacy />
      {/* 9. Final CTA — "Your competitor already started" */}
      <BossFinalCTA />
    </main>
  );
}
