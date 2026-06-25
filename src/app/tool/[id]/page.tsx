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

  return {
    title: `${tool.name} - 小AIGC`,
    description: tool.description,
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

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-8">
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
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 mb-6">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{tool.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
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
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {tool.description}
              </p>
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

          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              <span>🚀</span>
              立即访问 {tool.name}
              <span className="text-sm opacity-60">↗</span>
            </a>
          </div>
        </div>

        {/* Similar Tools */}
        {similarTools.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              同类推荐
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {similarTools.map((similar) => (
                <Link
                  key={similar.id}
                  href={`/tool/${similar.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50 transition-all dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
                >
                  <span className="text-2xl">{similar.icon}</span>
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
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {similar.description}
                    </p>
                  </div>
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
