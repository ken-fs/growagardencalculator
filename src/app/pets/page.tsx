import { PetWeightCalculator } from "@/components/calculator/PetWeightCalculator";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Pet Calculator - Grow A Garden Calculator",
  description:
    "Professional pet calculator to help players calculate pet values and weights, optimize pet selection.",
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
