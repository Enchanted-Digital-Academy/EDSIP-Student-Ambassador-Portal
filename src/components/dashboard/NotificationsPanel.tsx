import type { NotificationItem } from '../../types/dashboard';

interface NotificationsPanelProps {
  notifications: NotificationItem[];
  onClose: () => void;
}

export default function NotificationsPanel({ notifications, onClose }: NotificationsPanelProps) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <>
      {/* Click-outside backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="absolute right-0 top-full mt-2 w-80 max-w-[90vw] bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] z-50 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
          <span className="text-xs text-gray-400">{unread} unread</span>
        </div>

        <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
          {notifications.length === 0 ? (
            <div className="p-6 text-center text-sm text-gray-400">You're all caught up.</div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="px-4 py-3 flex gap-3 hover:bg-gray-50/60 transition-colors">
                <div className="pt-1.5 shrink-0">
                  <span
                    className="block w-2 h-2 rounded-full"
                    style={{ backgroundColor: n.read ? 'transparent' : '#F8A825' }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800">{n.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{n.description}</p>
                  <p className="text-[11px] text-gray-300 mt-1">{n.time}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}