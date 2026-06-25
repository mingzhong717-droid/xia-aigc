"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";

interface UseInfiniteScrollOptions {
  pageSize?: number;
  threshold?: number;
}

export function useInfiniteScroll<T>(
  items: T[],
  scrollContainer: React.RefObject<HTMLElement | null>,
  options: UseInfiniteScrollOptions = {}
) {
  const { pageSize = 24, threshold = 400 } = options;
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const loadingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [items, pageSize]);

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    if (visibleCount >= items.length) return;
    loadingRef.current = true;
    setVisibleCount((prev) => Math.min(prev + pageSize, items.length));
    setTimeout(() => {
      loadingRef.current = false;
    }, 100);
  }, [visibleCount, items.length, pageSize]);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollHeight - scrollTop - clientHeight < threshold) {
          loadMore();
        }
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollContainer, loadMore, threshold]);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const hasMore = visibleCount < items.length;

  return { visibleItems, hasMore, loadMore, visibleCount };
}
