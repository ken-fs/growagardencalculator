import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CropsPageClient } from "@/components/CropsPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow A Garden Crop Wiki - Complete Crop Values & Rarity Guide 2024",
  description:
    "Complete Grow A Garden crop database with values, rarities, and growing tips. Find the best crops to farm for maximum sheckles in Roblox Grow A Garden.",
  keywords: [
    "grow a garden crops",
    "grow a garden crop values",
    "grow a garden crop wiki",
    "roblox grow a garden crops",
    "grow a garden fruit crops",
    "grow a garden vegetable crops",
    "grow a garden flower crops",
    "grow a garden special crops",
    "grow a garden crop rarity",
    "roblox farming crops",
  ],
};

export default function CropsPage() {
  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <CropsPageClient />
      <Footer />
    </div>
  );
}
