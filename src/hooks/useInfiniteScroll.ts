"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseInfiniteScrollOptions {
  /** Number of items per page */
  pageSize?: number;
  /** Threshold in pixels before reaching the bottom to trigger load */
  threshold?: number;
}

export function useInfiniteScroll<T>(
  items: T[],
  scrollContainer: React.RefObject<HTMLElement | null>,
  options: UseInfiniteScrollOptions = {}
) {
  const { pageSize = 24, threshold = 300 } = options;
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const loadingRef = useRef(false);

  // Reset visible count when items change (category/search change)
  useEffect(() => {
    setVisibleCount(pageSize);
  }, [items, pageSize]);

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    if (visibleCount >= items.length) return;
    loadingRef.current = true;
    setVisibleCount((prev) => Math.min(prev + pageSize, items.length));
    // Small delay to prevent rapid fire
    setTimeout(() => {
      loadingRef.current = false;
    }, 100);
  }, [visibleCount, items.length, pageSize]);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollHeight - scrollTop - clientHeight < threshold) {
        loadMore();
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainer, loadMore, threshold]);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return { visibleItems, hasMore, loadMore, visibleCount };
}
