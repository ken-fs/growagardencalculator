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
import { pets } from "@/data/pets";
import { formatCurrency } from "@/utils/calculator";

export const PetWeightCalculator: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<string>("cow");
  const [weight, setWeight] = useState<number>(1);
  const [result, setResult] = useState<{ value: number; pet: any } | null>(
    null
  );

  const handlePetChange = useCallback((petId: string) => {
    setSelectedPet(petId);
  }, []);

  const handleWeightChange = useCallback((newWeight: number) => {
    setWeight(newWeight);
  }, []);

  const handleCalculate = useCallback(() => {
    const pet = pets.find((p) => p.id === selectedPet);
    if (pet) {
      const value = pet.baseValue * weight;
      setResult({ value, pet });
    }
  }, [selectedPet, weight]);

  const handleReset = useCallback(() => {
    setSelectedPet("cow");
    setWeight(1);
    setResult(null);
  }, []);

  const selectedPetData = pets.find((p) => p.id === selectedPet);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          宠物重量计算器
        </h1>
        <p className="text-gray-600">计算宠物的重量和价值</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 输入区域 */}
        <Card>
          <CardHeader>
            <CardTitle>宠物设置</CardTitle>
            <CardDescription>选择宠物并设置重量</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                选择宠物
              </label>
              <select
                value={selectedPet}
                onChange={(e) => handlePetChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {pets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name} - {formatCurrency(pet.baseValue)} Sheckles
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                重量 (kg)
              </label>
              <Input
                type="number"
                value={weight || ""}
                onChange={(e) => handleWeightChange(Number(e.target.value))}
                min="0"
                step="0.1"
                placeholder="输入宠物重量"
              />
            </div>

            {selectedPetData && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">宠物信息</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>名称: {selectedPetData.name}</div>
                  <div>
                    基础价值: {formatCurrency(selectedPetData.baseValue)}{" "}
                    Sheckles
                  </div>
                  <div>稀有度: {selectedPetData.rarity}</div>
                  <div>类别: {selectedPetData.category}</div>
                </div>
              </div>
            )}

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
            <CardDescription>宠物价值分析</CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg text-white">
                  <div className="text-3xl font-bold">
                    {formatCurrency(result.value)}
                  </div>
                  <div className="text-lg">Sheckles</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">宠物名称:</span>
                    <span className="font-medium">{result.pet.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">基础价值:</span>
                    <span className="font-medium">
                      {formatCurrency(result.pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">重量:</span>
                    <span className="font-medium">{weight} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">总价值:</span>
                    <span className="font-medium text-green-600">
                      {formatCurrency(result.value)}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">宠物信息</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>稀有度: {result.pet.rarity}</div>
                    <div>类别: {result.pet.category}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                点击"计算价值"查看结果
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 宠物分类展示 */}
      <Card>
        <CardHeader>
          <CardTitle>宠物分类</CardTitle>
          <CardDescription>按类别查看所有宠物</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 农场宠物 */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🐄 农场宠物</h3>
              <div className="space-y-2">
                {pets
                  .filter((p) => p.category === "farm")
                  .map((pet) => (
                    <div
                      key={pet.id}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm">{pet.name}</span>
                      <span className="text-sm font-medium text-green-600">
                        {formatCurrency(pet.baseValue)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* 野生动物 */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🦊 野生动物</h3>
              <div className="space-y-2">
                {pets
                  .filter((p) => p.category === "wild")
                  .map((pet) => (
                    <div
                      key={pet.id}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm">{pet.name}</span>
                      <span className="text-sm font-medium text-green-600">
                        {formatCurrency(pet.baseValue)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* 特殊宠物 */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">⭐ 特殊宠物</h3>
              <div className="space-y-2">
                {pets
                  .filter((p) => p.category === "special")
                  .map((pet) => (
                    <div
                      key={pet.id}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm">{pet.name}</span>
                      <span className="text-sm font-medium text-green-600">
                        {formatCurrency(pet.baseValue)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
