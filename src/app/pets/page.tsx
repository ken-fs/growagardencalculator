import { PetWeightCalculator } from "@/components/calculator/PetWeightCalculator";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Grow A Garden Pet Calculator - Pet Weight & Value Calculator 2024",
  description:
    "Free Grow A Garden pet calculator for Roblox! Calculate pet weights, values, and optimize your pet collection. Find the best pets for maximum sheckles.",
  keywords: [
    "grow a garden pet calculator",
    "grow a garden pets",
    "grow a garden pet weight",
    "grow a garden pet values",
    "roblox grow a garden pets",
    "grow a garden pet guide",
    "grow a garden farm pets",
    "grow a garden wild pets",
    "grow a garden special pets",
    "roblox pet calculator",
  ],
};

export default function PetsPage() {
  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="relative z-10">
        <PetWeightCalculator />
      </main>
      <Footer />
    </div>
  );
}
