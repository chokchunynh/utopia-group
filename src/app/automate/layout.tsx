import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Tools — 8+ Live Products Powering 35+ Companies",
  description:
    "Explore our AI tools: SlipMatch, GetBill, RecurPay, TrueAI, AutoViral, and more. Built by business owners, used daily across 35+ companies.",
  openGraph: {
    title: "AI Tools — 8+ Live Products Powering 35+ Companies",
    description:
      "Explore our AI tools: SlipMatch, GetBill, RecurPay, TrueAI, AutoViral, and more.",
    url: "https://utopiagroup.com.my/automate",
  },
};

export default function AutomateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "AI Tools", href: "/automate" },
        ])}
      />
      {children}
    </>
  );
}
