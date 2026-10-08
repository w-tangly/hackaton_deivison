import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./aprender.css";

type Option = { id: string; text: string; tag?: string };

const QUESTION = {
  numero: 3,
  total: 10,
  enunciado: "Qual é o sujeito na oração:",
  frase: "“Os alunos chegaram cedo à escola”",
  apoio:
    "Identifique o termo que desempenha o papel de núcleo ou sujeito determinado da forma verbal expressa.",
  correta: "A",
  opcoes: [
    { id: "A", text: "Os alunos" },
    { id: "B", text: "cedo", tag: "Adjunto adverbial" },
    { id: "C", text: "à escola", tag: "Adjunto adverbial" },
    { id: "D", text: "chegaram", tag: "Predicado verbal" },
  ] as Option[],
  dica: "Faça a pergunta clássica ao verbo: “Quem chegou cedo à escola?”. A resposta imediata delimita o sujeito da oração.",
  explicacao:
    "“Os alunos” é o sujeito simples determinado, pois realiza a ação de chegar e concorda diretamente com a desinência número-pessoal do verbo flexionado.",
};

const PREPOSICOES = ["em", "a", "na"];

export default function Aprender() {
  const [resposta, setResposta] = useState<string | null>(null);
  const [prep, setPrep] = useState<string | null>(null);
  const respondeu = resposta !== null;
  const acertou = resposta === QUESTION.correta;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="logo">LV</span>
          <strong>Língua Viva</strong>
        </div>
        <nav>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/aprender">Aprender</NavLink>
          <NavLink to="/trilha">Trilha</NavLink>
          <NavLink to="/quiz">Praticar</NavLink>
          <NavLink to="/ranking">Ranking</NavLink>
          <NavLink to="/conquistas">Conquistas</NavLink>
          <NavLink to="/perfil">Meu Perfil</NavLink>
        </nav>
        <div className="user-card">
          <div className="avatar" />
          <div>
            <strong>Enrico</strong>
            <small>Nível 4 • Fluência Básica</small>
          </div>
          <div className="user-stats">
            <span>🔥 5 dias</span>
            <span>980 XP</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <h1>Língua Viva</h1>
          <div className="chips">
            <span className="chip">🔥 5 dias</span>
            <span className="chip blue">⚡ 980 XP</span>
            <span className="chip">Nível 4</span>
            <span className="chip user"><i className="avatar sm" /> Enrico</span>
          </div>
        </header>

        <div className="grid">
          <section className="col-left">
            <div className="card progress">
              <div className="progress-head">
                <span className="tag">Sintaxe Essencial</span>
                <span>Questão {QUESTION.numero} de {QUESTION.total}</span>
                <span className="chip blue sm">+20 XP por acerto</span>
                <span className="focus">● Modo Foco Ativo</span>
              </div>
              <div className="bar"><div style={{ width: `${(QUESTION.numero / QUESTION.total) * 100}%` }} /></div>
            </div>

            <div className="card">
              <small className="eyebrow">Análise sintática • Termos essenciais da oração</small>
              <h2>
                {QUESTION.enunciado} <em>{QUESTION.frase}</em>?
              </h2>
              <p className="muted">{QUESTION.apoio}</p>

              <div className="options">
                {QUESTION.opcoes.map((o) => {
                  const isCorrect = respondeu && o.id === QUESTION.correta;
                  const isWrong = respondeu && o.id === resposta && !acertou;
                  return (
                    <button
                      key={o.id}
                      disabled={respondeu}
                      onClick={() => setResposta(o.id)}
                      className={`option ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
                    >
                      <span className="letter">{o.id}</span>
                      <span className="text">{o.text}</span>
                      {isCorrect && <span className="badge ok">✔ CORRETO!</span>}
                      {isWrong && <span className="badge no">✖ INCORRETO</span>}
                      {o.tag && <small className="opt-tag">{o.tag}</small>}
                    </button>
                  );
                })}
              </div>

              <div className="tip">
                <strong>Dica de Fixação Rápida</strong>
                <p>{QUESTION.dica}</p>
              </div>
            </div>

            {respondeu && (
              <div className={`card feedback ${acertou ? "ok" : "no"}`} role="status">
                <div className="feedback-body">
                  <h3>
                    {acertou ? "Excelente! Resposta correta." : "Quase lá! Revise a explicação."}
                    {acertou && <span className="xp">+20 XP</span>}
                  </h3>
                  <p>{QUESTION.explicacao}</p>
                  <small className="sync">
                    Sincronizado via Flask API • endpoint: POST /quiz/3/responder [200 OK]
                  </small>
                </div>
                <button className="primary" onClick={() => setResposta(null)}>
                  Continuar para a próxima →
                </button>
              </div>
            )}
          </section>

          <aside className="col-right">
            <div className="card">
              <div className="cloze-head">
                <h3>Complete a Frase</h3>
                <span className="chip blue sm">+15 XP</span>
              </div>
              <p className="muted">Complete a lacuna de acordo com a norma-padrão de regência verbal:</p>
              <div className="cloze">
                “Ele chegou <b className="gap">{prep ?? "___"}</b> casa cedo.”
                <small>Selecione a preposição correta abaixo</small>
              </div>
              <div className="preps">
                {PREPOSICOES.map((p) => (
                  <button key={p} className={prep === p ? "sel" : ""} onClick={() => setPrep(p)}>
                    {p}
                  </button>
                ))}
              </div>
              <div className="rule">
                <strong>Regência do verbo ‘chegar’</strong>
                <p>
                  Na norma-padrão, verbos de movimento como <b>chegar</b> e <b>ir</b> regem a preposição <b>a</b>
                  (chegou a casa), e não a preposição <i>em</i>.
                </p>
              </div>
              <button className="ghost">⇄ Simular Validação (POST /quiz/cloze)</button>
            </div>

            <div className="card">
              <h3>Ritmo da Sessão</h3>
              <div className="stats">
                <div><small>Precisão média</small><strong className="green">100%</strong><small>3/3 acertos</small></div>
                <div><small>XP acumulado</small><strong className="blue-t">+60</strong><small>Nível 4 em curso</small></div>
              </div>
              <div className="streak">
                <span>Consistência diária<br /><small>5 dias seguidos</small></span>
                <span className="badge ok">Ótimo</span>
              </div>
            </div>

            <div className="card">
              <small className="eyebrow">Integridade da API REST</small>
              <pre className="code">{`POST /api/v1/quiz/3/responder
{ "resposta_id": "${resposta ?? "A"}",
  "tempo_ms": 4200, "xp": 20 }`}</pre>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}