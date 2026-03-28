"use client";

import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  TRUEAI_FEATURES,
  TRUEAI_DEMO_CHAT,
  whatsappUrl,
} from "@/lib/constants";
import { Zap, ToggleRight, Server, Brain, ArrowRight, Image as ImageIcon } from "lucide-react";

const FEATURE_ICONS = [Zap, ToggleRight, Server, Brain];

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;
  return <>{displayed}</>;
}

export default function TrueAISection() {
  const [showDemo, setShowDemo] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showDemo) return;
    let i = 0;
    const delays = [0, 1500, 4000, 5500, 8000, 9500];
    const timers: ReturnType<typeof setTimeout>[] = [];

    delays.forEach((delay, idx) => {
      timers.push(
        setTimeout(() => {
          setVisibleMessages(idx + 1);
          if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
          }
        }, delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [showDemo]);

  return (
    <section id="trueai" className="bg-[#0f1729]">
      <div className="section-padding !py-16 md:!py-24">
        <div className="section-inner">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white/10 text-white/90 border border-white/10 mb-4">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                Our Flagship Product
              </span>
              <h2 className="text-[28px] md:text-[44px] font-bold tracking-tight leading-tight text-white mb-4">
                TrueAI — Your 24/7{" "}
                <span className="gradient-text-hero font-extrabold">
                  AI Sales Agent
                </span>
              </h2>
              <p className="text-[#94a3b8] max-w-2xl mx-auto text-[15px] leading-relaxed">
                Not a chatbot with canned responses. A fully autonomous AI that
                learns your business, handles WhatsApp conversations, sends
                photos, and closes deals while you sleep.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Features */}
              <ScrollReveal>
                <div className="space-y-6">
                  {TRUEAI_FEATURES.map((feature, i) => {
                    const Icon = FEATURE_ICONS[i];
                    return (
                      <div key={feature.title} className="flex gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[var(--color-brand-light)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-[#94a3b8] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>

              {/* Live demo — WhatsApp mockup with typing animation */}
              <ScrollReveal delay={200}>
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* WhatsApp header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[var(--color-whatsapp)] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          Daikin Aircond KL
                        </p>
                        <p className="text-white/60 text-xs">
                          Powered by TrueAI
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-whatsapp)] animate-pulse" />
                      <span className="text-white/80 text-xs">AI Active</span>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div
                    ref={chatRef}
                    className="bg-[#ECE5DD] p-4 space-y-3 min-h-[360px] max-h-[420px] overflow-y-auto"
                  >
                    {!showDemo ? (
                      <div className="flex flex-col items-center justify-center h-[320px] text-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--color-whatsapp)]/20 flex items-center justify-center mb-4">
                          <Zap className="w-8 h-8 text-[var(--color-whatsapp)]" />
                        </div>
                        <p className="text-sm text-gray-600 mb-1 font-medium">
                          Real conversation from Daikin Aircond KL
                        </p>
                        <p className="text-xs text-gray-400 mb-5">
                          Watch TrueAI handle a customer enquiry in real-time
                        </p>
                        <button
                          type="button"
                          onClick={() => setShowDemo(true)}
                          className="btn-primary !text-sm !bg-[var(--color-whatsapp)]"
                        >
                          ▶ Play Demo
                        </button>
                      </div>
                    ) : (
                      <>
                        {TRUEAI_DEMO_CHAT.map((msg, i) => {
                          if (i >= visibleMessages) return null;

                          const isImage = msg.type === "image";
                          const cumulativeDelay =
                            i === 0
                              ? 0
                              : [0, 1500, 4000, 5500, 8000, 9500][i] || 0;

                          return (
                            <div
                              key={i}
                              className={`flex ${msg.from === "customer" ? "justify-start" : "justify-end"}`}
                            >
                              <div
                                className={`rounded-2xl px-3 py-2 max-w-[85%] shadow-sm ${
                                  msg.from === "customer"
                                    ? "bg-white rounded-tl-sm"
                                    : "bg-[#DCF8C6] rounded-tr-sm"
                                }`}
                              >
                                {msg.from === "ai" && (
                                  <span className="text-[10px] font-bold text-[var(--color-brand)] block mb-0.5">
                                    TrueAI
                                  </span>
                                )}
                                {isImage ? (
                                  <div className="bg-gray-100 rounded-xl p-4 mb-1 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center shrink-0">
                                      <ImageIcon className="w-6 h-6 text-[var(--color-brand)]" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-medium text-gray-700">
                                        Ahmad R. — Lead Technician
                                      </p>
                                      <p className="text-[10px] text-gray-400">
                                        ⭐ 4.9 rating · 200+ jobs
                                      </p>
                                    </div>
                                  </div>
                                ) : null}
                                <p className="text-sm">
                                  <TypingText
                                    text={msg.text}
                                    delay={100}
                                  />
                                </p>
                                <span className="text-[10px] text-gray-400 float-right mt-1">
                                  {msg.time}
                                </span>
                              </div>
                            </div>
                          );
                        })}

                        {visibleMessages >= TRUEAI_DEMO_CHAT.length && (
                          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 mt-2">
                            <p className="text-xs text-[var(--color-brand)] font-medium">
                              ⚡ Replied in 3 seconds. Booked the appointment.
                              Upsold leak inspection. Sent technician profile
                              with photo. Your sales team was asleep.
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* CTA below demo */}
                  <div className="p-4 bg-white border-t border-gray-200">
                    <a
                      href={whatsappUrl(
                        "Hi! I want to see TrueAI for my business. How do I get started?"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full !text-sm"
                    >
                      Get TrueAI for Your Business
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
