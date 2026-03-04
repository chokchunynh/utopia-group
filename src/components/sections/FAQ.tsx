"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

function FAQItem({ item, isOpen, onToggle }: {
  item: (typeof FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`glass-card overflow-hidden ${isOpen ? "faq-open" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-heading font-bold text-text-primary text-sm md:text-base pr-4">
          {item.question}
        </span>
        <svg
          className="faq-chevron w-5 h-5 text-text-muted shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="faq-answer">
        <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-base relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent-violet/10 border border-accent-violet/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-accent-violet text-sm font-medium">FAQ</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-[800] text-text-primary">
              Common Questions About<br />
              <span className="gradient-text">AI Implementation</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
