import type { Metadata } from "next";
import ReviewsPageClient from "./ReviewsPageClient";

export const metadata: Metadata = {
  title: "AI工具深度评测 - 编辑亲测帮你避坑",
  description:
    "AI工具深度评测合集，编辑亲自体验后撰写的真实评测报告。包含优缺点分析、评分、适用人群推荐，帮你避坑选出最适合的AI工具。",
  keywords:
    "AI工具评测,AI评测,ChatGPT评测,AI工具测评,AI工具推荐,AI深度评测",
  alternates: {
    canonical: "https://aigc778.top/reviews/",
  },
  openGraph: {
    title: "AI工具深度评测 - 编辑亲测帮你避坑 | 人人AI",
    description:
      "编辑亲测的AI工具深度评测，包含优缺点分析和适用人群推荐",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/reviews/",
  },
  twitter: {
    card: "summary",
    title: "AI工具深度评测 - 编辑亲测帮你避坑",
    description: "编辑亲测的AI工具深度评测，帮你避坑选出最适合的AI工具",
  },
};

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
