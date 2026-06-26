import { tools, categories } from "@/data/tools";
import { notFound } from "next/navigation";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

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
      title: `${tool.name} - ${tool.recommendation} | 人人AI`,
      description: tool.description,
      siteName: "人人AI",
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

  // Free alternatives (same category, free, not self)
  const freeAlternatives = !tool.isFree
    ? tools.filter((t) => t.category === tool.category && t.isFree && t.id !== tool.id).slice(0, 4)
    : [];

  // No-VPN alternatives (same category, no VPN needed, not self)
  const noVpnAlternatives = tool.needVPN
    ? tools.filter((t) => t.category === tool.category && !t.needVPN && t.id !== tool.id).slice(0, 4)
    : [];

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
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center shrink-0">
              <ToolLogo url={tool.url} icon={tool.icon} name={tool.name} logoUrl={tool.logoUrl} size="lg" />
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

        {/* Free Alternatives */}
        {freeAlternatives.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 mb-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
              🆓 免费替代方案
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              不想付费？试试这些免费的同类工具
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {freeAlternatives.map((alt) => (
                <Link
                  key={alt.id}
                  href={`/tool/${alt.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-green-100 hover:border-green-300 hover:bg-green-50/50 transition-all dark:border-zinc-800 dark:hover:border-green-800/50 dark:hover:bg-green-900/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-xl shrink-0">
                    {alt.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-sm text-zinc-900 dark:text-white truncate block">
                      {alt.name}
                    </span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {alt.recommendation}
                    </p>
                  </div>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 font-medium">
                    免费
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No-VPN Alternatives */}
        {noVpnAlternatives.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 mb-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
              🌐 无需翻墙的替代方案
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              不方便翻墙？这些同类工具可以直接访问
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {noVpnAlternatives.map((alt) => (
                <Link
                  key={alt.id}
                  href={`/tool/${alt.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 transition-all dark:border-zinc-800 dark:hover:border-blue-800/50 dark:hover:bg-blue-900/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-xl shrink-0">
                    {alt.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-sm text-zinc-900 dark:text-white truncate block">
                      {alt.name}
                    </span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {alt.recommendation}
                    </p>
                  </div>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-medium">
                    直连
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Usage Tips */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
            💡 使用小技巧
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3 p-3 rounded-xl bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30">
              <span className="text-amber-500 shrink-0 mt-0.5">💬</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                使用{tool.name}时，尽量用具体清晰的描述来表达你的需求，越详细效果越好。
              </p>
            </div>
            {tool.isFree && (
              <div className="flex gap-3 p-3 rounded-xl bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30">
                <span className="text-green-500 shrink-0 mt-0.5">💡</span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  虽然基础功能免费，但付费版本通常能解锁更多高级功能，可以先免费试用确认满足需求再升级。
                </p>
              </div>
            )}
            {!tool.hasChinese && (
              <div className="flex gap-3 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30">
                <span className="text-blue-500 shrink-0 mt-0.5">🌍</span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  该工具暂不支持中文，建议配合翻译工具使用。即使输入中文也可能得到英文回复。
                </p>
              </div>
            )}
            <div className="flex gap-3 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30">
              <span className="text-purple-500 shrink-0 mt-0.5">🔖</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                建议收藏本页面，方便下次快速找到。也可以在首页点击工具卡片的「⭐」图标进行收藏。
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
            ❓ 常见问题
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">
                {tool.name}是免费的吗？
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {tool.isFree
                  ? `${tool.name}提供免费版本供用户使用，部分高级功能可能需要升级到付费计划。`
                  : `${tool.name}是付费工具，通常提供试用期或免费额度。建议先试用后再决定是否购买。`}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">
                国内能直接访问吗？
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {tool.needVPN
                  ? `${tool.name}需要翻墙才能访问。如果你不方便翻墙，可以考虑同类的国内替代工具。`
                  : `${tool.name}可以在国内网络环境下直接访问，无需翻墙。`}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">
                支持中文吗？
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {tool.hasChinese
                  ? `${tool.name}支持中文界面和中文输入输出，对中文用户非常友好。`
                  : `${tool.name}目前主要支持英文。你可以尝试用英文提问，或者配合翻译工具使用。`}
              </p>
            </div>
          </div>
        </div>

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

        {/* Compare CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-2xl border border-indigo-200/60 dark:border-indigo-800/30 p-6 mb-6 text-center">
          <p className="text-sm font-medium text-zinc-900 dark:text-white mb-2">
            ⚖️ 不确定选哪个？
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
            把 {tool.name} 和其他工具放在一起对比看看
          </p>
          <Link
            href="/compare/"
            className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            去对比 →
          </Link>
        </div>

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
