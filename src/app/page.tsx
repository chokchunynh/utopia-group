import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProofBar from "@/components/sections/ProofBar";
import TrueAISection from "@/components/sections/TrueAISection";
import WeUseItSection from "@/components/sections/WeUseItSection";
import MidFunnelCTA from "@/components/sections/MidFunnelCTA";
import DepartmentReveal from "@/components/sections/DepartmentReveal";
import ROICalculator from "@/components/sections/ROICalculator";
import TestimonialScroll from "@/components/sections/TestimonialScroll";
import OperatorCredibility from "@/components/sections/OperatorCredibility";
import Link from "next/link";
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
      {/* 5. Mid-funnel CTA — gradient band */}
      <MidFunnelCTA />
      {/* 6. Departments — areas of AI improvement */}
      <DepartmentReveal />
      {/* 7. ROI calculator */}
      <ROICalculator />
      {/* 8. Testimonials — Sierra-style auto-scrolling marquee */}
      <TestimonialScroll />
      {/* 9. Operator credibility — dark section with real results */}
      <OperatorCredibility />
      {/* 9. How We Charge CTA */}
      <section className="section-padding bg-[var(--color-bg-soft)]">
        <div className="section-inner text-center">
          <h2 className="heading-lg text-[24px] md:text-[32px] mb-3">
            Transparent pricing.{" "}
            <span className="gradient-text font-extrabold">No hidden fees.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] mb-6 max-w-md mx-auto text-[15px]">
            Start free. Setup from RM12,000. Monthly from RM3,000. We show you
            everything upfront.
          </p>
          <Link href="/how-we-charge" className="btn-primary">
            See How We Charge
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      {/* 10. Final CTA — gradient band with dashed grid */}
      <FinalCTASection />
    </main>
  );
}
