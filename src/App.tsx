import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import HomePage from "./pages/HomePage";
// Updated to target the nested application folder
import ApplicationPage from "./pages/ApplicationPage";

// Dashboard Layout & Pages 
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome"; 
import ProfilePage from "./pages/dashboard/Profile";
import ResourcesPage from "./pages/dashboard/Resources";
import EventsPage from "./pages/dashboard/Events";
import RewardsPage from "./pages/dashboard/Rewards";
import SettingsPage from "./pages/dashboard/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/application" element={<ApplicationPage />} />

        {/* Authenticated Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
