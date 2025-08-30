import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { pets } from "@/data/pets";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/calculator";

export const metadata = {
  title: "Grow A Garden Pet Wiki - Complete Pet Database & Values 2024",
  description:
    "Complete Grow A Garden pet database for Roblox! Find all pet types, values, rarities, and acquisition tips. Build the ultimate pet collection in Grow A Garden.",
  keywords: [
    "grow a garden pet wiki",
    "grow a garden pets database",
    "grow a garden pet values",
    "roblox grow a garden pets",
    "grow a garden farm pets",
    "grow a garden wild pets",
    "grow a garden special pets",
    "grow a garden pet rarities",
    "roblox pet database",
    "grow a garden pet guide",
  ],
};

export default function PetsWikiPage() {
  const farmPets = pets.filter((p) => p.category === "farm");
  const wildPets = pets.filter((p) => p.category === "wild");
  const specialPets = pets.filter((p) => p.category === "special");

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-muted-foreground bg-secondary/50 border-border";
      case "uncommon":
        return "text-tech-green bg-tech-green/20 border-tech-green/30";
      case "rare":
        return "text-tech-blue bg-tech-blue/20 border-tech-blue/30";
      case "epic":
        return "text-tech-purple bg-tech-purple/20 border-tech-purple/30";
      case "legendary":
        return "text-tech-orange bg-tech-orange/20 border-tech-orange/30";
      default:
        return "text-muted-foreground bg-secondary/50 border-border";
    }
  };

  const getRarityText = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "Common";
      case "uncommon":
        return "Uncommon";
      case "rare":
        return "Rare";
      case "epic":
        return "Epic";
      case "legendary":
        return "Legendary";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
            Pet Wiki
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete Grow A Garden pet information guide
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        {/* Farm Pets */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🐄 Farm Pets
            </CardTitle>
            <CardDescription>
              Traditional farm animals, suitable for new players
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {farmPets.map((pet) => (
                <div
                  key={pet.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {pet.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        pet.rarity
                      )}`}
                    >
                      {getRarityText(pet.rarity)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Sheckles
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Wild Animals */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🦊 Wild Animals
            </CardTitle>
            <CardDescription>
              Wild animals that require more skill to obtain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {wildPets.map((pet) => (
                <div
                  key={pet.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {pet.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        pet.rarity
                      )}`}
                    >
                      {getRarityText(pet.rarity)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Sheckles
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Pets */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ⭐ Special Pets
            </CardTitle>
            <CardDescription>
              Rare and precious special pets with extremely high value
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {specialPets.map((pet) => (
                <div
                  key={pet.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {pet.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        pet.rarity
                      )}`}
                    >
                      {getRarityText(pet.rarity)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Sheckles
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pet Acquisition Recommendations */}
        <Card className="mt-8">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">
              Pet Acquisition Recommendations
            </CardTitle>
            <CardDescription>
              Acquisition recommendations based on pet type and rarity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Beginner Recommended
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Suitable for new players
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Cow (500 Sheckles)</li>
                  <li>• Chicken (300 Sheckles)</li>
                  <li>• Pig (400 Sheckles)</li>
                  <li>• Easy to obtain, stable value</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  Intermediate Recommended
                </h3>
                <p className="text-green-600 text-sm mb-2">
                  For players with some experience
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Fox (1,200 Sheckles)</li>
                  <li>• Wolf (1,500 Sheckles)</li>
                  <li>• Bear (2,000 Sheckles)</li>
                  <li>• Requires more skill to obtain</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Advanced Recommended
                </h3>
                <p className="text-purple-600 text-sm mb-2">
                  For experienced players
                </p>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Golden Cow (5,000 Sheckles)</li>
                  <li>• Rainbow Chicken (3,000 Sheckles)</li>
                  <li>• Crystal Pig (4,000 Sheckles)</li>
                  <li>• High-value special pets</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
