import React from "react";

interface JsonLdProps {
  data: any;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// 网站结构化数据
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Grow A Garden 计算器",
  description:
    "专业的 Grow A Garden 游戏计算器，支持作物价值计算、突变分析、宠物重量计算、交易分析等功能。",
  url: "https://growagardencalculator.net",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://growagardencalculator.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// 组织结构化数据
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grow A Garden Calculator",
  url: "https://growagardencalculator.net",
  logo: "https://growagardencalculator.net/logo.png",
  description: "专业的 Grow A Garden 游戏计算器开发团队",
};

// 工具应用结构化数据
export const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Grow A Garden 计算器",
  description:
    "专业的 Grow A Garden 游戏计算器，支持作物价值计算、突变分析、宠物重量计算、交易分析等功能。",
  url: "https://growagardencalculator.net",
  applicationCategory: "GameApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};
