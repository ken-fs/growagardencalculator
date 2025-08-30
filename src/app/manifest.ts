import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grow A Garden 计算器",
    short_name: "GAG 计算器",
    description:
      "专业的 Grow A Garden 游戏计算器，支持作物价值计算、突变分析、宠物重量计算、交易分析等功能。",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4ade80",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
