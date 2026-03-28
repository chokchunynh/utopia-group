"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  TRUEAI_FEATURES,
  whatsappUrl,
} from "@/lib/constants";
import Image from "next/image";
import { Zap, ToggleRight, Server, Brain, ArrowRight } from "lucide-react";

const FEATURE_ICONS = [Zap, ToggleRight, Server, Brain];

const CHAT_MESSAGES = [
  { from: "customer", text: "Hi, I saw your ad for aircon servicing. How much for 5 units?", time: "9:14 AM" },
  { from: "ai", text: "Hi! For 5 units, full servicing is RM80/unit = RM400 total. Includes gas top-up, filter cleaning, and drainage check. Our earliest slot is tomorrow at 10am — want me to book it?", time: "9:14 AM" },
  { from: "customer", text: "That's fast! Yes, 10am works. Can you also check one unit that's leaking?", time: "9:15 AM" },
  { from: "ai", text: "Booked! Tomorrow 10am, 5 units service + 1 leak inspection. For the leak, our technician will diagnose on-site — if it's a drainage issue, it's included free.", time: "9:15 AM" },
  { from: "ai", text: "Here's your assigned technician — Ahmad from our KL team. He'll arrive between 9:45-10am.", time: "9:16 AM", showTech: true },
  { from: "ai", text: "I've sent a confirmation SMS to your number. Anything else I can help with?", time: "9:16 AM" },
  { from: "customer", text: "Thanks for the fast reply! See you tomorrow 👍", time: "9:17 AM" },
];

export default function TrueAISection() {
  const [showDemo, setShowDemo] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (!showDemo) return;
    const delays = [0, 800, 2000, 3000, 4200, 5400, 6600];
    const timers: ReturnType<typeof setTimeout>[] = [];

    delays.forEach((delay, idx) => {
      timers.push(
        setTimeout(() => setVisibleMessages(idx + 1), delay)
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

              {/* WhatsApp demo — bubble animation, all fits in one view */}
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
                          Encik Beku Aircond
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

                  {/* Chat area — fixed height, no scroll */}
                  <div className="bg-[#ECE5DD] p-3 space-y-2">
                    {!showDemo ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-whatsapp)]/20 flex items-center justify-center mb-4">
                          <Zap className="w-7 h-7 text-[var(--color-whatsapp)]" />
                        </div>
                        <p className="text-sm text-gray-600 mb-1 font-medium">
                          Real conversation from Encik Beku Aircond
                        </p>
                        <p className="text-xs text-gray-400 mb-5">
                          Watch TrueAI handle a customer enquiry
                        </p>
                        <button
                          type="button"
                          onClick={() => setShowDemo(true)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-[var(--color-whatsapp)] text-white"
                        >
                          ▶ Play Demo
                        </button>
                      </div>
                    ) : (
                      <>
                        {CHAT_MESSAGES.map((msg, i) => {
                          if (i >= visibleMessages) return null;

                          return (
                            <div
                              key={i}
                              className={`flex ${msg.from === "customer" ? "justify-start" : "justify-end"}`}
                              style={{ opacity: 0, animation: "bubble-in 0.3s ease-out forwards" }}
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
                                {/* Technician card */}
                                {"showTech" in msg && msg.showTech && (
                                  <div className="bg-gray-50 rounded-xl p-3 mb-1.5 flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-full shrink-0 overflow-hidden">
                                      <Image src="/images/photos/technician-ahmad.webp" alt="Ahmad R." width={44} height={44} className="w-full h-full object-cover" unoptimized />
                                    </div>
                                    <div>
                                      <p className="text-xs font-semibold text-gray-800">
                                        Ahmad R.
                                      </p>
                                      <p className="text-[10px] text-gray-500">
                                        Lead Technician · KL Team
                                      </p>
                                    </div>
                                  </div>
                                )}
                                <p className="text-[13px] leading-relaxed">
                                  {msg.text}
                                </p>
                                <span className="text-[10px] text-gray-400 float-right mt-0.5 ml-2">
                                  {msg.time}
                                </span>
                              </div>
                            </div>
                          );
                        })}

                        {visibleMessages >= CHAT_MESSAGES.length && (
                          <div
                            className="bg-blue-50 border border-blue-200 rounded-2xl p-2.5 mt-1"
                            style={{ opacity: 0, animation: "bubble-in 0.3s ease-out 0.3s forwards" }}
                          >
                            <p className="text-[11px] text-[var(--color-brand)] font-medium">
                              ⚡ Replied in 3 seconds. Booked the appointment.
                              Upsold leak inspection. Sent technician profile.
                              Your sales team was asleep.
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* CTA below demo */}
                  <div className="p-3 bg-white border-t border-gray-200">
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

      {/* Bubble animation keyframe */}
      <style>{`
        @keyframes bubble-in {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
