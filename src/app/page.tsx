"use client";

import { useState } from "react";
import { tools, categories } from "@/data/tools";
import Sidebar from "@/components/Sidebar";
import ToolCard from "@/components/ToolCard";
import TrafficModal from "@/components/TrafficModal";
import { cn } from "@/lib/utils";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showTrafficModal, setShowTrafficModal] = useState(false);
  const [trafficType, setTrafficType] = useState<"wechat" | "douyin" | "xiaohongshu" | "group">("wechat");

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

  const openTraffic = (type: "wechat" | "douyin" | "xiaohongshu" | "group") => {
    setTrafficType(type);
    setShowTrafficModal(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        toolCounts={toolCounts}
        onOpenTraffic={openTraffic}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Hero Banner */}
          <div className="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-8 shadow-lg">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">🤖 小AIGC</h1>
              <p className="text-indigo-100 text-lg mb-4">
                AI工具导航站，让每个人都能轻松用上人工智能
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openTraffic("wechat")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm backdrop-blur-sm"
                >
                  <span>💬</span> 关注公众号
                </button>
                <button
                  onClick={() => openTraffic("douyin")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm backdrop-blur-sm"
                >
                  <span>📱</span> 抖音号
                </button>
                <button
                  onClick={() => openTraffic("xiaohongshu")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm backdrop-blur-sm"
                >
                  <span>📕</span> 小红书
                </button>
              </div>
            </div>
          </div>

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
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-zinc-900 dark:border-zinc-800 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-indigo-400 shadow-sm"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                🔍
              </span>
            </div>
          </div>

          {/* Tool Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
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
              <div className="flex items-center gap-4 text-sm">
                <button
                  onClick={() => openTraffic("xiaohongshu")}
                  className="text-zinc-400 hover:text-pink-500 transition-colors"
                >
                  📕 小红书
                </button>
                <button
                  onClick={() => openTraffic("douyin")}
                  className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  📱 抖音
                </button>
                <button
                  onClick={() => openTraffic("wechat")}
                  className="text-zinc-400 hover:text-green-500 transition-colors"
                >
                  💬 公众号
                </button>
                <button
                  onClick={() => openTraffic("group")}
                  className="text-zinc-400 hover:text-indigo-500 transition-colors"
                >
                  👥 交流群
                </button>
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Traffic Modal */}
      {showTrafficModal && (
        <TrafficModal
          type={trafficType}
          onClose={() => setShowTrafficModal(false)}
        />
      )}
    </div>
  );
}
