# DIO — Formação HTML Web Developer

Repositório dos desafios de projeto da
[Formação HTML Web Developer](https://www.dio.me/) da **Digital Innovation One**.

Cada módulo da trilha tem um desafio, e cada desafio vive na própria pasta. São
páginas estáticas: sem build, sem dependências e sem servidor.

## Desafios

| Módulo | Desafio | O que exercita |
| --- | --- | --- |
| 1 | [Guia das tags HTML](desafio-modulo-1/) | As 19 tags exigidas pelo desafio, em HTML puro, sem CSS |
| 2 | [Site da Clínica Vida Plena](desafio-modulo-2/) | Formulários, tabelas, mídias, iframe e estruturação de texto |
| 3 | [Enciclopédia Aberta](desafio-modulo-3/) | Semântica e acessibilidade: landmarks, skip link, contraste |

Cada pasta tem um `README.md` com a descrição completa do desafio, os recursos
usados e a estrutura de arquivos.

## Estrutura do repositório

```
.
├── index.html               Portal com os três desafios
├── assets/css/portal.css    Estilo do portal
│
├── desafio-modulo-1/        Guia das tags HTML
│   ├── README.md
│   └── index.html
│
├── desafio-modulo-2/        Site da Clínica Vida Plena
│   ├── README.md
│   ├── CREDITS.md
│   ├── index.html · sobre.html · horarios.html · contato.html
│   └── assets/
│       ├── css/
│       ├── images/
│       └── media/
│
├── desafio-modulo-3/        Enciclopédia Aberta
│   ├── README.md
│   ├── index.html
│   └── assets/
│       ├── css/
│       ├── images/
│       └── js/
│
└── docs/superpowers/specs/  Documentos de design de cada desafio
```

Os três desafios seguem o mesmo padrão: um `README.md` na raiz da pasta, o
`index.html` como página de entrada e todos os arquivos de apoio em `assets/`,
separados por tipo.

## Como visualizar

Clone o repositório e abra o `index.html` da raiz no navegador — ele serve de
portal para os três desafios. Cada pasta também pode ser aberta diretamente.

```bash
git clone https://github.com/filipeds/DIO-FormacaoHTMLWebDeveloper.git
cd DIO-FormacaoHTMLWebDeveloper
```

Não há instalação nem comando de build. O único recurso que depende de conexão é
o mapa do Google Maps na página de contato do Módulo 2; todo o resto funciona
offline.

## Documentos de design

Cada desafio foi desenhado antes de ser implementado. Os documentos estão em
[`docs/superpowers/specs/`](docs/superpowers/specs/) e registram as decisões
tomadas, as alternativas descartadas e os critérios de verificação usados.

## Observação sobre o conteúdo

As empresas, marcas, endereços, telefones e pessoas que aparecem nos desafios
são **fictícios** e existem apenas como exercício. Nenhuma identidade visual de
organização real foi reproduzida.

## Repositórios base da DIO

Código-fonte das aulas de cada módulo:

- [trilha-html-modulo-1](https://github.com/digitalinnovationone/trilha-html-modulo-1)
- [trilha-html-modulo-2](https://github.com/digitalinnovationone/trilha-html-modulo-2)
- [trilha-html-modulo-3](https://github.com/digitalinnovationone/trilha-html-modulo-3)
