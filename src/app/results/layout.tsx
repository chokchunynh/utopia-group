import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Results — Real AI Impact Across 35+ Companies",
  description:
    "See real results from Utopia Group's AI implementation. Co-living +800% growth, healthcare RM1.3M in 6 months, scaffolding RM450K/month from zero.",
  openGraph: {
    title: "AI Implementation Results | Utopia Group",
    description:
      "Real results from real businesses. Not client testimonials — our own companies powered by AI.",
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Results", href: "/results" },
        ])}
      />
      {children}
    </>
  );
}
