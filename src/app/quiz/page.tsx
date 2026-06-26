"use client";

import { useState } from "react";
import { quizQuestions, calculateResult, type QuizResult } from "@/data/quiz";
import { tools } from "@/data/tools";
import Link from "next/link";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [started, setStarted] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const quizResult = calculateResult(newAnswers);
      setResult(quizResult);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setStarted(false);
  };

  const handleShare = () => {
    if (!result) return;
    const shareText = `${result.shareText}\n\n来测测你适合哪个AI工具 👉 https://aigc778.top/quiz/`;
    if (navigator.share) {
      navigator.share({ title: "AI工具测试结果", text: shareText });
    } else {
      navigator.clipboard.writeText(shareText);
      alert("结果已复制到剪贴板，快去分享吧！");
    }
  };

  // Start screen
  if (!started) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 sm:p-10 shadow-xl">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
              测测你适合哪个AI工具
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
              6道题，60秒，找到最适合你的AI工具组合。
              <br />
              不用注册，不用付费，测完推荐工具直接用。
            </p>
            <button
              onClick={() => setStarted(true)}
              className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 text-lg"
            >
              开始测试
            </button>
            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
              共 {quizQuestions.length} 题 · 约 1 分钟
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Result screen
  if (result) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl">
            {/* Result header */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-center text-white">
              <div className="text-5xl mb-3">{result.emoji}</div>
              <h2 className="text-2xl font-bold mb-2">你是：{result.title}</h2>
              <p className="text-white/80 text-sm">{result.description}</p>
            </div>

            {/* Recommended tools */}
            <div className="p-6">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
                🎁 为你推荐的AI工具：
              </h3>
              <div className="space-y-2">
                {result.tools.map((toolId) => {
                  const tool = tools.find((t) => t.id === toolId);
                  if (!tool) return null;
                  return (
                    <Link
                      key={toolId}
                      href={`/tool/${toolId}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 hover:bg-indigo-50 dark:bg-zinc-800 dark:hover:bg-indigo-900/20 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-700 flex items-center justify-center text-xl shadow-sm">
                        {tool.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-zinc-900 dark:text-white">
                            {tool.name}
                          </span>
                          {tool.isFree && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              免费
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                          {tool.recommendation}
                        </p>
                      </div>
                      <span className="text-zinc-300 dark:text-zinc-600">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleShare}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-md text-sm"
                >
                  📤 分享我的结果
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={restart}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    重新测试
                  </button>
                  <Link
                    href="/"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-center"
                  >
                    去看工具
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xl">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 mb-2">
              <span>
                第 {currentQuestion + 1} / {quizQuestions.length} 题
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-6 leading-snug">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:border-indigo-600 dark:hover:bg-indigo-900/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400 transition-colors shrink-0">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
