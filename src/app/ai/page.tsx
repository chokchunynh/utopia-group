"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

const AI_WA = whatsappUrl(
  "Hi! I read your AI story and I'm interested in AI implementation for my business."
);

/* ─── Hooks ────────────────────────────────────────────────────── */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/** Returns 0→1 as element scrolls through viewport */
function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const tick = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const start = window.innerHeight;
    const end = -rect.height;
    const p = (start - rect.top) / (start - end);
    setProgress(Math.max(0, Math.min(1, p)));
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, [tick]);
  return { ref, progress };
}

/* ─── Building blocks ──────────────────────────────────────────── */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/** Big bold pull quote — subtle gradient, wipe-in from accent bar */
function PullQuote({
  children,
}: {
  children: ReactNode;
  /** Kept for API compatibility — all pull quotes now use unified styling */
  accent?: boolean;
}) {
  const { ref, visible } = useReveal(0.08);
  return (
    <div ref={ref} className="my-14 md:my-20 relative">
      {/* Accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[#116dff]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: "opacity 0.5s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <p
        className="pl-6 md:pl-8 text-[26px] sm:text-[38px] md:text-[52px] lg:text-[64px] font-black leading-[1.08] tracking-tight"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #116dff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-24px)",
          transition:
            "opacity 0.7s 0.15s, transform 0.8s 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {children}
      </p>
    </div>
  );
}

/** Parallax photo that scales + reveals on scroll */
function ParallaxPhoto({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const { ref, progress } = useScrollProgress();
  const scale = 1.08 - progress * 0.08; // 1.08 → 1.0
  const opacity = Math.min(1, progress * 3); // fade in fast
  return (
    <div
      ref={ref}
      className="relative my-10 md:my-20 w-screen left-1/2 -translate-x-1/2 h-[280px] sm:h-[400px] md:h-[540px] overflow-hidden"
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          transition: "transform 50ms linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
      </div>
      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

/** Photo mosaic strip — 4 photos in a row */
function PhotoStrip({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className="my-10 md:my-20 w-screen left-1/2 -translate-x-1/2 relative overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={i * 0.08}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** Animated counter that counts up when visible */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, visible } = useReveal(0.3);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="text-[17px] md:text-[19px] text-[#4b5563] leading-[1.8] mt-7">
        {children}
      </p>
    </Reveal>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="text-[22px] md:text-[30px] font-bold text-[#0a0a0a] mt-16 mb-2">
        {children}
      </h2>
    </Reveal>
  );
}

/* ─── AI Tool Arsenal ──────────────────────────────────────────── */

type AITool =
  | { name: string; type: "logo"; src: string }
  | { name: string; type: "svg"; icon: ReactNode };

const AI_TOOLS: AITool[] = [
  { name: "Claude Code", type: "logo", src: "/images/ai-logos/anthropic.svg" },
  { name: "ChatGPT", type: "logo", src: "/images/ai-logos/openai.svg" },
  { name: "Gemini", type: "logo", src: "/images/ai-logos/gemini.svg" },
  { name: "Google Stitch", type: "logo", src: "/images/ai-logos/stitch.svg" },
  {
    name: "Grok",
    type: "svg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 md:w-6 md:h-6 fill-white"
        aria-hidden="true"
      >
        <path d="M18.9 1.153h3.27L15.015 9.32l8.404 11.12H16.6L11.265 13.46l-6.105 6.98H1.89l7.635-8.725L1.458 1.153h6.997l4.823 6.38L18.9 1.153zm-1.147 17.314h1.812L7.336 2.982H5.39l12.363 15.485z" />
      </svg>
    ),
  },
  {
    name: "Kling",
    type: "svg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 md:w-6 md:h-6 fill-white"
        aria-hidden="true"
      >
        <path d="M12 2L2 8.5v7L12 22l10-6.5v-7L12 2zm0 2.311l7.584 4.93L12 14.17l-7.584-4.928L12 4.311zm-8 6.39l7 4.55v5.617l-7-4.55v-5.617zm16 0v5.617l-7 4.55v-5.617l7-4.55z" />
      </svg>
    ),
  },
  {
    name: "Midjourney",
    type: "svg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 md:w-6 md:h-6 fill-white"
        aria-hidden="true"
      >
        <path d="M11.935 1.5c-.4 0-.79.032-1.167.09C5.32 2.407 1.5 6.804 1.5 12c0 5.8 4.7 10.5 10.5 10.5S22.5 17.8 22.5 12 17.8 1.5 12 1.5h-.065zM12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5S3.5 16.7 3.5 12 7.3 3.5 12 3.5zm-.5 3.5c-2.485 0-4.5 2.015-4.5 4.5S9.015 16 11.5 16s4.5-2.015 4.5-4.5S13.985 7 11.5 7z" />
      </svg>
    ),
  },
  { name: "Cursor", type: "logo", src: "/images/ai-logos/cursor.svg" },
  { name: "Perplexity", type: "logo", src: "/images/ai-logos/perplexity.svg" },
  { name: "ElevenLabs", type: "logo", src: "/images/ai-logos/elevenlabs.svg" },
  { name: "Suno", type: "logo", src: "/images/ai-logos/suno.svg" },
];

/* ─── Timeline data ────────────────────────────────────────────── */

const TIMELINE_ITEMS = [
  { year: "2022", color: "#6b7280" },
  { year: "2023", color: "#116dff" },
  { year: "2024", color: "#8B5CF6" },
  { year: "NOW", color: "#25D366" },
] as const;

/* ─── Products ─────────────────────────────────────────────────── */

const SHIPPED_KEYS = [
  { name: "SlipMatch", key: "ai.shipped.slipmatch" as const },
  { name: "GetBill", key: "ai.shipped.getbill" as const },
  { name: "RecurPay", key: "ai.shipped.recurpay" as const },
  { name: "Boss OS", key: "ai.shipped.bossos" as const },
  { name: "TrueAI", key: "ai.shipped.trueai" as const },
  { name: "Utopia Payroll", key: "ai.shipped.payroll" as const },
  { name: "AutoViral", key: "ai.shipped.autoviral" as const },
  { name: "Kreativ Studio", key: "ai.shipped.kreativ" as const },
];

/* ═══════════════════════════════════════════════════════════════ */
/*  PAGE                                                          */
/* ═══════════════════════════════════════════════════════════════ */

export default function AIStoryPage() {
  const { t } = useLanguage();
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const tick = () => {
      const top = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(total > 0 ? (top / total) * 100 : 0);
    };
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <>
      {/* ── reading progress ── */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] pointer-events-none bg-[#116dff]"
        style={{
          width: `${readingProgress}%`,
          transition: "width 60ms linear",
        }}
      />

      <main className="overflow-hidden">
        {/* ══════════════ HERO — Dark cinematic ══════════════ */}
        <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/team/staff/masquerade-stage-wide.webp"
              alt="Utopia team"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            {/* Subtle grain */}
            <div className="grain-overlay" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <Reveal>
              <p className="text-[13px] md:text-[15px] font-semibold tracking-[0.25em] uppercase text-white/50 mb-8">
                Utopia Group &middot; Our AI Story
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h1 className="text-[52px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-[0.88] text-white">
                {t("ai.hero.title")
                  .split("\n")
                  .map((line, i) => (
                    <Fragment key={i}>
                      {i > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
              </h1>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="text-[17px] md:text-[21px] text-white/60 max-w-xl mx-auto leading-relaxed mt-8">
                {t("ai.hero.sub")}
              </p>
            </Reveal>
            {/* Scroll indicator */}
            <Reveal delay={0.6}>
              <div className="mt-14 flex flex-col items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">
                  Scroll
                </span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ STATS BANNER — Numbers that count up ══════════════ */}
        <section className="bg-[#0a0a0a] border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: 23, suffix: "", label: "Claude Code Max Plans" },
                { value: 20, suffix: "+", label: "OpenAI Plus Subscriptions" },
                { value: 400, suffix: "+", label: "Staff Building with AI" },
                { value: 35, suffix: "+", label: "Companies Automated" },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div>
                    <div className="text-[36px] md:text-[52px] font-black text-white tracking-tight leading-none">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="text-[12px] md:text-[13px] text-white/40 mt-2 font-medium tracking-wide uppercase">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* AI tool arsenal — real brand logos */}
            <Reveal delay={0.4}>
              <div className="mt-14 pt-10 border-t border-white/[0.06]">
                <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-8">
                  Our AI Arsenal
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 max-w-4xl mx-auto">
                  {AI_TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
                      title={tool.name}
                    >
                      {tool.type === "logo" ? (
                        <Image
                          src={tool.src!}
                          alt={tool.name}
                          width={24}
                          height={24}
                          className="w-5 h-5 md:w-6 md:h-6 object-contain"
                          style={{
                            filter: "brightness(0) invert(1)",
                          }}
                          unoptimized
                        />
                      ) : (
                        tool.icon
                      )}
                      <span className="text-[13px] md:text-[14px] font-semibold text-white whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                  <span className="text-[13px] md:text-[14px] font-medium text-white/30 italic whitespace-nowrap">
                    + many more
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ OPENING ══════════════ */}
        <section className="bg-white px-6 pt-20 md:pt-32 pb-10 md:pb-16">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <p className="text-[22px] md:text-[28px] text-[#0a0a0a] leading-[1.5] font-semibold">
                {t("ai.opening")}
              </p>
            </Reveal>
            <Body>{t("ai.opening2")}</Body>
          </div>
        </section>

        {/* ── photo ── */}
        <ParallaxPhoto
          src="/images/team/staff/team-meeting-presentation.webp"
          alt="Utopia AI building session"
          priority
        />

        {/* ══════════════ STICKY SCROLL TIMELINE ══════════════ */}
        <div className="relative bg-white">
          {/* 2022 ERA */}
          <StickyEra
            year="2022"
            pullQuote={t("ai.pull1")}
            bgImage="/images/team/staff/team-office-moment.webp"
          >
            <Body>{t("ai.2022.p1")}</Body>
            <Body>{t("ai.2022.p2")}</Body>
            <Body>{t("ai.2022.p3")}</Body>
            <Body>{t("ai.2022.p4")}</Body>
          </StickyEra>

          {/* Photo strip after 2022 */}
          <PhotoStrip
            photos={[
              { src: "/images/team/staff/team-office-moment.webp", alt: "Team working" },
              { src: "/images/team/staff/team-lunch-restaurant.webp", alt: "Team lunch" },
              { src: "/images/wix/photo-encik-beku-team-3guys.jpg", alt: "Encik Beku team" },
              { src: "/images/wix/photo-ibnu-sina-showroom.jpg", alt: "Ibnu Sina showroom" },
            ]}
          />

          {/* 2023 ERA */}
          <StickyEra
            year="2023"
            pullQuote={t("ai.pull2")}
            bgImage="/images/team/staff/team-meeting-presentation.webp"
          >
            <Body>{t("ai.2023.p1")}</Body>
            <Body>{t("ai.2023.p2")}</Body>
            <Body>{t("ai.2023.p3")}</Body>
            <SectionHeading>{t("ai.sessions.title")}</SectionHeading>
            <Body>{t("ai.sessions.p1")}</Body>
            <Body>{t("ai.sessions.p2")}</Body>
            <Body>{t("ai.sessions.p3")}</Body>
            <PullQuote>
              {t("ai.pull3").split("\n").map((line, i) => (
                <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>
              ))}
            </PullQuote>
          </StickyEra>

          {/* Parallax photo */}
          <ParallaxPhoto
            src="/images/team/staff/awards-ceremony.webp"
            alt="Utopia awards ceremony"
          />

          {/* 2024 ERA */}
          <StickyEra
            year="2024"
            pullQuote={t("ai.pull4")}
            bgImage="/images/team/staff/group-photo-fun.webp"
          >
            <Body>{t("ai.2024.p1")}</Body>
            <Body>{t("ai.2024.p2")}</Body>
            <Body>{t("ai.2024.p3")}</Body>
            <Body>{t("ai.2024.p4")}</Body>
          </StickyEra>

          {/* Photo strip */}
          <PhotoStrip
            photos={[
              { src: "/images/team/staff/masquerade-stage-costumes.webp", alt: "Masquerade costumes" },
              { src: "/images/team/staff/team-birthday-celebration.webp", alt: "Birthday celebration" },
              { src: "/images/team/staff/team-durian-outing.webp", alt: "Durian outing" },
              { src: "/images/team/staff/team-dinner-banquet.webp", alt: "Team dinner" },
            ]}
          />

          {/* NOW ERA */}
          <StickyEra
            year="NOW"
            pullQuote={t("ai.pull5")}
            bgImage="/images/team/staff/awards-ceremony.webp"
          >
            <Body>{t("ai.now.p1")}</Body>
            <Body>{t("ai.now.p2")}</Body>
            <Body>{t("ai.now.p3")}</Body>
            <Reveal>
              <p className="text-[19px] md:text-[22px] text-[#0a0a0a] leading-[1.6] font-semibold mt-7">
                {t("ai.now.p4")}
              </p>
            </Reveal>
          </StickyEra>
        </div>

        {/* ══════════════ WHAT WE SHIPPED — Dark section ══════════════ */}
        <section className="bg-[#0a0a0a] py-20 md:py-32 px-6 relative overflow-hidden">
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(17,109,255,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
                {t("ai.shipped.title")}
              </p>
              <p className="text-[18px] md:text-[22px] text-white/60 leading-relaxed mb-14">
                {t("ai.shipped.sub")}
              </p>
            </Reveal>

            <div className="space-y-0">
              {SHIPPED_KEYS.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.06}>
                  <div className="flex items-baseline gap-4 py-4 border-b border-white/[0.06] group">
                    <span className="text-[12px] font-bold text-white/20 tabular-nums shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] md:text-[20px] font-bold text-white group-hover:text-[#116dff] transition-colors shrink-0 min-w-[130px] md:min-w-[160px]">
                      {s.name}
                    </span>
                    <span className="text-[15px] md:text-[17px] text-white/40 leading-snug">
                      {t(s.key)}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="text-[18px] md:text-[22px] text-white font-semibold mt-14">
                {t("ai.shipped.allBuilt")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Full team photo ── */}
        <ParallaxPhoto
          src="/images/team/staff/group-photo-fun.webp"
          alt="Utopia Group full team"
        />

        {/* ══════════════ FINAL PHOTO MOSAIC ══════════════ */}
        <section className="bg-white py-10 md:py-16 overflow-hidden">
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-[2px]">
              {[
                "/images/team/staff/masquerade-stage-group.webp",
                "/images/team/staff/company-dinner-crowd.webp",
                "/images/team/staff/team-event-seated.webp",
                "/images/team/staff/masquerade-dinner-crowd.webp",
                "/images/team/staff/team-outing-group.webp",
                "/images/team/staff/company-dinner-buffet.webp",
              ].map((src, i) => (
                <Reveal key={src} delay={i * 0.06}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={src}
                      alt="Utopia team"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      sizes="(max-width:768px) 33vw, 16.6vw"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CTA — Cinematic closing ══════════════ */}
        <section className="relative py-28 md:py-40 px-6 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/team/staff/group-photo-formal.webp"
              alt="Utopia team formal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/80" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <Reveal>
              <p className="text-[28px] md:text-[44px] font-bold text-white leading-tight">
                {t("ai.cta.title")}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link
                  href="/career"
                  className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-semibold rounded-full bg-white text-[#0a0a0a] hover:bg-white/90 transition-colors"
                >
                  {t("ai.cta.buildWithUs")}&ensp;&rarr;
                </Link>
                <a
                  href={AI_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-semibold rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
                >
                  {t("ai.cta.buildForYou")}&ensp;&rarr;
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-[13px] text-white/30 mt-14 tracking-wide uppercase">
                Utopia Group &middot; Kuala Lumpur &middot; 2026
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
/*  STICKY ERA — page-based scroll with sticky year label         */
/* ═══════════════════════════════════════════════════════════════ */

function StickyEra({
  year,
  pullQuote,
  bgImage,
  children,
}: {
  year: string;
  pullQuote: string;
  bgImage?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      {/* Subtle AI gradient backdrop — team photo blurred + faded */}
      {bgImage && (
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-[0.04]">
            <Image
              src={bgImage}
              alt=""
              fill
              className="object-cover blur-2xl"
              sizes="100vw"
            />
          </div>
          {/* Soft blue gradient wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(17,109,255,0.035) 0%, transparent 70%)",
            }}
          />
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-[260px_1fr] gap-10 md:gap-16">
        {/* Sticky year — pinned on the left */}
        <div className="md:sticky md:top-24 md:self-start">
          <div className="flex flex-col md:items-end md:text-right">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9ca3af] mb-3">
              Chapter
            </span>
            <span className="text-[56px] sm:text-[72px] md:text-[88px] font-black leading-[0.85] tracking-tight text-[#116dff] whitespace-nowrap">
              {year}
            </span>
            <div className="h-[2px] w-14 bg-[#116dff] mt-6" />
          </div>
        </div>

        {/* Content column */}
        <div className="min-w-0 max-w-2xl">
          {children}

          {/* Pull quote closes each era */}
          <PullQuote accent>
            {pullQuote.split("\n").map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </PullQuote>
        </div>
      </div>
    </section>
  );
}
