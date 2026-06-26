import { guideSteps, guideFAQs, learningPaths } from "@/data/guide";
import { tools } from "@/data/tools";
import Link from "next/link";
import type { Metadata } from "next";
import ToolLogo from "@/components/ToolLogo";

export const metadata: Metadata = {
  title: "新手入门教程 - 6步学会用AI",
  description:
    "AI工具零基础入门教程，6个步骤从注册到精通。不需要技术背景，不需要翻墙，手把手教你用AI提升效率。",
  keywords: "AI入门,AI新手教程,AI怎么用,AI工具教程,AI免费,不用翻墙AI,AI提示词",
  alternates: {
    canonical: "https://aigc778.top/guide/",
  },
};

export default function GuidePage() {
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
            新手入门
          </span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium mb-4 border border-green-200/60 dark:border-green-800/30">
            <span>🌱</span> 零基础友好 · 全程免费
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            6步学会用 AI
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            不需要懂技术，不需要翻墙，不需要花钱。跟着这6步走，10分钟入门AI。
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-1 mb-12">
          {guideSteps.map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              {i < guideSteps.length - 1 && (
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700" />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {guideSteps.map((step) => (
            <div
              key={step.id}
              id={step.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center text-3xl shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                        第{step.step}步
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {step.title}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line text-sm pl-0 sm:pl-[4.5rem]">
                  {step.content}
                </div>

                {/* Tips */}
                {step.tips && step.tips.length > 0 && (
                  <div className="mt-5 pl-0 sm:pl-[4.5rem]">
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border border-amber-200/60 dark:border-amber-800/30">
                      <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">
                        💡 小贴士
                      </p>
                      <ul className="space-y-1.5">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                            <span className="text-amber-500 mt-0.5">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Related Tools */}
                {step.relatedTools && step.relatedTools.length > 0 && (
                  <div className="mt-5 pl-0 sm:pl-[4.5rem] pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-2">
                      推荐工具：
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.relatedTools.map((toolId) => {
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
            </div>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-2">
            🎯 选择你的学习路径
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm mb-8">
            根据你的身份和需求，选择最适合的进阶方向
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{path.icon}</div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-1">
                  {path.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  {path.description}
                </p>
                <div className="space-y-2 mb-4">
                  {path.steps.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  {path.tools.map((toolId) => {
                    const tool = tools.find((t) => t.id === toolId);
                    if (!tool) return null;
                    return (
                      <Link
                        key={toolId}
                        href={`/tool/${toolId}`}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
                        <span>{tool.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-2">
            ❓ 常见问题
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm mb-8">
            新手最常问的5个问题
          </p>
          <div className="space-y-4">
            {guideFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5"
              >
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-2xl border border-indigo-200/60 dark:border-indigo-800/30 p-8">
            <p className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              🚀 准备好开始了吗？
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
              从第1步开始，10分钟后你就是AI用户了
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                去首页找工具
              </Link>
              <Link
                href="/quiz"
                className="px-6 py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700 shadow-sm"
              >
                测测适合我的AI
              </Link>
              <Link
                href="/prompts"
                className="px-6 py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700 shadow-sm"
              >
                看看提示词模板
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
