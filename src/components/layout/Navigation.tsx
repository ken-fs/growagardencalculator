"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  
  // Get current locale from pathname
  const currentLocale: Locale = pathname.startsWith('/zh') ? 'zh' : 'en';
  const localePrefix = currentLocale === 'en' ? '' : '/zh';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { title: t("nav.calculator", currentLocale), href: `${localePrefix}/`, description: "Crop value calculation" },
    {
      title: t("nav.pets", currentLocale),
      href: `${localePrefix}/pets`,
      description: "Pet weight and value calculation",
    },
    {
      title: t("nav.mutations", currentLocale),
      href: `${localePrefix}/mutations`,
      description: "Complete mutation guide",
    },
    { title: t("nav.crops", currentLocale), href: `${localePrefix}/crops`, description: "Complete crop guide" },
    {
      title: `${t("nav.pets", currentLocale)} Wiki`,
      href: `${localePrefix}/pets-wiki`,
      description: "Complete pet guide",
    },
    { title: t("nav.gears", currentLocale), href: `${localePrefix}/gears`, description: "Complete gear guide" },
    {
      title: t("nav.trade", currentLocale),
      href: `${localePrefix}/trade`,
      description: "WFL trade analysis",
    },
    {
      title: t("nav.blog", currentLocale),
      href: `${localePrefix}/blog`,
      description: "Expert farming guides",
    },
  ];

  return (
    <nav className={cn("tech-card shadow-tech-glow tech-scan-line", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={localePrefix || "/"} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center shadow-tech-glow group-hover:animate-pulse-glow transition-all duration-300">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-tech-glow transition-colors duration-300">
                Grow A Garden Calculator
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-tech-glow px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-tech-glow hover:bg-secondary/50 relative group",
                  pathname === item.href && "text-tech-glow bg-secondary/30"
                )}
              >
                <span className="relative z-10">{item.title}</span>
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
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

        {/* Mobile Navigation Menu */}
        {isMounted && isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary/50 rounded-lg mt-2 border border-tech-glow/30 shadow-tech-glow">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-tech-glow hover:bg-secondary/70 transition-all duration-300 hover:shadow-tech-glow group",
                    pathname === item.href && "text-tech-glow bg-secondary/30"
                  )}
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