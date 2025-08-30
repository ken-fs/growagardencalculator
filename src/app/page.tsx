import { CropCalculator } from "@/components/calculator/CropCalculator";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

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
  ],
  openGraph: {
    title: "Grow A Garden Calculator - Free Roblox Farm Game Tool 2024",
    description:
      "Best free Grow A Garden calculator for Roblox! Calculate crop values, pet weights, mutations, and analyze trades.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow A Garden Calculator - Free Roblox Farm Game Tool 2024",
    description:
      "Best free Grow A Garden calculator for Roblox! Calculate crop values, pet weights, mutations, and analyze trades.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="relative z-10">
        <CropCalculator />
      </main>
      <Footer />
    </div>
  );
}
