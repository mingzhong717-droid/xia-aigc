"use client";

import { useState, useMemo } from "react";
import { tools, categories } from "@/data/tools";
import { editorialPicks } from "@/data/editorial";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

const MAX_COMPARE = 3;

export default function ComparePageClient() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const selectedTools = useMemo(
    () => selectedIds.map((id) => tools.find((t) => t.id === id)).filter(Boolean),
    [selectedIds]
  );

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return tools
      .filter(
        (t) =>
          !selectedIds.includes(t.id) &&
          (t.name.toLowerCase().includes(q) ||
            t.tags.some((tag) => tag.toLowerCase().includes(q)))
      )
      .slice(0, 8);
  }, [searchQuery, selectedIds]);

  const addTool = (id: string) => {
    if (selectedIds.length >= MAX_COMPARE) return;
    setSelectedIds([...selectedIds, id]);
    setSearchQuery("");
    setShowPicker(false);
  };

  const removeTool = (id: string) => {
    setSelectedIds(selectedIds.filter((i) => i !== id));
  };

  const presets = [
    { label: "ChatGPT vs Claude vs DeepSeek", ids: ["chatgpt", "claude", "deepseek"] },
    { label: "Kimi vs 豆包 vs 通义千问", ids: ["kimi", "doubao", "tongyi"] },
    { label: "Midjourney vs Stable Diffusion vs 即梦", ids: ["midjourney", "stable-diffusion", "jimeng"] },
    { label: "Cursor vs GitHub Copilot vs Codeium", ids: ["cursor", "github-copilot", "codeium"] },
    { label: "ChatGPT vs Kimi vs DeepSeek", ids: ["chatgpt", "kimi", "deepseek"] },
  ];

  const applyPreset = (ids: string[]) => {
    const validIds = ids.filter((id) => tools.find((t) => t.id === id));
    setSelectedIds(validIds);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">工具对比</span>
        </nav>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            ⚖️ AI 工具对比
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            选择 2-3 个工具，一目了然地对比功能、价格和适用场景
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <span className="text-xs text-zinc-400 dark:text-zinc-500 self-center">热门对比：</span>
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset.ids)}
              className="text-xs px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-indigo-300 hover:text-indigo-600 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {selectedTools.map((tool) => (
              <div
                key={tool!.id}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                <ToolLogo url={tool!.url} icon={tool!.icon} name={tool!.name} logoUrl={tool!.logoUrl} size="sm" />
                <span className="text-sm font-medium text-zinc-900 dark:text-white">
                  {tool!.name}
                </span>
                <button
                  onClick={() => removeTool(tool!.id)}
                  className="w-5 h-5 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-xs"
                >
                  ✕
                </button>
              </div>
            ))}

            {selectedIds.length < MAX_COMPARE && (
              <div className="relative">
                <button
                  onClick={() => setShowPicker(!showPicker)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:border-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span className="text-lg">+</span>
                  <span className="text-sm">添加工具</span>
                </button>

                {showPicker && (
                  <div className="absolute top-full mt-2 left-0 w-72 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xl z-50 p-3">
                    <input
                      type="text"
                      placeholder="搜索工具名称..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
                    />
                    <div className="max-h-48 overflow-y-auto space-y-1">
                      {searchResults.length > 0 ? (
                        searchResults.map((tool) => (
                          <button
                            key={tool.id}
                            onClick={() => addTool(tool.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-left"
                          >
                            <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
                            <span className="text-sm text-zinc-900 dark:text-white">
                              {tool.name}
                            </span>
                            <span className="text-xs text-zinc-400 ml-auto">
                              {categories.find((c) => c.id === tool.category)?.name}
                            </span>
                          </button>
                        ))
                      ) : searchQuery ? (
                        <p className="text-xs text-zinc-400 text-center py-3">
                          没有找到匹配的工具
                        </p>
                      ) : (
                        <p className="text-xs text-zinc-400 text-center py-3">
                          输入工具名称开始搜索
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {selectedTools.length >= 2 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 w-36">
                    对比项
                  </th>
                  {selectedTools.map((tool) => (
                    <th key={tool!.id} className="p-4 text-center min-w-[180px]">
                      <div className="flex flex-col items-center gap-2">
                        <ToolLogo url={tool!.url} icon={tool!.icon} name={tool!.name} logoUrl={tool!.logoUrl} size="lg" />
                        <span className="font-bold text-zinc-900 dark:text-white">
                          {tool!.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr className="bg-white dark:bg-zinc-900/50">
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">简介</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-sm text-zinc-600 dark:text-zinc-300 text-center">
                      {tool!.description}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">分类</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-sm text-center">
                      <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-xs font-medium">
                        {categories.find((c) => c.id === tool!.category)?.name}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="bg-white dark:bg-zinc-900/50">
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">价格</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-center">
                      <span className={`text-sm font-medium ${tool!.isFree ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}>
                        {tool!.isFree ? "✅ 免费" : "💰 付费"}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">中文支持</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-center">
                      <span className={`text-sm ${tool!.hasChinese ? "text-green-600 dark:text-green-400" : "text-zinc-400"}`}>
                        {tool!.hasChinese ? "✅ 支持" : "❌ 不支持"}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="bg-white dark:bg-zinc-900/50">
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">网络要求</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-center">
                      <span className={`text-sm ${tool!.needVPN ? "text-amber-600 dark:text-amber-400" : "text-green-600 dark:text-green-400"}`}>
                        {tool!.needVPN ? "🔒 需翻墙" : "🌐 直接访问"}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">功能标签</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {tool!.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="bg-white dark:bg-zinc-900/50">
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">编辑评分</td>
                  {selectedTools.map((tool) => {
                    const ed = editorialPicks.find((e) => e.toolId === tool!.id);
                    return (
                      <td key={tool!.id} className="p-4 text-center">
                        {ed ? (
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{ed.score}</span>
                            <span className="text-xs text-zinc-400">/10</span>
                          </div>
                        ) : (
                          <span className="text-xs text-zinc-400">暂无评分</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">推荐理由</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-sm text-zinc-600 dark:text-zinc-300 text-center italic">
                      {tool!.recommendation}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">访问</td>
                  {selectedTools.map((tool) => (
                    <td key={tool!.id} className="p-4 text-center">
                      <a
                        href={tool!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                      >
                        访问官网 ↗
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <p className="text-4xl mb-4">⚖️</p>
            <p className="text-zinc-500 dark:text-zinc-400 mb-2">
              请至少选择 2 个工具开始对比
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              点击上方「添加工具」按钮，或选择热门对比方案
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
