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
};

export default nextConfig;
