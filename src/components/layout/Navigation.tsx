"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { title: "计算器", href: "/", description: "作物价值计算" },
    { title: "重量计算器", href: "/weight", description: "宠物重量计算" },
    { title: "宠物计算器", href: "/pets", description: "宠物价值计算" },
    { title: "突变百科", href: "/mutations", description: "突变信息大全" },
    { title: "作物百科", href: "/crops", description: "作物信息大全" },
    { title: "宠物百科", href: "/pets-wiki", description: "宠物信息大全" },
    { title: "装备百科", href: "/gears", description: "装备信息大全" },
    { title: "交易分析", href: "/trade", description: "WFL 交易分析" },
  ];

  return (
    <nav className={cn("tech-card shadow-tech-glow tech-scan-line", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center shadow-tech-glow group-hover:animate-pulse-glow transition-all duration-300">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-tech-glow transition-colors duration-300">
                Grow A Garden 计算器
              </span>
            </Link>
          </div>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-tech-glow px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-tech-glow hover:bg-secondary/50 relative group"
              >
                <span className="relative z-10">{item.title}</span>
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-tech-glow hover:shadow-tech-glow transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {isMounted && isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary/50 rounded-lg mt-2 border border-tech-glow/30 shadow-tech-glow">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-tech-glow hover:bg-secondary/70 transition-all duration-300 hover:shadow-tech-glow group"
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <div className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground/70 group-hover:text-tech-glow/70 transition-colors duration-300">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
