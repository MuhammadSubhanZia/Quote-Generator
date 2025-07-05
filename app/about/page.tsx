import InfoCard from "@/components/InfoCard";
import { FaBullseye, FaLightbulb, FaBook, FaTools } from "react-icons/fa";

export default function AboutPage() {
  return (
    
    <main 
    className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-4 py-10">
          <a
    href="/"
    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-2 px-6 rounded-full shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-pink-600"
  >
    🏠 Back to Home
  </a>
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🎀 Hi Pookies!   <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Subhan Zia</span></h1>
       <p className="text-white/90 text-justify leading-relaxed tracking-wide text-[17px] max-w-3xl mx-auto">
  I'm <span className="font-semibold text-white">Muhammad Subhan Zia</span>, a curious explorer on a mission to mix data, design, and dua into powerful creations 🌟. Currently diving deep into <span className="text-indigo-300 font-medium">Data Science at FAST NUCES Lahore</span>, coding cool stuff by day, teaching physics by evening. I dream big  think <span className="text-pink-300 font-medium">software house</span>, <span className="text-green-300 font-medium">restaurant</span>, <span className="text-yellow-300 font-medium">and ofcourse healthy life</span>  and I’m building brick by brick, byte by byte, <span className="italic text-white/80">in sha Allah</span> 🏗️✨.
</p>

      </div>
      <div className="mt-12 flex justify-center">
 
</div>


      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <InfoCard title="My Ambition" icon={<FaBullseye />} textColor="text-yellow-400">
          I want to blend tech, creativity, and purpose by building apps that inspire people and solve real-world problems.
        </InfoCard>

        <InfoCard title="Currently I am" icon={<FaLightbulb />} textColor="text-blue-400">
          Learning full-stack skills via my internship with Nexium. Exploring Next.js, Tailwind, ShadCN, n8n and Supabase, and working on 5 startup style ideas with my group, we've made 1 MVP you can check out on my linkedIn profile.
        </InfoCard>

        <InfoCard title="Learning Interest" icon={<FaBook />} textColor="text-pink-400">
          <ul className="list-disc list-inside">
            <li>AI / ML / Deep Learning (theory + practice)</li>
            <li>React & Next.js with Tailwind CSS</li>
            <li>SQL, Data Science, and Backend Tools</li>
          </ul>
        </InfoCard>

        <InfoCard title="Project Teck-Stack & Tools" icon={<FaTools />} textColor="text-green-400">
          <ul className="list-disc list-inside">
            <li>Next.js 15 for App routing, server components,
                React 19 for Interactive UI and state management,
                Tailwind CSS for Utility-first styling and responsiveness</li>
            <li>ShadCN UI for Beautiful pre-styled UI components,
                JSON for For quote data storage,
                Framer Motion + CSS Animations for For smooth effects & transitions</li>
            <li>Custom Emoji Engine for Free-floating, bouncing emoji animation logic,
                TypeScript for Type safety and code clarity
           </li>
          </ul>
        </InfoCard>
      </div>
    </main>
  );
}
