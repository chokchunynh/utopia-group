import type { Metadata } from "next";
import BossHero from "@/components/sections/BossHero";
import BossProofStrip from "@/components/sections/BossProofStrip";
import BossTimeline from "@/components/sections/BossTimeline";
import BossShowcase from "@/components/sections/BossShowcase";
import BossPricing from "@/components/sections/BossPricing";
import BossQuiz from "@/components/sections/BossQuiz";
import BossFinalCTA from "@/components/sections/BossFinalCTA";

export const metadata: Metadata = {
  title: "Boss OS — Your Whole Business. One Screen. Every Morning. | Utopia Group",
  description:
    "Boss OS is a command center built for Malaysian SMEs. Sales, cash flow, staff, WhatsApp AI — one screen. First system live in 5 days. From RM2,800/mo.",
  openGraph: {
    title: "Boss OS — Your Whole Business. One Screen. Every Morning.",
    description:
      "Command center for Malaysian SMEs. First system live in 5 days. From RM2,800/mo. 40% margin improvement in 90 days.",
    url: "/boss-os",
  },
  twitter: {
    title: "Boss OS — Your Whole Business. One Screen. Every Morning.",
    description:
      "Command center for Malaysian SMEs. First system live in 5 days. From RM2,800/mo.",
  },
};

export default function BossOSPage() {
  return (
    <main>
      <BossHero />
      <BossProofStrip />
      <BossTimeline />
      <BossShowcase />
      <BossPricing />
      <BossQuiz />
      <BossFinalCTA />
    </main>
  );
}
