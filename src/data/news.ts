export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  url: string;
  date: string;
  category: "product" | "update" | "industry" | "tutorial";
}

// 快讯数据 - 由 scripts/fetch-news.mjs 自动更新
// 最后更新时间: 2026-11-21 05:31:51 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "这群在鸿蒙写应用的年轻人，只想做点「用得上」的",
    summary: "上周末，今年正式被列入「全国普通高校学科竞赛排行榜」的2026鸿蒙高校创新赛在南京大学迎来全国总决赛颁奖典礼。华为董事、终端BGCEO何刚出席现场致辞并为获奖选手颁奖。他在现场表示，HarmonyOS ...<a href=&#34;https://sspai.com/post/119291&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119291",
    date: "2026-11-21",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "昇腾算力训出了双榜SOTA的具身世界模型，华为云这次想把整套底座开放出来",
    summary: "国产算力的成熟，把具身竞争维度从「芯片有多强」，拉入了一个比拼训练效率、数据规模、部署成本和场景落地速度的多维战场。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511610.html",
    date: "2026-11-20",
    category: "product",
  },
  {
    id: "news-003",
    title: "新浪新闻·2026探索大会在京举行 虚实交融共探智能时代共生新图景",
    summary: "11月19日，由微博与新浪新闻联合主办的“新浪新闻·2026探索大会”在北京举办。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511603.html",
    date: "2026-11-20",
    category: "product",
  },
  {
    id: "news-004",
    title: "双系统决策+双层自进化，Agnes让Agent效率最高提速14倍，成本骤降至1/27！",
    summary: "已开源Agnes Harness",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511582.html",
    date: "2026-11-20",
    category: "product",
  },
  {
    id: "news-005",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《克里夫·布斯的惊险再冒险》终极预告11月18日，《好莱坞往事》续集电影《克里夫·布斯的惊险再冒险》发布了终极预告，将于11月25日在北美上映，12月23日上线Netflix。大卫·芬奇执 ...<a href=&#34;https://sspai.com/post/119337&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119337",
    date: "2026-11-20",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "游戏史最高分，不负 13 年的等待：《GTA 6》游玩体验",
    summary: "编注：本文首发于「篝火营地」，原作者多边形。少数派经授权后转载，仅对文章格式略作调整。原标题：《侠盗猎车手6》游戏评测：10分｜篝火。作为RockstarGames时隔13年推出的《侠盗猎车手》系列新 ...<a href=&#34;https://sspai.com/post/119327&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119327",
    date: "2026-11-20",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "浮屏：截图即可「上岛」，还能帮你记录生活",
    summary: "浮屏是我一个人开发的应用。它最初只是为了解决一杯柠檬水的取餐码问题，后来慢慢长成了一个记录生活小片段的工具。<a href=&#34;https://sspai.com/post/118879&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118879",
    date: "2026-11-20",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "派早报：Google 推出 Gemini 4 Neon 模型，网易 UU 远程将于 12 月推出付费会员等",
    summary: "Google Play 将强制要求应用适配折叠屏，微软宣布 Microsoft To Do 将于明年 6 月全面停用等。<a href=&#34;https://sspai.com/post/119311&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119311",
    date: "2026-11-20",
    category: "product",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
