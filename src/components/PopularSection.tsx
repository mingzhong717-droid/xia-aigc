"use client";

import { useState } from "react";
import { tools, categories } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

// 从各分类中取热门工具
const POPULAR_CATEGORIES = ["chat", "image", "video", "writing", "code", "ppt"];

export default function PopularSection() {
  const [activeCat, setActiveCat] = useState("chat");

  const categoryTools = tools.filter((t) => t.category === activeCat).slice(0, 6);
  const activeCatInfo = categories.find((c) => c.id === activeCat);

  return (
    <section className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            热门工具
          </h2>
        </div>
        <Link
          href="/compare/"
          className="text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
        >
          对比工具 →
        </Link>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {POPULAR_CATEGORIES.map((catId) => {
          const cat = categories.find((c) => c.id === catId);
          if (!cat) return null;
          return (
            <button
              key={catId}
              onClick={() => setActiveCat(catId)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCat === catId
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          );
        })}
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categoryTools.map((tool, index) => (
          <Link
            key={tool.id}
            href={`/tool/${tool.id}`}
            className="group flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-md transition-all duration-200"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
              </div>
              {index < 3 && (
                <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[9px] flex items-center justify-center font-bold shadow-sm">
                  {index + 1}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {tool.name}
                </h3>
                {tool.hasChinese && (
                  <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                    中文
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
