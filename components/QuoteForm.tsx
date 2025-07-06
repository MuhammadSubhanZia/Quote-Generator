// 🎮 QUOTE FORM (QuoteForm.tsx) - Updated with improved theme and visibility
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import quotesDataRaw from "@/data/quotes.json";

const quotesData: Record<string, string[]> = quotesDataRaw;

// 🎮 Updated gradient colors with better contrast and visibility
const gradientColors = [
  "from-purple-500 to-purple-600",
  "from-pink-500 to-pink-600", 
  "from-indigo-500 to-indigo-600",
  "from-violet-500 to-violet-600",
  "from-fuchsia-500 to-fuchsia-600",
  "from-rose-500 to-rose-600",
  "from-blue-500 to-blue-600",
  "from-cyan-500 to-cyan-600",
  "from-teal-500 to-teal-600",
  "from-emerald-500 to-emerald-600",
  "from-green-500 to-green-600",
  "from-lime-500 to-lime-600",
];

// 🎮 Darker background colors for better readability
const backgroundColors = [
  "from-purple-100 to-purple-200",
  "from-pink-100 to-pink-200", 
  "from-indigo-100 to-indigo-200",
  "from-violet-100 to-violet-200",
  "from-fuchsia-100 to-fuchsia-200",
  "from-rose-100 to-rose-200",
  "from-blue-100 to-blue-200",
  "from-cyan-100 to-cyan-200",
  "from-teal-100 to-teal-200",
  "from-emerald-100 to-emerald-200",
  "from-green-100 to-green-200",
  "from-lime-100 to-lime-200",
];

const topics = Object.keys(quotesData);
const topicColors: Record<string, string> = {};
const topicBackgrounds: Record<string, string> = {};
topics.forEach((topic, idx) => {
  topicColors[topic] = gradientColors[idx % gradientColors.length];
  topicBackgrounds[topic] = backgroundColors[idx % backgroundColors.length];
});

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState("from-purple-100 to-purple-200");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = () => {
    const trimmedTopic = topic.trim().toLowerCase();
    const matchingQuotes = quotesData[trimmedTopic]?.slice(0, 3) || [];
    setQuotes(matchingQuotes);
    setHasSearched(true);

    const newColor =
      topicBackgrounds[trimmedTopic] || "from-purple-100 to-purple-200";
    setCurrentColor(newColor);
  };

  return (
    <>
      <div
        id="quote-box"
        className="relative z-20 max-w-xl mx-auto p-8 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl space-y-6 animate-fade-in border border-white/60 hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group"
      >
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 blur-sm -z-10"></div>

        {/* 🎮 Enhanced heading with better visibility */}
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-700 via-pink-700 to-purple-700 bg-clip-text text-transparent hover:from-pink-800 hover:via-purple-800 hover:to-pink-800 transition-all duration-300 cursor-default drop-shadow-sm">
          🎯 Get Inspired with Quranic verses
        </h1>

        {/* 🎮 Enhanced topic display with improved visibility and hover effects */}
        <div className="text-center space-y-3">
          <p className="text-gray-700 font-semibold text-sm">Try topics like:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {topics.map((topicKey) => (
              <span
                key={topicKey}
                className={`relative font-bold text-sm px-3 py-1 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-2 transform shadow-sm hover:shadow-md bg-gradient-to-r ${topicBackgrounds[topicKey]} text-gray-800 hover:text-white group/topic border border-white/30`}
                onClick={() => setTopic(topicKey)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover/topic:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${topicColors[topicKey]}`}></div>
                
                {/* Text content */}
                <span className="relative z-10 transition-colors duration-300 group-hover/topic:text-white">
                  {topicKey}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* 🎮 Enhanced input styling with better visibility */}
        <div className="relative">
          <Input
            placeholder="Enter topic (e.g. life, success)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="text-lg border-2 border-purple-300 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/95 hover:scale-[1.01] focus:scale-[1.01] text-gray-800 placeholder:text-gray-500 shadow-sm"
          />
          {/* Enhanced input glow */}
          <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-purple-400 to-pink-400 blur-sm -z-10"></div>
        </div>

        {/* 🎮 Enhanced button with better theme and animations */}
        <Button
          onClick={handleSubmit}
          className="group relative w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden border border-white/20"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            🪄 Get Quotes
          </span>
          {/* Enhanced shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Button>

        {/* 🎮 Enhanced quotes display with better visibility */}
        <ul className="space-y-3">
          {quotes.length > 0 ? (
            quotes.map((q, idx) => (
              <li
                key={idx}
                className={`text-gray-800 text-base bg-gradient-to-r ${currentColor} rounded-xl p-4 shadow-md font-medium border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-default group/quote`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <span className="text-purple-600 font-bold text-lg drop-shadow-sm">💫</span> 
                <span className="text-gray-800 font-medium">{q}</span>
              </li>
            ))
          ) : (
            hasSearched && quotes.length === 0 && (
              <li className="text-sm text-purple-700 text-center bg-purple-50 rounded-lg p-3 border border-purple-200 hover:bg-purple-100 transition-colors duration-300 shadow-sm">
                🤔 No quotes available for this topic. Try another one!
              </li>
            )
          )}
        </ul>
      </div>

      {/* 🎮 Enhanced footer with better theme */}
     {/* 🎮 Enhanced footer with better theme */}
      <footer className="mt-10 text-center text-sm text-gray-700 bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 border border-white/60 hover:bg-white/60 hover:scale-105 transition-all duration-300 group shadow-sm">
        <p>
          Warmest <span className="text-red-500 hover:animate-pulse cursor-default"></span>blankets have the{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent group-hover:from-pink-800 group-hover:to-purple-800 transition-all duration-300">
            coldest future 🎯
          </span>
        </p>
      </footer>
    </>
  );
}