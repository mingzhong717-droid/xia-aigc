"use client";

import { useState } from "react";
import { changelog, changelogTypes } from "@/data/changelog";
import { tools } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

export default function ChangelogPageClient() {
  const [activeType, setActiveType] = useState("all");

  const filtered =
    activeType === "all"
      ? changelog
      : changelog.filter((c) => c.type === activeType);

  const getTypeStyle = (type: string) => {
    const found = changelogTypes.find((t) => t.id === type);
    return found?.color || "";
  };

  const getTypeLabel = (type: string) => {
    const found = changelogTypes.find((t) => t.id === type);
    return found?.name || type;
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const today = new Date();
    const diff = Math.floor(
      (today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diff === 0) return "今天";
    if (diff === 1) return "昨天";
    if (diff < 7) return `${diff}天前`;
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">更新日志</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            🔔 工具更新日志
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            追踪各大AI工具的最新更新、新功能和重要变化
          </p>
        </div>

        {/* Type filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {changelogTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeType === type.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-indigo-300 hover:text-indigo-600 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Changelog timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full" />

          <div className="space-y-4">
            {filtered.map((entry) => {
              const tool = tools.find((t) => t.id === entry.toolId);

              return (
                <div key={entry.id} className="relative flex gap-4">
                  {/* Timeline dot */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm border-2 border-white dark:border-zinc-950 ${
                        entry.type === "major"
                          ? "bg-gradient-to-br from-red-400 to-pink-500"
                          : entry.type === "feature"
                          ? "bg-gradient-to-br from-green-400 to-emerald-500"
                          : "bg-gradient-to-br from-blue-400 to-indigo-500"
                      }`}
                    >
                      {tool ? (
                        <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
                      ) : (
                        <span className="text-white text-sm">🔄</span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getTypeStyle(entry.type)}`}>
                        {getTypeLabel(entry.type)}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {formatDate(entry.date)} · {entry.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                      {entry.description}
                    </p>
                    {tool && (
                      <Link
                        href={`/tool/${tool.id}/`}
                        className="inline-flex items-center gap-1.5 text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                      >
                        查看 {tool.name} 详情 →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">📭</p>
            <p className="text-zinc-500 dark:text-zinc-400">暂无该类型的更新记录</p>
          </div>
        )}

        {/* Subscribe CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200/60 dark:border-indigo-800/30 text-center">
          <p className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
            🔔 不想错过工具更新？
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            关注公众号获取第一手AI工具更新推送
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
