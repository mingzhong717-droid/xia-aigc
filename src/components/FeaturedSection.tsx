"use client";

import { tools } from "@/data/tools";
import { editorialPicks } from "@/data/editorial";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

export default function FeaturedSection() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {editorialPicks.map((pick) => {
          const tool = tools.find((t) => t.id === pick.toolId);
          if (!tool) return null;
          return (
            <div
              key={pick.toolId}
              className="group relative flex flex-col p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-200 h-[156px]"
            >
              {/* Score badge - top right */}
              <div className="absolute top-2.5 right-2.5">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[11px] font-bold shadow-sm">
                  {pick.score.toFixed(1)}
                </span>
              </div>

              {/* Top: Logo + Name + OneLiner */}
              <Link href={`/tool/${tool.id}`} className="flex items-start gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
                </div>
                <div className="flex-1 min-w-0 pr-8">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-300 mt-0.5 line-clamp-1 font-medium">
                    {pick.oneLiner}
                  </p>
                </div>
              </Link>

              {/* Middle: Reason + Audience */}
              <div className="flex-1 min-h-0 mb-2">
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mb-1">
                  <span className="text-indigo-500 dark:text-indigo-400 font-medium">推荐：</span>
                  {pick.reason}
                </p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                  <span className="text-purple-500 dark:text-purple-400 font-medium">适合：</span>
                  {pick.audience}
                </p>
              </div>

              {/* Bottom: Tags + Button */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-1">
                  {tool.isFree && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 font-medium">
                      免费
                    </span>
                  )}
                  {tool.hasChinese && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-medium">
                      中文
                    </span>
                  )}
                  {tool.needVPN && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 font-medium">
                      翻墙
                    </span>
                  )}
                  {!tool.needVPN && !tool.hasChinese && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400 font-medium">
                      直连
                    </span>
                  )}
                </div>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 font-medium hover:bg-indigo-500 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-200"
                >
                  立即体验 →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
