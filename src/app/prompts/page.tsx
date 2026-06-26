"use client";

import { useState } from "react";
import { prompts, promptCategories } from "@/data/prompts";
import Link from "next/link";

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? prompts
      : prompts.filter((p) => p.category === activeCategory);

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link
            href="/"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">
            Prompt 模板库
          </span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            📋 AI Prompt 模板库
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            不知道怎么跟AI说话？直接复制这些模板，一键搞定
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-zinc-600 border border-zinc-200 hover:border-indigo-300 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
            }`}
          >
            全部 {prompts.length}
          </button>
          {promptCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-indigo-300 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Prompts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-colors"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
                    {prompt.title}
                  </h3>
                  <button
                    onClick={() => handleCopy(prompt.id, prompt.content)}
                    className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      copiedId === prompt.id
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/40"
                    }`}
                  >
                    {copiedId === prompt.id ? "已复制 ✓" : "复制"}
                  </button>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                  {prompt.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {prompt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable content preview */}
                <div
                  className={`relative ${
                    expandedId === prompt.id ? "" : "max-h-24 overflow-hidden"
                  }`}
                >
                  <pre className="text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-3 whitespace-pre-wrap font-sans leading-relaxed">
                    {prompt.content}
                  </pre>
                  {expandedId !== prompt.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent" />
                  )}
                </div>

                <button
                  onClick={() =>
                    setExpandedId(expandedId === prompt.id ? null : prompt.id)
                  }
                  className="mt-2 text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {expandedId === prompt.id ? "收起" : "展开全文 ↓"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <span>←</span> 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
