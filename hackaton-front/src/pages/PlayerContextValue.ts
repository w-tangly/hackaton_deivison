import { createContext } from 'react';
import type { Jogador, RankingResponse } from './index';

export interface PlayerContextType {
  jogador: Jogador | null;
  loading: boolean;
  error: string | null;
  setJogador: (jogador: Jogador) => void;
  refreshJogador: () => Promise<void>;
  getRanking: () => Promise<RankingResponse | null>;
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default PlayerContext;