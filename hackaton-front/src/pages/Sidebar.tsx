import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePlayer } from './usePlayer';

const Sidebar: React.FC = () => {
  const { jogador } = usePlayer();
  const avatar = jogador?.apelido
    ? `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(jogador.apelido)}`
    : 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM0x-t8sUKvgEQ8a4jS_c2ybOTeWjdgNeoO4-gtrq3p6YjwGVDQ4vgczbFWwO5o21ZZR2xHyeo8kqbLtyVVzahiQfXDLW2ZywGjh1QLiNnTvMInmBlnJQwPlsSUWgjyF2n3hvozjfTvEjNS0tPa6O2eVgr13_-2qAm17mCahcNx4w1232jY_mheTwIFR_oX6bOlr1yKvFqzigmlpGz9rCdj-68odRq6oLZVKusyaXY';
  const displayName = jogador?.apelido || 'Enrico';
  const level = jogador ? Math.floor((jogador.pontos / 200) + 1) : 4;

  const navItems = [
    { path: '/', label: 'Início', icon: 'cottage' },
    { path: '/aprender', label: 'Aprender', icon: 'menu_book' },
    { path: '/trilha', label: 'Trilha', icon: 'route' },
    { path: '/quiz', label: 'Praticar', icon: 'quiz' },
    { path: '/flashcards', label: 'Flashcards', icon: 'style' },
    { path: '/ranking', label: 'Ranking', icon: 'leaderboard' },
    { path: '/conquistas', label: 'Conquistas', icon: 'military_tech' },
    { path: '/perfil', label: 'Meu Perfil', icon: 'person' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-sidebar z-50 flex flex-col justify-between overflow-y-auto">
      <div className="flex flex-col">
        <div className="h-20 px-space-lg flex items-center gap-space-sm">
          <img
            alt="LinguaViva Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XDADVtLdk9uZoHZEqmxIL7IYJSWmPtk98OlVelhDj7UokFm0UzlOwC_pyo6AlomkBj-duQCfFuGUj0p4RF1e3c6BMZLf4KpXDv3cA2e3K1NNhCjucwsHt34vXjAvjVSmOdrIFlpRoO5UyL9i5rckxQnBXhSxDopQQENaU1n3P5_o8xCvObNmZBM9yxGvaqU0qv7jKW0cGj3KZHkBG1Yo2jhgzoyVGzcmnmUYVws8fZ"
          />
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Língua Viva</span>
        </div>
        <nav
          className="px-space-md py-space-sm flex flex-col gap-space-xs"
          data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-xl shadow-primary-glow"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all ${
                  isActive ? 'bg-primary-container text-on-primary-container font-bold shadow-primary-glow' : ''
                }`
              }
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="font-label-lg text-label-lg">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-space-md m-space-md rounded-xl bg-surface-container-lowest shadow-card flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={avatar} />
          <div className="flex flex-col min-w-0">
            <span className="font-label-md text-label-md text-on-surface truncate">{displayName}</span>
            <span className="font-label-sm text-label-sm text-primary">Nível {level} • Fluência Básica</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-space-xs">
          <div className="flex items-center gap-1 text-tertiary">
            <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
            <span className="font-label-sm text-label-sm font-bold">5 dias</span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            <span className="font-label-sm text-label-sm font-bold">
              {jogador ? jogador.pontos : 980} XP
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;