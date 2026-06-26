"use client";

import { useState } from "react";
import { tools } from "@/data/tools";
import { recommendTags } from "@/data/editorial";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

// 颜色映射
const colorMap: Record<string, { bg: string; text: string; activeBg: string; activeText: string; border: string }> = {
  amber: { bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-400", activeBg: "bg-amber-500", activeText: "text-white", border: "border-amber-200 dark:border-amber-700" },
  rose: { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-400", activeBg: "bg-rose-500", activeText: "text-white", border: "border-rose-200 dark:border-rose-700" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-400", activeBg: "bg-emerald-500", activeText: "text-white", border: "border-emerald-200 dark:border-emerald-700" },
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-400", activeBg: "bg-blue-500", activeText: "text-white", border: "border-blue-200 dark:border-blue-700" },
  violet: { bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-400", activeBg: "bg-violet-500", activeText: "text-white", border: "border-violet-200 dark:border-violet-700" },
};

// 用户视角的工具描述（替代官方介绍）
const userDescriptions: Record<string, string> = {
  chatgpt: "什么都能问，回答准确率最高，用一次就离不开",
  kimi: "200万字文档丢进去直接总结，学生写论文神器",
  cursor: "聊天就能写代码，效率翻倍不是吹的",
  deepseek: "数学推理碾压级别，关键还完全免费",
  midjourney: "一句话出商用级插画，审美吊打一切",
  coze: "不懂代码也能做AI机器人，发到抖音就能用",
  "notion-ai": "写到一半卡住了让AI续写，简直是写作搭子",
  yijian: "小红书文案、公众号标题，1分钟搞定10条",
  "copy-ai": "英文营销文案生成器，做跨境电商必备",
  jasper: "团队批量出内容用它，SEO文章质量很稳",
  doubao: "语音聊天最自然的AI，像跟真人对话",
  tongyi: "阿里出品接入钉钉，职场办公直接用",
  wenxin: "百度搜索加AI回答，中文知识库最全",
  jimeng: "做短视频素材最快，跟剪映无缝衔接",
  "stable-diffusion": "开源可本地部署，技术玩家的最爱",
  liblib: "国内SD社区老大，免费模型随便下",
  gemini: "Google出品多模态，看图理解能力超强",
};

export default function PopularSection() {
  const [activeTag, setActiveTag] = useState("editor-pick");

  const currentTag = recommendTags.find((t) => t.id === activeTag) || recommendTags[0];
  const tagTools = currentTag.toolIds
    .map((id) => tools.find((t) => t.id === id))
    .filter(Boolean);

  return (
    <section className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            热门工具
          </h2>
        </div>
        <Link
          href="/compare/"
          className="text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
        >
          对比工具 →
        </Link>
      </div>

      {/* Recommend tags (colorful) */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {recommendTags.map((tag) => {
          const colors = colorMap[tag.color] || colorMap.amber;
          const isActive = activeTag === tag.id;
          return (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                isActive
                  ? `${colors.activeBg} ${colors.activeText} border-transparent shadow-md`
                  : `${colors.bg} ${colors.text} ${colors.border} hover:shadow-sm`
              }`}
            >
              {tag.icon} {tag.label}
            </button>
          );
        })}
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tagTools.map((tool, index) => {
          if (!tool) return null;
          const desc = userDescriptions[tool.id] || tool.description;
          return (
            <Link
              key={tool.id}
              href={`/tool/${tool.id}`}
              className="group flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-md transition-all duration-200"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
                </div>
                {index < 3 && (
                  <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[9px] flex items-center justify-center font-bold shadow-sm">
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {tool.name}
                  </h3>
                  {/* Colored recommend tag */}
                  <span className={`shrink-0 text-[9px] px-1.5 py-0.5 rounded font-medium ${colorMap[currentTag.color]?.bg || ""} ${colorMap[currentTag.color]?.text || ""}`}>
                    {currentTag.icon} {currentTag.label}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                  {desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
