"use client";

interface SceneEntry {
  icon: string;
  label: string;
  searchKeyword: string;
  color: string;
}

const SCENES: SceneEntry[] = [
  { icon: "📕", label: "写小红书", searchKeyword: "小红书", color: "from-pink-500/10 to-rose-500/10 dark:from-pink-500/5 dark:to-rose-500/5 hover:from-pink-500/20 hover:to-rose-500/20" },
  { icon: "🎬", label: "做短视频", searchKeyword: "视频生成", color: "from-purple-500/10 to-violet-500/10 dark:from-purple-500/5 dark:to-violet-500/5 hover:from-purple-500/20 hover:to-violet-500/20" },
  { icon: "💻", label: "写代码", searchKeyword: "编程", color: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 hover:from-blue-500/20 hover:to-cyan-500/20" },
  { icon: "🌐", label: "翻译", searchKeyword: "翻译", color: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 hover:from-emerald-500/20 hover:to-teal-500/20" },
  { icon: "📊", label: "做PPT", searchKeyword: "PPT", color: "from-orange-500/10 to-amber-500/10 dark:from-orange-500/5 dark:to-amber-500/5 hover:from-orange-500/20 hover:to-amber-500/20" },
  { icon: "📝", label: "写文章", searchKeyword: "写作", color: "from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/5 dark:to-blue-500/5 hover:from-indigo-500/20 hover:to-blue-500/20" },
  { icon: "🎨", label: "AI绘画", searchKeyword: "AI绘画", color: "from-fuchsia-500/10 to-pink-500/10 dark:from-fuchsia-500/5 dark:to-pink-500/5 hover:from-fuchsia-500/20 hover:to-pink-500/20" },
  { icon: "🗣️", label: "学英语", searchKeyword: "英语", color: "from-sky-500/10 to-blue-500/10 dark:from-sky-500/5 dark:to-blue-500/5 hover:from-sky-500/20 hover:to-blue-500/20" },
];

interface SceneEntriesProps {
  onSearch: (query: string) => void;
}

export default function SceneEntries({ onSearch }: SceneEntriesProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-base font-semibold text-zinc-700 dark:text-zinc-300">🎯 我想用 AI 来...</h2>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {SCENES.map((scene) => (
          <button
            key={scene.label}
            onClick={() => onSearch(scene.searchKeyword)}
            className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-gradient-to-br ${scene.color} border border-zinc-200/50 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:scale-105 active:scale-95 group`}
          >
            <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">{scene.icon}</span>
            <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">{scene.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
