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

A análise comparativa a seguir avalia soluções consolidadas no mercado educacional e de aprendizagem de idiomas, identificando lacunas e destacando o diferencial competitivo da solução **Hackaton_Gramatics**.

### 1. Análise de Soluções Existentes

* **Duolingo:** 
  * *Pontos Fortes:* Gamificação atrativa, exercícios dinâmicos e preenchimento de lacunas.
  * *Limitações:* Focado no ensino de idiomas estrangeiros por meio de tradução, com baixa profundidade na gramática nativa da Língua Portuguesa (regras sintáticas, ortográficas e de pontuação). Além disso, possui restrições e anúncios na versão gratuita (paywall).
* **Quizlet:**
  * *Pontos Fortes:* Excelente para memorização por flashcards e criação de listas personalizadas.
  * *Limitações:* Recursos avançados de aprendizagem e testes são pagos (Quizlet Plus). A qualidade dos conteúdos depende inteiramente de cartões criados pelos próprios usuários, sem uma trilha estruturada e padronizada para o ensino de Português.
* **Wordwall / Kahoot!:**
  * *Pontos Fortes:* Alta interatividade com quizzes e jogos de associação/lacunas para salas de aula.
  * *Limitações:* Voltado predominantemente para uso mediado por professores em momentos pontuais. Não oferece uma experiência contínua e autônoma de estudo focado na Língua Portuguesa para o aluno.

---

### 2. Tabela Comparativa

| Critério / Funcionalidade | Duolingo | Quizlet | Wordwall / Kahoot! | **Hackaton_Gramatics** |
| :--- | :---: | :---: | :---: | :---: |
| **Foco Específico em Gramática Portuguesa** | ❌ (Mais focado em idiomas externos) | ⚠️ (Depende de decks de terceiros) | ⚠️ (Depende de jogos criados por professores) | **✅ 100% focado no aprendizado da Língua Portuguesa** |
| **Flashcards de Fixação** | ⚠️ (Limitados) | ✅ | ❌ | **✅ Integrado nativamente** |
| **Quizzes Interativos** | ✅ | ✅ | ✅ | **✅ Integrado nativamente** |
| **Preenchimento de Lacunas** | ✅ | ⚠️ (Limitado) | ✅ | **✅ Integrado nativamente** |
| **Acesso 100% Gratuito (Sem Paywall)** | ❌ (Possui conta Premium/Anúncios) | ❌ (Gating de recursos no plano pago) | ❌ (Limitação de criação no plano gratuito) | **✅ Gratuito e Acessível (Compromisso ODS 4)** |
| **Interface Leve e Focada na Web** | ✅ | ✅ | ✅ | **✅ Responsiva e Sem Distrações** |

---

### 3. Diferencial Competitivo do Hackaton_Gramatics

O **Hackaton_Gramatics** se diferencia por ser uma plataforma **totalmente gratuita, pública e direcionada**, pensada especificamente para resolver deficiências no aprendizado de Língua Portuguesa. Em vez de exigir assinaturas ou dispersar o aluno em conteúdos genéricos:
1. **Tríade Pedagógica:** Une em um só lugar as 3 metodologias mais eficazes de retenção prática (*Flashcards*, *Quizzes* e *Preenchimento de Lacunas*).

## Requisitos

### Requisitos Funcionais (RF)
* **RF01:** O sistema deve permitir a navegação entre os três modos de estudo: Flashcards, Quiz e Preenchimento de Lacunas.
* **RF02:** O modo *Flashcards* deve permitir a virada do cartão ao clicar para revelar a resposta/explicação.
* **RF03:** O modo *Quiz* deve apresentar perguntas de múltipla escolha e contabilizar a pontuação final do usuário.
* **RF04:** O modo *Preenchimento de Lacunas* deve validar as respostas digitadas pelo usuário e fornecer feedback de acerto/erro.
* **RF05:** O sistema deve exibir explicações educativas para os erros cometidos nos testes.

### Requisitos Não-Funcionais (RNF)
* **RNF01:** A interface deve ser totalmente responsiva, adaptando-se a dispositivos móveis e desktops.
* **RNF02:** O sistema deve ter tempo de resposta inferior a 2 segundos nas interações.
* **RNF03:** A interface deve seguir boas práticas de acessibilidade e usabilidade (design limpo e intuitivo).

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
4. **Testes de Usabilidade e Ajustes:** Revisão de feedback visual e correção de bugs.
5. **Deploy e Documentação:** Publicação da aplicação e redação do README.

---

## Integrantes

| Foto | Nome | Função | Social |
| :---: | :--- | :--- | :--- |
| <img src="https://github.com/github.png" width="50" height="50"> | **Gabriel Camargo Gonçalves Silva** | Desenvolvedor Backend | [GitHub](https://github.com/gabrielcamargogsilva) |
| <img src="https://github.com/github.png" width="50" height="50"> | **Enrico Emanuel Proença Batista** | UI/UX Designer / Frontend | [GitHub](https://github.com/w-tangly)|
| <img src="https://github.com/github.png" width="50" height="50"> | **Jeniffer Camargo Oliveira** | Gestão do board e criação das issues | [GitHub](https://github.com/jenifferCamar) |
| <img src="https://github.com/github.png" width="50" height="50"> | **Pedro Henrique Campos do Carmo** | Gestão da equipe, definição de tarefas e documentação  | [GitHub](https://github.com/w-tangly) |
