# Desafio de Projeto — Módulo 1: Guia das tags HTML

Página que explica as tags HTML **enquanto as utiliza**, organizada por
finalidade. HTML puro, sem CSS, fiel ao escopo do módulo.

## O desafio

Elaborar um website de estrutura básica utilizando todas as tags apresentadas
nas aulas práticas, além de pesquisar e aplicar algumas tags novas.

## O que foi feito

O arquivo [`index.html`](index.html) é um guia das tags: cada seção explica um
grupo de tags e, ao mesmo tempo, as demonstra no próprio texto. Assim toda tag
exigida aparece com justificativa, em vez de encaixada à força.

Seções da página:

1. O que é HTML
2. Hierarquia de títulos
3. Formatação de texto
4. Subscrito e sobrescrito
5. Listas ordenadas e não ordenadas
6. Citações
7. Tags obsoletas: o caso do `<font>`
8. Referências

## Recursos usados

**Tags das aulas:**

| Tag | Finalidade |
| --- | --- |
| `<h1>` a `<h6>` | Títulos e hierarquia do documento |
| `<p>` | Parágrafos de texto |
| `<mark>` | Destaque estilo marca-texto |
| `<small>` | Textos secundários e notas de rodapé |
| `<i>` | Itálico |
| `<u>` | Sublinhado |
| `<strong>` | Conteúdo de grande importância |
| `<ol>` / `<li>` | Lista ordenada |
| `<ul>` / `<li>` | Lista não ordenada |
| `<a>` | Links |
| `<hr>` | Linha divisória entre seções |
| `<sub>` | Subscrito (ex: H<sub>2</sub>O) |
| `<sup>` | Sobrescrito (ex: lado<sup>2</sup>) |
| `<blockquote>` | Citação em bloco |

**Tags pesquisadas, sugeridas pelo desafio:**

| Tag | Finalidade |
| --- | --- |
| `<font>` | Cor, tamanho e tipo de letra — **obsoleta** desde o HTML5, usada aqui apenas para fins didáticos |
| `<del>` | Marca conteúdo removido ou desatualizado |
| `<abbr>` | Abreviaturas e siglas, com o significado no atributo `title` |

São 19 tags distintas, todas presentes no arquivo final.

## Estrutura de arquivos

```
desafio-modulo-1/
├── README.md
└── index.html      A página inteira, sem arquivos de apoio
```

Não há CSS, JavaScript nem imagens: o desafio pede HTML puro, e a tag `<font>`
cumpre o papel de estilização.

## Como visualizar

Abra `index.html` em qualquer navegador. Não há build, dependências nem
servidor, e a página funciona offline.

## Referência

Código-fonte base do desafio:
[digitalinnovationone/trilha-html-modulo-1](https://github.com/digitalinnovationone/trilha-html-modulo-1)
