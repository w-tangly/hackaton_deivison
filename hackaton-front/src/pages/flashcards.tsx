import { useCallback, useEffect, useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Trophy, 
  Award, 
  User, 
  Flame, 
  Zap, 
  ArrowLeft, 
  RotateCw, 
  CheckCircle2, 
  Keyboard, 
  Cloud, 
  ChevronRight,
  GraduationCap,
  Sparkles,
  Target,
  CheckCircle,
  BookMarked
} from 'lucide-react';

interface Flashcard {
  id: number;
  category: string;
  level: string;
  concept: string;
  question: string;
  answer: string;
  details: string;
  examples: string[];
  familyTag: string;
}

interface Achievement {
  id: number;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
  progress: string;
}

type FlashcardTab = 'inicio' | 'aprender' | 'ranking' | 'conquistas' | 'perfil';

interface FlashcardsProps {
  initialTab?: FlashcardTab;
}

const flashcardsData: Flashcard[] = [
  {
    id: 4,
    category: "Morfologia • Estrutura dos Vocábulos",
    level: "Gramática Teórica • Nível A2",
    concept: "CONCEITO FUNDAMENTAL",
    question: "O que é radical?",
    answer: "Parte da palavra que carrega o significado básico, servindo de base comum para uma família de palavras cognatas.",
    details: "O radical é o elemento mórfico irreduzível que contém a significação fundamental do vocábulo.",
    examples: ["terr-a", "terr-eno", "terr-aço"],
    familyTag: "FAMÍLIA COGNATA"
  },
  {
    id: 5,
    category: "Morfologia • Estrutura dos Vocábulos",
    level: "Gramática Teórica • Nível A2",
    concept: "CONCEITO FUNDAMENTAL",
    question: "O que são vogais temáticas?",
    answer: "Elementos que se unem ao radical para preparar a terminação de desinências em nomes e verbos.",
    details: "Nos nomes, indicam gênero (o/a). Nos verbos, indicam a conjugação (1ª, 2ª ou 3ª).",
    examples: ["cant-a-r (1ª conj.)", "vend-e-r (2ª conj.)", "part-i-r (3ª conj.)"],
    familyTag: "VOGAL DE LIGAÇÃO / TEMÁTICA"
  },
  {
    id: 6,
    category: "Morfologia • Estrutura dos Vocábulos",
    level: "Gramática Teórica • Nível A2",
    concept: "CONCEITO FUNDAMENTAL",
    question: "O que são afixos (prefixos e sufixos)?",
    answer: "Morfemas derivacionais que se acoplam ao radical para formar novas palavras por derivação.",
    details: "Prefixos vêm antes do radical (ex: infeliz); sufixos vêm depois (ex: felicidade).",
    examples: ["in-til", "feliz-mente", "des-fazer"],
    familyTag: "DERIVAÇÃO"
  },
  {
    id: 7,
    category: "Morfologia • Processos de Formação",
    level: "Gramática Teórica • Nível B1",
    concept: "DERIVAÇÃO E COMPOSIÇÃO",
    question: "Qual a diferença entre Derivação Prefixal e Sufixal?",
    answer: "A prefixal acrescenta morfema antes do radical; a sufixal acrescenta depois.",
    details: "Existem também a parassíntese (quando ambos ocorrem simultaneamente e são obrigatórios) e a regressiva.",
    examples: ["infeliz (prefixal)", "infelicidade (sufixal)"],
    familyTag: "FORMAÇÃO DE PALAVRAS"
  },
  {
    id: 8,
    category: "Sintaxe • Orações Subordinadas",
    level: "Sintaxe Avançada • Nível B2",
    concept: "ANÁLISE SINTÁTICA",
    question: "O que caracteriza uma Oração Subordinada Substantiva Completo-Nominal?",
    answer: "É aquela que exerce a função sintática de complemento nominal de um nome (substantivo, adjetivo ou advérbio) da oração principal.",
    details: "Vem sempre introduzida por preposição e conectivo integrante (que/se).",
    examples: ["Tenho certeza [de que passará]."],
    familyTag: "SUBORDINADAS"
  }
];

const initialAchievements: Achievement[] = [
  { id: 1, title: "Iniciador Nativo", desc: "Complete 10 flashcards de morfologia", icon: "🌱", unlocked: true, progress: "10/10" },
  { id: 2, title: "Mestre da Sequência", desc: "Mantenha uma ofensiva de 5 dias", icon: "🔥", unlocked: true, progress: "5/5 dias" },
  { id: 3, title: "Erudito Sintático", desc: "Domine 50 conceitos gramaticais avançados", icon: "📜", unlocked: false, progress: "32/50" },
  { id: 4, title: "Poliglota da Pátria", desc: "Alinja 1.000 XP acumulados na plataforma", icon: "⚡", unlocked: true, progress: "980/1000" }
];

export default function Flashcards({ initialTab = 'aprender' }: FlashcardsProps) {
  const [activeTab, setActiveTab] = useState<FlashcardTab>(initialTab);
  const [currentIndex, setCurrentIndex] = useState<number>(4); 
  const [totalCards] = useState<number>(15);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [dominadosCount, setDominadosCount] = useState<number>(12);
  const [streak] = useState<number>(5);
  const [xp, setXp] = useState<number>(980);
  const [apiEndpoint, setApiEndpoint] = useState<string>(`'POST /flashcards/morf-004/revisar`);

  const currentCard = flashcardsData[(currentIndex - 4) % flashcardsData.length] || flashcardsData[0];

  const handleAnswer = useCallback((type: 'nao-sabia' | 'eu-sabia') => {
    setIsFlipped(false);
    if (type === 'eu-sabia') {
      setXp(prev => prev + 5);
      setDominadosCount(prev => prev + 1);
    }
    if (currentIndex < totalCards) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setApiEndpoint(`POST /flashcards/morf-00${(nextIdx % 9) + 1}/revisar`);
    } else {
      setCurrentIndex(4);
    }
  }, [currentIndex, totalCards]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && activeTab === 'aprender') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === '1' && activeTab === 'aprender') {
        handleAnswer('nao-sabia');
      } else if (e.key === '2' && activeTab === 'aprender') {
        handleAnswer('eu-sabia');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, handleAnswer, isFlipped]);

  return (
    <div className="flex h-screen bg-[#F4F6F9] font-sans text-slate-800 overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Brand Logo */}
          <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-100">
            <div className="bg-slate-900 text-white font-bold px-2.5 py-1.5 rounded-lg text-sm shadow-sm">
              LV
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">Língua Viva</span>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 py-6 space-y-1.5">
            <button 
              onClick={() => setActiveTab('inicio')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${activeTab === 'inicio' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Home className="w-5 h-5" />
              Início
            </button>
            <button 
              onClick={() => setActiveTab('aprender')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${activeTab === 'aprender' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <BookOpen className="w-5 h-5" />
              Aprender
            </button>
            <button 
              onClick={() => setActiveTab('ranking')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${activeTab === 'ranking' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Trophy className="w-5 h-5" />
              Ranking
            </button>
            <button 
              onClick={() => setActiveTab('conquistas')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${activeTab === 'conquistas' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Award className="w-5 h-5" />
              Conquistas
            </button>
            <button 
              onClick={() => setActiveTab('perfil')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${activeTab === 'perfil' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <User className="w-5 h-5" />
              Meu Perfil
            </button>
          </nav>
        </div>

        {/* User Stats Card at bottom */}
        <div className="p-4 m-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-700">
              👨🏽‍💻
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">Enrico</div>
              <div className="text-xs text-slate-500 font-medium">Nível 4 • Fluência Básica</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold pt-2 border-t border-slate-200/60">
            <div className="flex items-center gap-1 text-amber-600">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>{streak} dias</span>
            </div>
            <div className="flex items-center gap-1 text-blue-600">
              <Zap className="w-4 h-4 fill-blue-500" />
              <span>{xp} XP</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        
        {/* HEADER BAR */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 text-white font-bold px-2.5 py-1 rounded text-xs">LV</div>
            <h1 className="font-bold text-lg text-slate-900">Língua Viva</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 text-amber-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-2xs">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>{streak} dias</span>
            </div>

            <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200/60 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-2xs">
              <Zap className="w-4 h-4 fill-blue-500 text-blue-500" />
              <span>{xp} XP</span>
            </div>

            <div className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200">
              Nível 4
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-sm">
                👨🏽‍💻
              </div>
              <span className="font-bold text-sm text-slate-800">Enrico</span>
            </div>
          </div>
        </header>

        {/* CONDITIONAL RENDERING BASED ON ACTIVE TAB */}
        {activeTab === 'aprender' && (
          <>
            {/* SUBHEADER & PROGRESS */}
            <div className="px-8 pt-6 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setCurrentIndex(Math.max(1, currentIndex - 1))}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                    title="Voltar"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-0.5">
                      Morfologia & Estrutura • Repetição Espaçada
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900">Revisão com Flashcards</h2>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 text-blue-700 border border-blue-200/60 font-semibold px-4 py-2 rounded-xl text-sm">
                    Progresso: <span className="font-bold">Card {currentIndex} de {totalCards}</span>
                  </div>
                  <div className="bg-blue-50 text-blue-600 border border-blue-200/60 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-2xs">
                    <Zap className="w-3.5 h-3.5 fill-blue-500" />
                    +5 XP por termo
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-6">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(currentIndex / totalCards) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* FLASHCARD INTERACTIVE WORKSPACE */}
            <div className="px-8 max-w-5xl mx-auto w-full flex-1 flex flex-col pb-8">
              
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-slate-100 min-h-[360px] flex flex-col justify-between cursor-pointer transition-all hover:border-blue-300 group overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/30"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    {currentCard.category}
                  </div>
                  <div className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    {isFlipped ? "Ver pergunta" : "Clique para virar"}
                  </div>
                </div>

                <div className="my-8 text-center px-4">
                  {!isFlipped ? (
                    <div className="space-y-3 animate-fadeIn">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                        {currentCard.concept}
                      </span>
                      <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                        {currentCard.question}
                      </h3>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fadeIn">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                        Resposta Correta
                      </span>
                      <p className="text-2xl font-bold text-slate-800 leading-snug">
                        {currentCard.answer}
                      </p>
                      <p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">
                        {currentCard.details}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {currentCard.examples.map((ex, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-mono font-bold">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>{currentCard.level}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase">
                      {currentCard.familyTag}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlipped(!isFlipped);
                      }}
                      className="text-blue-600 font-bold flex items-center gap-1 hover:underline"
                    >
                      {isFlipped ? "Ocultar resposta" : "Revelar resposta"}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <button
                  onClick={() => handleAnswer('nao-sabia')}
                  className="flex items-center justify-between bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 p-5 rounded-2xl shadow-sm transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <RotateCw className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-base">Não sabia</div>
                      <div className="text-xs text-slate-500 font-medium">Repetir no ciclo curto</div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center border border-slate-200">
                    1
                  </div>
                </button>

                <button
                  onClick={() => handleAnswer('eu-sabia')}
                  className="flex items-center justify-between bg-emerald-700 hover:bg-emerald-800 border border-emerald-800 p-5 rounded-2xl shadow-lg shadow-emerald-700/20 transition-all text-left group text-white cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">Eu sabia (+5 XP)</div>
                      <div className="text-xs text-emerald-100 font-medium">Fixação memorizada com sucesso</div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border border-emerald-500">
                    2
                  </div>
                </button>
              </div>

              {/* KEYBOARD SHORTCUTS LEGEND */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-semibold bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                    <Keyboard className="w-4 h-4 text-slate-400" />
                    <span>Atalhos:</span>
                  </div>
                  <span className="flex items-center gap-1"><kbd className="bg-white px-2 py-1 rounded border border-slate-200 shadow-2xs font-semibold text-slate-700">Espaço</kbd> Virar</span>
                  <span className="flex items-center gap-1"><kbd className="bg-white px-2 py-1 rounded border border-slate-200 shadow-2xs font-semibold text-slate-700">1</kbd> Não Sabia</span>
                  <span className="flex items-center gap-1"><kbd className="bg-white px-2 py-1 rounded border border-slate-200 shadow-2xs font-semibold text-slate-700">2</kbd> Eu Sabia</span>
                </div>

                <div className="flex items-center gap-2 font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60">
                  <Trophy className="w-4 h-4 text-emerald-600" />
                  <span>{dominadosCount} dominados hoje</span>
                </div>
              </div>

              {/* API STATUS BAR */}
              <div className="mt-4 bg-white border border-slate-200/80 rounded-xl px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-xs shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-semibold text-slate-700">Sincronização Ativa:</span>
                  <code className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded font-mono font-bold text-[11px] border border-blue-200/60">
                    {apiEndpoint}
                  </code>
                </div>

                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <Cloud className="w-4 h-4 text-slate-400" />
                  <span>Algoritmo SM-2 (SuperMemo)</span>
                </div>
              </div>

            </div>
          </>
        )}

        {activeTab === 'inicio' && (
          <div className="p-8 max-w-5xl mx-auto w-full">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl mb-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <span className="bg-blue-500/40 text-blue-100 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">Painel Principal</span>
                <h2 className="text-3xl font-black mt-2">Bem-vindo de volta, Enrico! 🚀</h2>
                <p className="text-blue-100 mt-2 max-w-xl text-sm leading-relaxed">
                  Sua ofensiva de estudos está em <strong className="text-amber-300">5 dias consecutivos</strong>. Continue revisando seus flashcards de morfologia e sintaxe para alcançar o Nível 5.
                </p>
                <button 
                  onClick={() => setActiveTab('aprender')}
                  className="mt-6 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  Continuar Aprendendo
                </button>
              </div>
              <div className="mt-6 md:mt-0 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 text-center min-w-[200px]">
                <div className="text-xs uppercase tracking-wider text-blue-200 font-bold">Total Acumulado</div>
                <div className="text-4xl font-black mt-1 text-amber-300">{xp} XP</div>
                <div className="text-xs text-blue-100 mt-1">Meta diária: 100 XP</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                  <BookMarked className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Morfologia Básica</h3>
                <p className="text-xs text-slate-500 mt-1">Estrutura e formação de vocábulos na língua portuguesa.</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                  <span className="text-blue-600">85% Concluído</span>
                  <span className="text-slate-400">12/15 cards</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Sintaxe Avançada</h3>
                <p className="text-xs text-slate-500 mt-1">Orações subordinadas substantivas e adjetivas.</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                  <span className="text-emerald-600">40% Concluído</span>
                  <span className="text-slate-400">6/15 cards</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Revisão Espaçada</h3>
                <p className="text-xs text-slate-500 mt-1">Algoritmo SM-2 otimizado para fixação de longo prazo.</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                  <span className="text-amber-600">Ativo</span>
                  <span className="text-slate-400">Pronto para hoje</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ranking' && (
          <div className="p-8 max-w-4xl mx-auto w-full">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Ranking Global da Comunidade</h2>
            <p className="text-sm text-slate-500 mb-6">Veja sua posição em relação a outros estudantes de Língua Portuguesa.</p>
            
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              {[
                { pos: 1, name: "Mariana Souza", xp: 2450, badge: "🥇 Mestre" },
                { pos: 2, name: "Carlos Eduardo", xp: 2120, badge: "🥈 Especialista" },
                { pos: 3, name: "Enrico (Você)", xp, badge: "🥉 Nível 4", active: true },
                { pos: 4, name: "Beatriz Lima", xp: 910, badge: "Estudante" },
                { pos: 5, name: "Lucas Mendes", xp: 840, badge: "Estudante" }
              ].map((user, idx) => (
                <div key={idx} className={`flex items-center justify-between p-4 border-b border-slate-100 ${user.active ? 'bg-blue-50/60 font-bold' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className={`w-8 text-center font-bold text-sm ${idx < 3 ? 'text-amber-600' : 'text-slate-500'}`}>#{user.pos}</span>
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm">👤</div>
                    <div>
                      <div className="text-slate-900 text-sm font-bold">{user.name}</div>
                      <div className="text-xs text-slate-500">{user.badge}</div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-black text-sm">{user.xp} XP</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'conquistas' && (
          <div className="p-8 max-w-4xl mx-auto w-full">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Suas Conquistas</h2>
            <p className="text-sm text-slate-500 mb-6">Desbloqueie medalhas exclusivas completando ciclos de estudo.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initialAchievements.map((ach) => (
                <div key={ach.id} className={`p-5 rounded-2xl border flex items-center justify-between ${ach.unlocked ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-50 border-slate-200 opacity-70'}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200">
                      {ach.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{ach.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{ach.desc}</p>
                      <span className={`inline-block mt-2 text-[10px] font-extrabold px-2 py-0.5 rounded ${ach.unlocked ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                        {ach.progress}
                      </span>
                    </div>
                  </div>
                  {ach.unlocked && <CheckCircle className="w-6 h-6 text-emerald-500" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'perfil' && (
          <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center">
              <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto flex items-center justify-center text-4xl shadow-inner mb-4">
                👨🏽‍💻
              </div>
              <h2 className="text-2xl font-black text-slate-900">Enrico</h2>
              <p className="text-xs text-slate-500 font-medium mt-1">Membro desde Março de 2026 • Nível 4</p>
              
              <div className="grid grid-cols-3 gap-4 my-8 max-w-lg mx-auto border-y border-slate-100 py-6">
                <div>
                  <div className="text-2xl font-black text-slate-900">{xp}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase mt-1">XP Total</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-500">{streak} dias</div>
                  <div className="text-xs text-slate-500 font-bold uppercase mt-1">Ofensiva</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-600">{dominadosCount}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase mt-1">Dominados</div>
                </div>
              </div>

              <div className="text-left max-w-md mx-auto space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Progresso para o Nível 5</span>
                  <span>980 / 1200 XP</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '81%' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}