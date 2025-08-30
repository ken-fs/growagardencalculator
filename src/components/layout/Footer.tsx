import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="tech-card shadow-tech-glow border-t border-tech-glow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 网站信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center shadow-tech-glow">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-tech-glow">
                Grow A Garden 计算器
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              专业的 Grow A Garden
              游戏计算器，帮助你计算作物价值、分析交易、优化农场收益。
              支持所有突变类型、宠物重量计算和交易分析功能。
            </p>
            <div className="text-sm text-muted-foreground/70 space-y-2">
              <p>© 2025 Grow A Garden Calculator. All rights reserved.</p>
              <p>
                免责声明：本网站与 Gamer Robot Inc 和 Grow A Garden 无官方关联。
              </p>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tech-glow">
              快速链接
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-cyan">⚡</span>
                  计算器
                </Link>
              </li>
              <li>
                <Link
                  href="/weight"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-blue">⚖️</span>
                  重量计算器
                </Link>
              </li>
              <li>
                <Link
                  href="/pets"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-purple">🐾</span>
                  宠物计算器
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-orange">💎</span>
                  交易分析
                </Link>
              </li>
            </ul>
          </div>

          {/* 百科大全 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tech-glow">
              百科大全
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mutations"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-cyan">🧬</span>
                  突变百科
                </Link>
              </li>
              <li>
                <Link
                  href="/crops"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-green">🌱</span>
                  作物百科
                </Link>
              </li>
              <li>
                <Link
                  href="/pets-wiki"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-purple">🐾</span>
                  宠物百科
                </Link>
              </li>
              <li>
                <Link
                  href="/gears"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-orange">⚔️</span>
                  装备百科
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="border-t border-tech-glow/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              <p className="flex items-center">
                <span className="mr-2 text-tech-glow">🚀</span>
                最新更新：Beanstalk 更新！🍕 烹饪食谱！🎁 所有 Roblox 游戏代码！
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-tech-glow transition-all duration-300 hover:translate-y-[-2px]"
              >
                隐私政策
              </Link>
              <Link
                href="/terms"
                className="hover:text-tech-glow transition-all duration-300 hover:translate-y-[-2px]"
              >
                服务条款
              </Link>
              <Link
                href="/contact"
                className="hover:text-tech-glow transition-all duration-300 hover:translate-y-[-2px]"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
