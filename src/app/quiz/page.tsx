import type { Metadata } from "next";
import QuizPageClient from "./QuizPageClient";

export const metadata: Metadata = {
  title: "AI工具测试 - 1分钟找到最适合你的AI工具",
  description:
    "6道题，60秒，找到最适合你的AI工具组合。不用注册，不用付费，测完推荐工具直接用。帮你从500+AI工具中精准匹配。",
  keywords:
    "AI工具测试,AI推荐,AI工具选择,适合我的AI,AI测试,AI工具匹配",
  alternates: {
    canonical: "https://aigc778.top/quiz/",
  },
  openGraph: {
    title: "AI工具测试 - 1分钟找到最适合你的AI工具 | 人人AI",
    description:
      "6道题，60秒，找到最适合你的AI工具组合。不用注册，不用付费",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/quiz/",
  },
  twitter: {
    card: "summary",
    title: "AI工具测试 - 1分钟找到最适合你的AI工具",
    description: "6道题，60秒，找到最适合你的AI工具组合",
  },
};

export default function QuizPage() {
  return <QuizPageClient />;
}
