"use client";

import React, { useState, useCallback, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { crops } from "@/data/crops";
import { mutations } from "@/data/mutations";
import { calculateCropValue, formatCurrency } from "@/utils/calculator";
import { CalculatorInput, CalculationResult } from "@/types";

export const CropCalculator: React.FC = () => {
  const [input, setInput] = useState<CalculatorInput>({
    cropId: "apple",
    weight: 1,
    quantity: 1,
    friendBoost: 0,
    mutations: [],
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCropChange = useCallback((cropId: string) => {
    setInput((prev) => ({ ...prev, cropId }));
  }, []);

  const handleWeightChange = useCallback((weight: number) => {
    setInput((prev) => ({ ...prev, weight }));
  }, []);

  const handleQuantityChange = useCallback((quantity: number) => {
    setInput((prev) => ({ ...prev, quantity }));
  }, []);

  const handleFriendBoostChange = useCallback((friendBoost: number) => {
    setInput((prev) => ({ ...prev, friendBoost }));
  }, []);

  const handleMutationToggle = useCallback((mutationId: string) => {
    setInput((prev) => ({
      ...prev,
      mutations: prev.mutations.includes(mutationId)
        ? prev.mutations.filter((id) => id !== mutationId)
        : [...prev.mutations, mutationId],
    }));
  }, []);

  const handleCalculate = useCallback(() => {
    try {
      const calculationResult = calculateCropValue(input);
      setResult(calculationResult);
    } catch (error) {
      console.error("计算错误:", error);
    }
  }, [input]);

  const handleReset = useCallback(() => {
    setInput({
      cropId: "apple",
      weight: 1,
      quantity: 1,
      friendBoost: 0,
      mutations: [],
    });
    setResult(null);
  }, []);

  const growthMutations = useMemo(() => {
    return mutations.filter((m) => m.category === "growth");
  }, []);

  const temperatureMutations = useMemo(() => {
    return mutations.filter((m) => m.category === "temperature");
  }, []);

  const environmentalMutations = useMemo(() => {
    return mutations.filter((m) => m.category === "environmental");
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
          Grow A Garden 计算器
        </h1>
        <p className="text-muted-foreground text-lg">
          计算你的作物价值，包括突变和加成
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 输入区域 */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">计算器设置</CardTitle>
            <CardDescription>选择作物、设置参数并添加突变</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 作物选择 */}
            <div>
              <label className="block text-sm font-medium text-tech-glow mb-3">
                选择作物
              </label>
              <select
                value={input.cropId}
                onChange={(e) => handleCropChange(e.target.value)}
                className="w-full p-3 tech-input rounded-lg focus:ring-2 focus:ring-tech-glow focus:border-transparent text-foreground"
              >
                {crops.map((crop) => (
                  <option key={crop.id} value={crop.id}>
                    {crop.name} - {formatCurrency(crop.baseValue)} Sheckles
                  </option>
                ))}
              </select>
            </div>

            {/* 基础参数 */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-tech-glow mb-3">
                  重量 (kg)
                </label>
                <Input
                  type="number"
                  value={input.weight}
                  onChange={(e) => handleWeightChange(Number(e.target.value))}
                  min="0"
                  step="0.1"
                  className="tech-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-tech-glow mb-3">
                  数量 (个)
                </label>
                <Input
                  type="number"
                  value={input.quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  min="1"
                  className="tech-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-tech-glow mb-3">
                朋友加成 (%)
              </label>
              <Input
                type="number"
                value={input.friendBoost}
                onChange={(e) =>
                  handleFriendBoostChange(Number(e.target.value))
                }
                min="0"
                max="100"
                className="tech-input"
              />
            </div>

            {/* 突变选择 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-tech-glow">突变选择</h3>

              {/* 生长突变 */}
              <div>
                <h4 className="text-sm font-medium text-tech-cyan mb-3 flex items-center">
                  <span className="mr-2">⭐</span>
                  生长突变 (只能选择一个)
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {growthMutations.map((mutation) => (
                    <button
                      key={mutation.id}
                      onClick={() => handleMutationToggle(mutation.id)}
                      className={`p-3 rounded-lg border text-sm transition-all duration-300 ${
                        input.mutations.includes(mutation.id)
                          ? "tech-button text-primary-foreground shadow-tech-glow"
                          : "bg-secondary border-border text-muted-foreground hover:bg-secondary/80 hover:border-tech-glow hover:text-tech-glow"
                      }`}
                    >
                      {mutation.name} (×{mutation.multiplier})
                    </button>
                  ))}
                </div>
              </div>

              {/* 温度突变 */}
              <div>
                <h4 className="text-sm font-medium text-tech-blue mb-3 flex items-center">
                  <span className="mr-2">❄️</span>
                  温度突变 (只能选择一个)
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {temperatureMutations.map((mutation) => (
                    <button
                      key={mutation.id}
                      onClick={() => handleMutationToggle(mutation.id)}
                      className={`p-3 rounded-lg border text-sm transition-all duration-300 ${
                        input.mutations.includes(mutation.id)
                          ? "tech-button text-primary-foreground shadow-tech-glow"
                          : "bg-secondary border-border text-muted-foreground hover:bg-secondary/80 hover:border-tech-glow hover:text-tech-glow"
                      }`}
                    >
                      {mutation.name} (×{mutation.multiplier})
                    </button>
                  ))}
                </div>
              </div>

              {/* 环境突变 */}
              <div>
                <h4 className="text-sm font-medium text-tech-purple mb-3 flex items-center">
                  <span className="mr-2">✨</span>
                  环境突变 (可以选择多个)
                </h4>
                <div className="grid grid-cols-3 gap-3 max-h-40 overflow-y-auto">
                  {environmentalMutations.map((mutation) => (
                    <button
                      key={mutation.id}
                      onClick={() => handleMutationToggle(mutation.id)}
                      className={`p-2 rounded-lg border text-xs transition-all duration-300 ${
                        input.mutations.includes(mutation.id)
                          ? "tech-button text-primary-foreground shadow-tech-glow"
                          : "bg-secondary border-border text-muted-foreground hover:bg-secondary/80 hover:border-tech-glow hover:text-tech-glow"
                      }`}
                    >
                      {mutation.name} (×{mutation.multiplier})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-4">
              <Button
                onClick={handleCalculate}
                type="submit"
                className="flex-1 tech-button hover:animate-pulse-glow"
              >
                计算价值
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-tech-glow text-tech-glow hover:bg-tech-glow hover:text-primary-foreground transition-all duration-300"
              >
                重置
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 结果区域 */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">计算结果</CardTitle>
            <CardDescription>你的作物价值分析</CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                <div className="text-center p-8 tech-gradient rounded-lg text-white shadow-tech-glow animate-pulse-glow">
                  <div className="text-4xl font-bold mb-2">
                    {formatCurrency(result.totalValue)}
                  </div>
                  <div className="text-xl mb-2">Sheckles</div>
                  <div className="text-sm opacity-90">
                    总倍数: ×{result.totalMultiplier}
                  </div>
                </div>

                <div className="space-y-4 bg-secondary/30 rounded-lg p-4 border border-tech-glow/30">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">基础价值:</span>
                    <span className="font-medium text-tech-cyan">
                      {formatCurrency(result.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">重量价值:</span>
                    <span className="font-medium text-tech-blue">
                      {formatCurrency(result.weightValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">数量价值:</span>
                    <span className="font-medium text-tech-purple">
                      {formatCurrency(result.quantityValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">朋友加成:</span>
                    <span className="font-medium text-tech-orange">
                      {formatCurrency(result.friendBoostValue)}
                    </span>
                  </div>
                </div>

                {result.mutations.length > 0 && (
                  <div className="bg-secondary/30 rounded-lg p-4 border border-tech-glow/30">
                    <h4 className="font-medium text-tech-glow mb-3 flex items-center">
                      <span className="mr-2">🧬</span>
                      应用的突变:
                    </h4>
                    <div className="space-y-2">
                      {result.mutations.map((mutation) => (
                        <div
                          key={mutation.id}
                          className="flex justify-between items-center text-sm bg-secondary/50 rounded-md p-2 border border-border"
                        >
                          <span className="text-muted-foreground">
                            {mutation.name}
                          </span>
                          <span className="text-tech-glow font-medium">
                            ×{mutation.multiplier}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-12">
                <div className="text-6xl mb-4">🔬</div>
                <p className="text-lg">点击"计算价值"查看结果</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
