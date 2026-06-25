"use client";

import { useState } from "react";
import { tools, categories } from "@/data/tools";
import Sidebar from "@/components/Sidebar";
import ToolCard from "@/components/ToolCard";
import { cn } from "@/lib/utils";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toolCounts = categories.reduce((acc, cat) => {
    acc[cat.id] = tools.filter((t) => t.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>);

  const filteredTools = tools.filter((tool) => {
    const matchesCategory =
      activeCategory === "all" || tool.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const activeCategoryName =
    activeCategory === "all"
      ? "全部工具"
      : categories.find((c) => c.id === activeCategory)?.name || "全部工具";

  const activeCategoryDesc =
    activeCategory === "all"
      ? "精选实用的AI工具，帮你轻松上手人工智能"
      : categories.find((c) => c.id === activeCategory)?.description || "";

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950">
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        toolCounts={toolCounts}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {activeCategoryName}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {activeCategoryDesc}
                </p>
              </div>
              <div className="text-sm text-zinc-400 dark:text-zinc-500">
                共 {filteredTools.length} 个工具
              </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="搜索工具名称、功能..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent dark:bg-zinc-900 dark:border-zinc-800 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-white"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                🔍
              </span>
            </div>
          </div>

          {/* Tool Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-zinc-500 dark:text-zinc-400">
                没有找到匹配的工具，试试其他关键词？
              </p>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                  小AIGC
                </span>{" "}
                — 让每个人都能轻松用上AI
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-400 dark:text-zinc-500">
                <span>📕 小红书</span>
                <span>📱 抖音</span>
                <span>💬 公众号</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
