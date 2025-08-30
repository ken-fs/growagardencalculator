import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Website structured data
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Grow A Garden Calculator",
  description:
    "Best free Grow A Garden calculator for Roblox! Calculate crop values, pet weights, mutations, and analyze trades. Get the most sheckles with our professional farming calculator.",
  url: "https://growagardencalculator.net",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://growagardencalculator.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  keywords:
    "grow a garden calculator, roblox grow a garden, roblox farm game calculator, grow a garden sheckles, roblox farming simulator",
  inLanguage: "en-US",
};

// Organization structured data
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grow A Garden Calculator",
  url: "https://growagardencalculator.net",
  logo: "https://growagardencalculator.net/logo.png",
  description: "Professional Grow A Garden game calculator development team",
};

// Web application structured data
export const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Grow A Garden Calculator",
  description:
    "Best free Grow A Garden calculator for Roblox! Calculate crop values, pet weights, mutations, and analyze trades. Get the most sheckles with our professional farming calculator.",
  url: "https://growagardencalculator.net",
  applicationCategory: "GameApplication",
  operatingSystem: "Web Browser",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  softwareVersion: "2024",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Crop Value Calculator",
    "Pet Weight Calculator",
    "Mutation Analysis",
    "Trade Analyzer (WFL)",
    "Complete Game Database",
    "Free to Use",
  ],
};
