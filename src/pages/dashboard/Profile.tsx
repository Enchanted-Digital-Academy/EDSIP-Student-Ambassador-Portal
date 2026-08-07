import { Mail, Phone, GraduationCap, MapPin, Link2, Pencil } from 'lucide-react';
import { mockProfile } from '../../data/mockDashboard';

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

interface InfoRowProps {
  icon: typeof Mail;
  label: string;
  value: string;
}

function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: '#FDF0DA' }}
      >
        <Icon size={16} style={{ color: '#F8A825' }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-medium text-gray-800 break-words">{value}</p>
      </div>
    </div>
  );
}

export default function Profile() {
  const p = mockProfile;

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold text-gray-700 shrink-0"
          style={{ backgroundColor: '#FDF0DA' }}
        >
          {getInitials(p.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-semibold text-gray-900">{p.name}</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            {p.department} · {p.university}
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shrink-0">
          <Pencil size={15} />
          Edit Profile
        </button>
      </div>

      {/* Contact + Academic info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6 space-y-5">
          <h3 className="text-sm font-semibold text-gray-900">Contact Information</h3>
          <InfoRow icon={Mail} label="Email" value={p.email} />
          <InfoRow icon={Phone} label="Phone" value={p.phone} />
          <InfoRow icon={MapPin} label="State" value={p.state} />
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6 space-y-5">
          <h3 className="text-sm font-semibold text-gray-900">Academic Information</h3>
          <InfoRow icon={GraduationCap} label="University" value={p.university} />
          <InfoRow icon={GraduationCap} label="Department" value={p.department} />
          <InfoRow icon={GraduationCap} label="Academic Level" value={p.academicLevel} />
        </div>
      </div>

      {/* Motivation */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Motivation</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{p.motivation}</p>
      </div>

      {/* Social links */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Social Media</h3>
        <InfoRow icon={Link2} label="Links" value={p.socialMediaLinks} />
      </div>
    </div>
  );
}