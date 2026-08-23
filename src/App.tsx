import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'
import Profile from './pages/dashboard/Profile'
import Resources from './pages/dashboard/Resources'
import Events from './pages/dashboard/Events'
import Rewards from './pages/dashboard/Rewards'
import Settings from './pages/dashboard/Settings'
import ApplicationPage from './pages/ApplicationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<ApplicationPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resources" element={<Resources />} />
          <Route path="events" element={<Events />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App