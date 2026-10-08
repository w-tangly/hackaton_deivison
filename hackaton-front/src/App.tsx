import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import { PlayerProvider } from './pages/PlayerContext';
import Aprender from './pages/aprender';
import Flashcards from './pages/flashcards';
import Trilha from './pages/Trilha';

function DashboardLayout() {
  return (
    <PlayerProvider>
      <div className="min-h-screen bg-surface text-on-surface font-body-md">
        <Sidebar />
        <Header />
        <Outlet />
      </div>
    </PlayerProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/trilha" element={<Trilha />} />
        <Route path="/quiz" element={<Aprender />} />
        <Route path="/flashcards" element={<Flashcards key="flashcards" />} />
        <Route path="/ranking" element={<Flashcards key="ranking" initialTab="ranking" />} />
        <Route path="/conquistas" element={<Flashcards key="conquistas" initialTab="conquistas" />} />
        <Route path="/perfil" element={<Flashcards key="perfil" initialTab="perfil" />} />
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/aprender" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
