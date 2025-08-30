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
  title: "宠物百科 - Grow A Garden 计算器",
  description:
    "完整的 Grow A Garden 宠物信息大全，包含所有宠物类型、价值和稀有度。",
};

export default function PetsWikiPage() {
  const farmPets = pets.filter((p) => p.category === "farm");
  const wildPets = pets.filter((p) => p.category === "wild");
  const specialPets = pets.filter((p) => p.category === "special");

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">宠物百科</h1>
          <p className="text-gray-600">完整的 Grow A Garden 宠物信息大全</p>
        </div>

        {/* 农场宠物 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🐄 农场宠物
            </CardTitle>
            <CardDescription>传统的农场动物，适合新手玩家</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {farmPets.map((pet) => (
                <div
                  key={pet.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{pet.name}</h3>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        pet.rarity
                      )}`}
                    >
                      {getRarityText(pet.rarity)}
                    </span>
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 野生动物 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🦊 野生动物
            </CardTitle>
            <CardDescription>野生的动物，需要更多技巧才能获得</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {wildPets.map((pet) => (
                <div
                  key={pet.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{pet.name}</h3>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        pet.rarity
                      )}`}
                    >
                      {getRarityText(pet.rarity)}
                    </span>
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 特殊宠物 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⭐ 特殊宠物
            </CardTitle>
            <CardDescription>稀有珍贵的特殊宠物，价值极高</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {specialPets.map((pet) => (
                <div
                  key={pet.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{pet.name}</h3>
                    <span className="text-lg font-bold text-green-600">
                      {formatCurrency(pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(
                        pet.rarity
                      )}`}
                    >
                      {getRarityText(pet.rarity)}
                    </span>
                    <span className="text-sm text-gray-500">Sheckles</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 宠物获取建议 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>宠物获取建议</CardTitle>
            <CardDescription>根据宠物类型和稀有度的获取建议</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">新手推荐</h3>
                <p className="text-gray-600 text-sm mb-2">适合刚开始的玩家</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 奶牛 (500 Sheckles)</li>
                  <li>• 鸡 (300 Sheckles)</li>
                  <li>• 猪 (400 Sheckles)</li>
                  <li>• 容易获得，价值稳定</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">进阶推荐</h3>
                <p className="text-green-600 text-sm mb-2">有一定经验的玩家</p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• 狐狸 (1,200 Sheckles)</li>
                  <li>• 狼 (1,500 Sheckles)</li>
                  <li>• 熊 (2,000 Sheckles)</li>
                  <li>• 需要更多技巧获得</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">高级推荐</h3>
                <p className="text-purple-600 text-sm mb-2">经验丰富的玩家</p>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• 金奶牛 (5,000 Sheckles)</li>
                  <li>• 彩虹鸡 (3,000 Sheckles)</li>
                  <li>• 水晶猪 (4,000 Sheckles)</li>
                  <li>• 高价值特殊宠物</li>
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
