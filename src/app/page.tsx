import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import BossResultsCTA from "@/components/sections/BossResultsCTA";
import ProofBar from "@/components/sections/ProofBar";
import TrueAISection from "@/components/sections/TrueAISection";
import WeUseItSection from "@/components/sections/WeUseItSection";
import DepartmentReveal from "@/components/sections/DepartmentReveal";
import HowWeWork from "@/components/sections/HowWeWork";
import AuditSamples from "@/components/sections/AuditSamples";
import ROICalculator from "@/components/sections/ROICalculator";
import TestimonialScroll from "@/components/sections/TestimonialScroll";
import TeamCulture from "@/components/sections/TeamCulture";
import OperatorCredibility from "@/components/sections/OperatorCredibility";
import FinalCTASection from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Utopia Group — Malaysia's #1 AI Implementation Partner",
  description:
    "We run AI across 35+ companies with 400+ staff. Setup from RM12,000, monthly from RM3,000. Free tools available. WhatsApp us today.",
  openGraph: {
    title: "Utopia Group — Malaysia's #1 AI Implementation Partner",
    description:
      "We run AI across 35+ companies with 400+ staff. Setup from RM12,000, monthly from RM3,000. Free tools available.",
    url: "/",
  },
  twitter: {
    title: "Utopia Group — Malaysia's #1 AI Implementation Partner",
    description:
      "We run AI across 35+ companies with 400+ staff. Setup from RM12,000, monthly from RM3,000. Free tools available.",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BossResultsCTA />
      <ProofBar />
      <TrueAISection />
      <WeUseItSection />
      <DepartmentReveal />
      <HowWeWork />
      <AuditSamples />
      <ROICalculator />
      <TestimonialScroll />
      <TeamCulture />
      <OperatorCredibility />
      <FinalCTASection />
    </main>
  );
}
