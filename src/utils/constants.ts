// Application constants
export const APP_CONFIG = {
  name: "Grow A Garden Calculator",
  shortName: "GAG Calculator",
  description:
    "Professional Grow A Garden game calculator supporting crop value calculation, mutation analysis, pet weight calculation, trade analysis and more.",
  url: "https://growagardencalculator.net",
  version: "1.0.0",
  author: "Grow A Garden Calculator Team",
  keywords: [
    "Grow A Garden",
    "Calculator",
    "Roblox",
    "Farm Game",
    "Crop Value",
    "Mutation Calculator",
    "Pet Weight",
    "Trade Analysis",
    "WFL",
    "Sheckles",
  ],
} as const;

// Game related constants
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
