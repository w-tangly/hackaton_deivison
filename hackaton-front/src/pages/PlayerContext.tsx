import React, { useState, useCallback } from 'react';
import type { Jogador, RankingResponse } from './index';
import apiService from './api';
import { PlayerContext, type PlayerContextType } from './PlayerContextValue';

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jogador, setJogadorState] = useState<Jogador | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setJogador = useCallback((j: Jogador) => {
    setJogadorState(j);
    localStorage.setItem('apelido', j.apelido);
  }, []);

  const loadJogador = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const apelido = localStorage.getItem('apelido') || 'Enrico';
      if (!localStorage.getItem('apelido')) {
        localStorage.setItem('apelido', apelido);
      }
      const data = await apiService.getJogador(apelido);
      setJogador(data);
      localStorage.setItem('apelido', data.apelido);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar jogador');
      const apelido = localStorage.getItem('apelido') || 'Enrico';
      setJogador({
        apelido,
        pontos: 980,
        acertos: 0,
        erros: 0,
      });
    } finally {
      setLoading(false);
    }
  }, [setJogador]);

  const refreshJogador = useCallback(async () => {
    await loadJogador();
  }, [loadJogador]);

  const getRanking = useCallback(async (): Promise<RankingResponse | null> => {
    try {
      return await apiService.getRanking();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar ranking');
      return null;
    }
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadJogador();
  }, [loadJogador]);

  const value: PlayerContextType = {
    jogador,
    loading,
    error,
    setJogador,
    refreshJogador,
    getRanking,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;