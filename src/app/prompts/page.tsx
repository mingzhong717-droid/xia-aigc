import type { Metadata } from "next";
import PromptsPageClient from "./PromptsPageClient";

export const metadata: Metadata = {
  title: "AI Prompt模板库 - 可直接复制的AI提示词合集",
  description:
    "精选AI Prompt提示词模板库，覆盖写作、编程、翻译、营销、学习等场景。每个模板都可直接复制使用，帮你快速上手AI工具。",
  keywords:
    "AI提示词,Prompt模板,ChatGPT提示词,AI提示词模板,Prompt大全,AI写作提示词,AI编程提示词",
  alternates: {
    canonical: "https://aigc778.top/prompts/",
  },
  openGraph: {
    title: "AI Prompt模板库 - 可直接复制的AI提示词合集 | 人人AI",
    description:
      "精选AI Prompt提示词模板，覆盖多种场景，每个模板都可直接复制使用",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/prompts/",
  },
  twitter: {
    card: "summary",
    title: "AI Prompt模板库 - 可直接复制的AI提示词合集",
    description: "精选AI Prompt提示词模板，每个模板都可直接复制使用",
  },
};

export default function PromptsPage() {
  return <PromptsPageClient />;
}
