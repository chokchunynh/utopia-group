import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Results — Real AI Impact Across 35+ Companies",
  description:
    "See real results from our AI implementation across 35+ companies. 70% earnings improvement, RM3M+ saved. Measured, not estimated.",
  openGraph: {
    title: "Our Results — Real AI Impact Across 35+ Companies",
    description:
      "See real results from our AI implementation across 35+ companies. 70% earnings improvement, RM3M+ saved.",
    url: "/results",
  },
  twitter: {
    title: "Our Results — Real AI Impact Across 35+ Companies",
    description:
      "See real results from our AI implementation across 35+ companies. 70% earnings improvement, RM3M+ saved.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="heading-lg text-3xl mb-4">Coming Soon</h1>
        <p className="text-[var(--color-text-muted)] mb-6">This page is being rebuilt.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          WhatsApp Us
        </a>
      </div>
    </main>
  );
}
