"use client";

import { Tool } from "@/data/tools";
import Link from "next/link";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tool/${tool.id}`}
      className="group block p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-700"
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl shrink-0">{tool.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm truncate">
              {tool.name}
            </h3>
            {tool.hasChinese && (
              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-red-50 text-red-600 font-medium dark:bg-red-900/20 dark:text-red-400">
                中文
              </span>
            )}
            {tool.isFree && (
              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 font-medium dark:bg-green-900/20 dark:text-green-400">
                免费
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
