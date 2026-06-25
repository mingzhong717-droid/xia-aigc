import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "小AIGC - AI工具导航站",
  description: "精选实用的AI工具，让每个人都能轻松用上人工智能。AI对话、写作、绘画、视频、音频、PPT、编程、设计、办公、学习、搜索、生活，一找就用。",
  keywords: "AI工具, AI导航, ChatGPT, AI写作, AI绘画, AI视频, 人工智能",
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
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-950">{children}</body>
    </html>
  );
}
