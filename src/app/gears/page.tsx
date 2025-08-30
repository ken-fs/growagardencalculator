import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { gears } from "@/data/gears";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/calculator";

export const metadata = {
  title: "Gear Wiki - Grow A Garden Calculator",
  description:
    "Complete Grow A Garden gear information guide, including all gear types, values and rarities.",
};

export default function GearsPage() {
  const sprinklers = gears.filter((g) => g.category === "sprinkler");
  const fertilizers = gears.filter((g) => g.category === "fertilizer");
  const tools = gears.filter((g) => g.category === "tool");
  const decorations = gears.filter((g) => g.category === "decoration");

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
            Gear Wiki
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete Grow A Garden gear information guide
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        {/* Sprinklers */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              💧 Sprinklers
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Automatic watering equipment, improving crop growth efficiency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sprinklers.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {gear.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(gear.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        gear.rarity
                      )}`}
                    >
                      {getRarityText(gear.rarity)}
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

        {/* Fertilizers */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🌱 Fertilizers
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Nutrients that promote crop growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fertilizers.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {gear.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(gear.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        gear.rarity
                      )}`}
                    >
                      {getRarityText(gear.rarity)}
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

        {/* Tools */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🔧 Tools
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Essential tools for farm work
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tools.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {gear.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(gear.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        gear.rarity
                      )}`}
                    >
                      {getRarityText(gear.rarity)}
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

        {/* Decorations */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🎨 Decorations
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Decorative items to beautify your farm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {decorations.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {gear.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(gear.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        gear.rarity
                      )}`}
                    >
                      {getRarityText(gear.rarity)}
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

        {/* Gear Usage Recommendations */}
        <Card className="mt-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">
              Gear Usage Recommendations
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Usage recommendations based on gear type and rarity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">
                  💧 Sprinklers
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Automatic watering equipment
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Increases crop growth speed</li>
                  <li>• Reduces manual watering time</li>
                  <li>• Advanced sprinklers work better</li>
                  <li>• Recommended priority purchase</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">
                  🌱 Fertilizers
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Promotes crop growth
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Increases crop yield</li>
                  <li>• Improves mutation probability</li>
                  <li>• Use with sprinklers</li>
                  <li>• High return on investment</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">🔧 Tools</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Farm work tools
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Improves work efficiency</li>
                  <li>• Reduces stamina consumption</li>
                  <li>• Advanced tools work better</li>
                  <li>• Long-term investment value</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">
                  🎨 Decorations
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Beautify farm
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Enhances farm aesthetics</li>
                  <li>• Increases farm value</li>
                  <li>• Special decorations have bonuses</li>
                  <li>• Late-game investment choice</li>
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
