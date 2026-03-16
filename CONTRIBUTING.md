# Guia de Contribuição - CodEX Academy

Seja bem-vindo ao projeto da Landing Page da **Octabit**! Para mantermos a organização e a qualidade do nosso código, seguimos um padrão rigoroso de escrita e versionamento. Leia atentamente as instruções abaixo antes de iniciar suas tarefas.

---

## 1. Fluxo de Branches (Git Flow)
Neste projeto, a branch `main` contém apenas o código estável e finalizado. Todo o desenvolvimento acontece na branch `develop`.

**Regra de Ouro:** Toda branch nova deve ser criada obrigatoriamente a partir da branch `develop`.

**Formato:** `tipo/nome-da-task`

- `feat/`: Novas funcionalidades ou seções (ex: `feat/sessao-contato`).
- `fix/`: Correção de bugs ou erros de layout (ex: `fix/padding-header`).
- `docs/`: Mudanças apenas na documentação ou README.
- `style/`: Mudanças estéticas que não afetam a lógica (ajustes de CSS, identação).

---

## 2. Commits Convencionais
Nossos commits devem seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

**Estrutura:** `tipo: descrição curta em português e minúsculo`

**Tipos permitidos:**
- `feat`: Adição de novo elemento ou seção.
- `fix`: Correção de erro no HTML ou CSS.
- `style`: Ajustes visuais (cores, espaçamentos, fontes).
- `docs`: Alterações em documentação.
- `refactor`: Mudança no código que não altera o visual (ex: renomear classes ou organizar arquivos).

**Exemplos:**
- `feat: adiciona formulario de contato no index.html`
- `style: ajusta as cores das variaveis conforme a paleta`
- `fix: corrige alinhamento do menu no mobile`

---

## 3. Pull Requests (PRs)
Ninguém deve subir código diretamente nas branches principais (`main` ou `develop`). O processo de revisão é obrigatório.

1. **Alvo do PR:** Abra o Pull Request da sua branch sempre para a branch **`develop`**.
2. **Título:** Deve ser claro e objetivo (ex: `feat: Implementação da seção de Sócios`).
3. **Descrição:** Explique brevemente o que foi feito. Sempre que houver alteração visual, **anexe um print** da tela.
4. **Code Review:** Aguarde a revisão do Líder do Projeto ou de um colega designado.
5. **Ajustes:** Se houver pedidos de mudança, faça-os na mesma branch e realize o push; o PR será atualizado automaticamente.

Template de Pull Request (PR)
```
## 📝 Descrição
O que foi feito nesta tarefa? 

## 📸 Screenshots (se houver alteração visual)
[Cole aqui o print da seção no navegador]

## ✅ Checklist
- [ ] Minha branch foi criada a partir da `develop`.
- [ ] O código segue o padrão BEM para CSS.
- [ ] Testei a responsividade básica.
- [ ] O commit segue o padrão convencional.
- [ ] Usei as variáveis de cores/fontes do projeto.
```
---

## 4. Padrões de Código (Clean Code)
- **HTML:** Utilize tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`). Evite o uso excessivo de `<div>`.
- **CSS:** Utilize a metodologia **BEM** (`.bloco__elemento--modificador`) para nomear suas classes.
- **Variáveis:** Utilize as variáveis definidas no `:root` (arquivo `variables.css`) para cores e fontes. Não use cores "hardcoded" (ex: `color: #08132F`).

---

### Regra de Ouro
> "O código que você entrega deve ser melhor e mais limpo do que o código que você encontrou."
