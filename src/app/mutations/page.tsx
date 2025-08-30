import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { mutations } from "@/data/mutations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title:
    "Grow A Garden Mutation Wiki - Complete Mutation Guide & Multipliers 2024",
  description:
    "Complete Grow A Garden mutation guide for Roblox! Learn all mutation types, multipliers, and combinations. Maximize your crop values with the best mutation strategies.",
  keywords: [
    "grow a garden mutations",
    "grow a garden mutation guide",
    "grow a garden mutation wiki",
    "roblox grow a garden mutations",
    "grow a garden growth mutations",
    "grow a garden temperature mutations",
    "grow a garden environmental mutations",
    "grow a garden mutation multipliers",
    "roblox farming mutations",
    "grow a garden mutation combinations",
  ],
};

export default function MutationsPage() {
  const growthMutations = mutations.filter((m) => m.category === "growth");
  const temperatureMutations = mutations.filter(
    (m) => m.category === "temperature"
  );
  const environmentalMutations = mutations.filter(
    (m) => m.category === "environmental"
  );

  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
            Mutation Wiki
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete Grow A Garden mutation information guide
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        {/* Growth Mutations */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ⭐ Growth Mutations
            </CardTitle>
            <CardDescription>
              Only one growth mutation can be selected, providing the highest
              value multiplier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {growthMutations.map((mutation) => (
                <div
                  key={mutation.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  style={{ borderColor: mutation.color }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">{mutation.name}</h3>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: mutation.color }}
                    >
                      ×{mutation.multiplier}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {mutation.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Temperature Mutations */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ❄️ Temperature Mutations
            </CardTitle>
            <CardDescription>
              Only one temperature mutation can be selected, affecting crop
              growth environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {temperatureMutations.map((mutation) => (
                <div
                  key={mutation.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  style={{ borderColor: mutation.color }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{mutation.name}</h3>
                    <span
                      className="font-bold"
                      style={{ color: mutation.color }}
                    >
                      ×{mutation.multiplier}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {mutation.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Mutations */}
        <Card>
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ✨ Environmental Mutations
            </CardTitle>
            <CardDescription>
              Multiple environmental mutations can be selected, providing
              various special effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {environmentalMutations.map((mutation) => (
                <div
                  key={mutation.id}
                  className="p-3 border rounded-lg hover:shadow-md transition-shadow"
                  style={{ borderColor: mutation.color }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-sm">{mutation.name}</h3>
                    <span
                      className="font-bold text-sm"
                      style={{ color: mutation.color }}
                    >
                      ×{mutation.multiplier}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    {mutation.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mutation Combination Recommendations */}
        <Card className="mt-8">
          <CardHeader className="tech-scan-line">
            <CardTitle>Mutation Combination Recommendations</CardTitle>
            <CardDescription>
              Recommended mutation combinations for maximum value
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Basic Combination
                </h3>
                <p className="text-yellow-700 text-sm mb-2">
                  Suitable for new players
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Golden (×20)</li>
                  <li>• Wet (×2)</li>
                  <li>• Choc (×2)</li>
                  <li>• Total Multiplier: ×80</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Advanced Combination
                </h3>
                <p className="text-blue-700 text-sm mb-2">
                  Suitable for experienced players
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Rainbow (×50)</li>
                  <li>• Frozen (×10)</li>
                  <li>• Cooked (×10)</li>
                  <li>• Total Multiplier: ×5,000</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Ultimate Combination
                </h3>
                <p className="text-purple-700 text-sm mb-2">
                  Suitable for players pursuing the limit
                </p>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Rainbow (×50)</li>
                  <li>• Frozen (×10)</li>
                  <li>• Shocked (×100)</li>
                  <li>• Total Multiplier: ×50,000</li>
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
