import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 网站信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">Grow A Garden 计算器</span>
            </div>
            <p className="text-gray-400 mb-4">
              专业的 Grow A Garden
              游戏计算器，帮助你计算作物价值、分析交易、优化农场收益。
              支持所有突变类型、宠物重量计算和交易分析功能。
            </p>
            <div className="text-sm text-gray-500">
              <p>© 2025 Grow A Garden Calculator. All rights reserved.</p>
              <p className="mt-1">
                免责声明：本网站与 Gamer Robot Inc 和 Grow A Garden 无官方关联。
              </p>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  计算器
                </Link>
              </li>
              <li>
                <Link
                  href="/weight"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  重量计算器
                </Link>
              </li>
              <li>
                <Link
                  href="/pets"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  宠物计算器
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  交易分析
                </Link>
              </li>
            </ul>
          </div>

          {/* 百科大全 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">百科大全</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mutations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  突变百科
                </Link>
              </li>
              <li>
                <Link
                  href="/crops"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  作物百科
                </Link>
              </li>
              <li>
                <Link
                  href="/pets-wiki"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  宠物百科
                </Link>
              </li>
              <li>
                <Link
                  href="/gears"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  装备百科
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>
                最新更新：Beanstalk 更新！🍕 烹饪食谱！🎁 所有 Roblox 游戏代码！
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                隐私政策
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                服务条款
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
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
