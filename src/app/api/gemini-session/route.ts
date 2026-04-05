import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GOOGLE_AI_API_KEY;

export async function POST() {
  if (!API_KEY) {
    return Response.json(
      { error: "GOOGLE_AI_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const client = new GoogleGenAI({
      apiKey: API_KEY,
      httpOptions: { apiVersion: "v1alpha" },
    });

    // Create a short-lived ephemeral token so the browser can connect
    // directly to Gemini's WebSocket without exposing the real API key.
    const response = await client.authTokens.create({
      config: {
        uses: 1,
        expireTime: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      },
    });

    const tokenValue = response.name;

    return Response.json({
      wsUrl: `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContentConstrained?access_token=${tokenValue}`,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Token creation failed";
    console.error("Gemini session error:", message);

    // Fallback: return key-based URL if ephemeral tokens fail.
    // The key travels via this server-side route only — not in client JS.
    // It will be visible in the browser's WebSocket URL in DevTools though.
    // TODO: restrict the key to utopiagroup.com.my in Google Cloud Console.
    return Response.json({
      wsUrl: `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${API_KEY}`,
    });
  }
}
