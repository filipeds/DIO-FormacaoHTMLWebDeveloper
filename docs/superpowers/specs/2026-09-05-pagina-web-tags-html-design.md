# Design: Página Web com Tags HTML — Desafio DIO Módulo 1

**Data:** 2026-09-05
**Branch:** `feat/criar-pagina-web-utilizando-tags`

## Objetivo

Entregar o Desafio de Projeto do Módulo 1 da trilha HTML da DIO: uma página web
de estrutura básica que utiliza todas as tags ensinadas nas aulas práticas, mais
as tags extras sugeridas pelo desafio.

## Requisitos

### Tags obrigatórias (aulas)

`<h1>` a `<h6>`, `<p>`, `<mark>`, `<small>`, `<i>`, `<u>`, `<strong>`, `<ol>`,
`<ul>`, `<li>`, `<a>`, `<hr>`, `<sub>`, `<sup>`, `<blockquote>`

### Tags extras (pesquisa)

`<font>`, `<del>`, `<abbr>`

Total: 19 tags distintas, todas obrigatórias no arquivo final.

## Decisões de design

| Decisão | Escolha | Motivo |
|---|---|---|
| Tema do conteúdo | Guia das tags HTML | A página explica as tags enquanto as usa; cada tag tem justificativa natural no texto |
| Estilo | HTML puro, sem CSS | Fiel ao escopo do Módulo 1 (só HTML); `<font>` cumpre o papel de estilização, como o desafio sugere |
| Organização | Seções por categoria de tag | Garante cobertura verificável de todas as tags, sem uso forçado |
| Arquivo | `index.html` na raiz | Permite publicação no GitHub Pages sem reorganizar o repositório |
| README | Atualizado | Padrão dos desafios da DIO: descreve o desafio e lista as tags demonstradas |

Abordagens descartadas:

- **Artigo corrido sobre HTML** — mais fluido de ler, mas dificulta garantir e
  comprovar que todas as 19 tags foram usadas.
- **Tabela de referência (uma linha por tag)** — `<table>` não faz parte da lista
  do Módulo 1 e o resultado seria um documento seco, sem prosa.

## Estrutura da página

Documento HTML5 com `lang="pt-br"` e `<meta charset="UTF-8">`.

1. **Cabeçalho** — `<h1>` título, `<p>` com `<small>` de subtítulo, `<hr>`
2. **Introdução** — `<p>` com `<abbr title="HyperText Markup Language">HTML</abbr>`,
   `<strong>` e `<mark>`
3. **Hierarquia de títulos** (`<h2>`) — demonstra `<h3>` até `<h6>`, explicando cada nível
4. **Formatação de texto** (`<h2>`) — `<i>`, `<u>`, `<strong>`, `<mark>`, `<del>`, `<small>`
5. **Sub e sobrescrito** (`<h2>`) — `H<sub>2</sub>O` e `lado<sup>2</sup>`
6. **Listas** (`<h2>`) — `<ol>`/`<li>` com passos de criação de uma página;
   `<ul>`/`<li>` com tags de bloco
7. **Citação** (`<h2>`) — `<blockquote>` com frase sobre a web e atribuição
8. **Tags obsoletas** (`<h2>`) — `<font color size>` demonstrada junto de `<del>`
   e nota explicando a depreciação
9. **Referências** (`<h2>`) — `<ul>` de `<a href>` para MDN, W3Schools e o
   repositório da trilha da DIO
10. **Rodapé** — `<hr>`, `<p><small>` com autoria

## Mapa tag → seção

| Tag | Seção |
|---|---|
| `<h1>` | 1 |
| `<h2>` | 3–9 |
| `<h3>`–`<h6>` | 3 |
| `<p>` | todas |
| `<small>` | 1, 4, 10 |
| `<abbr>` | 2 |
| `<strong>` | 2, 4 |
| `<mark>` | 2, 4 |
| `<i>`, `<u>` | 4 |
| `<del>` | 4, 8 |
| `<sub>`, `<sup>` | 5 |
| `<ol>`, `<ul>`, `<li>` | 6, 9 |
| `<blockquote>` | 7 |
| `<font>` | 8 |
| `<a>` | 9 |
| `<hr>` | 1, 10 |

## README

Conteúdo: título do projeto, descrição do desafio DIO, lista das tags
demonstradas, instrução para abrir `index.html` no navegador e link para o
repositório da trilha (`digitalinnovationone/trilha-html-modulo-1`).

## Verificação

Antes do commit, buscar cada uma das 19 tags no `index.html` e confirmar
presença de todas. A cobertura só é declarada completa com a saída da busca em
mãos — nenhuma afirmação de sucesso sem evidência.

Sem testes automatizados: o projeto é HTML estático sem build, sem runtime e sem
dependências.

## Entrega

Branch `feat/criar-pagina-web-utilizando-tags` com commits separados
(spec → `index.html` → README), push para o `origin` e Pull Request para a `main`.
