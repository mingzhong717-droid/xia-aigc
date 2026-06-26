"use client";

import { useState, useRef, useMemo, memo } from "react";
import { tools, categories } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { useFavorites } from "@/hooks/useFavorites";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const MemoToolCard = memo(ToolCard);

interface ToolGridSectionProps {
  searchQuery: string;
  activeCategory: string;
  onCategoryChange: (catId: string) => void;
}

export default function ToolGridSection({ searchQuery, activeCategory, onCategoryChange }: ToolGridSectionProps) {
  const [filterFree, setFilterFree] = useState<boolean | null>(null);
  const [filterChinese, setFilterChinese] = useState<boolean | null>(null);
  const [filterNoVPN, setFilterNoVPN] = useState<boolean | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { favorites } = useFavorites();
  const gridRef = useRef<HTMLDivElement>(null);

  const activeFiltersCount = [filterFree, filterChinese, filterNoVPN].filter(
    (v) => v !== null
  ).length;

  const clearFilters = () => {
    setFilterFree(null);
    setFilterChinese(null);
    setFilterNoVPN(null);
  };

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      let matchesCategory: boolean;
      if (activeCategory === "all") {
        matchesCategory = true;
      } else if (activeCategory === "favorites") {
        matchesCategory = favorites.includes(tool.id);
      } else {
        matchesCategory = tool.category === activeCategory;
      }
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesFree =
        filterFree === null || tool.isFree === filterFree;
      const matchesChinese =
        filterChinese === null || tool.hasChinese === filterChinese;
      const matchesVPN =
        filterNoVPN === null || tool.needVPN === !filterNoVPN;
      return matchesCategory && matchesSearch && matchesFree && matchesChinese && matchesVPN;
    });
  }, [activeCategory, searchQuery, favorites, filterFree, filterChinese, filterNoVPN]);

  // Use document-level scroll for infinite scroll
  const scrollRef = useRef<HTMLElement | null>(null);
  // We'll use a simple approach - show all filtered since parent handles scroll
  const { visibleItems, hasMore } = useInfiniteScroll(filteredTools, scrollRef, {
    pageSize: 24,
    threshold: 400,
  });

  // Since we're inside a full-page layout now, show all items directly (parent scrolls)
  const displayTools = filteredTools.slice(0, visibleItems.length || 24);

  const toolCounts = categories.reduce((acc, cat) => {
    acc[cat.id] = tools.filter((t) => t.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>);

  // When collapsed, only show 6 tools as preview
  const isUserSearching = searchQuery !== "" || activeCategory !== "all";
  const shouldExpand = isExpanded || isUserSearching;
  const previewTools = filteredTools.slice(0, 6);

  return (
    <section ref={gridRef}>
      {/* Section Header + Filters */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">📂</span>
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            全部工具
          </h2>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 ml-2">
            共 {filteredTools.length} 个
          </span>
        </div>
        <div className="flex items-center gap-2">
          {shouldExpand && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                showFilters || activeFiltersCount > 0
                  ? "bg-indigo-50 text-indigo-600 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-700"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              筛选
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          )}
          {!shouldExpand && (
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50 dark:border-indigo-700 transition-all"
            >
              展开全部 →
            </button>
          )}
        </div>
      </div>

      {/* Category pills - only when expanded */}
      {shouldExpand && (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          <button
            onClick={() => onCategoryChange("all")}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            全部 {Object.values(toolCounts).reduce((a, b) => a + b, 0)}
          </button>
          <button
            onClick={() => onCategoryChange("favorites")}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === "favorites"
                ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            ⭐ 收藏 {favorites.length}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Filter Panel - only when expanded */}
      {shouldExpand && showFilters && (
        <div className="mb-4 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">高级筛选</span>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
              >
                清除筛选
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterFree(filterFree === true ? null : true)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                filterFree === true
                  ? "bg-green-100 text-green-700 border border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700"
                  : "bg-zinc-100 text-zinc-600 border border-transparent hover:bg-green-50 hover:text-green-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              ✅ 免费
            </button>
            <button
              onClick={() => setFilterFree(filterFree === false ? null : false)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                filterFree === false
                  ? "bg-amber-100 text-amber-700 border border-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-700"
                  : "bg-zinc-100 text-zinc-600 border border-transparent hover:bg-amber-50 hover:text-amber-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              💰 付费
            </button>
            <span className="w-px h-6 bg-zinc-200 dark:bg-zinc-700 self-center mx-1" />
            <button
              onClick={() => setFilterChinese(filterChinese === true ? null : true)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                filterChinese === true
                  ? "bg-blue-100 text-blue-700 border border-blue-300 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700"
                  : "bg-zinc-100 text-zinc-600 border border-transparent hover:bg-blue-50 hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              🇨🇳 支持中文
            </button>
            <span className="w-px h-6 bg-zinc-200 dark:bg-zinc-700 self-center mx-1" />
            <button
              onClick={() => setFilterNoVPN(filterNoVPN === true ? null : true)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                filterNoVPN === true
                  ? "bg-purple-100 text-purple-700 border border-purple-300 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-700"
                  : "bg-zinc-100 text-zinc-600 border border-transparent hover:bg-purple-50 hover:text-purple-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              🌐 无需翻墙
            </button>
          </div>
        </div>
      )}

      {/* Tool Grid */}
      {filteredTools.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(shouldExpand ? displayTools : previewTools).map((tool, index) => (
              <MemoToolCard
                key={`${tool.id}-${index}`}
                tool={tool}
                index={index}
                searchQuery={searchQuery}
              />
            ))}
          </div>

          {/* Collapsed state: show expand button */}
          {!shouldExpand && filteredTools.length > 6 && (
            <div className="flex justify-center pt-6 pb-2">
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-100 text-zinc-700 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-all text-sm font-medium border border-zinc-200 dark:border-zinc-700 hover:border-indigo-200 dark:hover:border-indigo-700"
              >
                展开全部 {filteredTools.length} 个工具 ↓
              </button>
            </div>
          )}

          {/* Expanded state: infinite scroll loading */}
          {shouldExpand && hasMore && (
            <div className="flex justify-center py-8">
              <div className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>加载更多...</span>
              </div>
            </div>
          )}

          {shouldExpand && !hasMore && filteredTools.length > 24 && (
            <div className="flex justify-center py-8">
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                — 已展示全部 {filteredTools.length} 个工具 —
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-zinc-500 dark:text-zinc-400 mb-2">
            没有找到匹配的工具
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-6">
            试试其他关键词，或者看看这些热门工具：
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["ChatGPT", "Kimi", "Midjourney", "DeepSeek", "Cursor", "豆包"].map((name) => (
              <button
                key={name}
                onClick={() => onCategoryChange("all")}
                className="text-sm px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/40 transition-colors border border-indigo-200 dark:border-indigo-800/50"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
