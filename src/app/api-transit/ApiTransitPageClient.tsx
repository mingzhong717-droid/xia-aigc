"use client";

import { useState } from "react";
import Link from "next/link";
import {
  apiTransitPlatforms,
  transitCategories,
  safetyTips,
} from "@/data/api-transit";
import type { ApiTransitPlatform } from "@/data/api-transit";

function TierBadge({ tier }: { tier: ApiTransitPlatform["tier"] }) {
  const styles = {
    S: "bg-gradient-to-r from-amber-400 to-orange-500 text-white",
    A: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
    B: "bg-gradient-to-r from-sky-400 to-blue-500 text-white",
    C: "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300",
  };
  return (
    <span
      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}

function TypeBadge({ type }: { type: ApiTransitPlatform["type"] }) {
  const config = {
    official: { label: "官方/云厂商", cls: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400" },
    aggregator: { label: "聚合平台", cls: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" },
    transit: { label: "中转站", cls: "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400" },
  };
  const { label, cls } = config[type];
  return (
    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${cls}`}>
      {label}
    </span>
  );
}

function StabilityDots({ stability }: { stability: ApiTransitPlatform["stability"] }) {
  const count = stability === "excellent" ? 3 : stability === "good" ? 2 : 1;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= count
              ? "bg-green-500"
              : "bg-zinc-200 dark:bg-zinc-700"
          }`}
        />
      ))}
    </div>
  );
}

export default function ApiTransitPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlatforms = apiTransitPlatforms.filter((platform) => {
    let matchesCategory = true;
    if (activeCategory === "recommended") {
      matchesCategory = platform.tier === "S" || (platform.tier === "A" && platform.verified);
    } else if (activeCategory === "official") {
      matchesCategory = platform.type === "official" || platform.type === "aggregator";
    } else if (activeCategory === "budget") {
      matchesCategory = platform.minCharge.includes("1") || platform.minCharge.includes("0") || platform.minCharge.includes("免费");
    } else if (activeCategory === "enterprise") {
      matchesCategory = platform.invoice && platform.stability === "excellent";
    }

    const matchesSearch =
      searchQuery === "" ||
      platform.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.models.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      platform.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          <Link
            href="/"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            首页
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-medium">
            API 中转站导航
          </span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            🔗 AI API 中转站导航
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            精选主流 AI API 聚合与中转平台，帮你找到稳定靠谱的模型接入方案
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
            收录 {apiTransitPlatforms.length} 个平台 · 数据定期更新 · 仅供参考
          </p>
        </div>

        {/* Safety Alert Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
          <div className="flex items-start gap-3">
            <span className="text-xl shrink-0">🛡️</span>
            <div>
              <h3 className="font-medium text-amber-800 dark:text-amber-300 text-sm mb-1">
                使用提醒
              </h3>
              <p className="text-xs text-amber-700/80 dark:text-amber-400/70 leading-relaxed">
                API 中转站属于第三方服务，存在一定风险。建议优先选择官方渠道或已通过第三方验真的平台。
                敏感数据请勿通过中转站传输，充值金额建议控制在可承受范围内。
                本站仅做信息收录，不为任何平台的服务质量和安全性背书。
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {transitCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-700"
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索平台名称、模型、标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-zinc-900 dark:border-zinc-800 dark:text-white dark:placeholder:text-zinc-500 shadow-sm"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            共 {filteredPlatforms.length} 个平台
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> 已验真
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span> 未检测
            </span>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="space-y-4">
          {filteredPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Left: Rating + Info */}
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <TierBadge tier={platform.tier} />
                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-zinc-900 dark:text-white">
                        {platform.name}
                      </h3>
                      <TypeBadge type={platform.type} />
                      {platform.verified && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 font-medium">
                          ✓ 已验真
                        </span>
                      )}
                      {platform.hasFreeTrial && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400">
                          🎁 有试用
                        </span>
                      )}
                      {platform.invoice && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400">
                          📄 可开票
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 line-clamp-2">
                      {platform.description}
                    </p>

                    {/* Models */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {platform.models.slice(0, 6).map((model) => (
                        <span
                          key={model}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                        >
                          {model}
                        </span>
                      ))}
                      {platform.models.length > 6 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
                          +{platform.models.length - 6}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5">
                      {platform.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Meta info */}
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 sm:min-w-[140px]">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-zinc-400 mb-0.5">稳定性</div>
                    <StabilityDots stability={platform.stability} />
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-zinc-400 mb-0.5">最低充值</div>
                    <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {platform.minCharge}
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-zinc-400 mb-0.5">支付方式</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">
                      {platform.payment.join(" / ")}
                    </div>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm mt-1"
                  >
                    访问官网 <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>

              {/* Mobile meta row */}
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 sm:hidden">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-zinc-400">稳定性</span>
                  <StabilityDots stability={platform.stability} />
                </div>
                <div className="text-xs text-zinc-500">
                  起充 {platform.minCharge}
                </div>
                <div className="text-xs text-zinc-500">
                  {platform.payment.slice(0, 2).join("/")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPlatforms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-zinc-500 dark:text-zinc-400 mb-3">
              没有找到匹配的平台
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-sm text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
            >
              清除筛选条件
            </button>
          </div>
        )}

        {/* Safety Tips Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
            🛡️ 安全使用指南
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyTips.map((tip) => (
              <div
                key={tip.title}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h3 className="font-medium text-zinc-900 dark:text-white text-sm mb-1">
                  {tip.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reference Links */}
        <div className="mt-10 p-5 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <h3 className="font-medium text-zinc-900 dark:text-white text-sm mb-3">
            📚 参考资源
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href="https://apiranking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              API Ranking - 独立第三方中转站真假检测 ↗
            </a>
            <a
              href="https://www.apimaket.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              API Market - 48家中转站横评榜单 ↗
            </a>
            <a
              href="https://veridrop.org/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Veridrop - 2700+中转站红黑榜 ↗
            </a>
            <a
              href="https://apilatencytest.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              API Latency Test - 中转站延迟与价格对比 ↗
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-400 dark:text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            免责声明：本页面仅做信息收录与导航，不代表对任何平台的推荐或背书。
            API 中转站存在合规风险和资金风险，请用户自行判断。
            数据来源于公开信息采集，可能存在滞后或偏差，以各平台官网为准。
          </p>
        </div>

        {/* Back */}
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
