"use client";

import { useState } from "react";
import { roadmaps } from "@/data/roadmap";
import { tools } from "@/data/tools";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

export default function RoadmapPage() {
  const [activeRoadmap, setActiveRoadmap] = useState(roadmaps[0].id);

  const currentRoadmap = roadmaps.find((r) => r.id === activeRoadmap)!;

  const getToolById = (id: string) => tools.find((t) => t.id === id);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">学习路线</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            🗺️ AI 学习路线图
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            根据你的身份选择学习路线，从零开始系统掌握AI工具
          </p>
        </div>

        {/* Role selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {roadmaps.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRoadmap(r.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeRoadmap === r.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-indigo-300 hover:text-indigo-600 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {r.icon} {r.title}
            </button>
          ))}
        </div>

        {/* Roadmap info */}
        <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200/60 dark:border-indigo-800/30">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{currentRoadmap.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                {currentRoadmap.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                适合：{currentRoadmap.audience}
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 ml-12">
            {currentRoadmap.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full" />

          <div className="space-y-8">
            {currentRoadmap.stages.map((stage, index) => (
              <div key={stage.stage} className="relative flex gap-5">
                {/* Stage circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
                    {stage.stage}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 pb-2">
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {stage.title}
                      </h3>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 font-medium">
                        ⏱️ {stage.duration}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                      {stage.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {stage.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Recommended tools */}
                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-2">推荐工具：</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.toolIds.map((toolId) => {
                          const tool = getToolById(toolId);
                          if (!tool) return null;
                          return (
                            <Link
                              key={tool.id}
                              href={`/tool/${tool.id}/`}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                            >
                              <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="sm" />
                              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                {tool.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Arrow connecting to next */}
                  {index < currentRoadmap.stages.length - 1 && (
                    <div className="flex justify-center mt-2 text-zinc-300 dark:text-zinc-600">
                      ↓
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            准备好开始学习了？从第一步开始吧！
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/guide/"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
            >
              🚀 新手入门教程
            </Link>
            <Link
              href="/solutions/"
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
            >
              💡 查看使用场景
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
