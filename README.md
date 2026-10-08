# Hackaton_Gramatics

> Plataforma web educacional e gamificada para o ensino de Língua Portuguesa, desenvolvida no âmbito de um hackathon acadêmico com foco na ODS 4 (Educação de Qualidade).

---

## ODS

Este projeto está diretamente alinhado com o **Objetivo de Desenvolvimento Sustentável 4 (ODS 4) da ONU: Educação de Qualidade**.

* **Meta 4.1:** Garantir que todas as crianças e jovens completem o ensino primário e secundário livre, equitativo e de qualidade.
* **Meta 4.4:** Aumentar substancialmente o número de jovens e adultos que têm competências relevantes para o mercado de trabalho.
* **Contribuição do Projeto:** A aplicação democratiza o acesso a materiais de apoio ao estudo de gramática e língua portuguesa por meio de metodologias ativas e atrativas de aprendizagem, auxiliando na fixação do conhecimento e no combate à defasagem escolar.

---

## Problema

A Língua Portuguesa é frequentemente percebida por estudantes como uma disciplina complexa e repleta de regras abstratas. A falta de recursos didáticos dinâmicos e acessíveis resulta em:
* Baixo engajamento dos alunos no estudo continuado de gramática;
* Dificuldade de retenção e memorização de regras ortográficas e sintáticas;
* Altos índices de defasagem na escrita e interpretação textual no ensino básico e médio;
* Poucas ferramentas focadas exclusivamente na gramática do Português com apelo gamificado moderno.

---

## Público-alvo

O **Hackaton_Gramatics** destina-se a:
1. **Estudantes do Ensino Fundamental II e Médio:** Necessitam reforçar o aprendizado escolar diário.
2. **Vestibulandos e Alunos do ENEM:** Buscam revisão rápida e prática dos conteúdos gramaticais mais cobrados.
3. **Concurseiros:** Precisam de memorização ativa e exercícios focados para provas objetivas.
4. **Educadores:** Podem utilizar a plataforma como recurso complementar em sala de aula ou tarefas de fixação.

---

## Proposta de Valor

Oferecer uma experiência de aprendizagem interativa, leve e intuitiva da Língua Portuguesa, combinando diferentes modalidades ativas de estudo em uma única plataforma web pública e gratuita.

* **Fixação por repetição espaçada:** Uso de *Flashcards* para conceitos e regras.
* **Avaliação contínua:** *Quizzes* objetivos com feedback imediato.
* **Prática contextual:** Exercícios de *Preenchimento de Lacunas* para aplicação real de regras gramaticais.

---

## Benchmarking

A tabela a seguir compara a proposta do **Hackaton_Gramatics** com 5 plataformas consolidadas no mercado de edtechs e aprendizagem:

| Critério de Comparação | **Hackaton_Gramatics** (Proposta) | **Só Português** | **Quizlet** | **Anki** | **Duolingo** | **Kahoot!** |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Foco em Língua Portuguesa / Gramática** | **100% Dedicado** (Ortografia, crase, concordância, sintaxe) | **100% Dedicado** | Genérico (qualquer disciplina) | Genérico (qualquer disciplina) | Focado em idiomas estrangeiros | Genérico (qualquer disciplina) |
| **Diversidade de Modos de Estudo** | **Integrado**: Flashcards, Quiz e Preenchimento de Lacunas em uma só ferramenta | Predominantemente artigos teóricos e exercícios estáticos | Focado em Flashcards e pequenos jogos associativos | Exclusivo para Flashcards com repetição espaçada | Exercícios variados (tradução, audição, associação) | Focado em Quizzes competitivos em tempo real |
| **Curadoria de Conteúdo Nativo** | **Pronto para uso**: Exercícios e cartões oficiais revisados | Teoria vasta, porém com pouca interatividade | Depende do próprio usuário criar ou achar listas públicas | Depende do usuário criar ou baixar baralhos de terceiros | Conteúdo nativo estruturado por níveis | Depende de professores ou usuários criarem os *kahoots* |
| **Feedback Educativo Instantâneo** | **Sim**: Explicações didáticas após os erros para reforço pedagógico | Parcial (gabarito ao final de testes estáticos) | Baixo (apenas indica acerto ou erro) | Baixo (baseado na autoavaliação do usuário) | Sim (para regras e frases simples) | Baixo (foco no tempo de resposta e pontuação) |
| **Experiência do Usuário (UI/UX)** | **Moderna, simples e sem distrações** | Interface datada e poluída por anúncios visuais | Moderna, porém restrita por paywalls/cadastros | Curva de aprendizado alta e interface utilitária simples | Interface altamente gamificada e atrativa | Altamente gamificado e dinâmico |
| **Modelo de Acesso / Custo** | **Gratuito, aberto e direto na web** | Gratuito com anúncios | Freemium (recursos avançados pagos) | Gratuito (Desktop/Web/Android) e pago (iOS) | Freemium (limite de "vidas" no plano gratuito) | Freemium (limite de participantes e recursos) |

### Análise Detalhada dos Concorrentes e Diferencial Competitivo

1. **Só Português:** Possui excelente profundidade de conteúdo teórico sobre a norma culta, mas falha em engajar o estudante devido à interface datada e à falta de dinâmicas interativas modernas.
2. **Quizlet:** Excelente para memorização via cartões, porém é uma ferramenta genérica onde o estudante precisa buscar ou criar o próprio material, além de ter limitações crescentes no plano gratuito.
3. **Anki:** Referência em memorização por repetição espaçada, mas possui uma curva de aprendizado técnica e interface pouco amigável para estudantes do ensino básico.
4. **Duolingo:** Referência em gamificação, porém seu foco é o ensino de línguas estrangeiras (ex: Inglês, Espanhol) e não o aprofundamento das regras gramaticais da norma culta da Língua Portuguesa.
5. **Kahoot!:** Ótimo para dinâmicas em grupo em sala de aula, mas depende de mediação e não é ideal para estudo individual e contínuo de fixação de regras específicas.

**Diferencial do Hackaton_Gramatics:** A solução une a **especificidade temática da Língua Portuguesa** (como o *Só Português*) à **interatividade e metodologias ativas** (como o *Quizlet* e *Kahoot!*), entregando uma experiência 100% gratuita, sem necessidade de cadastros complexos, centralizada em três formatos complementares de estudo (memorização, testagem e aplicação prática).

## Requisitos

### Requisitos Funcionais (RF)
- **RF01**: O sistema deve permitir ao usuário estudar tópicos gramaticais por meio de conjuntos de **Flashcards** interativos (frente com pergunta/regra, verso com resposta/explicação).
- **RF02**: O sistema deve disponibilizar **Quizzes de Múltipla Escolha** categorizados por temas gramaticais (ex: crase, concordância, regência, pontuação).
- **RF03**: O sistema deve oferecer atividades de **Preenchimento de Lacunas** em frases e textos completos.
- **RF04**: O sistema deve fornecer **feedback imediato** após a realização de cada questão/lacuna, indicando acerto/erro e a justificativa gramatical.
- **RF05**: O sistema deve permitir o **cadastro e autenticação** de usuários (estudantes e professores).
- **RF06**: O sistema deve manter um **Painel do Estudante (Dashboard)** exibindo o histórico de desempenho, taxa de acertos e tempo dedicado.
- **RF07**: O sistema deve implementar elementos de **gamificação**, concedendo pontuações, níveis e medalhas de conquista conforme o progresso do usuário.
- **RF08**: O sistema deve permitir ao usuário **filtrar e selecionar módulos de estudo** por nível de dificuldade (Básico, Intermediário e Avançado) ou tema gramatical.
- **RF09**: O sistema deve oferecer um **Modo de Revisão**, apresentando novamente os flashcards e questões em que o usuário obteve erros anteriores.
- **RF10**: O sistema deve permitir que usuários com perfil administrativo/professor **cadastrem, editem e removam** novos conjuntos de questões e flashcards.
- **RF11**: O sistema deve permitir ao usuário **favoritar ou salvar** flashcards específicos para consulta rápida posterior.

### Requisitos Não Funcionais (RNF)
- **RNF01 (Acessibilidade)**: A interface deve seguir as diretrizes da WCAG (Web Content Accessibility Guidelines), suportando alto contraste, leitor de tela e navegação inteiramente por teclado.
- **RNF02 (Usabilidade)**: O design da interface deve ser intuitivo, limpo e responsivo, exigindo no máximo 3 cliques para o usuário iniciar qualquer atividade de estudo.
- **RNF03 (Responsividade)**: A aplicação web deve ser totalmente adaptável para telas de smartphones, tablets e computadores desktop (Design Mobile-First).
- **RNF04 (Desempenho)**: O tempo de carregamento inicial das páginas e a transição de exercícios não devem ultrapassar 2 segundos em conexões de internet 3G/4G padrão.
- **RNF05 (Compatibilidade)**: A plataforma deve ser compatível com as versões mais recentes dos principais navegadores do mercado (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
- **RNF06 (Disponibilidade)**: O sistema deve ter uma disponibilidade mínima estimada de 99% durante o período de testes e avaliação do hackathon.
- **RNF07 (Segurança e Privacidade)**: As credenciais dos usuários devem ser armazenadas de forma segura (senhas encriptadas) em conformidade com as diretrizes básicas da LGPD.
- **RNF08 (Manutenibilidade)**: O código frontend deve seguir padrão modular de componentes, promovendo facilidade de manutenção e reuso de código.
- **RNF09 (Escalabilidade)**: A estrutura frontend e consumo de API devem ser projetados para suportar múltiplos acessos simultâneos sem perda de performance.
- **RNF10 (Offline-first parcial / Cache)**: O sistema deve utilizar estratégias de cache web para permitir a continuidade da sessão do quiz/flashcard atual mesmo em curtas interrupções de conexão à internet.

---

## User Stories

* **Como estudante**, eu quero visualizar *flashcards* com conceitos gramaticais simples para memorizar regras de acentuação e crase de forma rápida.
* **Como vestibulando**, eu quero responder a *quizzes* de múltipla escolha para testar meus conhecimentos e identificar meus pontos fracos em sintaxe.
* **Como praticante**, eu quero resolver exercícios de *preenchimento de lacunas* para aplicar corretamente a concordância verbal e nominal em frases práticas.

---

## Funcionalidades

1. **Módulo de Flashcards (Memorização Ativa):**
   * Cartões interativos com conceito na frente e explicação/exemplo no verso.
   * Filtro por tópicos (ex: Ortografia, Crase, Pontuação, Regência).

2. **Módulo de Quiz (Testes Objetivos):**
   * Questões com alternativas dinâmicas.
   * Feedback imediato mostrando a alternativa correta e pontuação ao final.

3. **Módulo de Preenchimento de Lacunas (Aplicação Prática):**
   * Frases incompletas onde o usuário deve digitar ou selecionar a palavra ortograficamente correta.
   * Verificação instantânea de respostas.

4. **Painel / Navegação Intuitiva:**
   * Menu principal para alternar facilmente entre as modalidades de estudo.

---

## Tecnologias Utilizadas

* **Linguagens:** HTML5, CSS3, JavaScript (ES6+)
* **Estilização:** Tailwind CSS / CSS Modules
* **Bundler & Build Tool:** Vite
* **Controle de Versão:** Git & GitHub

### Inteligência Artificial

Ferramenta: Claude, Kilo Code (Laguna S 2.1; Nemotron 3 Ultra), Chat GPT, Google Stitch 

Utilização:
- geração de ideias;
- auxílio e geração de componentes do código;
- revisão de código;
- identificação de erros;
- testes de backend e APIs
- automação e criação de cards no board do github projects
- auxílio na documentação
---

## Framework Utilizado

* **React.js:** Escolhido devido à sua arquitetura baseada em componentes reutilizáveis (ideal para criar os cartões, módulos de quiz e formulários de lacunas), além da facilidade de gerenciamento de estado para a interatividade do usuário em tempo real.

---

## Como Executar

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* Gerenciador de pacotes `npm` ou `yarn`

### Passo a passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Hackaton_Gramatics.git
   ```

2. **Navegar até o diretório do projeto:**
   ```bash
   cd Hackaton_Gramatics
   ```

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Executar a aplicação em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acessar no navegador:**
   Abra o endereço indicado no terminal (geralmente `http://localhost:5173`).

---

## Protótipo

O protótipo das telas e do fluxo de navegação foi desenvolvido no Stitch:
* [Link para o Protótipo no stitch](https://stitch.google.com/projects/12329768009849964350?pli=1)

---

## Aplicação
A versão final hospedada e aberta para testes pode ser acessada em:
* [Link do Deploy (Vercel)](#)
* [Link do Deploy (Render)](https://hackathonapi-two.vercel.app/)
---

## Processo de Desenvolvimento

O projeto foi construído durante a maratona do hackathon acadêmico utilizando o método **Kanban** para organização das tarefas e divisão dos componentes do Frontend:

1. **Ideação e Alinhamento com a ODS 4:** Identificação do problema de aprendizagem gramatical.
2. **Prototipagem UI/UX:** Definição da paleta de cores, tipografia acessível e layouts das telas no stitch.
3. **Desenvolvimento Frontend:**
   * Construção da estrutura base e roteamento.
   * Componentização dos *Flashcards*, *Quiz* e *Lacunas*.
   * Estilização responsiva.
4. **Desenvolvimento Backend:**
   * Construção da estrutura base do banco de dados e do backend
   * Alimentação do banco de dados
   * Criação e testes das APIs de acesso ao backend
6. **Testes de Usabilidade e Ajustes:** Revisão de feedback visual e correção de bugs.
7. **Deploy e Documentação:** Publicação da aplicação e redação do README.

---

## Integrantes

| Foto | Nome | Função | Social |
| :---: | :--- | :--- | :--- |
| <img src="https://github.com/github.png" width="50" height="50"> | **Gabriel Camargo Gonçalves Silva** | Desenvolvedor Backend | [GitHub](https://github.com/gabrielcamargogsilva) |
| <img src="https://github.com/github.png" width="50" height="50"> | **Enrico Emanuel Proença Batista** | UI/UX Designer / Frontend | [GitHub](https://github.com/w-tangly)|
| <img src="https://github.com/github.png" width="50" height="50"> | **Jeniffer Camargo Oliveira** | Gestão do board e criação das issues | [GitHub](https://github.com/jenifferCamar) |
| <img src="https://github.com/github.png" width="50" height="50"> | **Pedro Henrique Campos do Carmo** | Gestão da equipe, definição de tarefas e documentação  | [GitHub](https://github.com/w-tangly) |

## Links extras
### Repositório Backend
[Link para o repositório Backend](https://github.com/gabrielcamargogsilva/hackathon_api.git)
