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
import { CropSelector } from "@/components/ui/CropSelector";
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
      console.error("Calculation error:", error);
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
          Grow A Garden Calculator
        </h1>
        <p className="text-muted-foreground text-lg">
          Calculate your crop values including mutations and bonuses
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Area */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">
              Calculator Settings
            </CardTitle>
            <CardDescription>
              Select crop, set parameters and add mutations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Crop Selection */}
            <div>
              <label className="block text-sm font-medium text-tech-glow mb-3">
                Select Crop
              </label>
              <CropSelector
                crops={crops}
                value={input.cropId}
                onChange={handleCropChange}
                className="w-full"
              />
            </div>

            {/* Basic Parameters */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-tech-glow mb-3">
                  Weight (kg)
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
                  Quantity (units)
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
                Friend Bonus (%)
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

            {/* Mutation Selection */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-tech-glow">
                Mutation Selection
              </h3>

              {/* Growth Mutations */}
              <div>
                <h4 className="text-sm font-medium text-tech-cyan mb-3 flex items-center">
                  <span className="mr-2">⭐</span>
                  Growth Mutations (only one can be selected)
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

              {/* Temperature Mutations */}
              <div>
                <h4 className="text-sm font-medium text-tech-blue mb-3 flex items-center">
                  <span className="mr-2">❄️</span>
                  Temperature Mutations (only one can be selected)
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

              {/* Environmental Mutations */}
              <div>
                <h4 className="text-sm font-medium text-tech-purple mb-3 flex items-center">
                  <span className="mr-2">✨</span>
                  Environmental Mutations (multiple can be selected)
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

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleCalculate}
                type="submit"
                className="flex-1 tech-button hover:animate-pulse-glow"
              >
                Calculate Value
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-tech-glow text-tech-glow hover:bg-tech-glow hover:text-primary-foreground transition-all duration-300"
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
              Calculation Results
            </CardTitle>
            <CardDescription>Your crop value analysis</CardDescription>
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
                    Total Multiplier: ×{result.totalMultiplier}
                  </div>
                </div>

                <div className="space-y-4 bg-secondary/30 rounded-lg p-4 border border-tech-glow/30">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Base Value:</span>
                    <span className="font-medium text-tech-cyan">
                      {formatCurrency(result.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weight Value:</span>
                    <span className="font-medium text-tech-blue">
                      {formatCurrency(result.weightValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Quantity Value:
                    </span>
                    <span className="font-medium text-tech-purple">
                      {formatCurrency(result.quantityValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Friend Bonus:</span>
                    <span className="font-medium text-tech-orange">
                      {formatCurrency(result.friendBoostValue)}
                    </span>
                  </div>
                </div>

                {result.mutations.length > 0 && (
                  <div className="bg-secondary/30 rounded-lg p-4 border border-tech-glow/30">
                    <h4 className="font-medium text-tech-glow mb-3 flex items-center">
                      <span className="mr-2">🧬</span>
                      Applied Mutations:
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
                <p className="text-lg">
                  Click &quot;Calculate Value&quot; to view results
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
