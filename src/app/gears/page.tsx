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
            装备百科
          </h1>
          <p className="text-muted-foreground text-lg">
            完整的 Grow A Garden 装备信息大全
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        {/* 洒水器 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              💧 洒水器
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              自动浇水的设备，提高作物生长效率
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

        {/* 肥料 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🌱 肥料
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              促进作物生长的营养剂
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

        {/* 工具 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🔧 工具
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              农场工作必需的工具
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

        {/* 装饰品 */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🎨 装饰品
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              美化农场的装饰物品
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

        {/* 装备使用建议 */}
        <Card className="mt-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">装备使用建议</CardTitle>
            <CardDescription className="text-muted-foreground">
              根据装备类型和稀有度的使用建议
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">💧 洒水器</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  自动浇水设备
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 提高作物生长速度</li>
                  <li>• 减少手动浇水时间</li>
                  <li>• 高级洒水器效果更好</li>
                  <li>• 建议优先购买</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">🌱 肥料</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  促进作物生长
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 增加作物产量</li>
                  <li>• 提高突变概率</li>
                  <li>• 配合洒水器使用</li>
                  <li>• 投资回报率高</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">🔧 工具</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  农场工作工具
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 提高工作效率</li>
                  <li>• 减少体力消耗</li>
                  <li>• 高级工具效果更好</li>
                  <li>• 长期投资价值</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
                <h3 className="font-semibold text-tech-glow mb-2">🎨 装饰品</h3>
                <p className="text-muted-foreground text-sm mb-2">美化农场</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 提升农场美观度</li>
                  <li>• 增加农场价值</li>
                  <li>• 特殊装饰有加成</li>
                  <li>• 后期投资选择</li>
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
