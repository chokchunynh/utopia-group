import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old Wix homepage variants
      { source: "/home", destination: "/", permanent: true },
      { source: "/home-2", destination: "/", permanent: true },
      // Wix pages → closest new equivalents
      { source: "/sales-boost", destination: "/automate", permanent: true },
      // Brand pages → About (has company portfolio bento)
      { source: "/brand", destination: "/about", permanent: true },
      { source: "/brand/:slug", destination: "/about", permanent: true },
      // Legal pages → homepage (create dedicated pages later if needed)
      { source: "/privacy-policy", destination: "/", permanent: true },
      { source: "/cookie-policy", destination: "/", permanent: true },
      { source: "/terms-and-conditions", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
