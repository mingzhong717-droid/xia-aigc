"use client";

import { useEffect, useRef, useState } from "react";
import { news } from "@/data/news";

export default function NewsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const scrollSpeed = 0.5; // px per frame

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;
        // Reset to start when scrolled halfway (seamless loop)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Double the news items for seamless loop
  const doubledNews = [...news, ...news];

  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <span>📡</span> AI 快讯
        </h2>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          自动滚动 · 悬停暂停
        </span>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="overflow-x-hidden"
      >
        <div className="flex gap-3 w-max">
          {doubledNews.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-72 sm:w-80 shrink-0 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-2">
                <span className="text-xs mt-0.5 px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 shrink-0">
                  {item.category === "product"
                    ? "新品"
                    : item.category === "update"
                    ? "更新"
                    : item.category === "industry"
                    ? "动态"
                    : "教程"}
                </span>
                <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2">
                {item.summary}
              </p>
              <div className="flex items-center justify-between mt-2 text-[10px] text-zinc-400 dark:text-zinc-500">
                <span>来源：{item.source}</span>
                <span>{item.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
