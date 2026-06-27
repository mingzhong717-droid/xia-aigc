import type { Metadata } from "next";
import ComparePageClient from "./ComparePageClient";

export const metadata: Metadata = {
  title: "AI工具对比 - 多维度对比AI工具功能与价格",
  description:
    "在线AI工具对比功能，支持同时对比2-3个AI工具的功能、价格、中文支持、网络要求等。内置ChatGPT vs Claude、Kimi vs 豆包等热门对比方案。",
  keywords:
    "AI工具对比,ChatGPT对比Claude,AI对比,Kimi对比豆包,AI工具比较,AI选择",
  alternates: {
    canonical: "https://aigc778.top/compare/",
  },
  openGraph: {
    title: "AI工具对比 - 多维度对比AI工具功能与价格 | 人人AI",
    description:
      "在线AI工具对比，支持同时对比2-3个AI工具的功能、价格和适用场景",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/compare/",
  },
  twitter: {
    card: "summary",
    title: "AI工具对比 - 多维度对比AI工具功能与价格",
    description: "在线AI工具对比，支持同时对比2-3个AI工具",
  },
};

export default function ComparePage() {
  return <ComparePageClient />;
}
