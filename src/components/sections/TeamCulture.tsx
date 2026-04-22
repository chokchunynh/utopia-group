"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Users } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const PHOTOS = [
  { src: "/images/team/staff/group-photo-fun.webp", alt: "Utopia Group team fun group photo" },
  { src: "/images/team/staff/masquerade-stage-group.webp", alt: "Utopia Masquerade Night — team on stage" },
  { src: "/images/team/staff/awards-ceremony.webp", alt: "Staff award ceremony" },
  { src: "/images/team/staff/team-dinner-banquet.webp", alt: "Team dinner at banquet hall" },
  { src: "/images/team/staff/team-birthday-celebration.webp", alt: "Team birthday celebration" },
  { src: "/images/team/staff/team-durian-outing.webp", alt: "Team durian outing" },
];

export default function TeamCulture() {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-white">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="pill mb-4 inline-block">{t("home.team.pill")}</span>
            <h2 className="heading-lg text-[28px] md:text-[40px] mb-4">
              {t("home.team.title")}{" "}
              <span className="gradient-text font-extrabold">{t("home.team.title2")}</span>
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-lg mx-auto text-[15px]">
              {t("home.team.sub")}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {PHOTOS.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 60}>
              <div className="team-photo aspect-[4/3] border border-[var(--color-border)] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={375}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/about#team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-bg-muted)] text-[var(--color-text-primary)] font-semibold text-[14px] hover:shadow-md transition-shadow"
            >
              <Users className="w-4 h-4" />
              {t("home.team.meetTeam")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/career"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] font-semibold text-[14px] hover:shadow-md transition-shadow"
            >
              {t("home.team.viewPositions")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
