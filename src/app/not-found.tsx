import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面未找到 | 人人AI",
  description: "抱歉，你访问的页面不存在。回到人人AI首页，发现更多AI工具。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Icon */}
        <div className="mb-6">
          <span className="text-8xl">🤖</span>
        </div>

        {/* 404 Code */}
        <h1 className="text-6xl font-bold text-zinc-200 dark:text-zinc-800 mb-2 select-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
          页面未找到
        </h2>

        {/* Description */}
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          抱歉，你访问的页面不存在或已被移除。
          <br />
          回到首页继续探索AI工具吧！
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            回到首页
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            搜索工具
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            人人AI — 让每个人都能轻松用上AI
          </p>
        </div>
      </div>
    </div>
  );
}
