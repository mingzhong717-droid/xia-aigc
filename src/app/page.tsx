"use client";

import { useState, useRef, useMemo, memo } from "react";
import { tools, categories } from "@/data/tools";
import Sidebar from "@/components/Sidebar";
import ToolCard from "@/components/ToolCard";
import TrafficModal from "@/components/TrafficModal";
import SubmitToolModal from "@/components/SubmitToolModal";
import HomeJsonLd from "@/components/HomeJsonLd";
import { useFavorites } from "@/hooks/useFavorites";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const HOT_SEARCHES = ["ChatGPT", "AI绘画", "写作", "PPT", "视频", "免费"];

const MemoToolCard = memo(ToolCard);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showTrafficModal, setShowTrafficModal] = useState(false);
  const [trafficType, setTrafficType] = useState<"wechat" | "douyin" | "xiaohongshu" | "group">("wechat");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const { favorites } = useFavorites();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const mainRef = useRef<HTMLElement>(null);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toolCounts = categories.reduce((acc, cat) => {
    acc[cat.id] = tools.filter((t) => t.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      let matchesCategory: boolean;
      if (activeCategory === "all") {
        matchesCategory = true;
      } else if (activeCategory === "favorites") {
        matchesCategory = favorites.includes(tool.id);
      } else {
        matchesCategory = tool.category === activeCategory;
      }
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, favorites]);

  // Infinite scroll: load 24 items at a time
  const { visibleItems, hasMore } = useInfiniteScroll(filteredTools, mainRef, {
    pageSize: 24,
    threshold: 400,
  });

  const activeCategoryName =
    activeCategory === "all"
      ? "全部工具"
      : activeCategory === "favorites"
      ? "我的收藏"
      : categories.find((c) => c.id === activeCategory)?.name || "全部工具";

  const activeCategoryDesc =
    activeCategory === "all"
      ? "精选实用的AI工具，帮你轻松上手人工智能"
      : activeCategory === "favorites"
      ? `已收藏 ${favorites.length} 个工具`
      : categories.find((c) => c.id === activeCategory)?.description || "";

  const openTraffic = (type: "wechat" | "douyin" | "xiaohongshu" | "group") => {
    setTrafficType(type);
    setShowTrafficModal(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <HomeJsonLd />
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        toolCounts={toolCounts}
        onOpenTraffic={openTraffic}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main ref={mainRef} className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Mobile header with menu button */}
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm">
                🤖
              </div>
              <span className="font-bold text-zinc-900 dark:text-white">小AIGC</span>
            </div>
            <button
              onClick={toggleDark}
              className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Hero Banner */}
          <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-6 sm:p-8 shadow-lg">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">🤖 小AIGC</h1>
              <p className="text-indigo-100 text-base sm:text-lg mb-4">
                AI工具导航站，让每个人都能轻松用上人工智能
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={() => openTraffic("wechat")}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-xs sm:text-sm backdrop-blur-sm"
                >
                  <span>💬</span> 关注公众号
                </button>
                <button
                  onClick={() => openTraffic("douyin")}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-xs sm:text-sm backdrop-blur-sm"
                >
                  <span>📱</span> 抖音号
                </button>
                <button
                  onClick={() => openTraffic("xiaohongshu")}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-xs sm:text-sm backdrop-blur-sm"
                >
                  <span>📕</span> 小红书
                </button>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  {activeCategoryName}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {activeCategoryDesc}
                </p>
              </div>
              <div className="text-sm text-zinc-400 dark:text-zinc-500 hidden sm:block">
                共 {filteredTools.length} 个工具
              </div>
            </div>

            {/* Search + Dark Mode Toggle */}
            <div className="flex items-center gap-3">
              <div className="relative max-w-md flex-1">
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
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
              <button
                onClick={toggleDark}
                className="hidden lg:flex w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
                title={isDark ? "切换亮色模式" : "切换暗色模式"}
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>

            {/* Hot search tags */}
            {!searchQuery && activeCategory === "all" && (
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="text-xs text-zinc-400 dark:text-zinc-500">热门：</span>
                {HOT_SEARCHES.map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setSearchQuery(keyword)}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile category pills */}
          <div className="lg:hidden mb-4 -mx-4 px-4 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
                }`}
              >
                全部 {Object.values(toolCounts).reduce((a, b) => a + b, 0)}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tool Grid */}
          {filteredTools.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleItems.map((tool, index) => (
                  <MemoToolCard
                    key={`${tool.id}-${index}`}
                    tool={tool}
                    index={index}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>

              {/* Load more indicator */}
              {hasMore && (
                <div className="flex justify-center py-8">
                  <div className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>加载更多...</span>
                  </div>
                </div>
              )}

              {/* End of list indicator */}
              {!hasMore && filteredTools.length > 24 && (
                <div className="flex justify-center py-8">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    — 已展示全部 {filteredTools.length} 个工具 —
                  </span>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-zinc-500 dark:text-zinc-400 mb-3">
                没有找到匹配的工具，试试其他关键词？
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-sm text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                >
                  清除搜索
                </button>
              )}
            </div>
          )}

          {/* Submit Tool CTA */}
          <div className="mt-12 sm:mt-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200/60 dark:border-indigo-800/30 text-center">
            <p className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
              🎯 发现了好用的AI工具？
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              推荐给大家，帮助更多人找到好工具
            </p>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
            >
              推荐工具
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                  小AIGC
                </span>{" "}
                — 让每个人都能轻松用上AI
              </div>
              <div className="flex items-center gap-4 text-sm flex-wrap justify-center">
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="text-zinc-400 hover:text-indigo-500 transition-colors"
                >
                  🎯 推荐工具
                </button>
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

      {/* Submit Tool Modal */}
      {showSubmitModal && (
        <SubmitToolModal onClose={() => setShowSubmitModal(false)} />
      )}
    </div>
  );
}
