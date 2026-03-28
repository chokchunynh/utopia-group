"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseTarget(target: string): {
  numeric: number;
  prefix: string;
  suffix: string;
} {
  const match = target.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: target };
  return {
    prefix: match[1],
    numeric: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const { numeric, prefix, suffix } = parseTarget(value);
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numeric);

            if (progress < 1) {
              setDisplay(
                `${prefix}${current >= 1000 ? current.toLocaleString() : current}${suffix}`
              );
              requestAnimationFrame(animate);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
