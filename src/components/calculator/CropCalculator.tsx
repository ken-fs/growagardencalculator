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
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Grow A Garden 计算器
        </h1>
        <p className="text-gray-600">计算你的作物价值，包括突变和加成</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 输入区域 */}
        <Card>
          <CardHeader>
            <CardTitle>计算器设置</CardTitle>
            <CardDescription>选择作物、设置参数并添加突变</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 作物选择 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                选择作物
              </label>
              <select
                value={input.cropId}
                onChange={(e) => handleCropChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {crops.map((crop) => (
                  <option key={crop.id} value={crop.id}>
                    {crop.name} - {formatCurrency(crop.baseValue)} Sheckles
                  </option>
                ))}
              </select>
            </div>

            {/* 基础参数 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  重量 (kg)
                </label>
                <Input
                  type="number"
                  value={input.weight}
                  onChange={(e) => handleWeightChange(Number(e.target.value))}
                  min="0"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  数量 (个)
                </label>
                <Input
                  type="number"
                  value={input.quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  min="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              />
            </div>

            {/* 突变选择 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">突变选择</h3>

              {/* 生长突变 */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  ⭐ 生长突变 (只能选择一个)
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {growthMutations.map((mutation) => (
                    <button
                      key={mutation.id}
                      onClick={() => handleMutationToggle(mutation.id)}
                      className={`p-2 rounded-md border text-sm transition-colors ${
                        input.mutations.includes(mutation.id)
                          ? "bg-yellow-100 border-yellow-300 text-yellow-800"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {mutation.name} (×{mutation.multiplier})
                    </button>
                  ))}
                </div>
              </div>

              {/* 温度突变 */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  ❄️ 温度突变 (只能选择一个)
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {temperatureMutations.map((mutation) => (
                    <button
                      key={mutation.id}
                      onClick={() => handleMutationToggle(mutation.id)}
                      className={`p-2 rounded-md border text-sm transition-colors ${
                        input.mutations.includes(mutation.id)
                          ? "bg-blue-100 border-blue-300 text-blue-800"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {mutation.name} (×{mutation.multiplier})
                    </button>
                  ))}
                </div>
              </div>

              {/* 环境突变 */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  ✨ 环境突变 (可以选择多个)
                </h4>
                <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                  {environmentalMutations.map((mutation) => (
                    <button
                      key={mutation.id}
                      onClick={() => handleMutationToggle(mutation.id)}
                      className={`p-2 rounded-md border text-xs transition-colors ${
                        input.mutations.includes(mutation.id)
                          ? "bg-green-100 border-green-300 text-green-800"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {mutation.name} (×{mutation.multiplier})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-2">
              <Button onClick={handleCalculate} className="flex-1">
                计算价值
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
            <CardTitle>计算结果</CardTitle>
            <CardDescription>你的作物价值分析</CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white">
                  <div className="text-3xl font-bold">
                    {formatCurrency(result.totalValue)}
                  </div>
                  <div className="text-lg">Sheckles</div>
                  <div className="text-sm opacity-90">
                    总倍数: ×{result.totalMultiplier}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">基础价值:</span>
                    <span className="font-medium">
                      {formatCurrency(result.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">重量价值:</span>
                    <span className="font-medium">
                      {formatCurrency(result.weightValue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">数量价值:</span>
                    <span className="font-medium">
                      {formatCurrency(result.quantityValue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">朋友加成:</span>
                    <span className="font-medium">
                      {formatCurrency(result.friendBoostValue)}
                    </span>
                  </div>
                </div>

                {result.mutations.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      应用的突变:
                    </h4>
                    <div className="space-y-1">
                      {result.mutations.map((mutation) => (
                        <div
                          key={mutation.id}
                          className="flex justify-between text-sm"
                        >
                          <span>{mutation.name}</span>
                          <span>×{mutation.multiplier}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                点击"计算价值"查看结果
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
