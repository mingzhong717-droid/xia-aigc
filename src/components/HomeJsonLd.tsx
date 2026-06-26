"use client";

import { tools, categories } from "@/data/tools";

/**
 * 首页 JSON-LD 结构化数据
 * 包含 WebSite（站点信息+搜索功能）和 ItemList（工具列表）
 */
export default function HomeJsonLd() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "人人AI",
    alternateName: "人人AI - AI工具导航站",
    url: "https://aigc778.top/",
    description:
      "面向AI小白的工具导航站，精选200+实用AI工具，涵盖AI对话、写作、绘画、视频、音频、编程等分类",
    inLanguage: "zh-CN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://aigc778.top/?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI工具精选列表",
    description: "精选实用AI工具推荐",
    numberOfItems: tools.length,
    itemListElement: tools.slice(0, 30).map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.description,
        url: tool.url,
        applicationCategory:
          categories.find((c) => c.id === tool.category)?.name || "AI工具",
        offers: {
          "@type": "Offer",
          price: tool.isFree ? "0" : "",
          priceCurrency: "CNY",
        },
      },
    })),
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "人人AI",
    url: "https://aigc778.top/",
    logo: "https://aigc778.top/favicon.ico",
    description: "AI工具导航站，让每个人都能轻松用上人工智能",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
