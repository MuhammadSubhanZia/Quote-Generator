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
  children,
}: InfoCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md backdrop-blur-lg w-full">
      <h3 className={`text-xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}>
        {icon} {title}
      </h3>
      <div className="text-sm text-white/90">{children}</div>
    </div>
  );
}
