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
  title: "装备百科 - Grow A Garden 计算器",
  description:
    "完整的 Grow A Garden 装备信息大全，包含所有装备类型、价值和稀有度。",
};

export default function GearsPage() {
  const sprinklers = gears.filter((g) => g.category === "sprinkler");
  const fertilizers = gears.filter((g) => g.category === "fertilizer");
  const tools = gears.filter((g) => g.category === "tool");
  const decorations = gears.filter((g) => g.category === "decoration");

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">装备百科</h1>
          <p className="text-gray-600">完整的 Grow A Garden 装备信息大全</p>
        </div>

        {/* 洒水器 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">💧 洒水器</CardTitle>
            <CardDescription>自动浇水的设备，提高作物生长效率</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sprinklers.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{gear.name}</h3>
                    <span className="text-lg font-bold text-green-600">
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
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 肥料 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">🌱 肥料</CardTitle>
            <CardDescription>促进作物生长的营养剂</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fertilizers.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{gear.name}</h3>
                    <span className="text-lg font-bold text-green-600">
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
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 工具 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">🔧 工具</CardTitle>
            <CardDescription>农场工作必需的工具</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tools.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{gear.name}</h3>
                    <span className="text-lg font-bold text-green-600">
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
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 装饰品 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">🎨 装饰品</CardTitle>
            <CardDescription>美化农场的装饰物品</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {decorations.map((gear) => (
                <div
                  key={gear.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{gear.name}</h3>
                    <span className="text-lg font-bold text-green-600">
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
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 装备使用建议 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>装备使用建议</CardTitle>
            <CardDescription>根据装备类型和稀有度的使用建议</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">💧 洒水器</h3>
                <p className="text-blue-600 text-sm mb-2">自动浇水设备</p>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• 提高作物生长速度</li>
                  <li>• 减少手动浇水时间</li>
                  <li>• 高级洒水器效果更好</li>
                  <li>• 建议优先购买</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">🌱 肥料</h3>
                <p className="text-green-600 text-sm mb-2">促进作物生长</p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• 增加作物产量</li>
                  <li>• 提高突变概率</li>
                  <li>• 配合洒水器使用</li>
                  <li>• 投资回报率高</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">🔧 工具</h3>
                <p className="text-orange-600 text-sm mb-2">农场工作工具</p>
                <ul className="text-orange-600 text-sm space-y-1">
                  <li>• 提高工作效率</li>
                  <li>• 减少体力消耗</li>
                  <li>• 高级工具效果更好</li>
                  <li>• 长期投资价值</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">
                  🎨 装饰品
                </h3>
                <p className="text-purple-600 text-sm mb-2">美化农场</p>
                <ul className="text-purple-600 text-sm space-y-1">
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
