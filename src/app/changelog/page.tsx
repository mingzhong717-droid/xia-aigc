import type { Metadata } from "next";
import ChangelogPageClient from "./ChangelogPageClient";

export const metadata: Metadata = {
  title: "AI工具更新日志 - 追踪各大AI工具最新更新",
  description:
    "AI工具更新日志，追踪ChatGPT、Claude、Midjourney等各大AI工具的最新更新、新功能和重要变化。每周更新。",
  keywords:
    "AI工具更新,AI更新日志,ChatGPT更新,Claude更新,AI新功能,AI工具变化",
  alternates: {
    canonical: "https://aigc778.top/changelog/",
  },
  openGraph: {
    title: "AI工具更新日志 - 追踪各大AI工具最新更新 | 人人AI",
    description:
      "追踪各大AI工具的最新更新、新功能和重要变化",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/changelog/",
  },
  twitter: {
    card: "summary",
    title: "AI工具更新日志 - 追踪各大AI工具最新更新",
    description: "追踪各大AI工具的最新更新和新功能",
  },
};

export default function ChangelogPage() {
  return <ChangelogPageClient />;
}
