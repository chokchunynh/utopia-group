const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TG_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, page_path, transcript_snippet } = body;

    // 1. Save to Supabase
    if (SUPABASE_URL && SUPABASE_KEY) {
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
          page_path: page_path || "/",
          transcript_snippet: transcript_snippet || null,
        }),
      });
    }

    // 2. Send Telegram notification to CY
    if (TG_BOT_TOKEN && TG_CHAT_ID) {
      const now = new Intl.DateTimeFormat("en-MY", {
        timeZone: "Asia/Kuala_Lumpur",
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date());

      // Trim transcript for Telegram (max ~600 chars for readability)
      const summary = transcript_snippet
        ? transcript_snippet.length > 600
          ? transcript_snippet.slice(0, 600) + "…"
          : transcript_snippet
        : null;

      const message = [
        `🎙 *Voice Lead from utopiagroup.com.my*`,
        ``,
        `👤 Name: ${name || "Not provided"}`,
        `📱 WhatsApp: ${phone || "Not provided"}`,
        `📄 Page: ${page_path || "/"}`,
        `🕐 Time: ${now}`,
        phone
          ? `\n💬 [WhatsApp them](https://wa.me/${phone.replace(/[^0-9]/g, "")})`
          : "",
        summary ? `\n🗣 *Chat Summary:*\n_${summary}_` : "",
      ]
        .filter(Boolean)
        .join("\n");

      await fetch(
        `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TG_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
            disable_web_page_preview: true,
          }),
        }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Voice lead error:", err);
    // Never fail the client
    return Response.json({ ok: true });
  }
}
