# IoT, Cloud e Indústria 4.0

<p align="center">
  <strong>Portal educacional desenvolvido com Astro para organização de aulas, materiais complementares e navegação estruturada sobre IoT, Cloud, Indústria 4.0, Arduino, Raspberry Pi, Python e Big Data.</strong>
</p>

<p align="center">
  <img alt="Astro" src="https://img.shields.io/badge/Astro-5C2EDE?style=for-the-badge&logo=astro&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-1F2937?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img alt="CSS" src="https://img.shields.io/badge/CSS-0F172A?style=for-the-badge&logo=css3&logoColor=1572B6" />
  <img alt="Netlify" src="https://img.shields.io/badge/Netlify-0B1220?style=for-the-badge&logo=netlify&logoColor=00C7B7" />
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-111827?style=for-the-badge&logo=github&logoColor=white" />
</p>

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Objetivos](#objetivos)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Arquitetura dos dados](#arquitetura-dos-dados)
- [Páginas do curso](#páginas-do-curso)
- [Recursos das aulas](#recursos-das-aulas)
- [Como rodar localmente](#como-rodar-localmente)
- [Como editar o conteúdo](#como-editar-o-conteúdo)
- [Como publicar alterações no GitHub](#como-publicar-alterações-no-github)
- [Deploy no Netlify](#deploy-no-netlify)
- [Melhorias futuras](#melhorias-futuras)
- [Autor](#autor)

---

## Sobre o projeto

Este projeto foi desenvolvido para servir como um **portal de aulas** do curso **IoT, Cloud e Indústria 4.0**.

A proposta é transformar o conteúdo dos slides em uma experiência de navegação mais organizada, moderna e progressiva, com:

- página inicial em formato de portal/blog;
- menu lateral com as 11 aulas;
- páginas individuais por aula;
- seções de apoio com leituras, vídeos, atividades e referências;
- layout preparado para uso acadêmico, consulta contínua e publicação online.

O site foi construído com foco em:

- clareza visual;
- organização de conteúdo;
- facilidade de manutenção;
- escalabilidade para inclusão de novos materiais;
- publicação simplificada em plataformas como **GitHub** e **Netlify**.

---

## Objetivos

Este projeto foi criado para:

- organizar as aulas do curso em formato web;
- melhorar a apresentação visual do conteúdo;
- permitir navegação estruturada entre os temas;
- centralizar materiais complementares por aula;
- servir como base para atualização contínua conforme o curso evolui;
- disponibilizar o conteúdo em ambiente online para consulta posterior.

---

## Tecnologias utilizadas

- **Astro**
- **HTML**
- **CSS**
- **JavaScript**
- **Markdown**
- **Git**
- **GitHub**
- **Netlify**

---

## Estrutura do projeto

```bash
iot-blog-starter/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Icon.astro
│  │  ├─ LessonResources.astro
│  │  ├─ ResourceCard.astro
│  │  └─ Sidebar.astro
│  ├─ data/
│  │  ├─ aulas.js
│  │  └─ recursos.js
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ aula-01.astro
│  │  ├─ aula-02.astro
│  │  ├─ aula-03.astro
│  │  ├─ aula-04.astro
│  │  ├─ aula-05.astro
│  │  ├─ aula-06.astro
│  │  ├─ aula-07.astro
│  │  ├─ aula-08.astro
│  │  ├─ aula-09.astro
│  │  ├─ aula-10.astro
│  │  └─ aula-11.astro
│  └─ styles/
│     └─ global.css
├─ astro.config.mjs
├─ netlify.toml
├─ package.json
└─ README.md

Arquitetura dos dados

Uma das decisões mais importantes do projeto foi separar o conteúdo em arquivos distintos, para evitar repetição e facilitar manutenção.

src/data/aulas.js

Esse arquivo concentra os dados principais de cada aula, como:

número;

slug;

título;

resumo;

ícone;

cor/tema;

tópicos principais.

Exemplo conceitual:

{
  id: 1,
  slug: "aula-01",
  numero: "01",
  titulo: "Conceitos de IoT",
  resumo: "Introdução à Internet das Coisas...",
  status: "publicado",
  cor: "iot",
  icone: "wifi",
  topicos: [
    "Definição de Internet das Coisas",
    "Sensores e atuadores",
    "Comunicação entre dispositivos"
  ]
}
src/data/recursos.js

Esse arquivo concentra os recursos complementares por aula, como:

Leituras específicas

Aprenda+

Dinâmica / Atividades

Referências bibliográficas

Essa separação deixa as páginas das aulas muito mais limpas e facilita atualização futura.

Páginas do curso

O projeto está organizado em 11 aulas:

Conceitos de IoT

Middleware e Protocolos de Rede

Plataforma Arduino Tinkercad

Arduino Tinkercad — Prática

Plataforma NodeMCU

Plataforma Raspberry Pi

Outras Soluções em Python

Tecnologias Emergentes

Integração Cloud + IoT

Integração Cloud + Big Data — Parte 1

Integração Cloud + Big Data — Parte 2

Cada aula possui sua própria página, mantendo consistência visual e estrutura padronizada.

Recursos das aulas

Cada aula pode conter até quatro blocos principais de apoio:

Leituras específicas

Materiais de leitura complementar, artigos, PDFs e referências introdutórias.

Aprenda+

Conteúdo complementar em vídeo ou links extras para aprofundamento.

Dinâmica / Atividades

Links para exercícios, quizzes, atividades práticas e desafios.

Referências bibliográficas

Cards textuais com as referências utilizadas nos slides e no conteúdo da aula.

Componentes principais
BaseLayout.astro

Layout principal do site.
Responsável por manter:

estrutura da página;

sidebar;

área principal de conteúdo;

rodapé global com assinatura.

Sidebar.astro

Responsável pela navegação lateral entre as aulas.

LessonResources.astro

Componente que renderiza automaticamente os blocos de:

Leituras específicas

Aprenda+

Dinâmica / Atividades

Referências bibliográficas

ResourceCard.astro

Componente usado para desenhar os cards de recursos.

Ele suporta:

links comuns;

PDFs;

vídeos;

miniaturas automáticas para vídeos do YouTube;

modo “Em breve”, quando o recurso ainda não foi preenchido.

Como rodar localmente
1. Clonar o repositório
git clone https://github.com/SEU_USUARIO/iot-blog-starter.git
2. Entrar na pasta do projeto
cd iot-blog-starter
3. Instalar as dependências
npm install
4. Rodar o servidor local
npm run dev
5. Abrir no navegador
http://localhost:4321
Como editar o conteúdo
Editar informações principais das aulas

Edite o arquivo:

src/data/aulas.js
Editar links e materiais complementares

Edite o arquivo:

src/data/recursos.js

Exemplo:

"aula-01": {
  leituras: [
    {
      title: "Artigo introdutório sobre IoT",
      description: "Leitura complementar sobre fundamentos da IoT.",
      url: "https://exemplo.com/artigo.pdf",
      type: "pdf",
      available: true,
    },
  ],
  aprendaMais: [
    {
      title: "Vídeo introdutório sobre IoT",
      description: "Vídeo complementar da aula.",
      url: "https://www.youtube.com/watch?v=xxxxxxxxxxx",
      type: "video",
      available: true,
    },
  ],
  atividades: [
    {
      title: "Atividade prática da Aula 01",
      description: "Exercício de fixação.",
      url: "https://exemplo.com/atividade",
      type: "link",
      available: true,
    },
  ],
  referencias: [
    {
      title: "Referências bibliográficas da Aula 01",
      description: "Referências textuais da aula.",
      url: "#referencias",
      type: "link",
      available: true,
    },
  ],
}
Tipos de recurso suportados

Use apenas estes tipos no campo type:

"link" → links comuns

"pdf" → PDFs e leituras

"video" → vídeos, preferencialmente YouTube

Organização visual do projeto

A identidade visual do site foi pensada para transmitir:

ambiente tecnológico;

organização acadêmica;

leitura confortável;

navegação intuitiva;

coerência entre home e aulas internas.

Destaques do layout:

tema escuro;

cards com ícones;

seções bem segmentadas;

navegação lateral persistente;

rodapé padronizado;

páginas individuais com resumo e materiais de apoio.

Rodapé global

Todas as páginas utilizam a assinatura:

Desenvolvido por Aderval Santiago Leite

Como publicar alterações no GitHub

Depois de editar o projeto localmente, use:

git add .
git commit -m "Atualiza conteúdo do projeto"
git push origin main
Deploy no Netlify

O projeto está preparado para deploy com Netlify.

Configuração esperada:

Build command: npm run build

Publish directory: dist

Depois de conectar o repositório GitHub ao Netlify, cada novo push no branch principal pode gerar nova publicação automática.

Melhorias futuras

Algumas melhorias planejadas para evolução do projeto:

revisão final de responsividade;

refinamento visual dos cards de recursos;

botão “Topo” nas aulas;

inclusão de imagens e capturas reais do projeto no README;

domínio personalizado no Netlify;

aprimoramento de SEO;

inclusão de metadados sociais;

melhoria de acessibilidade;

possível busca interna por aulas e tópicos.

Status do projeto

Em desenvolvimento contínuo

Atualmente o projeto já conta com:

página inicial estruturada;

11 aulas organizadas;

sistema centralizado de recursos por aula;

publicação no GitHub;

base pronta para deploy no Netlify.

Autor

Aderval Santiago Leite

Projeto desenvolvido para organização e publicação do conteúdo do curso:

IoT, Cloud e Indústria 4.0


Depois de colar no `README.md`, rode:

