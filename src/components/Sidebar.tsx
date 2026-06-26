"use client";

import { useEffect } from "react";
import { categories } from "@/data/tools";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  toolCounts: Record<string, number>;
  onOpenTraffic?: (type: "wechat" | "douyin" | "xiaohongshu" | "group") => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  activeCategory,
  onCategoryChange,
  toolCounts,
  onOpenTraffic,
  isOpen = false,
  onClose,
}: SidebarProps) {
  const { favorites } = useFavorites();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCategoryClick = (catId: string) => {
    onCategoryChange(catId);
    onClose?.();
  };

  const sidebarContent = (
    <div className="p-3">
      {/* Logo - compact */}
      <div className="flex items-center gap-2.5 mb-6 px-2 py-1">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm shadow-md shadow-indigo-500/20">
          🤖
        </div>
        <div>
          <h1 className="font-bold text-base text-zinc-900 dark:text-white leading-tight">
            人人AI
          </h1>
          <p className="text-[10px] text-zinc-400">AI工具，一找就用</p>
        </div>
      </div>

      {/* Quick Nav - 编辑推荐/热门/最新/排行榜 */}
      <div className="mb-4 px-1">
        <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-2">
          快捷导航
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => handleCategoryClick("all")}
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/30 transition-colors"
          >
            <span>⭐</span> 编辑推荐
          </button>
          <a
            href="/rankings/"
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:text-rose-400 dark:hover:bg-rose-900/30 transition-colors"
          >
            <span>🏆</span> 排行榜
          </a>
          <a
            href="/news/"
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30 transition-colors"
          >
            <span>📡</span> 最新动态
          </a>
          <button
            onClick={() => handleCategoryClick("favorites")}
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30 transition-colors"
          >
            <span>💜</span> 最近浏览
          </button>
        </div>
      </div>

      {/* Category Navigation - lightweight */}
      <nav className="space-y-0.5 mb-4">
        <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-3">
          工具分类
        </p>
        <button
          onClick={() => handleCategoryClick("all")}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left",
            activeCategory === "all"
              ? "bg-indigo-50 text-indigo-700 font-semibold dark:bg-indigo-900/30 dark:text-indigo-400"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          )}
        >
          <span className="text-base">🏠</span>
          <span>全部工具</span>
          <span className="ml-auto text-[10px] text-zinc-400 dark:text-zinc-500">
            {Object.values(toolCounts).reduce((a, b) => a + b, 0)}
          </span>
        </button>

        <button
          onClick={() => handleCategoryClick("favorites")}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left",
            activeCategory === "favorites"
              ? "bg-amber-50 text-amber-700 font-semibold dark:bg-amber-900/30 dark:text-amber-400"
              : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          )}
        >
          <span className="text-base">⭐</span>
          <span>我的收藏</span>
          {favorites.length > 0 && (
            <span className="ml-auto text-[10px] text-zinc-400 dark:text-zinc-500">
              {favorites.length}
            </span>
          )}
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={cn(
              "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left",
              activeCategory === cat.id
                ? "bg-indigo-50 text-indigo-700 font-semibold dark:bg-indigo-900/30 dark:text-indigo-400"
                : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
            )}
          >
            <span className="text-base">{cat.icon}</span>
            <span>{cat.name}</span>
            <span className="ml-auto text-[10px] text-zinc-400 dark:text-zinc-500">
              {toolCounts[cat.id] || 0}
            </span>
          </button>
        ))}
      </nav>

      {/* Extra pages - compact */}
      <div className="mb-4 border-t border-zinc-100 dark:border-zinc-800 pt-3">
        <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-3">
          更多板块
        </p>
        <div className="space-y-0.5">
          <a href="/news/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">📡</span><span>AI资讯</span>
          </a>
          <a href="/guide/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">🚀</span><span>新手入门</span>
          </a>
          <a href="/tutorials/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">🎓</span><span>实战教程</span>
          </a>
          <a href="/compare/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">⚖️</span><span>工具对比</span>
          </a>
          <a href="/rankings/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">🏆</span><span>工具排行榜</span>
          </a>
          <a href="/reviews/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">📝</span><span>工具评测</span>
          </a>
          <a href="/solutions/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">💡</span><span>使用场景</span>
          </a>
          <a href="/prompts/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">📋</span><span>Prompt 模板</span>
          </a>
          <a href="/roadmap/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">🗺️</span><span>学习路线</span>
          </a>
          <a href="/changelog/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">🔔</span><span>更新日志</span>
          </a>
          <a href="/quiz/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">🎯</span><span>测测适合你的AI</span>
          </a>
          <a href="/api-transit/" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 transition-all text-left">
            <span className="text-base">🔗</span><span>API中转站</span>
          </a>
        </div>
      </div>

      {/* Social CTA - minimized */}
      <div className="space-y-2 px-1">
        <button
          onClick={() => onOpenTraffic?.("wechat")}
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 text-xs font-medium text-green-700 dark:text-green-400 transition-colors"
        >
          <span>💬</span> 关注公众号 · 每日推荐
        </button>
        <button
          onClick={() => onOpenTraffic?.("xiaohongshu")}
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 text-xs font-medium text-pink-700 dark:text-pink-400 transition-colors"
        >
          <span>📕</span> 小红书 · AI教程
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar - reduced width for lighter visual weight */}
      <aside className="hidden lg:block w-56 xl:w-60 h-screen sticky top-0 overflow-y-auto border-r border-zinc-200/60 bg-white/90 backdrop-blur-xl dark:bg-zinc-950/90 dark:border-zinc-800/60 scrollbar-thin">
        {sidebarContent}
      </aside>

      {/* Mobile drawer with smooth transition */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        {/* Drawer panel */}
        <aside
          className={cn(
            "absolute left-0 top-0 bottom-0 w-72 overflow-y-auto bg-white dark:bg-zinc-900 shadow-2xl transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-end p-3 sticky top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm z-10">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              ✕
            </button>
          </div>
          {sidebarContent}
        </aside>
      </div>
    </>
  );
}
