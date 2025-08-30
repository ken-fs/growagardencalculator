import { TradeAnalyzer } from "@/components/calculator/TradeAnalyzer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "WFL Trade Analyzer - Grow A Garden Calculator",
  description:
    "Professional WFL (Win/Fair/Loss) trade analysis tool to help players determine if trades are fair and optimize trading decisions.",
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
