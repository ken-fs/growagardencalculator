// Simple i18n implementation for the project
export const locales = ['en', 'zh'] as const;
export type Locale = typeof locales[number];

const messages = {
  en: {
    nav: {
      home: 'Home',
      calculator: 'Calculator', 
      trade: 'Trade Analysis',
      wiki: 'Wiki',
      mutations: 'Mutations',
      crops: 'Crops',
      pets: 'Pets',
      gears: 'Gears',
      blog: 'Blog',
      guides: 'Guides'
    },
    wiki: {
      mutations: {
        title: 'Mutation Wiki',
        subtitle: 'Complete Grow A Garden mutation information guide'
      }
    }
  },
  zh: {
    nav: {
      home: '首页',
      calculator: '计算器',
      trade: '交易分析', 
      wiki: '百科',
      mutations: '突变',
      crops: '作物',
      pets: '宠物',
      gears: '装备',
      blog: '博客',
      guides: '指南'
    },
    wiki: {
      mutations: {
        title: '突变百科',
        subtitle: '完整的Grow A Garden突变信息指南'
      }
    }
  }
} as const;

export function getMessages(locale: Locale = 'en') {
  return messages[locale] || messages.en;
}

export function t(key: string, locale: Locale = 'en') {
  const keys = key.split('.');
  let value: any = getMessages(locale);
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }
  
  return value || key;
}