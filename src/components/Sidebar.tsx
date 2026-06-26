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
    <div className="p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-lg shadow-indigo-500/20">
          🤖
        </div>
        <div>
          <h1 className="font-bold text-lg text-zinc-900 dark:text-white leading-tight">
            人人AI
          </h1>
          <p className="text-xs text-zinc-400">AI工具，一找就用</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-0.5">
        <button
          onClick={() => handleCategoryClick("all")}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left",
            activeCategory === "all"
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20"
              : "text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          )}
        >
          <span className="text-lg">🏠</span>
          <span>全部工具</span>
          <span className="ml-auto text-xs opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
            {Object.values(toolCounts).reduce((a, b) => a + b, 0)}
          </span>
        </button>

        <button
          onClick={() => handleCategoryClick("favorites")}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left",
            activeCategory === "favorites"
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md shadow-amber-500/20"
              : "text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          )}
        >
          <span className="text-lg">⭐</span>
          <span>我的收藏</span>
          {favorites.length > 0 && (
            <span className="ml-auto text-xs opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
              {favorites.length}
            </span>
          )}
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left",
              activeCategory === cat.id
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                : "text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
            )}
          >
            <span className="text-lg">{cat.icon}</span>
            <span>{cat.name}</span>
            <span className="ml-auto text-xs opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
              {toolCounts[cat.id] || 0}
            </span>
          </button>
        ))}
      </nav>

      {/* Extra pages */}
      <div className="mt-6 mb-4 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-4">
        <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-3">
          更多板块
        </p>
        <div className="space-y-0.5">
          <a
            href="/guide/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          >
            <span className="text-lg">🚀</span>
            <span>新手指南</span>
          </a>
          <a
            href="/prompts/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          >
            <span className="text-lg">📋</span>
            <span>Prompt 模板</span>
          </a>
          <a
            href="/quiz/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left text-zinc-600 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
          >
            <span className="text-lg">🎯</span>
            <span>测测适合你的AI</span>
          </a>
        </div>
      </div>

      {/* Traffic CTA Cards */}
      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/60 dark:border-green-800/40">
          <p className="text-xs font-medium text-green-700 dark:text-green-400 mb-1">
            💬 公众号
          </p>
          <p className="text-xs text-green-600/80 dark:text-green-400/70 mb-3">
            每日AI资讯+工具推荐
          </p>
          <button
            onClick={() => onOpenTraffic?.("wechat")}
            className="w-full py-2 px-3 rounded-lg bg-green-500 text-white text-xs font-medium hover:bg-green-600 transition-all shadow-sm shadow-green-500/20"
          >
            关注公众号
          </button>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border border-pink-200/60 dark:border-pink-800/40">
          <p className="text-xs font-medium text-pink-700 dark:text-pink-400 mb-1">
            📕 小红书
          </p>
          <p className="text-xs text-pink-600/80 dark:text-pink-400/70 mb-3">
            AI教程+使用技巧
          </p>
          <button
            onClick={() => onOpenTraffic?.("xiaohongshu")}
            className="w-full py-2 px-3 rounded-lg bg-pink-500 text-white text-xs font-medium hover:bg-pink-600 transition-all shadow-sm shadow-pink-500/20"
          >
            关注小红书
          </button>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200/60 dark:border-indigo-800/40">
          <p className="text-xs font-medium text-indigo-700 dark:text-indigo-400 mb-1">
            👥 交流群
          </p>
          <p className="text-xs text-indigo-600/80 dark:text-indigo-400/70 mb-3">
            和AI爱好者一起交流
          </p>
          <button
            onClick={() => onOpenTraffic?.("group")}
            className="w-full py-2 px-3 rounded-lg bg-indigo-500 text-white text-xs font-medium hover:bg-indigo-600 transition-all shadow-sm shadow-indigo-500/20"
          >
            加入群聊
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 h-screen sticky top-0 overflow-y-auto border-r border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:bg-zinc-900/80 dark:border-zinc-800/80">
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
