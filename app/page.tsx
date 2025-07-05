import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import FloatingEmojis from "@/components/FloatingCandies";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] flex flex-col items-center justify-center px-4 py-10 overflow-hidden relative">
      
      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-pink-300/8 rounded-full blur-3xl"></div>
      </div>

      {/* Top Nav with fixed animations */}
      <div className="absolute top-4 right-4 z-30">
        <Link
          href="/about"
          className="group relative text-sm font-bold text-white px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-lg hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
        >
          🚀 About Me
          {/* Simple shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Link>
      </div>

      {/* Floating emojis */}
      <FloatingEmojis />

      {/* Quote Form */}
      <div className="relative z-20">
        <QuoteForm />
      </div>

      {/* Simple corner decorations */}
      <div className="absolute top-20 left-8 text-4xl opacity-15 pointer-events-none">
        🎮
      </div>
      <div className="absolute bottom-20 left-12 text-3xl opacity-10 pointer-events-none">
        ⚡
      </div>
      <div className="absolute top-32 right-16 text-4xl opacity-15 pointer-events-none">
        🎯
      </div>
      <div className="absolute bottom-32 right-20 text-3xl opacity-10 pointer-events-none">
        💫
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div
              key={i}
              className="bg-white/30 rounded-sm animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}