import { Crop, Mutation, CalculatorInput, CalculationResult } from "@/types";
import { getCropById } from "@/data/crops";
import { getMutationById } from "@/data/mutations";

/**
 * 计算作物价值
 */
export const calculateCropValue = (
  input: CalculatorInput
): CalculationResult => {
  const crop = getCropById(input.cropId);
  if (!crop) {
    throw new Error("作物不存在");
  }

  // 基础价值
  const baseValue = crop.baseValue;

  // 计算突变倍数
  let totalMultiplier = 1;
  const mutations: Mutation[] = [];

  for (const mutationId of input.mutations) {
    const mutation = getMutationById(mutationId);
    if (mutation) {
      mutations.push(mutation);
      totalMultiplier *= mutation.multiplier;
    }
  }

  // 计算朋友加成
  const friendBoostValue = (input.friendBoost / 100) * baseValue;

  // 计算重量价值
  const weightValue = baseValue * input.weight;

  // 计算数量价值
  const quantityValue = weightValue * input.quantity;

  // 计算总价值
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
 * 格式化数字为货币格式
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
 * 格式化数字为完整格式
 */
export const formatFullNumber = (value: number): string => {
  return value.toLocaleString("en-US");
};

/**
 * 计算突变组合的最大可能倍数
 */
export const getMaxPossibleMultiplier = (): number => {
  // 生长突变只能选择一个
  const growthMutations = [20, 50]; // Golden, Rainbow
  const maxGrowth = Math.max(...growthMutations);

  // 温度突变只能选择一个
  const temperatureMutations = [2, 2, 5, 10]; // Wet, Chilled, Drenched, Frozen
  const maxTemperature = Math.max(...temperatureMutations);

  // 环境突变可以选择多个
  const environmentalMutations = [
    2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 8, 8, 8, 8, 10, 10, 12,
    12, 12, 15, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 25, 25, 30, 30, 35, 40,
    45, 50, 50, 50, 50, 50, 50, 70, 75, 75, 80, 85, 90, 90, 100, 100, 100, 100,
    100, 100, 105, 120, 120, 125, 125, 135, 150, 190,
  ];

  // 选择最高的几个环境突变
  const sortedEnvironmental = environmentalMutations.sort((a, b) => b - a);
  const topEnvironmental = sortedEnvironmental.slice(0, 5); // 假设最多可以选择5个环境突变
  const maxEnvironmental = topEnvironmental.reduce((acc, val) => acc * val, 1);

  return maxGrowth * maxTemperature * maxEnvironmental;
};

/**
 * 验证突变组合是否有效
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

  // 生长突变只能选择一个
  if (growthMutations.length > 1) {
    return { isValid: false, error: "只能选择一个生长突变" };
  }

  // 温度突变只能选择一个
  if (temperatureMutations.length > 1) {
    return { isValid: false, error: "只能选择一个温度突变" };
  }

  return { isValid: true };
};

/**
 * 获取推荐突变组合
 */
export const getRecommendedMutations = (crop: Crop): string[] => {
  const recommendations: string[] = [];

  // 根据作物稀有度推荐突变
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
 * 计算交易分析
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
    recommendation = "这是一个很好的交易！";
  } else if (profitPercentage >= -10 && profitPercentage <= 10) {
    isFair = true;
    recommendation = "这是一个公平的交易。";
  } else {
    isLoss = true;
    recommendation = "这个交易可能不太划算。";
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
