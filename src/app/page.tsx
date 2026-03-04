import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import MobileCTABar from "@/components/layout/MobileCTABar";
import Hero from "@/components/sections/Hero";
import CredibilityBar from "@/components/sections/CredibilityBar";
import TheProblem from "@/components/sections/TheProblem";
import OurApproach from "@/components/sections/OurApproach";
import ServiceCategories from "@/components/sections/ServiceCategories";
import AIShowcase from "@/components/sections/AIShowcase";
import Pricing from "@/components/sections/Pricing";
import WhyUtopia from "@/components/sections/WhyUtopia";
import SocialProof from "@/components/sections/SocialProof";
import LeadMagnet from "@/components/sections/LeadMagnet";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <TheProblem />
        <OurApproach />
        <ServiceCategories />
        <AIShowcase />
        <Pricing />
        <WhyUtopia />
        <SocialProof />
        <LeadMagnet />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
      <MobileCTABar />
    </>
  );
}
