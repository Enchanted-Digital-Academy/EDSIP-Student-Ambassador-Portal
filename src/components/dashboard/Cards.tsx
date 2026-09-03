import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export default function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-5 flex items-center gap-4">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: '#FDF0DA' }}
      >
        <Icon size={20} style={{ color: '#F8A825' }} />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-semibold text-gray-900 leading-tight">{value}</p>
        <p className="text-sm text-gray-400 truncate">{label}</p>
      </div>
    </div>
  );
}