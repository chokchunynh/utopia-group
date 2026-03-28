import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, masterclassCompanySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Masterclass for Companies — On-Site Training",
  description:
    "AI training from operators who saved RM3M+ across 35+ companies. Half-day crash course or 2-week full program. On-site at your office.",
  openGraph: {
    title: "AI Masterclass for Companies — On-Site Training",
    description:
      "AI training from operators who saved RM3M+ across 35+ companies. Half-day crash course or 2-week full program.",
    url: "/masterclass",
  },
  twitter: {
    title: "AI Masterclass for Companies — On-Site Training",
    description:
      "AI training from operators who saved RM3M+ across 35+ companies. Half-day crash course or 2-week full program.",
  },
};

export default function MasterclassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "AI Masterclass", href: "/masterclass" },
        ])}
      />
      <JsonLd data={masterclassCompanySchema} />
      {children}
    </>
  );
}
