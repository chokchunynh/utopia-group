import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Implementation Pricing — Start Free, Scale Up",
  description:
    "Transparent AI pricing. Free tools to start. Setup from RM12,000. Monthly from RM3,000. No hidden fees. 30-day money-back guarantee.",
  openGraph: {
    title: "AI Implementation Pricing — Start Free, Scale Up",
    description:
      "Transparent AI pricing. Free tools to start. Setup from RM12,000. Monthly from RM3,000. No hidden fees.",
    url: "/how-we-charge",
  },
  twitter: {
    title: "AI Implementation Pricing — Start Free, Scale Up",
    description:
      "Transparent AI pricing. Free tools to start. Setup from RM12,000. Monthly from RM3,000. No hidden fees.",
  },
};

export default function HowWeChargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "How We Charge", href: "/how-we-charge" },
        ])}
      />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
