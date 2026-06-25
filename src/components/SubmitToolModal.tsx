"use client";

import { useState } from "react";
import { categories } from "@/data/tools";

interface SubmitToolModalProps {
  onClose: () => void;
}

const GITHUB_REPO = "mingzhong717-droid/xia-aigc";

export default function SubmitToolModal({ onClose }: SubmitToolModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    category: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate GitHub Issue URL with pre-filled content
    const categoryName = categories.find((c) => c.id === formData.category)?.name || "未分类";
    const issueTitle = `[工具推荐] ${formData.name}`;
    const issueBody = `## 工具信息

- **工具名称**：${formData.name}
- **工具网址**：${formData.url}
- **一句话介绍**：${formData.description || "暂无"}
- **建议分类**：${categoryName}

---
*由小AIGC网站工具推荐功能提交*`;

    const issueUrl = `https://github.com/${GITHUB_REPO}/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}&labels=${encodeURIComponent("tool-submission")}`;

    // Open GitHub Issue in new tab
    window.open(issueUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              <h3 className="text-xl font-bold">推荐工具</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="mt-2 text-white/80 text-sm">
            发现了好用的AI工具？推荐给大家！
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-4xl mb-3">🎉</p>
              <p className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
                提交成功！
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                感谢你的推荐！已在 GitHub 上创建 Issue。
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-6">
                我们会尽快审核并收录该工具。
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                关闭
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  工具名称 *
                </label>
                <input
                  type="text"
                  required
                  placeholder="如：ChatGPT"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  工具网址 *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  一句话介绍
                </label>
                <input
                  type="text"
                  placeholder="这个工具适合做什么？"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  分类
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">请选择分类</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                提交推荐
              </button>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
                提交后将跳转到 GitHub 创建 Issue，我们会尽快审核
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
