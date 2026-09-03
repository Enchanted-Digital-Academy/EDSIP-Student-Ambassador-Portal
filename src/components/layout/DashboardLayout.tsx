import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Go up one level to "components", then into "dashboard"
import Sidebar from '../dashboard/Sidebar';
import TopNav from '../dashboard/TopNav';

// Go up two levels to "src", then into "data"
import { mockProfile } from '../../data/mockDashboard';
export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <TopNav onOpenMobile={() => setMobileOpen(true)} userName={mockProfile.name} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}