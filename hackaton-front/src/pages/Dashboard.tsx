import React, { useState, useEffect } from 'react';
import type { ModuleProgress, ActivityMode, Difficulty } from './index';
import ModuleCard from './ModuleCard';
import ActivityCard from './ActivityCard';
import Toast from './Toast';
import { usePlayer } from './usePlayer';

const MODULES: ModuleProgress[] = [
  {
    id: 'sintaxe',
    title: 'Sintaxe',
    description: 'Termos Essenciais e Integrantes',
    progress: 80,
    totalLessons: 10,
    completedLessons: 8,
    estimatedTime: '15 min restantes',
    color: 'primary',
    endpoint: 'http://127.0.0.1:5000/aulas/sintaxe',
    icon: 'account_tree',
  },
  {
    id: 'morfologia',
    title: 'Morfologia',
    description: 'Classes de Palavras e Flexões',
    progress: 60,
    totalLessons: 10,
    completedLessons: 6,
    estimatedTime: '28 min restantes',
    color: 'secondary',
    endpoint: 'http://127.0.0.1:5000/aulas/morfologia',
    icon: 'layers',
  },
  {
    id: 'pragmatica',
    title: 'Pragmática',
    description: 'Contexto, Coerência e Atos de Fala',
    progress: 40,
    totalLessons: 10,
    completedLessons: 4,
    estimatedTime: '45 min restantes',
    color: 'default',
    endpoint: 'http://127.0.0.1:5000/aulas/pragmatica',
    icon: 'forum',
  },
  {
    id: 'revisao',
    title: 'Revisão Geral',
    description: 'Exercícios Cumulativos Fixadores',
    progress: 20,
    totalLessons: 10,
    completedLessons: 2,
    estimatedTime: '55 min restantes',
    color: 'tertiary',
    endpoint: 'http://127.0.0.1:5000/aulas/revisao',
    icon: 'published_with_changes',
  },
];

const ACTIVITIES: ActivityMode[] = [
  {
    id: 'quiz',
    title: 'Quiz de Português',
    description: 'Teste seus conhecimentos com perguntas dinâmicas de múltipla escolha.',
    endpoint: '/quiz/',
    xpReward: 10,
    icon: 'quiz',
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: 'Revise conceitos gramaticais e semânticos essenciais.',
    endpoint: '/flashcards/',
    xpReward: 5,
    icon: 'style',
  },
  {
    id: 'lacunas',
    title: 'Complete a frase',
    description: 'Escolha a palavra ou regência que preenche a lacuna corretamente.',
    endpoint: '/complete/',
    xpReward: 15,
    icon: 'spellcheck',
  },
];

const DIFFICULTIES = [
  { value: 'facil', label: 'Fácil', xp: 10 },
  { value: 'medio', label: 'Médio', xp: 20 },
  { value: 'dificil', label: 'Difícil', xp: 30 },
];

const Dashboard: React.FC = () => {
  const [selectedQuizDiff, setSelectedQuizDiff] = useState<Difficulty>('facil');
  const [toast, setToast] = useState<{ visible: boolean; title: string; message: string; type: 'success' | 'loading' }>({
    visible: false,
    title: '',
    message: '',
    type: 'success',
  });
  const { jogador } = usePlayer();

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

  const showToast = (title: string, message: string, type: 'success' | 'loading' = 'success') => {
    setToast({ visible: true, title, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  };

  const handleResumeModule = (module: ModuleProgress) => {
    showToast(`Retomando: ${module.title}`, `Chamada REST para ${module.endpoint}`, 'success');
  };

  const handleStartActivity = (activity: ActivityMode) => {
    const endpoint = `${API_BASE_URL}${activity.endpoint}`;
    const titleMap: Record<string, string> = {
      quiz: 'Iniciando Quiz de Português',
      flashcards: 'Abrindo Flashcards',
      lacunas: 'Desafio de Lacunas',
    };
    const messageMap: Record<string, string> = {
      quiz: `Rota: ${API_BASE_URL}/quiz/?dificuldade=${selectedQuizDiff} (+${DIFFICULTIES.find(d => d.value === selectedQuizDiff)?.xp || 10} XP)`,
      flashcards: `Conectando a ${endpoint}`,
      lacunas: `Carregando frases em ${endpoint}`,
    };
    const title = titleMap[activity.id] || `Iniciando ${activity.title}`;
    const message = messageMap[activity.id] || `Conectando a ${endpoint}`;
    showToast(title, message, 'success');
  };

  const handleContinueMaster = () => {
    showToast('Continuando Estudos', 'Retomando aula mais prioritária: Sintaxe...', 'success');
  };

  const handleCopyTip = () => {
    showToast('Dica Salva no Caderno', 'Você pode revisá-la na aba "Meu Perfil".', 'success');
  };

  useEffect(() => {
    const checkApiHealth = async () => {
      try {
        await fetch(`${API_BASE_URL}/`, { method: 'GET' });
      } catch (err) {
        console.warn('API health check failed:', err);
      }
    };
    checkApiHealth();
  }, [API_BASE_URL]);

  const dailyGoalProgress = jogador ? Math.min(100, Math.floor((jogador.pontos / 300) * 100)) : 66;
  const completedActivities = jogador ? Math.floor(jogador.pontos / 150) : 2;
  const xpToday = jogador ? Math.floor(jogador.pontos % 200) : 45;

  return (
    <div className="pl-72">
      <main className="relative pt-20 w-full px-margin">
        <div className="flex flex-col w-full pb-16">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-24 right-10 w-96 h-96 bg-primary-fixed-40 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-12 left-1/3 w-64 h-64 bg-secondary-fixed-30 rounded-full blur-3xl pointer-events-none"></div>

            <section className="relative pt-6 pb-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Jornada Ativa • Trilha Clássica
                    </span>
                  </div>
                  <h1 className="font-display text-display text-on-surface tracking-tight">
                    Olá, {jogador?.apelido || 'Enrico'}! <span className="text-primary font-bold">Pronto para praticar hoje?</span>
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Retome seu percurso gramatical onde parou e consolide seu domínio da língua culta com exercícios guiados e ritmo contínuo.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
                    onClick={handleContinueMaster}
                  >
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-12">
                      play_arrow
                    </span>
                    <span>Continuar aprendendo</span>
                  </button>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-surface-container-lowest shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 flex flex-col justify-between gap-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-surface-container-high text-primary">
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                        </span>
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          Nível {jogador ? Math.floor((jogador.pontos / 200) + 1) : 4} • Fluência Básica
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm font-bold text-primary">
                        {jogador ? jogador.pontos : 720} / 1000 XP
                      </span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden p-0.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-container transition-all duration-700 ease-out"
                        style={{ width: `${jogador ? Math.min(100, (jogador.pontos / 10)) : 72}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-label-sm text-label-sm">
                        Faltam {1000 - (jogador ? jogador.pontos : 720)} XP para Nível 5
                      </span>
                      <span className="font-label-sm text-label-sm font-bold">
                        {jogador ? Math.min(100, Math.floor(jogador.pontos / 10)) : 72}%
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex md:col-span-1 justify-center">
                    <div className="h-10 w-px bg-surface-container-highest"></div>
                  </div>

                  <div className="md:col-span-3 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">local_fire_department</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="font-headline-md text-headline-md text-on-surface font-extrabold">5</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">dias</span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant">Sequência ativa ininterrupta</span>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">target</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="font-headline-md text-headline-md text-on-surface font-extrabold">82%</span>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">+4% semana</span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant">Precisão média global</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-2">
              <div className="lg:col-span-8 flex flex-col gap-10">
                <section className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">auto_stories</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Continue aprendendo</h2>
                    </div>
                    <a
                      className="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-1"
                      href="#"
                    >
                      Ver grade completa
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {MODULES.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        onResume={handleResumeModule}
                      />
                    ))}
                  </div>
                </section>

                <section className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Modos de Atividade Rápida</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Pausas ativas e desafios cronometrados para consolidar a memória muscular
                      </p>
                    </div>
                    <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      <span className="font-mono text-label-sm opacity-80">{API_BASE_URL}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {ACTIVITIES.map((activity) => (
                      <ActivityCard
                        key={activity.id}
                        activity={activity}
                        onStart={handleStartActivity}
                        selectedDifficulty={selectedQuizDiff}
                        onDifficultyChange={(diff) => setSelectedQuizDiff(diff as Difficulty)}
                        difficulties={activity.id === 'quiz' ? DIFFICULTIES : undefined}
                        showDifficulty={activity.id === 'quiz'}
                      />
                    ))}
                  </div>
                </section>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[22px]">flag_circle</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Metas de Hoje</h3>
                    </div>
                    <span className="font-label-sm text-label-sm font-bold text-secondary bg-secondary-container px-2 py-0.5 rounded-full">
                      {dailyGoalProgress}% concluído
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-headline-md text-headline-md text-on-surface font-bold">{completedActivities} / 3</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Atividades concluídas</span>
                    </div>
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-surface-container-highest"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                        />
                        <path
                          className="text-secondary"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray={`${dailyGoalProgress}, 100`}
                          strokeLinecap="round"
                          strokeWidth="3.5"
                        />
                      </svg>
                      <span className="absolute font-label-sm text-label-sm font-bold text-on-surface">{completedActivities}/3</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary">bolt</span>
                        <span className="font-label-md text-label-md text-on-surface">XP acumulado hoje</span>
                      </div>
                      <span className="font-label-md text-label-md font-bold text-primary">+{xpToday} XP</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">timer</span>
                        <span className="font-label-md text-label-md text-on-surface">Tempo de estudo ativo</span>
                      </div>
                      <span className="font-label-md text-label-md font-bold text-on-surface">24 min</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                        <span className="font-label-md text-label-md text-on-surface">Meta de amanha</span>
                      </div>
                      <span className="font-label-md text-label-md font-bold text-on-surface-variant">3 atividades</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                      Complete mais <strong className="text-on-surface">1 atividade</strong> para proteger sua ofensiva de {jogador ? '5' : '5'} dias!
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-surface-container-high relative overflow-hidden flex flex-col justify-between gap-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                      <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">Dica Gramatical do Dia</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                      A crase antes de horas exatas
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Usa-se sempre crase antes de numerais que indicam horas exatas: <em>"As 14h nos reuniremos"</em>. Porém, se houver preposicoes como <strong>desde</strong>, <strong>para</strong> ou <strong>apos</strong>, a crase nao ocorre: <em>"Estou aqui desde as 14h"</em>.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-mono text-label-sm text-on-surface-variant">Regra #42 • Sintaxe</span>
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm transition-all shadow-sm"
                      onClick={handleCopyTip}
                    >
                      <span className="material-symbols-outlined text-[16px]">bookmark</span>
                      <span>Salvar nota</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-low flex items-center justify-between text-on-surface-variant">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">API Flask Operacional</span>
                      <span className="font-mono text-[11px] text-on-surface-variant">{API_BASE_URL}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-secondary">cloud_done</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Toast
        title={toast.title}
        message={toast.message}
        isVisible={toast.visible}
         type={toast.type}
       />
    </div>
  );
};

export default Dashboard;