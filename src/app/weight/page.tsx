import { PetWeightCalculator } from "@/components/calculator/PetWeightCalculator";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "宠物重量计算器 - Grow A Garden 计算器",
  description:
    "专业的宠物重量计算器，帮助玩家计算宠物价值和重量，优化宠物选择。",
};

export default function WeightPage() {
  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* 科技背景效果 */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="relative z-10">
        <PetWeightCalculator />
      </main>
      <Footer />
    </div>
  );
}
