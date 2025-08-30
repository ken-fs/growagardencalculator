"use client";

import React, { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { analyzeTrade, formatCurrency } from "@/utils/calculator";
import { TradeAnalysis } from "@/types";

export const TradeAnalyzer: React.FC = () => {
  const [yourValue, setYourValue] = useState<number>(0);
  const [theirValue, setTheirValue] = useState<number>(0);
  const [analysis, setAnalysis] = useState<TradeAnalysis | null>(null);

  const handleYourValueChange = useCallback((value: number) => {
    setYourValue(value);
  }, []);

  const handleTheirValueChange = useCallback((value: number) => {
    setTheirValue(value);
  }, []);

  const handleAnalyze = useCallback(() => {
    if (yourValue > 0 && theirValue > 0) {
      const result = analyzeTrade(yourValue, theirValue);
      setAnalysis(result);
    }
  }, [yourValue, theirValue]);

  const handleReset = useCallback(() => {
    setYourValue(0);
    setTheirValue(0);
    setAnalysis(null);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
          WFL 交易分析器
        </h1>
        <p className="text-muted-foreground text-lg">
          分析交易是否公平，判断 Win/Fair/Loss
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 输入区域 */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">交易价值输入</CardTitle>
            <CardDescription className="text-muted-foreground">
              输入你和对方的物品价值
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-tech-glow mb-2">
                你的物品价值 (Sheckles)
              </label>
              <Input
                type="number"
                value={yourValue || ""}
                onChange={(e) => handleYourValueChange(Number(e.target.value))}
                placeholder="输入你的物品价值"
                min="0"
                className="tech-input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-tech-glow mb-2">
                对方的物品价值 (Sheckles)
              </label>
              <Input
                type="number"
                value={theirValue || ""}
                onChange={(e) => handleTheirValueChange(Number(e.target.value))}
                placeholder="输入对方的物品价值"
                min="0"
                className="tech-input"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleAnalyze}
                className="flex-1 tech-button"
                disabled={yourValue <= 0 || theirValue <= 0}
              >
                分析交易
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-tech-glow"
              >
                重置
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 结果区域 */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">交易分析结果</CardTitle>
            <CardDescription className="text-muted-foreground">
              交易价值分析
            </CardDescription>
          </CardHeader>
          <CardContent>
            {analysis ? (
              <div className="space-y-4">
                {/* 主要结果 */}
                <div
                  className={`text-center p-6 rounded-lg tech-gradient shadow-tech-glow animate-pulse-glow ${
                    analysis.isWin
                      ? "border-2 border-tech-green"
                      : analysis.isFair
                      ? "border-2 border-tech-blue"
                      : "border-2 border-tech-red"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold ${
                      analysis.isWin
                        ? "text-tech-green"
                        : analysis.isFair
                        ? "text-tech-blue"
                        : "text-tech-red"
                    }`}
                  >
                    {analysis.isWin ? "WIN" : analysis.isFair ? "FAIR" : "LOSS"}
                  </div>
                  <div
                    className={`text-lg ${
                      analysis.isWin
                        ? "text-tech-green"
                        : analysis.isFair
                        ? "text-tech-blue"
                        : "text-tech-red"
                    }`}
                  >
                    {analysis.recommendation}
                  </div>
                </div>

                {/* 详细数据 */}
                <div className="space-y-3">
                  <div className="flex justify-between bg-secondary/30 p-3 rounded-lg border border-tech-glow/30">
                    <span className="text-muted-foreground">你的价值:</span>
                    <span className="font-medium text-tech-glow">
                      {formatCurrency(yourValue)}
                    </span>
                  </div>
                  <div className="flex justify-between bg-secondary/30 p-3 rounded-lg border border-tech-glow/30">
                    <span className="text-muted-foreground">对方价值:</span>
                    <span className="font-medium text-tech-glow">
                      {formatCurrency(theirValue)}
                    </span>
                  </div>
                  <div className="flex justify-between bg-secondary/30 p-3 rounded-lg border border-tech-glow/30">
                    <span className="text-muted-foreground">利润/亏损:</span>
                    <span
                      className={`font-medium ${
                        analysis.profit >= 0
                          ? "text-tech-green"
                          : "text-tech-red"
                      }`}
                    >
                      {analysis.profit >= 0 ? "+" : ""}
                      {formatCurrency(analysis.profit)}
                    </span>
                  </div>
                  <div className="flex justify-between bg-secondary/30 p-3 rounded-lg border border-tech-glow/30">
                    <span className="text-muted-foreground">利润率:</span>
                    <span
                      className={`font-medium ${
                        analysis.profitPercentage >= 0
                          ? "text-tech-green"
                          : "text-tech-red"
                      }`}
                    >
                      {analysis.profitPercentage >= 0 ? "+" : ""}
                      {analysis.profitPercentage.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* 交易建议 */}
                <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
                  <h4 className="font-medium text-tech-glow mb-2">交易建议:</h4>
                  <p className="text-sm text-muted-foreground">
                    {analysis.isWin
                      ? "这个交易对你很有利，建议接受！"
                      : analysis.isFair
                      ? "这是一个公平的交易，可以根据个人喜好决定。"
                      : "这个交易可能不太划算，建议重新考虑或寻找更好的交易。"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                输入交易价值并点击&quot;分析交易&quot;查看结果
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 交易提示 */}
      <Card className="tech-card shadow-tech-glow">
        <CardHeader className="tech-scan-line">
          <CardTitle className="text-tech-glow">交易分析说明</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
              <div className="text-2xl font-bold text-tech-green mb-2">WIN</div>
              <div className="text-sm text-muted-foreground">
                你的物品价值高于对方，利润超过10%
              </div>
            </div>
            <div className="text-center p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
              <div className="text-2xl font-bold text-tech-blue mb-2">FAIR</div>
              <div className="text-sm text-muted-foreground">
                双方物品价值相当，利润在±10%之间
              </div>
            </div>
            <div className="text-center p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
              <div className="text-2xl font-bold text-tech-red mb-2">LOSS</div>
              <div className="text-sm text-muted-foreground">
                你的物品价值低于对方，亏损超过10%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
