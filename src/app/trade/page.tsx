import { TradeAnalyzer } from "@/components/calculator/TradeAnalyzer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Grow A Garden WFL Trade Analyzer - Win/Fair/Loss Calculator 2024",
  description:
    "Free Grow A Garden WFL trade analyzer for Roblox! Analyze trades, determine if they're fair, and maximize your trading profits. Professional trade analysis tool.",
  keywords: [
    "grow a garden trade analyzer",
    "grow a garden wfl",
    "grow a garden trade calculator",
    "roblox grow a garden trading",
    "grow a garden win fair loss",
    "grow a garden trade guide",
    "roblox trading calculator",
    "grow a garden sheckles trading",
    "roblox farm game trading",
    "grow a garden trade analysis",
  ],
};

export default function TradePage() {
  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="relative z-10">
        <TradeAnalyzer />
      </main>
      <Footer />
    </div>
  );
}
