const ref = (title, description) => ({
  title,
  description,
  url: "#referencias",
  type: "link",
  available: true,
});

export const recursosPorAula = {
  "aula-01": {
    leituras: [
      {
        title: "O que é IoT? — Microsoft Azure",
        description: "Leitura introdutória sobre Internet das Coisas.",
        url: "https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/what-is-iot/",
        type: "pdf",
        available: true,
      },
      {
        title: "What is IoT? — SAP",
        description: "Material complementar sobre conceitos e aplicações de IoT.",
        url: "https://www.sap.com/brazil/insights/what-is-iot-internet-of-things.html",
        type: "link",
        available: true,
      },
      {
        title: "O que é Internet das Coisas? — Tecnoblog",
        description: "Explicação introdutória em linguagem acessível sobre IoT.",
        url: "https://tecnoblog.net/responde/o-que-e-internet-das-coisas/",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Vídeo introdutório sobre IoT",
        description: "Conteúdo em vídeo para reforçar os fundamentos da aula.",
        url: "https://www.youtube.com/watch?v=jlkvzcG1UMk",
        type: "video",
        available: true,
      },
      {
        title: "IoT Manageability — Intel",
        description: "Material complementar sobre gerenciamento e contexto de IoT.",
        url: "https://www.intel.com.br/content/www/br/pt/design/technologies-and-topics/iot/manageability.html",
        type: "link",
        available: true,
      },
    ],
    atividades: [
      {
        title: "Quizizz — Internet das Coisas",
        description: "Atividade verificadora de aprendizagem da Aula 01.",
        url: "https://quizizz.com/admin/quiz/5d8954fda0089a001c105c1e/internet-das-coisas",
        type: "link",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 01",
          "[1] MAGRANI, Eduardo. A internet das coisas. Editora FGV, 2018. [2] Pires, Paulo F., et al. Plataformas para a internet das coisas. Minicursos SBRC-Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos (2015). [3] Carrion, Patrícia, and Manuela Quaresma. Internet da Coisas (IoT): Definições e aplicabilidade aos usuários finais. Human Factors in Design 8.15 (2019): 049-066. [4] Santos, Bruno P., et al. Internet das coisas: da teoria à prática. Minicursos SBRC-Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuıdos 31 (2016): 16."),
    ],
  },

  "aula-02": {
    leituras: [
      {
        title: "Middleware — Trybe",
        description: "Plataformas de middleware e comunicação para IoT.",
        url: "https://blog.betrybe.com/tecnologia/middleware-tudo-sobre/",
        type: "link",
        available: true,
      },
      {
        title: "Protocolos de rede sem fio de IoT — Embarcados",
        description: "Leitura sobre protocolos de rede em IoT.",
        url: "https://embarcados.com.br/protocolos-de-rede-sem-fio-de-iot/#Tipos-de-protocolos-IoT",
        type: "link",
        available: true,
      },
      {
        title: "O que é IoT — TechTudo",
        description: "Exemplos e visão geral de Internet das Coisas.",
        url: "https://www.techtudo.com.br/noticias/2022/10/o-que-e-internet-das-coisas-veja-como-funciona-a-iot-e-exemplos-de-uso.ghtml",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Middleware para IoT em Python — vídeo 1",
        description: "Vídeo complementar sobre middleware.",
        url: "https://youtu.be/m6deMoGpJgQ",
        type: "video",
        available: true,
      },
      {
        title: "Middleware para IoT em Python — vídeo 2",
        description: "Vídeo complementar sobre middleware.",
        url: "https://youtu.be/5ewQBi1rx58",
        type: "video",
        available: true,
      },
      {
        title: "Protocolos de Rede para IoT — vídeo 1",
        description: "Vídeo complementar sobre protocolos.",
        url: "https://youtu.be/-tDGzwsBokY",
        type: "video",
        available: true,
      },
      {
        title: "Protocolos de Rede para IoT — vídeo 2",
        description: "Vídeo complementar sobre protocolos.",
        url: "https://www.youtube.com/watch?v=Ikvs6B2591M",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "Netlify",
        description: "Criar e publicar um app teste.",
        url: "https://www.netlify.com/",
        type: "link",
        available: true,
      },
      {
        title: "Quizizz — Áreas e desafios IoT",
        description: "Atividade verificadora de aprendizagem.",
        url: "https://quizizz.com/admin/quiz/5d77f407e3ebe1001bca7a46/areas-desafios-iot",
        type: "link",
        available: true,
      },
      {
        title: "Quizizz — TD Internet das Coisas Parte 1",
        description: "Atividade verificadora de aprendizagem.",
        url: "https://quizizz.com/admin/quiz/63c839489b4345001ede1fb6/td-internet-das-coisas-parte-1",
        type: "link",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 02",
        "[1] SERGIO, Luis Antonio Pereira. Plataformas de middleware IoT livres para fins didáticos. [2] PIRES, Paulo F. et al. Plataformas para a internet das coisas. [3] SCHENFELD, Matheus Crespi et al. Arquitetura para fog computing em sistemas de middleware para internet das coisas."
      ),
    ],
  },

  "aula-03": {
    leituras: [
      {
        title: "Plataformas Arduino",
        description: "Leitura específica sobre plataforma Arduino.",
        url: "https://revistas.rcaap.pt/uiips/article/view/14354",
        type: "pdf",
        available: true,
      },
      {
        title: "Primeiros passos com Tinkercad Circuits",
        description: "Leitura complementar sobre Arduino e Tinkercad.",
        url: "https://www.makerzine.com.br/programacao/primeiros-passos-com-tinkercad-circuits-2-exemplos/",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Plataformas Arduino — vídeo",
        description: "Vídeo introdutório sobre Arduino.",
        url: "https://youtu.be/QO3XR_s9rL0",
        type: "video",
        available: true,
      },
      {
        title: "Plataformas Arduino Tinkercad — vídeo",
        description: "Vídeo introdutório sobre Tinkercad.",
        url: "https://youtu.be/d70gjJgyXSA",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "Reproduzir circuito do vídeo",
        description: "Atividade verificadora: reproduzir o projeto do vídeo no Tinkercad.",
        url: "https://youtu.be/d70gjJgyXSA",
        type: "video",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 03",
        "[1] BANZI, Massimo; SHILOH, Michael. Primeiros passos com o Arduino. [2] PEREZ, Anderson Luiz Fernandes et al. Uso da Plataforma Arduino para o Ensino e o Aprendizado de Robótica. [3] SANCHES, William Ferreira et al. A Utilização do emulador de arduino tinkercad para o ensino de lógica de programação e eletrônica."
      ),
    ],
  },

  "aula-04": {
    leituras: [
      {
        title: "Sistemas Embarcados",
        description: "Leitura específica sobre sistemas embarcados.",
        url: "https://files.comunidades.net/mutcom/ARTIGO_SIST_EMB.pdf",
        type: "pdf",
        available: true,
      },
      {
        title: "Elicitação e Especificação de Requisitos para Sistemas Embarcados",
        description: "Leitura complementar sobre requisitos em sistemas embarcados.",
        url: "https://eventos.spc.org.pe/cibse2015/pdfs/07_WER15.pdf",
        type: "pdf",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Cursos — Sistemas Embarcados / Microcontroladores",
        description: "Material complementar sobre microcontroladores.",
        url: "https://embarcados.com.br/cursos/",
        type: "link",
        available: true,
      },
      {
        title: "Arquitetura de Software para Sistemas Embarcados",
        description: "Vídeo complementar da aula prática.",
        url: "https://www.youtube.com/watch?v=UIAOR32H1vk",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "Projeto prático Arduino / Tinkercad",
        description: "Criar os exercícios propostos no slide: serial Hello World, Blink, 4 LEDs, lâmpada, LCD, otimização com FOR e quiz em equipe.",
        url: "",
        type: "link",
        available: false,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 04",
        "[1] OSSADA, Jaime Cazuhiro et al. GERSE: Guia de Elicitação de Requisitos para Sistemas Embarcados. [2] BARBIERO, Andréia Aparecida; HEXSEL, Roberto André. Simulação de Sistemas Embarcados utilizando ArchC. [3] CUNHA, Alessandro F. O que são sistemas embarcados."
      ),
    ],
  },

  "aula-05": {
    leituras: [
      {
        title: "Arduino — Instalação e Configuração da IDE no Windows",
        description: "Leitura específica para ambiente de desenvolvimento.",
        url: "https://blogmasterwalkershop.com.br/arduino/arduino-instalacao-e-configuracao-no-windows",
        type: "link",
        available: true,
      },
      {
        title: "Sistema utilizando o módulo ESP8266 NodeMCU",
        description: "Leitura complementar sobre NodeMCU.",
        url: "https://repositorio.unesp.br/handle/11449/156909",
        type: "pdf",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "ThingSpeak com Arduino ESP8266",
        description: "Vídeo complementar sobre NodeMCU e ThingSpeak.",
        url: "https://www.youtube.com/watch?v=NhTru6W4LKQ",
        type: "video",
        available: true,
      },
      {
        title: "Como configurar e programar com NodeMCU ESP8266",
        description: "Vídeo complementar sobre NodeMCU.",
        url: "https://www.youtube.com/watch?v=YN522_npNqs",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "Quiz — Arduino Basic Questions and Answers",
        description: "Atividade com perguntas básicas sobre Arduino.",
        url: "https://www.sanfoundry.com/arduino-basic-questions-answers/",
        type: "link",
        available: true,
      },
      {
        title: "Quiz — 1000 Arduino Questions and Answers",
        description: "Banco complementar de questões.",
        url: "https://www.sanfoundry.com/1000-arduino-questions-answers/",
        type: "link",
        available: true,
      },
      {
        title: "Quiz — NodeMCU ESP8266 1",
        description: "Atividade sobre NodeMCU ESP8266.",
        url: "https://iot4beginners.com/nodemcu_esp8266-quiz_1/",
        type: "link",
        available: true,
      },
      {
        title: "Quiz — NodeMCU ESP8266 3",
        description: "Atividade sobre NodeMCU ESP8266.",
        url: "https://iot4beginners.com/nodemcu_esp8266-quiz_3/",
        type: "link",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 05",
        "[1] SILVEIRA, Rayanne MC; LEITE, S. L. Sistema de controle de acesso baseado na plataforma nodemcu. [2] PARIHAR, Yogendra Singh et al. Internet of things and nodemcu. [3] WICAKSONO, Mochamad Fajar. Implementasi modul wifi NodeMCU Esp8266 untuk smart home."
      ),
    ],
  },

  "aula-06": {
    leituras: [
      {
        title: "Introdução Raspberry Pi — TecnoVeste",
        description: "Leitura introdutória sobre Raspberry Pi.",
        url: "https://www.tecnoveste.com.br/raspberry-pi-o-que-e-para-que-serve-e-como-funciona/",
        type: "link",
        available: true,
      },
      {
        title: "Raspberry Pi — site oficial",
        description: "Material e documentação oficial.",
        url: "https://www.raspberrypi.org/",
        type: "link",
        available: true,
      },
      {
        title: "Livro Raspberry Pi — Google Books",
        description: "Consulta bibliográfica complementar.",
        url: "https://books.google.com.br/books?id=pEQpw3-A4wwC&dq=Raspberry+PI&hl=pt-BR&lr=",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Raspberry Pi — Ambiente Dev Python",
        description: "Vídeo complementar sobre ambiente Python no Raspberry Pi.",
        url: "https://www.youtube.com/watch?v=VrZ1APrN6uc",
        type: "video",
        available: true,
      },
      {
        title: "Transformando Raspberry Pi em plataforma de ataque USB",
        description: "Vídeo complementar.",
        url: "https://www.youtube.com/watch?v=DKg0EXyTaMA",
        type: "video",
        available: true,
      },
      {
        title: "Thonny",
        description: "Ambiente de desenvolvimento Python recomendado na aula.",
        url: "https://thonny.org/",
        type: "link",
        available: true,
      },
    ],
    atividades: [
      {
        title: "Thonny",
        description: "Ambiente Python para prática com Raspberry Pi.",
        url: "https://thonny.org/",
        type: "link",
        available: true,
      },
      {
        title: "Raspberry Pi OS",
        description: "Software oficial para Raspberry Pi.",
        url: "https://www.raspberrypi.com/software/",
        type: "link",
        available: true,
      },
      {
        title: "Simulador Raspberry OS Pi",
        description: "Simulador citado na dinâmica.",
        url: "https://sourceforge.net/projects/simus/",
        type: "link",
        available: true,
      },
      {
        title: "Banana Pi Community",
        description: "Comunidade citada na atividade.",
        url: "https://www.banana-pi.org/",
        type: "link",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 06",
        "[1] DE OLIVEIRA, Sérgio. Internet das coisas com ESP8266, Arduino e Raspberry PI. [2] RICHARDSON, Matt; WALLACE, Shawn. Getting started with Raspberry Pi. [3] UPTON, Eben; HALFACREE, Gareth. Raspberry Pi user guide. [4] HORAN, Brendan. Practical Raspberry Pi."
      ),
    ],
  },

  "aula-07": {
    leituras: [
      {
        title: "Python para desenvolvedores",
        description: "Leitura específica sobre Python para desenvolvimento.",
        url: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=1f2ee3831eebfc97bfafd514ca2abb7e2c5c86bb",
        type: "pdf",
        available: true,
      },
      {
        title: "Pattern for Python — JMLR",
        description: "Artigo sobre padrões em Python.",
        url: "https://www.jmlr.org/papers/volume13/desmedt12a/desmedt12a.pdf",
        type: "pdf",
        available: true,
      },
      {
        title: "Design Patterns em Python — Refactoring Guru",
        description: "Material complementar sobre padrões em Python.",
        url: "https://refactoring.guru/pt-br/design-patterns/python",
        type: "link",
        available: true,
      },
      {
        title: "Padrões de Projeto em Python — Novatec",
        description: "Livro complementar.",
        url: "https://novatec.com.br/livros/padroes-projeto-python/",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Bolsa de Valores com Python",
        description: "Vídeo complementar sobre aplicação prática em Python.",
        url: "https://youtu.be/FmEmlnvBcBw",
        type: "video",
        available: true,
      },
      {
        title: "Solução de PIX em projetos Python",
        description: "Vídeo complementar.",
        url: "https://youtu.be/oyQ8jK24IWg",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "PyCEPCorreios no GitHub",
        description: "Atividade prática com API e consulta de CEP em Python.",
        url: "https://github.com/mstuttgart/pycep-correios",
        type: "link",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 07",
        "[1] FONTENROSE, Joseph. Python. [2] DE SMEDT, Tom; DAELEMANS, Walter. Pattern for python. [3] BORGES, Luiz Eduardo. Python para desenvolvedores. [4] VAN ROSSUM, Guido; DRAKE JR, Fred L. Python tutorial."
      ),
    ],
  },

  "aula-08": {
    leituras: [
      {
        title: "Inovações Tecnológicas na Indústria 4.0",
        description: "Leitura específica sobre tecnologias emergentes.",
        url: "https://repositorio.ufc.br/bitstream/riufc/60805/1/2017_eve_mralbertin.pdf",
        type: "pdf",
        available: true,
      },
      {
        title: "Inovações Tecnológicas na Indústria 4.0 — artigo",
        description: "Material complementar.",
        url: "http://educa.fcc.org.br/scielo.php?pid=S2178-52012020000100124&script=sci_arttext",
        type: "link",
        available: true,
      },
      {
        title: "Tendências de inovação na indústria",
        description: "Leitura complementar sobre inovação.",
        url: "https://skyone.solutions/hub/tendencias-de-inovacao-na-industria/",
        type: "link",
        available: true,
      },
      {
        title: "Emerging technologies and pervasive intelligence — EY",
        description: "Material complementar.",
        url: "https://www.ey.com/pt_br/consulting/how-emerging-technologies-can-usher-in-the-dawn-of-pervasive-intelligence",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Indústria 4.0 — Portal da Indústria",
        description: "Material complementar sobre indústria 4.0.",
        url: "https://www.portaldaindustria.com.br/industria-de-a-z/industria-4-0/",
        type: "link",
        available: true,
      },
      {
        title: "Indústria 4.0 — vídeo",
        description: "Vídeo complementar.",
        url: "https://youtu.be/g_JJ9fRGioI",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "20 Beginner Python Projects — FreeCodeCamp",
        description: "Projetos iniciantes em Python.",
        url: "https://www.freecodecamp.org/news/20-beginner-python-projects/",
        type: "link",
        available: true,
      },
      {
        title: "Canal Code With Tomi",
        description: "Canal citado na atividade prática.",
        url: "https://www.youtube.com/c/CodeWithTomi",
        type: "link",
        available: true,
      },
      {
        title: "API Web Django — curso",
        description: "Curso complementar citado nos slides.",
        url: "https://www.freecodecamp.org/news/backend-web-development-with-python-full-course/",
        type: "link",
        available: true,
      },
      {
        title: "FreeCodeCamp",
        description: "Plataforma livre para prática.",
        url: "https://www.freecodecamp.org/",
        type: "link",
        available: true,
      },
      {
        title: "Vídeo atividade 1",
        description: "Vídeo complementar da atividade.",
        url: "https://youtu.be/pdy3nh1tn6I",
        type: "video",
        available: true,
      },
      {
        title: "Vídeo atividade 2",
        description: "Vídeo complementar da atividade.",
        url: "https://youtu.be/WNvxR8RFzBg",
        type: "video",
        available: true,
      },
      {
        title: "Vídeo atividade 3",
        description: "Vídeo complementar da atividade.",
        url: "https://youtu.be/jBzwzrDvZ18",
        type: "video",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 08",
        "Referências textuais apresentadas no slide da aula sobre tecnologias emergentes e Indústria 4.0."
      ),
    ],
  },

  "aula-09": {
    leituras: [
      {
        title: "Managing the successful convergence of IT and OT — Deloitte",
        description: "Leitura específica sobre convergência IT/OT.",
        url: "https://www2.deloitte.com/content/dam/Deloitte/global/Documents/Risk/gx-deloitte-managing-the-successful-convergence-of-it-and-ot.pdf",
        type: "pdf",
        available: true,
      },
      {
        title: "A virada de chave das redes privativas de 5G",
        description: "Leitura complementar sobre 5G e integração.",
        url: "https://teletime.com.br/28/04/2023/a-virada-de-chave-representada-pelas-redes-privativas-de-5g/",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Cloud Computing — XP Educação",
        description: "Material complementar sobre cloud.",
        url: "https://blog.xpeducacao.com.br/cloud-computing/",
        type: "link",
        available: true,
      },
      {
        title: "Ioticity M2M IoT Cloud",
        description: "Solução complementar citada no slide.",
        url: "https://www.abovenet.com.br/index.php/solucoes-1/monitoramento-e-interoperabilidade/ioticity-m2m-iot-cloud-2",
        type: "link",
        available: true,
      },
      {
        title: "Solução IoT Industrial e Telemedição — vídeo 1",
        description: "Vídeo complementar sobre cloud e IoT.",
        url: "https://youtu.be/FpT4XoqVBbE",
        type: "video",
        available: true,
      },
      {
        title: "Solução IoT Industrial e Telemedição — vídeo 2",
        description: "Vídeo complementar sobre cloud e IoT.",
        url: "https://youtu.be/_DRb0kiJ7y4",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "Quizizz — IoT Cloud Computing",
        description: "Atividade verificadora da aula.",
        url: "https://quizizz.com/admin/quiz/60f78466d39a67001f78953a/iot-cloud-computing",
        type: "link",
        available: true,
      },
      {
        title: "SurveyMonkey",
        description: "Atividade complementar citada no slide.",
        url: "https://www.surveymonkey.com/r/D78ZYG5",
        type: "link",
        available: true,
      },
      {
        title: "Vídeo complementar da atividade",
        description: "Vídeo citado na dinâmica / atividades.",
        url: "https://youtu.be/eo9i6B4XHjc",
        type: "video",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 09",
        "Referências textuais apresentadas no slide sobre integração Cloud IoT e convergência IT/OT."
      ),
    ],
  },

  "aula-10": {
    leituras: [
      {
        title: "Python para Data Science — Coodesh",
        description: "Leitura específica da aula.",
        url: "https://coodesh.com/blog/carreiras/python-para-data-science-a-linguagem-mais-utilizada-na-area/",
        type: "link",
        available: true,
      },
      {
        title: "Using Python for Big Data & Analytics — BMC",
        description: "Leitura complementar sobre Python e Big Data.",
        url: "https://www.bmc.com/blogs/python-big-data-analytics/",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Big Data Analytics Using Python",
        description: "Vídeo complementar da aula.",
        url: "https://youtu.be/cUw3DsDpQCE",
        type: "video",
        available: true,
      },
      {
        title: "Data Analysis with Python — Course",
        description: "Curso completo citado no slide.",
        url: "https://youtu.be/r-uOLxNrNk8",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "dados.gov.br",
        description: "Dataset aberto para prática com Big Data.",
        url: "https://dados.gov.br",
        type: "link",
        available: true,
      },
      {
        title: "Brasil.IO",
        description: "Dataset aberto para prática com Big Data.",
        url: "https://brasil.io/home/",
        type: "link",
        available: true,
      },
      {
        title: "Dados Abertos Câmara",
        description: "Dataset legislativo aberto.",
        url: "https://dadosabertos.camara.leg.br/",
        type: "link",
        available: true,
      },
      {
        title: "Projetos de Data Science e ML com Python",
        description: "Projetos resolvidos para prática.",
        url: "https://www.e-setorial.com.br/blog/229-170-projetos-de-data-science-e-machine-learning-com-python-resolvidos-e-explicados",
        type: "link",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 10",
        "[1] SIEGEL, Idaltchion Fabricio. Linguagem Python e suas aplicações em ciência de dados. [2] CIELEN, Davy; MEYSMAN, Arno. Introducing data science. [3] MARTÍNEZ BLANCO, Miquel. Big Data technologies for High Performance Computing."
      ),
    ],
  },

  "aula-11": {
    leituras: [
      {
        title: "Python para Data Science — Coodesh",
        description: "Leitura específica da continuação da aula.",
        url: "https://coodesh.com/blog/carreiras/python-para-data-science-a-linguagem-mais-utilizada-na-area/",
        type: "link",
        available: true,
      },
      {
        title: "Histogramas em Python — Plotly",
        description: "Leitura complementar para visualização de dados.",
        url: "https://plotly.com/python/histograms/",
        type: "link",
        available: true,
      },
      {
        title: "Using Python for Big Data & Analytics — BMC",
        description: "Leitura complementar sobre Python e Big Data.",
        url: "https://www.bmc.com/blogs/python-big-data-analytics/",
        type: "link",
        available: true,
      },
    ],
    aprendaMais: [
      {
        title: "Big Data Analytics Using Python",
        description: "Vídeo complementar da aula.",
        url: "https://youtu.be/cUw3DsDpQCE",
        type: "video",
        available: true,
      },
      {
        title: "Data Analysis with Python — Course",
        description: "Curso completo citado no slide.",
        url: "https://youtu.be/r-uOLxNrNk8",
        type: "video",
        available: true,
      },
    ],
    atividades: [
      {
        title: "dados.gov.br",
        description: "Base aberta para prática.",
        url: "https://dados.gov.br/",
        type: "link",
        available: true,
      },
      {
        title: "Brasil.IO",
        description: "Base aberta para prática.",
        url: "https://brasil.io/home/",
        type: "link",
        available: true,
      },
      {
        title: "Kaggle",
        description: "Base de dados e competições para prática.",
        url: "https://www.kaggle.com/",
        type: "link",
        available: true,
      },
    ],
    referencias: [
      ref(
        "Referências bibliográficas da Aula 11",
        "[1] SIEGEL, Idaltchion Fabricio. Linguagem Python e suas aplicações em ciência de dados. [2] CIELEN, Davy; MEYSMAN, Arno. Introducing data science. [3] MARTÍNEZ BLANCO, Miquel. Big Data technologies for High Performance Computing."
      ),
    ],
  },
};