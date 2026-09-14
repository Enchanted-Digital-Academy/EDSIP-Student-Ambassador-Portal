import { useState } from 'react';
import { Menu, Bell } from 'lucide-react';
import NotificationsPanel from './NotificationsPanel';
import { mockNotifications } from '../../data/mockDashboard';

interface TopNavProps {
  onOpenMobile: () => void;
  title?: string;
  userName: string;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TopNav({ onOpenMobile, title = 'Dashboard', userName }: TopNavProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-2 -ml-2 rounded-lg text-gray-500 hover:bg-gray-50"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
                  <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-brand-orange/20 group-hover:ring-brand-orange/60 transition-all duration-300">
              <img
                src="/edsip1.jpg"
                alt="EDSIP Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              
            </div>
          </a>
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setNotifOpen((o) => !o)}
            className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#F8A825]" />
            )}
          </button>
          {notifOpen && (
            <NotificationsPanel notifications={mockNotifications} onClose={() => setNotifOpen(false)} />
          )}
        </div>

        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 border border-gray-200">
          {getInitials(userName)}
        </div>
      </div>
    </header>
  );
}