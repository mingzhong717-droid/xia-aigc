"use client";

import { useState } from "react";
import { news, newsCategories } from "@/data/news";
import Link from "next/link";

export default function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? news
      : news.filter((n) => n.category === activeCategory);

  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {} as Record<string, typeof news>);

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  const categoryLabel = (cat: string) => {
    switch (cat) {
      case "product":
        return { text: "新品发布", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" };
      case "update":
        return { text: "产品更新", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };
      case "industry":
        return { text: "行业动态", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" };
      case "tutorial":
        return { text: "教程资源", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" };
      default:
        return { text: "资讯", color: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400" };
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (dateStr === today.toISOString().slice(0, 10)) return "今天";
    if (dateStr === yesterday.toISOString().slice(0, 10)) return "昨天";

    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  const cleanSummary = (html: string) => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link
            href="/"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">
            AI 资讯
          </span>
        </nav>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            📡 AI 资讯动态
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            追踪AI行业最新动态，新品发布、产品更新、行业洞察一网打尽
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {newsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-indigo-300 hover:text-indigo-600 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {sortedDates.map((date) => (
            <div key={date}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/30" />
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {formatDate(date)}
                </h2>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {date}
                </span>
                <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
              </div>

              <div className="space-y-3 ml-6">
                {grouped[date].map((item) => {
                  const label = categoryLabel(item.category);
                  const summary = cleanSummary(item.summary);

                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-1">
                            {item.title}
                          </h3>
                          {summary && (
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-2">
                              {summary}
                            </p>
                          )}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-medium ${label.color}`}
                            >
                              {label.text}
                            </span>
                            <span className="text-xs text-zinc-400 dark:text-zinc-500">
                              来源：{item.source}
                            </span>
                          </div>
                        </div>
                        <span className="text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-400 transition-colors shrink-0 mt-1">
                          ↗
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">📭</p>
            <p className="text-zinc-500 dark:text-zinc-400">
              暂无该分类的资讯，稍后再来看看吧
            </p>
          </div>
        )}

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200/60 dark:border-indigo-800/30 text-center">
          <p className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
            💬 想第一时间获取AI资讯？
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            关注公众号，每天精选推送AI行业最新动态
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
