import type { Metadata } from "next";
import TutorialsPageClient from "./TutorialsPageClient";

export const metadata: Metadata = {
  title: "AI实战教程 - 手把手教你用AI解决实际问题",
  description:
    "精选AI实战教程合集，手把手教你用ChatGPT、Midjourney、Kimi等AI工具解决实际问题。每篇教程都有可复制的提示词，零基础也能学会。",
  keywords:
    "AI教程,AI实战教程,ChatGPT教程,AI提示词,Midjourney教程,AI工具教程,AI入门教程",
  alternates: {
    canonical: "https://aigc778.top/tutorials/",
  },
  openGraph: {
    title: "AI实战教程 - 手把手教你用AI解决实际问题 | 人人AI",
    description:
      "精选AI实战教程合集，每篇都有可复制的提示词，零基础也能学会",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/tutorials/",
  },
  twitter: {
    card: "summary",
    title: "AI实战教程 - 手把手教你用AI解决实际问题",
    description: "精选AI实战教程合集，每篇都有可复制的提示词",
  },
};

export default function TutorialsPage() {
  return <TutorialsPageClient />;
}
