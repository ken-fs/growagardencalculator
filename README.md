# Grow A Garden 计算器

一个功能齐全的 Grow A Garden 游戏计算器网站，基于 Next.js 15 和 TypeScript 构建。

## 功能特性

### 🧮 核心计算器
- **作物价值计算器** - 计算作物价值，支持突变和加成
- **宠物重量计算器** - 计算宠物重量和价值
- **WFL 交易分析器** - 分析交易是否公平 (Win/Fair/Loss)

### 📚 百科大全
- **突变百科** - 完整的突变信息，包含所有突变类型和倍数
- **作物百科** - 所有作物信息，按类型和稀有度分类
- **宠物百科** - 宠物信息大全
- **装备百科** - 装备信息大全

### ✨ 高级功能
- **突变组合验证** - 自动验证突变组合是否有效
- **推荐突变组合** - 根据作物类型推荐最佳突变组合
- **交易分析** - 智能分析交易价值，提供建议
- **响应式设计** - 完美适配桌面和移动设备

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **UI组件**: 自定义组件库
- **状态管理**: React Hooks
- **函数式编程**: 优先使用函数式组件和 Hooks

## 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 主页 (计算器)
│   ├── trade/             # 交易分析页面
│   ├── mutations/         # 突变百科页面
│   ├── crops/             # 作物百科页面
│   └── layout.tsx         # 根布局
├── components/            # React 组件
│   ├── calculator/        # 计算器相关组件
│   ├── layout/           # 布局组件
│   └── ui/               # 基础UI组件
├── data/                 # 数据文件
│   ├── crops.ts          # 作物数据
│   ├── mutations.ts      # 突变数据
│   ├── pets.ts           # 宠物数据
│   └── gears.ts          # 装备数据
├── types/                # TypeScript 类型定义
│   └── index.ts          # 核心类型
├── utils/                # 工具函数
│   └── calculator.ts     # 计算器逻辑
└── lib/                  # 库函数
    └── utils.ts          # 通用工具函数
```

## 开发指南

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 核心功能实现

### 计算器逻辑

```typescript
// 计算作物价值
export const calculateCropValue = (input: CalculatorInput): CalculationResult => {
  const crop = getCropById(input.cropId);
  const baseValue = crop.baseValue;
  
  // 计算突变倍数
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
  const growthMutations = mutations.filter(id => 
    getMutationById(id)?.category === 'growth'
  );
  
  // 生长突变只能选择一个
  if (growthMutations.length > 1) {
    return { isValid: false, error: '只能选择一个生长突变' };
  }
  
  return { isValid: true };
};
```

## SEO 优化

- **元数据优化**: 完整的 meta 标签和 Open Graph 数据
- **结构化数据**: 使用 JSON-LD 结构化数据
- **性能优化**: 代码分割和懒加载
- **移动端优化**: 响应式设计和移动端友好
- **语义化HTML**: 使用语义化标签提升可访问性

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