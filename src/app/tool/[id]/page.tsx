import { tools, categories } from "@/data/tools";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const tool = tools.find((t) => t.id === id);
  if (!tool) return { title: "工具未找到" };

  const category = categories.find((c) => c.id === tool.category);

  return {
    title: `${tool.name} - ${tool.recommendation}`,
    description: `${tool.description}。${tool.recommendation}。${tool.isFree ? "免费使用" : "付费工具"}${tool.hasChinese ? "，支持中文" : ""}${tool.needVPN ? "，需要翻墙" : ""}。`,
    keywords: `${tool.name},${tool.tags.join(",")},${category?.name || "AI工具"},AI工具推荐,AI工具`,
    openGraph: {
      title: `${tool.name} - ${tool.recommendation} | 小AIGC`,
      description: tool.description,
      siteName: "小AIGC",
      locale: "zh_CN",
      type: "article",
      url: `https://aigc778.top/tool/${id}/`,
    },
    twitter: {
      card: "summary" as const,
      title: `${tool.name} - ${tool.recommendation}`,
      description: tool.description,
    },
    alternates: {
      canonical: `https://aigc778.top/tool/${id}/`,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { id } = await params;
  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    notFound();
  }

  const category = categories.find((c) => c.id === tool.category);
  const similarTools = tools
    .filter(
      (t) => t.category === tool.category && t.id !== tool.id
    )
    .slice(0, 6);

  // Find tools in related categories for "你可能还感兴趣"
  const relatedTools = tools
    .filter((t) => t.category !== tool.category && t.tags.some((tag) => tool.tags.includes(tag)))
    .slice(0, 4);

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "url": tool.url,
    "applicationCategory": category?.name || "AI工具",
    "offers": {
      "@type": "Offer",
      "price": tool.isFree ? "0" : "",
      "priceCurrency": "CNY",
    },
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          {category && (
            <>
              <Link
                href={`/?category=${category.id}`}
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-zinc-900 dark:text-white font-medium">
            {tool.name}
          </span>
        </nav>

        {/* Tool Header */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 mb-6">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-4xl sm:text-5xl shrink-0">
              {tool.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {tool.name}
                </h1>
                {tool.hasChinese && (
                  <span className="text-xs px-2 py-1 rounded-md bg-red-50 text-red-600 font-medium dark:bg-red-900/20 dark:text-red-400">
                    支持中文
                  </span>
                )}
                {tool.isFree && (
                  <span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-600 font-medium dark:bg-green-900/20 dark:text-green-400">
                    免费使用
                  </span>
                )}
                {tool.needVPN && (
                  <span className="text-xs px-2 py-1 rounded-md bg-orange-50 text-orange-600 font-medium dark:bg-orange-900/20 dark:text-orange-400">
                    需翻墙
                  </span>
                )}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {tool.description}
              </p>
              {/* Recommendation */}
              <div className="mt-3">
                <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/30">
                  <span>💡</span>
                  {tool.recommendation}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
            >
              <span>🚀</span>
              立即访问 {tool.name}
              <span className="text-sm opacity-60">↗</span>
            </a>
            {tool.needVPN && (
              <p className="text-xs text-orange-600 dark:text-orange-400">
                ⚠️ 该工具需要翻墙才能访问，请确保已开启VPN
              </p>
            )}
          </div>
        </div>

        {/* Tool Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 text-center">
            <p className="text-2xl mb-1">{tool.isFree ? "🆓" : "💰"}</p>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              {tool.isFree ? "免费可用" : "付费工具"}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {tool.isFree ? "无需付费即可使用" : "部分功能需要付费"}
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 text-center">
            <p className="text-2xl mb-1">{tool.hasChinese ? "🇨🇳" : "🌍"}</p>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              {tool.hasChinese ? "支持中文" : "仅外语"}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {tool.hasChinese ? "界面和输出支持中文" : "需要一定英文基础"}
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 text-center">
            <p className="text-2xl mb-1">{tool.needVPN ? "🔒" : "🌐"}</p>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              {tool.needVPN ? "需要翻墙" : "直接访问"}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {tool.needVPN ? "需要VPN才能正常使用" : "国内网络可直接访问"}
            </p>
          </div>
        </div>

        {/* Category info */}
        {category && (
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  分类：{category.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {category.description}
                </p>
              </div>
              <Link
                href={`/?category=${category.id}`}
                className="ml-auto text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
              >
                查看同类工具 →
              </Link>
            </div>
          </div>
        )}

        {/* Similar Tools */}
        {similarTools.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 mb-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              🔄 同类推荐
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {similarTools.map((similar) => (
                <Link
                  key={similar.id}
                  href={`/tool/${similar.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all dark:border-zinc-800 dark:hover:border-indigo-800/50 dark:hover:bg-indigo-900/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-xl shrink-0">
                    {similar.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-zinc-900 dark:text-white truncate">
                        {similar.name}
                      </span>
                      {similar.hasChinese && (
                        <span className="text-[10px] px-1 rounded bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                          中文
                        </span>
                      )}
                      {similar.isFree && (
                        <span className="text-[10px] px-1 rounded bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                          免费
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {similar.recommendation}
                    </p>
                  </div>
                  <span className="text-zinc-300 dark:text-zinc-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related by tags */}
        {relatedTools.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 mb-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              ✨ 你可能还感兴趣
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedTools.map((related) => (
                <Link
                  key={related.id}
                  href={`/tool/${related.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all dark:border-zinc-800 dark:hover:border-purple-800/50 dark:hover:bg-purple-900/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-xl shrink-0">
                    {related.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-zinc-900 dark:text-white truncate">
                        {related.name}
                      </span>
                      {related.hasChinese && (
                        <span className="text-[10px] px-1 rounded bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                          中文
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {related.recommendation}
                    </p>
                  </div>
                  <span className="text-zinc-300 dark:text-zinc-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <span>←</span> 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
