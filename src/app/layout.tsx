import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import VoiceWidget from "@/components/layout/VoiceWidget";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://utopiagroup.com.my"),
  title: {
    default: "Utopia Group — Malaysia's #1 AI Implementation Partner",
    template: "%s | Utopia Group",
  },
  description:
    "Malaysia's only AI partner that actually operates 35+ companies. From RM3,000/month. Free tools available. WhatsApp us today.",
  openGraph: {
    type: "website",
    url: "https://utopiagroup.com.my",
    title: "Utopia Group — Malaysia's #1 AI Implementation Partner",
    description:
      "We run AI across 35+ companies with 400+ staff. Now we implement it for yours. From RM3,000/month.",
    locale: "en_MY",
    siteName: "Utopia Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utopia Group — Malaysia's #1 AI Implementation Partner",
    description:
      "We run AI across 35+ companies with 400+ staff. Now we implement it for yours. From RM3,000/month.",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <div className="overflow-x-hidden w-full">
            <GoogleAnalytics />
            <Navbar />
            {children}
            <Footer />
          </div>
          <VoiceWidget />
          <WhatsAppFAB />
        </LanguageProvider>
      </body>
    </html>
  );
}
