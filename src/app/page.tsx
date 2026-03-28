import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProofBar from "@/components/sections/ProofBar";
import TrueAISection from "@/components/sections/TrueAISection";
import WeUseItSection from "@/components/sections/WeUseItSection";
import DepartmentReveal from "@/components/sections/DepartmentReveal";
import HowWeWork from "@/components/sections/HowWeWork";
import ROICalculator from "@/components/sections/ROICalculator";
import TestimonialScroll from "@/components/sections/TestimonialScroll";
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
      {/* 1. Hero — Mintlify-style centered with product screenshot */}
      <HeroSection />
      {/* 2. Proof bar — Stats strip with animated counters */}
      <ProofBar />
      {/* 3. TrueAI — Flagship product with WhatsApp demo */}
      <TrueAISection />
      {/* 4. We practice what we preach — operator credibility */}
      <WeUseItSection />
      {/* 5. Departments — areas of AI improvement */}
      <DepartmentReveal />
      {/* 6b. How We Work — 4-step process */}
      <HowWeWork />
      {/* 7. ROI calculator */}
      <ROICalculator />
      {/* 8. Testimonials — Sierra-style auto-scrolling marquee */}
      <TestimonialScroll />
      {/* 9. Operator credibility — dark section with real results */}
      <OperatorCredibility />
      {/* 9. Final CTA */}
      <FinalCTASection />
    </main>
  );
}
