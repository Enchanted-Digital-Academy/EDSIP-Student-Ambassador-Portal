import { NavLink } from 'react-router-dom';
import {
  Home, User, BookOpen, Calendar, Award, Settings,
  ChevronLeft, ChevronRight, X,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home, end: true },
  { to: '/dashboard/profile', label: 'Profile', icon: User },
  { to: '/dashboard/resources', label: 'Resources', icon: BookOpen },
  { to: '/dashboard/events', label: 'Events', icon: Calendar },
  { to: '/dashboard/rewards', label: 'Rewards', icon: Award },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen bg-white flex flex-col
          shadow-[4px_0_24px_-8px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
          ${collapsed ? 'w-[84px]' : 'w-60'}`}
      >
        {/* Logo */}
        <div
          className={`flex items-center h-20 border-b border-gray-100 shrink-0 ${
            collapsed ? 'justify-center px-2' : 'justify-between px-5'
          }`}
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <img src={logo} alt="EDSIP logo" className="w-10 h-10 shrink-0 object-contain" />
            {!collapsed && (
              <span className="font-semibold text-gray-900 text-sm leading-tight">
                EDSIP Ambassador Portal
              </span>
            )}
          </div>
          <button
            onClick={onCloseMobile}
            className="lg:hidden text-gray-400 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav — elevated tiles */}
        <nav className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all border
                ${collapsed ? 'justify-center' : ''}
                ${
                  isActive
                    ? 'bg-white shadow-[0_4px_16px_-2px_rgba(248,168,37,0.35)] border-amber-100 text-gray-900'
                    : 'text-gray-500 hover:bg-gray-50 border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={18} className="shrink-0" style={{ color: isActive ? '#F8A825' : undefined }} />
                  {!collapsed && <span className="truncate">{label}</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Collapse toggle — desktop only */}
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex mx-3 mb-4 items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-100 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors text-xs font-medium shrink-0"
        >
          {collapsed ? <ChevronRight size={16} /> : <><ChevronLeft size={16} /> Collapse</>}
        </button>
      </aside>
    </>
  );
}