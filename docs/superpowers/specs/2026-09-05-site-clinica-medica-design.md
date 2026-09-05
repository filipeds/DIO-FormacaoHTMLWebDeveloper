# Design: Site de Clínica Médica — Desafio DIO Módulo 2

**Data:** 2026-09-05
**Branch:** `feat/criando-primeiro-site-completo`

## Objetivo

Entregar o Desafio de Projeto do Módulo 2 da trilha de HTML da DIO: um site
"quase completo" de uma clínica médica, cobrindo os temas do módulo —
formulários, estruturação e formatação de texto, mídias e tabelas.

## Requisitos do desafio

- Site de uma clínica médica, com especialidade à escolha.
- Menu de navegação com quatro páginas: Página Principal, Sobre a clínica,
  Horário de Atendimento e Contato.
- Todas as páginas seguem o layout do `template.html` da DIO (menu lateral +
  header, content e footer).
- Cada página tem uma imagem **diferente** no header. Menu e footer são padrões.
- **Página Principal:** breve descrição da clínica.
- **Sobre a clínica:** texto sobre a clínica.
- **Horário de Atendimento:** texto sobre os serviços e tabela por serviço/dia.
- **Contato:** telefones (celular e WhatsApp), endereço completo, iframe do
  Google Maps e formulário de contato com Nome (`text`), E-mail (`email`),
  Assunto (`text`), Mensagem (`textarea`) e botões de enviar e limpar.

### Contradição no enunciado e como foi resolvida

O enunciado pede, na página de Horário de Atendimento, "uma tabela de **preços**,
onde cada linha é um serviço, com o preço de cada um de acordo com os dias da
semana" — mas a tabela de exemplo logo abaixo mostra **horários** (`08h - 19h`),
não preços.

**Resolução:** entregar as duas tabelas. A de horários reproduz exatamente a
tabela do enunciado; a de preços cumpre a descrição textual. Nenhuma das duas
leituras fica descoberta.

## Base do layout

Obtidos do repositório `digitalinnovationone/trilha-html-modulo-2`:

- `template.html` — wrapper de 1200px, `.menu` (15%) à esquerda e `.main` (85%)
  em coluna com `.header`, `.content` e `.footer`.
- `base.css` — layout em flexbox.

O enunciado autoriza alterar as cores do template ("Fique a vontade para alterar
da melhor forma"). A paleta aquamarine/roxo do original será trocada por tons de
azul-clínico.

## Decisões de design

| Decisão | Escolha | Motivo |
|---|---|---|
| Identidade | Clínica Vida Plena, multiespecialidades | Casa com os quatro serviços da tabela do enunciado (clínica geral, psicologia, pediatria, oftalmologia) sem inventar serviços extras |
| Localização dos arquivos | Pasta `desafio-modulo-2/` | O desafio do Módulo 1 já ocupa o `index.html` da raiz; a pasta evita colisão e mantém os desafios independentes |
| Marcação do layout | Tags semânticas com as classes do template | `<nav class="menu">`, `<header class="header">`, `<main class="content">`, `<footer class="footer">` — o `base.css` continua funcionando e o HTML fica correto |
| Mídias | Arquivos locais em `img/` e `media/` | Funciona offline, sem risco de link quebrado |
| Escopo de mídias | Imagens, `<video>` e `<audio>` | Cobre todo o tópico de mídias do módulo |
| Endereço | Fictício, em rua real de São Paulo (Av. Paulista, 1578) | O iframe do Google Maps precisa de um endereço que o serviço encontre |
| Telefones | Fictícios, padrão `(11) 5555-XXXX` | Site de estudo; não expor número real de terceiros |
| Backend do formulário | Nenhum; `action="#"` | Módulo de HTML puro, sem servidor |

Abordagem descartada: reorganizar o repositório em `modulo-1/` e `modulo-2/` com
um índice na raiz. Mais limpo a longo prazo, mas mexeria nos arquivos do PR do
Módulo 1, que ainda não foi mesclado.

## Estrutura de arquivos

```
desafio-modulo-2/
├── index.html       Página Principal
├── sobre.html       Sobre a clínica
├── horarios.html    Horário de Atendimento
├── contato.html     Contato
├── base.css         Adaptado do template da DIO
├── img/             Imagens dos headers e do conteúdo
└── media/           Vídeo e áudio
```

## Elementos padrão

**Menu** (idêntico nas quatro páginas): `<nav>` com `<ul>` de quatro `<li>`,
cada um com um `<a>` para uma página. A página atual é destacada.

**Footer** (idêntico nas quatro páginas): endereço, telefones, e-mail e horário
resumido de atendimento.

## Conteúdo por página

| Página | Header | Content |
|---|---|---|
| `index.html` | Foto da recepção | Descrição breve da clínica, `<figure>` com as especialidades, `<audio>` de boas-vindas, lista de destaques |
| `sobre.html` | Foto da equipe | Texto sobre história, missão e estrutura; `<video controls>` com tour; lista da equipe |
| `horarios.html` | Foto do consultório | Texto sobre os serviços e as duas tabelas |
| `contato.html` | Foto da fachada | Telefones, endereço, iframe do Maps e formulário |

### Tabelas (horarios.html)

Ambas com `<caption>`, `<thead>`, `<tbody>` e `<th scope>`.

**Tabela 1 — horários**, exatamente como no enunciado:

| Serviços | Segunda a Sexta | Sábados | Feriados |
|---|---|---|---|
| Clínica geral | 08h - 19h | 08h - 14h | 08h - 14h |
| Psicologia | 08h - 19h | 08h - 14h | 08h - 14h |
| Pediatria | 08h - 19h | 08h - 18h | - |
| Oftalmologia | 08h - 19h | 08h - 18h | - |

**Tabela 2 — preços** por serviço e dia, com `<tfoot>` usando `colspan` para uma
nota de rodapé.

### Formulário (contato.html)

`<form action="#">` com `<fieldset>`/`<legend>` e `<label for>` em todos os
campos:

- Nome — `type="text"`
- E-mail — `type="email"`
- Assunto — `type="text"`
- Mensagem — `<textarea>`
- Botões `submit` e `reset`

Extras cobertos pelo módulo: grupo de `radio` (preferência de contato) e
`checkbox` de consentimento.

## Verificação

Antes do commit, com a saída de cada checagem em mãos:

1. Todo `src`/`href` local aponta para um arquivo que existe no repositório.
2. Todos os links do menu resolvem para as quatro páginas.
3. Cada página tem uma imagem de header diferente das outras.
4. Balanceamento de abertura e fechamento de tags nos quatro arquivos.
5. Presença dos elementos exigidos: iframe, tabela, formulário com os quatro
   campos e os dois botões, `<video>`, `<audio>`.

Sem testes automatizados: site estático, sem build, runtime ou dependências.

## Riscos

Os arquivos de vídeo e áudio dependem de download de fontes de licença livre. Se
algum download falhar ou o arquivo ficar grande demais para um repositório de
estudo, o problema será relatado e o escopo ajustado — nenhuma tag `<video>` ou
`<audio>` apontará para arquivo inexistente.

## Entrega

Commits na branch `feat/criando-primeiro-site-completo`, push para o `origin` e
Pull Request para a `main`.
