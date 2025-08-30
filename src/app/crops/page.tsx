import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { crops } from "@/data/crops";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/calculator";

export const metadata = {
  title: "作物百科 - Grow A Garden 计算器",
  description:
    "完整的 Grow A Garden 作物信息大全，包含所有作物类型、价值和稀有度。",
};

export default function CropsPage() {
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
        return "普通";
      case "uncommon":
        return "不常见";
      case "rare":
        return "稀有";
      case "epic":
        return "史诗";
      case "legendary":
        return "传说";
      default:
        return "未知";
    }
  };

  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* 科技背景效果 */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
            作物百科
          </h1>
          <p className="text-muted-foreground text-lg">
            完整的 Grow A Garden 作物信息大全
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        {/* 水果作物 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🍎 水果作物
            </CardTitle>
            <CardDescription>
              各种美味的水果，提供不同的基础价值
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fruitCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {crop.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
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

        {/* 蔬菜作物 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🥕 蔬菜作物
            </CardTitle>
            <CardDescription>营养丰富的蔬菜，适合日常种植</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {vegetableCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {crop.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
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

        {/* 花卉作物 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              🌸 花卉作物
            </CardTitle>
            <CardDescription>美丽的花朵，装饰你的花园</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {flowerCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {crop.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
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

        {/* 特殊作物 */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ⭐ 特殊作物
            </CardTitle>
            <CardDescription>稀有珍贵的特殊作物，价值极高</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {specialCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-foreground">
                      {crop.name}
                    </h3>
                    <span className="text-lg font-bold text-tech-glow">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
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

        {/* 种植建议 */}
        <Card className="mt-8">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">种植建议</CardTitle>
            <CardDescription>根据作物类型和稀有度的种植建议</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
                <h3 className="font-semibold text-tech-glow mb-2 flex items-center">
                  <span className="mr-2">🌱</span>
                  新手推荐
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  适合刚开始的玩家
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 苹果 (248 Sheckles)</li>
                  <li>• 胡萝卜 (89 Sheckles)</li>
                  <li>• 玫瑰 (189 Sheckles)</li>
                  <li>• 投资少，回报稳定</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 rounded-lg border border-tech-green/30">
                <h3 className="font-semibold text-tech-green mb-2 flex items-center">
                  <span className="mr-2">⚡</span>
                  进阶推荐
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  有一定经验的玩家
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 龙果 (445 Sheckles)</li>
                  <li>• 洋蓟 (234 Sheckles)</li>
                  <li>• 兰花 (289 Sheckles)</li>
                  <li>• 平衡收益与风险</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 rounded-lg border border-tech-blue/30">
                <h3 className="font-semibold text-tech-blue mb-2 flex items-center">
                  <span className="mr-2">🚀</span>
                  高级推荐
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  经验丰富的玩家
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 金苹果 (1,240 Sheckles)</li>
                  <li>• 水晶浆果 (890 Sheckles)</li>
                  <li>• 月亮果实 (1,560 Sheckles)</li>
                  <li>• 高投入高回报</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/30 rounded-lg border border-tech-purple/30">
                <h3 className="font-semibold text-tech-purple mb-2 flex items-center">
                  <span className="mr-2">💎</span>
                  终极推荐
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  追求极限的玩家
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• 彩虹果实 (3,100 Sheckles)</li>
                  <li>• 钻石甜瓜 (4,450 Sheckles)</li>
                  <li>• 需要大量资源和运气</li>
                  <li>• 最高价值作物</li>
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
