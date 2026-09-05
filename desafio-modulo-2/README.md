# Desafio de Projeto - Módulo 2: Clínica Vida Plena

Site de uma clínica médica multiespecialidades, criado para o Desafio de Projeto
do Módulo 2 da trilha de HTML da **Digital Innovation One**.

> A clínica é fictícia. Nome, endereço, telefones, valores e profissionais foram
> inventados para o exercício.

## O desafio

Criar um site "quase completo" de uma clínica médica, cobrindo os temas do
módulo: **formulários**, **estruturação e formatação de texto**, **mídias** e
**tabelas**. O menu de navegação deve levar a quatro páginas, e todas seguem o
layout do `template.html` fornecido pela DIO (menu lateral + header, conteúdo e
rodapé).

## As páginas

| Arquivo | Página | O que traz |
| --- | --- | --- |
| `index.html` | Página Principal | Descrição da clínica, cartões das especialidades e `<audio>` |
| `sobre.html` | Sobre a clínica | História, missão, `<video>` com tour e equipe |
| `horarios.html` | Horário de Atendimento | Texto sobre os serviços e duas tabelas |
| `contato.html` | Contato | Telefones, endereço, mapa em `<iframe>` e formulário |

Cada página tem uma **imagem diferente** no header. Menu e rodapé são idênticos
nas quatro.

## As duas tabelas

O enunciado do desafio pede "uma tabela de **preços**, onde cada linha é um
serviço, com o preço de cada um de acordo com os dias da semana" — mas a tabela
de exemplo logo abaixo mostra **horários**, não preços.

Para não deixar nenhuma das duas leituras descoberta, a página `horarios.html`
traz as duas: a tabela de horários exatamente como especificada no enunciado, e
uma tabela de valores por serviço e dia da semana.

## Recursos de HTML usados

- **Estrutura semântica:** `<nav>`, `<header>`, `<main>`, `<footer>`, `<address>`,
  `<figure>` e `<figcaption>` — com as classes do template original, para que o
  `base.css` continue funcionando.
- **Texto:** `<h1>`–`<h3>`, `<p>`, `<strong>`, `<em>`, `<small>`, `<cite>`,
  `<blockquote>`, `<ul>` e `<ol>`.
- **Mídias:** `<img>` (SVG), `<video>` com `poster` e `<audio>`, ambos com
  `<source>` e conteúdo alternativo.
- **Tabelas:** `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th scope>` e
  `colspan`.
- **Formulário:** `<form>`, `<fieldset>`, `<legend>`, `<label for>`, `input` dos
  tipos `text`, `email`, `radio` e `checkbox`, `<textarea>` e botões `submit` e
  `reset`.
- **Outros:** `<iframe>` do Google Maps, links `tel:`, `mailto:` e WhatsApp.

## Estrutura de arquivos

```
desafio-modulo-2/
├── index.html          Página Principal
├── sobre.html          Sobre a clínica
├── horarios.html       Horário de Atendimento
├── contato.html        Contato
├── base.css            Adaptado do template da DIO
├── CREDITS.md          Créditos das mídias
├── img/                Logotipo, banners e ícones (SVG) + pôster do vídeo
└── media/              Vídeo do tour e áudio de boas-vindas
```

## Como visualizar

Abra `index.html` em qualquer navegador. Não há build, dependências nem servidor.

O `<iframe>` do mapa precisa de conexão com a internet; o restante do site
funciona offline.

## Mídias

As ilustrações e o vídeo foram criados para este projeto. O áudio é uma faixa de
licença livre com atribuição. Detalhes em [CREDITS.md](CREDITS.md).

## Referência

Código-fonte base do desafio:
[digitalinnovationone/trilha-html-modulo-2](https://github.com/digitalinnovationone/trilha-html-modulo-2)
