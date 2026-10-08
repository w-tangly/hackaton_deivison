export interface QuizQuestion {
  id: number;
  enunciado: string;
  alternativa_a: string;
  alternativa_b: string;
  alternativa_c: string;
  alternativa_d: string;
  resposta_correta: string;
  explicacao: string;
  tema: string;
  nivel: string;
}

export interface QuizResponse {
  questions: QuizQuestion[];
  total: number;
}

export interface QuizAnswer {
  questionId: number;
  selectedAnswer: string;
}

export interface QuizResult {
  correct: boolean;
  points: number;
  explanation?: string;
  total_points?: number;
}

export interface Flashcard {
  id: number;
  frente: string;
  verso: string;
  tema: string;
}

export interface FlashcardReview {
  flashcardId: number;
  sabia: boolean;
}

export interface Lacuna {
  id: number;
  frase: string;
  opcoes: string[];
  tema: string;
}

export interface LacunaResponse {
  lacunas: Lacuna[];
  total: number;
}

export interface LacunaAnswer {
  lacunaId: number;
  resposta: string;
}

export interface Jogador {
  apelido: string;
  pontos: number;
  acertos: number;
  erros: number;
}

export interface RankingEntry {
  apelido: string;
  pontos: number;
  acertos: number;
  erros: number;
}

export interface RankingResponse {
  ranking: RankingEntry[];
}

export interface ModuleProgress {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  estimatedTime: string;
  color: string;
  endpoint: string;
  icon: string;
}

export type Difficulty = 'facil' | 'medio' | 'dificil';

export interface ActivityMode {
  id: string;
  title: string;
  description: string;
  endpoint: string;
  xpReward: number;
  icon: string;
}