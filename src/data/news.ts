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
// 最后更新时间: 2026-08-05 02:10:38 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "8点1氪丨马斯克个人财富亏掉2个“黄仁勋”；上海雪花膏母公司破产；日本半导体或面临断供",
    summary: "今日热点导览 一架上海飞东京航班险撞机，两机垂直高度差仅约20米 阿里云容器服务Agent开启商业化收费 今年以来港股IPO数量同比增长132%，科技类公司占比过半 苹果新任CEO据悉邀请已退休的硬件部门负责人加入管理团队 SpaceX上市后首份财报前夕，“木头姐”持续加仓 TOP3大新闻 马斯克个",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3925868626360706?f=rss",
    date: "2026-08-05",
    category: "industry",
  },
  {
    id: "news-002",
    title: "派早报：OPPO A7 Pro Max 发布、CMF 推出开放式耳机 Clip Pro 等",
    summary: "索尼发布 FE 100-400mm F5.6-8 OSS 全画幅超远摄变焦镜头，国内航线燃油附加费下调等。<a href=&#34;https://sspai.com/post/113087&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113087",
    date: "2026-08-05",
    category: "product",
  },
  {
    id: "news-003",
    title: "开源版Claude Science来了！零依赖、MIT协议，内置30+项科研Skills",
    summary: "北京大学&#038;元空AI Agent联合实验室",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/466386.html",
    date: "2026-08-04",
    category: "product",
  },
  {
    id: "news-004",
    title: "数学家24小时驳回OpenAI攻破的猜想！“AI证对了每句话，但已跟原猜想无关”",
    summary: "第二天，就有一篇人类论文回应：AI提出的反例不成立",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/465792.html",
    date: "2026-08-04",
    category: "product",
  },
  {
    id: "news-005",
    title: "开发者苦 “造轮子” 久矣，HarmonyOS 7 正在抹平系统能力的接入鸿沟",
    summary: "Skill和Agent也能被封装调用",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/466262.html",
    date: "2026-08-04",
    category: "product",
  },
  {
    id: "news-006",
    title: "OpenAI天价网红公关活动，捅马蜂窝了",
    summary: "OpenAI+田园牧歌，画风属实太违和",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/466032.html",
    date: "2026-08-04",
    category: "product",
  },
  {
    id: "news-007",
    title: "DeepSeek低价风暴打服硅谷！海外平台争相倒贴V4 Flash",
    summary: "那还说啥了梁圣，我订阅费全给你就是了呗",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/465814.html",
    date: "2026-08-04",
    category: "product",
  },
  {
    id: "news-008",
    title: "一层“布”涨价270%之后，投资机构用数亿元投票玻璃基板，巽霖科技完成近2亿元B轮融资",
    summary: "【导语】当前，电子级玻纤布价格较2025年低点翻倍、FR-4覆铜板涨幅超270%，AI封装载���部分交期拉长至6个月以上，有机基板供给危机持续加深。在此背景下，国内玻璃基板领军企业巽霖科技宣布完成近2亿元B轮融资——这已是该公司半年内完成的第三轮次融资。本轮由英诺基金、千乘资本、海目星、光莆股份、",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3924953058605444?f=rss",
    date: "2026-08-04",
    category: "industry",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
