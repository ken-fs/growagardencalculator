import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  JsonLd,
  websiteJsonLd,
  organizationJsonLd,
  webApplicationJsonLd,
} from "@/components/seo/JsonLd";
import { HydrationFix } from "@/components/HydrationFix";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grow A Garden Calculator - Free Roblox Farm Game Tool 2024",
  description:
    "Best free Grow A Garden calculator for Roblox! Calculate crop values, pet weights, mutations, and analyze trades. Get the most sheckles with our professional farming calculator.",
  keywords: [
    "grow a garden calculator",
    "roblox grow a garden",
    "grow a garden sheckles calculator",
    "roblox farm game calculator",
    "grow a garden crop value",
    "grow a garden pet calculator",
    "grow a garden mutations",
    "grow a garden trade analyzer",
    "roblox farming simulator",
    "grow a garden guide",
    "roblox calculator",
    "free roblox tools",
    "grow a garden wfl",
    "roblox farm game",
    "grow a garden wiki",
  ],
  authors: [{ name: "Grow A Garden Calculator" }],
  creator: "Grow A Garden Calculator",
  publisher: "Grow A Garden Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://growagardencalculator.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grow A Garden Calculator - Free Roblox Farm Game Tool 2024",
    description:
      "Best free Grow A Garden calculator for Roblox! Calculate crop values, pet weights, mutations, and analyze trades. Get the most sheckles with our professional farming calculator.",
    url: "https://growagardencalculator.net",
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grow A Garden Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow A Garden Calculator - Free Roblox Farm Game Tool 2024",
    description:
      "Best free Grow A Garden calculator for Roblox! Calculate crop values, pet weights, mutations, and analyze trades. Get the most sheckles with our professional farming calculator.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#4ade80",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <HydrationFix />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webApplicationJsonLd} />
        {children}
      </body>
    </html>
  );
}
