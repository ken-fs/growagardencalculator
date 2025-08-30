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
        return "text-gray-600 bg-gray-100";
      case "uncommon":
        return "text-green-600 bg-green-100";
      case "rare":
        return "text-blue-600 bg-blue-100";
      case "epic":
        return "text-purple-600 bg-purple-100";
      case "legendary":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">作物百科</h1>
          <p className="text-gray-600">完整的 Grow A Garden 作物信息大全</p>
        </div>

        {/* 水果作物 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
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
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{crop.name}</h3>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
                    </span>
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 蔬菜作物 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🥕 蔬菜作物
            </CardTitle>
            <CardDescription>营养丰富的蔬菜，适合日常种植</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {vegetableCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{crop.name}</h3>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
                    </span>
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 花卉作物 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌸 花卉作物
            </CardTitle>
            <CardDescription>美丽的花朵，装饰你的花园</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {flowerCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{crop.name}</h3>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
                    </span>
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 特殊作物 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⭐ 特殊作物
            </CardTitle>
            <CardDescription>稀有珍贵的特殊作物，价值极高</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {specialCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{crop.name}</h3>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(crop.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        crop.rarity
                      )}`}
                    >
                      {getRarityText(crop.rarity)}
                    </span>
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 种植建议 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>种植建议</CardTitle>
            <CardDescription>根据作物类型和稀有度的种植建议</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">新手推荐</h3>
                <p className="text-gray-600 text-sm mb-2">适合刚开始的玩家</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 苹果 (248 Sheckles)</li>
                  <li>• 胡萝卜 (89 Sheckles)</li>
                  <li>• 玫瑰 (189 Sheckles)</li>
                  <li>• 投资少，回报稳定</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">进阶推荐</h3>
                <p className="text-green-600 text-sm mb-2">有一定经验的玩家</p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• 龙果 (445 Sheckles)</li>
                  <li>• 洋蓟 (234 Sheckles)</li>
                  <li>• 兰花 (289 Sheckles)</li>
                  <li>• 平衡收益与风险</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">高级推荐</h3>
                <p className="text-blue-600 text-sm mb-2">经验丰富的玩家</p>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• 金苹果 (1,240 Sheckles)</li>
                  <li>• 水晶浆果 (890 Sheckles)</li>
                  <li>• 月亮果实 (1,560 Sheckles)</li>
                  <li>• 高投入高回报</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">终极推荐</h3>
                <p className="text-purple-600 text-sm mb-2">追求极限的玩家</p>
                <ul className="text-purple-600 text-sm space-y-1">
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
