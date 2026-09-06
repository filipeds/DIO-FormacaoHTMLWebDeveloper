# Design: Recriando a Wikipédia com Layout Moderno — Desafio DIO Módulo 3

**Data:** 2026-09-05
**Branch:** `feat/recriando-wikipedia-layout-moderno`

## Objetivo

Entregar o Desafio de Projeto do Módulo 3 da trilha de HTML da DIO: recriar uma
página de enciclopédia com layout melhor que o da base fornecida, treinando
**estrutura de página**, **semântica** e **acessibilidade**.

## A base fornecida

O repositório `digitalinnovationone/trilha-html-modulo-3` traz uma estrutura
pré-montada:

- `index.html` — layout inteiro em `<div>`: logo, barra, três colunas
  (`sidebar`, `main`, `anchors`) e rodapé.
- `assets/css/style.css` — grid de três colunas
  (`minmax(0,15rem) minmax(0,2.5fr) minmax(0,15rem)`), bordas e reset mínimo.

O enunciado deixa o tema livre e diz que a base existe "apenas para deixar mais
apresentável".

## Decisão sobre a marca

O desafio se chama "Recriando Wikipedia", mas **a marca da Wikipédia não será
reproduzida** — nem logotipo, nem wordmark, nem identidade visual. A página usa
uma enciclopédia fictícia própria, a **Enciclopédia Aberta**, com identidade
original em SVG.

O que o desafio exercita é a estrutura de página de uma enciclopédia, e isso é
preservado integralmente. Imitar a identidade de uma organização real numa
página publicável não é aceitável, e não é necessário para o objetivo do
exercício.

## Decisões de design

| Decisão | Escolha | Motivo |
|---|---|---|
| Tema do artigo | Capivara (*Hydrochoerus hydrochaeris*) | Tema real que rende infobox taxonômica, seções longas e ilustrações; conteúdo verificável |
| Localização | Pasta `desafio-modulo-3/` | Mesmo padrão do Módulo 2; evita colisão com os outros desafios |
| Caminhos dos assets | `assets/css/`, `assets/js/`, `assets/images/` | Mantém a convenção da base da DIO |
| Ilustrações | SVG autoral | Sem dependência de banco de imagens, sem questão de licença, arquivos de poucos KB |
| JavaScript | ~20 linhas, só para o índice | Destaque da seção visível via `IntersectionObserver`; a página é 100% funcional sem JS |
| Temas | Claro e escuro por `prefers-color-scheme` | Layout moderno sem exigir controle manual |

Abordagens descartadas:

- **Sem JavaScript algum**, com índice estático. Mais fiel a um módulo de HTML,
  mas perde o índice que acompanha a rolagem.
- **Mais JavaScript** (busca, menus dinâmicos). Fora do escopo de um módulo de
  HTML e acessibilidade.

## Mapa da conversão semântica

Cada `<div>` da base vira o elemento correto:

| Base (DIO) | Vira |
|---|---|
| `div.logo` | `<header>` (banner) com logo e nome do site |
| `div.bar` | `<nav aria-label="Trilha de navegação">` com breadcrumb |
| `div.sidebar` | `<nav aria-label="Navegação do site">` |
| `div.main` | `<main id="conteudo">` contendo `<article>` |
| `div.anchors` | `<aside>` com `<nav aria-label="Índice deste artigo">` |
| `div.footer` | `<footer>` (contentinfo) |

## Estrutura do artigo

`<h1>` com o título, parágrafo de resumo e infobox lateral (`<aside>` com `<dl>`)
contendo os dados taxonômicos. Seções em `<h2>`, subseções em `<h3>`:

1. Etimologia
2. Taxonomia
3. Descrição física
4. Distribuição e habitat
5. Comportamento
6. Alimentação
7. Reprodução
8. Relação com humanos
9. Estado de conservação
10. Referências

Elementos de conteúdo: uma `<table>` comparando a capivara com outros roedores
(com `<caption>` e `<th scope>`), `<figure>`/`<figcaption>` nas ilustrações e
notas de rodapé com link de ida e de volta.

O conteúdo é factual. O rodapé deixa explícito que a página é um projeto de
estudo e aponta para fontes reais (IUCN, Animal Diversity Web e a própria
Wikipédia).

## Ilustrações

Quatro arquivos SVG autorais em `assets/images/`:

- `logo.svg` — identidade da Enciclopédia Aberta
- `capivara.svg` — ilustração principal do animal
- `mapa-distribuicao.svg` — área de ocorrência na América do Sul
- `comparacao-tamanho.svg` — comparação de porte com uma silhueta humana

## Layout

Grid de três colunas preservado no desktop. Em telas estreitas vira coluna
única, com o índice colapsado em `<details>`. Escala tipográfica fluida, tema
claro e escuro por `prefers-color-scheme`, e `prefers-reduced-motion` respeitado
em qualquer transição.

## Acessibilidade

- Skip link para o conteúdo principal, visível ao receber foco.
- Landmarks únicos e rotulados; os dois `<nav>` distinguidos por `aria-label`.
- Hierarquia de títulos sem saltos de nível.
- `alt` descritivo nas imagens informativas e `alt=""` nas decorativas.
- `aria-current="page"` no item de navegação da página atual.
- Foco visível com contraste próprio, em todos os elementos interativos.
- ARIA usado apenas onde não existe elemento nativo equivalente.

## Verificação

Cada item roda antes do commit, com a saída em mãos:

1. **Script estrutural:** landmarks presentes e únicos; ordem de títulos sem
   saltos; todo `<img>` com atributo `alt`; todo link com texto acessível;
   `id`s únicos; toda âncora interna apontando para um alvo existente.
2. **Contraste WCAG:** cálculo da razão de contraste de todos os pares de cor
   usados, nos dois temas. Reprova abaixo de 4.5:1 para texto e 3:1 para
   elementos de interface. Se algum par reprovar, a paleta é ajustada até
   passar, e os números são reportados.
3. **Teclado, no Chrome real:** navegação por Tab, skip link funcionando e foco
   visível a cada parada.
4. **Renderização:** desktop, mobile em 375px e tema escuro.

Sem testes automatizados de unidade: página estática, sem build, runtime ou
dependências.

## Entrega

Commits na branch `feat/recriando-wikipedia-layout-moderno`, push para o
`origin` e Pull Request para a `main`.
