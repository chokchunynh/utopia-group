import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Masterclass — Training for Companies & Individuals",
  description:
    "AI training from operators who saved RM3M+ across 35+ companies. Programs for corporate teams and individual professionals.",
  openGraph: {
    title: "AI Masterclass — Training for Companies & Individuals",
    description:
      "AI training from operators who saved RM3M+ across 35+ companies. Programs for corporate teams and individual professionals.",
    url: "/masterclass",
  },
  twitter: {
    title: "AI Masterclass — Training for Companies & Individuals",
    description:
      "AI training from operators who saved RM3M+ across 35+ companies. Programs for corporate teams and individual professionals.",
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
      {children}
    </>
  );
}
