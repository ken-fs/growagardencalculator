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
          WFL Trade Analyzer
        </h1>
        <p className="text-muted-foreground text-lg">
          Analyze if trades are fair, determine Win/Fair/Loss
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Area */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">Trade Value Input</CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter your and their item values
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-tech-glow mb-2">
                Your Item Value (Sheckles)
              </label>
              <Input
                type="number"
                value={yourValue || ""}
                onChange={(e) => handleYourValueChange(Number(e.target.value))}
                placeholder="Enter your item value"
                min="0"
                className="tech-input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-tech-glow mb-2">
                Their Item Value (Sheckles)
              </label>
              <Input
                type="number"
                value={theirValue || ""}
                onChange={(e) => handleTheirValueChange(Number(e.target.value))}
                placeholder="Enter their item value"
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
                Analyze Trade
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-tech-glow"
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Area */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">
              Trade Analysis Results
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Trade value analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            {analysis ? (
              <div className="space-y-4">
                {/* Main Results */}
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

                {/* Detailed Data */}
                <div className="space-y-3">
                  <div className="flex justify-between bg-secondary/30 p-3 rounded-lg border border-tech-glow/30">
                    <span className="text-muted-foreground">Your Value:</span>
                    <span className="font-medium text-tech-glow">
                      {formatCurrency(yourValue)}
                    </span>
                  </div>
                  <div className="flex justify-between bg-secondary/30 p-3 rounded-lg border border-tech-glow/30">
                    <span className="text-muted-foreground">Their Value:</span>
                    <span className="font-medium text-tech-glow">
                      {formatCurrency(theirValue)}
                    </span>
                  </div>
                  <div className="flex justify-between bg-secondary/30 p-3 rounded-lg border border-tech-glow/30">
                    <span className="text-muted-foreground">Profit/Loss:</span>
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
                    <span className="text-muted-foreground">Profit Rate:</span>
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

                {/* Trade Recommendations */}
                <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
                  <h4 className="font-medium text-tech-glow mb-2">
                    Trade Recommendation:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {analysis.isWin
                      ? "This trade is very favorable for you, recommend accepting!"
                      : analysis.isFair
                      ? "This is a fair trade, you can decide based on personal preference."
                      : "This trade may not be cost-effective, recommend reconsidering or finding a better trade."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                Enter trade values and click &quot;Analyze Trade&quot; to view
                results
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Trade Tips */}
      <Card className="tech-card shadow-tech-glow">
        <CardHeader className="tech-scan-line">
          <CardTitle className="text-tech-glow">Trade Analysis Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
              <div className="text-2xl font-bold text-tech-green mb-2">WIN</div>
              <div className="text-sm text-muted-foreground">
                Your item value is higher than theirs, profit exceeds 10%
              </div>
            </div>
            <div className="text-center p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
              <div className="text-2xl font-bold text-tech-blue mb-2">FAIR</div>
              <div className="text-sm text-muted-foreground">
                Both items have similar value, profit within ±10%
              </div>
            </div>
            <div className="text-center p-4 bg-secondary/30 border border-tech-glow/30 rounded-lg">
              <div className="text-2xl font-bold text-tech-red mb-2">LOSS</div>
              <div className="text-sm text-muted-foreground">
                Your item value is lower than theirs, loss exceeds 10%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
