import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Utopia Group — WhatsApp Us",
  description:
    "Get in touch with Utopia Group. WhatsApp us for AI implementation, masterclass bookings, or partnerships. We reply within 24 hours.",
  openGraph: {
    title: "Contact Utopia Group — WhatsApp Us",
    description:
      "Get in touch with Utopia Group. WhatsApp us for AI implementation, masterclass bookings, or partnerships.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Utopia Group — WhatsApp Us",
    description:
      "Get in touch with Utopia Group. WhatsApp us for AI implementation, masterclass bookings, or partnerships.",
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
