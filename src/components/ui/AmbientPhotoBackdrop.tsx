"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type AmbientPhoto = {
  /** Image URL (served from /public) */
  src: string;
  /**
   * CSS selector (or anchor id like "#kedai-kopi-ah-seng") of the element
   * whose viewport prominence activates this photo. If omitted, index alone
   * is used (manual driver via `activeIndex` prop).
   */
  targetSelector?: string;
};

type AmbientPhotoBackdropProps = {
  photos: AmbientPhoto[];
  /** Optional manual override (if provided, observers are ignored). */
  activeIndex?: number;
  className?: string;
};

/**
 * Scroll-linked ambient backdrop: cross-fades between heavily blurred,
 * darkened photos based on which target element is most visible in the
 * viewport. Positioned absolutely inside a relative parent; wraps content
 * with a light gradient overlay so foreground legibility is preserved.
 *
 * Mobile (<768px): CSS media query forces the first image to a gentler
 * baseline opacity (no JS changes needed).
 */
export default function AmbientPhotoBackdrop({
  photos,
  activeIndex: manualIndex,
  className,
}: AmbientPhotoBackdropProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ratiosRef = useRef<number[]>(photos.map(() => 0));

  useEffect(() => {
    if (typeof manualIndex === "number") return;
    if (typeof window === "undefined") return;

    const elements: (Element | null)[] = photos.map((p) =>
      p.targetSelector ? document.querySelector(p.targetSelector) : null
    );

    // If no selectors provided, nothing to observe.
    if (elements.every((el) => el == null)) return;

    const observers: IntersectionObserver[] = [];

    elements.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            ratiosRef.current[idx] = entry.intersectionRatio;
          }
          // Pick the most visible target.
          let best = 0;
          let bestRatio = -1;
          ratiosRef.current.forEach((r, i) => {
            if (r > bestRatio) {
              bestRatio = r;
              best = i;
            }
          });
          setActiveIndex((prev) => (prev === best ? prev : best));
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [photos, manualIndex]);

  const current = typeof manualIndex === "number" ? manualIndex : activeIndex;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        className ?? ""
      }`}
    >
      {/* Backdrop photos — cross-fade via opacity */}
      {photos.map((p, i) => {
        const isActive = i === current;
        const isFirst = i === 0;
        return (
          <div
            key={p.src}
            className={[
              "absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none",
              isActive ? "opacity-50" : "opacity-0",
              // Mobile fallback: ensure the first image stays at a gentle
              // baseline so the section isn't fully "bg-white" on phones.
              isFirst ? "ambient-mobile-baseline" : "",
            ].join(" ")}
          >
            <Image
              src={p.src}
              alt=""
              fill
              priority={false}
              loading={isFirst ? "eager" : "lazy"}
              sizes="100vw"
              quality={60}
              className="object-cover blur-3xl scale-110"
            />
          </div>
        );
      })}

      {/* Legibility overlay — darken/tone using the soft bg so content pops. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-soft)]/85 via-[var(--color-bg-soft)]/75 to-[var(--color-bg-soft)]/90" />

      <style jsx>{`
        @media (max-width: 767px) {
          :global(.ambient-mobile-baseline) {
            opacity: 0.3 !important;
          }
        }
      `}</style>
    </div>
  );
}
