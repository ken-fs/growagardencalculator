import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 服务器外部包
  serverExternalPackages: [],

  // 图片优化
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 压缩
  compress: true,

  // 性能优化
  poweredByHeader: false,

  // 重定向
  async redirects() {
    return [
      {
        source: "/calculator",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // 头部配置
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // 环境变量
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // 构建配置
  output: "standalone",
};

export default nextConfig;
