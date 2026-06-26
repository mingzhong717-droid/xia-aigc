"use client";

import { useState } from "react";
import { tutorials, tutorialCategories } from "@/data/tutorials";
import { tools } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const config = {
    beginner: { label: "入门", class: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-100 dark:border-green-800/30" },
    intermediate: { label: "进阶", class: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 border-amber-100 dark:border-amber-800/30" },
    advanced: { label: "高级", class: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border-red-100 dark:border-red-800/30" },
  };
  const c = config[difficulty as keyof typeof config] || config.beginner;
  return (
    <span className={`text-[10px] px-1.5 py-0.5 rounded-md border font-medium ${c.class}`}>
      {c.label}
    </span>
  );
}

export default function TutorialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedTutorial, setExpandedTutorial] = useState<string | null>(null);

  const filteredTutorials = activeCategory === "all"
    ? tutorials
    : tutorials.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">教程合集</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            🎓 AI 实战教程
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            手把手教你用AI解决实际问题，每篇都有可复制的提示词
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
            共 {tutorials.length} 篇教程 · 持续更新中
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tutorialCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-700"
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tutorial List */}
        <div className="space-y-4">
          {filteredTutorials.map((tutorial) => {
            const isExpanded = expandedTutorial === tutorial.id;

            return (
              <article
                key={tutorial.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Tutorial Header - Always visible */}
                <button
                  onClick={() => setExpandedTutorial(isExpanded ? null : tutorial.id)}
                  className="w-full text-left p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center text-2xl shrink-0">
                      {tutorial.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h2 className="font-bold text-zinc-900 dark:text-white text-base">
                          {tutorial.title}
                        </h2>
                        <DifficultyBadge difficulty={tutorial.difficulty} />
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                        <span>⏱️ {tutorial.duration}</span>
                        <span>📖 {tutorial.steps.length}个步骤</span>
                      </div>
                    </div>
                    <div className={`text-zinc-400 transition-transform duration-200 shrink-0 ${isExpanded ? "rotate-180" : ""}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 border-t border-zinc-100 dark:border-zinc-800">
                    {/* Steps */}
                    <div className="mt-5 space-y-5">
                      {tutorial.steps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="shrink-0">
                            <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center">
                              {i + 1}
                            </div>
                            {i < tutorial.steps.length - 1 && (
                              <div className="w-px h-full bg-indigo-100 dark:bg-indigo-900/30 mx-auto mt-1" />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-2">
                              {step.title}
                            </h4>
                            <div className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                              {step.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Related Tools */}
                    {tutorial.relatedTools && tutorial.relatedTools.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-2">
                          推荐工具：
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tutorial.relatedTools.map((toolId) => {
                            const tool = tools.find((t) => t.id === toolId);
                            if (!tool) return null;
                            return (
                              <Link
                                key={toolId}
                                href={`/tool/${toolId}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-indigo-50 text-zinc-700 hover:text-indigo-700 dark:bg-zinc-800 dark:hover:bg-indigo-900/20 dark:text-zinc-300 dark:hover:text-indigo-400 text-xs font-medium transition-colors"
                              >
                                <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
                                <span>{tool.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
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
