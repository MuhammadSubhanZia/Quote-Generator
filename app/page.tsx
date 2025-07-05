import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import FloatingEmojis from "@/components/FloatingCandies";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ff6a00] via-[#ee0979] to-[#7f00ff] flex flex-col items-center justify-center px-4 py-10">


      {/* Top Nav */}
      <div className="absolute top-4 right-4">
      <Link
  href="/about"
  className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md hover:from-purple-600 hover:to-pink-600 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:rotate-1"
>
  🚀 About Me
</Link>


      </div>
<FloatingEmojis />
      <QuoteForm />
    </main>
  );
}
