import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import { PlayerProvider } from './pages/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <Router>
        <div className="min-h-screen bg-surface text-on-surface font-body-md">
          <Sidebar />
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/aprender" element={<Dashboard />} />
            <Route path="/ranking" element={<Dashboard />} />
            <Route path="/conquistas" element={<Dashboard />} />
            <Route path="/perfil" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </PlayerProvider>
  );
}

export default App;