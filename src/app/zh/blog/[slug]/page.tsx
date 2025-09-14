import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ShareButton } from "@/components/ShareButton";

// Chinese blog posts data
const zhBlogPosts = [
  {
    id: 1,
    title: "完整的Grow A Garden新手指南 2024",
    excerpt: "新玩家需要了解的关于Grow A Garden的一切，从基础农场到高级策略。",
    content: `
# 完整的Grow A Garden新手指南 2024

欢迎来到Grow A Garden的终极新手指南！无论你是Roblox农场游戏的新手，还是刚开始你在这个令人上瘾的农场模拟器中的旅程，这个全面的指南将帮助你从头开始建立一个有利可图的农场。

## 什么是Grow A Garden？

Grow A Garden是Roblox上最受欢迎的农场模拟游戏之一，玩家在其中种植作物、收集宠物和交易物品来建立他们的农场帝国。游戏具有复杂的经济系统，包括突变、稀有作物和价值数百万金币的珍贵宠物。

## 入门：你的第一个农场

### 1. 选择你的起始作物
当你第一次开始时，专注于这些容易获得且有利可图的常见作物：
- **苹果**（248基础价值）- 很好的起始水果
- **胡萝卜**（312基础价值）- 可靠的蔬菜选择
- **草莓**（178基础价值）- 快速生长的水果

### 2. 了解基础知识
- **基础价值**：每种作物的基础金币价值
- **重量**：更重的作物价值更高
- **数量**：更多作物=更多利润
- **好友加成**：与朋友一起游戏可获得百分比奖励

## 突变系统

突变是在Grow A Garden中获得巨额利润的关键。以下是初学者需要了解的：

### 生长突变（只能选择一个）
- **黄金突变**（20倍倍数）- 初学者更容易获得
- **彩虹突变**（50倍倍数）- 终极目标

### 温度突变（只能选择一个）
- **潮湿**（2倍倍数）- 容易获得
- **寒冷**（2倍倍数）- 常见选择
- **湿透**（5倍倍数）- 更好的选择
- **冰冻**（10倍倍数）- 最佳温度突变

### 环境突变（允许多个）
这些突变可以叠加并相互倍增：
- 从像**巧克力**（2倍）这样的低倍数突变开始
- 努力获得像**烹饪**（10倍）这样的更高倍数
- 终极目标：**电击**（100倍）或**天体**（100倍）

## 初学者交易技巧

### 理解WFL（盈利/公平/亏损）
- **盈利**：你获得超过10%的利润
- **公平**：利润差在-10%到+10%之间
- **亏损**：你损失超过10%的价值

### 安全交易实践
1. 接受交易前始终使用我们的交易分析器
2. 了解你正在交易物品的基础价值
3. 在计算中考虑突变倍数
4. 不要急躁 - 花时间评估每笔交易

## 宠物收集策略

### 起始宠物
专注于这些更容易获得的常见宠物：
- **农场鸡**- 很好的起始宠物
- **奶牛**- 可靠的农场动物
- **绵羊**- 常见但有价值

### 宠物重量系统
- 更重的宠物价值呈指数增长
- 10公斤的宠物可能比5公斤的宠物价值高10倍
- 使用我们的宠物重量计算器确定确切价值

## 作物发展路径

### 第1-2周：基础建设
- 专注于常见作物（苹果、胡萝卜、草莓）
- 学习基本游戏机制
- 开始收集你的第一个突变

### 第3-4周：扩展运营
- 可能时转向不常见的作物
- 开始尝试突变组合
- 开始与其他玩家进行基础交易

### 第2个月+：高级农场
- 目标稀有和史诗作物
- 优化突变组合以获得最大倍数
- 参与高价值交易

## 常见初学者错误

### 1. 不理解突变
- **错误**：使用多个生长或温度突变
- **解决方案**：记住每个类别一个的规则

### 2. 糟糕的交易决策
- **错误**：不计算价值就接受交易
- **解决方案**：交易前始终使用我们的计算器

### 3. 只关注数量
- **错误**：种植许多低价值作物而不是更少的高价值作物
- **解决方案**：质量胜过数量 - 专注于突变和重量

### 4. 忽视好友奖励
- **错误**：当朋友提供有价值奖励时独自游戏
- **解决方案**：与其他玩家组队获得百分比加成

## 必备工具和计算器

### 我们的免费工具
1. **作物价值计算器** - 用突变计算确切的作物价值
2. **宠物重量计算器** - 准确确定宠物价值
3. **交易分析器** - 通过WFL分析确保有利可图的交易

### 如何使用计算器
1. 输入你的作物类型和重量
2. 选择你的活跃突变
3. 如果适用，添加好友加成百分比
4. 获得即时价值计算

## 初学者高级技巧

### 突变狩猎策略
- 从黄金+潮湿+巧克力组合开始（总倍数80倍）
- 逐渐努力获得彩虹+冰冻+更高环境突变
- 不要急躁 - 好的突变需要时间获得

### 市场时机
- 某些作物在特定更新期间更有价值
- 跟踪游戏更新和元变化
- 加入社区以了解市场趋势

### 建立你的声誉
- 在交易中诚实以建立信任
- 在可能时帮助其他新玩家
- 加入活跃的Grow A Garden社区和Discord服务器

## 设定你的目标

### 短期目标（第一个月）
- [ ] 获得你的第一个黄金突变
- [ ] 达到总价值1,000,000金币
- [ ] 完成10次成功交易
- [ ] 学习所有作物类别和基础价值

### 中期目标（2-3个月）
- [ ] 获得彩虹突变
- [ ] 实现100倍+总突变倍数
- [ ] 拥有至少一种稀有作物
- [ ] 建立多样化的宠物收藏

### 长期目标（6个月+）
- [ ] 掌握高级突变组合
- [ ] 拥有传说作物和宠物
- [ ] 成为社区中成功的交易者
- [ ] 帮助其他初学者学习游戏

## 结论

Grow A Garden是一个复杂但有回报的农场游戏，奖励耐心、策略和明智的交易。记住成功不是一夜之间发生的 - 即使是经验丰富的玩家也是从初学者开始的。

最重要的建议：**享受乐趣，不要气馁！** 每个专家都曾经是初学者，通过持续游戏和明智决策，你将建立一个令人惊叹的农场。

定期使用我们的计算器，加入社区，不要犹豫提问。Grow A Garden社区通常对新玩家很有帮助和支持。

祝你的农场之旅好运，愿你的作物带着最好的突变成长！🌱✨
    `,
    date: "2024-01-15",
    readTime: "8分钟阅读",
    category: "新手指南",
    slug: "complete-beginners-guide-2024",
    author: "Grow A Garden 专家团队",
    keywords: ["grow a garden 新手指南", "roblox 农场指南", "grow a garden 技巧", "农场模拟器指南"]
  },
  // Add more Chinese posts here...
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = zhBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: '文章未找到',
      description: '请求的文章无法找到。'
    };
  }

  return {
    title: `${post.title} - Grow A Garden Calculator`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `/zh/blog/${post.slug}`,
    }
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return zhBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ZhBlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = zhBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Grow A Garden Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growagardencalculator.net/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://growagardencalculator.net/zh/blog/${slug}`
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length,
    "inLanguage": "zh-CN"
  };

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
        "name": "博客",
        "item": "https://growagardencalculator.net/zh/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://growagardencalculator.net/zh/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      
      <div className="min-h-screen tech-dark-gradient relative">
        <div className="matrix-bg"></div>
        <Navigation />
        <main className="max-w-4xl mx-auto p-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8 text-sm" aria-label="面包屑">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/zh" className="text-tech-blue hover:text-tech-purple transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <Link href="/zh/blog" className="text-tech-blue hover:text-tech-purple transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-600">{post.title}</span>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-tech-blue/20 text-tech-blue text-sm rounded-full">
                {post.category}
              </span>
              <span className="text-muted-foreground text-sm">
                {post.readTime}
              </span>
              <span className="text-muted-foreground text-sm">
                {post.date}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>作者：{post.author}</span>
            </div>
            
            <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mt-6 rounded-full shadow-tech-glow"></div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} /g, match => {
                  const level = match.length - 1;
                  return `<h${level} class="text-tech-glow font-bold mb-4 mt-8">`;
                }).replace(/\*\*(.*?)\*\*/g, '<strong class="text-tech-blue">$1</strong>')
              }} 
            />
          </article>

          {/* Article Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link 
                href="/zh/blog"
                className="flex items-center gap-2 px-6 py-3 bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-colors"
              >
                ← 返回博客
              </Link>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">分享：</span>
                <ShareButton
                  title={post.title}
                  url={`https://growagardencalculator.net/zh/blog/${slug}`}
                  className="px-4 py-2 bg-tech-blue/20 hover:bg-tech-blue/30 text-tech-blue rounded-lg transition-colors"
                >
                  分享文章
                </ShareButton>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">更多指南</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {zhBlogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/zh/blog/${relatedPost.slug}`}
                  className="block p-6 bg-secondary/30 hover:bg-secondary/50 border border-border rounded-lg transition-all duration-300 hover:shadow-tech-glow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-tech-purple/20 text-tech-purple text-xs rounded-full">
                      {relatedPost.category}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {relatedPost.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 hover:text-tech-glow transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}