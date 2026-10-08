import {
  Home, BookOpen, BarChart2, Award, User,
  CheckCircle2, Lock, ArrowRight, PlayCircle,
  Zap, Layout, CheckSquare,
  Clock, BookMarked, Video
} from 'lucide-react';
import './Trilha.css';

// --- DADOS MOCKADOS ---
const userMock = {
  nome: "Enrico",
  diasSeguidos: 5,
  xp: 980,
  nivel: 4,
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Enrico&backgroundColor=b6e3f4"
};

const modulosMock = [
  {
    id: '01',
    numero: '01',
    tema: 'MÓDULO 01 • DOMINÂNCIA ATIVA',
    status: 'Em andamento avançado',
    tempoRestante: '-35 min restantes',
    titulo: 'Sintaxe da Oração & do Período',
    descricao: 'Domínio da arquitetura frasal: relações de regência, subordinação e a dinâmica do predicado na prosa elegante.',
    concluidos: 4,
    total: 5,
    porcentagem: '80%',
    topicos: [
      { nome: 'Sujeito e Predicado', status: 'concluido' },
      { nome: 'Transitividade Verbal', status: 'concluido' },
      { nome: 'Concordância Sintá...', status: 'atual' },
      { nome: 'Orações Subordin...', status: 'bloqueado' }
    ],
    botoesAcao: [
      { texto: 'Quiz Prático', xp: '+20 XP', tipo: 'primario' },
      { texto: 'Desafio de Frases', xp: '+15 XP', tipo: 'secundario' }
    ],
    acaoPrincipal: 'Continuar Sintaxe'
  },
  {
    id: '02',
    numero: '02',
    tema: 'MÓDULO 02 • ESTRUTURA LEXICAL',
    status: 'Em andamento',
    tempoRestante: '10 Classes Gramaticais',
    titulo: 'Morfologia & Mecânica Flexional',
    descricao: 'Análise morfológica profunda: desinências modo-temporais, sufixação erudita e o papel do verbo nas modulações semânticas.',
    concluidos: 3,
    total: 5,
    porcentagem: '60%',
    topicos: [
      { nome: 'Classes de Palavras', status: 'concluido_simples' },
      { nome: 'Estrutura e Formação', status: 'concluido_simples' },
      { nome: 'Flexão Verbal (Subjuntivo & Infinitivo)', status: 'atual_simples' },
      { nome: 'Prefixos Neolatinos', status: 'bloqueado' }
    ],
    botoesAcao: [
      { texto: 'Flashcards de Radicais', xp: '+5 XP', tipo: 'terciario' }
    ],
    acaoPrincipal: 'Retomar Módulo'
  },
  {
    id: '03',
    numero: '03',
    tema: 'MÓDULO 03 • DISCURSO & RETÓRICA',
    status: 'Em andamento',
    tempoRestante: 'Subjetividade e Ênfase',
    titulo: 'Pragmática & Expressividade',
    descricao: 'Compreensão contextual além do dicionário: atos de fala, subentendidos, ironia e a aplicação sofisticada de figuras estilísticas.',
    concluidos: 2,
    total: 5,
    porcentagem: '40%',
    topicos: [
      { nome: 'Contexto e Intenção Comunicativa', status: 'incompleto' },
      { nome: 'Figuras de Linguagem', status: 'incompleto_azul' }
    ],
    botoesAcao: [
      { texto: 'Complete os Textos', xp: '+15 XP', tipo: 'verde' }
    ],
    acaoPrincipal: 'Praticar'
  },
  {
    id: '04',
    numero: '04',
    tema: 'MÓDULO 04 • SÍNTESE & MAESTRIA',
    status: 'Prática Mista Consolidada',
    tempoRestante: 'Testes Adaptativos',
    titulo: 'Revisão Geral e Casos Limítrofes',
    descricao: 'Exercícios cruzados envolvendo concordância atrativa, próclise obrigatória em textos acadêmicos e nuances de ambiguidade.',
    concluidos: 1,
    total: 5,
    porcentagem: '20%',
    topicos: [],
    botoesAcao: [
      { texto: 'Maratona Mista de 10 Questões', xp: '+30 XP', tipo: 'laranja' }
    ],
    acaoPrincipal: 'Revisar Tudo'
  }
];

export default function Trilha() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">

      {/* 1. SIDEBAR ESQUERDA */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col pt-6 pb-6 shadow-[2px_0_15px_rgba(0,0,0,0.02)] z-10">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
             {/* Logo Placeholder */}
             <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">Língua<br/><span className="text-blue-600">Viva</span></span>
        </div>

        <nav className="flex-1 px-4 space-y-1.5">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 font-medium transition-colors">
            <Home size={20} strokeWidth={2.5} /> Início
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-[0_4px_12px_rgba(37,99,235,0.2)]">
            <BookOpen size={20} strokeWidth={2.5} /> Aprender
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 font-medium transition-colors">
            <BarChart2 size={20} strokeWidth={2.5} /> Ranking
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 font-medium transition-colors">
            <Award size={20} strokeWidth={2.5} /> Conquistas
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 font-medium transition-colors">
            <User size={20} strokeWidth={2.5} /> Meu Perfil
          </a>
        </nav>
      </aside>

      {/* 2. ÁREA CENTRAL */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="flex items-center gap-5 text-sm font-semibold">
            <div className="flex items-center gap-1.5 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <Clock size={16} className="text-orange-500" />
              <span>{userMock.diasSeguidos} dias</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <Zap size={16} className="text-blue-500" fill="currentColor" />
              <span>{userMock.xp} XP</span>
            </div>
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <span className="text-slate-600">Nível {userMock.nivel}</span>
              <div className="flex items-center gap-2">
                <img src={userMock.avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full bg-blue-100 border border-slate-200" />
                <span className="text-slate-800">{userMock.nome}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-10 hide-scrollbar pb-24">
          <div className="max-w-4xl mx-auto">

            {/* Header da Trilha */}
            <div className="flex justify-between items-end mb-10">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  TRILHA ESTRUTURADA • 2026
                  <span className="text-slate-300 mx-1">•</span>
                  <span className="text-slate-500">Gramática Aplicada & Redação Culta</span>
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Trilha de Maestria</h1>
                <p className="text-slate-500 text-base max-w-xl leading-relaxed">
                  Progressão analítica orientada por módulos essenciais. Do rigor da oração à precisão pragmática do discurso.
                </p>
              </div>

              {/* Toggles (Visão Linear / Diagnóstico) */}
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/60">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
                  <Layout size={16} /> Visão Linear
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  <CheckSquare size={16} /> Diagnóstico Sintático
                </button>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="timeline-container pl-1">
              <div className="space-y-12">

                {modulosMock.map((modulo, index) => (
                  <div key={modulo.id} className="relative flex gap-8 z-10">

                    {/* Indicador Numérico (Bolinha) */}
                    <div className="flex flex-col items-center gap-2 mt-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ring-4 ring-[#F8FAFC] z-10
                        ${index === 0 ? 'bg-blue-600 text-white shadow-md' : 'bg-white border-2 border-slate-200 text-slate-400'}`}>
                        {modulo.numero}
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">{modulo.porcentagem}</span>
                    </div>

                    {/* Card do Módulo */}
                    <div className={`flex-1 bg-white rounded-2xl p-7 shadow-sm border transition-all hover:shadow-md
                      ${index === 0 ? 'border-blue-200 ring-1 ring-blue-50' : 'border-slate-200'}`}>

                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md
                            ${index === 0 ? 'text-blue-700 bg-blue-50' :
                              index === 3 ? 'text-orange-700 bg-orange-50' : 'text-slate-600 bg-slate-100'}`}>
                            {modulo.tema}
                          </span>
                          <span className={`text-xs font-semibold flex items-center gap-1
                            ${index === 0 ? 'text-green-600' : 'text-slate-400'}`}>
                            {index === 0 && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>}
                            {modulo.status}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-slate-500 flex items-center gap-1.5">
                            <Clock size={14} /> {modulo.tempoRestante}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-end mb-4">
                        <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{modulo.titulo}</h3>
                        <span className="text-sm font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                          {modulo.concluidos} de {modulo.total} tópicos
                        </span>
                      </div>

                      <p className="text-[15px] text-slate-500 leading-relaxed mb-6 max-w-2xl">
                        {modulo.descricao}
                      </p>

                      {/* Tópicos */}
                      {modulo.topicos.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {modulo.topicos.map((topico, i) => (
                            <div key={i} className={`flex items-center gap-2.5 text-sm p-3 rounded-xl border ${
                              topico.status === 'concluido' ? 'bg-slate-50/50 border-slate-200 text-slate-600' :
                              topico.status === 'concluido_simples' ? 'bg-white border-slate-200 text-slate-600' :
                              topico.status === 'atual' ? 'bg-blue-50/50 border-blue-200 text-blue-700 font-medium shadow-sm' :
                              topico.status === 'atual_simples' ? 'bg-white border-blue-200 text-blue-700 font-medium' :
                              topico.status === 'bloqueado' ? 'bg-slate-50 border-slate-100 text-slate-400 opacity-70' :
                              topico.status === 'incompleto_azul' ? 'bg-white border-slate-200 text-blue-600' :
                              'bg-white border-slate-200 text-slate-600'
                            }`}>
                              {topico.status === 'concluido' && <CheckCircle2 size={18} className="text-green-500" />}
                              {topico.status === 'concluido_simples' && <CheckCircle2 size={18} className="text-slate-300" />}
                              {topico.status === 'atual' && <PlayCircle size={18} className="text-blue-600" />}
                              {topico.status === 'atual_simples' && <div className="w-2 h-2 rounded-full bg-blue-500 ml-1 mr-1"></div>}
                              {topico.status === 'bloqueado' && <Lock size={16} className="text-slate-300" />}
                              {topico.status === 'incompleto' && <div className="w-4 h-4 rounded-[4px] border-2 border-slate-300 ml-0.5 mr-0.5"></div>}
                              {topico.status === 'incompleto_azul' && <PlayCircle size={18} className="text-blue-400" />}

                              <span className="truncate">{topico.nome}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Footer do Card */}
                      <div className="flex justify-between items-center pt-5 border-t border-slate-100">
                        <div className="flex gap-2.5">
                          {modulo.botoesAcao.map((btn, i) => (
                            <span key={i} className={`text-xs font-bold px-3 py-1.5 rounded-lg border flex items-center gap-1.5
                              ${btn.tipo === 'primario' ? 'text-indigo-700 bg-indigo-50 border-indigo-100' :
                                btn.tipo === 'secundario' ? 'text-teal-700 bg-teal-50 border-teal-100' :
                                btn.tipo === 'terciario' ? 'text-blue-700 bg-blue-50 border-blue-100' :
                                btn.tipo === 'verde' ? 'text-emerald-700 bg-emerald-50 border-emerald-100' :
                                'text-orange-700 bg-orange-50 border-orange-100'}`}>
                              <BookMarked size={14} /> {btn.texto} <span className="bg-white/60 px-1.5 rounded text-[10px] ml-1">{btn.xp}</span>
                            </span>
                          ))}
                        </div>

                        <button className={`px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all shadow-sm
                          ${index === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20' :
                            'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                          {modulo.acaoPrincipal} <ArrowRight size={16} />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 3. PAINEL LATERAL DIREITO - MÉTRICAS */}
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col z-10 shadow-[-2px_0_15px_rgba(0,0,0,0.02)] hidden xl:flex">
        <div className="p-8 overflow-y-auto hide-scrollbar">

          {/* Header Métricas */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Métricas da Trilha</h3>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded">Consistente</span>
          </div>

          {/* Gráfico de Retenção */}
          <div className="flex items-center gap-5 mb-6">
            {/* Círculo Fake */}
            <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-blue-50 border-[6px] border-blue-600 text-blue-700 font-extrabold text-xl">
              84%
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-800 tracking-tight">18<span className="text-slate-400 text-lg font-medium">/25</span></div>
              <div className="text-xs text-slate-500 font-medium mb-1">Lições concluídas</div>
              <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="text-lg leading-none">↗</span> +12% esta semana
              </div>
            </div>
          </div>

          {/* Barra de Progresso Global */}
          <div className="mb-10">
            <div className="flex justify-between text-[11px] font-bold mb-2">
              <span className="text-slate-500">Progresso Global do Nível</span>
              <span className="text-slate-700">72%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>

          <hr className="border-slate-100 mb-8" />

          {/* Filtro por Foco */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Filtro por Foco</h3>
              <button className="text-[11px] text-blue-600 font-bold hover:underline">Limpar</button>
            </div>

            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">Gramática Normativa</span>
                </div>
                <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-md">14 lições</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">Semântica & Estilo</span>
                </div>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">6 lições</span>
              </label>

              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded border-2 border-slate-200"></div>
                  <span className="text-sm text-slate-500 font-medium">Redação Dissertativa</span>
                </div>
                <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-md">5 lições</span>
              </label>
            </div>
          </div>

          {/* Tópicos Chave */}
          <div className="mb-10">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Tópicos Chave</h3>
            <div className="flex flex-wrap gap-2">
              {['#Concordância', '#Crase', '#Regência', '#Coesão', '#Figuras'].map(tag => (
                <span key={tag} className="text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 cursor-pointer transition-colors px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card Machado de Assis */}
          <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-[#EBE8E0] mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <BookOpen size={60} />
            </div>
            <h4 className="text-[10px] font-extrabold text-amber-800/80 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Nota de Estilo • Machado de Assis
            </h4>
            <p className="text-[13px] font-serif italic text-slate-700 leading-relaxed mb-4 relative z-10">
              "A clareza é a cortesia do homem de letras. O domínio das orações coordenadas favorece a fluidez do ritmo narrativo."
            </p>
            <a href="#" className="text-[11px] text-blue-600 font-bold hover:underline flex items-center gap-1 z-10 relative">
              Ver análise <ArrowRight size={12} />
            </a>
          </div>

          {/* Acervo Cultural Thumbnail */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-slate-200">
            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" alt="Acervo Cultural" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Acervo Cultural</h4>
              <p className="text-slate-200 text-sm font-medium">Antologia Comentada de Gramática</p>
            </div>
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-full p-1.5 text-white">
              <Video size={16} />
            </div>
          </div>

        </div>
      </aside>

    </div>
  );
}