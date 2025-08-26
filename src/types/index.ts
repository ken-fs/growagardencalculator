// 作物类型
export interface Crop {
  id: string;
  name: string;
  baseValue: number;
  image: string;
  category: 'fruit' | 'vegetable' | 'flower' | 'special';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

// 突变类型
export interface Mutation {
  id: string;
  name: string;
  multiplier: number;
  category: 'growth' | 'temperature' | 'environmental';
  description: string;
  color: string;
}

// 宠物类型
export interface Pet {
  id: string;
  name: string;
  baseValue: number;
  image: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  category: 'farm' | 'wild' | 'special';
}

// 装备类型
export interface Gear {
  id: string;
  name: string;
  baseValue: number;
  image: string;
  category: 'sprinkler' | 'fertilizer' | 'tool' | 'decoration';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

// 计算器输入
export interface CalculatorInput {
  cropId: string;
  weight: number;
  quantity: number;
  friendBoost: number;
  mutations: string[];
}

// 计算结果
export interface CalculationResult {
  baseValue: number;
  totalValue: number;
  totalMultiplier: number;
  mutations: Mutation[];
  friendBoostValue: number;
  weightValue: number;
  quantityValue: number;
}

// 交易分析结果
export interface TradeAnalysis {
  isWin: boolean;
  isFair: boolean;
  isLoss: boolean;
  profit: number;
  profitPercentage: number;
  recommendation: string;
}

// 导航菜单项
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

// 页面元数据
export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}
