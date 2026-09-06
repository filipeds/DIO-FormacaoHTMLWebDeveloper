# Desafio de Projeto — Módulo 2: Site da Clínica Vida Plena

Site de quatro páginas de uma clínica médica multiespecialidades.

> A clínica é fictícia. Nome, endereço, telefones, valores e profissionais foram
> inventados para o exercício.

## O desafio

Criar um site "quase completo" de uma clínica médica, cobrindo os temas do
módulo: **formulários**, **estruturação e formatação de texto**, **mídias** e
**tabelas**. O menu de navegação deve levar a quatro páginas, todas seguindo o
layout do `template.html` fornecido pela DIO — menu lateral com header, conteúdo
e rodapé.

## O que foi feito

| Arquivo | Página | O que traz |
| --- | --- | --- |
| `index.html` | Página Principal | Descrição da clínica, cartões das especialidades e `<audio>` |
| `sobre.html` | Sobre a clínica | História, missão, `<video>` com tour e equipe |
| `horarios.html` | Horário de Atendimento | Texto sobre os serviços e duas tabelas |
| `contato.html` | Contato | Telefones, endereço, mapa em `<iframe>` e formulário |

Cada página tem uma **imagem diferente** no header. Menu e rodapé são idênticos
nas quatro. O layout do template foi mantido, mas com tags semânticas sobre as
classes originais, para que o CSS continue funcionando.

### As duas tabelas

O enunciado pede "uma tabela de **preços**, onde cada linha é um serviço, com o
preço de cada um de acordo com os dias da semana" — mas a tabela de exemplo logo
abaixo mostra **horários**, não preços.

Para não deixar nenhuma das duas leituras descoberta, `horarios.html` traz as
duas: a tabela de horários exatamente como especificada no enunciado, e uma
tabela de valores por serviço e dia da semana.

## Recursos usados

- **Estrutura semântica:** `<nav>`, `<header>`, `<main>`, `<footer>`,
  `<address>`, `<figure>` e `<figcaption>`, com as classes do template original.
- **Texto:** `<h1>`–`<h3>`, `<p>`, `<strong>`, `<em>`, `<small>`, `<cite>`,
  `<ul>` e `<ol>`.
- **Mídias:** `<img>` em SVG, `<video>` com `poster` e `<audio>`, ambos com
  `<source>` e conteúdo alternativo.
- **Tabelas:** `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th scope>` e
  `colspan`.
- **Formulário:** `<form>`, `<fieldset>`, `<legend>`, `<label for>`, `input` dos
  tipos `text`, `email`, `radio` e `checkbox`, `<textarea>` e botões `submit` e
  `reset`.
- **Outros:** `<iframe>` do Google Maps e links `tel:`, `mailto:` e WhatsApp.

## Estrutura de arquivos

```
desafio-modulo-2/
├── README.md
├── CREDITS.md              Créditos das mídias
├── index.html              Página Principal
├── sobre.html              Sobre a clínica
├── horarios.html           Horário de Atendimento
├── contato.html            Contato
└── assets/
    ├── css/base.css        Adaptado do template da DIO
    ├── images/             Logotipo, banners e ícones (SVG) + pôster do vídeo
    └── media/              Vídeo do tour e áudio de boas-vindas
```

## Como visualizar

Abra `index.html` em qualquer navegador. Não há build, dependências nem
servidor.

O `<iframe>` do mapa precisa de conexão com a internet; o restante do site
funciona offline. O formulário é uma demonstração: não há servidor por trás
dele, portanto nenhuma mensagem é enviada ou armazenada.

## Créditos

As ilustrações e o vídeo foram criados para este projeto. O áudio é uma faixa de
licença livre com atribuição obrigatória. Detalhes em [CREDITS.md](CREDITS.md).

## Referência

Código-fonte base do desafio:
[digitalinnovationone/trilha-html-modulo-2](https://github.com/digitalinnovationone/trilha-html-modulo-2)
