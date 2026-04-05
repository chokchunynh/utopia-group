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
    url: "/boss-os",
  },
  twitter: {
    title: "Boss OS — Your Entire Business. One Screen.",
    description:
      "Command center for Malaysian SMEs. Sales, cash flow, staff, WhatsApp AI. Setup from RM5,000.",
  },
};

export default function BossOSPage() {
  return (
    <main>
      <BossHero />
      <BossROICalculator />
      <BossCoreFeatures />
      <BossDataReadiness />
      <BossIndustryGrid />
      <BossPricing />
      <BossCaseStudies />
      <BossDataPrivacy />
      <BossFinalCTA />
    </main>
  );
}
