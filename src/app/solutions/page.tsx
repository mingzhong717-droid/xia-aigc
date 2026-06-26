"use client";

import { useState } from "react";
import { solutions } from "@/data/solutions";
import { tools } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

export default function SolutionsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(solutions[0]?.id || null);

  const getToolByIds = (ids: string[]) =>
    ids.map((id) => tools.find((t) => t.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">使用场景</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            💡 AI 使用场景
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            不知道AI能帮你做什么？按你的需求找到完整的工具组合方案
          </p>
        </div>

        {/* Solutions list */}
        <div className="space-y-4">
          {solutions.map((solution) => {
            const isExpanded = expandedId === solution.id;

            return (
              <div
                key={solution.id}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-shadow hover:shadow-md"
              >
                {/* Solution header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : solution.id)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <span className="text-3xl">{solution.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {solution.title}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {solution.description}
                    </p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                      适合：{solution.audience}
                    </span>
                  </div>
                  <span
                    className={`text-zinc-400 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* Steps */}
                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="relative mt-4">
                      {/* Timeline line */}
                      <div className="absolute left-[18px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full" />

                      <div className="space-y-5">
                        {solution.steps.map((step) => {
                          const stepTools = getToolByIds(step.toolIds);

                          return (
                            <div key={step.step} className="relative flex gap-4">
                              {/* Step number */}
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-indigo-500/20 shrink-0 z-10">
                                {step.step}
                              </div>

                              <div className="flex-1 pt-1">
                                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
                                  {step.title}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 mb-2">
                                  {step.description}
                                </p>

                                {/* Recommended tools */}
                                <div className="flex flex-wrap gap-2">
                                  {stepTools.map((tool) => (
                                    <Link
                                      key={tool!.id}
                                      href={`/tool/${tool!.id}/`}
                                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                                    >
                                      <ToolLogo url={tool!.url} icon={tool!.icon} name={tool!.name} logoUrl={tool!.logoUrl} size="sm" />
                                      <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                        {tool!.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200/60 dark:border-indigo-800/30 text-center">
          <p className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
            🎯 没找到你的场景？
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            回到首页用搜索和筛选找到最适合你的AI工具
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
          >
            浏览全部工具
          </Link>
        </div>
      </div>
    </div>
  );
}
