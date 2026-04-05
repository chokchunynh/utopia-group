"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ─── Types ──────────────────────────────────────────────────────
type WidgetState = "idle" | "connecting" | "listening" | "ai-speaking" | "error";
type EndReason = "user" | "silence_timeout" | "max_duration" | "error";

// ─── Page context mapping ──────────────────────────────────────
const PAGE_CONTEXT: Record<string, string> = {
  "/": "They're on the Homepage — they're browsing generally. Ask what brought them here.",
  "/how-we-charge":
    "They're on the Pricing page — they're comparing costs. Lead with ROI and value, not just prices.",
  "/automate":
    "They're on the AI Tools page — they're interested in specific tools. Ask which department they want to improve.",
  "/masterclass":
    "They're on the AI Masterclass page — they might be a student or want team training. Ask which one.",
  "/masterclass/individual":
    "They're on the Individual Masterclass page — likely a student or self-learner. Pitch the career advantage.",
  "/about":
    "They're on the About page — they want to know who we are. Emphasize the 35+ companies, 400+ staff, operator credibility.",
  "/contact":
    "They're on the Contact page — they're ready to reach out. Be direct, offer to connect them with the team.",
  "/career":
    "They're on the Career page — they might want to work with us. Talk about our AI-first culture.",
  "/team":
    "They're on the Team page — they're checking out who's behind the company.",
};

// ─── Smart greeting ────────────────────────────────────────────
function getSmartGreeting(): string {
  const formatter = new Intl.DateTimeFormat("en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    weekday: "long",
    hour: "numeric",
    hour12: false,
  });
  const parts = formatter.formatToParts(new Date());
  const day = parts.find((p) => p.type === "weekday")?.value ?? "day";
  const hour = parseInt(
    parts.find((p) => p.type === "hour")?.value ?? "12",
    10
  );

  let timeOfDay = "Morning";
  if (hour >= 12 && hour < 17) timeOfDay = "Afternoon";
  else if (hour >= 17 && hour < 21) timeOfDay = "Evening";
  else if (hour >= 21 || hour < 5) timeOfDay = "Night";

  return `Happy ${day} ${timeOfDay}`;
}

// ─── System prompt builder ─────────────────────────────────────
function buildSystemPrompt(pagePath: string, greeting: string): string {
  const pageHint =
    PAGE_CONTEXT[pagePath] ||
    "They're browsing the website. Ask what brought them here.";

  return `You are Utopia AI, a consultative sales assistant on utopiagroup.com.my — Malaysia's #1 AI Implementation Partner. Your job is to SELL by being genuinely helpful, not to dump people to WhatsApp.

== YOUR KNOWLEDGE ==
- Utopia Group operates 35+ companies with 400+ staff. We built AI for ourselves first — improving our earnings by 70%. Now we implement it for other businesses.
- Services: AI implementation from RM3,000/month (setup from RM12,000). Full 6-month All-In implementation from RM68,000. Free tools to try first, no credit card.
- Products: TrueAI (WhatsApp AI sales agent — replies to customers 24/7, closes deals), SlipMatch (AI bank reconciliation — 3 minutes not 3 hours), GetBill (auto utility bill extraction), AutoViral (AI social media — one click for a month of content), U-Stay (tenant management), RecurPay (collection tracking), Utopia Payroll (GPS attendance + auto salary).
- AI Masterclass: company training (on-site) and individual training (RM299/session × 8 sessions, weekly, 2 hours each). Great for students and professionals.
- Industries we serve: co-living, healthcare, scaffolding, home services, property management, F&B, retail, logistics — basically any Malaysian business.
- WhatsApp number: 0-1-4-6-8-6-9-4-6-8. Always READ this out digit by digit when sharing.

== PAGE CONTEXT ==
${pageHint}
Use this to tailor your conversation — if they're on the pricing page, you know they care about cost. If they're on the tools page, they want specifics.

== SALES APPROACH ==
- DO NOT immediately redirect to WhatsApp. That's lazy. Your job is to engage, educate, and excite them first.
- When someone asks what you do, EXPLAIN with examples: "We put AI into your business operations. For example, if you run a service company, our TrueAI can handle all your WhatsApp enquiries 24/7 — quoting prices, booking appointments, even sending photos. Your sales team can sleep, the AI keeps selling."
- ALWAYS ask a follow-up question to understand their situation: "What kind of business do you run?" / "What's taking up most of your team's time right now?" / "Are you a student or running a company?"
- For STUDENTS: "Even as a student, learning how AI works gives you a huge edge. Our AI Masterclass is RM299 per session, 8 sessions total. You'll learn to build and use AI tools that companies are paying us thousands for."
- For BUSINESS OWNERS: Paint the picture of how AI saves them money. "Most SMEs save around RM180K a year with AI. Think about it — no more manual data entry, no missed customer messages, your accounting done in minutes instead of hours."
- Give SPECIFIC examples based on what they tell you: if they mention sales → TrueAI, accounting → SlipMatch, HR → Utopia Payroll, marketing → AutoViral.
- Keep building interest before mentioning WhatsApp. Only after 2-3 exchanges, when they seem genuinely interested, then say: "If you want, I can connect you with our team. Just WhatsApp us at 0-1-4-6-8-6-9-4-6-8 and they'll set up a free consultation."

== BEFORE ENDING ==
- If the conversation has been going well and they seem interested, before wrapping up say: "Hey, would you like our team to follow up with you? Just tell me your name and WhatsApp number, and someone from our team will reach out."
- If they give their name and number, REPEAT the number back to confirm: "So that's [name], and your WhatsApp is [number] — got it! Our team will message you soon. Thanks for chatting!"
- If they only give their name, ask: "And what's the best WhatsApp number to reach you on?"

== WHATSAPP RULE ==
- NEVER say "click the WhatsApp button" — the user is talking to you by voice, they can't click anything.
- When sharing the WhatsApp number, ALWAYS read it out slowly: "zero one four, six eight six nine, four six eight."
- Only bring up WhatsApp AFTER you've actually helped them understand what we do and how it helps their specific situation.

== VOICE & TONE ==
- Warm, friendly, Malaysian. Casual but confident — like a friend who happens to be an AI expert.
- Match the user's language: English → English. BM → BM. Mandarin → Mandarin.
- Keep each response to 2-3 sentences. Always end with a question to keep the conversation going.
- Sound excited about AI — you genuinely believe it can help their business.

== CRITICAL: MALAYSIAN MALAY, NOT INDONESIAN ==
When speaking Bahasa Malaysia, you MUST use Malaysian vocabulary and style, NOT Indonesian:
- Say "kereta" NOT "mobil" (car)
- Say "pejabat" NOT "kantor" (office)
- Say "telefon" NOT "telepon" (phone)
- Say "awak" or "you" NOT "anda" or "kamu" (you — Malaysians mix English freely)
- Say "tak" or "tak boleh" NOT "tidak bisa" (cannot)
- Say "macam mana" NOT "bagaimana" (how)
- Say "dekat" or "kat" NOT "di" for location ("kat office" not "di kantor")
- Say "duit" NOT "uang" (money)
- Say "cakap" NOT "bicara" (speak/talk)
- Say "hantar" NOT "kirim" (send)
- Say "boleh" freely — it's very Malaysian
- Mix English words naturally like Malaysians do: "So basically kita boleh implement AI dalam business awak"
- Use particles: "lah", "kan", "ya", "je", "tau"
- Malaysian BM sounds casual and mixes English. Indonesian sounds formal and pure. Be MALAYSIAN.

== MANDARIN STYLE ==
When speaking Mandarin, use Malaysian Chinese casual style:
- 哦可以的, 没问题啊, 对啊 — casual acknowledgments
- Mix English terms naturally: "AI implementation", "WhatsApp" — don't translate tech terms
- Sound like a Malaysian Chinese colleague, not a China news anchor

== GREETING ==
- Start with: "${greeting}! Welcome to Utopia Group. Are you looking into AI for your business, or just curious about what we do?"`;
}

const MODEL = "models/gemini-3.1-flash-live-preview";

// ─── Helpers ────────────────────────────────────────────────────
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + chunkSize))
    );
  }
  return btoa(binary);
}

function base64ToFloat32(base64: string): Float32Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const int16 = new Int16Array(bytes.buffer);
  const float32 = new Float32Array(int16.length);
  for (let i = 0; i < int16.length; i++) {
    float32[i] = int16[i] / 32768;
  }
  return float32;
}

// ─── Lead detection ────────────────────────────────────────────
const PHONE_RE = /\b(0\d[\s-]?\d{3,4}[\s-]?\d{3,4})\b/;

function detectLead(text: string): { name: string | null; phone: string | null } | null {
  // Look for phone numbers in AI's confirmation text
  const phoneMatch = text.match(PHONE_RE);
  if (!phoneMatch) return null;

  const phone = phoneMatch[1].replace(/[\s-]/g, "");

  // Try to extract name — patterns like "So that's Ahmad" or "Got it, Ahmad"
  let name: string | null = null;
  const namePatterns = [
    /(?:that'?s|got it,?\s*)([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
    /(?:name is|called)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
  ];
  for (const pat of namePatterns) {
    const m = text.match(pat);
    if (m) { name = m[1]; break; }
  }

  return { name, phone };
}

async function parseWsMessage(data: unknown): Promise<Record<string, unknown>> {
  if (typeof data === "string") return JSON.parse(data);
  if (data instanceof Blob) return JSON.parse(await data.text());
  if (data instanceof ArrayBuffer)
    return JSON.parse(new TextDecoder().decode(data));
  return {};
}

// ─── Component ──────────────────────────────────────────────────
export default function VoiceWidget() {
  const pathname = usePathname();
  const [state, setState] = useState<WidgetState>("idle");
  const [statusText, setStatusText] = useState("");
  const [supported, setSupported] = useState(true);
  const [scrollHidden, setScrollHidden] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hide bubble while scrolling (idle mode only), reappear after 1s
  useEffect(() => {
    const onScroll = () => {
      if (stateRef.current !== "idle") return;
      setScrollHidden(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setScrollHidden(false), 1000);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Cost protection
  const [sessionTimer, setSessionTimer] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sessionIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const MAX_SESSION_SECONDS = 180;
  const WARN_AT_SECONDS = 150;
  const SILENCE_TIMEOUT_MS = 20_000;
  const COOLDOWN_MS = 10_000;

  const closingRef = useRef(false); // true when we initiated the close
  const wsRef = useRef<WebSocket | null>(null);
  const captureCtxRef = useRef<AudioContext | null>(null);
  const playbackCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<AudioWorkletNode | null>(null);
  const nextPlayTimeRef = useRef(0);
  const stateRef = useRef<WidgetState>("idle");

  // Pre-fetched token cache
  const tokenCacheRef = useRef<{ wsUrl: string; fetchedAt: number } | null>(
    null
  );
  const TOKEN_MAX_AGE = 4 * 60 * 1000; // 4 minutes

  // Lead detection — only send once per session
  const leadSentRef = useRef(false);

  // Conversation transcript — buffered per turn, flushed on turnComplete
  const transcriptRef = useRef<string[]>([]);
  const aiTurnBufferRef = useRef("");
  const userTurnBufferRef = useRef("");

  // Session metadata for analytics
  const sessionMetaRef = useRef<{
    greeting: string;
    pagePath: string;
    startedAt: number;
    endReason: EndReason;
  } | null>(null);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !navigator.mediaDevices?.getUserMedia ||
      !window.AudioContext ||
      !window.AudioWorkletNode
    ) {
      setSupported(false);
    }
  }, []);

  // ─── Pre-fetch token on mount for faster connect ─────────────
  const prefetchToken = useCallback(async () => {
    try {
      const res = await fetch("/api/gemini-session", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        tokenCacheRef.current = { wsUrl: data.wsUrl, fetchedAt: Date.now() };
      }
    } catch {
      // Silent fail — will fetch fresh on connect
    }
  }, []);

  useEffect(() => {
    if (supported) prefetchToken();
  }, [supported, prefetchToken]);

  // ─── Get cached or fresh token ───────────────────────────────
  const getWsUrl = useCallback(async (): Promise<string> => {
    const cached = tokenCacheRef.current;
    if (cached && Date.now() - cached.fetchedAt < TOKEN_MAX_AGE) {
      // Use cached, then refresh in background for next session
      const url = cached.wsUrl;
      tokenCacheRef.current = null; // consume it (single-use token)
      prefetchToken(); // refresh for next time
      return url;
    }
    // Fetch fresh
    const res = await fetch("/api/gemini-session", { method: "POST" });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error || "Failed to start session");
    }
    const data = await res.json();
    return data.wsUrl;
  }, [prefetchToken]);

  // Analytics is sent inline in endSession (needs transcript before cleanup)

  // ─── Audio playback ──────────────────────────────────────────
  const playChunk = useCallback((ctx: AudioContext, base64: string) => {
    try {
      const float32 = base64ToFloat32(base64);
      if (float32.length === 0) return;
      const buffer = ctx.createBuffer(1, float32.length, 24000);
      buffer.getChannelData(0).set(float32);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      const now = ctx.currentTime;
      const start = Math.max(now + 0.01, nextPlayTimeRef.current);
      source.start(start);
      nextPlayTimeRef.current = start + buffer.duration;
    } catch (e) {
      console.error("[VoiceWidget] playChunk error:", e);
    }
  }, []);

  // ─── Cleanup ─────────────────────────────────────────────────
  const cleanup = useCallback(() => {
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    silenceTimerRef.current = null;
    if (sessionIntervalRef.current) clearInterval(sessionIntervalRef.current);
    sessionIntervalRef.current = null;
    closingRef.current = true;
    try {
      wsRef.current?.close();
    } catch {
      /* ignore */
    }
    wsRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    processorRef.current?.disconnect();
    processorRef.current = null;
    try {
      captureCtxRef.current?.close();
    } catch {
      /* ignore */
    }
    captureCtxRef.current = null;
    try {
      playbackCtxRef.current?.close();
    } catch {
      /* ignore */
    }
    playbackCtxRef.current = null;
    nextPlayTimeRef.current = 0;
  }, []);

  const endSession = useCallback(
    (reason: EndReason = "user") => {
      // Capture transcript before cleanup clears everything
      const meta = sessionMetaRef.current;
      const transcript = transcriptRef.current.join("\n").slice(0, 1000);
      const duration = meta
        ? Math.floor((Date.now() - meta.startedAt) / 1000)
        : 0;

      cleanup();
      setState("idle");
      setStatusText("");
      setSessionTimer(0);
      sessionMetaRef.current = null;
      leadSentRef.current = false;
      transcriptRef.current = [];
      aiTurnBufferRef.current = "";
      userTurnBufferRef.current = "";
      closingRef.current = false;

      // Send analytics with captured transcript (slight delay for UX)
      if (meta) {
        fetch("/api/voice-analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            duration_seconds: duration,
            page_path: meta.pagePath,
            greeting_used: meta.greeting,
            ended_by: reason,
            transcript,
          }),
        }).catch(() => {});
      }
      setCooldown(true);
      setTimeout(() => setCooldown(false), COOLDOWN_MS);
    },
    [cleanup]
  );

  // ─── Silence timeout ────────────────────────────────────────
  const resetSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    silenceTimerRef.current = setTimeout(() => {
      if (stateRef.current === "listening") {
        endSession("silence_timeout");
      }
    }, SILENCE_TIMEOUT_MS);
  }, [endSession]);

  // ─── Start session ───────────────────────────────────────────
  const startSession = useCallback(async () => {
    try {
      setState("connecting");
      setStatusText("Connecting…");

      // Build context-aware prompt
      const greeting = getSmartGreeting();
      const systemPrompt = buildSystemPrompt(pathname, greeting);
      sessionMetaRef.current = {
        greeting,
        pagePath: pathname,
        startedAt: Date.now(),
        endReason: "user",
      };

      // 1. Get token (cached or fresh)
      const wsUrl = await getWsUrl();

      // 2. Get mic
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      streamRef.current = stream;

      // 3. Audio capture (16 kHz)
      const captureCtx = new AudioContext({ sampleRate: 16000 });
      captureCtxRef.current = captureCtx;
      if (captureCtx.state === "suspended") await captureCtx.resume();
      await captureCtx.audioWorklet.addModule("/pcm-processor.js");
      const micSource = captureCtx.createMediaStreamSource(stream);
      const processor = new AudioWorkletNode(captureCtx, "pcm-processor");
      processorRef.current = processor;
      micSource.connect(processor);

      // 4. Playback (24 kHz)
      const playbackCtx = new AudioContext({ sampleRate: 24000 });
      playbackCtxRef.current = playbackCtx;
      if (playbackCtx.state === "suspended") await playbackCtx.resume();

      // 5. WebSocket
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            setup: {
              model: MODEL,
              generationConfig: {
                responseModalities: ["AUDIO"],
                speechConfig: {
                  voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: "Aoede" },
                  },
                },
              },
              outputAudioTranscription: {},
              systemInstruction: {
                parts: [{ text: systemPrompt }],
              },
            },
          })
        );
      };

      ws.onmessage = async (event) => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any = await parseWsMessage(event.data);

          if (data.setupComplete !== undefined) {
            setState("listening");
            setStatusText("Listening… speak now");

            const startedAt = Date.now();
            sessionIntervalRef.current = setInterval(() => {
              const elapsed = Math.floor((Date.now() - startedAt) / 1000);
              setSessionTimer(elapsed);
              if (elapsed >= MAX_SESSION_SECONDS) {
                endSession("max_duration");
              } else if (
                elapsed >= WARN_AT_SECONDS &&
                stateRef.current === "listening"
              ) {
                setStatusText("Session ending soon…");
              }
            }, 1000);

            resetSilenceTimer();

            processor.port.onmessage = (e: MessageEvent) => {
              if (ws.readyState !== WebSocket.OPEN) return;

              const pcm = new Int16Array(e.data);

              // When AI is speaking, only forward audio that's loud enough
              // to be a real human voice (barge-in), not speaker echo.
              if (stateRef.current === "ai-speaking") {
                let sum = 0;
                for (let i = 0; i < pcm.length; i++) {
                  sum += Math.abs(pcm[i]);
                }
                const avg = sum / pcm.length;
                // ~3000 is well above typical loudspeaker echo (~500-1500)
                // but easily reached by a normal speaking voice
                if (avg < 3000) return;
              }

              ws.send(
                JSON.stringify({
                  realtimeInput: {
                    audio: {
                      data: arrayBufferToBase64(e.data),
                      mimeType: "audio/pcm;rate=16000",
                    },
                  },
                })
              );
            };
            return;
          }

          const parts = data.serverContent?.modelTurn?.parts;
          if (parts && Array.isArray(parts)) {
            resetSilenceTimer();
            if (stateRef.current !== "ai-speaking") {
              setState("ai-speaking");
              setStatusText("Ms Hui Yi is speaking…");
            }
            for (const part of parts) {
              if (part.inlineData?.data) {
                playChunk(playbackCtx, part.inlineData.data);
              }
              // Buffer AI text chunks (will flush on turnComplete)
              if (part.text) {
                aiTurnBufferRef.current += part.text;
              }
            }
          }

          // Capture output audio transcription (arrives as separate messages)
          if (data.serverContent?.outputTranscription?.text) {
            aiTurnBufferRef.current += data.serverContent.outputTranscription.text;
          }
          // Capture input audio transcription (what user said)
          if (data.serverContent?.inputTranscription?.text) {
            userTurnBufferRef.current += data.serverContent.inputTranscription.text;
          }

          if (data.serverContent?.turnComplete) {
            // Flush buffered text as complete turns
            if (userTurnBufferRef.current.trim()) {
              transcriptRef.current.push("User: " + userTurnBufferRef.current.trim());
              userTurnBufferRef.current = "";
            }
            if (aiTurnBufferRef.current.trim()) {
              transcriptRef.current.push("AI: " + aiTurnBufferRef.current.trim());
              aiTurnBufferRef.current = "";
            }
            setState("listening");
            setStatusText("Listening…");
            resetSilenceTimer();
          }

          if (data.error) {
            console.error("[VoiceWidget] Gemini error:", data.error);
            setState("error");
            setStatusText(data.error.message || "Connection error");
            setTimeout(() => endSession("error"), 3000);
          }
        } catch (e) {
          console.error("[VoiceWidget] Message parse error:", e);
        }
      };

      ws.onerror = () => {
        setState("error");
        setStatusText("Connection error");
        setTimeout(() => endSession("error"), 3000);
      };

      ws.onclose = () => {
        // Only end session if WE didn't initiate the close
        if (!closingRef.current && stateRef.current !== "idle") {
          endSession("error");
        }
      };
    } catch (err) {
      console.error("[VoiceWidget] Start error:", err);
      cleanup();
      setState("error");
      const msg =
        err instanceof Error ? err.message : "Could not start voice chat";
      setStatusText(msg);
      setTimeout(() => {
        setState("idle");
        setStatusText("");
      }, 4000);
    }
  }, [cleanup, endSession, playChunk, resetSilenceTimer, getWsUrl, pathname]);

  if (!supported) return null;

  const isActive = state !== "idle";
  const isListening = state === "listening";
  const isSpeaking = state === "ai-speaking";
  const isConnecting = state === "connecting";

  return (
    <>
      {/* ─── Active call panel ───────────────────────────── */}
      {isActive && (
        <div className="fixed bottom-[5.5rem] right-4 md:bottom-[6.5rem] md:right-6 z-50 w-[300px] md:w-[320px]">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
            {/* Header */}
            <div className="bg-[#116dff] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
                  <Image
                    src="/images/ai-assistant.png"
                    alt="Ms Hui Yi — Utopia AI"
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">
                    Ms Hui Yi
                  </p>
                  <p className="text-white/70 text-[11px] leading-tight">
                    Utopia AI Assistant
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => endSession("user")}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="End call"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-4 py-4 flex flex-col items-center gap-3">
              {/* Avatar with pulse */}
              <div className="relative flex items-center justify-center">
                {(isListening || isSpeaking) && (
                  <>
                    <span
                      className="absolute w-20 h-20 rounded-full"
                      style={{
                        backgroundColor: isSpeaking ? "#116dff" : "#06B6D4",
                        animation: "voice-pulse 2s ease-out infinite",
                      }}
                    />
                    <span
                      className="absolute w-20 h-20 rounded-full"
                      style={{
                        backgroundColor: isSpeaking ? "#116dff" : "#06B6D4",
                        animation: "voice-pulse 2s ease-out infinite 0.6s",
                      }}
                    />
                  </>
                )}
                <div
                  className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-[3px] transition-colors"
                  style={{
                    borderColor: isSpeaking
                      ? "#116dff"
                      : isListening
                        ? "#06B6D4"
                        : "#94A3B8",
                  }}
                >
                  <Image
                    src="/images/ai-assistant.png"
                    alt="Utopia AI"
                    fill
                    className="object-cover"
                    sizes="72px"
                    priority
                  />
                </div>
                <span
                  className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white"
                  style={{
                    backgroundColor: isConnecting
                      ? "#F59E0B"
                      : isSpeaking
                        ? "#116dff"
                        : isListening
                          ? "#22C55E"
                          : "#94A3B8",
                  }}
                />
              </div>

              {/* Status + timer */}
              <p className="text-sm text-gray-600 text-center font-medium">
                {statusText}
              </p>
              {sessionTimer > 0 && (
                <p
                  className="text-[11px] font-mono text-center"
                  style={{
                    color:
                      sessionTimer >= WARN_AT_SECONDS ? "#EF4444" : "#9CA3AF",
                  }}
                >
                  {Math.floor(sessionTimer / 60)}:
                  {String(sessionTimer % 60).padStart(2, "0")} / 3:00
                </p>
              )}

              {/* Spoken prompt hint */}
              {isListening && (
                <p className="text-xs text-gray-400 text-center italic">
                  Try asking: &ldquo;What do you do?&rdquo; or &ldquo;How much
                  does it cost?&rdquo;
                </p>
              )}

              {/* End call */}
              <button
                type="button"
                onClick={() => endSession("user")}
                className="w-full py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors mt-1"
              >
                End Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Trigger bubble (above WhatsApp FAB) ─────────── */}
      {!isActive && (
        <div className="fixed bottom-[5.5rem] right-4 md:bottom-[6.5rem] md:right-6 z-40 flex flex-col items-end gap-2">
          {/* Tooltip hint — hides on scroll */}
          <div
            className="bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 text-xs text-gray-700 font-semibold max-w-[180px] relative transition-opacity duration-300"
            style={{
              opacity: scrollHidden ? 0 : 1,
              pointerEvents: scrollHidden ? "none" : "auto",
            }}
          >
            Ask Me Anything,{" "}
            <span className="text-[#116dff]">I Answer Live!</span>
            <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
          </div>
          {/* Circular avatar button — always visible */}
          <button
            type="button"
            onClick={startSession}
            disabled={cooldown}
            aria-label="Talk to Utopia AI"
            className="relative w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform disabled:cursor-not-allowed"
            style={
              cooldown
                ? undefined
                : { animation: "voice-btn-glow 3s ease-in-out infinite" }
            }
          >
            <Image
              src="/images/ai-assistant.png"
              alt="Talk to Utopia AI"
              fill
              className="object-cover rounded-full"
              sizes="56px"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-[#116dff] border-2 border-white flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
