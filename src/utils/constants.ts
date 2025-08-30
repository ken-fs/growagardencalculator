// 应用常量
export const APP_CONFIG = {
  name: "Grow A Garden 计算器",
  shortName: "GAG 计算器",
  description:
    "专业的 Grow A Garden 游戏计算器，支持作物价值计算、突变分析、宠物重量计算、交易分析等功能。",
  url: "https://growagardencalculator.net",
  version: "1.0.0",
  author: "Grow A Garden Calculator Team",
  keywords: [
    "Grow A Garden",
    "计算器",
    "Roblox",
    "农场游戏",
    "作物价值",
    "突变计算",
    "宠物重量",
    "交易分析",
    "WFL",
    "Sheckles",
  ],
} as const;

// 游戏相关常量
export const GAME_CONSTANTS = {
  currency: "Sheckles",
  maxWeight: 1000,
  maxQuantity: 1000,
  maxFriendBoost: 100,
  maxMutations: 10,
} as const;

// 突变类别
export const MUTATION_CATEGORIES = {
  GROWTH: "growth",
  TEMPERATURE: "temperature",
  ENVIRONMENTAL: "environmental",
} as const;

// 稀有度
export const RARITY_LEVELS = {
  COMMON: "common",
  UNCOMMON: "uncommon",
  RARE: "rare",
  EPIC: "epic",
  LEGENDARY: "legendary",
} as const;

// 交易分析阈值
export const TRADE_THRESHOLDS = {
  WIN_PERCENTAGE: 10,
  FAIR_PERCENTAGE: 10,
  LOSS_PERCENTAGE: 10,
} as const;
