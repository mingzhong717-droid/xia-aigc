import type { Tool } from "@/data/tools";

/**
 * 按 id 去重，保留数组中第一次出现的记录（首条胜出）。
 *
 * 语义必须与详情页 `tools.find((t) => t.id === id)` 保持一致：
 * `find` 返回的永远是首条记录，因此展示层去重也必须保留首条，
 * 否则列表卡片与详情页内容会不一致。
 *
 * 该函数不修改入参，返回新数组。
 */
export function dedupeToolsById<T extends Pick<Tool, "id">>(list: readonly T[]): T[] {
  const seen = new Set<string>();
  const result: T[] = [];
  for (const item of list) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    result.push(item);
  }
  return result;
}
