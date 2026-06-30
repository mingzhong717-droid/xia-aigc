"use client";

import { Tool } from "@/data/tools";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";
import ToolLogo from "@/components/ToolLogo";

interface ToolCardProps {
  tool: Tool;
  index?: number;
  searchQuery?: string;
}

function HighlightText({ text, query }: { text: string; query?: string }) {
  if (!query || query.trim() === "") {
    return <>{text}</>;
  }
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-amber-200/80 dark:bg-amber-500/30 text-inherit rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

import React from "react";

const ToolCard = React.memo(function ToolCard({ tool, searchQuery }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/tool/${tool.id}/`;
    const shareText = `${tool.name} - ${tool.description}`;
    if (navigator.share) {
      navigator.share({ title: tool.name, text: shareText, url: shareUrl });
    } else {
      navigator.clipboard.writeText(`${tool.name}: ${shareText}\n${shareUrl}`);
      alert("链接已复制到剪贴板！");
    }
  };

  return (
    <div className="group relative p-5 rounded-2xl border border-zinc-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-indigo-700/50">
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
        <button
          onClick={handleShare}
          className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors opacity-0 group-hover:opacity-100"
          title="分享"
        >
          <svg className="w-4 h-4 text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(tool.id);
          }}
          className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title={isFavorite(tool.id) ? "取消收藏" : "收藏"}
        >
        <svg
          className={`w-4 h-4 transition-colors ${isFavorite(tool.id) ? "text-amber-400 fill-amber-400" : "text-zinc-300 dark:text-zinc-600"}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill={isFavorite(tool.id) ? "currentColor" : "none"}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        </button>
      </div>
      <Link href={`/tool/${tool.id}`} className="block">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              <HighlightText text={tool.name} query={searchQuery} />
            </h3>
            {tool.hasChinese && (
              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-md bg-red-50 text-red-600 font-medium dark:bg-red-900/20 dark:text-red-400 border border-red-100 dark:border-red-800/30">
                中文
              </span>
            )}
            {tool.isFree && (
              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-md bg-green-50 text-green-600 font-medium dark:bg-green-900/20 dark:text-green-400 border border-green-100 dark:border-green-800/30">
                免费
              </span>
            )}
            {tool.needVPN && (
              <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-md bg-orange-50 text-orange-600 font-medium dark:bg-orange-900/20 dark:text-orange-400 border border-orange-100 dark:border-orange-800/30">
                需翻墙
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            <HighlightText text={tool.description} query={searchQuery} />
          </p>
          {/* Recommendation tag */}
          <div className="mt-2 mb-1">
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400 border border-indigo-100/60 dark:border-indigo-800/30">
              <span>💡</span>
              {tool.recommendation}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover arrow */}
      <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] text-zinc-400 dark:text-zinc-500">点击查看详情</span>
        <span className="text-indigo-500 text-sm">→</span>
      </div>
      </Link>
    </div>
  );
});

export default ToolCard;
