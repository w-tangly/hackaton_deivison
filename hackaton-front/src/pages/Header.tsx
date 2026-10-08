import React from 'react';
import { usePlayer } from './usePlayer';

const Header: React.FC = () => {
  const { jogador } = usePlayer();
  const avatar = jogador?.apelido
    ? `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(jogador.apelido)}`
    : 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM0x-t8sUKvgEQ8a4jS_c2ybOTeWjdgNeoO4-gtrq3p6YjwGVDQ4vgczbFWwO5o21ZZR2xHyeo8kqbLtyVVzahiQfXDLW2ZywGjh1QLiNnTvMInmBlnJQwPlsSUWgjyF2n3hvozjfTvEjNS0tPa6O2eVgr13_-2qAm17mCahcNx4w1232jY_mheTwIFR_oX6bOlr1yKvFqzigmlpGz9rCdj-68odRq6oLZVKusyaXY';
  const displayName = jogador?.apelido || 'Enrico';
  const level = jogador ? Math.floor((jogador.pontos / 200) + 1) : 4;

  return (
    <header className="fixed top-0 left-72 right-0 h-20 bg-surface/80 backdrop-blur-xl shadow-header z-40 flex items-center justify-between px-margin">
      <div className="flex items-center gap-space-sm">
        <img
          alt="LinguaViva Logo"
          className="h-8 w-auto object-contain"
          src="https://lh3.googleusercontent.com/aida/AEtjO1XDADVtLdk9uZoHZEqmxIL7IYJSWmPtk98OlVelhDj7UokFm0UzlOwC_pyo6AlomkBj-duQCfFuGUj0p4RF1e3c6BMZLf4KpXDv3cA2e3K1NNhCjucwsHt34vXjAvjVSmOdrIFlpRoO5UyL9i5rckxQnBXhSxDopQQENaU1n3P5_o8xCvObNmZBM9yxGvaqU0qv7jKW0cGj3KZHkBG1Yo2jhgzoyVGzcmnmUYVws8fZ"
        />
        <span className="font-headline-sm text-headline-sm text-on-surface">Língua Viva</span>
      </div>
      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-highest text-tertiary shadow-inner-sm">
          <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
          <span className="font-label-md text-label-md font-bold">5 dias</span>
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-variant text-primary shadow-inner-sm">
          <span className="material-symbols-outlined text-[18px]">bolt</span>
          <span className="font-label-md text-label-md font-bold">
            {jogador ? jogador.pontos : 980} XP
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface">
          <span className="font-label-md text-label-md font-semibold">Nível {level}</span>
        </div>
        <div className="flex items-center gap-space-sm pl-space-xs">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={avatar} />
          <span className="font-label-md text-label-md text-on-surface font-semibold hidden md:inline">
            {displayName}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;