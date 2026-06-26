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
  title: {
    default: "人人AI - AI工具导航站 | 精选200+实用AI工具",
    template: "%s | 人人AI",
  },
  description: "人人AI是面向AI新手的工具导航站，精选200+实用AI工具，涵盖AI对话、写作、绘画、视频、音频、PPT、编程、设计、办公、学习等12大分类，帮你轻松找到最适合的AI工具。每周更新，免费无广告。",
  keywords: "AI工具,AI导航,AI工具导航,ChatGPT,AI写作,AI绘画,AI视频,人工智能,AI工具推荐,AI工具大全,免费AI工具,国产AI,AI对话,AI助手,AIGC,Midjourney,Stable Diffusion,文心一言,通义千问,Kimi",
  authors: [{ name: "人人AI" }],
  creator: "人人AI",
  publisher: "人人AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aigc778.top"),
  openGraph: {
    title: "人人AI - AI工具导航站 | 精选200+实用AI工具",
    description: "面向AI新手的工具导航站，精选200+实用AI工具，涵盖12大分类，让每个人都能轻松用上人工智能",
    siteName: "人人AI",
    locale: "zh_CN",
    type: "website",
    url: "https://aigc778.top/",
  },
  twitter: {
    card: "summary_large_image",
    title: "人人AI - AI工具导航站",
    description: "精选200+实用AI工具，让每个人都能轻松用上人工智能",
    creator: "@xiaaigc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aigc778.top/",
  },
  category: "technology",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="人人AI" />
        {/* Baidu SEO verification - 替换为你的百度站长验证码 */}
        {/* <meta name="baidu-site-verification" content="YOUR_CODE" /> */}
        {/* Google Search Console verification - 替换为你的验证码 */}
        {/* <meta name="google-site-verification" content="YOUR_CODE" /> */}
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
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful');
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
