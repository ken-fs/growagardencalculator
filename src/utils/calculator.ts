import { Crop, Mutation, CalculatorInput, CalculationResult } from "@/types";
import { getCropById } from "@/data/crops";
import { getMutationById } from "@/data/mutations";

/**
 * Calculate crop value
 */
export const calculateCropValue = (
  input: CalculatorInput
): CalculationResult => {
  const crop = getCropById(input.cropId);
  if (!crop) {
    throw new Error("Crop not found");
  }

  // Base value
  const baseValue = crop.baseValue;

  // Calculate mutation multiplier
  let totalMultiplier = 1;
  const mutations: Mutation[] = [];

  for (const mutationId of input.mutations) {
    const mutation = getMutationById(mutationId);
    if (mutation) {
      mutations.push(mutation);
      totalMultiplier *= mutation.multiplier;
    }
  }

  // Calculate friend boost value
  const friendBoostValue = (input.friendBoost / 100) * baseValue;

  // Calculate weight value
  const weightValue = baseValue * input.weight;

  // Calculate quantity value
  const quantityValue = weightValue * input.quantity;

  // Calculate total value
  const totalValue = quantityValue * totalMultiplier + friendBoostValue;

  return {
    baseValue,
    totalValue,
    totalMultiplier,
    mutations,
    friendBoostValue,
    weightValue,
    quantityValue,
  };
};

/**
 * Format number as currency
 */
export const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  } else {
    return value.toFixed(0);
  }
};

/**
 * Format number as full format
 */
export const formatFullNumber = (value: number): string => {
  return value.toLocaleString("en-US");
};

/**
 * Calculate maximum possible multiplier for mutation combinations
 */
export const getMaxPossibleMultiplier = (): number => {
  // Only one growth mutation can be selected
  const growthMutations = [20, 50]; // Golden, Rainbow
  const maxGrowth = Math.max(...growthMutations);

  // Only one temperature mutation can be selected
  const temperatureMutations = [2, 2, 5, 10]; // Wet, Chilled, Drenched, Frozen
  const maxTemperature = Math.max(...temperatureMutations);

  // Multiple environmental mutations can be selected
  const environmentalMutations = [
    2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 8, 8, 8, 8, 10, 10, 12,
    12, 12, 15, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 25, 25, 30, 30, 35, 40,
    45, 50, 50, 50, 50, 50, 50, 70, 75, 75, 80, 85, 90, 90, 100, 100, 100, 100,
    100, 100, 105, 120, 120, 125, 125, 135, 150, 190,
  ];

  // Select the highest environmental mutations
  const sortedEnvironmental = environmentalMutations.sort((a, b) => b - a);
  const topEnvironmental = sortedEnvironmental.slice(0, 5); // Assume maximum 5 environmental mutations can be selected
  const maxEnvironmental = topEnvironmental.reduce((acc, val) => acc * val, 1);

  return maxGrowth * maxTemperature * maxEnvironmental;
};

/**
 * Validate if mutation combination is valid
 */
export const validateMutationCombination = (
  mutations: string[]
): { isValid: boolean; error?: string } => {
  const growthMutations = mutations.filter((id) => {
    const mutation = getMutationById(id);
    return mutation?.category === "growth";
  });

  const temperatureMutations = mutations.filter((id) => {
    const mutation = getMutationById(id);
    return mutation?.category === "temperature";
  });

  // Only one growth mutation can be selected
  if (growthMutations.length > 1) {
    return {
      isValid: false,
      error: "Only one growth mutation can be selected",
    };
  }

  // Only one temperature mutation can be selected
  if (temperatureMutations.length > 1) {
    return {
      isValid: false,
      error: "Only one temperature mutation can be selected",
    };
  }

  return { isValid: true };
};

/**
 * Get recommended mutation combinations
 */
export const getRecommendedMutations = (crop: Crop): string[] => {
  const recommendations: string[] = [];

  // Recommend mutations based on crop rarity
  if (crop.rarity === "legendary") {
    recommendations.push(
      "rainbow",
      "frozen",
      "shocked",
      "celestial",
      "galactic"
    );
  } else if (crop.rarity === "epic") {
    recommendations.push(
      "golden",
      "drenched",
      "cooked",
      "amber",
      "tempestuous"
    );
  } else if (crop.rarity === "rare") {
    recommendations.push("golden", "chilled", "fried", "static", "bloom");
  } else {
    recommendations.push("golden", "wet", "choc", "moonlit", "windstruck");
  }

  return recommendations;
};

/**
 * Analyze trade
 */
export const analyzeTrade = (
  yourValue: number,
  theirValue: number
): {
  isWin: boolean;
  isFair: boolean;
  isLoss: boolean;
  profit: number;
  profitPercentage: number;
  recommendation: string;
} => {
  const profit = yourValue - theirValue;
  const profitPercentage = (profit / theirValue) * 100;

  let isWin = false;
  let isFair = false;
  let isLoss = false;
  let recommendation = "";

  if (profitPercentage > 10) {
    isWin = true;
    recommendation = "This is a great trade!";
  } else if (profitPercentage >= -10 && profitPercentage <= 10) {
    isFair = true;
    recommendation = "This is a fair trade.";
  } else {
    isLoss = true;
    recommendation = "This trade might not be worth it.";
  }

  return {
    isWin,
    isFair,
    isLoss,
    profit,
    profitPercentage,
    recommendation,
  };
};
