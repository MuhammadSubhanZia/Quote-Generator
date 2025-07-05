interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  textColor: string;
  children: React.ReactNode;
}

export default function InfoCard({ 
  title, 
  icon, 
  textColor, 
  children 
}: InfoCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/40 hover:shadow-2xl transform hover:scale-[1.05] transition-all duration-500 hover:rotate-1 hover:translate-y-[-4px] hover:bg-white/90 group cursor-pointer">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${textColor} text-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
          {icon}
        </div>
        <h2 className={`text-xl font-bold ${textColor} group-hover:text-opacity-80 transition-all duration-300`}>
          {title}
        </h2>
      </div>
      <div className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        {children}
      </div>
      
      {/* Fun hover effect - glowing border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 blur-sm -z-10"></div>
    </div>
  );
}