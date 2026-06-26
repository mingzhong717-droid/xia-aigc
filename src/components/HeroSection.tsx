"use client";

import { useState } from "react";

const HOT_TAGS = ["ChatGPT", "AI绘画", "写作助手", "PPT", "视频生成", "免费", "国产AI", "编程"];

const SEARCH_SUGGESTIONS = [
  { icon: "📕", text: "写小红书文案", query: "小红书" },
  { icon: "🎬", text: "生成短视频", query: "视频生成" },
  { icon: "📊", text: "做PPT演示", query: "PPT" },
  { icon: "✍️", text: "写一篇文章", query: "写作" },
  { icon: "💻", text: "辅助写代码", query: "编程" },
  { icon: "🌐", text: "翻译文档", query: "翻译" },
];

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenTraffic: (type: "wechat" | "douyin" | "xiaohongshu") => void;
}

export default function HeroSection({ searchQuery, onSearchChange, onOpenTraffic }: HeroSectionProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative mb-8 sm:mb-10 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60">
      <div className="flex flex-col items-center text-center px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
          发现最好用的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">AI 工具</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-6 lg:mb-8 max-w-lg">
          585+ 精选AI工具，帮你轻松找到最适合的人工智能助手
        </p>

        {/* Big Search Box - Full Width */}
        <div className={`relative w-full max-w-[720px] transition-shadow duration-300 ${isFocused ? "shadow-xl shadow-indigo-500/15" : "shadow-md shadow-zinc-200/50 dark:shadow-zinc-900/50"}`}>
          <input
            type="text"
            placeholder="搜索 AI 工具名称、功能、标签..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full h-[56px] sm:h-[62px] lg:h-[66px] pl-14 pr-32 rounded-2xl border-2 border-zinc-200 bg-white text-base sm:text-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 transition-all"
          />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-zinc-400">
            🔍
          </span>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20">
            搜索
          </button>
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-28 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              ✕
            </button>
          )}

          {/* Focus suggestions dropdown */}
          {isFocused && !searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg z-20">
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-2 px-1">试试搜索：</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {SEARCH_SUGGESTIONS.map((s) => (
                  <button
                    key={s.query}
                    onMouseDown={(e) => { e.preventDefault(); onSearchChange(s.query); }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left"
                  >
                    <span>{s.icon}</span>
                    <span>{s.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Hot Tags */}
        <div className="flex items-center gap-2 mt-5 flex-wrap justify-center">
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">热门：</span>
          {HOT_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => onSearchChange(tag)}
              className="text-xs px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors border border-transparent hover:border-indigo-200 dark:hover:border-indigo-700/50"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Social buttons - mobile */}
        <div className="flex gap-2 mt-4 lg:hidden">
          <button
            onClick={() => onOpenTraffic("wechat")}
            className="text-xs px-3 py-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors dark:bg-green-900/20 dark:text-green-400"
          >
            💬 公众号
          </button>
          <button
            onClick={() => onOpenTraffic("xiaohongshu")}
            className="text-xs px-3 py-1.5 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors dark:bg-pink-900/20 dark:text-pink-400"
          >
            📕 小红书
          </button>
        </div>
      </div>
    </section>
  );
}
