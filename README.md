# Grow A Garden Calculator

A comprehensive Grow A Garden game calculator website built with Next.js 15 and TypeScript.

## Features

### 🧮 Core Calculators

- **Crop Value Calculator** - Calculate crop values with mutations and bonuses
- **Pet Weight Calculator** - Calculate pet weights and values
- **WFL Trade Analyzer** - Analyze trade fairness (Win/Fair/Loss)

### 📚 Wiki Guides

- **Mutation Wiki** - Complete mutation information with all types and multipliers
- **Crop Wiki** - All crop information categorized by type and rarity
- **Pet Wiki** - Complete pet information guide
- **Gear Wiki** - Complete gear information guide

### ✨ Advanced Features

- **Mutation Combination Validation** - Automatically validate mutation combinations
- **Recommended Mutation Combinations** - Get optimal mutation combinations for crop types
- **Trade Analysis** - Intelligent trade value analysis with recommendations
- **Responsive Design** - Perfect adaptation for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom component library
- **State Management**: React Hooks
- **Functional Programming**: Prioritize functional components and Hooks

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (calculator)
│   ├── trade/             # Trade analysis page
│   ├── mutations/         # Mutation wiki page
│   ├── crops/             # Crop wiki page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── calculator/        # Calculator related components
│   ├── layout/           # Layout components
│   └── ui/               # Basic UI components
├── data/                 # Data files
│   ├── crops.ts          # Crop data
│   ├── mutations.ts      # Mutation data
│   ├── pets.ts           # Pet data
│   └── gears.ts          # Gear data
├── types/                # TypeScript type definitions
│   └── index.ts          # Core types
├── utils/                # Utility functions
│   └── calculator.ts     # Calculator logic
└── lib/                  # Library functions
    └── utils.ts          # Common utility functions
```

## Development Guide

### Install Dependencies

```bash
pnpm install
```

### Development Mode

```bash
pnpm dev
```

### Build Production Version

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Core Feature Implementation

### Calculator Logic

```typescript
// Calculate crop value
export const calculateCropValue = (input: CalculatorInput): CalculationResult => {
  const crop = getCropById(input.cropId);
  const baseValue = crop.baseValue;

  // Calculate mutation multiplier
  let totalMultiplier = 1;
  for (const mutationId of input.mutations) {
    const mutation = getMutationById(mutationId);
    if (mutation) {
      totalMultiplier *= mutation.multiplier;
    }
  }

  // 计算总价值
  const totalValue = baseValue * input.weight * input.quantity * totalMultiplier;

  return { baseValue, totalValue, totalMultiplier, ... };
};
```

### 突变验证

```typescript
// 验证突变组合
export const validateMutationCombination = (mutations: string[]) => {
  const growthMutations = mutations.filter(
    (id) => getMutationById(id)?.category === "growth"
  );

  // 生长突变只能选择一个
  if (growthMutations.length > 1) {
    return { isValid: false, error: "只能选择一个生长突变" };
  }

  return { isValid: true };
};
```

## SEO 优化

- **元数据优化**: 完整的 meta 标签和 Open Graph 数据
- **结构化数据**: 使用 JSON-LD 结构化数据
- **性能优化**: 代码分割和懒加载
- **移动端优化**: 响应式设计和移动端友好
- **语义化 HTML**: 使用语义化标签提升可访问性

## 部署

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量
3. 自动部署

### 其他平台

```bash
# 构建
pnpm build

# 输出静态文件
pnpm export
```

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 免责声明

本网站与 Gamer Robot Inc 和 Grow A Garden 无官方关联。所有游戏数据仅供参考，实际游戏数据可能有所不同。

## 联系方式

- 项目链接: [https://github.com/your-username/growagardencalculator](https://github.com/your-username/growagardencalculator)
- 网站链接: [https://growagardencalculator.net](https://growagardencalculator.net)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
