"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import quotesDataRaw from "@/data/quotes.json";

// 👇 Use quotesData directly from file
const quotesData: Record<string, string[]> = quotesDataRaw;

// 👇 Generate topic-color mapping dynamically
const gradientColors = [
  "from-pink-200 to-pink-400",
  "from-blue-200 to-blue-400",
  "from-green-200 to-green-400",
  "from-purple-200 to-purple-400",
  "from-yellow-200 to-yellow-400",
  "from-red-200 to-red-400",
  "from-indigo-200 to-indigo-400",
  "from-teal-200 to-teal-400",
  "from-rose-200 to-rose-400",
  "from-cyan-200 to-cyan-400",
  "from-amber-200 to-amber-400",
  "from-lime-200 to-lime-400",
];

const topics = Object.keys(quotesData);
const topicColors: Record<string, string> = {};
topics.forEach((topic, idx) => {
  topicColors[topic] = gradientColors[idx % gradientColors.length];
});

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = () => {
    const trimmedTopic = topic.trim().toLowerCase();
    const matchingQuotes = quotesData[trimmedTopic]?.slice(0, 3) || [];
    setQuotes(matchingQuotes);

    const newColor =
      topicColors[trimmedTopic] || "from-gray-100 to-gray-300";
    setCurrentColor(newColor);
  };

  const [currentColor, setCurrentColor] = useState("from-gray-100 to-gray-300");

  return (
    <>
      <div
        id="quote-box"
        className="relative z-20 max-w-xl mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl space-y-6 animate-fade-in border border-white/20"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Get Inspired with Beautiful Quotes
        </h1>

        <p className="text-center text-sm font-medium space-x-2 flex flex-wrap justify-center gap-2">
          Try topics like:
          {topics.map((topicKey) => (
            <span
              key={topicKey}
              className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${topicColors[topicKey]}`}
            >
              {topicKey}
            </span>
          ))}
        </p>

        <Input
          placeholder="Enter topic (e.g. life, success)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="text-lg border-2 border-indigo-300 focus:ring-2 focus:ring-pink-400"
        />

        <Button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-lg transform hover:scale-105 transition duration-300 shadow-lg"
        >
          ✨ Get Quotes
        </Button>

        <ul className="space-y-3">
          {quotes.length > 0 ? (
            quotes.map((q, idx) => (
              <li
                key={idx}
                className={`text-gray-800 text-base bg-gradient-to-r ${currentColor} rounded-xl p-4 shadow-md font-medium`}
              >
                • {q}
              </li>
            ))
          ) : (
            topic.trim() && (
              <li className="text-sm text-red-500 text-center">
                No quotes available for this topic.
              </li>
            )
          )}
        </ul>
      </div>

      <footer className="mt-10 text-center text-xs text-gray-600">
        Built with ❤️ using Next.js, Tailwind CSS & ShadCN UI by{" "}
        <span className="font-semibold">Subhan Zia</span>
      </footer>
    </>
  );
}