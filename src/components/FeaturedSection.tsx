"use client";

import { tools } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

// 编辑精选 - 手动挑选8个优质工具
const FEATURED_IDS = [
  "chatgpt", "kimi", "midjourney", "cursor", "doubao", "coze", "canva", "notion-ai"
];

export default function FeaturedSection() {
  // Get featured tools, fallback to first 8 if ids not found
  const featuredTools = FEATURED_IDS.map((id) => tools.find((t) => t.id === id)).filter(Boolean);
  const displayTools = featuredTools.length >= 8 ? featuredTools.slice(0, 8) : tools.slice(0, 8);

  return (
    <section className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="text-lg">⭐</span>
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            编辑精选
          </h2>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 font-medium border border-amber-100 dark:border-amber-800/30">
            本周推荐
          </span>
        </div>
        <Link
          href="/rankings/"
          className="text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
        >
          查看排行榜 →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayTools.map((tool) => tool && (
          <Link
            key={tool.id}
            href={`/tool/${tool.id}`}
            className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                {tool.recommendation}
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              {tool.isFree && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                  免费
                </span>
              )}
              {!tool.needVPN && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  直连
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
