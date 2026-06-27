"use client";

import { useState } from "react";
import { rankingCategories, rankings } from "@/data/rankings";
import { tools } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

function formatPopularity(num: number): string {
  if (num >= 100000000) return (num / 100000000).toFixed(1) + "亿";
  if (num >= 10000) return (num / 10000).toFixed(0) + "万";
  return num.toString();
}

function GrowthBadge({ growth }: { growth: "up" | "down" | "stable" }) {
  if (growth === "up") return <span className="text-green-500 text-xs font-bold">↑ 上升</span>;
  if (growth === "down") return <span className="text-red-500 text-xs font-bold">↓ 下降</span>;
  return <span className="text-zinc-400 text-xs">— 持平</span>;
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-white text-sm font-bold flex items-center justify-center shadow-md">🥇</div>;
  if (rank === 2) return <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400 text-white text-sm font-bold flex items-center justify-center shadow-md">🥈</div>;
  if (rank === 3) return <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 text-white text-sm font-bold flex items-center justify-center shadow-md">🥉</div>;
  return <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-sm font-bold flex items-center justify-center">{rank}</div>;
}

export default function RankingsPageClient() {
  const [activeCategory, setActiveCategory] = useState("overall");

  const currentRanking = rankings.find((r) => r.categoryId === activeCategory);
  const currentCategory = rankingCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">工具排行榜</span>
        </nav>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            🏆 AI 工具排行榜
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            基于用户热度、功能完善度和口碑综合排名
          </p>
          {currentRanking && (
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
              更新于 {currentRanking.updatedAt}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {rankingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-700"
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {currentCategory && (
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            {currentCategory.description}
          </p>
        )}

        {currentRanking && (
          <div className="space-y-3">
            {currentRanking.items.map((item, index) => {
              const tool = tools.find((t) => t.id === item.toolId);
              if (!tool) return null;
              const rank = index + 1;

              return (
                <Link
                  key={item.toolId}
                  href={`/tool/${item.toolId}`}
                  className={`block bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-lg transition-all ${
                    rank <= 3 ? "border-l-4 border-l-amber-400 dark:border-l-amber-500" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <RankBadge rank={rank} />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0">
                      <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-bold text-zinc-900 dark:text-white text-sm">
                          {tool.name}
                        </h3>
                        {tool.isFree && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            免费
                          </span>
                        )}
                        {tool.needVPN && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                            需翻墙
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {item.highlight}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 shrink-0">
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {item.score}
                        </div>
                        <div className="text-[10px] text-zinc-400">评分</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {formatPopularity(item.popularity)}
                        </div>
                        <div className="text-[10px] text-zinc-400">用户</div>
                      </div>
                      <div className="text-center">
                        <GrowthBadge growth={item.growth} />
                        <div className="text-[10px] text-zinc-400">趋势</div>
                      </div>
                    </div>
                    <div className="flex sm:hidden items-center gap-2 shrink-0">
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        {item.score}
                      </span>
                      <GrowthBadge growth={item.growth} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            排名基于公开数据估算和编辑评测，仅供参考。数据每周更新。
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <span>←</span> 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
