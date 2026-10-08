import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trilha from './pages/Trilha'; // Ajuste o caminho de importação conforme sua pasta

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal apontando para a página que acabamos de criar */}
        <Route path="/" element={<Trilha />} />

        {/* Você pode adicionar as outras páginas do menu lateral aqui no futuro */}
        {/* <Route path="/inicio" element={<Inicio />} /> */}
        {/* <Route path="/ranking" element={<Ranking />} /> */}
        {/* <Route path="/perfil" element={<Perfil />} /> */}
      </Routes>
    </BrowserRouter>
  );
}