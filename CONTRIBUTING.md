# Guia de Contribuição - CodEX Academy

Seja bem-vindo ao projeto da Landing Page da **Octabit**! Para mantermos a organização e a qualidade do nosso código, seguimos um padrão rigoroso de escrita e versionamento. Leia atentamente as instruções abaixo antes de iniciar suas tarefas.

---

## 1. Padrão de Branches
Trabalharemos com o fluxo de branches para garantir que a `main` esteja sempre estável.

**Formato:** `tipo/nome-da-task`

- `feat/`: Novas funcionalidades ou seções (ex: `feat/sessao-contato`).
- `fix/`: Correção de bugs ou ajustes de layout (ex: `feat/fix-padding-header`).
- `docs/`: Mudanças apenas na documentação/README (ex: `docs/atualiza-squad`).
- `style/`: Mudanças que não afetam o sentido do código (ajustes de CSS, formatação).

---

## 2. Commits Convencionais
Nossos commits devem ser claros e objetivos, seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

**Estrutura:** `tipo: descrição curta em português e minúsculo`

**Tipos permitidos:**
- `feat`: Quando você adiciona um novo elemento ou seção.
- `fix`: Quando você corrige um erro no HTML ou CSS.
- `style`: Ajustes visuais, cores, espaçamentos ou organização do CSS.
- `docs`: Alterações no README ou comentários.
- `refactor`: Mudança no código que não altera o visual nem corrige erro (ex: renomear classes).

**Exemplos:**
- `feat: adiciona formulario de contato no index.html`
- `style: ajusta as cores das variaveis conforme a paleta`
- `fix: corrige alinhamento do menu no mobile`

---

## 3. Pull Requests (PRs)
Ninguém deve subir código direto na `main`. Todo código deve passar por revisão.

1.  Abra o PR da sua branch para a `main`.
2.  **Título do PR:** Deve ser claro (ex: `feat: Implementação da seção de Sócios`).
3.  **Descrição:** Explique brevemente o que foi feito. Se possível, anexe um print da alteração visual.
4.  **Aguarde a Revisão:** O líder do projeto ou um colega designado fará o Code Review.
5.  **Ajustes:** Se houver comentários pedindo mudanças, faça-as na mesma branch e suba o commit; o PR atualizará automaticamente.

---

## 4. Padrões de Código (Clean Code)
- **HTML:** Use tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`).
- **CSS:** Utilize a metodologia **BEM** (`.bloco__elemento--modificador`) para nomear classes.
- **Variáveis:** Use as variáveis definidas no `:root` para cores e fontes.

---

### Regra de Ouro
> "O código que você entrega deve ser melhor e mais limpo do que o código que você encontrou."
