"use client";

import { Tool } from "@/data/tools";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <div className="group relative p-5 rounded-2xl border border-zinc-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-indigo-700/50" style={{ animationDelay: `${index * 50}ms` }}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(tool.id);
        }}
        className="absolute top-3 right-3 z-10 p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        title={isFavorite(tool.id) ? "取消收藏" : "收藏"}
      >
        <svg
          className={`w-4 h-4 transition-colors ${isFavorite(tool.id) ? "text-amber-400 fill-amber-400" : "text-zinc-300 dark:text-zinc-600"}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill={isFavorite(tool.id) ? "currentColor" : "none"}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </button>
      <Link href={`/tool/${tool.id}`} className="block">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
          {tool.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {tool.name}
            </h3>
            {tool.hasChinese && (
              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-md bg-red-50 text-red-600 font-medium dark:bg-red-900/20 dark:text-red-400 border border-red-100 dark:border-red-800/30">
                中文
              </span>
            )}
            {tool.isFree && (
              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-md bg-green-50 text-green-600 font-medium dark:bg-green-900/20 dark:text-green-400 border border-green-100 dark:border-green-800/30">
                免费
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover arrow */}
      <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] text-zinc-400 dark:text-zinc-500">点击查看详情</span>
        <span className="text-indigo-500 text-sm">→</span>
      </div>
      </Link>
    </div>
  );
}
