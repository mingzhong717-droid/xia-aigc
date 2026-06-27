"use client";

import { useState, useRef } from "react";
import { tools, categories } from "@/data/tools";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import PopularSection from "@/components/PopularSection";
import ToolGridSection from "@/components/ToolGridSection";
import TrafficModal from "@/components/TrafficModal";
import SubmitToolModal from "@/components/SubmitToolModal";
import HomeJsonLd from "@/components/HomeJsonLd";
import SceneEntries from "@/components/SceneEntries";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function HomePageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showTrafficModal, setShowTrafficModal] = useState(false);
  const [trafficType, setTrafficType] = useState<"wechat" | "douyin" | "xiaohongshu" | "group">("wechat");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const { isDark, toggle: toggleDark } = useDarkMode();
  const mainRef = useRef<HTMLElement>(null);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const gridSection = document.getElementById("tool-grid-section");
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toolCounts = categories.reduce((acc, cat) => {
    acc[cat.id] = tools.filter((t) => t.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>);

  const openTraffic = (type: "wechat" | "douyin" | "xiaohongshu" | "group") => {
    setTrafficType(type);
    setShowTrafficModal(true);
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950">
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">
                🤖
              </div>
              <span className="font-bold text-sm text-zinc-900 dark:text-white">人人AI</span>
            </div>
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Desktop top bar */}
          <div className="hidden lg:flex justify-end mb-4">
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              title={isDark ? "切换亮色模式" : "切换暗色模式"}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          <HeroSection
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onOpenTraffic={openTraffic}
          />

          <SceneEntries onSearch={setSearchQuery} />
          <FeaturedSection />
          <PopularSection />

          {/* 互动入口 */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/quiz/"
              className="group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 border border-violet-200/60 dark:border-violet-800/30 hover:border-violet-300 dark:hover:border-violet-700 transition-all"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">🧪</span>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">不知道选哪个 AI？</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">1分钟测试，找到最适合你的工具</p>
              </div>
              <span className="ml-auto text-violet-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/compare/"
              className="group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200/60 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">⚖️</span>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">工具对比</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">把 2-3 个工具放一起，看谁更适合你</p>
              </div>
              <span className="ml-auto text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div id="tool-grid-section">
            <ToolGridSection
              searchQuery={searchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

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
                  人人AI
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
              </div>
            </div>
          </footer>
        </div>
      </main>

      {showTrafficModal && (
        <TrafficModal
          type={trafficType}
          onClose={() => setShowTrafficModal(false)}
        />
      )}

      {showSubmitModal && (
        <SubmitToolModal onClose={() => setShowSubmitModal(false)} />
      )}
    </div>
  );
}
