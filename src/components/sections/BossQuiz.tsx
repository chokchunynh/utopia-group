"use client";

import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/lib/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BOSS_QUIZ_QUESTIONS, BOSS_OS_PRICING } from "@/lib/boss-os";
import { whatsappUrl } from "@/lib/constants";

/* ── Tier mapping ────────────────────────────────────────────── */

const TIER_MAP: Record<number, string> = {
  1: "starter",
  2: "command-center",
  3: "ultra",
};

const TIER_RESULT_KEY: Record<string, TranslationKey> = {
  starter: "boss.quiz.result.starter",
  "command-center": "boss.quiz.result.command",
  ultra: "boss.quiz.result.ultra",
};

function getTierName(tierId: string): string {
  const tier = BOSS_OS_PRICING.find((p) => p.id === tierId);
  return tier?.name ?? tierId;
}

/* ── Staff count text from Q3 answer ─────────────────────────── */

const STAFF_TEXT: Record<number, string> = {
  1: "1-10",
  2: "10-50",
  3: "50+",
};

/* ── Main Component ──────────────────────────────────────────── */

export default function BossQuiz() {
  const { t } = useLanguage();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [slideDir, setSlideDir] = useState<"enter" | "exit">("enter");
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Answer handler ──────────────────────────────────────── */

  const handleAnswer = useCallback(
    (tierSignal: 1 | 2 | 3) => {
      const newAnswers = [...answers, tierSignal];
      setAnswers(newAnswers);

      // Animate out
      setSlideDir("exit");
      setTransitioning(true);

      setTimeout(() => {
        if (currentQuestion >= BOSS_QUIZ_QUESTIONS.length - 1) {
          setShowResult(true);
        } else {
          setCurrentQuestion((prev) => prev + 1);
        }
        // Animate in
        setSlideDir("enter");
        setTimeout(() => setTransitioning(false), 50);
      }, 300);
    },
    [answers, currentQuestion],
  );

  /* ── Calculate result ────────────────────────────────────── */

  const getRecommendedTier = useCallback((): string => {
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
    answers.forEach((a) => {
      counts[a] = (counts[a] || 0) + 1;
    });

    let maxCount = 0;
    let winner = 2; // default tie-breaker
    for (const [tier, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        winner = Number(tier);
      }
    }

    return TIER_MAP[winner] ?? "command-center";
  }, [answers]);

  /* ── Retake ──────────────────────────────────────────────── */

  const handleRetake = useCallback(() => {
    setTransitioning(true);
    setSlideDir("exit");
    setTimeout(() => {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowResult(false);
      setSlideDir("enter");
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  }, []);

  /* ── WhatsApp CTA ────────────────────────────────────────── */

  const buildWhatsAppUrl = useCallback((): string => {
    const tierId = getRecommendedTier();
    const tierName = getTierName(tierId);
    const staffCount = answers[2] ? STAFF_TEXT[answers[2]] : "unknown";
    return whatsappUrl(
      `Hi! I took the Boss OS quiz and got recommended the ${tierName} plan. My company has about ${staffCount} staff.`,
    );
  }, [getRecommendedTier, answers]);

  /* ── Render ──────────────────────────────────────────────── */

  const question = BOSS_QUIZ_QUESTIONS[currentQuestion];
  const recommendedTier = showResult ? getRecommendedTier() : "";

  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-warm-dark)] overflow-hidden">
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 premium-grid opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="heading-display text-[28px] md:text-[40px] text-white">
              {t("boss.quiz.title")}
            </h2>
            <p className="mt-3 text-[16px] md:text-[18px] text-white/60">
              {t("boss.quiz.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Progress dots */}
        {!showResult && (
          <div className="flex items-center justify-center gap-2 mb-8">
            {BOSS_QUIZ_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className="h-2 w-8 rounded-full transition-[transform,opacity] duration-300 origin-center"
                style={{
                  transform: i === currentQuestion ? "scaleX(1)" : "scaleX(0.25)",
                  backgroundColor:
                    i < currentQuestion
                      ? "var(--color-gold)"
                      : i === currentQuestion
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        )}

        {/* Question / Result container */}
        <div ref={containerRef} className="relative min-h-[320px]">
          {!showResult ? (
            /* ── Question UI ────────────────────────────────── */
            <div
              className="transition-[opacity,transform] duration-300"
              style={{
                opacity: transitioning ? 0 : 1,
                transform: transitioning
                  ? slideDir === "exit"
                    ? "translateX(-24px)"
                    : "translateX(24px)"
                  : "translateX(0)",
              }}
            >
              <h3 className="text-[20px] md:text-[24px] font-semibold text-white text-center mb-6">
                {t(question.titleKey as TranslationKey)}
              </h3>

              <div className="flex flex-col gap-3">
                {question.answers.map((answer, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAnswer(answer.tierSignal)}
                    className="w-full min-h-[48px] px-5 py-4 rounded-xl bg-white/[0.08] border border-white/10 text-white text-[15px] text-left transition-[opacity,background-color] duration-200 hover:bg-white/[0.15] active:bg-white/[0.2] cursor-pointer"
                  >
                    {t(answer.textKey as TranslationKey)}
                  </button>
                ))}
              </div>

              {/* Question counter */}
              <p className="mt-6 text-center text-[13px] text-white/30">
                {currentQuestion + 1} / {BOSS_QUIZ_QUESTIONS.length}
              </p>
            </div>
          ) : (
            /* ── Result UI ──────────────────────────────────── */
            <div
              className="transition-[opacity,transform] duration-300"
              style={{
                opacity: transitioning ? 0 : 1,
                transform: transitioning
                  ? "translateX(24px)"
                  : "translateX(0)",
              }}
            >
              <div className="card-warm border-2 border-[var(--color-gold)] rounded-2xl p-6 md:p-8 text-center">
                {/* Tier name */}
                <span className="inline-block text-[12px] font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-2">
                  Recommended Plan
                </span>
                <h3 className="text-[24px] md:text-[30px] font-bold text-[var(--color-warm-text)]">
                  {getTierName(recommendedTier)}
                </h3>

                {/* Result explanation */}
                <p className="mt-4 text-[15px] md:text-[16px] text-[var(--color-warm-text)] opacity-80 leading-relaxed">
                  {t(TIER_RESULT_KEY[recommendedTier])}
                </p>

                {/* WhatsApp CTA */}
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-6 w-full min-h-[48px] px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-[15px] transition-opacity duration-200 hover:opacity-90"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("boss.quiz.cta")}
                </a>
              </div>

              {/* Retake link */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={handleRetake}
                  className="text-[14px] text-white/40 underline underline-offset-4 transition-opacity duration-200 hover:text-white/70 cursor-pointer"
                >
                  {t("boss.quiz.retake")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
