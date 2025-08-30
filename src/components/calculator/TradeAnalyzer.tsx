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
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          WFL 交易分析器
        </h1>
        <p className="text-gray-600">分析交易是否公平，判断 Win/Fair/Loss</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 输入区域 */}
        <Card>
          <CardHeader>
            <CardTitle>交易价值输入</CardTitle>
            <CardDescription>输入你和对方的物品价值</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                你的物品价值 (Sheckles)
              </label>
              <Input
                type="number"
                value={yourValue || ""}
                onChange={(e) => handleYourValueChange(Number(e.target.value))}
                placeholder="输入你的物品价值"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                对方的物品价值 (Sheckles)
              </label>
              <Input
                type="number"
                value={theirValue || ""}
                onChange={(e) => handleTheirValueChange(Number(e.target.value))}
                placeholder="输入对方的物品价值"
                min="0"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleAnalyze}
                className="flex-1"
                disabled={yourValue <= 0 || theirValue <= 0}
              >
                分析交易
              </Button>
              <Button onClick={handleReset} variant="outline">
                重置
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 结果区域 */}
        <Card>
          <CardHeader>
            <CardTitle>交易分析结果</CardTitle>
            <CardDescription>交易价值分析</CardDescription>
          </CardHeader>
          <CardContent>
            {analysis ? (
              <div className="space-y-4">
                {/* 主要结果 */}
                <div
                  className={`text-center p-6 rounded-lg ${
                    analysis.isWin
                      ? "bg-green-100 border-2 border-green-300"
                      : analysis.isFair
                      ? "bg-blue-100 border-2 border-blue-300"
                      : "bg-red-100 border-2 border-red-300"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold ${
                      analysis.isWin
                        ? "text-green-800"
                        : analysis.isFair
                        ? "text-blue-800"
                        : "text-red-800"
                    }`}
                  >
                    {analysis.isWin ? "WIN" : analysis.isFair ? "FAIR" : "LOSS"}
                  </div>
                  <div
                    className={`text-lg ${
                      analysis.isWin
                        ? "text-green-700"
                        : analysis.isFair
                        ? "text-blue-700"
                        : "text-red-700"
                    }`}
                  >
                    {analysis.recommendation}
                  </div>
                </div>

                {/* 详细数据 */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">你的价值:</span>
                    <span className="font-medium">
                      {formatCurrency(yourValue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">对方价值:</span>
                    <span className="font-medium">
                      {formatCurrency(theirValue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">利润/亏损:</span>
                    <span
                      className={`font-medium ${
                        analysis.profit >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {analysis.profit >= 0 ? "+" : ""}
                      {formatCurrency(analysis.profit)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">利润率:</span>
                    <span
                      className={`font-medium ${
                        analysis.profitPercentage >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {analysis.profitPercentage >= 0 ? "+" : ""}
                      {analysis.profitPercentage.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* 交易建议 */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">交易建议:</h4>
                  <p className="text-sm text-gray-600">
                    {analysis.isWin
                      ? "这个交易对你很有利，建议接受！"
                      : analysis.isFair
                      ? "这是一个公平的交易，可以根据个人喜好决定。"
                      : "这个交易可能不太划算，建议重新考虑或寻找更好的交易。"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                输入交易价值并点击"分析交易"查看结果
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 交易提示 */}
      <Card>
        <CardHeader>
          <CardTitle>交易分析说明</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">WIN</div>
              <div className="text-sm text-green-700">
                你的物品价值高于对方，利润超过10%
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">FAIR</div>
              <div className="text-sm text-blue-700">
                双方物品价值相当，利润在±10%之间
              </div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">LOSS</div>
              <div className="text-sm text-red-700">
                你的物品价值低于对方，亏损超过10%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
