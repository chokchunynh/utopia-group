import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, masterclassIndividualSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Masterclass for Individuals — RM299/Session",
  description:
    "Learn Claude Code, ChatGPT, Gemini and more. 8 hands-on sessions. Small groups. Add RM4,000-5,000 to your salary with AI skills.",
  openGraph: {
    title: "AI Masterclass for Individuals — RM299/Session",
    description:
      "Learn Claude Code, ChatGPT, Gemini and more. 8 hands-on sessions. Small groups. Add RM4,000-5,000 to your salary.",
    url: "/masterclass/individual",
  },
  twitter: {
    title: "AI Masterclass for Individuals — RM299/Session",
    description:
      "Learn Claude Code, ChatGPT, Gemini and more. 8 hands-on sessions. Small groups. Add RM4,000-5,000 to your salary.",
  },
};

export default function IndividualMasterclassLayout({
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
          { name: "Individual Training", href: "/masterclass/individual" },
        ])}
      />
      <JsonLd data={masterclassIndividualSchema} />
      {children}
    </>
  );
}
