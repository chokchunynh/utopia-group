import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Utopia Group. WhatsApp us at +60146869468 or email devteam.utopia@gmail.com. Office: Sunway Putra Tower, Kuala Lumpur.",
  openGraph: {
    title: "Contact Utopia Group — WhatsApp, Email, Visit",
    description:
      "Reach Utopia Group via WhatsApp, email, or visit our office at Sunway Putra Tower, KL. We respond within 24 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
