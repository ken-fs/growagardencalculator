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
    "Professional Grow A Garden game calculator supporting crop value calculation, mutation analysis, pet weight calculation, trade analysis and more.",
  url: "https://growagardencalculator.net",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://growagardencalculator.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
    "Professional Grow A Garden game calculator supporting crop value calculation, mutation analysis, pet weight calculation, trade analysis and more.",
  url: "https://growagardencalculator.net",
  applicationCategory: "GameApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};
