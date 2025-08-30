"use client";

import { crops } from "@/data/crops";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CropCard } from "./CropCard";

export const CropsPageClient = () => {
  const fruitCrops = crops.filter((c) => c.category === "fruit");
  const vegetableCrops = crops.filter((c) => c.category === "vegetable");
  const flowerCrops = crops.filter((c) => c.category === "flower");
  const specialCrops = crops.filter((c) => c.category === "special");

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
    <main className="max-w-7xl mx-auto p-6 relative z-10">
      <div className="text-center mb-8 space-y-4">
        <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
          Crop Wiki
        </h1>
        <p className="text-muted-foreground text-lg">
          Complete Grow A Garden crop information guide
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
      </div>

      {/* Fruit Crops */}
      <Card className="mb-8 tech-card shadow-tech-glow">
        <CardHeader className="tech-scan-line">
          <CardTitle className="flex items-center gap-2 text-tech-glow">
            🍎 Fruit Crops
          </CardTitle>
          <CardDescription>
            Various delicious fruits, offering different base values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fruitCrops.map((crop) => (
              <CropCard
                key={crop.id}
                crop={crop}
                getRarityColor={getRarityColor}
                getRarityText={getRarityText}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vegetable Crops */}
      <Card className="mb-8 tech-card shadow-tech-glow">
        <CardHeader className="tech-scan-line">
          <CardTitle className="flex items-center gap-2 text-tech-glow">
            🥕 Vegetable Crops
          </CardTitle>
          <CardDescription>
            Nutritious vegetables, suitable for daily cultivation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {vegetableCrops.map((crop) => (
              <CropCard
                key={crop.id}
                crop={crop}
                getRarityColor={getRarityColor}
                getRarityText={getRarityText}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Flower Crops */}
      <Card className="mb-8 tech-card shadow-tech-glow">
        <CardHeader className="tech-scan-line">
          <CardTitle className="flex items-center gap-2 text-tech-glow">
            🌸 Flower Crops
          </CardTitle>
          <CardDescription>
            Beautiful flowers to decorate your garden
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {flowerCrops.map((crop) => (
              <CropCard
                key={crop.id}
                crop={crop}
                getRarityColor={getRarityColor}
                getRarityText={getRarityText}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Special Crops */}
      <Card className="tech-card shadow-tech-glow">
        <CardHeader className="tech-scan-line">
          <CardTitle className="flex items-center gap-2 text-tech-glow">
            ⭐ Special Crops
          </CardTitle>
          <CardDescription>
            Rare and precious special crops with extremely high value
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {specialCrops.map((crop) => (
              <CropCard
                key={crop.id}
                crop={crop}
                getRarityColor={getRarityColor}
                getRarityText={getRarityText}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Growing Recommendations */}
      <Card className="mt-8">
        <CardHeader className="tech-scan-line">
          <CardTitle className="text-tech-glow">
            Growing Recommendations
          </CardTitle>
          <CardDescription>
            Growing recommendations based on crop type and rarity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
              <h3 className="font-semibold text-tech-glow mb-2 flex items-center">
                <span className="mr-2">🌱</span>
                Beginner Recommended
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Suitable for new players
              </p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Apple (248 Sheckles)</li>
                <li>• Carrot (89 Sheckles)</li>
                <li>• Rose (189 Sheckles)</li>
                <li>• Low investment, stable returns</li>
              </ul>
            </div>

            <div className="p-4 bg-secondary/30 rounded-lg border border-tech-green/30">
              <h3 className="font-semibold text-tech-green mb-2 flex items-center">
                <span className="mr-2">⚡</span>
                Intermediate Recommended
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                For players with some experience
              </p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Dragon Fruit (445 Sheckles)</li>
                <li>• Artichoke (234 Sheckles)</li>
                <li>• Orchid (289 Sheckles)</li>
                <li>• Balance returns and risks</li>
              </ul>
            </div>

            <div className="p-4 bg-secondary/30 rounded-lg border border-tech-blue/30">
              <h3 className="font-semibold text-tech-blue mb-2 flex items-center">
                <span className="mr-2">🚀</span>
                Advanced Recommended
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                For experienced players
              </p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Golden Apple (1,240 Sheckles)</li>
                <li>• Crystal Berry (890 Sheckles)</li>
                <li>• Moon Fruit (1,560 Sheckles)</li>
                <li>• High investment, high returns</li>
              </ul>
            </div>

            <div className="p-4 bg-secondary/30 rounded-lg border border-tech-purple/30">
              <h3 className="font-semibold text-tech-purple mb-2 flex items-center">
                <span className="mr-2">💎</span>
                Ultimate Recommended
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                For players seeking the ultimate
              </p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Rainbow Fruit (3,100 Sheckles)</li>
                <li>• Diamond Melon (4,450 Sheckles)</li>
                <li>• Requires massive resources and luck</li>
                <li>• Highest value crops</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
