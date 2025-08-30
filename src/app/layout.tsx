import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  JsonLd,
  websiteJsonLd,
  organizationJsonLd,
  webApplicationJsonLd,
} from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grow A Garden 计算器 - 专业的 Roblox 农场游戏计算工具",
  description:
    "专业的 Grow A Garden 计算器，支持作物价值计算、突变分析、宠物重量计算、交易分析等功能。帮助玩家优化农场收益，分析交易价值。",
  keywords: [
    "Grow A Garden",
    "计算器",
    "Roblox",
    "农场游戏",
    "作物价值",
    "突变计算",
    "宠物重量",
    "交易分析",
    "WFL",
    "Sheckles",
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
    title: "Grow A Garden 计算器 - 专业的 Roblox 农场游戏计算工具",
    description:
      "专业的 Grow A Garden 计算器，支持作物价值计算、突变分析、宠物重量计算、交易分析等功能。",
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
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow A Garden 计算器 - 专业的 Roblox 农场游戏计算工具",
    description:
      "专业的 Grow A Garden 计算器，支持作物价值计算、突变分析、宠物重量计算、交易分析等功能。",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4ade80" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webApplicationJsonLd} />
        {children}
      </body>
    </html>
  );
}
