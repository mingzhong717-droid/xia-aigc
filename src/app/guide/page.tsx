import { guideItems } from "@/data/guide";
import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新手指南 - AI小白入门必看",
  description:
    "AI工具新手入门指南，解答小白最常问的问题：第一个AI工具用哪个、怎么跟AI说话、有没有免费工具、不会翻墙怎么办等。",
  keywords: "AI入门,AI新手,AI教程,AI工具怎么用,AI免费,不用翻墙AI",
  alternates: {
    canonical: "https://aigc778.top/guide/",
  },
};

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link
            href="/"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">
            新手指南
          </span>
        </nav>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            🚀 AI 新手入门指南
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            零基础也能轻松上手，6个问题带你入门AI
          </p>
        </div>

        {/* Guide Items */}
        <div className="space-y-6">
          {guideItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                        Q{index + 1}
                      </span>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {item.question}
                      </h2>
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line text-sm">
                      {item.answer}
                    </div>

                    {/* Related Tools */}
                    {item.relatedTools && item.relatedTools.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-2">
                          推荐工具：
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.relatedTools.map((toolId) => {
                            const tool = tools.find((t) => t.id === toolId);
                            if (!tool) return null;
                            return (
                              <Link
                                key={toolId}
                                href={`/tool/${toolId}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-indigo-50 text-zinc-700 hover:text-indigo-700 dark:bg-zinc-800 dark:hover:bg-indigo-900/20 dark:text-zinc-300 dark:hover:text-indigo-400 text-xs font-medium transition-colors"
                              >
                                <span>{tool.icon}</span>
                                <span>{tool.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-2xl border border-indigo-200/60 dark:border-indigo-800/30 p-8">
            <p className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
              准备好开始了吗？
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              去首页挑一个工具试试吧，都是精选过的好用工具
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                浏览全部工具
              </Link>
              <Link
                href="/quiz"
                className="px-6 py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700 shadow-sm"
              >
                测测适合我的AI工具
              </Link>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-8 text-center">
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
