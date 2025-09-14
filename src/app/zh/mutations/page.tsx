import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { mutations } from "@/data/mutations";
import { t } from "@/lib/i18n";
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = {
  title: "Grow A Garden 突变百科 - 完整突变指南和倍数 2024",
  description: "完整的Grow A Garden突变指南！学习所有突变类型、倍数和组合。通过最佳突变策略最大化作物价值。",
  keywords: [
    "grow a garden 突变",
    "grow a garden 突变指南", 
    "grow a garden 突变百科",
    "roblox grow a garden 突变",
    "grow a garden 生长突变",
    "grow a garden 温度突变",
    "grow a garden 环境突变",
    "grow a garden 突变倍数",
    "roblox 农场突变",
    "grow a garden 突变组合",
    "grow a garden 彩虹突变",
    "grow a garden 黄金突变",
    "grow a garden 电击突变"
  ],
  alternates: {
    canonical: '/zh/mutations',
  },
  openGraph: {
    title: "Grow A Garden 突变百科 - 完整突变指南和倍数",
    description: "完整的Grow A Garden突变指南！学习所有突变类型、倍数和组合。通过最佳突变策略最大化作物价值。",
    url: '/zh/mutations',
    type: 'article',
  }
};

export default function ZhMutationsPage() {
  const growthMutations = mutations.filter((m) => m.category === "growth");
  const temperatureMutations = mutations.filter((m) => m.category === "temperature");
  const environmentalMutations = mutations.filter((m) => m.category === "environmental");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页", 
        "item": "https://growagardencalculator.net/zh"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "突变",
        "item": "https://growagardencalculator.net/zh/mutations"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "在Grow A Garden中我可以选择多少个生长突变？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "在Grow A Garden中，你一次只能选择一个生长突变。生长突变提供最高的倍数，其中彩虹突变提供50倍，黄金突变提供20倍。"
        }
      },
      {
        "@type": "Question", 
        "name": "突变的最高倍数是多少？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "最高倍数来自于彩虹突变(50倍)、冰冻突变(10倍)和高价值环境突变如电击(100倍)的组合，可以产生50,000倍或更高的倍数。"
        }
      },
      {
        "@type": "Question",
        "name": "我可以同时使用多个环境突变吗？",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "是的，你可以在Grow A Garden中同时使用多个环境突变。它们会相互相乘以创造非常高的总倍数。"
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      
      <div className="min-h-screen tech-dark-gradient relative">
        <div className="matrix-bg"></div>
        <Navigation />
        <main className="max-w-7xl mx-auto p-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
              {t('wiki.mutations.title', 'zh')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('wiki.mutations.subtitle', 'zh')}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
          </div>

          {/* Navigation Breadcrumb */}
          <nav className="flex mb-8 text-sm" aria-label="面包屑">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/zh" className="text-tech-blue hover:text-tech-purple transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-600">突变</span>
              </li>
            </ol>
          </nav>

          {/* Growth Mutations */}
          <Card className="mb-8 tech-card shadow-tech-glow" id="growth-mutations">
            <CardHeader className="tech-scan-line">
              <CardTitle className="flex items-center gap-2 text-tech-glow text-2xl">
                ⭐ 生长突变
              </CardTitle>
              <CardDescription className="text-base">
                只能选择一个生长突变，提供最高的价值倍数
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {growthMutations.map((mutation) => (
                  <div
                    key={mutation.id}
                    className="p-6 border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                    style={{ borderColor: mutation.color }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-xl">{mutation.name}</h3>
                      <span
                        className="text-3xl font-bold px-3 py-1 rounded-lg"
                        style={{ color: mutation.color, backgroundColor: `${mutation.color}20` }}
                      >
                        ×{mutation.multiplier}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {mutation.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Temperature Mutations */}
          <Card className="mb-8 tech-card shadow-tech-glow" id="temperature-mutations">
            <CardHeader className="tech-scan-line">
              <CardTitle className="flex items-center gap-2 text-tech-glow text-2xl">
                ❄️ 温度突变
              </CardTitle>
              <CardDescription className="text-base">
                只能选择一个温度突变，影响作物生长环境
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {temperatureMutations.map((mutation) => (
                  <div
                    key={mutation.id}
                    className="p-4 border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                    style={{ borderColor: mutation.color }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg">{mutation.name}</h3>
                      <span
                        className="font-bold text-lg px-2 py-1 rounded"
                        style={{ color: mutation.color, backgroundColor: `${mutation.color}20` }}
                      >
                        ×{mutation.multiplier}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {mutation.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Environmental Mutations */}
          <Card className="mb-8" id="environmental-mutations">
            <CardHeader className="tech-scan-line">
              <CardTitle className="flex items-center gap-2 text-tech-glow text-2xl">
                ✨ 环境突变
              </CardTitle>
              <CardDescription className="text-base">
                可以选择多个环境突变，提供各种特殊效果
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {environmentalMutations
                  .sort((a, b) => b.multiplier - a.multiplier)
                  .map((mutation) => (
                  <div
                    key={mutation.id}
                    className="p-3 border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                    style={{ borderColor: mutation.color }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-sm">{mutation.name}</h3>
                      <span
                        className="font-bold text-sm px-2 py-1 rounded"
                        style={{ color: mutation.color, backgroundColor: `${mutation.color}20` }}
                      >
                        ×{mutation.multiplier}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      {mutation.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mutation Combination Recommendations */}
          <Card className="mb-8">
            <CardHeader className="tech-scan-line">
              <CardTitle className="text-2xl text-tech-glow">突变组合推荐</CardTitle>
              <CardDescription className="text-base">
                获得最大价值的推荐突变组合
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg border border-yellow-300">
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3 text-lg">
                    基础组合
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-4">
                    适合新手玩家
                  </p>
                  <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-2">
                    <li>• 黄金 (×20)</li>
                    <li>• 潮湿 (×2)</li>
                    <li>• 巧克力 (×2)</li>
                    <li className="font-semibold">• 总倍数: ×80</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">
                    进阶组合
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                    适合有经验的玩家
                  </p>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                    <li>• 彩虹 (×50)</li>
                    <li>• 冰冻 (×10)</li>
                    <li>• 烹饪 (×10)</li>
                    <li className="font-semibold">• 总倍数: ×5,000</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-300">
                  <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg">
                    终极组合
                  </h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-4">
                    适合追求极限的玩家
                  </p>
                  <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-2">
                    <li>• 彩虹 (×50)</li>
                    <li>• 冰冻 (×10)</li>
                    <li>• 电击 (×100)</li>
                    <li className="font-semibold">• 总倍数: ×50,000</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content Section */}
          <section className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-tech-glow mb-6">Grow A Garden完整突变指南</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">理解突变系统</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Grow A Garden中的突变是可以大幅增加作物价值的特殊修饰符。突变系统基于三个类别：
                  生长、温度和环境突变。每个类别都有特定的规则和限制，玩家必须理解这些才能最大化利润。
                </p>
                
                <h3 className="text-xl font-semibold mb-4">突变类别详解</h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                  <li>• <strong>生长突变:</strong> 只能选择一个。彩虹(50倍)是最有价值的。</li>
                  <li>• <strong>温度突变:</strong> 只能选择一个。冰冻(10倍)提供最高倍数。</li>
                  <li>• <strong>环境突变:</strong> 可以选择多个，它们会相互相乘。</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">高级突变策略</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  专业的Grow A Garden玩家首先专注于获得彩虹和冰冻突变，因为这些为高倍数提供了基础。
                  一旦你有了这些，就专注于收集高价值的环境突变，如电击(100倍)、天体(100倍)和银河(100倍)。
                </p>
                
                <h3 className="text-xl font-semibold mb-4">计算总倍数</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  总突变倍数通过将所有活跃突变相乘计算：
                  <br />
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    总计 = 生长 × 温度 × 环境₁ × 环境₂ × ...
                  </code>
                </p>
                
                <p className="text-gray-600 dark:text-gray-400">
                  例如：彩虹(50倍) × 冰冻(10倍) × 电击(100倍) = 50,000倍总倍数！
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}