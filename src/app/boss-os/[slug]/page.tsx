import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRY_PAGES } from "@/lib/boss-os";
import IndustryPageClient from "./IndustryPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRY_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = INDUSTRY_PAGES.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: `${page.headline} | Utopia Group`,
    description: page.subtitle,
    openGraph: {
      title: page.headline,
      description: page.subtitle,
      url: `/boss-os/${page.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const page = INDUSTRY_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  return <IndustryPageClient page={page} />;
}
