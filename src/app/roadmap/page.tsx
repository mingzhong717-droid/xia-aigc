import type { Metadata } from "next";
import RoadmapPageClient from "./RoadmapPageClient";

export const metadata: Metadata = {
  title: "AI学习路线图 - 根据身份选择系统学习路径",
  description:
    "AI工具学习路线图，根据你的身份（学生、职场人、创作者、开发者）选择最适合的学习路径，从零开始系统掌握AI工具。",
  keywords:
    "AI学习路线,AI入门路径,AI工具学习,AI系统学习,AI学习计划,AI进阶路线",
  alternates: {
    canonical: "https://aigc778.top/roadmap/",
  },
  openGraph: {
    title: "AI学习路线图 - 根据身份选择系统学习路径 | 人人AI",
    description:
      "根据你的身份选择最适合的AI学习路径，从零开始系统掌握AI工具",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/roadmap/",
  },
  twitter: {
    card: "summary",
    title: "AI学习路线图 - 根据身份选择系统学习路径",
    description: "从零开始系统掌握AI工具的学习路线图",
  },
};

export default function RoadmapPage() {
  return <RoadmapPageClient />;
}
