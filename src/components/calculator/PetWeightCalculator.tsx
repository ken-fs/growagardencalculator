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
import { PetSelector } from "@/components/ui/PetSelector";
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
          宠物重量计算器
        </h1>
        <p className="text-muted-foreground text-lg">计算宠物的重量和价值</p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 输入区域 */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">宠物设置</CardTitle>
            <CardDescription>选择宠物并设置重量</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-tech-glow mb-3">
                选择宠物
              </label>
              <PetSelector
                pets={pets}
                value={selectedPet}
                onChange={handlePetChange}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-tech-glow mb-3">
                重量 (kg)
              </label>
              <Input
                type="number"
                value={weight || ""}
                onChange={(e) => handleWeightChange(Number(e.target.value))}
                min="0"
                step="0.1"
                placeholder="输入宠物重量"
                className="tech-input"
              />
            </div>

            {selectedPetData && (
              <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
                <h3 className="font-semibold text-tech-glow mb-3 flex items-center">
                  <span className="mr-2">🐾</span>
                  宠物信息
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>名称:</span>
                    <span className="text-tech-cyan">
                      {selectedPetData.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>基础价值:</span>
                    <span className="text-tech-blue">
                      {formatCurrency(selectedPetData.baseValue)} Sheckles
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>稀有度:</span>
                    <span className="text-tech-purple">
                      {selectedPetData.rarity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>类别:</span>
                    <span className="text-tech-orange">
                      {selectedPetData.category}
                    </span>
                  </div>
                </div>
              </div>
            )}

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
            <CardDescription>宠物价值分析</CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                <div className="text-center p-8 tech-gradient rounded-lg text-white shadow-tech-glow animate-pulse-glow">
                  <div className="text-4xl font-bold mb-2">
                    {formatCurrency(result.value)}
                  </div>
                  <div className="text-xl">Sheckles</div>
                </div>

                <div className="space-y-4 bg-secondary/30 rounded-lg p-4 border border-tech-glow/30">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">宠物名称:</span>
                    <span className="font-medium text-tech-cyan">
                      {result.pet.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">基础价值:</span>
                    <span className="font-medium text-tech-blue">
                      {formatCurrency(result.pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">重量:</span>
                    <span className="font-medium text-tech-purple">
                      {weight} kg
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">总价值:</span>
                    <span className="font-medium text-tech-glow">
                      {formatCurrency(result.value)}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
                  <h4 className="font-medium text-tech-glow mb-3 flex items-center">
                    <span className="mr-2">🐾</span>
                    宠物信息
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex justify-between">
                      <span>稀有度:</span>
                      <span className="text-tech-purple">
                        {result.pet.rarity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>类别:</span>
                      <span className="text-tech-orange">
                        {result.pet.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-12">
                <div className="text-6xl mb-4">🐾</div>
                <p className="text-lg">点击"计算价值"查看结果</p>
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
