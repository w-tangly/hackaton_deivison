import type {
  QuizQuestion,
  QuizResult,
  Flashcard,
  Lacuna,
  Jogador,
  RankingResponse,
} from './index';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  async getQuiz(params?: { tema?: string; nivel?: string; limite?: number }): Promise<QuizQuestion[]> {
    const searchParams = new URLSearchParams();
    if (params?.tema) searchParams.append('tema', params.tema);
    if (params?.nivel) searchParams.append('nivel', params.nivel);
    if (params?.limite) searchParams.append('limite', params.limite.toString());

    const query = searchParams.toString();
    const endpoint = `/quiz/${query ? `?${query}` : ''}`;
    const data = await this.fetch<QuizQuestion[]>(endpoint);
    return data;
  }

  async submitQuizAnswer(questionId: number, answer: string): Promise<QuizResult> {
    return this.fetch<QuizResult>(`/quiz/${questionId}/responder`, {
      method: 'POST',
      body: JSON.stringify({ resposta: answer }),
    });
  }

  async getFlashcards(): Promise<Flashcard[]> {
    return this.fetch<Flashcard[]>('/flashcards/');
  }

  async reviewFlashcard(flashcardId: number, sabia: boolean): Promise<void> {
    await this.fetch(`/flashcards/${flashcardId}/revisar`, {
      method: 'POST',
      body: JSON.stringify({ sabia }),
    });
  }

  async getLacunas(): Promise<Lacuna[]> {
    return this.fetch<Lacuna[]>('/lacunas/');
  }

  async submitLacunaAnswer(lacunaId: number, answer: string): Promise<{ correct: boolean; points: number; explanation?: string }> {
    return this.fetch<{ correct: boolean; points: number; explanation?: string }>(`/lacunas/${lacunaId}/responder`, {
      method: 'POST',
      body: JSON.stringify({ resposta: answer }),
    });
  }

  async getJogador(apelido: string): Promise<Jogador> {
    return this.fetch<Jogador>(`/jogadores/${encodeURIComponent(apelido)}`);
  }

  async createJogador(apelido: string): Promise<Jogador> {
    return this.fetch<Jogador>('/jogadores', {
      method: 'POST',
      body: JSON.stringify({ apelido }),
    });
  }

  async getRanking(): Promise<RankingResponse> {
    return this.fetch<RankingResponse>('/ranking');
  }

  async getHealth(): Promise<{ status: string }> {
    return this.fetch<{ status: string }>('/');
  }
}

export const apiService = new ApiService(API_BASE_URL);
export default apiService;