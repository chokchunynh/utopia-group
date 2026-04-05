import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { masterclassCompanySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Masterclass for Companies — On-Site Training",
  description:
    "AI training from operators who saved RM3M+ across 35+ companies. Full-day intensive (RM12,000) or 4-week transformation (RM32,000). Up to 8 people per session.",
  openGraph: {
    title: "AI Masterclass for Companies — On-Site Training",
    description:
      "AI training from operators who saved RM3M+ across 35+ companies. Full-day intensive or 4-week transformation program.",
    url: "/masterclass/company",
  },
  twitter: {
    title: "AI Masterclass for Companies — On-Site Training",
    description:
      "AI training from operators who saved RM3M+ across 35+ companies. Full-day intensive or 4-week transformation program.",
  },
};

export default function CompanyMasterclassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={masterclassCompanySchema} />
      {children}
    </>
  );
}
