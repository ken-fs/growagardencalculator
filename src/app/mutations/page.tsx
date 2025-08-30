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
  title: "突变百科 - Grow A Garden 计算器",
  description:
    "完整的 Grow A Garden 突变信息大全，包含所有突变类型、倍数和获取方法。",
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
      {/* 科技背景效果 */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
            突变百科
          </h1>
          <p className="text-muted-foreground text-lg">完整的 Grow A Garden 突变信息大全</p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        {/* 生长突变 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ⭐ 生长突变
            </CardTitle>
            <CardDescription>
              只能选择一个生长突变，提供最高的价值倍数
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

        {/* 温度突变 */}
        <Card className="mb-8 tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ❄️ 温度突变
            </CardTitle>
            <CardDescription>
              只能选择一个温度突变，影响作物的生长环境
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

        {/* 环境突变 */}
        <Card>
          <CardHeader className="tech-scan-line">
            <CardTitle className="flex items-center gap-2 text-tech-glow">
              ✨ 环境突变
            </CardTitle>
            <CardDescription>
              可以选择多个环境突变，提供各种特殊效果
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

        {/* 突变组合建议 */}
        <Card className="mt-8">
          <CardHeader className="tech-scan-line">
            <CardTitle>突变组合建议</CardTitle>
            <CardDescription>推荐的突变组合以获得最大价值</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">基础组合</h3>
                <p className="text-yellow-700 text-sm mb-2">适合新手玩家</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Golden (×20)</li>
                  <li>• Wet (×2)</li>
                  <li>• Choc (×2)</li>
                  <li>• 总倍数: ×80</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">进阶组合</h3>
                <p className="text-blue-700 text-sm mb-2">适合有经验的玩家</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Rainbow (×50)</li>
                  <li>• Frozen (×10)</li>
                  <li>• Cooked (×10)</li>
                  <li>• 总倍数: ×5,000</li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">终极组合</h3>
                <p className="text-purple-700 text-sm mb-2">
                  适合追求极限的玩家
                </p>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Rainbow (×50)</li>
                  <li>• Frozen (×10)</li>
                  <li>• Shocked (×100)</li>
                  <li>• 总倍数: ×50,000</li>
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
