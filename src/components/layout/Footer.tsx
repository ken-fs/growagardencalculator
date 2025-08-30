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
                Grow A Garden Calculator
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professional Grow A Garden game calculator helping you calculate
              crop values, analyze trades, and optimize farm profits. Supports
              all mutation types, pet weight calculation and trade analysis
              features.
            </p>
            <div className="text-sm text-muted-foreground/70 space-y-2">
              <p>© 2025 Grow A Garden Calculator. All rights reserved.</p>
              <p>
                Disclaimer: This website is not officially affiliated with Gamer
                Robot Inc or Grow A Garden.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tech-glow">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-cyan">⚡</span>
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/weight"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-blue">⚖️</span>
                  Weight Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/pets"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-purple">🐾</span>
                  Pet Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-orange">💎</span>
                  Trade Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Wiki Guides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tech-glow">
              Wiki Guides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mutations"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-cyan">🧬</span>
                  Mutation Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/crops"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-green">🌱</span>
                  Crop Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/pets-wiki"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-purple">🐾</span>
                  Pet Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/gears"
                  className="text-muted-foreground hover:text-tech-glow transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="mr-2 group-hover:text-tech-orange">⚔️</span>
                  Gear Wiki
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Information */}
        <div className="border-t border-tech-glow/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              <p className="flex items-center">
                <span className="mr-2 text-tech-glow">🚀</span>
                Latest Update: Beanstalk Update! 🍕 Cooking Recipes! 🎁 All
                Roblox Game Codes!
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-tech-glow transition-all duration-300 hover:translate-y-[-2px]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-tech-glow transition-all duration-300 hover:translate-y-[-2px]"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="hover:text-tech-glow transition-all duration-300 hover:translate-y-[-2px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
