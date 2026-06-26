"use client";

import { useState } from "react";

interface TrafficModalProps {
  type: "wechat" | "douyin" | "xiaohongshu" | "group";
  onClose: () => void;
}

const trafficData = {
  wechat: {
    title: "关注公众号",
    icon: "💬",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    textColor: "text-green-700 dark:text-green-400",
    description: "扫码关注公众号，获取每日AI资讯和工具推荐",
    qrcodePlaceholder: "公众号二维码",
    tips: ["每日推送AI最新动态", "独家工具使用教程", "粉丝专属福利"],
  },
  douyin: {
    title: "关注抖音号",
    icon: "📱",
    color: "from-gray-800 to-black",
    bgColor: "bg-gray-50 dark:bg-gray-900/20",
    borderColor: "border-gray-200 dark:border-gray-800",
    textColor: "text-gray-700 dark:text-gray-400",
    description: "关注抖音号，看AI工具实操视频",
    qrcodePlaceholder: "抖音号二维码",
    tips: ["AI工具实操演示", "小白入门教程", "热门工具测评"],
  },
  xiaohongshu: {
    title: "关注小红书",
    icon: "📕",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    textColor: "text-pink-700 dark:text-pink-400",
    description: "关注小红书，发现AI使用技巧",
    qrcodePlaceholder: "小红书二维码",
    tips: ["AI绘画教程", "写作提示词分享", "工具对比测评"],
  },
  group: {
    title: "加入交流群",
    icon: "👥",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-400",
    description: "加入微信群，和AI爱好者一起交流",
    qrcodePlaceholder: "微信群二维码",
    tips: ["实时解答AI问题", "分享最新工具", "结交同好伙伴"],
  },
};

export default function TrafficModal({ type, onClose }: TrafficModalProps) {
  const data = trafficData[type];
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className={`bg-gradient-to-r ${data.color} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{data.icon}</span>
              <h3 className="text-xl font-bold">{data.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="mt-2 text-white/80 text-sm">{data.description}</p>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* QR Code Placeholder */}
          <div
            className={`${data.bgColor} ${data.borderColor} border-2 border-dashed rounded-xl p-8 mb-4 flex flex-col items-center justify-center`}
          >
            <div className="w-32 h-32 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-3 shadow-sm">
              <span className="text-4xl">{data.icon}</span>
            </div>
            <p className={`text-sm ${data.textColor} font-medium`}>
              {data.qrcodePlaceholder}
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              （请替换为实际二维码图片）
            </p>
          </div>

          {/* Tips */}
          <div className="space-y-2 mb-4">
            {data.tips.map((tip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <span className="text-green-500">✓</span>
                {tip}
              </div>
            ))}
          </div>

          {/* Copy ID */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 shrink-0">
              账号：
            </span>
            <code className="flex-1 text-sm font-mono text-zinc-700 dark:text-zinc-300 truncate">
              人人AI
            </code>
            <button
              onClick={() => handleCopy("人人AI")}
              className="px-3 py-1 rounded-md bg-zinc-200 dark:bg-zinc-700 text-xs font-medium hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors shrink-0"
            >
              {copied ? "已复制" : "复制"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className={`w-full py-3 rounded-xl bg-gradient-to-r ${data.color} text-white font-medium hover:opacity-90 transition-opacity shadow-lg`}
          >
            知道了，稍后关注
          </button>
        </div>
      </div>
    </div>
  );
}
