import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "小AIGC - AI工具导航站 | 精选300+实用AI工具",
  description: "小AIGC是面向AI小白的工具导航站，精选300+实用AI工具，涵盖AI对话、写作、绘画、视频、音频、PPT、编程、设计、办公、学习等分类，帮你轻松找到最适合的AI工具。",
  keywords: "AI工具,AI导航,ChatGPT,AI写作,AI绘画,AI视频,人工智能,AI工具推荐,AI工具大全,免费AI工具,国产AI",
  openGraph: {
    title: "小AIGC - AI工具导航站",
    description: "精选300+实用AI工具，让每个人都能轻松用上人工智能",
    siteName: "小AIGC",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "小AIGC - AI工具导航站",
    description: "精选300+实用AI工具，让每个人都能轻松用上人工智能",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mingzhong717-droid.github.io/xia-aigc/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/xia-aigc/favicon.ico" />
      </head>
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
        {children}

        {/* Google Analytics - 替换 G-XXXXXXXXXX 为你的 GA4 测量 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-18CKQ270RT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-18CKQ270RT');
          `}
        </Script>

        {/* 百度统计 - 替换 YOUR_BAIDU_ID 为你的百度统计 ID */}
        <Script id="baidu-analytics" strategy="afterInteractive">
          {`
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?2daae050bab8096d424c3b97bdbf9d5b";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
