import type { Metadata } from "next";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = {
  title: "AI使用场景 - 按需求找到完整的AI工具组合方案",
  description:
    "AI使用场景方案库，按你的实际需求（写论文、做PPT、剪视频、写代码等）找到完整的AI工具组合方案，每个场景都有分步指引。",
  keywords:
    "AI使用场景,AI工具方案,AI写论文,AI做PPT,AI剪视频,AI工具组合,AI解决方案",
  alternates: {
    canonical: "https://aigc778.top/solutions/",
  },
  openGraph: {
    title: "AI使用场景 - 按需求找到完整的AI工具组合方案 | 人人AI",
    description:
      "按你的实际需求找到完整的AI工具组合方案，每个场景都有分步指引",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/solutions/",
  },
  twitter: {
    card: "summary",
    title: "AI使用场景 - 按需求找到AI工具组合方案",
    description: "按实际需求找到完整的AI工具组合方案",
  },
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
