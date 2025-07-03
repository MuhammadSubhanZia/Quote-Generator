"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quotesData = [
  { topic: "life", quote: "Life is what happens when you're busy making other plans." },
  { topic: "life", quote: "Life is short. Smile while you still have teeth." },
  { topic: "life", quote: "The purpose of life is a life of purpose." },
  { topic: "success", quote: "Success usually comes to those who are too busy to be looking for it." },
  { topic: "success", quote: "Success is not in what you have, but who you are." },
  { topic: "success", quote: "Success is walking from failure to failure with no loss of enthusiasm." },
];

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = () => {
    const matchingQuotes = quotesData
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.quote);

    setQuotes(matchingQuotes);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h2 className="text-xl font-semibold text-center">Get 3 Quotes by Topic</h2>
      <Input
        placeholder="Enter topic (e.g. life, success)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={handleSubmit}>Get Quotes</Button>

      <ul className="space-y-2">
        {quotes.length > 0 ? (
          quotes.map((q, idx) => <li key={idx} className="text-gray-700">• {q}</li>)
        ) : (
          <li className="text-sm text-gray-400">No quotes yet</li>
        )}
      </ul>
    </div>
  );
}
