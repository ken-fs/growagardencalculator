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
  const [result, setResult] = useState<{
    value: number;
    pet: { name: string; baseValue: number; rarity: string; category: string };
  } | null>(null);

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
          Pet Weight Calculator
        </h1>
        <p className="text-muted-foreground text-lg">
          Calculate pet weight and value
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto rounded-full shadow-tech-glow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Area */}
        <Card className="tech-card shadow-tech-glow">
          <CardHeader className="tech-scan-line">
            <CardTitle className="text-tech-glow">Pet Settings</CardTitle>
            <CardDescription>Select pet and set weight</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-tech-glow mb-3">
                Select Pet
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
                Weight (kg)
              </label>
              <Input
                type="number"
                value={weight || ""}
                onChange={(e) => handleWeightChange(Number(e.target.value))}
                min="0"
                step="0.1"
                placeholder="Enter pet weight"
                className="tech-input"
              />
            </div>

            {selectedPetData && (
              <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
                <h3 className="font-semibold text-tech-glow mb-3 flex items-center">
                  <span className="mr-2">🐾</span>
                  Pet Information
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span className="text-tech-cyan">
                      {selectedPetData.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Value:</span>
                    <span className="text-tech-blue">
                      {formatCurrency(selectedPetData.baseValue)} Sheckles
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rarity:</span>
                    <span className="text-tech-purple">
                      {selectedPetData.rarity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
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
            <CardDescription>Pet value analysis</CardDescription>
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
                    <span className="text-muted-foreground">Pet Name:</span>
                    <span className="font-medium text-tech-cyan">
                      {result.pet.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Base Value:</span>
                    <span className="font-medium text-tech-blue">
                      {formatCurrency(result.pet.baseValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weight:</span>
                    <span className="font-medium text-tech-purple">
                      {weight} kg
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Value:</span>
                    <span className="font-medium text-tech-glow">
                      {formatCurrency(result.value)}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg border border-tech-glow/30">
                  <h4 className="font-medium text-tech-glow mb-3 flex items-center">
                    <span className="mr-2">🐾</span>
                    Pet Information
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex justify-between">
                      <span>Rarity:</span>
                      <span className="text-tech-purple">
                        {result.pet.rarity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Category:</span>
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
                <p className="text-lg">
                  Click &quot;Calculate Value&quot; to view results
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Pet Categories Display */}
      <Card>
        <CardHeader>
          <CardTitle>Pet Categories</CardTitle>
          <CardDescription>View all pets by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Farm Pets */}
            <div>
              <h3 className="font-semibold text-white-800 mb-3">
                🐄 Farm Pets
              </h3>
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

            {/* Wild Animals */}
            <div>
              <h3 className="font-semibold text-white-800 mb-3">
                🦊 Wild Animals
              </h3>
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

            {/* Special Pets */}
            <div>
              <h3 className="font-semibold text-white-800 mb-3">
                ⭐ Special Pets
              </h3>
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
