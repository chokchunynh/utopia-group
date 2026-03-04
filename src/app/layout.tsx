import type { Metadata } from "next";
import { Rubik, Outfit } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utopia Group — AI Implementation Partner for Malaysian Businesses",
  description:
    "We built AI for our own 30+ companies. Now we help yours cut costs, increase efficiency, and eliminate errors. BankMatch, AutoViral, and more — battle-tested AI tools built in Malaysia.",
  openGraph: {
    type: "website",
    url: "https://utopiagroup.com.my",
    title: "Utopia Group — AI That Actually Works for Malaysian Businesses",
    description:
      "Battle-tested AI tools used by 30+ companies daily. Bank reconciliation, social media marketing, and more. Built in Malaysia.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_MY",
    siteName: "Utopia Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utopia Group — AI Implementation Partner for Malaysian Businesses",
    description: "We built AI for our own 30+ companies. Now we help yours.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rubik.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
