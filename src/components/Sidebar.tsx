"use client";

import { categories } from "@/data/tools";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  toolCounts: Record<string, number>;
}

export default function Sidebar({
  activeCategory,
  onCategoryChange,
  toolCounts,
}: SidebarProps) {
  return (
    <aside className="w-64 h-screen sticky top-0 overflow-y-auto border-r border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6 px-2">
          <span className="text-2xl">🤖</span>
          <div>
            <h1 className="font-bold text-lg text-zinc-900 dark:text-white leading-tight">
              小AIGC
            </h1>
            <p className="text-xs text-zinc-500">AI工具，一找就用</p>
          </div>
        </div>

        <nav className="space-y-1">
          <button
            onClick={() => onCategoryChange("all")}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
              activeCategory === "all"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            )}
          >
            <span className="text-lg">🏠</span>
            <span>全部工具</span>
            <span className="ml-auto text-xs opacity-60">
              {Object.values(toolCounts).reduce((a, b) => a + b, 0)}
            </span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              )}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="ml-auto text-xs opacity-60">
                {toolCounts[cat.id] || 0}
              </span>
            </button>
          ))}
        </nav>

        <div className="mt-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
            💡 找不到想要的工具？
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            加入交流群，告诉我们你需要什么
          </p>
          <button className="mt-3 w-full py-2 px-3 rounded-md bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
            加入交流群
          </button>
        </div>
      </div>
    </aside>
  );
}
