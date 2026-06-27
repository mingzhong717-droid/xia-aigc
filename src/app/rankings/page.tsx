import type { Metadata } from "next";
import RankingsPageClient from "./RankingsPageClient";

export const metadata: Metadata = {
  title: "AI工具排行榜 - 2026年最受欢迎的AI工具排名",
  description:
    "2026年AI工具排行榜，基于用户热度、功能完善度和口碑综合排名。涵盖AI对话、AI绘画、AI写作、AI编程等多个分类，帮你找到最好用的AI工具。",
  keywords:
    "AI工具排行榜,AI排名,最好用的AI,AI工具推荐,ChatGPT排名,AI绘画排名,AI写作排名",
  alternates: {
    canonical: "https://aigc778.top/rankings/",
  },
  openGraph: {
    title: "AI工具排行榜 - 2026年最受欢迎的AI工具排名 | 人人AI",
    description:
      "基于用户热度、功能完善度和口碑综合排名，帮你找到最好用的AI工具",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/rankings/",
  },
  twitter: {
    card: "summary",
    title: "AI工具排行榜 - 2026年最受欢迎的AI工具排名",
    description: "基于用户热度和口碑综合排名，帮你找到最好用的AI工具",
  },
};

export default function RankingsPage() {
  return <RankingsPageClient />;
}
