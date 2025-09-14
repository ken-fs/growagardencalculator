import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow A Garden 指南与技巧 - 专家农场策略 2024",
  description: "专家Grow A Garden指南、技巧和策略，适用于Roblox玩家。学习最佳农场方法、突变组合和交易策略，最大化你的金币收益。",
  keywords: [
    "grow a garden 指南",
    "grow a garden 技巧",
    "grow a garden 策略",
    "roblox grow a garden 指南",
    "grow a garden 农场技巧",
    "grow a garden 突变指南",
    "grow a garden 交易技巧",
    "roblox 农场指南",
  ],
};

const blogPosts = [
  {
    id: 1,
    title: "完整的Grow A Garden新手指南 2024",
    excerpt: "新玩家需要了解的关于Grow A Garden的一切，从基础农场到高级策略。",
    date: "2024-01-15",
    readTime: "8分钟阅读",
    category: "新手指南",
    slug: "complete-beginners-guide-2024",
  },
  {
    id: 2,
    title: "获得最大利润的最佳突变组合",
    excerpt: "发现最有利可图的突变组合以及如何在Grow A Garden中实现它们。",
    date: "2024-01-10", 
    readTime: "6分钟阅读",
    category: "高级策略",
    slug: "best-mutation-combinations",
  },
  {
    id: 3,
    title: "Grow A Garden交易指南：WFL分析",
    excerpt: "通过我们全面的WFL（盈利/公平/亏损）分析指南掌握Grow A Garden的交易艺术。",
    date: "2024-01-05",
    readTime: "5分钟阅读",
    category: "交易指南",
    slug: "trading-guide-wfl-analysis",
  },
  {
    id: 4,
    title: "Grow A Garden中最有利可图的10大作物",
    excerpt: "排名最有价值的作物以及何时种植它们以获得每小时最多的金币。",
    date: "2024-01-01",
    readTime: "4分钟阅读",
    category: "作物分析",
    slug: "top-10-profitable-crops",
  },
];

export default function ZhBlogPage() {
  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
            Grow A Garden 指南与技巧
          </h1>
          <p className="text-muted-foreground text-lg">
            专家策略和指南，最大化你的农场利润
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/zh/blog/${post.slug}`}
              className="block bg-secondary/30 border border-border rounded-lg p-6 hover:shadow-tech-glow transition-all duration-300 hover:bg-secondary/50 hover:scale-105 group"
            >
              <article>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-tech-blue/20 text-tech-blue text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-tech-glow transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    {post.date}
                  </span>
                  <span className="text-tech-glow hover:text-tech-cyan transition-colors text-sm font-medium group-hover:translate-x-1">
                    阅读更多 →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 border border-tech-glow/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              需要农场帮助？
            </h3>
            <p className="text-muted-foreground mb-6">
              使用我们的免费计算器来优化你的Grow A Garden策略
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/zh/"
                className="px-6 py-3 bg-tech-glow text-white rounded-lg hover:bg-tech-cyan transition-colors font-medium"
              >
                作物计算器
              </Link>
              <Link
                href="/zh/pets"
                className="px-6 py-3 bg-tech-purple text-white rounded-lg hover:bg-tech-blue transition-colors font-medium"
              >
                宠物计算器
              </Link>
              <Link
                href="/zh/trade"
                className="px-6 py-3 bg-tech-orange text-white rounded-lg hover:bg-tech-red transition-colors font-medium"
              >
                交易分析器
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}