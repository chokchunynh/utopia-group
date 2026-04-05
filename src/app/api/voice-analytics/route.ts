import { GoogleGenAI } from "@google/genai";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TG_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const GOOGLE_AI_KEY = process.env.GOOGLE_AI_API_KEY;

async function summarizeTranscript(
  transcript: string
): Promise<{ summary: string; name: string | null; phone: string | null }> {
  if (!GOOGLE_AI_KEY || !transcript || transcript.length < 10) {
    return { summary: "", name: null, phone: null };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: GOOGLE_AI_KEY });
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Summarize this voice chat transcript in 2-3 bullet points. Focus on: what the visitor wanted, what was discussed, and any next steps.

Also extract:
- CONTACT_NAME: the visitor's name if they gave one (null if not)
- CONTACT_PHONE: their phone/WhatsApp number if they gave one (null if not)

Format your response EXACTLY like this:
CONTACT_NAME: [name or null]
CONTACT_PHONE: [number or null]
SUMMARY:
- [bullet 1]
- [bullet 2]
- [bullet 3]

Transcript:
${transcript}`,
            },
          ],
        },
      ],
    });

    const text = result.text ?? "";
    const nameMatch = text.match(/CONTACT_NAME:\s*(.+)/);
    const phoneMatch = text.match(/CONTACT_PHONE:\s*(.+)/);
    const summaryMatch = text.match(/SUMMARY:\s*([\s\S]+)/);

    const name = nameMatch?.[1]?.trim();
    const phone = phoneMatch?.[1]?.trim();

    return {
      summary: summaryMatch?.[1]?.trim() ?? text,
      name: name && name !== "null" ? name : null,
      phone: phone && phone !== "null" ? phone : null,
    };
  } catch (e) {
    console.error("Summarize error:", e);
    return { summary: transcript.slice(0, 300), name: null, phone: null };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const duration = body.duration_seconds ?? 0;
    const pagePath = body.page_path ?? "/";
    const endedBy = body.ended_by ?? "user";
    const greeting = body.greeting_used ?? "";
    const transcript = body.transcript ?? "";

    // 1. Save raw transcript to Supabase
    if (SUPABASE_URL && SUPABASE_KEY) {
      await fetch(`${SUPABASE_URL}/rest/v1/voice_sessions`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          duration_seconds: duration,
          page_path: pagePath,
          greeting_used: greeting,
          ended_by: endedBy,
          transcript: transcript || null,
        }),
      });
    }

    // 2. Summarize + notify Telegram if real conversation (>5s)
    if (TG_BOT_TOKEN && TG_CHAT_ID && duration > 5) {
      const { summary, name, phone } = await summarizeTranscript(transcript);

      const now = new Intl.DateTimeFormat("en-MY", {
        timeZone: "Asia/Kuala_Lumpur",
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date());

      const mins = Math.floor(duration / 60);
      const secs = duration % 60;
      const durationStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

      const endEmoji =
        endedBy === "user"
          ? "👋"
          : endedBy === "silence_timeout"
            ? "🤫"
            : endedBy === "max_duration"
              ? "⏰"
              : "❌";

      const message = [
        `🎙 *Voice Chat on utopiagroup.com.my*`,
        ``,
        // Lead info first (most important)
        name ? `👤 *Name: ${name}*` : null,
        phone ? `📱 *WhatsApp: ${phone}*` : null,
        phone
          ? `💬 [Message them on WhatsApp](https://wa.me/${phone.replace(/[^0-9]/g, "")})`
          : null,
        name || phone ? `` : null,
        // Session details
        `📄 Page: ${pagePath}`,
        `⏱ Duration: ${durationStr}`,
        `${endEmoji} Ended: ${endedBy.replace(/_/g, " ")}`,
        `🕐 ${now}`,
        // Summary
        summary ? `\n🗣 *Summary:*\n${summary}` : null,
      ]
        .filter((line) => line !== null)
        .join("\n");

      await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      });

      // Also save lead to voice_leads if contact was captured
      if ((name || phone) && SUPABASE_URL && SUPABASE_KEY) {
        await fetch(`${SUPABASE_URL}/rest/v1/voice_leads`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name: name || null,
            phone: phone || null,
            page_path: pagePath,
            transcript_snippet: summary || null,
          }),
        });
      }
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: true });
  }
}
