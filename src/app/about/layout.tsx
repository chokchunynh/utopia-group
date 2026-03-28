import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Utopia Group — 35+ Companies, 173 Business Units",
  description:
    "From operators to AI builders. We run 35+ companies with 400+ staff across Malaysia. RM130M+ group revenue. See our story.",
  openGraph: {
    title: "About Utopia Group — 35+ Companies, 173 Business Units",
    description:
      "From operators to AI builders. We run 35+ companies with 400+ staff across Malaysia. RM130M+ group revenue.",
    url: "/about",
  },
  twitter: {
    title: "About Utopia Group — 35+ Companies, 173 Business Units",
    description:
      "From operators to AI builders. We run 35+ companies with 400+ staff across Malaysia. RM130M+ group revenue.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      {children}
    </>
  );
}
