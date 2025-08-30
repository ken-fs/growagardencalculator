import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow A Garden Guide & Tips - Expert Farming Strategies 2024",
  description:
    "Expert Grow A Garden guides, tips, and strategies for Roblox players. Learn the best farming methods, mutation combinations, and trading strategies to maximize your sheckles.",
  keywords: [
    "grow a garden guide",
    "grow a garden tips",
    "grow a garden strategies",
    "roblox grow a garden guide",
    "grow a garden farming tips",
    "grow a garden mutation guide",
    "grow a garden trading tips",
    "roblox farming guide",
  ],
};

const blogPosts = [
  {
    id: 1,
    title: "Complete Grow A Garden Beginner's Guide 2024",
    excerpt:
      "Everything new players need to know about Grow A Garden, from basic farming to advanced strategies.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Beginner Guide",
    slug: "complete-beginners-guide-2024",
  },
  {
    id: 2,
    title: "Best Mutation Combinations for Maximum Profits",
    excerpt:
      "Discover the most profitable mutation combinations and how to achieve them in Grow A Garden.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Advanced Strategy",
    slug: "best-mutation-combinations",
  },
  {
    id: 3,
    title: "Grow A Garden Trading Guide: WFL Analysis",
    excerpt:
      "Master the art of trading in Grow A Garden with our comprehensive WFL (Win/Fair/Loss) analysis guide.",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Trading Guide",
    slug: "trading-guide-wfl-analysis",
  },
  {
    id: 4,
    title: "Top 10 Most Profitable Crops in Grow A Garden",
    excerpt:
      "Ranking the most valuable crops and when to plant them for maximum sheckles per hour.",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "Crop Analysis",
    slug: "top-10-profitable-crops",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen tech-dark-gradient relative">
      {/* Tech background effect */}
      <div className="matrix-bg"></div>
      <Navigation />
      <main className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
            Grow A Garden Guide & Tips
          </h1>
          <p className="text-muted-foreground text-lg">
            Expert strategies and guides to maximize your farming profits
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-secondary/30 border border-border rounded-lg p-6 hover:shadow-tech-glow transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-tech-blue/20 text-tech-blue text-xs rounded-full">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-sm">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2 hover:text-tech-glow transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">
                  {post.date}
                </span>
                <button className="text-tech-glow hover:text-tech-cyan transition-colors text-sm font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 border border-tech-glow/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Help with Your Farm?
            </h3>
            <p className="text-muted-foreground mb-6">
              Use our free calculators to optimize your Grow A Garden strategy
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-tech-glow text-white rounded-lg hover:bg-tech-cyan transition-colors font-medium"
              >
                Crop Calculator
              </Link>
              <Link
                href="/pets"
                className="px-6 py-3 bg-tech-purple text-white rounded-lg hover:bg-tech-blue transition-colors font-medium"
              >
                Pet Calculator
              </Link>
              <Link
                href="/trade"
                className="px-6 py-3 bg-tech-orange text-white rounded-lg hover:bg-tech-red transition-colors font-medium"
              >
                Trade Analyzer
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
