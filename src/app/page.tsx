import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "人人AI - AI工具导航站 | 精选585+实用AI工具",
  description:
    "人人AI是最好用的AI工具导航站，精选585+实用AI工具，覆盖AI对话、写作、绘画、视频、音频、PPT、编程、设计、办公、学习等12大分类，帮助每个人找到最适合的AI工具。每周更新，永久免费。",
  keywords:
    "AI工具,AI导航,AI工具导航,ChatGPT,AI写作,AI绘画,AI视频,人工智能,AI工具推荐,AI工具大全,免费AI工具,人人AI,AI对话,AI编程,AIGC,Midjourney,Stable Diffusion,文心一言,通义千问,Kimi",
  alternates: {
    canonical: "https://aigc778.top/",
  },
  openGraph: {
    title: "人人AI - AI工具导航站 | 精选585+实用AI工具",
    description:
      "最好用的AI工具导航站，精选585+实用AI工具，覆盖12大分类，让每个人都能轻松用上人工智能",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/",
  },
  twitter: {
    card: "summary_large_image",
    title: "人人AI - AI工具导航站",
    description: "精选585+实用AI工具，让每个人都能轻松用上人工智能",
    creator: "@xiaaigc",
  },
};

export default function Home() {
  return <HomePageClient />;
}
