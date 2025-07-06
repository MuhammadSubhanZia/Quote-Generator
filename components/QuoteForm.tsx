// 🎮 QUOTE FORM (QuoteForm.tsx) - Updated with boyish fun theme
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import quotesDataRaw from "@/data/quotes.json";

const quotesData: Record<string, string[]> = quotesDataRaw;

// 🎮 Updated gradient colors for better visibility
const gradientColors = [
  "from-purple-200 to-purple-300",
  "from-pink-200 to-pink-300", 
  "from-indigo-200 to-indigo-300",
  "from-violet-200 to-violet-300",
  "from-fuchsia-200 to-fuchsia-300",
  "from-rose-200 to-rose-300",
  "from-blue-200 to-blue-300",
  "from-cyan-200 to-cyan-300",
  "from-teal-200 to-teal-300",
  "from-emerald-200 to-emerald-300",
  "from-green-200 to-green-300",
  "from-lime-200 to-lime-300",
];

const topics = Object.keys(quotesData);
const topicColors: Record<string, string> = {};
topics.forEach((topic, idx) => {
  topicColors[topic] = gradientColors[idx % gradientColors.length];
});

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState("from-purple-200 to-purple-300");

  const handleSubmit = () => {
    const trimmedTopic = topic.trim().toLowerCase();
    const matchingQuotes = quotesData[trimmedTopic]?.slice(0, 3) || [];
    setQuotes(matchingQuotes);

    const newColor =
      topicColors[trimmedTopic] || "from-purple-200 to-purple-300";
    setCurrentColor(newColor);
  };

  return (
    <>
      <div
        id="quote-box"
        className="relative z-20 max-w-xl mx-auto p-8 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl space-y-6 animate-fade-in border border-white/60 hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 blur-sm -z-10"></div>

        {/* 🎮 Updated heading with better visibility */}
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-700 via-pink-700 to-purple-700 bg-clip-text text-transparent hover:from-pink-800 hover:via-purple-800 hover:to-pink-800 transition-all duration-300 cursor-default">
          🎯 Get Inspired with Epic Quotes
        </h1>

        {/* 🎮 Updated topic display with hover animations */}
        <p className="text-center text-sm font-medium space-x-2 flex flex-wrap justify-center gap-2">
          <span className="text-gray-700 font-semibold">Try topics like:</span>
          {topics.map((topicKey) => (
            <span
              key={topicKey}
              className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${topicColors[topicKey]} hover:scale-110 transition-all duration-300 cursor-pointer hover:rotate-3`}
              onClick={() => setTopic(topicKey)}
            >
              {topicKey}
            </span>
          ))}
        </p>

        {/* 🎮 Updated input styling with better visibility */}
        <div className="relative">
          <Input
            placeholder="Enter topic (e.g. life, success)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="text-lg border-2 border-purple-300 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:scale-[1.01] focus:scale-[1.01] text-gray-800"
          />
          {/* Subtle input glow */}
          <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-purple-400 to-pink-400 blur-sm -z-10"></div>
        </div>

        {/* 🎮 Updated button with better theme and fixed animations */}
        <Button
          onClick={handleSubmit}
          className="group relative w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            ⚡ Get Quotes
          </span>
          {/* Simple shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Button>

        {/* 🎮 Updated quotes display with better visibility */}
        <ul className="space-y-3">
          {quotes.length > 0 ? (
            quotes.map((q, idx) => (
              <li
                key={idx}
                className={`text-gray-800 text-base bg-gradient-to-r ${currentColor} rounded-xl p-4 shadow-md font-medium border border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-default group`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <span className="text-purple-600 font-bold text-lg">💫</span> {q}
              </li>
            ))
          ) : (
            topic.trim() && (
              <li className="text-sm text-purple-600 text-center bg-purple-50 rounded-lg p-3 border border-purple-200 hover:bg-purple-100 transition-colors duration-300">
                🤔 No quotes available for this topic. Try another one!
              </li>
            )
          )}
        </ul>
      </div>

      {/* 🎮 Updated footer with better theme */}
      <footer className="mt-10 text-center text-sm text-gray-700 bg-white/40 backdrop-blur-sm rounded-full px-6 py-2 border border-white/50 hover:bg-white/50 hover:scale-105 transition-all duration-300 group">
        <p>
          Built with <span className="text-red-500 hover:animate-pulse cursor-default">☕</span> using Next.js, Tailwind CSS & ShadCN UI by{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent group-hover:from-pink-800 group-hover:to-purple-800 transition-all duration-300">
            Subhan Zia
          </span>
        </p>
      </footer>
    </>
  );
}