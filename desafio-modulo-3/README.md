# Desafio de Projeto — Módulo 3: Enciclopédia Aberta

Página de artigo de enciclopédia sobre a **capivara**
(*Hydrochoerus hydrochaeris*), com layout de três colunas, tema claro e escuro e
índice que acompanha a rolagem.

> **Sobre a marca:** o desafio se chama "Recriando Wikipedia", mas nenhuma parte
> da identidade visual da Wikipédia foi reproduzida aqui. A *Enciclopédia
> Aberta* é fictícia, com logotipo e identidade próprios, e não tem relação com
> a Wikipédia nem com a Wikimedia Foundation. O que o exercício pede — a
> estrutura de página de uma enciclopédia — está preservado por inteiro.

## O desafio

Treinar **estrutura de página**, **semântica** e **acessibilidade** a partir de
uma base pré-montada. O repositório do módulo fornece um `index.html` com o
layout inteiro em `<div>` e um `base.css` com um grid de três colunas.

## O que foi feito

Cada `<div>` da base foi trocado pelo elemento semântico correto:

| Base (DIO) | Virou |
| --- | --- |
| `div.logo` | `<header>` com o logotipo |
| `div.bar` | `<nav aria-label="Trilha de navegação">` com breadcrumb |
| `div.sidebar` | `<nav aria-label="Navegação do site">` |
| `div.main` | `<main id="conteudo">` com `<article>` |
| `div.anchors` | `<nav aria-labelledby="indice-titulo">` |
| `div.footer` | `<footer>` |

O grid de três colunas foi mantido no desktop e reescrito com variáveis de cor,
tipografia fluida e comportamento responsivo. Abaixo de 1080 px o layout vira
coluna única, com navegação e índice colapsáveis em `<details>`.

## Recursos usados

### Acessibilidade

- **Skip link** para o conteúdo principal, escondido até receber foco. O
  `<main>` tem `tabindex="-1"` para que o foco realmente se mova, e não apenas o
  ponto de partida da tabulação.
- **Landmarks** distintos e nomeados: os três `<nav>` da página têm nome
  acessível, o que permite ao leitor de tela diferenciá-los.
- **Hierarquia de títulos** sem saltos de nível, com um único `<h1>`. Os rótulos
  das barras laterais são parágrafos ligados às listas por `aria-labelledby`,
  em vez de títulos — assim nomeiam os grupos sem quebrar a hierarquia.
- **Texto alternativo** descritivo nas ilustrações informativas; o logotipo, que
  é redundante com o texto ao lado, usa `alt=""`.
- **Foco visível** em todos os 33 elementos focáveis, com anel de contraste
  próprio.
- **Contraste** verificado por cálculo: todo par de texto atinge no mínimo
  4.5:1 e o anel de foco, 3:1, nos dois temas.
- **`prefers-reduced-motion`** desliga a rolagem animada e as transições.
- **`prefers-color-scheme`** troca o tema, incluindo uma variante clara do
  logotipo servida por `<picture>` — sem ela, o logotipo azul-escuro sumiria no
  tema escuro.
- **Tabela rolável** dentro de um contêiner focável, para quem navega por
  teclado conseguir rolá-la.

### Conteúdo

Infobox taxonômica em `<dl>`, tabela comparativa com `<caption>` e `<th scope>`,
`<figure>`/`<figcaption>` nas ilustrações e notas de rodapé com link de ida e de
volta.

### JavaScript

O único script tem cerca de vinte linhas e serve apenas para destacar no índice
a seção que está sendo lida. **A página funciona por inteiro sem ele:** os links
do índice são âncoras HTML comuns.

## Estrutura de arquivos

```
desafio-modulo-3/
├── README.md
├── index.html
└── assets/
    ├── css/style.css       Layout, temas e tipografia
    ├── js/indice.js        Realce da seção visível no índice
    └── images/             Logotipo (claro e escuro) e ilustrações, em SVG
```

## Como visualizar

Abra `index.html` em qualquer navegador. Não há build, dependências nem
servidor, e a página funciona offline.

## Créditos

O logotipo, a ilustração da capivara, o mapa de distribuição e o diagrama de
comparação de tamanho foram desenhados para este projeto, em SVG. Não há
material de terceiros. O mapa é esquemático e não tem precisão cartográfica — o
próprio desenho diz isso.

O texto é informativo e foi escrito para o exercício; não substitui literatura
científica. As fontes reais para leitura estão listadas na seção *Referências*
da própria página: Lista Vermelha da IUCN, Animal Diversity Web e Wikipédia.

## Referência

Código-fonte base do desafio:
[digitalinnovationone/trilha-html-modulo-3](https://github.com/digitalinnovationone/trilha-html-modulo-3)
