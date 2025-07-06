import InfoCard from "@/components/InfoCard";
import { FaBullseye, FaLightbulb, FaBook, FaTools } from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4facfe] via-[#00f2fe] to-[#43e97b] px-4 py-10 overflow-hidden">
      
      {/* 🎮 Updated Back to Home Button - Boyish theme */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg border border-white/40 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white hover:rotate-1 hover:translate-y-[-2px] group"
      >
        🏠 <span className="group-hover:animate-pulse">Back to Home</span>
      </Link>

      {/* 🎮 Updated Header Section - Fun animations */}
      <div className="max-w-4xl mx-auto text-center mb-12 mt-8">
        <h1 className="text-5xl font-bold mb-4 hover:animate-bounce cursor-default">
          🎮 Hey Buddies!{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-500">
            Subhan Zia
          </span>
        </h1>
        
        {/* 🎮 Enhanced Bio with fun glassmorphism container */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:rotate-1 hover:bg-white/90 group">
          <p className="text-gray-800 text-justify leading-relaxed tracking-wide text-[17px] max-w-3xl mx-auto group-hover:text-gray-900 transition-colors duration-300">
            I&apos;m <span className="font-semibold text-blue-600 hover:text-cyan-600 transition-colors duration-300 cursor-default">Muhammad Subhan Zia</span>, a curious explorer on a mission to mix data, design, and dua into powerful creations 🌟. Currently diving deep into <span className="text-cyan-600 font-medium hover:text-blue-600 transition-colors duration-300 cursor-default">Data Science at FAST NUCES Lahore</span>, coding cool stuff by day, teaching physics by evening. I dream big — think <span className="text-green-600 font-medium hover:text-emerald-600 transition-colors duration-300 cursor-default">software house</span>, <span className="text-blue-500 font-medium hover:text-cyan-500 transition-colors duration-300 cursor-default">restaurant</span>, <span className="text-purple-500 font-medium hover:text-indigo-500 transition-colors duration-300 cursor-default">and of course healthy life</span> — and I&apos;m building brick by brick, byte by byte, <span className="italic text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-default">in sha Allah</span> 🏗️✨.
          </p>
        </div>
      </div>

      {/* 🎮 Updated Cards Grid with staggered animations */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <InfoCard title="My Ambition" icon={<FaBullseye />} textColor="text-blue-500">
          I want to blend tech, creativity, and purpose by building apps that inspire people and solve real-world problems.
        </InfoCard>

        <InfoCard title="Currently I am" icon={<FaLightbulb />} textColor="text-cyan-500">
          Learning full-stack skills via my internship with Nexium. Exploring Next.js, Tailwind, ShadCN, n8n and Supabase, and working on 5 startup style ideas with my group, we&apos;ve made 1 MVP you can check out on my LinkedIn profile.
        </InfoCard>

        <InfoCard title="Learning Interest" icon={<FaBook />} textColor="text-green-500">
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <span className="text-green-500">•</span>
              AI / ML / Deep Learning (theory + practice)
            </li>
            <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <span className="text-green-500">•</span>
              React & Next.js with Tailwind CSS
            </li>
            <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <span className="text-green-500">•</span>
              SQL, Data Science, and Backend Tools
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Project Tech-Stack & Tools" icon={<FaTools />} textColor="text-purple-600">
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>Next.js 15 for App routing, server components, React 19 for Interactive UI and state management, Tailwind CSS for Utility-first styling and responsiveness</span>
            </li>
            <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>ShadCN UI for Beautiful pre-styled UI components, JSON for quote data storage, Framer Motion + CSS Animations for smooth effects & transitions</span>
            </li>
            <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-purple-500 mt-1">•</span>
              <span>Custom Emoji Engine for Free-floating, bouncing emoji animation logic, TypeScript for Type safety and code clarity</span>
            </li>
          </ul>
        </InfoCard>
      </div>

      {/* 🎮 Added Fun Footer with animations */}
      <footer className="mt-16 text-center">
        <div className="bg-white/70 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/40 inline-block hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-300 group">
          <p className="text-gray-700 text-sm">
            Built with <span className="text-red-500 hover:animate-pulse cursor-default">❤️</span> and lots of{" "}
            <span className="text-amber-600 hover:animate-bounce cursor-default">☕</span> by{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-green-600 transition-all duration-500">
              Subhan Zia
            </span>
          </p>
        </div>
      </footer>

      {/* 🎮 Fun floating elements */}
      <div className="fixed top-20 left-10 text-4xl animate-bounce opacity-20 pointer-events-none">
        🚀
      </div>
      <div className="fixed top-40 right-16 text-3xl animate-pulse opacity-20 pointer-events-none">
        💻
      </div>
      <div className="fixed bottom-32 left-20 text-2xl animate-ping opacity-20 pointer-events-none">
        ⚡
      </div>
      <div className="fixed bottom-20 right-12 text-3xl animate-bounce opacity-20 pointer-events-none">
        🎯
      </div>
    </main>
  );
}
