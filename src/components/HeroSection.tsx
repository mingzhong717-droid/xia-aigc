"use client";

import { useState } from "react";

const HOT_TAGS = ["ChatGPT", "AI绘画", "写作助手", "PPT", "视频生成", "免费", "国产AI", "编程"];

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenTraffic: (type: "wechat" | "douyin" | "xiaohongshu") => void;
}

export default function HeroSection({ searchQuery, onSearchChange, onOpenTraffic }: HeroSectionProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative max-h-[420px] mb-8 sm:mb-10 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
        {/* Left: Content */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
            发现最好用的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">AI 工具</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-5 lg:mb-6">
            585+ 精选AI工具，帮你轻松找到最适合的人工智能助手
          </p>

          {/* Big Search Box */}
          <div className={`relative w-full max-w-[900px] transition-shadow duration-300 ${isFocused ? "shadow-lg shadow-indigo-500/10" : ""}`}>
            <input
              type="text"
              placeholder="搜索 AI 工具名称、功能、标签..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full h-[52px] sm:h-[56px] pl-12 pr-28 rounded-2xl border-2 border-zinc-200 bg-white text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-zinc-400">
              🔍
            </span>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20">
              搜索
            </button>
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-24 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Hot Tags */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
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

        {/* Right: Gradient Visual */}
        <div className="hidden lg:flex w-[320px] xl:w-[380px] h-full items-center justify-center p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            {/* Decorative elements */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl shadow-xl shadow-indigo-500/30 rotate-3 hover:rotate-0 transition-transform">
              🤖
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-lg -rotate-6">
                ✍️
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-xl shadow-lg rotate-6">
                🎨
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-xl shadow-lg -rotate-3">
                🎬
              </div>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center mt-2">
              AI 赋能每一个人
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
