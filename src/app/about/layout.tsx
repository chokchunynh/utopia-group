import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — Utopia Group | Malaysia's Frontier Company",
  description:
    "From digital marketing dominance to AI-powered operations. 35+ companies, 400+ staff, 27 partners built from within. We don't wait for the future — we build it.",
  openGraph: {
    title: "About Us — Utopia Group | Malaysia's Frontier Company",
    description:
      "From digital marketing dominance to AI-powered operations. 35+ companies, 400+ staff, 27 partners built from within.",
    url: "/about",
  },
  twitter: {
    title: "About Us — Utopia Group | Malaysia's Frontier Company",
    description:
      "From digital marketing dominance to AI-powered operations. 35+ companies, 400+ staff, 27 partners built from within.",
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
          { name: "About Us", href: "/about" },
        ])}
      />
      {children}
    </>
  );
}
