import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import { PlayerProvider } from './pages/PlayerContext';

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md">
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/aprender" element={<Dashboard />} />
            <Route path="/ranking" element={<Dashboard />} />
            <Route path="/conquistas" element={<Dashboard />} />
            <Route path="/perfil" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </PlayerProvider>
  );
}
