"use client";

import { reviews } from "@/data/reviews";
import { tools } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-amber-400" : "text-zinc-200 dark:text-zinc-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1.5 text-sm font-bold text-zinc-700 dark:text-zinc-300">{rating}/5</span>
    </div>
  );
}

export default function ReviewsPageClient() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">工具评测</span>
        </nav>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            📝 AI 工具深度评测
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            编辑亲测，帮你避坑选出最适合的AI工具
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
            共 {reviews.length} 篇评测 · 持续更新中
          </p>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => {
            const tool = tools.find((t) => t.id === review.toolId);
            if (!tool) return null;

            return (
              <article
                key={review.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0">
                      <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="lg" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                        {review.title}
                      </h2>
                      <div className="flex items-center gap-3 flex-wrap">
                        <StarRating rating={review.rating} />
                        <span className="text-xs text-zinc-400">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700/50">
                    {review.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-green-50/50 dark:bg-green-900/10 rounded-xl p-4 border border-green-100 dark:border-green-800/30">
                      <h4 className="text-xs font-bold text-green-700 dark:text-green-400 mb-2">✅ 优点</h4>
                      <ul className="space-y-1.5">
                        {review.pros.map((pro, i) => (
                          <li key={i} className="text-xs text-green-800 dark:text-green-300 flex items-start gap-1.5">
                            <span className="text-green-500 mt-0.5 shrink-0">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50/50 dark:bg-red-900/10 rounded-xl p-4 border border-red-100 dark:border-red-800/30">
                      <h4 className="text-xs font-bold text-red-700 dark:text-red-400 mb-2">⚠️ 不足</h4>
                      <ul className="space-y-1.5">
                        {review.cons.map((con, i) => (
                          <li key={i} className="text-xs text-red-800 dark:text-red-300 flex items-start gap-1.5">
                            <span className="text-red-500 mt-0.5 shrink-0">-</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">🎯 最适合：</span>
                    <span className="text-xs text-zinc-600 dark:text-zinc-300 ml-1">{review.bestFor}</span>
                  </div>

                  <div className="bg-indigo-50/50 dark:bg-indigo-900/10 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800/30">
                    <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-1">💬 编辑点评</h4>
                    <p className="text-xs text-indigo-800 dark:text-indigo-300 leading-relaxed">
                      {review.verdict}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={`/tool/${review.toolId}`}
                      className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                    >
                      查看工具详情 →
                    </Link>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
                    >
                      立即体验
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

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
