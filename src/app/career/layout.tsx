import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Career at Utopia Group — Join Malaysia's AI Leaders",
  description:
    "Join 400+ people building AI across 35+ companies. Open roles in engineering, sales, marketing, design and ops. Apply via WhatsApp.",
  openGraph: {
    title: "Career at Utopia Group — Join Malaysia's AI Leaders",
    description:
      "Join 400+ people building AI across 35+ companies. Open roles in engineering, sales, marketing, design and ops.",
    url: "/career",
  },
  twitter: {
    title: "Career at Utopia Group — Join Malaysia's AI Leaders",
    description:
      "Join 400+ people building AI across 35+ companies. Open roles in engineering, sales, marketing, design and ops.",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Careers", href: "/career" },
        ])}
      />
      {children}
    </>
  );
}
