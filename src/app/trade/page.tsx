import { TradeAnalyzer } from "@/components/calculator/TradeAnalyzer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "WFL 交易分析器 - Grow A Garden 计算器",
  description:
    "专业的 WFL (Win/Fair/Loss) 交易分析工具，帮助玩家判断交易是否公平，优化交易决策。",
};

export default function TradePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <TradeAnalyzer />
      </main>
      <Footer />
    </div>
  );
}
