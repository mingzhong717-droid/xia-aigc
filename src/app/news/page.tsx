import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "AI资讯动态 - 追踪AI行业最新新闻与产品更新",
  description:
    "AI行业最新资讯动态，追踪新品发布、产品更新、行业洞察。每日更新，帮你第一时间了解AI领域最新进展。",
  keywords:
    "AI资讯,AI新闻,AI动态,AI产品更新,AI行业新闻,ChatGPT更新,AI最新消息",
  alternates: {
    canonical: "https://aigc778.top/news/",
  },
  openGraph: {
    title: "AI资讯动态 - 追踪AI行业最新新闻与产品更新 | 人人AI",
    description:
      "AI行业最新资讯动态，每日更新，帮你第一时间了解AI领域最新进展",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/news/",
  },
  twitter: {
    card: "summary",
    title: "AI资讯动态 - 追踪AI行业最新新闻",
    description: "AI行业最新资讯动态，每日更新",
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
