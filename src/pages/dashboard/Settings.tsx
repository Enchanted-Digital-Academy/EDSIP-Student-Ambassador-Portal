import { useState } from 'react';
import { Mail, MessageSquare, Calendar as CalendarIcon, Award } from 'lucide-react';
import { mockProfile } from '../../data/mockDashboard';

interface ToggleRowProps {
  icon: typeof Mail;
  title: string;
  description: string;
  defaultChecked?: boolean;
}

function ToggleRow({ icon: Icon, title, description, defaultChecked = true }: ToggleRowProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-start gap-4 py-4">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: '#FDF0DA' }}
      >
        <Icon size={16} style={{ color: '#F8A825' }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => setChecked((c) => !c)}
        className="w-11 h-6 rounded-full relative shrink-0 transition-colors"
        style={{ backgroundColor: checked ? '#F8A825' : '#E5E7EB' }}
        aria-pressed={checked}
        aria-label={`Toggle ${title}`}
      >
        <span
          className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all"
          style={{ left: checked ? '22px' : '2px' }}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Account */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Account</h3>
        <div className="py-2">
          <p className="text-xs text-gray-400">Email</p>
          <p className="text-sm text-gray-800">{mockProfile.email}</p>
        </div>
        <div className="py-2">
          <p className="text-xs text-gray-400">Phone</p>
          <p className="text-sm text-gray-800">{mockProfile.phone}</p>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Need to update these? Head to your <span className="font-medium text-gray-600">Profile</span> page.
        </p>
      </div>

      {/* Notification preferences */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6 divide-y divide-gray-50">
        <h3 className="text-sm font-semibold text-gray-900 pb-2">Notification Preferences</h3>
        <ToggleRow icon={Mail} title="Email Notifications" description="Get updates sent to your inbox." />
        <ToggleRow
          icon={CalendarIcon}
          title="Event Reminders"
          description="Reminders before events you're registered for."
        />
        <ToggleRow
          icon={Award}
          title="Referral Updates"
          description="Progress updates on your referral goal."
        />
        <ToggleRow
          icon={MessageSquare}
          title="Community Announcements"
          description="News from the ambassador community."
          defaultChecked={false}
        />
      </div>
    </div>
  );
}