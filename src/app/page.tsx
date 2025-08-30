import { CropCalculator } from "@/components/calculator/CropCalculator";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <CropCalculator />
      </main>
      <Footer />
    </div>
  );
}
