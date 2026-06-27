import type { Metadata } from "next";
import ApiTransitPageClient from "./ApiTransitPageClient";

export const metadata: Metadata = {
  title: "AI API中转站导航 - 精选稳定靠谱的模型接入方案",
  description:
    "精选主流AI API聚合与中转平台导航，帮你找到稳定靠谱的模型接入方案。包含平台评级、稳定性评估、价格对比和安全使用指南。",
  keywords:
    "AI API中转站,API聚合平台,ChatGPT API,Claude API,AI接口,API代理,模型接入",
  alternates: {
    canonical: "https://aigc778.top/api-transit/",
  },
  openGraph: {
    title: "AI API中转站导航 - 精选稳定靠谱的模型接入方案 | 人人AI",
    description:
      "精选主流AI API聚合与中转平台，帮你找到稳定靠谱的模型接入方案",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/api-transit/",
  },
  twitter: {
    card: "summary",
    title: "AI API中转站导航 - 精选稳定靠谱的模型接入方案",
    description: "精选主流AI API聚合与中转平台导航",
  },
};

export default function ApiTransitPage() {
  return <ApiTransitPageClient />;
}
