import React, { useEffect, useState } from "react";
import { Title } from "../styled";

import { IoIosArrowDown } from "react-icons/io";

import Faq from "react-faq-component";

const Datas = () => {
  const eleicoes = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "261",
        title: "Para que serve e o que significa este Tópico?",
        content: `Serve e tem por objetivo auxiliar leigos com novas informações sobre a
        política brasileira e os direitos ligados às eleições de 2022. Também serve para simplesmente ajudar 
        a indicar onde encontrar estas mesmas informações sobre política e direitos das eleições, já existentes
        dentro deste mesmo APP. Assim, significa um apoio extra para a população em termos de informações sobre
        o processo eleitoral no ano de 2022, pelo qual serão escolhidos, para o Poder Executivo Federal,
        novos Presidente e Vice-Presidente da República, assim como novos Governadores e Vice-Governadores,
        no âmbito de cada um dos 26 Estados brasileiros (Poder Executivo Estadual) e no Distrito Federal (Poder Executivo Distrital); 
        e para o Poder Legislativo, novos Deputados Estaduais, Distritais, Federais e Senadores da República, os quais integrarão,
        respectivamente, as Assembleias Legislativas Estaduais, a Câmara Legislativa Distrital, a Câmara dos Deputados (Federal) e o Senado Federal.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "262",
        title: `Qual Item, Capítulo ou Subcapítulo deste APP pode mais diretamente auxiliar na informação sobre direitos ligados às eleições ?`,
        content: `Em primeiro lugar, o subcapítulo destinado aos “Direitos Políticos”. E, para complementação, todo o APP, mas com atenção especial para todos os direitos fundamentais, principalmente para direitos de liberdade e direitos sociais, pois as “promessas de campanha” de cada candidato envolvem, diretamente, direitos sociais como saúde, educação, segurança etc., bem como direitos ligados à cidade, como os ligados às mais variadas políticas urbanas e ambientais, além, sempre, dos direitos de liberdade, como proteção à intimidade, vida privada, casa, manifestação do pensamento etc.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "274",
        title: `O que são a “Ficha Limpa” e a “Lei da Ficha Limpa" ?`,
        content: `“Ficha Limpa” é uma expressão que significa que a pessoa não possui em sua “ficha” condenações que possam “sujar” a sua imagem ou trajetória. Valendo-se desta expressão, foi criada a “Lei da Ficha Limpa”,ou seja, a Lei Complementar nº 135, de 04 de junho de 2010. Tal Lei, na verdade, alterou uma outra Lei (a Lei Complementar nº 64, de 18 de maio de 1990 – “Lei das Inelegibilidades”) para incluir nela mais hipóteses de situações que fazem com que pessoas NÃO POSSAM SE CANDIDATAR e,assim, serem eleitas para cargos públicos eletivos. Em outras palavras, a Lei da Ficha Limpa aumentou os casos do que se chama “inelegibilidade” e, por exemplo,fez com que passassem a ser inelegíveis pessoas com condenação definitiva (transitada em julgado) ou com condenação,ainda que não definitiva, dada por um órgão judicial colegiado, sobre uma lista de matérias e assuntos. Por exemplo,pessoas condenadas por crimes “contra a economia popular, a fé pública, a administração pública e o patrimônio publico““contra o patrimônio privado, o sistema financeiro, o mercado de capitais e os previstos na lei que regula a falência” , “contra o meio ambiente e a saúde pública”; “contra a vida e a dignidade sexual” e,entre outros, crimes de “de lavagem ou ocultação de bens, direitos e valores” ,“de tráfico de entorpecentes e drogas afins, racismo, tortura, terrorismo e hediondos”,e “de redução à condição análoga à de escravo ”.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "263",
        title: `O que são os “Partidos Políticos” ?`,
        content: `De forma simplificada, os “Partidos Políticos” são associações que possuem ideologias e objetivos comuns, previstos em um Estatuto registrado junto ao “Tribunal Superior Eleitoral” (TSE), nos termos do Art. 17, § 2º, da Constituição. Sendo ainda mais preciso, cada "Partido Político" será uma associação, com personalidade jurídica, com um Estatuto próprio, que professará e possuirá ideologias e objetivos comuns, ou seja, previstos em seu Estatuto, aceitos e queridos por cada um de seus filiados e membros. Portanto, quanto mais "Partidos Políticos", mais ideias e ideais diferentes, aglutinados de forma organizada, estarão à disposição da população, para que esta possa escolher candidatos e saber quais destes mais se aproximam com as ideias e ideais de cada eleitor brasileiro. Ainda mais em época de eleições.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "264",
        title: `Qual a importância dos “Partidos Políticos” ?`,
        content: `Resumidamente, os “Partidos Políticos” são de enorme importância para a manutenção de um regime democrático. Pois a sua existência faz com que várias ideias e ideais possam ser professados, de modo organizado, vinculado ao Partido e desde que respeitados os direitos fundamentais da pessoa humana, o pluripartidarismo (a possibilidade de existência de vários “Partidos Políticos”), a soberania nacional e o próprio regime democrático (Art. 17, caput, da Constituição). Dessa forma, estimula-se o poder do povo quando da ocorrência de eleições, ou seja, do momento de escolha dos candidatos em que se vai votar, com base em ideias e ideais dos Partidos a que cada candidato se encontra filiado.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "265",
        title: `Pode um candidato mudar de “Partido Político” após ser eleito por um outro “Partido Político” ?`,
        content: `Pelas normas constitucionais atuais sobre o que se chama “FIDELIDADE PARTIDÁRIA”, o objetivo é impedir que um candidato eleito mude de “Partido Político” após se eleger. Pois todos que votaram em um candidato, também votaram no “Partido Político” ao qual ele se vinculou para concorrer em uma eleição. Mas a própria Constituição previu poucas situações que podem permitir que um candidato eleito por um “Partido Político” troque de Partido após se eleger. Seriam, realmente, exceções. A regra geral e maior a ser respeitada é a da “FIDELIDADE PARTIDÁRIA” (Art. 17, § 1º e § 5º).`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "266",
        title: `É possível alguém se candidatar a um cargo eletivo sem estar vinculado, isto é, filiado a um “Partido Político” ?`,
        content: `"Não. A candidatura de qualquer pessoa a um cargo público eletivo depende da prévia filiação a um “Partido Político”. No Brasil, não se admite a “candidatura avulsa”, ou seja, aquela em que uma pessoa se candidata de modo avulso, sozinha, sem estar vinculada a nenhum Partido. Este o previsto no Art. 14, § 3º, inciso V, da Constituição de 1988."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "267",
        title: `"Após a votação por parte do povo brasileiro, como serão escolhidos os vencedores e, portanto, aqueles que vão ocupar os cargos eletivos públicos no Poder Executivo e no Poder Legislativo? "`,
        content: `"Existem, no Brasil, para a escolha dos representantes do povo brasileiro, 02 (dois) sistemas. O primeiro, mais famoso e simples de entender, chamado majoritário e o segundo, de entendimento mais complexo, chamado proporcional."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "268",
        title: `"O que é e para que serve o chamado Sistema Majoritário ?" `,
        content: `"O Sistema Majoritário é o que faz com que uma pessoa e candidata seja eleita pela maioria dos votos válidos em uma eleição. A maioria significa a metade mais um, ou seja, 50% (cinquenta por cento) dos votos, mais um voto. Este sistema, por exemplo, é adotado para a escolha de todos os Chefes do Poder Executivo, ou seja, para Presidente da República, Governadores de Estado e do Distrito Federal (Brasília), como será no caso do ano de 2022, além de, na esfera de cada Município do país, para Prefeitos de cada cidade do Brasil, como ocorrido no ano de 2020. Logicamente, o mesmo sistema é automaticamente adotado para a escolha de todos os vices (Vice-Presidente, Vice-Governadores, Vice-Prefeitos etc.). E também será usado o sistema majoritário para a escolha dos Senadores da República. "`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "269",
        title: `"O que são votos válidos ?"`,
        content: `"Os votos válidos são todos, menos os votos brancos e nulos. No sistema majoritário, seriam os votos nominais, ou seja, aqueles dados a alguém, a uma pessoa que tem nome e que seja candidata. No sistema proporcional, além dos votos nominais, há os votos em legenda, ou seja, os votos dados a um Partido Político ou a uma coligação de Partidos Políticos (desde que previamente formada para que o eleitor possa ter esta opção na urna eletrônica). Assim, para a escolha dos cargos dos chefes dos Poderes Executivos, isto é, Presidente da República, Governador de cada Estado, Governador do Distrito Federal e Prefeito de cada Município (incluindo todos os respectivos Vices), aplica-se o sistema majoritário. Quem receber mais votos válidos é o primeiro colocado na eleição. No caso de existir o 2º Turno, quando os 02 (dois) candidatos mais votados no 1º Turno disputarão uma nova etapa da eleição, sai-se vencedor o que obtiver o maior número de votos válidos nesta segunda etapa eleitoral, ou seja, no 2º Turno das eleições."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "270",
        title: `"Quando NÃO haverá o chamado 2º Turno?"`,
        content: `"Não haverá 2º Turno quando, o primeiro colocado no resultado do 1º Turno da eleição para os cargos do Poder Executivo, obtiver mais da metade dos votos válidos, ou seja, mais do que a soma dos votos válidos de todos os demais candidatos. É um caso de clara maioria absoluta. Também não haverá 2º Turno para as eleições para Vereadores, para Deputados Federais e Estaduais e Senadores da República, ou seja, não haverá 2º Turno para eleições para a escolha dos membros do Poder Legislativo brasileiro, em todas as esferas (União, Estados, Municípios e Distrito Federal). Esta escolha se dá em apenas 01 (um) turno."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "271",
        title: `"Quando HAVERÁ o chamado 2º Turno?"`,
        content: `"Quando o primeiro colocado no resultado do 1º Turno da eleição para os cargos do Poder Executivo não obtiver mais da metade dos votos válidos, ou seja, mais do que a soma dos votos válidos de todos os demais candidatos. Então, em situações em que o primeiro colocado no 1º Turno é acompanhado mais de perto, em número de votos, por 01 (um) ou mais candidatos, faz-se uma nova eleição (uma nova etapa eleitoral), da qual participarão os 02 (dois) candidatos mais votados no 1º Turno."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "272",
        title: `"O que é e para que serve o chamado Sistema Proporcional ?`,
        content: `"O Sistema Proporcional é usado, por exemplo, para a escolha dos Vereadores e, também, tendo em vista as eleições de 2022, para a escolha dos Deputados Federais, cujo resultado reflete no número dos Deputados Estaduais de cada Estado. Em um primeiro momento, a proporcionalidade está ligada à população de cada um dos 26 Estados do Brasil e do Distrito Federal (vale lembrar que o Distrito Federal não é um Estado, nem um Município; é a capital do Brasil – Brasília -, mas possui Poderes Executivo e Legislativo próprios, o que faz com que tenha eleições também próprias), valendo ressaltar que o Estado com menor população terá 08 (oito) Deputados Federais e o com maior população, o número de 70 (setenta) Deputados Federais, com um máximo de 513 (quinhentos e treze) Deputados Federais na Câmara dos Deputados, de acordo com o Art. 45, § 1º, da Constituição. Quanto à definição dos vencedores para todas as Casas Legislativas do país (exceção feita ao Senado Federal, cujo resultado depende de uma eleição mais aproximada do sistema majoritário, conforme Art. 46 da Constituição) a complexidade é maior e aqui não se adentrará, pois se está diante de matéria que mais se aproxima do Direito Eleitoral."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "273",
        title: `"Há algum cálculo para a ocupação dos cargos do Poder Legislativo ?"`,
        content: `"Sim. A questão pode ser um POUCO COMPLEXA. Mas VALE A PENA QUE TENTEMOS ENTENDER. Para a Câmara dos Deputados e a do Distrito Federal (DF), faz-se um cálculo proporcional à população de cada Estado e do DF, não podendo nenhum Estado ou o DF ter menos de 08 (oito) Deputados Federais e mais de 70 (setenta) Deputados Federais. Sendo que o número fixo de Deputados Federais no Brasil é de 513 (quinhentos e treze), ou seja, a Câmara dos Deputados possui 513 (quinhentas e treze) cadeiras, a serem ocupadas pelos Deputados eleitos pelo povo. Em um primeiro momento, assim e, com base nisso, se faz o cálculo matemático. Para a Assembleia Legislativa de cada Estado, assim como para a chamada Câmara Legislativa do Distrito Federal, aplica-se o que aqui livremente se chama de uma proporcionalidade indireta. O número de Deputados Estaduais (Art. 27, da Constituição de 1988) em cada Assembleia Legislativa dependerá do número de Deputados Federais que o Estado tiver na Câmara dos Deputados. De forma mais precisa, será o triplo (3 vezes mais) do número de Deputados Federais, até a quantidade de 36 (trinta e seis) Deputados Estaduais. A partir daí, o cálculo é feito de 01 (um) pra 01 (um). Ou seja, para cada Deputado Federal acima de 12 (doze), por Estado (12 Deputados Federais vezes 3 – triplo -, será igual a 36), na Câmara dos Deputados em Brasília, o Estado que elegeu cada Deputado Federal terá direito a 01 (um) Deputado Estadual a mais. Como o número máximo de Deputados Federais por Estado é de 80, por uma questão também matemática, o número máximo de Deputados Estaduais que um Estado terá será de 94 (noventa e quatro). Exemplo - Se 01 (um) Estado brasileiro possuir 15 (quinze) Deputados Federais na Câmara dos Deputados, em Brasília, o cálculo para se saber o número de Deputados Estaduais na Assembleia Legislativa do Estado, será feito assim: 12 (Deputados Federais) x 3 = 36 (Deputados Estaduais). 12 + 1 = 13; 36 + 1 = 37. 12 + 2 = 14; 36 + 2 = 38. Finalmente, chega-se ao resultado do Exemplo: 12 + 3 = 15; 36 + 3 = 39. 39 (trinta e nove) serão os Deputados Estaduais de um Estado que possuir 15 (quinze) Deputados Federais."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "68",
        idPergunta: "335",
        title: `"Este Tópico será mantido mesmo após o término das ELEIÇÕES do ano de 2022?"`,
        content: `"Sim. Durante, provavelmente, o ano de 2022, este Tópico estará aqui disponível, ou seja, intitulado, separadamente, como ELEIÇÕES 2022 no presente APP. Ainda que depois de conhecidos os resultados das Eleições, mesmo assim, por exemplo, algumas dúvidas sobre nomes, conceitos, palavras utilizadas pela mídia e pelos candidatos poderão continuar sendo tiradas tanto neste Tópico mais especializado e temporário (como já dito, deverá existir durante o ano inteiro de 2022), quanto em todo APP e, principalmente, no outro Tópico, que não é temporário e, sim, definitivo, chamado Direitos Políticos."`,
      },
    ],
  };
  const estruturaapp = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "66",
        idPergunta: "245",
        title: `"Qual o objetivo dos Capítulos/Títulos 1, 2 e 3?"`,
        content: `"O objetivo destes Capítulos/Títulos 1, 2 e 3 é exatamente proporcionar aos LEIGOS propriamente ditos, de acordo com o explicado na Introdução Geral do APP, o acesso ao conhecimento jurídico básico, a fim de que possam exercer melhor sua cidadania. Responsabilidade Social!"`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "66",
        idPergunta: "246",
        title: `"Qual o objetivo do Capítulo 4? "`,
        content: `"Conforme claramente exposto na Introdução Geral do APP, o Capítulo 4 é voltado e destinado para várias categorias de TÉCNICOS DO DIREITO. E, NÃO, para os Leigos em Direito e matérias jurídicas (propriamente ditos)."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "66",
        idPergunta: "247",
        title: `"Qual a função, o porquê e a razão da utilização das aspas() ao longo de todo este APP?"`,
        content: `"A função, o porquê e a razão da utilização, ao longo do APP, das aspas () se refere tanto ao que determina o idioma português (transcrição de opiniões e pensamentos), quanto, principalmente, à necessidade de chamar a atenção para palavras, expressões e frases. Pois, neste APP, não são usadas formas tradicionais de se realçar palavras, expressões e/ou frases, como o negrito, o itálico e o sublinhado."`,
      },
    ],
  };
  const constituicaoAlteracao = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "5",
        idPergunta: "6",
        title: `"O que são “Emendas à Constituição” ou o que é “Emenda à Constituição” (Art. 60)?"`,
        content: `"Emenda é o nome técnico dado ao ato ou instrumento pelo qual se modifica o texto da Constituição. Até dezembro de 2017, 99 foram as Emendas à Constituição. E, após um período de, aproximadamente, 01 (um) ano e meio sem Emendas, principalmente em decorrência do ato de Intervenção Federal no Estado do Rio de Janeiro, que durou, praticamente, todo o ano de 2018, em 27 de junho de 2019 foi publicada a Emenda Constitucional nº 100. Apenas para esclarecer, um ato como a decretação de Intervenção Federalfaz com que, de acordo com o texto da própria Constituição, não possa ser a mesma alterada, ou seja, emendada. Atualmente, são já 122 as Emendas à Constituição de 1988."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "5",
        idPergunta: "7",
        title: `"Mediante 122 Emendas até a última atualização deste APP, por que não houve “aumento no número de Artigos”?`,
        content: `"Os 250 Artigos se mantêm iguais, porque os acréscimos ocorridos ao longo dos anos, ou aconteceram dentro de Artigos ou, se criadores de outros Artigos, não implicaram na criação de uma renumeração. Exemplo: Após o Art. 146 da Constituição, foi acrescentado outro. Ao invés de se renumerar todos os Artigos, criou-se o Art. 146-A. Este recurso é sempre usado, a fim de não se precisar renumerar os Artigos da Constituição."`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "5",
        idPergunta: "444",
        title: `"Por que, mesmo diante de um acréscimo de Artigos na Constituição por causa de uma Emenda, não são os Artigos renumerados, conforme exposto na questão anterior?"`,
        content: `"Porque muitos Artigos já são tão conhecidos no mundo jurídico e, até mesmo, no universo leigo do Direito, que uma renumeração geraria um grande desconforto. Por isso, lança-se mão da estratégia de se colocar, em ordem alfabética, uma letra após o novo Artigo inserido. Quando foi a Constituição modificada para a inserção de um Artigo após o Art. 146, criou-se o Art. 146-A. Basta, assim, olhar a Constituição, a qual possui vários casos parecidos. Exemplo: o Art. 5º da Constituição já é conhecido no Brasil e fora dele. Basta se falar Art. 5º da Constituição brasileirapara se saber que nele estão contidos uma série de direitos fundamentais, em um total de 78 (LXXVIII) incisos. E o mesmo vai ocorrer com tantos outros Artigos! Imagine, portanto, uma renumeração a cada nova Emenda Constitucional que acrescentasse Artigos? Vários Artigos, se localizados, em ordem numérica, depois de um novo Artigo inserido por uma Emenda, perderiam o que se pode chamar de identidade numérica!"`,
      },
    ],
  };
  const constituicaoNocoes = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "4",
        idPergunta: "1",
        title: `O que é uma “Constituição”?`,
        content: `"A Constituição é a Lei máxima dentro de um Estado. O Documento legal e normativo que comanda, juridicamente, um país. Assim, outras leis criadas em um país, devem obediência à Constituição, ou seja, seu teor não deve entrar em conflito com a Constituição.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "4",
        idPergunta: "2",
        title: `O que acontece quando uma lei criada em um país entra em choque com alguma norma constitucional, ou seja, com a Constituição?`,
        content: `Enquanto ninguém descobrir ou, mesmo descobrindo, não pedir ao Poder Judiciário para se manifestar sobre o que se chama “inconstitucionalidade” de uma lei, a lei continua vigente e produzindo efeitos normalmente. Pois, toda lei criada pelo Poder Legislativo, goza da chamada presunção de constitucionalidade. Ou seja, se a lei foi criada, presume-se, até manifestação do Poder Judiciário expressa em contrário, que seja constitucional, isto é, que esteja de acordo com a Constituição.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "4",
        idPergunta: "3",
        title: `O que é “poder constituinte”?`,
        content: `É o poder de criar uma nova Constituição para um país. Em países democráticos (democracia significa “poder do povo” – “demo + cracia”), este poder decorre do povo. Como as sociedades são complexas e muito numerosas, o povo, normalmente, transfere a alguns representantes este poder. E, também normalmente, quando estes representantes se unem para criar uma nova Constituição, reúnem-se no que é chamado de “Assembleia Nacional Constituinte”. Se, por outro lado, o país não for democrático, o poder constituinte pode ser exercido, até mesmo, por uma só pessoa, que, sozinha, pode criar uma nova Constituição (Ditadores, por exemplo).`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "4",
        idPergunta: "4",
        title: `O que são “cláusulas pétreas”?`,
        content: `São as normas jurídicas, dentro de uma Constituição, consideradas, em uma análise básica, inalteráveis, ou seja, imodificáveis. No Brasil, as cláusulas pétreas estão previstas no Art. 60, parágrafo quarto, da Constituição. São assim chamadas em razão da associação da palavra pétrea com a figura da pedra, pois esta é dura, na maioria das vezes, não quebrável. Exemplo: a forma federal de Estado, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos fundamentais são imodificáveis. No caso, principalmente, dos direitos fundamentais, modificações são até possíveis, desde que sejam para aumentar o número de direitos fundamentais, mas, jamais, para os reduzir.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "4",
        idPergunta: "5",
        title: `De que “ano” é a Constituição brasileira atual?`,
        content: `A Constituição brasileira atual é de 1988, tendo entrado em vigor em 05 de outubro daquele ano. Sempre possuiu e, ainda possui, 250 Artigos, que já foram alterados ou acrescentados, até a última atualização deste APP, 122 vezes.`,
      },
    ],
  };
  const constituicaoHistoria = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "6",
        idPergunta: "8",
        title: `O Brasil já teve “outras Constituições”?`,
        content: `Sim. A atual é a oitava. O Brasil se tornou independente de Portugal em 07 de setembro de 1822 e, a partir daí, teve oito Constituições: as de 1824, 1891, 1934, 1937, 1946, 1967, 1969 e 1988.`,
      },
    ],
  };
  const constituicaoApresentacao = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "7",
        idPergunta: "9",
        title: `Podem existir “outras Constituições dentro do Brasil”?`,
        content: `Sim, no caso de Estados e Municípios, mas desde que respeitando, sempre, a Constituição Federal de 1988. Assim, cada Estado membro (Rio de Janeiro, São Paulo, Bahia, Acre etc.) tem a sua Constituição Estadual (Art. 25). Os Municípios também possuem uma espécie de “Constituição”, mas que não é chamada de Constituição e, sim, de “Lei Orgânica Municipal” (Art. 29). A Constituição de cada Estado será o conjunto de normas jurídicas mais importante e com validade apenas dentro do Estado que a criou, assim como a Lei Orgânica de cada Município será o conjunto de normas jurídicas mais importante e com validade apenas dentro do Município que a criou. E tanto todas as Constituições, de cada um dos Estados brasileiros, quanto todas as Leis Orgânicas, de cada um dos Municípios brasileiros, devem respeito total e se subordinam à Constituição de 1988, ou seja, à Constituição da República Federativa do Brasil, que nada mais é do que o conjunto de normas jurídicas superior a todas as demais normas jurídicas (leis etc.) existentes no Brasil.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "7",
        idPergunta: "10",
        title: `Como “é feito e é apresentado o texto” da Constituição brasileira?`,
        content: ` Constituição se subdivide em Títulos (grandes capítulos), subdivididos em Capítulos, subdivididos em Seções, subdivididas em Subseções. No tocante às normas jurídicas, subdivide-se em Artigos. Um Artigo pode ter incisos (I, II, III etc. – enumerados em algarismos romanos) e cada inciso, se possuir mais subdivisões, pode ter alíneas (A, b, c etc.). Pode, também, um Artigo ser complementado pelos chamados parágrafos, cujo símbolo é “§”. E cada parágrafo pode ter as mesmas subdivisões de um Artigo (incisos e alíneas). A Constituição de 1988 possui 09 Títulos (grandes capítulos). Antes destes Títulos existe o preâmbulo, que nada mais é do que uma simples introdução e anunciação, antes do início do texto da Constituição. E a Constituição possui, após os 09 Títulos e seus 250 Artigos, o chamado “Ato das Disposições Constitucionais Transitórias” (ADCT). Trata-se de uma espécie de “capítulo à parte” e final, que tem por objetivo trazer normas jurídicas chamadas de transição. De transição da Constituição anterior à Constituição de 1988 para um novo momento, uma nova ordem surgida a partir da entrada em vigor da nova Constituição. O ADCT possui 114 Artigos e não possui nenhuma subdivisão em capítulos.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "7",
        idPergunta: "11",
        title: ` O que significa o “ADCT (Ato das Disposições Constitucionais Transitórias)”?`,
        content: `O ADCT é uma espécie de “capítulo à parte”, separado e final da Constituição e que se localiza após o término do texto chamado principal. O texto considerado principal possui 09 Títulos (grandes capítulos) e 250 Artigos. Já o ADCT possui 114 Artigos e não possui nenhuma subdivisão em capítulos. O ADCT tem por objetivo trazer normas jurídicas chamadas de transição. De transição da Constituição anterior à Constituição de 1988 para um novo momento, uma nova ordem surgida a partir da entrada em vigor da nova Constituição.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "7",
        idPergunta: "12",
        title: `O que significa caput?`,
        content: `A palavra caput, derivada do latim, significa cabeça. O caput de um Artigo é o que está apenas em sua “cabeça”, ou seja, excluindo teor de eventuais parágrafos.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "7",
        idPergunta: "13",
        title: `O que é o “preâmbulo” da Constituição?`,
        content: `O preâmbulo é como se fosse uma introdução, uma anunciação do término do trabalho de elaboração da Constituição e de proclamação do início da sua vigência. O preâmbulo não é norma, não possui direito e nem obrigações. Pode ser igualado a uma mera “fala política”. Nada mais do que isso. Este é o teor do preâmbulo. “Nós, representantes do povo brasileiro, reunidos em Assembleia Nacional Constituinte para instituir um Estado Democrático, destinado a assegurar o exercício dos direitos sociais e individuais, a liberdade, a segurança, o bem-estar, o desenvolvimento, a igualdade e a justiça como valores supremos de uma sociedade fraterna, pluralista e sem preconceitos, fundada na harmonia social e comprometida, na ordem interna e internacional, com a solução pacífica das controvérsias, promulgamos, sob a proteção de Deus, a seguinte CONSTITUIÇÃO DA REPÚBLICA FEDERATIVA DO BRASIL”.`,
      },
    ],
  };
  const constituicaoReligiao = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "8",
        idPergunta: "14",
        title: `A Constituição tem relação com alguma “religião” ou com “Deus”?`,
        content: `Não. A Constituição não tem relação com nenhuma religião, nem com Deus. Foi feita por homens e mulheres. E possui uma norma que estabelece a plena liberdade de crença e de religião. Este Artigo estabelece que “é inviolável a liberdade de consciência e de crença, sendo assegurado o livre exercício dos cultos religiosos e garantida, na forma da lei, a proteção aos locais de culto e a suas liturgias” (Art. 5º, inciso VI). Assim, o Estado brasileiro é definido como “laico”.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "8",
        idPergunta: "15",
        title: `Por que o preâmbulo fala de “Deus”?`,
        content: `O preâmbulo é como se fosse uma introdução, uma anunciação do término do trabalho de elaboração da Constituição e de proclamação do início da sua vigência. O preâmbulo não é norma, não possui direito e nem obrigações. Assim, deve ser considerado um simples texto de abertura da Constituição. Por isso, quando o preâmbulo diz “sob a proteção de Deus”, não está criando nenhuma relação da Constituição com Deus e nem com nenhuma religião. Pois o preâmbulo não faz parte do corpo, do texto da Constituição.`,
      },
    ],
  };
  const democracia = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "9",
        idPergunta: "16",
        title: `O que é uma “democracia representativa”?`,
        content: `É aquela em que o povo exerce seu poder por meio de representantes eleitos. Estes últimos (representantes eleitos) são eleitos e representam, junto ao Poder Público, cada cidadão que neles votou.`,
      },
      {
        idCategoriaPai: "1",
        idCategoria: "9",
        idPergunta: "17",
        title: `O que é uma “democracia participativa”?`,
        content: `É aquela que possui instrumentos para que o povo possa participar diretamente das decisões tomadas pelo Poder Público. Exemplos: plebiscito e referendo são instrumentos de consulta, pelo Poder Público, à população, consideradas elementos de uma democracia participativa. Audiência Públicas, entre outras formas e, até mesmo, as próprias manifestações populares, desde que pacíficas e respeitando a Constituição e as Leis, podem também ser inseridas na categoria denominada “democracia participativa”.`,
      },
    ],
  };
  const principios = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "10",
        idPergunta: "18",
        title: `O que são “princípios jurídicos”?`,
        content: `São considerados normas jurídicas mais abertas à interpretação, se comparadas às regras jurídicas, em que a precisão de encaixe ou não a uma situação, a um fato, é mais direta e objetiva. Os princípios jurídicos, por isso, são considerados mais maleáveis do ponto de vista de seu alcance normativo. São normas mais flexíveis, com maior alcance, em razão de serem mais abertos a múltiplos entendimentos. E sua importância é sempre muito grande. Exemplo: a dignidade humana, prevista no Art. 1º, inciso III, da Constituição, é um princípio. Pois o que significa dignidade humana? As concepções podem variar de acordo com as visões de cada pessoa e o Poder Judiciário brasileiro, ao julgar Causas e Processos Judiciais, finda por dar a cada situação a interpretação que entende mais cabível para a dignidade humana, caso este princípio esteja relacionado à Causa ou ao Processo que se está julgando.`,
      },
    ],
  };
  const inconstitucionalidade = {
    rows: [
      {
        idCategoriaPai: "1",
        idCategoria: "40",
        idPergunta: "109",
        title: `O que significa dizer que “algo é inconstitucional”?`,
        content: `Quando uma determinada conduta, praticada por cada um de nós, desde uma frase até, por exemplo, qualquer tipo de ato e prática, contariam, de alguma maneira, o que está escrito na Constituição, pode-se dizer que a conduta ou o ato e prática são inconstitucionais, ou seja, agridem o que está previsto na Constituição, que é a Lei Máxima e Maior do país. De forma um pouco mais técnica, a hipótese mais comum é a seguinte: se uma lei, criada pelo Poder Legislativo, de alguma maneira, normalmente não vista nem percebida quando de sua criação e elaboração, entra em choque com o que estabelece a Constituição, diz-se que a referida lei é inconstitucional. Entretanto, quanto a este ponto de vista um pouco mais técnico, é muito importante observar que, enquanto a referida lei não for expressa e formalmente declarada inconstitucional pelo Poder Judiciário, cuja cúpula é o Supremo Tribunal Federal (STF), produz efeitos normais e vale normalmente em nosso Ordenamento Jurídico, ou seja, no país."`,
      },
    ],
  };
  const govestreg = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "11",
        idPergunta: "19",
        title: `Qual a “forma de governo”, no Brasil?`,
        content: `República. Mas, de 1824 até a proclamação da República, em 1889, a forma de governo, no Brasil, foi a Monarquia.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "11",
        idPergunta: "20",
        title: `Qual a “forma de Estado”, no Brasil?"`,
        content: `Federal. Mas, de 1824 até a proclamação da República, em 1889, a forma de Estado, no Brasil, foi a unitária.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "11",
        idPergunta: "21",
        title: `O que significa “República”?`,
        content: `Res + publica. Coisa pública.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "11",
        idPergunta: "22",
        title: `O que significa “Federal”?`,
        content: `Significa um Estado que descentraliza competência e poderes, internamente. O federalismo, no Brasil, subdivide competências e poderes entre a União (1º grau federativo ou primeira camada), os Estados membros da Federação (2º grau federativo ou segunda camada), que totalizam 26 e os Municípios (3º grau federativo ou terceira camada), que totalizam mais de 5.500. O Distrito Federal não é Estado, nem Município. É uma figura extra, especial, com a função de ser a capital da República brasileira, conforme estabelece a Constituição (Art. 18).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "11",
        idPergunta: "23",
        title: `Onde fica o “Distrito Federal” e qual a “capital” do Brasil?`,
        content: `Brasília. Até 21 de abril de 1960, o Distrito Federal e, portanto, a capital do Brasil era o Rio de Janeiro.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "11",
        idPergunta: "24",
        title: `No Brasil, a Constituição estabeleceu uma “democracia representativa” ou uma “democracia participativa”?`,
        content: `Ambas. O parágrafo único, do Art. 1º, da Constituição, serve de base tanto para uma democracia (“todo poder emana do povo”), quanto para uma democracia representativa (“que o exerce por meio de representantes eleitos”) e uma democracia participativa (“ou diretamente, nos termos desta Constituição”). Mas, majoritariamente, o poder é exercido, no Brasil, por meio da democracia representativa."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "11",
        idPergunta: "25",
        title: `O que significam “Estado Democrático de Direito” e “Estado de Direito”?`,
        content: `O primeiro é o Estado pautado no Direito (na Lei, em sentido amplo) e cujo Direito foi e é criado pelo povo. Já o Estado de Direito, na Era Moderna, tem surgimento gradativo, mas a Revolução Francesa seria um principal marco histórico. Ou seja, a Revolução Francesa significou um símbolo do fim das monarquias absolutistas, em que todo poder se concentrava nas mãos dos monarcas absolutistas, inclusive o poder de criar e ditar as normas (o Direito) de seu país. Com o fim das citadas monarquias absolutistas, as ideias e ideais subsequentes foram o de criação de um Estado cujos poderes dos governantes não fossem mais ilimitados. Seriam então limitados pelo Direito. Com o passar do tempo e a consolidação de regimes democráticos, evolui-se para o Estado Democrático de Direito, ou seja, um Estado, pautado no Direito, mas com este (Direito) sendo criado pelo povo."`,
      },
    ],
  };
  const poderes = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "12",
        idPergunta: "26",
        title: `Quais são os “Poderes da República Federativa do Brasil”, ou seja, do Estado brasileiro?`,
        content: `Poderes Executivo (função principal: governar e administrar), Legislativo (função principal: criar leis) e Poder Judiciário (função principal: pacificar conflitos por meio de julgamentos dos casos que são a ele apresentados).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "12",
        idPergunta: "27",
        title: `O que significa “separação de Poderes”?`,
        content: `Significa que os Poderes Executivo, Legislativo e Judiciário devem ser independentes um do outro. Mas o Art. 2º da Constituição fala em harmonia. Significa que os Poderes, mesmo independentes, devem comunicar-se, minimamente, a fim de conduzir, de forma harmônica, os rumos do país.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "12",
        idPergunta: "605",
        title: `Como podem agir cada um dos Poderes da República brasileira?`,
        content: `O Poder Executivo, na sua tarefa de administração do Estado brasileiro, deve agir de acordo com a Constituição e com a lei, mas sem a necessidade de um estímulo da população ou de um cidadão para poder atuar. Mediante as necessidades, desde o Presidente da República, até quaisquer dos funcionários públicos desse Poder, o gerenciamento do Estado brasileiro pode ocorrer de ofício, ou seja, a partir de decisão (unilateral) de cada membro da Administração Pública. O Poder Legislativo, para a elaboração das leis, seguindo os ditames legais e constitucionais, também pode agir sem a necessidade de um estímulo da população ou de um cidadão para poder atuar. Por fim, diferentemente dos demais Poderes, o Poder Judiciário, para poder atuar e agir, precisa de um estímulo, uma provocação inicial da uma pessoa, instituição, órgão etc., a fim de que possa começar a agir.`,
      },
    ],
  };
  const direitosFundamentais = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "13",
        idPergunta: "28",
        title: `O que são os “direitos fundamentais”?`,
        content: ` São direitos ligados à existência humana, ao Homem, à própria vida genericamente concebida (incluindo, também, fauna e flora, por exemplo) e que, ao longo dos tempos, foram crescendo em quantidade e qualidade, sendo assim inseridos no texto de Constituições, uma delas a Constituição brasileira de 1988. Os direitos fundamentais são muito semelhantes a outra categoria de direitos, os chamados “direitos humanos”. Mas, para fins de compreensão inicial, este APP diferencia direitos humanos de direitos fundamentais. Exemplo 1: muitos são os exemplos. A Constituição brasileira possui direitos fundamentais espalhados por todo seu texto. Mas, para fins de escolha, aqui se cita o Art. 5º, pois, em seus atuais LXXVIII (78) incisos, traz grande concentração de espécies de direitos fundamentais. Direitos de liberdade; princípios da igualdade e da legalidade; direito de propriedade, entre outros vários, são direitos fundamentais. Exemplo 2: em sentido mais amplo, direitos políticos, direitos da nacionalidade, direitos relativos a partidos políticos, direitos individuais e coletivos e direitos sociais, são direitos fundamentais. Sugere-se conferir cada Capítulo do Título II, da Constituição.`,
      },
    ],
  };
  const direitosLiberdade = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "117",
        title: `O que são “direitos de liberdade”?`,
        content: `São muitos os “direitos de liberdade” ou, simplesmente, liberdades, previstas na Constituição. Significam, em resumo e, breves dizeres, direitos fundamentais que as pessoas têm de fazerem ou não fazerem alguma coisa, sem a interferência de ninguém, incluindo do Estado. Exemplos: liberdade de manifestação do pensamento (Art. 5°, inciso IV); liberdade de profissão (Art. 5°, inciso XIII); liberdade de religião (Art. 5°, inciso VI); liberdade de imprensa (Art. 5°, inciso IV, junto com Art. 220); liberdade de locomoção (Art. 5º, inciso XV); liberdade de reunião (Art. 5º, inciso XVI); etc.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "118",
        title: `O que é a “liberdade de imprensa”?`,
        content: `É a liberdade de as empresas jornalísticas de radiodifusão sonora e de sons e imagens agirem, manifestarem e exporem suas ideias, sem censuras."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "120",
        title: `Pode, especificamente, a “liberdade de imprensa” sofrer limitações?`,
        content: `A regra geral no país é a da liberdade de imprensa. Entretanto, excepcionalmente, são admitidas limitações. A própria Constituição as previu, entre outros, principalmente, no Art. 221, por meio da enumeração de princípios, como o da preferência a finalidades educativas, artísticas, culturais e informativas(inciso I); promoção da cultura nacional e regional e estímulo à produção independente que objetive sua divulgação(inciso II); regionalização da produção cultural, artística e jornalística, conforme percentuais estabelecidos em lei(inciso III); e respeito aos valores éticos e sociais da pessoa e da família(inciso IV). Valendo sempre lembrar que o Art. 223 da Constituição estabelece que compete ao Poder Executivo outorgar e renovar concessão, permissão e autorização para o serviço de radiodifusão sonora e de sons e imagens, observado o princípio da complementaridade dos sistemas privado, público e estatal.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "119",
        title: `Podem os direitos de liberdadee, portanto, uma “liberdade” sofrer limitações?`,
        content: `Salvo pouquíssimas e mais aprofundadas exceções, praticamente todas as liberdades previstas na Constituição podem sofrer limitações, desde que não signifiquem um esgotamento ou um impedimento total do direito. E, na maioria das vezes, as limitações são importantes, naturais e ligadas à necessidade de se aplicar uma outra liberdade. Exemplo 1: uma pessoa tem liberdade de manifestar seu pensamento. Dentro de sua Casa, decide toda noite, às 02 horas da manhã, cantar músicas religiosas em voz alta. Se esta liberdade de cantar fosse absoluta, todos os vizinhos teriam que suportar e aceitar esta pessoa cantando em voz alta, no meio da madrugada. Fazer uma liberdade ter limites, assim, em favor da boa convivência e da aplicação de outros direitos também básicos, significa a existência de limitações, mas limitações constitucionalmente permitidas e, até mesmo, bem-vindas. Exemplo 2: a liberdade de imprensaé garantida na Constituição e entendida como uma espécie de regra geral. Entretanto, se um veículo de comunicação pretende divulgar uma notícia que invada, indevidamente, a esfera íntima de uma pessoa, violando outros direitos de liberdade, chamados de direitos à intimidade e à vida privada (Art. 5º, inciso X, da Constituição), pode ocorrer a necessidade de o veículo de comunicação ter que recuar e não mais publicar a matéria que desejava."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "128",
        title: `O que é a liberdade de manifestação de pensamento?`,
        content: `A Constituição previu que a todos é assegurada a liberdade para manifestação de pensamento, ideias e opiniões. Isto é, todos são livres para a expressão de seus pensamentos. Entretanto, no mesmo Artigo e inciso da Constituição, previu-se, também, a proibição do chamado anonimato(Art. 5º, inciso IV)."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "129",
        title: `O que é o anonimatoe o que significa a sua proibição, ou seja, a frase sendo vedado o anonimato?`,
        content: `O Art. 5º, inciso IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato. O anonimato é palavra que está ligada a anônimo, ou seja, desconhecimento por parte das pessoas de quem fez ou disse alguma coisa. Portanto, a liberdade de manifestação de pensamento está condicionada à necessidade de quem o manifestou assumir a autoria."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "130 ",
        title: `O que é o direito ao silêncioou o direito de permanecer calado?`,
        content: `A liberdade de manifestação de pensamentoinclui o direito que todos têm de, simplesmente, não manifestarem seu pensamento. de Ficarem calados. O direito a permanecer em silêncioé uma decorrência da liberdade de manifestação de pensamento, mas em sentido contrário. Apesar de não existir uma necessidade de estar escrito na Constituição, este direito ao silêncioacabou por vir escrito quando a Constituição, de forma específica, referiu-se aos direitos que todos os presostêm, sejam eles quem forem: o preso será informado de seus direitos, entre os quais o de permanecer calado, sendo-lhe assegurada a assistência da família e de advogado(Art. 5º, inciso LXIII). Exemplo 1: se uma pessoa é livre para expressar suas ideias, é automaticamente livre para não as expressar. É livre para guardar suas ideias para si própria. Exemplo 2: se uma pessoa é presa e levada a uma Delegacia, tem o direito a ficar calada e de não dizer nada."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "131",
        title: `Qual a relação entre o direito à não torturae o direito ao silêncioou o direito de permanecer calado?`,
        content: `Se não existisse o direito ao silêncioou o direito de permanecer calado, haveria um incentivo natural e ainda maior para que, em diversas situações, uma pessoa fosse forçada a dizer algo. Exemplo: uma pessoa ser forçada a dizer algo mediante a prática de tortura."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "132",
        title: `O que é o direito à não tortura?`,
        content: `A prática de atos de torturaé condenada, repudiada e reprovada na Constituição brasileira e em uma série de Tratados Internacionais. Na Constituição brasileira está previsto que ninguém será submetido a tortura nem a tratamento desumano ou degradante(Art. 5º, inciso III)."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "167",
        title: `O que são “intimidade” e “vida privada”?`,
        content: `A “intimidade” e a “vida privada” são uma espécie de espaço que toda pessoa possui para, dentro dele, exercer seus atos mais privados, íntimos e particulares. Nossos sentimentos, emoções, pensamentos e, para além disso, alguns atos (como, por exemplo, tomar um banho, ir ao banheiro, estarmos em nossos quartos etc.) e nossas relações mais próximas, tais como as que travamos com nossos pais, mães, filhos, filhas irmãs, irmãos, cônjuges, namorados, namoradas, companheiros, companheiras etc., integram este espaço que, normalmente, não é um espaço físico e, nem muito menos, um espaço bem definido. É um espaço que pode ser associado à nossa Casa, por exemplo, mas, não necessariamente somente em casa poderemos falar e pensar em intimidade e vida privada. Assim, a ideia maior que se pode passar, de forma geral, é a da ideia de privacidade, que estará conosco aonde quer que estejamos."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "168",
        title: `O que são o direito às “intimidade” e “vida privada”?`,
        content: `Se a “intimidade” e a “vida privada” são um espaço particular, que cada pessoa possui e que se encontra ligado à ideia de “privacidade”, o “direito à intimidade e à vida privada” são a sua proteção jurídica. Ou seja, a Constituição de 1988 entendeu que é de suma importância proteger a “intimidade” e a “vida privada”. Por isso, considerou-os direitos fundamentais e “invioláveis”, isto é, não podem ser violados. Isto é o que consta no Art. 5º, inciso X, da Constituição. E, se alguém, ilícita e indevidamente, interferir na privacidade de uma outra pessoa, pode, caso a pessoa que sofreu a invasão se sinta lesada, vir a arcar com uma indenização por dano moral ou material. Mas desde que, é claro, a pessoa que se sentiu lesada e prejudicada ingresse com uma Ação Judicial, alegando invasão ilícita à sua privacidade, vença a Ação e consiga uma “indenização” pelos “danos” que sofreu."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "169",
        title: `O que é o “dano moral”?`,
        content: `O “dano moral”, em comentários breves, nada mais é do que o dano causado à moral de uma pessoa. A moral, que é um termo amplo, pode ser entendida, para um bom entendimento do “dano moral”, como aquela que inclui e engloba, a honra, a dignidade, a imagem, os sentimentos etc. de cada pessoa. O “dano moral” é também chamado de “dano extrapatrimonial”.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "170",
        title: `O que é o “dano material”?`,
        content: `O “dano material” é o chamado “dano patrimonial”. É aquele que gera um prejuízo material, ou seja, financeiro a uma pessoa. Por exemplo, se alguém chuta uma bola de futebol e quebra o vidro da janela de alguém, causou um “dano material” ao dono da janela. O “dano material”, assim, está ligado a um prejuízo financeiro que pode ser causado a alguém."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "171",
        title: `É possível calcular um “dano material” e um “dano moral” com o objetivo de se indenizar uma pessoa?`,
        content: `Enquanto o cálculo de um “dano material” ou patrimonial costuma ser um cálculo simples, uma vez que depende apenas da descoberta do prejuízo financeiro causado a alguém, a chamada “moral” não possui um valor financeiro calculável. Portanto, avaliando todas as características de uma situação concreta, de um caso cotidiano, do nosso dia a dia, é que um Juiz, por exemplo, poderá tentar definir um valor em dinheiro que possa representar uma reparação para a pessoa que sofreu o dano à sua moral. Mas é fato que não é nada simples este cálculo, pois, ao contrário de um patrimônio material, que possui um valor calculável, a “moral”, a princípio, não possui um valor econômico."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "44",
        idPergunta: "175",
        title: `O que seriam os chamados sigilos?`,
        content: `De forma resumida, 03 (três) seriam as principais espécies de sigilos garantidos pela Constituição, enquanto também direitos de liberdade(Art. 5º, inciso XII): o sigilo telefônico; o sigilo das correspondências; e o sigilo de dados(basicamente dados bancários e dados fiscais). Apesar destes sigilos serem a regra principal a ser seguida, como qualquer direito fundamental, permitem exceções, que são as chamadas quebras de sigilos. Mas, como não poderia deixar de ser, o direito fundamental principal e central será sempre o do sigiloe, não, o da quebra de sigilo, a qual somente pode ocorrer em situações realmente excepcionais e em respeito tanto a outros direitos fundamentais previstos na Constituição, quanto aos vários requisitos e condições também previstos em outras leis infraconstitucionais específicas e complementadoras da Constituição.`,
      },
    ],
  };
  const direitosHumanos = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "14",
        idPergunta: "29",
        title: `O que são “direitos humanos”?`,
        content: `São direitos ligados à existência humana, ao Homem e que, ao longo dos tempos, foram crescendo em quantidade e qualidade, sendo assim declarados e inseridos no texto de diversos Tratados, Convenções e demais Documentos Internacionais, assim como em várias Constituições, uma delas a Constituição brasileira de 1988. Os direitos humanos são muito semelhantes aos chamados “direitos fundamentais”, existindo, entre estas duas categorias de direitos, vários pontos de interseção, ou seja, vários pontos em comum. Mas, para fins de compreensão inicial, este APP diferencia direitos fundamentais de direitos humanos.`,
      },
    ],
  };
  const principioIgualdade = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "46",
        idPergunta: "133",
        title: `O que é o “princípio da igualdade”?`,
        content: `O princípio da igualdade é uma das maiores bases do Direito brasileiro e de vários outros países. E um dos mais COMPLEXOS e RELATIVOS, principalmente quando se pensa em sua aplicação. Do ponto de vista formal, significa, em rápidas palavras, que todos são iguais perante a lei (Art. 5º, caput). Do ponto de vista material, ou seja, de sua aplicação mais prática, significa a igualdade de fato, no dia a dia, aplicada na vida real e em situações concretas. A Constituição brasileira abomina e repudia discriminações abusivas e odiosas, tais como as ligadas a sexo, cor, idade, origem (Art. 3º, inciso IV) etc. Entretanto, isto não significa que não se possa desigualar e diferenciar pessoas, inclusive diferenciar por questões relativas a sexo, cor, idade, origem etc. Embora estas discriminações e distinções entre pessoas devam ser evitadas, muitas vezes, até elas serão necessárias para o respeito ao próprio princípio da igualdade. Portanto, diferenciar não é um problema; mas respeitar o princípio da igualdade, pode ser. Além disso, existem infinitas formas de se diferenciar pessoas: pela cor dos olhos ou dos cabelos; pela estatura; pelo peso; pelas roupas vestidas; pelos bens que possuem etc. Aliás, um dos princípios de grande relatividade e, também por causa disso, que merece muita atenção por parte de todos, é o princípio da igualdade. De forma a fazer com que diferenças e minorias sejam respeitadas, juntamente com maiorias e comportamentos entendidos como padrões. O respeito e a tolerância à essência de todos e todas, segundo suas próprias preferências e convicções. E desde que comportamentos qualificados como excessivos e abusivos não agridam brutalmente outros direitos fundamentais. Todos e todas respeitando-se entre si e em harmonia de condições. Talvez esta, uma das mais difíceis respostas deste APP, pelo seu grau de relatividade, de necessário e sempre maior aprofundamento e estudo.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "14",
        idPergunta: "134",
        title: `Poderiam ser citados “exemplos práticos de aplicação do “princípio da igualdade”, por meio de “diferenciações” ?`,
        content: `Exemplo 1: quando, por meio de uma política de cotas, são reservadas vagas para uma Universidade em razão da cor de uma pessoa, nada mais se está fazendo do que diferenciando pessoas em razão da cor da pele. Mas esta diferenciação tem por objetivo respeitar o princípio da igualdade em sentido mais amplo, sobretudo em razão de pessoas negras terem um histórico de desfavorecimento histórico no país, com muito dificultada condição de concorrência com pessoas da cor branca. Obs. 1: Claro que sempre existem exceções, mas esta foi uma das ideias do legislador ao implantar políticas de cotas. Exemplo 2: Se uma pessoa tem um carro que custa R$ 300.000,00 (trezentos mil reais) e a Constituição permite que, por isso, um Estado membro cobre um Imposto específico (IPVA, por exemplo) maior do que sobre uma pessoa que possui um Carro que custe R$ 30.000,00 (trinta mil reais), o que se está fazendo é diferenciar pessoas. Mas, uma diferenciação que tem por objetivo respeitar e garantir um princípio maior, como é o da igualdade. Obs. 2: Claro que sempre há críticas sobre a tributação, mas a ideia central do legislador do Brasil foi a de uma proporcionalidade, ainda que não se encontre, por ventura, na condição ideal. Exemplo 3: Se as mulheres possuem vagões exclusivos para elas no transporte por metrô, também se está fazendo uma distinção entre homens e mulheres. Mas a finalidade maior desta distinção é, com base em estudos e estatísticas, proteger a figura feminina de abusos indevidos, principalmente por parte de pessoas do sexo masculino, com o objetivo principal de, com isso, fazer-se um equilíbrio, uma igualação na segurança dentro do transporte coletivo e se respeitar o princípio da igualdade. Obs. 3: claro que um cenário ideal seria o de desnecessidade deste tipo de diferenciação. Mas cada país deverá avaliar qual o grau de desvantagem de determinada classe de pessoas, de modo a tentar garantir, ainda que por meio de diferenciações, o princípio da igualdade. Exemplo 4: Se um homem vai à praia em um domingo de muito sol, deita na areia como se fosse para se bronzear e, depois, ainda toma banhos de mar, mas tudo isso vestido de terno e gravata, ele naturalmente se diferenciará de, praticamente, todos os demais banhistas e praianos. Chamará a atenção e a curiosidade de todos e todas. E poderá ser alvo de piadas. E, todo o dito, pela roupa que veste ser considerada imprópria. Este homem dificilmente estará perturbando ou ferindo outros direitos fundamentais de outras pessoas. Mas poderá ser discriminado, mesmo se for um portador de deficiência mental; mesmo se estiver “pagando uma promessa”, segundo o vocabulário popular ligado a determinadas religiões etc. Neste Exemplo, veja-se que as próprias pessoas (não somente as que reparam, mas também e, em especial, as que discriminam) fazem uma distinção, uma discriminação em razão da roupa que uma outra pessoa veste. Mas, neste caso, a discriminação e distinção, apesar de social e moralmente até embasadas, não teriam um amparo jurídico e legal. Pois, o que proíbe uma pessoa de agir assim, se não incomoda, nem mesmo fere direitos de outras pessoas? Obs.4: a complexidade do princípio da igualdade é grande, principalmente quando os casos concretos vão surgindo e exigindo interpretações, visões e algumas conclusões. Neste Exemplo, a situação narrada voltou-se para uma relação direta entre particulares, entre pessoas; enquanto que, nos Exemplos anteriores, tenha prevalecido a relação principal entre o Poder Público e a sociedade (política de cotas; tributação; e normas de transporte coletivo)`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "14",
        idPergunta: "135",
        title: `Por que o princípio da igualdade é considerado o que leva a umas das respostas mais complexas deste APP?`,
        content: `Porque a aplicação prática do princípio da igualdade é extremamente complexa. É, naturalmente, relativa e, não, absoluta. Engessar e absolutizar a aplicação do princípio da igualdade pode representar um enorme desrespeito. Seu principal norte e balizador deve ser a harmonia com outros direitos fundamentais previstos na Constituição, como direitos de liberdade, sociais, entre outros. Neste APP, foi prestigiada, pelo seu foco e objetivo, a Constituição brasileira. Mas, mesmo assim, o princípio da igualdade pode sofrer variações de entendimento, visão e interpretação em razão da localidade (Região, Estado, Município e suas diferentes culturas); em razão da época, ou seja, do momento de sua aplicação (as gerações mudam e, com elas, comportamentos, visões etc.); etc. Assim, preocupação e atenção nunca serão demais quando a questão envolver este princípio, em torno do qual a Constituição, aí sim, obrigou todos e todas ao não preconceito e à não odiosa e reprovável discriminação.`,
      },
    ],
  };
  const direitoVida = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "53",
        idPergunta: "172",
        title: `O que é o direito à vida ?`,
        content: `O direito à vida, uma das bases da Constituição de 1988, é um direito fundamental, não somente expresso na Constituição de 1988, mas também considerado um pressuposto para o exercício de muitos outros direitos fundamentais previstos na mesma Constituição. A ideia jurídica maior é a de que todas as pessoas têm o direito de estarem vivas. Mas, se o direito for melhor e mais detalhado, muitas outras maneiras de interpreta-lo surgem, como, por exemplo, a ligada à ideia de qualidade de vida, que envolve uma série de outros direitos previstos na própria Constituição de 1988, como os direitos sociais à saúde, segurança, educação, lazer, transporte etc. O direito à vida aparece na Constituição em vários momentos, mas um dos primeiros e principais é o do Art. 5º, caput, que faz menção direta à inviolabilidade do direito à vida.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "53",
        idPergunta: "173",
        title: `A proteção do direito à vida abrange a proteção de todos os tipos de vida , tais como dos animais e da flora brasileiros?`,
        content: `O direito à vida, previsto como direito fundamental no Art. 5, caput, além de em outros momentos da Constituição, refere-se, principalmente, à vida humana. A Constituição brasileira, quando foi elaborada, teve como principal foco de proteção a figura do ser humano. Entretanto, a própria Constituição, em sua área (Título e Capítulos) dedicada à Ordem Ambiental, não deixou de se preocupar com a fauna (animais) e a flora. Em seu Art. 225, § 1º, inciso VII, estabeleceu a necessidade de proteção do ambiente, com clara especificação de fauna e flora. Assim, conforme melhor visto no Item deste APP dedicado à Ordem Ambiental(sugere-se conferir no MENU Títulos), todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá- lo para as presentes e futuras gerações(Art. 225, caput). E, para assegurar a efetividade desse direito, incumbe ao Poder Público(§ 1º) proteger a fauna e a flora, vedadas, na forma da lei, as práticas que coloquem em risco sua função ecológica, provoquem a extinção de espécies ou submetam os animais a crueldade(inciso VII). Portanto, a proteção da fauna e da flora é prevista, mas, de forma expressa e clara, apenas na parte final da Constituição.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "53",
        idPergunta: "174",
        title: `Pode-se entender que os animais têm vida e, por isso, estão protegidos pelo direito à vida ?`,
        content: `Sim, os animais têm vida. Mas, quanto à aplicação do direito à vida previsto na Constituição, a questão é mais complexa. Modernamente, existem várias teorias no Brasil e no mundo que rapidamente avançam no estudo sobre o direito dos animais. E que comprovam que eles também teriam direito à mesma proteção conferida aos seres humanos, respeitadas as diferenças naturais entre cada espécie. No Brasil, cada vez mais também se avança neste estudo e se chega à conclusão de que os animais seriam também alcançados pela proteção do direito à vida conferida aos seres humanos. Mas, apesar de muitos avanços na proteção do direito dos animais, não se conseguiu, ainda, igualar o direito à vida dos animais ao direito à vida dos seres humanos. Este último (direito à vida dos Homens), ainda é o foco central e o bem mais garantido pela Constituição de 1988.`,
      },
    ],
  };
  const direitoPropriedade = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "58",
        idPergunta: "200",
        title: `O que é o direito de propriedade ?`,
        content: `O direito de propriedade é, assim como a liberdade, a igualdade, a vida e alguns outros direitos, um clássico direito. Tanto porque é garantido e defendido em várias Constituições, de vários países e não somente na Constituição brasileira de 1988, quanto e, principalmente, porque suas origens são de séculos e séculos atrás. E, no Brasil, em simples palavras, nada mais é do que um direito fundamental, que está ligado ao ato de se ter alguma coisa. O direito de propriedade costuma ser muito relacionado à propriedade privada (particular) e, por isso, costuma ser melhor estudado dentro de uma disciplina do Direito, chamada Direito Civil. Mas isto não significa que exista apenas a chamada propriedade privada. Por exemplo, a propriedade pública também existe, assim como outras formas de propriedade. Por fim, é importante dizer que a relevância do direito de propriedade é tão grande que a própria Constituição de 1988 cita este direito em vários momentos.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "58",
        idPergunta: "201",
        title: `O direito de propriedade está previsto na Constituição de 1988?`,
        content: `Sim. Em vários momentos a Constituição cita o direito de propriedade. Exemplos: 1) No Art. 5º, inciso XXII, consta a garantia da propriedade privada; 2) No Art. 170, inciso II, aparece a propriedade privada e, neste inciso e Artigo, inclusive como um princípio da Ordem Econômica do Brasil; 3) No Art. 5º, caput, a Constituição cita a inviolabilidade do direito à vida, à igualdade e, entre outros, a inviolabilidade do direito à propriedade.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "58",
        idPergunta: "202",
        title: `O que é a função social da propriedade?`,
        content: `A função social da propriedade é um direito fundamental também previsto em vários momentos da Constituição brasileira. Em simples palavras, sua definição gira em torno da ideia de que, mesmo a propriedade privada e particular deve atender a sua função social, ou seja, deve, sem normalmente, a perda de seu caráter privado e particular, ser entendida como uma parte de um todo muito maior, que é a sociedade brasileira. Então, deve ser entendida como um direito que pode sofrer algumas restrições para que a sociedade, como um todo, possa existir de forma minimamente harmônica e respeitadora, também, de outros direitos. Exemplo: um proprietário de um terreno em uma cidade pode ter que seguir uma série de outras regras, antes de construir alguma coisa em seu terreno. Regras que podem dizer que a construção não pode ultrapassar determinada altura; regras que podem dizer, até mesmo, que a construção não poderá ocorrer. Neste último caso, um exemplo comum é o do local onde o terreno está localizado ser considerado, também por exemplo, uma área de proteção ambiental. Assim, proteger o meio ambiente, por meio da utilização correta do direito de propriedade, torna-se uma demonstração de que a propriedade deve atender a sua função social. E uma demonstração de que, até mesmo o proprietário particular de um terreno, pode sofrer restrições no exercício do seu direito, em razão do direito fundamental e princípio da função social da propriedade.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "58",
        idPergunta: "203",
        title: `A função social da propriedade está prevista na Constituição de 1988?`,
        content: `Sim. A função social da propriedade está prevista em vários momentos na Constituição de 1988. Exemplos: Art. 5º, inciso XXIII; Art. 170, inciso III etc.`,
      },
    ],
  };
  const direitosSocias = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "15",
        idPergunta: "30",
        title: `O que são “direitos sociais ?`,
        content: `Direitos sociais são direitos fundamentais mais diretamente ligados ao princípio da igualdade. Têm como principais marcos histórico-constitucionais, por exemplo, a Constituição Mexicana de 1917, a Constituição Alemã de 1919 e, no Brasil, a Constituição brasileira de 1934. Esta última, ou seja, a Constituição de 1934, a primeira Constituição da chamada Era Getúlio Vargas. Sua relação com a igualdade decorre do fato de que, ao se garantir um direito social, garante-se tal direito a todos, de forma igual.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "15",
        idPergunta: "31",
        title: `Quais são os “direitos sociais”, de acordo com a Constituição de 1988?`,
        content: `A Constituição de 1988 enumera-os nos Artigos 6º e 7º. Exemplo: direito à saúde, direito à educação, direito à moradia, direito à segurança, direito ao transporte, direito à alimentação (Art. 6º) e direitos dos trabalhadores (Art. 7º). O Título VIII (Da Ordem Social) da Constituição detalha alguns direitos sociais enumerados no Art. 6º, tais como saúde, educação etc.`,
      },
    ],
  };
  const direitosSeguranca = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "31",
        idPergunta: "85",
        title: `O que é o “direito à segurança”?`,
        content: `Basicamente, enquanto direito social, o direito à segurança (Art. 6º) é muito associado à segurança pública.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "31",
        idPergunta: "86",
        title: `O que é a “segurança pública" ?`,
        content: `A segurança pública é dever do Estado, além de direito e responsabilidade de todos. É exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio (Art.144).`,
      },
    ],
  };
  const policiaBombeiros = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "32",
        idPergunta: "87",
        title: `Por meio de “quais os órgãos” é exercida a segurança pública?`,
        content: `Por meio das “Polícias” e dos “Corpos de Bombeiros Militares”. No caso das Polícias, o seu objetivo maior é o de apuração de infrações penais e proteção da ordem pública. Mas cada Polícia tem atribuições próprias, de acordo com a subdivisão prevista na Constituição. E, no caso dos Corpos de Bombeiros Militares, vinculados e submetidos ao Governador de cada Estado do Brasil, assim como ao Governador do Distrito Federal e dos Territórios, seu objetivo principal é o de execução das atividades de defesa civil (Art. 144, parágrafos quinto e sexto).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "32",
        idPergunta: "88",
        title: `Quais são as subdivisões das “Polícias”?`,
        content: `As Polícias se subdividem em: Polícia Federal; Polícia Rodoviária Federal; Polícia Ferroviária Federal; Polícia Civil; Polícia Militar.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "32",
        idPergunta: "89",
        title: `Qual a “principal função” de cada uma das “Polícias” ?`,
        content: `"Polícia Federal: apuração de infrações penais contra a ordem política e social, além de infrações contra bens, serviços e interesses da União (ou suas entidades autárquicas e empresas públicas), assim como de infrações cuja prática seja de repercussão interestadual, internacional e exija uma repressão uniforme; prevenção e repressão ao tráfico ilícito de entorpecentes e drogas semelhantes, funções de polícia marítima, aeroportuária e de fronteira etc. Polícia Rodoviária Federal: de patrulhamento das rodovias federais. Polícia Ferroviária Federal: de patrulhamento das ferrovias federais. Polícia Civil de cada Estado do Brasil: de apuração de infrações penais, exceto as militares, e a de “polícia judiciária”. Polícia Militar de cada Estado do Brasil: de policiamento ostensivo (o exercido nas ruas das cidades, por exemplo) e de preservação da ordem pública (Art. 144 e seus parágrafos)."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "32",
        idPergunta: "90",
        title: `O que é a função chamada de “polícia judiciária" ?`,
        content: `A polícia chamada judiciária, termo técnico mais próximo do ramo do Direito chamado “Direito Administrativo”, está basicamente ligada à ideia de repressão a ilícitos penais, ou seja, contrária à ideia de prevenção destes e de outros ilícitos. Por isso, o combate ao que está ocorrendo e a apuração de fatos já ocorridos, são suas principais funções. É principalmente exercida, no âmbito de cada Estado do Brasil, por cada Polícia Civil estadual.`,
      },
    ],
  };
  const guardaMunicipal = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "33",
        idPergunta: "91",
        title: `O que é a “Guarda Municipal”?`,
        content: `São Guardas que podem ser criadas e constituídas por cada Município do Brasil, com atuação e competência somente no âmbito de cada um deles. As Guardas Municipais destinam-se, principalmente, à proteção dos bens, serviços e instalações do Município que as criar (Art. 144, parágrafo 8º).`,
      },
    ],
  };

  const direitosDefiencia = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "47",
        idPergunta: "136",
        title: `O que significa a expressão Pessoa com Deficiência?`,
        content: `A pessoa com deficiência é aquela que tem um impedimento de longo prazo, que seja de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas. Esta definição consta, atualmente, no Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015), uma lei que veio a complementar, isto é, a trazer, de forma mais detalhada que na Constituição de 1988, os direitos das pessoas com deficiência.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "47",
        idPergunta: "137",
        title: `Onde e como a Constituição previu, de forma específica, os direitos da pessoa com deficiência?`,
        content: `Com o seu texto ajustado por uma Emenda à Constituição (Emenda Constitucional nº 65/2010), o Art. 227, parágrafo primeiro (§ 1º), da Constituição (dentro do Título VIII, denominado Da Ordem Social), estabelece que o Estado promoverá políticas de proteção à criança, ao adolescente e ao jovem, com base em alguns preceitos. Um deles, que é o previsto no inciso II, do § 1º, do Art. 227, é o da criação de programas de prevenção e atendimento especializado para as pessoas portadoras de deficiência física, sensorial ou mental, bem como de integração social do adolescente e do jovem portador de deficiência, mediante o treinamento para o trabalho e a convivência, e a facilitação do acesso aos bens e serviços coletivos, com a eliminação de obstáculos arquitetônicos e de todas as formas de discriminação. É importante perceber que a primeira e as últimas partes deste inciso I, versam sobre todas as pessoas com deficiência, independentemente de se ser criança, adolescente ou jovem. Por fim, também é muito importante reparar que a Constituição, no parágrafo segundo (§ 2º), do mesmo Art. 227, referiu-se à acessibilidade, afirmando que devem ser elaboradas outras leis (leis infraconstitucionais, isto é, de hierarquia inferior à Constituição, tais como o Estatuto da Pessoa com Deficiência, trazido pela Lei 13.146/2015) que venham a trazer mais normas que garantam o acesso de pessoas com deficiência em veículos de transportes coletivos e em todos locais públicos, incluindo edifícios, áreas de lazer etc.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "47",
        idPergunta: "138",
        title: `Qual a melhor expressão: pessoa portadora de deficiência, pessoa detentora de deficiência ou, entre outras expressões, pessoa com deficiência?`,
        content: `Após um tempo de evolução, discussões e preocupações com o assunto, tanto no Brasil quanto, principalmente, no âmbito internacional, a melhor expressão é pessoa com deficiência. Por isso, em uma primeira oportunidade, espera-se pelo ajuste do texto da Constituição, substituindo a expressão pessoas portadoras de deficiência, presente nos parágrafos primeiro e segundo do Art. 227, por, apenas, pessoas com deficiência.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "47",
        idPergunta: "139",
        title: `Os direitos da pessoa com deficiência estão previstos na Constituição e, também, em outras leis brasileiras?`,
        content: `Sim. Além de previstos, de forma específica, no Art. 227, parágrafos primeiro e segundo (§ 1º e § 2º), da Constituição, estão previstos na Lei 13.146, de 06 de julho de 2015 (o Estatuto da Pessoa com Deficiência) e em outras várias leis brasileiras. Aqui, entretanto, será citada mais uma lei: a Lei nº 12.764, de 27 de dezembro de 2012. Esta lei foi criada, especificamente, para a Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista. Ou seja, para a proteção das pessoas com autismo. Mas é importante reparar que a pessoa autista também se enquadra na categoria chamada pessoa com deficiência.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "47",
        idPergunta: "140",
        title: `Em resumo, quais as maiores finalidades das normas que protegem os direitos da pessoa com deficiência?`,
        content: `As maiores finalidades são o estímulo sempre maior à inclusão social, à proteção de direitos, à acessibilidade e, sobretudo, à igualdade de condições entre pessoas com deficiência e pessoas sem deficiência alguma. Mas sempre respeitando as diferenças naturais existentes, a fim de que não se desrespeite também o famoso princípio da igualdade.`,
      },
    ],
  };
  const direitoSaude = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "34",
        idPergunta: "92",
        title: `O que é o “direito à saúde”?`,
        content: `A saúde é direito de todos e dever do Estado (Art. 6º e Art. 196). Certamente, este direito à saúde é um direito social, a ser aplicado e estendido a todas as pessoas de forma igual, pelo Poder Público.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "34",
        idPergunta: "93",
        title: `Além do direito à saúde a ser garantido pelo Estado, pode existir a “saúde” chamada “privada” ou “particular”?`,
        content: `Sim. A saúde privada ou particular é a exercida por médicos, hospitais, clínicas e laboratórios privados e particulares. Não estão relacionadas ao Poder Público. Por isso, as pessoas que procurarem por estes serviços, devem pagar, de forma particular."`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "34",
        idPergunta: "94",
        title: `O que são os “Planos de Saúde” e os “Seguros de Saúde”?`,
        content: `Os Planos ou Seguros de Saúde são planos/seguros privados de assistência médica, clínica, hospitalar e/ou laboratorial. Existem porque a Constituição estabeleceu que a assistência à saúde é livre à iniciativa privada (Art. 199, caput). São oferecidos pelas chamadas Operadoras ou Seguradoras de Saúde, entidades privadas, com ou sem fins lucrativos e sem nenhuma relação com a saúde pública. Funcionam a partir do pagamento, normalmente, de mensalidades por parte dos contratantes destes serviços. E sua existência é prevista e permitida pela Constituição, que também chama os serviços prestados por essas Operadoras/Seguradoras de “Saúde Suplementar” (Art. 199 e seus parágrafos).`,
      },
    ],
  };
  const direitoTransporte = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "48",
        idPergunta: "141",
        title: `O que é o direito ao transporte?`,
        content: `É um direito de toda pessoa e de todo cidadão de ter acesso a meios e veículos de transporte coletivo e individual, de natureza pública. Acrescentando, o direito ao transporte é um direito social que também está previsto no famoso Art. 6º da Constituição de 1988.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "48",
        idPergunta: "142",
        title: `O que é o transporte coletivo de natureza pública ou o transporte público coletivo?`,
        content: `Em resumo, o transporte coletivo de natureza pública ou o transporte público coletivo é aquele oferecido pelo Poder Público à sua população. Ou o Poder Público oferece diretamente um meio de transporte, sendo o responsável direto pela administração, gerência, gestão e desenvolvimento do referido meio, ou o Poder Público oferece indiretamente, concedendo ou permitindo ao Poder Privado, administrar, gerenciar, gerir e desenvolver um determinado transporte e seu respectivo meio. Apesar de aqui, neste APP, não se usar esta classificação, alguns estudiosos podem afirmar que o citado transporte oferecido indiretamente, por meio da participação e administração do Poder Privado, pode ser chamado de transporte coletivo de natureza privada ou transporte privado coletivo.  Por exemplo, um meio ou veículo de transporte pode ser o ônibus; pode ser o metrô; pode ser uma barca (no caso de cidades litorâneas ou ribeirinhas etc.). Embora seja o transporte, público, é permitida a cobrança de tarifas para uso dos referidos meios de transporte.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "48",
        idPergunta: "143",
        title: `O que é o transporte individual de natureza pública ou o transporte individual público?`,
        content: `São os transportes individuais de passageiros, mas disponibilizados a todos. Por transportarem, salvo exceções, somente um passageiro (ou somente um grupo fechado de passageiros, normalmente conhecidos entre si, tais como familiares, amigos etc.), são considerados individuais. Mas, por serem disponibilizados e oferecidos a todos, são também considerados públicos. Por exemplo, os táxis são os mais tradicionais meios de transporte, individual e público, conhecidos. Atualmente, figuras como o UBER e o CABIFY, também apareceram e acabam se enquadrando nesta mesma categoria, ou seja, transportes individuais de natureza pública ou transportes individuais públicos. Com exceção de criações modernas (UBER POOL, por exemplo), transportam de maneira individual e estão disponíveis a todos.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "48",
        idPergunta: "144",
        title: `O que é o transporte individual de natureza privada ou o transporte individual privado?`,
        content: `É o transporte totalmente privado e individual. Os exemplos mais comuns são os automóveis e motocicletas particulares, que cada pessoa compra para si e usa para se locomover. O fato de uma pessoa comprar um carro e usa-lo para andar com seu filho, filha, irmão, irmã, pai, mãe, amigos, amigas etc., não retira o caráter individual do transporte, que é assim classificado porque, na maioria das vezes, o veículo, comprado de forma privada, possui um dono, que é um particular e pode ser qualquer um de nós, pessoas e cidadãos do país.`,
      },
    ],
  };

  const direitoPolitico = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "32",
        title: `O que são “direitos políticos”?`,
        content: `São o conjunto de normas que vai reger as formas de participação de cada pessoa na democracia representativa brasileira. Estão previstos em vários momentos da Constituição, mas concentrados no Art. 14. Direito de sufrágio, alistabilidade eleitoral, elegibilidade, direito de voto, plebiscito, referendo, entre outros, são considerados elementos dos chamados direitos políticos ou, diretamente, direitos políticos.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "33",
        title: `O que é o “direito de sufrágio”?`,
        content: `O direito de sufrágio nada mais é do que o direito de votar e de ser eleito. Assim, não confundir sufrágio com voto. Sufrágio é mais do que o direito de voto. É também o direito de ser eleito. O sufrágio universal é aquele que alcança todas as pessoas de um Estado, embora possam existir alguns requisitos para o seu exercício, tais como idade mínima, alfabetização (o voto é facultativo para o analfabeto e este não pode ser eleito a cargo público eletivo, ou seja, o analfabeto é inelegível), entre outros. O sufrágio restrito é aquele que não alcança todas as pessoas de um Estado, podendo ser concedido apenas a algumas pessoas, com base em critérios que, atualmente, feririam o princípio da igualdade, tais como critérios econômicos, financeiros, culturais, religiosos, sociais, ligados ao gênero (sexo) etc. No Brasil, o sufrágio é universal, embora, no passado, já tenha existido o sufrágio restrito (na época do Império brasileiro, por exemplo).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "34",
        title: `O que é a “alistabilidade”?`,
        content: `É a possibilidade de se poder alistar. No caso eleitoral, de se alistar eleitoralmente, o que ocorre, salvo exceções constitucionalmente previstas, quando uma pessoa completa 16 anos (o voto é facultativo dos 16 aos 18 anos, após os 70 anos e para os analfabetos). São eleitoralmente inalistáveis para votar os conscritos (durante o período do serviço militar obrigatório) e os estrangeiros (art. 14, parágrafo segundo). Existem outros alistamentos, como por exemplo, o militar (obrigatório, em tempos de paz, para as pessoas do sexo masculino, nos termos do Art. 143), mas não estão ligados à temática eleitoral.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "35",
        title: `O que é a “elegibilidade”?`,
        content: `É a possibilidade de se poder eleger. Mais precisamente, de se poder candidatar, eleger e tomar posse em cargo público eletivo. Salvo exceções constitucionalmente previstas, a elegibilidade começa a se concretizar, uma vez que existem requisitos mínimos a ser cumpridos (principalmente ligados à idade), quando uma pessoa completa 18 anos, momento em que já pode se candidatar ao cargo de Vereadora. A última idade mínima para que uma pessoa possa se candidatar a um cargo público eletivo é a de 35 anos de idade, idade mínima para que uma pessoa possa se candidatar e ser eleita para Presidente e Vice-Presidente da República e para Senadora da República Art. 14, parágrafo terceiro). São inelegíveis os analfabetos e os inalistáveis (Art. 14, parágrafo quarto). Assim, uma importante conclusão é a de que somente pode ser eleito quem vota.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "36",
        title: `O que é o “direito de voto”?`,
        content: `É o instrumento pelo qual a pessoa participa de eleições típicas, referendos e plebiscitos. No Brasil, o voto, relacionado ao exercício dos direitos políticos constitucionalmente previstos, é direto (os ocupantes de cargo público eletivo devem ser escolhidos diretamente pelo povo, ou seja, sem intermediários), secreto (o exercício do direito de voto é um ato sigiloso), universal (para todos, mediante cumprimento dos requisitos específicos, tais como idade mínima etc.) e periódico (o voto é periódico porque os mandatos são periódicos, evitando-se a eternização de pessoa no poder). O direito de voto também é livre (todos têm a liberdade de escolher em quem vão votar e, também, de não votar em ninguém) e personalíssimo (não é possível delegar a outra pessoa o direito de voto e o ato de votar).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "37",
        title: `O que são “eleições típicas”?`,
        content: `As eleições típicas são aquelas pelas quais são eleitos o Presidente e o Vice-Presidente da República; os Governadores de cada Estado membro da Federação brasileira; os Prefeitos de cada Município; os Deputados Federais; os Senadores da República; os Deputados Estaduais; e os Vereadores.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "38",
        title: `O que é o “plebiscito”?`,
        content: `O plebiscito é a chamada consulta prévia feita pelo Congresso Nacional à população, sobre determinado assunto, normalmente presente em um Projeto de Lei ainda não aprovado pelo Poder Legislativo.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "39",
        title: `O que é o “referendo”?`,
        content: `O referendo é a chamada consulta posterior feita pelo Congresso Nacional à população, sobre determinado assunto, normalmente presente em um Projeto de Lei já votado e aprovado pelo Poder Legislativo.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "40",
        title: `O que significa ser “cidadão”?`,
        content: `Em sentido restrito, costuma-se dizer que cidadão é aquele que exerce, de forma plena, seus direitos políticos. Pode votar e ser eleito, uma vez cumpridos os requisitos mínimos. Assim, exercer a cidadania seria o mesmo que exercer os direitos políticos. Em sentido mais amplo, ser cidadão costuma ser algo associado não somente aos direitos políticos, mas também ao acesso a uma série de outros direitos, tais como aos direitos sociais (educação, emprego, saúde etc.) e aos demais direitos fundamentais (direitos de liberdade etc.).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "41",
        title: `O que é a “iniciativa popular”?`,
        content: `Trata-se, mais precisamente, da “iniciativa popular de lei”. A iniciativa é o ato pelo qual se dá início ao processo legislativo. No caso da iniciativa popular, o primeiro passo, que é a criação da primeira versão de um Projeto de Lei (PL), é dado pelo povo. Os requisitos para que possa um Projeto de Lei ser elaborado e submetido ao Poder Legislativo, pelo povo, estão previstos no Art. 61, parágrafo segundo, da Constituição.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "359",
        title: `Após a votação por parte do povo brasileiro, como serão escolhidos os vencedores e, portanto, aqueles que vão ocupar os cargos eletivos públicos no Poder Executivo e no Poder Legislativo?`,
        content: `Existem, no Brasil, para a escolha dos representantes do povo brasileiro, 02 (dois) sistemas. O primeiro, mais famoso e simples de entender, chamado majoritário e o segundo, de entendimento mais complexo, chamado proporcional.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "360",
        title: `O que é e para que serve o chamado sistema majoritário?`,
        content: `O sistema majoritário é o que faz com que uma pessoa e candidata seja eleita pela maioria dos votos válidos em uma eleição. A maioria significa a metade mais um, ou seja, 50% (cinquenta por cento) dos votos, mais um voto. Este sistema, por exemplo, é adotado para a escolha de todos os Chefes do Poder Executivo, ou seja, para Presidente da República, Governadores de Estado e do Distrito Federal (Brasília) e para Prefeitos de cada Município, assim como, logicamente, para todos os vices (Vice-Presidente, Vice-Governadores etc.). Por exemplo, também será usado o sistema majoritário para a escolha dos Senadores da República.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "361",
        title: `O que são votos válidos?`,
        content: `Os votos válidos são todos, menos os votos brancos e nulos. No sistema majoritário, seriam os votos nominais, ou seja, aqueles dados a alguém, a uma pessoa que tem nome e que seja candidata. No sistema proporcional, além dos votos nominais, há os votos em legenda, ou seja, os votos dados a um Partido Político ou a uma coligação de Partidos Políticos (desde que previamente formada para que o eleitor possa ter esta opção na urna eletrônica). Assim, para a escolha dos cargos dos chefes dos Poderes Executivos, isto é, Presidente da República, Governador de cada Estado, Governador do Distrito Federal e Prefeito de cada Município (incluindo todos os respectivos Vices), aplica-se o sistema majoritário. Quem receber mais votos válidos é o primeiro colocado na eleição. No caso de existir o 2º Turno, quando os 02 (dois) candidatos mais votados no 1º Turno disputarão uma nova etapa da eleição, sai-se vencedor o que obtiver o maior número de votos válidos nesta segunda etapa eleitoral, ou seja, no 2º Turno das eleições.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "362",
        title: `Quando NÃO haverá o chamado 2º Turno?`,
        content: `Não haverá 2º Turno quando o primeiro colocado no resultado do 1º Turno da eleição para os cargos do Poder Executivo, obtiver mais da metade dos votos válidos ou seja, mais do que a soma dos votos válidos de todos os demais candidatos. É um caso de clara maioria absoluta. Também não haverá 2º Turno para as eleições para Deputados Federais e Estaduais, Vereadores e Senadores da República, ou seja, não haverá 2º Turno para eleições para a escolha dos membros do Poder Legislativo brasileiro, em todas as esferas (União, Estados, Municípios e Distrito Federal). Esta escolha se dá em apenas 01 (um) turno. Por fim, não haverá 2º Turno no caso de votações para Prefeitos de Municípios com menos de 200 (duzentos) mil eleitores.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "363",
        title: `Quando HAVERÁ o chamado 2º Turno?`,
        content: `Quando o primeiro colocado no resultado do 1º Turno da eleição para os cargos do Poder Executivo NÃO OBTIVER mais da metade dos votos válidos, ou seja, mais do que a soma dos votos válidos de todos os demais candidatos. Então, em situações em que o primeiro colocado no 1º Turno é acompanhado mais de perto, em número de votos, por 01 (um) ou mais candidatos, faz-se uma nova eleição (uma nova etapa eleitoral), da qual participarão os 02 (dois) candidatos mais votados no 1º Turno.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "364",
        title: `O que é e para que serve o chamado sistema proporcional?`,
        content: `O sistema proporcional é utilizado, por exemplo, para a escolha dos Deputados Federais, ou seja, aqueles que vão ocupar um lugar na Câmara dos Deputados. Em um primeiro momento, a proporcionalidade está ligada à população de cada um dos 26 Estados do Brasil e do Distrito Federal (vale lembrar que o Distrito Federal não é um Estado, nem um Município; é a capital do Brasil – Brasília -, mas possui Poderes Executivo e Legislativo próprios, o que faz com que tenha eleições também próprias), valendo ressaltar que o Estado com menor população terá 08 (oito) Deputados Federais e o com maior população, o número de 70 (setenta) Deputados Federais, com um máximo de 513 (quinhentos e treze) Deputados Federais na Câmara dos Deputados, de acordo com o Art. 45, § 1º, da Constituição. O sistema proporcional, exemplificativamente, também é usado para a escolha dos Vereadores, aqueles que ocuparão um lugar na Câmara dos Vereadores (ou Câmara Municipal) de cada Município do Brasil. Também neste último caso, a proporcionalidade estará ligada à população de cada Município. O Art. 29, inciso IV, alíneas “a” a “x” da Constituição, traz, de forma detalhada, faixas populacionais e, logo em seguida, o número de Vereadores que um Município deve ter, com base em sua população. Assim, municípios com até 15.000 habitantes terão o número máximo de 09 Vereadores e Municípios com mais de 8 milhões de habitantes o número máximo de 55 Vereadores. Maior a população, maior o número de Vereadores, com um limite máximo de 55 Vereadores para uma Câmara de Vereadores ou Municipal. Quanto à definição dos vencedores para todas as Casas Legislativas do país (exceção feita ao Senado Federal, cujo resultado depende de uma eleição mais aproximada do sistema majoritário, conforme Art. 46 da Constituição) a complexidade é maior e aqui não se adentrará, pois se está diante de matéria que mais se aproxima do Direito Eleitoral.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "365",
        title: `Há algum cálculo para a ocupação dos cargos do Poder Legislativo?`,
        content: `Sim. Para a Câmara dos Deputados, faz-se um cálculo proporcional à população de cada Estado e do Distrito Federal, não podendo nenhum Estado ou o Distrito Federal ter menos de 08 (oito) Deputados Federais e mais de 70 (setenta) Deputados Federais. Sendo que o número fixo de Deputados Federais no Brasil é de 513 (quinhentos e treze). Em um primeiro momento, assim e, com base nisso, procede-se ao cálculo. Para a Assembleia Legislativa de cada Estado, assim como para a chamada Câmara Legislativa do Distrito Federal, aplica-se o que aqui livremente se chama de uma proporcionalidade indireta. O número de Deputados Estaduais (Art. 27, da Constituição de 1988) em cada Assembleia Legislativa dependerá do número de Deputados Federais que o Estado tiver na Câmara dos Deputados. De forma mais precisa, será o triplo (3 vezes mais) do número de Deputados Federais, até a quantidade de 36 (trinta e seis) Deputados Estaduais. A partir daí, o cálculo é feito de 01 (um) pra 01 (um). Ou seja, para cada Deputado Federal acima de 12 (doze), por Estado (12 Deputados Federais vezes 3 – triplo -, será igual a 36), na Câmara dos Deputados em Brasília, o Estado que elegeu cada Deputado Federal terá direito a 01 (um) Deputado Estadual a mais. Como o número máximo de Deputados Federais por Estado é de 80, por uma questão matemática, o número máximo de Deputados Federais que um Estado terá será de 94 (noventa e quatro). Exemplo - Se 01 (um) Estado brasileiro possuir 15 (quinze) Deputados Federais na Câmara dos Deputados, em Brasília, o cálculo para se saber o número de Deputados Estaduais na Assembleia Legislativa do Estado, será feito assim: 12 (Deputados Federais) x 3 = 36 (Deputados Estaduais). 12 + 1 = 13; 36 + 1 = 37. 12 + 2 = 14; 36 + 2 = 38. Finalmente, chega-se ao resultado do Exemplo: 12 + 3 = 15; 36 + 3 = 39. 39 (trinta e nove) serão os Deputados Estaduais de um Estado que possuir 15 (quinze) Deputados Federais.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "16",
        idPergunta: "366",
        title: `O que são a “Ficha Limpa” e a “Lei da Ficha Limpa”?`,
        content: `“Ficha Limpa” é uma expressão que significa que a pessoa não possui em sua “ficha” condenações que possam “sujar” a sua imagem ou trajetória. Valendo-se desta expressão, foi criada a “Lei da Ficha Limpa”, ou seja, a Lei Complementar nº 135, de 04 de junho de 2010. Tal Lei, na verdade, alterou uma outra Lei (a Lei Complementar nº 64, de 18 de maio de 1990 – “Lei das Inelegibilidades”) para nela incluir mais hipóteses de situações que fazem com que pessoas não possam se candidatar e, assim, serem eleitas para cargos públicos eletivos. Em outras palavras, a Lei da Ficha Limpa aumentou os casos do que se chama “inelegibilidade” e, por exemplo, fez com que passassem a ser inelegíveis pessoas com condenação definitiva (transitada em julgado) ou com condenação, ainda que não definitiva, dada por um órgão judicial colegiado, sobre uma lista de matérias e assuntos. Por exemplo, pessoas condenadas por crimes “contra a economia popular, a fé pública, a administração pública e o patrimônio publico“; “contra o patrimônio privado, o sistema financeiro, o mercado de capitais e os previstos na lei que regula a falência”; “contra o meio ambiente e a saúde pública”; “contra a vida e a dignidade sexual” e, entre outros, crimes de “de lavagem ou ocultação de bens, direitos e valores”; “de tráfico de entorpecentes e drogas afins, racismo, tortura, terrorismo e hediondos”; e “de redução à condição análoga à de escravo”.`,
      },
    ],
  };
  const partidosPoliticos = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "74",
        idPergunta: "355",
        title: `O que são os “Partidos Políticos”?`,
        content: `De forma simplificada, os “Partidos Políticos” são associações que possuem ideologias e objetivos comuns, previstos em um Estatuto registrado junto ao “Tribunal Superior Eleitoral” (TSE), nos termos do Art. 17, § 2º, da Constituição. Sendo ainda mais preciso, cada Partido Político será uma associação, com personalidade jurídica, com um Estatuto próprio, que professará e possuirá ideologias e objetivos comuns, ou seja, previstos em seu Estatuto, aceitos e queridos por cada um de seus filiados e membros. Portanto, quanto mais Partidos Políticos, mais ideias e ideais diferentes, aglutinados de forma organizada, estarão à disposição da população, para que esta possa escolher candidatos e saber quais destes mais se aproximam com as ideias e ideais de cada eleitor brasileiro. Ainda mais em época de eleições.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "74",
        idPergunta: "356",
        title: `Qual a importância dos “Partidos Políticos”?`,
        content: `Resumidamente, os “Partidos Políticos” são de enorme importância para a manutenção de um regime democrático. Pois a sua existência faz com que várias ideias e ideais possam ser professados, de modo organizado, vinculado ao Partido e desde que respeitados os direitos fundamentais da pessoa humana, o pluripartidarismo (a possibilidade de existência de vários “Partidos Políticos”), a soberania nacional e o próprio regime democrático (Art. 17, caput, da Constituição). Dessa forma, estimula-se o poder do povo quando da ocorrência de eleições, ou seja, do momento de escolha dos candidatos em que se vai votar, com base em ideias e ideais dos Partidos a que cada candidato se encontra filiado.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "74",
        idPergunta: "357",
        title: `Pode um candidato mudar de “Partido Político” após ser eleito por um outro “Partido Político”?`,
        content: `Pelas normas constitucionais atuais sobre o que se chama “FIDELIDADE PARTIDÁRIA”, o objetivo é impedir que um candidato eleito mude de “Partido Político” após se eleger. Pois todos que votaram em um candidato, também votaram no “Partido Político” ao qual ele se vinculou para concorrer em uma eleição. Mas a própria Constituição previu POUCAS situações que podem permitir que um candidato eleito por um “Partido Político” troque de Partido após se eleger. Seriam, realmente, exceções. A regra geral e maior a ser respeitada é a da “FIDELIDADE PARTIDÁRIA” (Art. 17, § 1º e § 5º).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "74",
        idPergunta: "358",
        title: `É possível alguém se candidatar a um cargo eletivo sem estar vinculado, isto é, filiado a um “Partido Político”?`,
        content: `Não. A candidatura de qualquer pessoa a um cargo público eletivo depende da prévia filiação a um “Partido Político”. No Brasil, não se admite a “candidatura avulsa”, ou seja, aquela em que uma pessoa se candidata de modo avulso, sem estar vinculada a nenhum Partido. Este o previsto no Art. 14, § 3º, inciso V, da Constituição de 1988.`,
      },
    ],
  };
  const direitoAdquirido = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "61",
        idPergunta: "216",
        title: `O que é o “direito adquirido”?`,
        content: `É um direito fundamental, previsto no Art. 5°, segundo o qual um direito, já inserido em seu patrimônio, não pode ser excluído. A Constituição, entretanto, garante somente a situação em que já houve a real aquisição e incorporação de um direito ao patrimônio de uma pessoa. Por isso, surge a diferença entre “direito adquirido” e “expectativa de direito”.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "61",
        idPergunta: "217",
        title: `O que é a “expectativa de direito”?`,
        content: `É a situação em que a pessoa está ainda aguardando adquirir, definitivamente, um direito. A “expectativa de direito” não é um direito fundamental e não goza de maiores proteções jurídicas. Portanto, se alguma lei mudar, por exemplo, um “regime jurídico” e uma pessoa estiver em “expectativa de um direito” que deixa de existir a partir da mudança, não mais faz jus àquele direito e passa a se submeter ao novo regime jurídico. Exemplo: regime previdenciário, em que uma pessoa fica na expectativa dos direitos existentes no presente, para um momento futuro que é o da sua aposentadoria. Entretanto, a “expectativa de direito” somente se transforma em “direito adquirido”, quando a pessoa, efetivamente, se aposenta. Se uma Lei modificar o regime jurídico antes de a pessoa se aposentar, passa a pessoa a ser regida pelo novo regime, não podendo pleitear o “direito adquirido” ao regime jurídico anterior ao da modificação legal antecedente à sua aposentadoria.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "61",
        idPergunta: "218",
        title: `A Constituição prevê expressamente a garantia ao “direito adquirido”?`,
        content: `Sim. No Art. 5°, inciso XXXVI.`,
      },
    ],
  };
  const nacionalidade = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "17",
        idPergunta: "42",
        title: `O que são “direitos da nacionalidade”?`,
        content: `São os direitos que regulam a forma pela qual uma pessoa pode adquirir a nacionalidade brasileira. Uma pessoa pode ser brasileira nata ou brasileira naturalizada. E as normas que regem tais direitos estão contidas no Art. 12.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "17",
        idPergunta: "43",
        title: `O que significa a expressão “brasileiro nato”?`,
        content: `Brasileiro nato é aquele que adquiriu a nacionalidade brasileira de forma originária. Normalmente, é caso de aquisição da nacionalidade brasileira em razão do nascimento, de um ato natural, ainda que este ato seja apenas inicial para uma confirmação posterior e final da nacionalidade brasileira (Art. 12, inciso I).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "17",
        idPergunta: "44",
        title: `O que significa a expressão “brasileiro naturalizado”?`,
        content: `Brasileiro naturalizado é aquele que adquiriu a nacionalidade brasileira por um ato de vontade, ou seja, voluntário. É o caso, normalmente, da pessoa que requer, junto ao Poder Público brasileiro, a nacionalidade brasileira (Art. 12, inciso II e parágrafo primeiro).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "17",
        idPergunta: "45",
        title: `Existem diferenças entre “brasileiros natos” e “brasileiros naturalizados”?`,
        content: `Apesar de a principal regra ser a de que brasileiros natos e naturalizados são iguais em direitos e obrigações, a Constituição estabeleceu algumas poucas diferenciações, consideradas exceções à regra geral da igualdade. Exemplo: Um brasileiro naturalizado não pode exercer alguns cargos, tais como o de Presidente da República, Vice-Presidente da República, Presidente da Câmara dos Deputados etc. (Art. 12, parágrafo terceiro).`,
      },
    ],
  };
  const simbolos = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "18",
        idPergunta: "46",
        title: `Quais são os “símbolos oficiais” da República Federativa do Brasil?`,
        content: `Os símbolos oficiais da República Federativa do Brasil são a Bandeira Nacional, o Hino Nacional, o Selo Nacional e as Armas da República (Art.13).`,
      },
    ],
  };
  const processoJudicial = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "62",
        idPergunta: "219",
        title: `O que é um Processo Judicial?`,
        content: `Resumida e genericamente, o Processo Judicial é o que resulta, é formado e aberto depois da propositura de uma Ação Judicial, por qualquer pessoa. A Ação Judicial é proposta perante o Poder Judiciário, no qual, dentro do seu respectivo órgão competente, tramitará a Ação e o Processo Judiciais. A pessoa que entra com a Ação, ou seja, a que propõe a Ação Judicial, é considerada a Parte Autora no Processo Judicial. E a pessoa contra quem se propõe a Ação Judicial, é considerada a Parte Ré no Processo Judicial.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "62",
        idPergunta: "220",
        title: `A Constituição brasileira regulamenta o Processo Judicial?`,
        content: `A Constituição traz, apenas, principalmente como direitos fundamentais, os chamados Princípios Constitucionais do Processo. Será no âmbito de disciplinas específicas do Direito, sobretudo em Direito Processual Civil e Direito Processual Penal, com o estudo respectivo dos Códigos de Processo Civil e Penal que o Processo Judicial será melhor e adequadamente estudado, esmiuçado e regulamentado.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "62",
        idPergunta: "221",
        title: `O que são os Princípios Constitucionais do Processo?`,
        content: `São, principalmente, os elencados ao longo do Art. 5° e que versam, de alguma forma e também, sobretudo, sobre o Direito Processual Civil e sobre o Direito Processual Penal. Exemplos gerais: (a) o “princípio do contraditório e da ampla defesa”, segundo o qual toda Parte Ré tem direito de defesa, em igualdade de condições com a Parte Autora de um Processo Judicial, durante uma Ação Judicial (Art. 5°, inciso LV); (b) o “princípio do devido processo legal”, segundo o qual, em linhas gerais e, principalmente, formalmente falando, todos têm direito a um Processo Judicial que siga um rito previsto em lei e aplicado a todos e todas as pessoas indistintamente, ou seja, independentemente de questões e posições sociais, econômicas, culturais, étnicas etc. (Art. 5°, inciso LIV); etc.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "62",
        idPergunta: "460",
        title: `O que significam os conteúdos do inciso XXXV, do Art. 5º (a lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito) e da parte final (coisa julgada) do inciso XXXVI, do Art. 5º, todos da Constituição de 1988 (a lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada)?`,
        content: `O teor do Art. 5º, inciso XXXV, significa que o Poder Judiciário, uma vez provocado pelo cidadão interessado, não poderá dizer que não vai julgar a causa. Costuma-se afirmar que a previsão deste inciso chama-se princípio da inafastabilidade do Poder Judiciário. Podem ocorrer problemas processuais e procedimentais que levem à extinção de um Processo, mas o interessado poderá, neste caso específico, novamente procurar o Poder Judiciário para ver seu caso julgado e decidido. E, aí, sim, uma vez julgado e decidido, por completo e de modo definitivo, um caso pelo Poder Judiciário, o que se chama de julgamento ou resolução do mérito, não mais poderá se discutir a matéria e mais uma vez se procurar o citado Poder Judiciário para uma nova e já dada solução. E isto já leva a um novo princípio constitucional do processo judicial, chamado coisa julgada. A coisa julgada, que, em genéricos e muito iniciais dizeres, se forma após um julgamento definitivo e de mérito, ou seja, que abranja o conteúdo central do motivo que levou o cidadão a procurar os serviços prestados pelo Poder Judiciário, tem sua proteção prevista no Art. 5º, inciso XXXVI, da Constituição de 1988.`,
      },
    ],
  };
  const direitoPenalConstitucional = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "63",
        idPergunta: "222",
        title: `O que é o Direito Penal Constitucional?`,
        content: `É o conjunto de normas jurídicas, de artigos e dispositivos previstos na Constituição de 1988, que versam sobre e se referem, em alguma medida, ao Direito Penal.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "63",
        idPergunta: "223",
        title: `O que é um crime?`,
        content: `Um crime, entre tantas e tantas definições, é um ato normal e socialmente reprovável e, no Brasil, necessariamente previsto em Lei. Assim, uma conduta humana no Brasil somente pode ser considerada criminosa, se houver uma lei considerando e enquadrando tal conduta como um crime. E isto é o que está previsto no Art. 5º, inciso XXXIX, da Constituição (não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "63",
        idPergunta: "224",
        title: `A Constituição brasileira prevê a “pena de morte”?`,
        content: `Sim. No Art. 5º, inciso XLVII, alínea “a”. Mas apenas nos casos de guerra declarada, sendo a regra geral a inexistência e a vedação da pena de morte, assim como proibidas as penas de caráter perpétuo, de trabalhos forçados, de banimento e cruéis.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "63",
        idPergunta: "225",
        title: `A Constituição brasileira prevê as penas de “caráter perpétuo” e de “trabalhos forçados”?`,
        content: `Sim, mas para as proibir e vedar. Este o teor do Art. 5°, inciso XLVII, alíneas “b” e “c”. O mesmo valendo para as penas de banimento e cruéis, proibidas, no Brasil, de acordo com o Art. 5°, inciso XLVII, alíneas “d” e “e”.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "63",
        idPergunta: "226",
        title: `O “preso”, no Brasil, possui “garantias fundamentais”?`,
        content: `Sim, várias. Uma das principais, a de que é assegurado aos presos o “respeito à integridade física e moral”, nos termos do Art. 5°, inciso XLIX, da Constituição.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "63",
        idPergunta: "227",
        title: `O preso, entre as garantias fundamentais que possui, tem o direito de ficar calado e de ter um advogado?`,
        content: `Sim. Conforme o Art. 5º, inciso LXIII, o preso será informado de seus direitos, entre os quais o de permanecer calado, sendo-lhe assegurada a assistência da família e de advogado.`,
      },
      {
        idCategoriaPai: "3",
        idCategoria: "63",
        idPergunta: "520",
        title: `O que é o princípio da presunção de inocência?`,
        content: `É o princípio segundo o qual ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória. E assim estatui o Art. 5º, no seu inciso LVII: LVII - ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória. Sobre o trânsito em julgado, recomenda-se verificar o item 3.6 do Capítulo 3.`,
      },
    ],
  };
  const poderExecutivo = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "19",
        idPergunta: "47",
        title: `Qual a “estrutura básica do Poder Executivo’?`,
        content: `O Poder Executivo é o que tem como função preponderante a administração, a gerência, o governo do Estado brasileiro. Seu Chefe, no âmbito da União, é o Presidente da República, o qual é auxiliado pelos Ministros de Estado (Art. 76). Este Poder está presente, também, no âmbito dos Estados membros da Federação brasileira e de cada Município. Os Chefes, nestes âmbitos, são, respectivamente, os Governadores de cada Estado, auxiliados por seus Secretários de Estado, e os chamados Prefeitos de cada Município, igualmente auxiliados pelos chamados Secretários Municipais. Tanto o Presidente da República, quanto cada Governador e cada Prefeito são diretamente eleitos pelo povo por meio de eleições típicas e que seguem o sistema majoritário (via de regra, o candidato com maior número de votos, vence a eleição).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "19",
        idPergunta: "104",
        title: `Pode o Presidente da República ser “impedido” de continuar exercendo seu mandato e ocupando seu cargo?`,
        content: `O Presidente será substituído, no caso de impedimento, e sucedido, no de vaga, pelo Vice-Presidente. O impedimento é também chamado, por meio de utilização de palavra oriunda do idioma inglês, de impeachment.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "19",
        idPergunta: "105",
        title: `Quem assume o cargo de Presidente da República em caso de impedimento ou vacância do Presidente e do Vice-Presidente da República?`,
        content: `Caso o impedimento ou a vacância ocorram tanto para o Presidente, quanto para o Vice-Presidente da República, assumem o cargo, respectiva e, sucessivamente, ou seja, nesta ordem, o Presidente da Câmara dos Deputados, o Presidente do Senado Federal e o Presidente do Supremo Tribunal Federal (Art. 80). Se o impedimento ou vacância tanto para Presidente, quanto para Vice-Presidente da República ocorrerem nos 02 (dois) primeiros anos do mandato presidencial, serão convocadas eleições 90 dias depois de aberta a última vaga (Art. 81). Se ocorrerem nos 02 (dois) últimos anos do mandato presidencial, serão feitas eleições, pelo Congresso Nacional, 30 (trinta) dias depois de aberta a última vaga (art. 81, parágrafo primeiro).`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "19",
        idPergunta: "106",
        title: `O que pode levar ao impeachment ou “impedimento” do Presidente da República?`,
        content: `O cometimento dos chamados crimes de responsabilidade.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "19",
        idPergunta: "145",
        title: `O que são crimes de responsabilidade?`,
        content: `São aqueles atentatórios à Constituição da República Federativa do Brasil (Art. 85). Além dos enumerados no Art. 85 da Constituição, os detalhados pela Lei 1.079, de 10 de abril de 1950, são crimes de responsabilidade. E a referida Lei, que especifica melhor os referidos crimes e regula o respectivo processo de julgamento daquele que incorreu em crime de responsabilidade, é extensa e possui 82 Artigos.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "19",
        idPergunta: "121",
        title: `O que é o indulto de Natal ou natalino?`,
        content: `Trata-se de ato de competência privativa do Presidente da República, nos termos do Art. 84, inciso XII. É uma espécie de perdão concedido pelo Presidente da República para presos que reunam certos requisitos, expostos no Decreto presidencial que concede o indulto. Não é uma autorização para saída temporária da prisão e, sim, um verdadeiro perdão.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "19",
        idPergunta: "122",
        title: `Como funciona o indulto de Natal ou natalino?`,
        content: `O indulto de Natal ou natalino é o concedido, na época de Natal (segunda metade do mês de dezembro), pelo Presidente da República, nos termos do Art. 84, inciso XII, da Constituição. A partir de sua decretação pelo Presidente da República, ocorre o perdão da pena para as pessoas que se enquadrarem nos requisitos previstos no Decreto presidencial que concede o indulto. Não se confunde com uma saída temporária da prisão. No indulto, há um perdão da pena.`,
      },
    ],
  };
  const atualPresidente = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "96",
        idPergunta: "603",
        title: `Qual o nome do atual Presidente eleito do Brasil?`,
        content: `O nome do atual Presidente eleito do país é Jair Messias Bolsonaro, chefe do Poder Executivo do Brasil.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "96",
        idPergunta: "604",
        title: `Quais os Presidentes da República Federativa do Brasil, a partir da entrada em vigor da Constituição de 1988?`,
        content: `Os Presidentes do país, desde 1988, foram: 1) José Sarney; 2) Fernando Collor de Mello; 3) Itamar Franco; 4) Fernando Henrique Cardoso (02 mandatos consecutivos); 5) Luiz Inácio Lula da Silva (02 mandatos consecutivos); 6) Dilma Rousseff (02 mandatos consecutivos, com afastamento e impedimento no início do 02º mandato); 7) Michel Temer; 8) Jair Messias Bolsonaro.`,
      },
    ],
  };
  const poderLegislativo = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "20",
        idPergunta: "48",
        title: `Qual a “estrutura básica do Poder Legislativo”?`,
        content: `O Poder Legislativo da União é representado e se materializa na figura do Congresso Nacional. Este, nada mais é que a junção de 02 Casas Legislativas, ou seja, a Câmara dos Deputados e o Senado Federal. Este Poder está presente, também, no âmbito dos Estados membros da Federação brasileira e de cada Município. Nos Estados, é representado e se materializa na figura de cada Assembleia Legislativa e nos Municípios é representado e se materializa na figura de cada Câmara Municipal (Câmara dos Vereadores). Assim, o Poder Legislativo da União é bicameral e o dos Estados e o dos Municípios é unicameral. Cada membro, de cada uma das Casas Legislativas citadas, é eleito pelo povo.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "20",
        idPergunta: "49",
        title: `O que é a “Câmara dos Deputados”?`,
        content: `É a chamada Casa Legislativa, integrante do Poder Legislativo da União, composta pelos representantes do povo brasileiro. Composta por Deputados Federais, eleitos pelo povo, com as eleições seguindo o chamado e de complexo meio de cálculo, sistema proporcional. A Câmara dos Deputados possui 513 Deputados Federais, que, a partir do término cálculo proporcional, por Estado, representarão, junto ao Poder Legislativo da União, o Estado da Federação que os elegeram.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "20",
        idPergunta: "593",
        title: `A Câmara dos Deputados possui um Chefe ou um Presidente? Se sim, é eleito? Possui um mandato? Pode ser reeleito?`,
        content: `Sim, para a primeira pergunta. A Câmara do Deputados possui um Presidente, o qual é eleito pelos próprios membros da Câmara, ou seja, pelos Deputados Federais. Este Presidente terá mandato de 02 (dois) anos e não poderá candidatar-se na eleição logo subsequente, porque o Art. 57, § 4º, da Constituição de 1988 proíbe a recondução, isto é, a reeleição.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "20",
        idPergunta: "50",
        title: `O que é o “Senado Federal”?`,
        content: `É a chamada Casa Legislativa, integrante do Poder Legislativo da União, composta pelos representantes de cada Estado membro da Federação brasileira. Decorre da escolha da própria Federação enquanto forma de Estado, no Brasil. Cada Estado elege 03 Senadores, por meio de eleições seguindo sistema majoritário (via de regra, os candidatos com maior número de votos, vencem a eleição). Como os Estados da Federação são 26 (26 x 3 = 78) e a Constituição decidiu que o Distrito Federal também teria direito a eleger 03 Senadores, o total de Senadores é de 81. O mandato (período durante o qual exercerá suas funções e ocupará o cargo de Senador) de cada Senador é de 8 anos, única exceção, no Brasil, ao mandato de 4 anos, aplicável a todos os demais cargos públicos eletivos.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "20",
        idPergunta: "594",
        title: `O Senado Federal possui um Chefe ou um Presidente? Se sim, é eleito? Possui um mandato? Pode ser reeleito?`,
        content: `Sim, para a primeira pergunta. O Senado Federal possui um Presidente, o qual é eleito pelos próprios membros do Senado, ou seja, pelos Senadores da República. Este Presidente terá mandato de 02 (dois) anos e não poderá candidatar-se na eleição logo subsequente, porque o Art. 57, § 4º, da Constituição de 1988 proíbe a recondução, isto é, a reeleição.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "20",
        idPergunta: "559",
        title: `O Congresso Nacional possui um Chefe ou um Presidente?`,
        content: `Sim. Nos termos do Art. 57, § 5º, da Constituição de 1988, o Congresso Nacional será presidido pelo Presidente do Senado Federal. Eis o teor, precisamente, do parágrafo 5º mencionado: a Mesa do Congresso Nacional será presidida pelo Presidente do Senado Federal (...).`,
      },
    ],
  };
  const comissoesParlamentares = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "39",
        idPergunta: "108",
        title: `O que é uma “CPI”?`,
        content: `Uma CPI é a abreviatura para “Comissão Parlamentar de Inquérito”, a qual é formada, no âmbito do Poder Legislativo da União, por Deputados Federais e/ou Senadores da República, com a finalidade de apuração de fato determinado, devendo as conclusões de uma CPI, se for o caso, ser encaminhadas para o Ministério Público para que promova a responsabilização civil e/ou penal dos infratores. Cada Estado membro da Federação brasileira, assim como cada Município, respeitando suas Constituições Estaduais e Leis Orgânicas Municipais, poderão instaurar, no âmbito dos respectivos Poderes Legislativos Estaduais e Municipais, Comissões Parlamentares de Inquérito (CPI’s).`,
      },
    ],
  };

  const processoLegislativo1 = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "51",
        title: "O que é o “processo legislativo”?",
        content:
          "É o processo de criação das principais normas jurídicas existentes no Brasil. São as previstas no Art. 59. Emendas, lei ordinária, lei complementar, lei delegada, medida provisória, decreto-legislativo e resolução. E fazem parte do processo legislativo certos atos, tais como, entre outros, iniciativa, votação, sanção e veto.",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "52",
        title: "O que é um “Projeto de Lei” (PL)?",
        content:
          "É o Projeto do que, no futuro, pode vir a se transformar em uma lei, em caso de sua aprovação pelo Poder Legislativo e confirmação pelo Poder Executivo (sanção). É a minuta de uma lei, sua versão inicial e que não produz quaisquer efeitos normativos.",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "53",
        title: "O que é uma “Proposta de Emenda à Constituição” (PEC)?",
        content:
          "É o Projeto do que, no futuro, pode vir a se transformar em uma Emenda, em caso de sua aprovação pelo Poder Legislativo. É a minuta de uma Emenda, sua versão inicial e que não produz quaisquer efeitos normativos.",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "54",
        title: "O que é uma “lei ordinária”?",
        content:
          "É o caso mais comum do que se chama “lei”, no Brasil. São leis aprovadas pelo Poder Legislativo por maioria simples (ou também chamada relativa), ou seja, se presentes a maioria absoluta dos membros de uma Casa Legislativa, a maioria destes membros vota pela aprovação do até então Projeto de Lei em lei (Art. 47). São mais de uma dezena de milhares de leis ordinárias no Brasil.",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "55",
        title: "O que é uma “lei complementar”?",
        content:
          "Lei complementar é aquela que deve ser criada quando a Constituição diz que o legislador deve regular determinada matéria ou assunto, por meio de lei complementar. A principal diferença para a lei ordinária é o fato já dito de a Constituição dizer a matéria que deve ser regulada por este tipo de lei e, também o quórum mais qualificado e exigente para sua aprovação pelo Poder Legislativo. Para se aprovar uma lei complementar exige-se maioria absoluta, ou seja, que ela seja aprovada pela maioria dos membros de uma Casa Legislativa (Art. 69).",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "56",
        title: "O que é uma “lei delegada”?",
        content:
          "É aquela cujo Projeto de Lei é elaborado pelo Presidente da República, mediante autorização (delegação) prévia do Congresso Nacional (Art. 68).",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "57",
        title: "O que é uma “Medida Provisória”?",
        content:
          "É uma espécie normativa, com força de lei, mas diferente de lei, criada pelo Presidente da República. Entra em vigor no momento de sua criação e publicação no Diário Oficial e é imediatamente submetida ao Congresso Nacional para apreciação e transformação ou não em lei, após a devida deliberação. Em quanto não houver deliberação e aprovação pelo Congresso Nacional, a Medida Provisória produz normalmente efeitos normativos, como se lei fosse. O Congresso Nacional tem o prazo de 60 dias, renovável uma única vez pelos mesmos 60 dias, para decidir se rejeita ou se transforma em lei a medida provisória. Se transformada em lei, tornar-se-á, sempre, uma lei ordinária. Se rejeitada, deixa de produzir efeitos e o Congresso Nacional deverá decidir se a rejeição produzirá efeitos retroativos à data de entrada em vigor da Medida Provisória ou não (Art. 62).",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "58",
        title: "O que é um “decreto-legislativo”?",
        content:
          "É o instrumento normativo pelo qual o Congresso Nacional regulará atos de sua competência exclusiva, nos termos do Art. 49 da Constituição.\r\nExemplo: a autorização de referendo e a convocação de plebiscito; autorização para o Presidente da República declarar guerra, celebrar a paz etc.",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "59",
        title: "O que é a “Resolução”?",
        content:
          "É um instrumento normativo, mais precisamente, espécie normativa. E são os Regimentos Internos de cada Casa Legislativa os que dirão os atos que devem ser regulados por Resolução. A Constituição, salvo exceção específica, não enumera o que deve ser regulado por meio de Resolução.",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "21",
        idPergunta: "60",
        title: "O que é a “iniciativa”?",
        content:
          "É o ato pelo qual se dá início ao processo legislativo. Quem possui iniciativa, tem o poder de apresentar e submeter um Projeto de Lei (PL) ou uma Proposta de Emenda à Constituição (PEC), entre outros exemplos, ao Poder Legislativo. É o pontapé inicial no processo legislativo de uma específica espécie normativa.",
        descCategoria:
          "Processo Legislativo - Parte 1 (O que são e como são feitas as “Leis”?)",
      },
    ],
  };
  const processoLegislativo2 = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "81",
        idPergunta: "461",
        title: "O que é a “iniciativa”?",
        content:
          "É o ato pelo qual se dá início ao processo legislativo. Quem possui iniciativa, tem o poder de apresentar e submeter um Projeto de Lei (PL) ou uma Proposta de Emenda à Constituição (PEC), entre outros exemplos, ao Poder Legislativo. É o pontapé inicial no processo legislativo de uma específica espécie normativa.",
        descCategoria:
          "Processo Legislativo - Parte 2 (Etapas e outras informações) ",
        ordemPergunta: "1",
      },

      {
        idCategoriaPai: "2",
        idCategoria: "81",
        idPergunta: "462",
        title: 'O que são a "discussão" e a "deliberação"?',
        content:
          'No âmbito do Congresso Nacional, ou seja, do Poder Legislativo da União, a "discussão", em linhas gerais, é o ato pelo qual os Deputados Federais, que são os integrantes da chamada Câmara dos Deputados, e os Senadores da República, que são os membros do Senado Federal, debatem, examinam, discutem, para, enfim, poderem chegar à "deliberação", momento em que, literalmente, deliberam e tomam decisões sobre o Projeto de Lei (PL) ou a Proposta de Emenda à Constituição (PEC) a eles submetida para análise, após a etapa inicial de "iniciativa".',
        descCategoria:
          "Processo Legislativo - Parte 2 (Etapas e outras informações) ",
        ordemPergunta: "2",
      },

      {
        idCategoriaPai: "2",
        idCategoria: "81",
        idPergunta: "463",

        title: 'O que é a "votação"?',
        content:
          'A "votação" é um dos principais momentos do chamado "processo legislativo". É o momento em que, após as etapas anteriores de "iniciativa", "discussão"e "deliberação", os parlamentares decidem colocar um Projeto de Lei (PL) ou uma Proposta de Emenda à Constituição (PEC) em, literalmente, "votação". Cada espécie normativa, ou seja, cada tipo de norma ou lei (em sentido amplo e genérico), precisará de uma quantidade de votos diferente para poder ser aprovada ou não.',
        descCategoria:
          "Processo Legislativo - Parte 2 (Etapas e outras informações) ",
        ordemPergunta: "3",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "81",
        idPergunta: "464",
        title:
          'Qual a quantidade de votos exigida para a aprovação das principais "espécies normativas" ou "leis em sentido mais amplo"?',
        content:
          'As principais "espécies normativas" ou "leis em sentido mais amplo" são: (a) as leis ordinárias; (b) as leis complementares; e (c) as Emenda à Constituição. Assim, um Projeto de Lei Ordinária, o tipo legal mais comum no Brasil (são milhares e milhares de leis ordinárias existentes no país), precisará de uma chamada "maioria simples" de votos para poder ser aprovada. Já um Projeto de Lei Complementar, precisará de uma chamada "maioria absoluta" de votos para poder ser aprovada. Por fim, uma Proposta de Emenda à Constituição precisará da maior e mais rigorosa quantidade de votos existentes no país, dentro do Poder Legislativo, para poder ser aprovada. Pode-se chamar tal maioria de uma "maioria muito qualificada" de votos para que possa uma Proposta de Emenda à Constituição ser aprovada.',
        descCategoria:
          "Processo Legislativo - Parte 2 (Etapas e outras informações) ",
        ordemPergunta: "4",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "81",
        idPergunta: "465",

        title:
          'O que significam "maioria simples", "maioria absoluta"e "maioria muito qualificada", nos termos da resposta à pergunta anterior, dentro do Poder Legislativo brasileiro?',
        content:
          'Em simplificados dizeres, a "maioria simples" significa que, presentes em uma sessão legislativa mais da metade de seus membros, a metade destes presentes compõe e poderá aprovar um Projeto de Lei. Essa a chamada "maioria simples" e prevista, com maior precisão, no Art. 47 da Constituição da República. Já a "maioria absoluta", mencionada no Art. 69 da mesma Constituição brasileira, configura-se, diretamente, pela "metade mais um" dos membros de uma Casa Legislativa. Vale então ressaltar e explicar que, um Projeto de Lei Ordinária, para ser aprovado, precisa apenas de uma "maioria simples" de votos ("quorum de maioria simples"); e um Projeto de Lei Complementar, para ser aprovado, precisa de uma "maioria absoluta" de votos ("quorum de maioria absoluta"). Assim, criar uma "Lei Ordinária", analisando somente o número de votos, é teoricamente mais fácil do que criar uma "Lei Complementar". Por fim, o que se chamou de "maioria muito qualificada" diz respeito ao necessário para a aprovação de uma Emenda à Constituição. Assim, tal "maioria muito qualificada" significa 3/5 (três quintos) dos membros de uma Casa Legislativa. Entretanto, isto ainda não será suficiente. Será necessário que a votação de uma Proposta de Emenda à Constituição, que é a espécie normativa que exige tal "maioria muito qualificada" para a sua aprovação, seja discutida, deliberada e votada 02 (duas) vezes (que são os chamados "dois turnos" de votação) e em cada Casa Legislativa do Congresso Nacional (Câmara dos Deputados e Senado Federal), a fim de que possa ser aprovada e, frise-se, se conseguir, em todas as votações, o já acima citado quorum de 3/5 (três quintos) dos membros de cada Casa Legislativa. Tudo isso conforme o previsto no Art. 60, § 2º, da Constituição.',
        descCategoria:
          "Processo Legislativo - Parte 2 (Etapas e outras informações) ",
        ordemPergunta: "5",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "81",
        idPergunta: "466",
        title:
          'O que vem após a "aprovação" de um Projeto de Lei ou de uma "Proposta de Emenda à Constituição"?',
        content:
          'No caso de um "Projeto de Lei", após sua aprovação é encaminhado ao Presidente da República para que exerça seu poder de "sanção" ou de "veto". Se sancionar, a já considerada "lei" segue para etapas finais de "promulgação" e "publicação". Se houver algum tipo de "veto", o Projeto de Lei retorna para o Congresso Nacional que, por meio somente de uma "maioria absoluta" de votos, poderá derrubar o "veto". Se derrubar ou se não derrubar, aí sim o Projeto de Lei segue (respectivamente, com ou sem os impactos e alterações do veto) para as etapas de "promulgação"e "publicação". Por fim, no caso da Proposta de Emenda à Constituição, uma vez aprovada pelo Congresso Nacional, este mesmo, diretamente, providenciará sua "promulgação" e "publicação". Pois não existe "veto" nem "sanção" para Propostas de Emenda à Constituição. O Congresso Nacional é soberano para as criar e o Presidente da República não pode exercer qualquer interferência final.',
        descCategoria:
          "Processo Legislativo - Parte 2 (Etapas e outras informações) ",
        ordemPergunta: "6",
      },
    ],
  };
  const sancaoVeto = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "22",
        idPergunta: "61",
        title: "O que é a “sanção”?",
        content:
          "É o ato pelo qual o Presidente da República concorda com Projeto de Lei (PL) já aprovado e a Ele (Presidente da República) encaminhado pelo Congresso Nacional (Art. 66). Somente se dá a sanção em casos de Projetos de Lei. Não cabe sanção sobre Propostas de Emenda à Constituição (PEC’s), porque se entende que o poder de reforma (alteração) da Constituição é exclusivo do Congresso Nacional.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "22",
        idPergunta: "62",
        title: "O que é o “veto”?",
        content:
          "É o ato pelo qual o Presidente da República discorda, total ou parcialmente, de Projeto de Lei (PL) já aprovado e a Ele (Presidente da República) encaminhado pelo Congresso Nacional (Art. 66, parágrafo primeiro). Não cabe veto sobre Propostas de Emenda à Constituição (PEC’s), porque se entende que o poder de reforma (alteração) da Constituição é exclusivo do Congresso Nacional.",
      },
    ],
  };
  const poderJudiciario = {
    rows: [
      {
        idCategoria: "23",
        idCategoriaPai: "2",
        idPergunta: "64",
        title:
          "O Poder Judiciário possui “subdivisões decorrentes de especializações temáticas”?",
        content:
          "O Poder Judiciário brasileiro também possui subdivisões que decorrem de especializações baseadas em matérias, ou seja, temáticas. Assim, há a Justiça do Trabalho (Tribunais do Trabalho), a Justiça Militar (Tribunais Militares), a Justiça Eleitoral (Tribunais Eleitorais) e a Justiça Desportiva (Tribunais Desportivos).",
        descCategoria: "Poder Judiciário",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "23",
        idPergunta: "65",
        title: "Qual a “composição básica do Poder Judiciário”?",
        content:
          "Em termos básicos, é composto por juízes, desembargadores e Ministros. Juízes, em primeira instância. Desembargadores em segunda instância. Ministros nos âmbitos de Tribunais chamados superiores e que possuem sede em Brasília, tais como, entre outros, o Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF).",
        descCategoria: "Poder Judiciário",
      },
    ],
  };
  const supremoTribunal = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "24",
        idPergunta: "66",
        title: "O que é o “Supremo Tribunal Federal (STF)”?",
        content:
          "É a cúpula do Poder Judiciário e o chamado guardião da Constituição. É composto por 11 Ministros que, após escolhidos pelo Presidente da República, devem ser sabatinados pelo Congresso Nacional. Caso aprovados na sabatina, aí sim, podem ser nomeados e tomar posse. Entre várias funções, compete ao STF proteger a Constituição (guardião da Constituição). Este o motivo pelo qual cabe ao STF dar a última palavra e declarar, em última instância, uma lei constitucional ou inconstitucional. Também cabe ao STF julgar, como última instância (cúpula do Poder Judiciário), recursos interpostos contra Decisões proferidas nos Tribunais Estaduais e Federais do Brasil.",
        descCategoria: "Supremo Tribunal Federal (STF)",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "24",
        idPergunta: "67",
        title:
          "Quais os “requisitos para ser Ministro do Supremo Tribunal Federal”?",
        content:
          "Basicamente, cidadãos a partir de 35 anos e com menos de 65 anos, que possuam notável saber jurídico e reputação ilibada. Embora a Constituição não exija, expressamente, o bacharelado em Direito, apenas um Ministro, na história do Supremo Tribunal Federal, não possuiu formação em Direito.",
        descCategoria: "Supremo Tribunal Federal (STF)",
      },
    ],
  };
  const atuaisMinistros = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "95",
        idPergunta: "600",
        title:
          'Quais os "nomes" dos atuais 11 (onze) Ministros do Supremo Tribunal Federal (STF) e por quais Presidentes da República foram indicados?',
        content:
          "Atualmente, os Ministros do Supremo Tribunal Federal (STF) são: 1) Gilmar Ferreira Mendes (indicado pelo Presidente Fernando Henrique Cardoso); 2) Enrique Ricardo Lewandowski (indicado pelo Presidente Luiz Inácio Lula da Silva); 3) Cármen Lúcia Antunes Rocha (indicada pelo Presidente Luiz Inácio Lula da Silva); 4) José Antonio Dias Toffoli (indicado pelo Presidente Luiz Inácio Lula da Silva); 5) Luiz Fux (indicado pela Presidente Dilma Rousseff); 6) Rosa Maria Pires Weber (indicada pela Presidente Dilma Rousseff); 7) Luís Roberto Barroso (indicado pela Presidente Dilma Rousseff); 8) Luiz Edson Fachin (indicado pela Presidente Dilma Rousseff); 9) Alexandre de Moraes (indicado pelo Presidente Michel Temer); e 10) Kassio Nunes Marques (indicado pelo Presidente Jair Messias Bolsonaro); e 11) André Luiz de Almeida Mendonça (indicado pelo Presidente Jair Messias Bolsonaro).",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "95",
        idPergunta: "601",
        title:
          "Quem são os atuais Presidente e Vice-Presidente do Supremo Tribunal Federal (STF)?",
        content:
          "O atual Presidente do Supremo Tribunal Federal (STF) é o Ministro Luiz Fux e a atual Vice-Presidente do Supremo Tribunal Federal (STF) é a Ministra Rosa Maria Pires Weber.",
      },
    ],
  };
  const estadoDefesa = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "26",
        idPergunta: "70",
        title: "O que significa a expressão “Estado de Defesa”?",
        content:
          "O “Estado de Defesa” é uma das espécies da categoria maior, denominada “Estado de Exceção”. Em casos de necessidade de “restabelecimento da ordem pública”, “restabelecimento da paz social”, normalmente decorrentes de situações de “instabilidade institucional” ou de “calamidades de grandes proporções na natureza”, pode a Presidência da República, com a participação, entre outras instituições, do Congresso Nacional, decretar “Estado de Defesa” (Art. 136).",
      },

      {
        idCategoriaPai: "2",
        idCategoria: "26",
        idPergunta: "71",
        title: "O que significa a expressão “Estado de Sítio”?",
        content:
          "O “Estado de Sítio” é uma das espécies da categoria maior, denominada “Estado de Exceção”. Em casos de “comoção grave e de repercussão nacional”, de “ineficácia de uma prévia decretação do Estado de Defesa”, de “declaração de estado guerra” ou de necessidade de “resposta a agressão armada estrangeira”, pode a Presidência da República, com a participação, entre outras instituições, do Congresso Nacional, decretar “Estado de Sítio” (Art. 137).",
      },
      {
        idCategoriaPai: "2",
        idPergunta: "72",
        idCategoria: "26",
        title:
          "É comum a decretação de “Estado de Defesa” ou de “Estado de Sítio”?",
        content:
          "Da entrada em vigor da Constituição de 1988 até a última atualização deste APP, nunca foram “Estado de Defesa” ou “Estado de Sítio” decretados no Brasil. Até a última atualização deste APP, apenas na vigência de Constituições passadas brasileiras, experimentou o Brasil a decretação de “Estados de Exceção”, tais como os citados “Estado de Defesa” e “Estado de Sítio”.",
      },
    ],
  };
  const intervencaoFederal = {
    rows: [
      {
        idCategoria: "49",
        idCategoriaPai: "2",
        idPergunta: "145",
        title: 'O que é a "Intervenção Federal"?',
        content:
          'Trata-se de medida excepcional, tomada pelo governo federal (União) que intervem sobre qualquer um dos Estados brasileiros, do Distrito Federal (Brasília) ou de qualquer um dos Municípios, com o objetivo, por exemplo, de manter a integridade nacional, de repelir invasão estrangeira ou de uma unidade da Federação em outra, de pôr fim a um grave comprometimento da ordem pública, de garantir o livre exercício de qualquer dos Poderes nas unidades da Federação e, entre outros objetivos, de assegurar a observância dos seguintes princípios constitucionais: a) forma republicana, sistema representativo e regime democrático; b) direitos da pessoa humana; c) autonomia municipal; d) prestação de contas da administração pública, direta e indireta (Art. 34 da Constituição). Mas é importante sempre lembrar que, assim como nos casos de "Estado de Sítio" e de "Estado de Defesa", a regra geral é a da NÃO INTERVENÇÃO, a da NÃO DECRETAÇÃO DO ESTADO DE EXCEÇÃO.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "49",
        idPergunta: "146",
        title:
          'Pode um "Estado membro da Federação brasileira" intervir em um "Município" que esteja dentro de seu território?',
        content:
          "Sim. O Art. 35 da Constituição, permite, também em caráter excepcional, que isto ocorra. Por exemplo, entre outras possibilidades citadas na própria Constituição, quando não forem prestadas contas devidas, na forma da lei, pelo Município. Ou quando não tiver sido aplicado, pelo Município, o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde.",
      },
      {
        idCategoria: "49",
        idCategoriaPai: "2",
        idPergunta: "147",
        title:
          'Pode o "Presidente da República" decretar "Intervenção Federal"?',
        content:
          "Sim. O Art. 84, inciso X, da Constituição de 1988, confere ao Presidente da República esta possibilidade, afirmando que compete privativamente ao Presidente da República decretar e executar a intervenção federal.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "49",
        idPergunta: "148",
        title:
          'Quando o "Presidente da República" decreta a "Intervenção Federal", pode ter seu Decreto também examinado por mais alguém, ou seja, por outra Instituição brasileira?',
        content:
          'Sim. Com exceção de alguns poucos e específicos casos previstos nos Arts. 34 e 35 da Constituição de 1988 (Art. 34, incisos VI e VII, e Art. 35, inciso IV), o Decreto de Intervenção, que especificará a amplitude, o prazo e as condições de sua execução e que, se couber, for o caso e houver necessidade, nomeará uma pessoa como Interventora, será SUBMETIDO À APRECIAÇÃO DO CONGRESSO NACIONAL ou da Assembléia Legislativa do Estado (no caso de um Governador de Estado decretar "Intervenção" em um Município dentro de seu território), no prazo de 24 (vinte e quatro) horas (Art. 36, § 1º, da Constituição).',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "49",
        idPergunta: "149",
        title:
          'Se o fato ou os fatos que causaram a "Intervenção Federal" acabarem, a mesma também acaba?',
        content:
          'Sim. Restabelecida a ordem, deve acabar a "Intervenção Federal" e, encerrados os motivos da Intervenção, as autoridades afastadas de seus cargos a estes voltarão, salvo impedimento legal (Art. 36, § 4º, da Constituição).',
      },
    ],
  };
  const forcasArmadas = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "50",
        idPergunta: "150",
        title: 'O que são as "Forças Armadas"?',
        content:
          'De acordo com o Art. 142 da Constituição, as "Forças Armadas", que são constituídas pela Marinha, pelo Exército e pela Aeronáutica, são instituições nacionais permanentes e regulares, organizadas com base na hierarquia e na disciplina, sob a autoridade suprema do Presidente da República.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "50",
        idPergunta: "151",
        title: 'Quais os principais objetivos das "Forças Armadas"?',
        content:
          'Em uma definição bem resumida, as "Forças Armadas" (Exército, Marinha e Aeronáutica) destinam-se à defesa da Pátria, à garantia dos poderes constitucionais e, por iniciativa de qualquer destes poderes, da lei e da ordem.',
      },
      {
        idCategoriaPai: "2",
        idPergunta: "152",
        idCategoria: "50",
        title:
          'É dever das "Forças Armadas" garantir a chamada "Segurança Pública"?',
        content:
          'Apesar de muito usada pelo Poder Público para esta finalidade, não é dever das "Forças Armadas", nos termos da Constituição, garantir a "segurança pública". De acordo com o Art. 144 da Constituição, a chamada "segurança pública" é direito e responsabilidade de todos, dever do Estado e é exercida por meio dos seguintes órgãos: "polícia federal"; "polícia rodoviária federal"; "polícia ferroviária federal"; "polícias civis"; e "polícias militares e corpos de bombeiros militares". É muito importante lembrar que cada um destes órgãos terá suas competências e áreas de atuação, sendo a maioria destas complementares umas das outras. RECOMENDA-SE também leitura dos Capítulos deste APP destinados ao "Direito à Segurança", às "Polícias e Corpos de Bombeiros Militares" e à "Guarda Municipal".',
      },
    ],
  };
  const ministerioPublico = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "25",
        idPergunta: "68",
        title: "O que é o “Ministério Público”?",
        content:
          "O Ministério Público é uma instituição vinculada, oficial e formalmente, ao Poder Executivo. Possui funções primordiais para a República brasileira, tais como, entre outras, as principais de defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis (Art. 127). Os principais membros do Ministério Público são os chamados Promotores de Justiça que, em evolução de sua carreira, podem tornar-se “Procuradores de Justiça”. Entretanto, atenção para não confundir os Procuradores de Justiça, integrantes do Ministério Público, com vários outros Procuradores, membros, por exemplo, das chamadas Procuradorias Municipais, Estaduais e Federais. Estes Procuradores municipais, estaduais ou federais, nada mais são do que advogados públicos, respectivamente, dos municípios, Estados ou da União e, portanto, nada têm a ver com o Ministério Público. O Ministério Público existe nas esferas da União, subdividido, entre outros, na figura do “Ministério Público Federal”, do “Ministério Público do Trabalho”, do “Ministérios Público Militar” etc. (Art. 128), e dos Estados (Art. 128). Por exemplo, os mais famosos integrantes do “Ministério Público Federal” são os denominados “Procuradores da República” e os mais conhecidos integrantes do “Ministério Público Estadual”, os já citados “Promotores de Justiça”. E estes integrantes somente se tornam, por exemplo, “Procuradores da República” ou “Promotores de Justiça”, se aprovados em concurso público.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "25",
        idPergunta: "69",
        title: "O que são “direitos indisponíveis”?",
        content:
          "Direitos indisponíveis são aqueles de que não se pode dispor livremente, dada a sua relevância e grandeza. Por exemplo, se uma pessoa pode dispor do direito de propriedade sobre um bem móvel ou imóvel que possui, como um carro ou uma casa, podendo negociá-los com quem quiser, o mesmo não se aplica, também por exemplo, ao direito à vida, que deve ser entendido como inegociável e, portanto, indisponível.",
      },
    ],
  };
  const tribunalContas = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "27",
        idPergunta: "73",
        title: `O que é o “Tribunal de Contas”?`,
        content: `O “Tribunal de Contas”, que existe no âmbito da União (“Tribunal de Contas da União”), de cada um dos Estados (“Tribunal de Constas do Estado”), de cada um dos Municípios (“Tribunal de Contas do Município”) do Brasil e do Distrito Federal (“Tribunal de Contas do Distrito Federal”) é um órgão responsável pela fiscalização das finanças, da contabilidade e do orçamento das instituições e órgãos públicos brasileiros (Art. 71 e Art. 75). O “Tribunal de Contas” é uma instituição do Poder Legislativo e, junto com o próprio Poder Legislativo, é o responsável pelo controle (externo) das contas públicas (Art. 70). É composto por Ministros, que assumem o cargo por indicação e, não, por concurso público (Art. 73).`,
      },
    ],
  };
  const admPublica = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "35",
        idPergunta: "95",
        title: `O que é a chamada “Administração Pública”?`,
        content: `A Administração Pública, em termos básicos, é o nome mais técnico dado ao Poder Público brasileiro e aos que exercem a chamada função administrativa. Em linhas gerais, pode ser classificada em Administração Pública Direta e em Administração Pública Indireta (Art. 37, caput). A Administração Pública Direta é composta, entre tantos outros órgãos e instituições, pela União e seus Ministérios, pelos Estados e suas Secretarias, pelos Municípios e também suas Secretarias e pelo Distrito Federal e, igualmente, suas Secretarias. Conforme já dito, a Administração Pública Direta possui muitos outros órgãos e instituições, sendo os Ministérios e Secretarias apenas exemplos. Já a Administração Pública Indireta, também em linhas gerais, é classicamente composta pelas Empresas e Fundações Públicas, pelas Sociedades de Economia Mista e pelas Autarquias (Art. 37, inciso XIX).`,
      },
    ],
  };
  const admPublicaIndireta = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "36",
        idPergunta: "96",
        title: "Quais seriam exemplos de “Empresas Públicas”?",
        content:
          "Exemplo de Empresas Públicas: Caixa Econômica Federal (CEF); Banco Nacional de Desenvolvimento Econômico e Social (BNDES) etc.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "36",
        idPergunta: "97",
        title: "Quais seriam exemplos de “Fundações Públicas”?",
        content:
          "Exemplo de Fundações Públicas: IBGE (Fundação Instituto Brasileiro de Geografia e Estatística); a FUNAI (Fundação Nacional do Índio) etc.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "36",
        idPergunta: "98",
        title: "Quais seriam exemplos de “Sociedades de Economia Mista”?",
        content:
          "Exemplo de Sociedades de Economia Mista: Petrobras; Banco do Brasil etc.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "36",
        idPergunta: "99",
        title: "Quais seriam exemplos de “Autarquias”?",
        content:
          "Exemplo de Autarquias: as Agências Reguladoras, tais como a ANATEL (Agência Nacional de Telecomunicações), a ANS (Agência Nacional de Saúde Suplementar) etc.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "36",
        idPergunta: "100",
        title:
          "Quais os “princípios” que regem a “Administração Pública brasileira”?",
        content:
          "Os princípios que regem e servem de base para a Administração Pública brasileira, Direta ou Indireta, são os da “legalidade”, “impessoalidade”, “moralidade”, “publicidade” e “eficiência” (Art. 37, caput).",
      },
    ],
  };
  const ordemEconomica = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "37",
        idPergunta: "101",
        title: `O que é a “Ordem Econômica”?`,
        content: `A Constituição brasileira destinou um Título (grande capítulo) inteiro para a chamada “Ordem Econômica e Financeira” (Título VII – Art. 170 e seguintes). A ordem econômica tem por fim assegurar a todos existência digna, conforme os ditames da justiça social. Tem por base dois grandes pilares: a “valorização do trabalho humano” e a “livre iniciativa”.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "37",
        idPergunta: "102",
        title: `Quais os “princípios” da “Ordem Econômica”?`,
        content: `São exemplos de princípios da ordem econômica, entre outros: a soberania nacional; a propriedade privada; a função social da propriedade; a livre concorrência; a defesa do consumidor; a defesa do meio ambiente etc. (Art. 170, caput e seus incisos).`,
      },
    ],
  };
  const ordemUrbana = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "41",
        idPergunta: "110",
        title: "O que é “política urbana”?",
        content:
          "A política de desenvolvimento urbano, executada pelo Poder Público Municipal, tem por objetivo garantir o bem-estar dos habitantes de cada Município do Brasil, assim como ordenar a aplicação das funções sociais da cidade. As diretrizes gerais da política de desenvolvimento urbano estão previstas, em âmbito nacional, no Estatuto da Cidade (Lei 10.257/2001) e, em âmbito local, isto é, Municipal, sobretudo, mas não somente, no chamado “Plano Diretor” (Art. 182).",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "41",
        idPergunta: "111",
        title: "O que é o chamado “Plano Diretor”?",
        content:
          "É uma lei municipal que tem por objetivo, principalmente, estabelecer as normas de desenvolvimento urbano, por meio da criação de diretrizes de ordenação do território Municipal. Trata-se de um plano urbanístico e, de forma mais precisa, do único plano urbanístico previsto, expressamente, na Constituição de 1988. E, de acordo com esta última (Constituição), a propriedade urbana cumpre sua função social quando atende às exigências contidas no Plano Diretor (Art. 182). Suas características gerais são mais detalhadas no Estatuto da Cidade, a partir do seu Artigo 39.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "41",
        idPergunta: "112",
        title: "O que são as “funções sociais da cidade”?",
        content:
          "São funções, de caráter social, que cada cidade brasileira deve exercer. São semelhantes aos direitos sociais previstos na própria Constituição, mas ainda mais extensas. Por exemplo: saúde, educação, segurança, lazer, moradia, transporte, iluminação pública, coleta de lixo, proteção do patrimônio histórico, cultural, ambiental e urbanístico etc. A expressão “funções sociais da cidade” é citada na Constituição de 1988. Entretanto, a mesma Constituição de 1988 não explica, nem mesmo enumera as ditas “funções sociais da cidade”. Por outro lado, a maioria das Constituições Estaduais (Constituições de cada Estado membro da Federação brasileira) e das Leis Orgânicas Municipais (Leis Orgânicas de cada município do país), citam, enumeram e listam as chamadas “funções sociais da cidade”.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "41",
        idPergunta: "127",
        title: 'O que é o "Direito Urbanístico"?',
        content:
          'O "Direito Urbanístico" é o ramo do Direito que tem por objetivo regular as relações humanas, sociais, políticas, econômicas e, sobretudo, urbanas, ligadas ao chamado meio ou ambiente urbano. É um ramo que versa, por exemplo, sobre o desenvolvimento urbano, a ordenação do território, a qualidade de vida e o bem-estar social em áreas urbanas.',
      },
    ],
  };
  const ordemAmbiental = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "45",
        idPergunta: "123",
        title: 'O que é a "Ordem Ambiental"?',
        content:
          'A "Ordem Ambiental" ou ordem jurídica ambiental nada mais é do que o conjunto de normas que versa sobre o ambiente, principalmente, chamado de "natural". No caso específico da Constituição de 1988, a ordem ambiental constitucional é o conjunto de normas constitucionais (presentes dentro da Constituição) que versa sobre o ambiente, sobretudo, natural. Embora as normas constitucionais ambientais estejam espalhadas por todo texto da Constituição, existe um Capítulo, dentro do Título VIII (denominado "Da Ordem Social"), onde se encontram majoritariamente concentradas. Trata-se do Capítulo VI, do referido Título VIII, intitulado "Do Meio Ambiente", em que estão inseridos o Artigo 225 e seus 7 parágrafos e respectivas subdivisões.',
        idCategoria: "45",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "45",
        idPergunta: "124",
        title: 'O que é o "Direito Ambiental"?',
        content:
          'O "Direito Ambiental", em breves palavras, nada mais é do que um ramo do Direito que tem por objetivo regular todas as relações sociais, humanas, econômicas, políticas e, logicamente, ambientais, ligadas ao meio ambiente ou ao também chamado ambiente natural.',
        idCategoria: "45",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "45",
        idPergunta: "125",
        title: 'O que é a chamada "sustentabilidade"?',
        content:
          'No Art. 225, caput, da Constituição, há um anúncio da ideia de sustentabilidade. E lá está escrito que "todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá- lo para as presentes e futuras gerações". A ideia de preservação do ambiente para as presentes e futuras gerações, está diretamente relacionada à "sustentabilidade". Agir de forma ecológica e ambientalmente equilibrada hoje, para se ter um meio ambiente equilibrado amanhã, ou seja, no futuro.',
        idCategoria: "45",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "45",
        idPergunta: "126",
        title: 'O que é o "desenvolvimento sustentável"?',
        content:
          'Basicamente, "desenvolvimento sustentável" significa conseguir conciliar o desenvolvimento de uma nação, nos mais variados setores, mas, sobretudo, nos setores econômico, social, industrial etc., com a preservação do meio ambiente ou do chamado ambiente natural.',
        idCategoria: "45",
      },
    ],
  };
  const instrumentoConstitucionais = {
    rows: [
      {
        idPergunta: "154",
        idCategoriaPai: "2",
        idCategoria: "52",
        title:
          'Quais seriam os chamados "Instrumentos" e "Ações Constitucionais"?',
        content:
          'São entendidos como "Instrumentos" e "Ações Constitucionais", normalmente, os chamados "Mandado de Segurança"; "Habeas Corpus"; "Habeas Data"; "Ação Popular"; e "Mandado de Injunção". Apesar disso, outros Instrumentos e Ações são previstos na Constituição e, a partir de uma análise mais jurídica e técnica, podem fazer também parte de um elenco de, também, "Instrumentos" e "Ações Constitucionais". Exemplos disto seriam a "Ação civil Pública", "Ações" ligadas ao chamado "controle de constitucionalidade" etc.',
      },
      {
        idPergunta: "155",
        idCategoriaPai: "2",
        idCategoria: "52",
        title:
          'Por que os "instrumentos" e "Ações Constitucionais" são chamados assim?',
        content:
          'Os "instrumentos constitucionais" e/ou "Ações Constitucionais" são normalmente assim chamados porque são ações, instrumentos ou medidas judiciais previstos e garantidos no texto da própria Constituição de 1988, o que acabou por conferir a eles maior fama e, até mesmo, relevância.',
      },
      {
        idPergunta: "156",
        idCategoriaPai: "2",
        idCategoria: "52",
        title:
          'Os "Instrumentos" e "Ações Constitucionais" podem também ser chamados de "Remédios Constitucionais"?',
        content:
          'Na maioria da vezes, como os "Instrumentos" e "Ações Constitucionais" têm uma função de remediar uma situação, assim como um remédio serve para remediar uma pessoa doente, sim. Ou seja, podem ser também chamados de "Remédios Constitucionais". Mas, se a função de um "Instrumento" ou "Ação Constitucional" específica não for a de remediar algo, deve-se evitar a utilização do nome "Remédio Constitucional".',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "157",
        title: 'O que é o "Habeas Corpus"?',
        content:
          'Em uma análise geral, o "Habeas Corpus" é um instrumento, uma medida ou um remédio legal e constitucional proposto perante a Justiça (Poder Judiciário) e que objetiva proteger, de forma mais direta, um dos direitos mais importantes de todos nós, cidadãos: a LIBERDADE. De modo ainda mais preciso, serve para defender a liberdade em seu aspecto ligado ao chamado "direito de ir e vir", tradicionalmente garantido a todos os brasileiros e brasileiras. Em tradução literal da expressão utilizada em latim, "Habeas Corpus" significa "que tenhas o corpo" ou, de forma mais explicada, o "teu" corpo "em liberdade". Enfim, encontra-se o "Habeas Corpus" expressamente previsto no Art. 5º, inciso LXVIII, da Constituição de 1988 ("conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder").',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "158",
        title: 'Para que serve o "Habeas Corpus"?',
        content:
          'É uma medida judicial possibilitada e oferecida a qualquer cidadão e pessoa brasileira para proteger sua "liberdade" e "direito de ir e vir". Apesar de não exclusivamente, é muito mais utilizada e famosa no âmbito do "Direito Penal", em que pessoas impetram, isto é, ingressam com esta medida (chamada "Habeas Corpus") para serem soltas quando estão presas, ou para evitarem serem presas, quando se encontram muito ameaçadas de serem levadas à prisão (caso do chamado "Habeas Corpus preventivo").',
      },
      {
        idPergunta: "159",
        idCategoriaPai: "2",
        idCategoria: "52",
        title:
          'Existem requisitos ou condições para se ingressar com um "Habeas Corpus"?',
        content:
          'Sim, existem. Entre outros requisitos que poderiam ser citados, é preciso que a pessoa que ingressa com um "Habeas Corpus" para proteger sua "liberdade", seu "direito de ir e vir" e sua "liberdade de locomoção" demonstre que a privação de sua liberdade ou a grande ameaça de privação de sua liberdade esteja relacionada a uma ilegalidade (ato ilegal) ou a um abuso de poder por uma autoridade.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "160",
        title: 'Qualquer pessoa pode ingressar com um "Habeas Corpus"?',
        content:
          'Sim. A ideia que a Constituição de 1988 quis passar foi a de que, quem quer que "ilegalmente" ou mediante "abuso de poder" tenha sido privado ou esteja prestes a ser privado de sua "liberdade de locomoção", possa impetrar um "Habeas Corpus", independentemente de advogado. Ou seja, embora a assistência por um advogado seja recomendada, exatamente por ele dominar a técnica jurídica e poder melhor defender os direitos de uma pessoa, nada impede que qualquer cidadão, sozinho e sem a assistência de advogado, ingresse com um "Habeas Corpus" em seu próprio favor, isto é, para si mesmo.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "161",
        title: 'O que é "Mandado de Segurança"?',
        content:
          '"Mandado de Segurança" é uma medida legal e constitucional proposta perante a Justiça (Poder Judiciário) e que tem por objetivo proteger "direito líquido e certo" de uma pessoa, que esteja ameaçada por uma "ilegalidade" ou "abuso de poder" por parte do Poder Público ou delegatários deste último (Exemplo: empresas concessionárias de serviços públicos - transportes etc. - que são privadas, particulares, mas foram contratadas pelo Poder Público, recebendo delegação de poderes deste mesmo Poder Público). É importante, entretanto, afirmar, que o "Mandado de Segurança" é aplicável para os casos em que não couber ou for aplicável o "Habeas Corpus" ou o "Habeas Data". Portanto, se o caso for de ameaça à liberdade de locomoção, ao direito de ir e vir ou `busca de informações e arquivos sobre uma pessoa, NÃO se deve impetrar, ou seja, propor "Mandado de Segurança". O "Mandado de Segurança" se encontra expressamente previsto no Art. 5º, inciso LXIX, da Constituição de 1988 ("conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público").',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "162",
        title: 'Para que serve o "Mandado de Segurança"?',
        content:
          'O "Mandado de Segurança" serve para atacar uma "ilegalidade" ou um "abuso de poder" praticado pelo "Poder Público" ou por alguém que esteja no exercício de atribuições do Poder Público. Mas também pode servir para tentar evitar um ataque a uma ilegalidade ou abuso de poder, conforme explicado acima. E, neste último caso, a hipótese será de um "Mandado de Segurança Preventivo", pois objetivará prevenir a prática de uma "ilegalidade" ou "abuso de poder" que esteja prestes a ocorrer.',
      },
      {
        idPergunta: "163",
        idCategoriaPai: "2",
        idCategoria: "52",
        title:
          'Existem requisitos ou condições para se ingressar com um "Mandado de Segurança"?',
        content:
          'Sim, existem. A existência e comprovação imediata da prática ou grande ameaça de prática de uma "ilegalidade" ou de um "abuso de poder", é requisito essencial e condição indispensável. Além disso, quem impetra, ingressa ou propõe o "Mandado de Segurança", deve comprovar possuir um direito "líquido" e "certo", que nada mais é do que o "direito que não possui dúvidas em torno de si" e que pode ser cabalmente comprovado, contundentemente demonstrado e imediatamente provado perante a Justiça e no momento do ingresso com o "Mandado de Segurança". Por isso, "líquido" e "certo"!',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "164",
        title: 'O que é o "Mandado de Segurança Coletivo"?',
        content:
          "Apesar de ser menos comum, nada mais é do que o mandado de segurança que pode ser impetrado por (a) partido político com representação no Congresso Nacional; ou por (b) organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano, em defesa dos interesses de seus membros ou associados. Encontra-se previsto no Art. 5º, inciso LXX, da Constituição de 1988.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "165",
        title: 'O que é o "Habeas Data"?',
        content:
          'É o que se encontra previsto no Art. 5º, inciso LXXII, da Constituição da República. Assim, serve o "Habeas Data" para (a) assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público; e para (b) a retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo. É um "Instrumento" ou "Ação Constitucional" muito relacionado à época de criação da Constituição de 1988. Uma época logo e imediatamente subsequente à Ditadura Militar brasileira, na qual muitos dados e informações sobre várias pessoas e cidadãos encontravam-se em arquivos do Poder Público, de forma secreta e escondida. O "Habeas Data", assim, passou a ser a medida judicial cabível para que a pessoa interessada pudesse pleitear acesso a seus dados e informações, guardados pelo Poder Público.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "52",
        idPergunta: "166",
        title: 'O que é o "mandado de injunção"?',
        content:
          'A partir de uma abordagem ampla e geral, o "mandado de injunção" é uma medida judicial, legal e constitucional, que tem por objetivo geral fazer com que um Juiz possa sanar uma "omissão legislativa", por meio de seu julgamento, proferido dentro e no curso desta medida chamada "mandado de injunção". Como, muitas vezes, não existe uma lei específica para resolver uma determinada situação, o "mandado de injunção" daria poderes ao Poder Judiciário para exercer a tarefa que deveria ter sido exercida pelo Poder Legislativo. Mas, vale sempre lembrar, qualquer decisão em um "mandado de injunção" terá somente validade no caso concreto sobre o qual versou. O "mandado de injunção" se encontra previsto no Art. 5º, inciso LXXI, que assim estatui: "conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania".',
      },
    ],
  };
  const tributacaoConstituicao = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "54",
        idPergunta: "176",
        title: "O que é um “tributo”?",
        content:
          "Em linhas iniciais e gerais, o “tributo” é o que uma pessoa deve pagar ao Estado, em razão da ocorrência de alguma situação específica, que pode aqui ser preliminarmente chamada de “fato gerador”.\r\nExemplos de tributos (Art. 145):\r\n(a) um “imposto”, como o Imposto de Renda (IR), o Imposto sobre a Propriedade de Veículos Automotores (IPVA); o Imposto sobre a Circulação de Mercadorias e Serviços (ICMS) etc.;\r\n(B) uma “taxa”, como a Taxa de Judiciária, a Taxa de Coleta de Lixo, a Taxa de Coleta de Esgoto etc.;\r\n(C) as contribuições de melhoria.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "177",
        title: "O que é um “imposto”?",
        content:
          "“Imposto” é o mais famoso “tributo” e é uma quantia paga ao Estado para que este possa investir, conforme melhor lhe aprouver, ou seja, de acordo com suas decisões, em serviços públicos, obras públicas e, entre outros exemplos, funcionalismo público. Sob uma primeira e geral análise, é importante esclarecer que um imposto não vincula o Estado a uma “contraprestação específica” e em determinada área ou setor. Arrecada-se dinheiro para, depois, o Poder Público decidir onde e como vai usar ou gastar o dinheiro proveniente de impostos.",
        idCategoria: "54",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "178",
        title: "O que é uma “taxa”?",
        content:
          "“Taxa” é um tributo cobrado pelo Poder Público como “contraprestação por um serviço público fundamental” oferecido. Também se cobra “taxa” para o exercício amplo, pelo Estado, do chamado “poder de polícia” da Administração Pública.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "179",
        title: "O que é uma “contribuição de melhoria”?",
        content:
          "É um tributo cobrado diretamente de uma pessoa, proprietária um imóvel, em razão de “valorização deste imóvel” decorrente uma obra pública.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "180",
        title: "O que é o “fato gerador”?",
        content:
          "Em linhas inicias, é a ocorrência de uma situação concreta, mas prevista em lei, que dá ensejo, ou seja, dá causa para que o Estado cobre um “tributo” de alguém. Portanto, é o “fato gerador” que faz com que nasça a chamada “obrigação tributária”. Exemplo genérico: se uma pessoa compra um carro, ocorre um fato, que é a compra do carro. E tal fato gera a necessidade de a pessoa pagar um tributo, mais especificamente, um imposto, chamado Imposto sobre a Propriedade de Veículos Automotores (IPVA).",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "181",
        title: "O que é uma “obrigação tributária”?",
        content: "É a obrigação de se pagar um tributo.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "182",
        title: "O que é a “tributação”?",
        content:
          "É o ato que significa a maneira pela qual o Estado pode exigir de uma pessoa o pagamento de um “tributo”. Pela “tributação”, o Estado arrecada fundos, ou seja, dinheiro para poder se manter e, em uma visão geral, manter o próprio Estado.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "183",
        title: "Para que servem o “tributo” e a “tributação”?",
        content:
          "Em linhas gerais, para que o Estado possa arrecadar dinheiro, a fim de que possua renda e receita para fazer os vários investimentos a que está obrigado, como nas áreas de saúde, educação, pagamento da folha salarial de seus funcionários etc.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "184",
        title:
          "Existe alguma “base” para a cobrança de tributos, a fim de que não se onere demais uma pessoa e pouco outra?",
        content:
          "Entre uma série de bases e normas, existe um famoso princípio de Direito Financeiro e Tributário que se chama “princípio da capacidade contributiva”. Em uma análise bem geral, tal princípio indica que cada pessoa deve ser somente obrigada a contribuir de acordo com sua capacidade financeira (econômica) para tal (Art. 145, § 1º, da Constituição de 1988). Por isso, este princípio se aproxima do “princípio da igualdade”, pois, a fim de se respeitar esta igualdade, pessoas que tenham a mesma capacidade financeira devem contribuir de forma igual para o Estado, ou seja, serem tributadas de forma igual. Do mesmo modo, a ideia de “proporcionalidade” também surge quando se pensa que, de acordo com a capacidade financeira de cada um, os tributos podem variar para mais ou para menos.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "185",
        title: "Como pode um “tributo” ser criado?",
        content:
          "Um tributo somente pode ser criado por lei. É a aplicação do “princípio da legalidade” ao Direito Tributário (Art. 150, inciso I). E tal lei deve ser criada no “exercício financeiro” anterior ao da cobrança do tributo. Tal exigência decorre do chamado princípio da “anterioridade tributária”.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "186",
        title: "O que é o princípio da “anterioridade tributária”?",
        content:
          "É o princípio que estabelece que um tributo somente pode começar a ser aplicado, após sua criação por meio de lei, no exercício financeiro subsequente ao de sua criação (Art. 150, inciso III). Não deixa de ser uma forma de aplicação do “princípio da legalidade” ao Direito Tributário. Mas com um detalhe: o tributo instituído pela lei somente poderá começar a ser cobrado, de quem quer que seja, no “exercício financeiro” subsequente. Ou seja, via de regra, não pode começar a ser cobrado imediatamente. A ideia é a de que para que de alguém seja cobrado um novo tributo instituído por lei, é necessário que a pessoa se prepare para tal pagamento e saiba que a cobrança vai acontecer, com uma antecedência mínima.",
      },
      {
        idCategoriaPai: "2",
        idCategoriaPergunta: "54",
        idPergunta: "187",
        title: "O que é o chamado “exercício financeiro”?",
        content:
          "É um período determinado de tempo. Para o Direito Tributário, corresponde ao calendário anual e equivale, então, também, a um ano, começando em 01º de janeiro e terminando em 31 de dezembro.",
      },
    ],
  };
  const orcamentoConstituicao = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "94",
        idPergunta: "595",
        title:
          'O que é a chamada "regra de ouro", ligada ao "Orçamento" e prevista na Constituição de 1988?',
        content:
          'A "regra de ouro" nada mais é do que uma maneira de proibir o Governo de fazer dívidas para pagar despesas correntes, isto é, despesas como o pagamento de salários, aposentadorias, contas de luz etc. Esta "regra de ouro" está prevista na Constituição de 1988 no Art. 167, inciso III, que estabelece que "são vedadas", entre outros atos, "a realização de operações de créditos que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta". Complementam a "regra de ouro" prevista na Constituição, o § 3º, do Art. 2º, da Lei Complementar nº 101 de 04 de maio de 2000, que assim estatui: "a receita corrente líquida será apurada somando-se as receitas arrecadadas no mês em referência e nos onze anteriores, excluídas as duplicidades".',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "94",
        idPergunta: "596",
        title: 'E o que seria "receita corrente líquida"?',
        content:
          'A própria Lei Complementar nº 101, de 04 de maio de 2000, complementando a Constituição de 1988, tratou de definir o que seria "receita corrente líquida". Eis o teor do Art. 2º, inciso IV, da Lei Complementar nº 101/2000: "para os efeitos desta Lei Complementar, entende-se como: (...) IV - receita corrente líquida: somatório das receitas tributárias, de contribuições, patrimoniais, industriais, agropecuárias, de serviços, transferências correntes e outras receitas também correntes, deduzidos" os valores previstos nas alíneas "a", "b" e "c", do mesmo inciso IV.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "94",
        idPergunta: "597",
        title: `Se a "regra de ouro" for descumprida pelo Governo, quais as consequências?`,
        content: `A principal consequência é o fato de o Governo incidir em "crime de responsabilidade", de acordo com o previsto no Art. 85 da Constituição de 1988 e na Lei 1.079, de 10 de abril de 1950.`,
      },
      {
        idCategoriaPai: "2",
        idCategoria: "94",
        idPergunta: "598",
        title: ` Se a principal consequência ligada ao descumprimento da "regra de ouro" é o enquadramento em "crime de responsabilidade", o que ele significa?`,
        content: `De acordo com o também já explicado neste APP, principalmente no Capítulo intitulado "Poder Executivo", os "crimes de responsabilidade" são aqueles atentatórios à Constituição da República Federativa do Brasil (Art. 85). Além dos enumerados no Art. 85 da Constituição, os detalhados pela Lei 1.079, de 10 de abril de 1950, são crimes de responsabilidade. E a referida Lei, que especifica melhor os referidos crimes e regula o respectivo processo de julgamento daquele que incorreu em crime de responsabilidade, é extensa e possui 82 Artigos. Os incisos V e VI, do Art. 85, da Constituição de 1988, poderiam ser mais diretamente aplicados ao caso do descumprimento da "regra de ouro", porque ligados à "probidade na administração" e à "lei orçamentária". O mesmo se diga sobre os incisos V, VI e VII, do Art. 4º, da Lei 1.079/1950, a qual acrescenta a hipótese de "guarda e o legal emprego dos dinheiros públicos", no inciso VII, do Art. 4º.´`,
      },
    ],
  };

  const direitoCultura = {
    rows: [
      {
        idCategoriaPai: "2",
        idPergunta: "468",
        idCategoria: "82",
        title: "O que é o direito à cultura?",
        content:
          'O direito à cultura, previsto nos Artigos 215 e seguintes da Constituição de 1988, em resumidos dizeres, possui um claro caráter social e se relaciona com o que se chama de "patrimônio cultural". Nos termos do Art. 216 da Constituição, "constituem patrimônio cultural brasileiro os bens de natureza material e imaterial, tomados individualmente ou em conjunto, portadores de referência à identidade, à ação, à memória dos diferentes grupos formadores da sociedade brasileira".',
      },
      {
        idPergunta: "469",
        idCategoriaPai: "2",
        idCategoria: "82",
        title:
          "A Constituição prevê algum dever do Estado no sentido de proteção de direitos culturais de grupos sociais minoritários existentes no país, como, por exemplo e, entre outros, os direitos de grupos indígenas?",
        content:
          'Sim. E não somente a proteção de direitos culturais de grupos sociais minoritários, mas também majoritários ou não. O Art. 215, § 1º, da Constituição da República estabelece que "o Estado protegerá as manifestações das culturas populares, indígenas e afro-brasileiras, e das de outros grupos participantes do processo civilizatório nacional".',
      },
      {
        idPergunta: "470",
        idCategoriaPai: "2",
        idCategoria: "82",
        title:
          'O "patrimônio histórico" nacional pode ser enquadrado dentro da categoria de "direito à cultura"?',
        content:
          'Sim. Vale conferir, entre vários dispositivos da Constituição, o teor do Art. 216, § 1º, que determina que "o Poder Público, com a colaboração da comunidade, promoverá e protegerá o patrimônio cultural brasileiro, por meio de inventários, registros, vigilância, tombamento e desapropriação, e de outras formas de acautelamento e preservação". As figuras do tombamento, inventário e registro de bens, entre outras, têm grande serventia, sobretudo para a proteção da história de uma nação e, por consequência, de seu "patrimônio histórico".',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "82",
        idPergunta: "471",
        title: 'O que seriam "bens materiais" e "bens imateriais"?',
        content:
          "Os bens materiais são os que possuem uma dimensão física clara, como quadros, esculturas, conjuntos arquitetônicos etc. Já os bens imateriais são, comumente, bens considerados não palpáveis, mas de enorme valor cultural, como crenças, músicas etc.\r\nExemplos de bens já formalmente declarados imateriais: Feira de Caruaru; o Frevo; a Capoeira. E muitos outros.",
      },
    ],
  };

  const direitoDesporto = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "59",
        idPergunta: "204",
        title: "O que é o “desporto”?",
        content:
          "“Desporto” é o mesmo que esporte. Alguns dicionários explicam que “desporto” seria o nome dado ao “esporte” no português europeu (de Portugal). E o “esporte” o nome dado ao “desporto” no português brasileiro.",
        descCategoria: "Direito ao Desporto",
        ordemPergunta: "1",
      },
      {
        idCategoriaPai: "2",
        idPergunta: "205",
        idCategoria: "59",
        title:
          "Qual termo preferiu a Constituição utilizar: “esporte” ou “desporto”?",
        content:
          "De acordo, principalmente, com o Art. 217, que dá inicio à Seção III (intitulada “Do Desporto”), do Capítulo III, do Título VIII da Constituição de 1988, esta preferiu usar o termo “desporto”.",
        descCategoria: "Direito ao Desporto",
        ordemPergunta: "2",
      },
      {
        idCategoriaPai: "2",
        idPergunta: "206",
        idCategoria: "59",
        title:
          "A Constituição prevê algum direito ligado ao “esporte” ou “desporto”?",
        content:
          "Sim. Principalmente no seu Art. 217, a Constituição estabelece que é dever do Estado fomentar práticas desportivas formais e não-formais, como direito de cada um.",
        descCategoria: "Direito ao Desporto",
        ordemPergunta: "3",
      },
      {
        idCategoriaPai: "2",
        idPergunta: "207",
        idCategoria: "59",
        title:
          "O dever do Estado e direito de cada um ao “desporto”, de acordo com o Art. 217 da Constituição, deve obedecer a requisitos?",
        content:
          "Sim. São os previstos nos incisos do Art. 217. Assim, o Estado deve observar, por exemplo, a destinação de recursos públicos para a promoção prioritária do desporto educacional e, em casos específicos, para a do desporto de alto rendimento; o tratamento diferenciado para o desporto profissional e o não profissional; a proteção e o incentivo às manifestações desportivas de criação nacional etc.",
        descCategoria: "Direito ao Desporto",
        ordemPergunta: "4",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "59",
        idPergunta: "208",
        title:
          "Existe alguma relação entre o “desporto” ou “esporte” e o chamado “lazer”?",
        content:
          "Sim. Apesar de a Constituição separar o desporto profissional do não profissional, principalmente este último caso, ou seja, o não profissional, é bastante associado à noção mais ampla de “lazer”. O próprio § 3º, do Art. 217, estabelece que “o Poder Público incentivará o lazer, como forma de promoção social”.",
        descCategoria: "Direito ao Desporto",
        ordemPergunta: "5",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "59",
        idPergunta: "209",
        title: "A Constituição entende que o “lazer” é um direito?",
        content:
          "Sim. O “lazer” é direito, inclusive, fundamental e social. E se encontra expressamente previsto, por exemplo, no Art. 6º da Constituição, que é o principal Artigo que enumera os chamados “direitos sociais”.",
      },
    ],
  };

  const familia = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "60",
        idPergunta: "210",
        title: "A Constituição tem alguma previsão sobre a “família”?",
        content:
          'Sim. Principalmente no Art. 226, a Constituição estabelece que a "família" é a base da sociedade e possui especial proteção do Estado.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "60",
        idPergunta: "211",
        title: 'A Constituição explica ou define o que é "família"?',
        content:
          'A Constituição apenas traz alguns direitos ligados a alguns tipos de "família" e usa a expressão "entidade familiar" para tentar trazer algumas definições. Assim, a Constituição cita os direitos ao casamento civil, ao casamento religioso, à união estável etc. E diz que a união estável entre o homem e a mulher é entendida como "entidade familiar".',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "60",
        idPergunta: "212",
        title: "O que é “entidade familiar”?",
        content:
          'A Constituição diz que a união estável entre o homem e a mulher é uma "entidade familiar". Diz, também, que a "entidade familiar" pode ser a comunidade formada por qualquer dos pais e seus descendentes, de acordo com o Art. 226, §§ 3º e 4º.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "60",
        idPergunta: "213",
        title: "A Constituição faz menção ao “casamento”?",
        content:
          'Sim. Principalmente no Art. 226, em alguns momentos cita o “casamento”. E quando reconhece a união estável entre o homem e a mulher como "entidade familiar", logo em seguida determina que deve a lei facilitar a conversão da união estável em “casamento”. Ou seja, há uma valorização da figura do “casamento”.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "60",
        idPergunta: "214",
        title: "A Constituição faz alguma menção ao “divórcio”?",
        content:
          'Sim. No Art. 226, § 6º, diz que o "casamento" pode ser dissolvido pelo “divórcio”. Até a Emenda Constitucional nº 66, de 2010, este parágrafo da Constituição de 1988 somente previa a possibilidade do "divórcio" após a chamada “separação”, a qual somente poderia ser convertida em “divórcio” depois de 02 (dois) anos de sua efetivação. Mas, desde 2010, isto é, da Emenda à Constituição de nº 66, a Constituição passou a prever a possibilidade do chamado “divórcio direto”, sem a necessidade prévia da “separação” do casal.',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "60",
        idPergunta: "215",
        title:
          'A Constituição cita o "casamento entre homossexuais" e entre pessoas com "escolhas sexuais" variadas e distintas?',
        content:
          'Não. Mas ao prever, entre outras citações, que uma "entidade familiar", por exemplo, pode ser entendida como a comunidade formada por qualquer dos pais e seus descendentes, não faz menção a "orientações sexuais", nem às figuras do homem e da mulher, de forma clara. Também por exemplo, ao se referir ao chamado “planejamento familiar”, a Constituição estabelece que, “fundado nos princípios da dignidade da pessoa humana e da paternidade responsável, o planejamento familiar é livre decisão do casal, competindo ao Estado propiciar recursos educacionais e científicos para o exercício desse direito”. Perceba-se, fala-se em "casal", mas não em homem e/ou mulher. \r\nÉ certo que em outros parágrafos a Constituição cita as figuras de homem e mulher (no próprio Art. 226), mas as possibilidades de interpretação destes dispositivos acabam por ser muitas.\r\nPor fim, vale sempre lembrar que a Constituição foi elaborada em 1988, já tendo sido alterada várias vezes, nada impedindo futuras alterações que venham a ser mais diretas no que diz respeito a "uniões homoafetivas".',
      },
    ],
  };
  const censura = {
    rows: [
      {
        idCategoria: "84",
        idCategoriaPai: "2",
        idPergunta: "488",
        title: "A Constituição faz alguma citação à “censura”?",
        content:
          "Em um primeiro momento e, além de outras normas, o Art. 220, §§ 1º e 2º, declaram que não se deve admitir qualquer tipo de censura à atividade jornalística no Brasil e nem se admitir qualquer censura de cunho político, ideológico e artístico.",
        descCategoria: "Censura, Sigilo das Fontes e Direito de Defesa",
      },

      {
        idCategoria: "84",
        idPergunta: "489",
        title: "O que é o chamado “sigilo das fontes”?",
        content:
          "A fim de tornar mais fortes o direito de acesso a informações, as liberdades de expressão, manifestação do pensamento e de imprensa, o Art. 5°, inciso XIV, deixa clara a garantia do sigilo das fontes, quando necessário ao exercício profissional, como direito fundamental no Brasil.",
        descCategoria: "Censura, Sigilo das Fontes e Direito de Defesa",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "84",
        idPergunta: "490",
        title:
          "Por que se decidiu, na própria Constituição, proteger o “sigilo das fontes”?",
        content:
          'Uma das bases centrais para que a Constituição, quando elaborada e depois finalizada, previsse o "sigilo das fontes", foi o fato de deixar a imprensa e órgãos de veiculação de informações ausentes de qualquer tipo de restrição, ameaça ou constrangimento para a divulgação de informações. E tal intenção valendo também para a proteção do fornecedor de informações (a “fonte”), evitando-se um cenário de medo e receio na prestação, declaração e divulgação de qualquer informação. Sem esquecer, novamente, da previsão contida no Art. 5º, inciso XIV, da Constituição, segundo a qual "é assegurado a todos o acesso à informação".',
        descCategoria: "Censura, Sigilo das Fontes e Direito de Defesa",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "84",
        idPergunta: "491",
        title:
          "Uma pessoa que tenha sido vítima de alguma informação que não retrate a verdade possui alguma forma de defesa de seus direitos?",
        content:
          "Sim. A Constituição, por meio de alguns dispositivos, garante o direito de resposta e de defesa. Por exemplo, no Art. 5°, inciso V, com previsão, inclusive, das figuras da indenização por danos morais, materiais e à imagem, faz-se menção clara ao direito de resposta proporcional ao agravo. Além disso, o próprio Art. 5°, inciso X, ao proteger a intimidade e a vida privada das pessoas, garante a possibilidade de semelhantes indenizações por danos causados àquele que teve sua privacidade e honra violadas. Enfim e, entre outros dispositivos, o também clássico direito fundamental à ampla defesa e ao contraditório encontra-se expressamente previsto no Art. 5°, inciso LV, da Constituição de 1988.",
        descCategoria: "Censura, Sigilo das Fontes e Direito de Defesa",
      },
    ],
  };

  const racismo = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "88",
        idPergunta: "524",
        title: 'O que significa "racismo"?',
        content:
          "No Brasil, de modo geral, direto e de acordo com a Justiça brasileira, racismo é a ação de discriminar um grupo social por causa de sua raça, etnia, cor, religião ou origem.",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "88",
        idPergunta: "525",
        title:
          'A Constituição traz algum Artigo ou dispositivo que condene e repudie o "racismo"?',
        content:
          'É um crime previsto tanto na Constituição, quanto na Lei nº 7.716/1989. Entretanto, com o foco para a Constituição, está previsto no Art. 5º, inciso XLII, que "a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei".',
      },
      {
        idCategoriaPai: "2",
        idCategoria: "88",
        idPergunta: "526",
        title:
          'A Constituição também é contra outros tipos de "preconceito" e "discriminação"?',
        content:
          'Sim. Em seu Art. 3º, inciso IV, a Constituição estabelece ser "objetivo fundamental" da República Federativa do Brasil "promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação". Portanto, a Constituição de 1988 é bem clara ao condenar, repudiar e ser completamente contrária a práticas racistas, discriminatórias e preconceituosas.',
      },
    ],
  };

  const previdencia = {
    rows: [
      {
        idCategoriaPai: "2",
        idCategoria: "90",
        idPergunta: "546",
        title: "O que é a chamada “previdência” ou “previdência social”?",
        content:
          "A “previdência”, em um primeiro momento e para as finalidades deste APP, é a mesma coisa que “previdência social”. É um “direito social” previsto no caput do Art. 6º, da Constituição de 1988 e, também, nos seus Arts. 201 e 202. Além disso, é uma das espécies da chamada “seguridade social” (Art. 194), que tem também como outras espécies o “direito à saúde” (Art. 6º e Art. 196) e o “direito à assistência social” (Arts. 203 e 204).",
      },
      {
        idCategoriaPai: "2",
        idCategoria: "90",
        idPergunta: "547",
        title: "Qual a finalidade da “previdência” ou “previdência social”?",
        content:
          "A “previdência” ou “previdência social” tem por objetivo, de acordo com o Art. 201 da Constituição de 1988, com a sua redação já alterada pela nova “Reforma da Previdência” (Emenda Constitucional nº 103 de 2019):\r\n(1) a cobertura dos eventos de incapacidade temporária ou permanente para o trabalho e idade avançada (inciso I); (2) a proteção à maternidade, especialmente à gestante (inciso II); (3) a proteção ao trabalhador em situação de desemprego involuntário (inciso III); (4) a concessão do salário-família e do auxílio-reclusão para os dependentes dos segurados de baixa renda (inciso IV); e (5) a concessão de pensão por morte do segurado, homem ou mulher, ao cônjuge ou companheiro e dependentes, observado o disposto no § 2º (inciso V).",
      },
    ],
  };

  const liminar = {
    rows: [
      {
        idCategoriaPai: "3",
        idCategoria: "28",
        idPergunta: "74",
        title: "O que é uma “liminar”?",
        content:
          "Liminar significa “no início”, “no começo”. Vulgarizou-se o uso da palavra liminar, mas, na verdade, na maioria dos casos, quer-se dizer “ordem liminar”. E uma ordem liminar nada mais é do que uma ordem dada pelo Juiz responsável por uma Ação Judicial, no início do Processo. Normalmente, uma ordem liminar está também associada à rapidez no seu cumprimento, uma vez que, se foi dada a ordem no início do Processo, antecipando-se a uma série de fases processuais, é porque a situação tende a ser emergencial, requerendo uma veloz atuação do Poder Judiciário.",
      },
    ],
  };

  const mandatoMandado = {
    rows: [
      {
        idCategoriaPai: "3",
        idCategoria: "29",
        idPergunta: "75",
        title: "Qual diferença entre “mandato” e “mandado”?",
        content:
          "Mandato é um contrato, previsto no Código Civil brasileiro nos Artigos 653 e seguintes. E é o contrato pelo qual alguém passa poderes a outra pessoa. Seu mais famoso instrumento é a chamada Procuração. No âmbito do Direito Público, a palavra mandato é usada para se referir ao tempo durante o qual uma pessoa eleita para cargo público eletivo exercerá suas funções e ocupará o cargo. Na realidade, quando ocorre uma eleição típica, o cidadão, ao votar, nada mais faz do que transferir poderes para seu candidato, caso eleito, venha a representá-lo junto ao Poder Público. Já um mandado é uma ordem judicial. Decorre do verbo mandar e, portanto, um mandado judicial é uma ordem judicial a ser cumprida.",
      },
    ],
  };
  const reformas = {
    rows: [
      {
        idCategoriaPai: "3",
        idCategoria: "30",
        idPergunta: "76",
        title: "O que significa a palavra “reforma”?",
        content:
          "A Constituição não traz qualquer menção ou definição jurídica para a palavra reforma. Portanto, “reforma” ou “reformas” são palavras mais utilizadas politicamente, ou seja, no cenário político. No máximo, juridicamente, podem ser apenas associadas a mudanças ou intenções de mudanças de leis ou da própria Constituição.",
        descCategoria: "Reformas",
      },
    ],
  };

  const setencaAcordao = {
    rows: [
      {
        idCategoriaPai: "3",
        idCategoria: "42",
        idPergunta: "113",
        title: "O que significam uma “Sentença” e um “Acórdão”?",
        content:
          "A Sentença é o ato pelo qual um Juiz resolve o mérito de um Processo em 1º grau de jurisdição. Mais claramente, é o ato pelo qual o Juiz julga os pedidos feitos por quem propôs uma Ação Judicial perante o Poder Judiciário. Já o Acórdão é também o ato pelo qual se resolve o mérito de um Processo, mas em 2° ou demais graus de jurisdição. A palavra Acórdão se assemelha a acordo e, por isso, é sempre proferido por um grupo de Juízes, Desembargadores ou Ministros, os quais são obrigados a chegar a uma decisão (acordo, ainda que não unânime e, sim, somente majoritário), em graus de jurisdição ou instâncias superiores à primeira instância ou primeiro grau de jurisdição.",
      },
    ],
  };

  const usucapiao = {
    rows: [
      {
        idCategoriaPai: "3",
        idCategoria: "43",
        idPergunta: "114",
        title: "O que é “usucapião”?",
        content:
          'Mais usado como uma palavra feminina e, em muito breve resumo, a usucapião é uma forma de aquisição da propriedade por meio da posse pacífica sobre um bem, por um determinado período mínimo de tempo. Possui várias espécies e tipos. Um deles, previsto no Art. 183, da Constituição, refere-se à "Usucapião Especial Urbana" ou também chamada "Usucapião Especial Urbanística".',
      },
      {
        idCategoriaPai: "3",
        idPergunta: "115",
        idCategoria: "43",
        title:
          'O que são “usucampeão” ou “usocampeão” ou, ainda, "urso campeão"?',
        content:
          'Estas palavras e expressões não existem no âmbito jurídico, ou seja, das leis e da Constituição brasileira. E, no caso de "usucampeão" e "usocampeão", não existem, também, no vocabulário brasileiro. Já "urso campeão" pode até existir no vocabulário e na língua portuguesa, mas querendo dizer um animal chamado "urso", sendo "campeão" de algo. Em um primeiro momento, assim, uma "expressão sem sentido". Portanto, tais palavras e expressão não devem ser usadas, pois a palavra correta normalmente associada a elas é “usucapião”. Aí sim, um instituto jurídico. Uma palavra prevista em lei (por exemplo, no Código Civil) e na Constituição, que traz uma das espécies de usucapião em seu Art. 183.',
      },
    ],
  };

  const transitoJulgado = {
    rows: [
      {
        idCategoriaPai: "3",
        idCategoria: "87",
        idPergunta: "521",

        title: "O que é o trânsito em julgado?",
        content:
          'Sob uma análise inicial, o trânsito em julgado ocorre quando uma Decisão judicial, que resolve "o" ou "um determinado mérito" de uma causa judicial, não pode ser mais modificada pelo Poder Judiciário. Por "mérito", deve ser entendido o assunto principal ou um dos assuntos principais de uma causa, quando esta última possuir. Normalmente, é mais comum que uma causa judicial tenha "o seu" e único "mérito".',
      },
      {
        idPergunta: "522",
        idCategoriaPai: "3",
        idCategoria: "87",

        title:
          'O que pode fazer com que uma causa ou ação judicial chegue ao "trânsito em julgado", ou seja, "transite em julgado"?',
        content:
          'Em uma análise geral, mas tentando esta resposta ser explicativa, o trânsito em julgado ocorre quando uma Decisão judicial de mérito (que é a principal de um Processo Judicial) não pode ser mais atacada por nenhum recurso judicial. A Decisão, assim, por não poder ser mais modificada de maneira nenhuma, "transita em julgado".',
      },
      {
        idPergunta: "523",
        idCategoriaPai: "3",
        idCategoria: "87",
        idCategoriaPergunta: "87",
        title:
          'Podem existir exceções à chamada "imutabilidade do trânsito em julgado"?',
        content:
          'Em situações muito excepcionais e previstas nos Códigos processuais e lei brasileiras, pode ser cogitada a abertura, pela pessoa interessada, de uma Ação Judicial, normalmente chamada de "Ação Rescisória", com o objetivo de modificar uma Decisão judicial que já transitou em julgado. A meta é rescindir o "trânsito em julgado", por isso se fala em "Ação Rescisória". Mas é importante lembrar que a "Ação Rescisória só é cabível em situações absolutamente excepcionais e previstas na legislação brasileira. Por exemplo e, sob uma análise geral, quando se descobre que houve um grande e insuperável erro judicial, que faz com que, não somente se possa, mas também se deva modificar uma Sentença ou um Acórdão "transitado em julgado".',
      },
    ],
  };

  const capitulo4 = {
    rows: [
      {
        idPergunta: "189",
        idCategoriaPergunta: "57",
        title: "O que é o Capítulo 4?",
        content:
          'O Capítulo 4 é uma área técnica, ativa e de pesquisa deste APP. É dedicada a profissionais e estudantes da área jurídica, neste APP chamados de "leigos supostamente não aprofundados em temáticas específicas". Diferentemente dos Capítulos 1, 2 e 3, que são voltados aos chamados "leigos propriamente ditos", ou seja, àqueles que não estudaram nem estudam Direito, nem mesmo matérias jurídicas. Vale ressaltar que será, inicialmente, subdividido em CENÁRIOS, anunciados em forma numérica crescente. E tal nome foi escolhido de forma livre, a fim de separar um estudo do outro, uma pesquisa da outra.',
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "1",
      },
      {
        idPergunta: "196",
        idCategoriaPergunta: "57",
        title: "Qual ou quais os principais objetos e focos do Capítulo 4?",
        content:
          'Temáticas jurídicas clássicas, críticas e/ou contemporâneas, enfrentadas com grau de tecnicidade que pode variar, mas sempre direcionado ao universo jurídico. Devido ao eixo central deste APP, o Direito Constitucional e a Constituição de 1988, de alguma maneira, separados ou conjuntamente, devem estar presentes em cada CENÁRIO apresentado para exame e análise. Eventualmente, até mesmo podem ocorrer entrevistas com Juristas selecionados, mas sempre respeitando o objeto, o foco, a metodologia e o eixo central escolhidos para o Capítulo 4 do APP "Constituição para Leigos".',
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "2",
      },
      {
        idPergunta: "197",
        idCategoriaPergunta: "57",
        title: "O que é um CENÁRIO?",
        content:
          "Dentro deste Capítulo 4, um CENÁRIO será uma área com início meio e fim, dedicada ao estudo de determinada questão que, de alguma forma, relacione-se com os foco e objeto do Capítulo 4. E tal nome (CENÁRIO) foi escolhido de forma livre, a fim de separar um estudo do outro, uma pesquisa da outra.\r\nExemplo: Assim, haverá o CENÁRIO 1, seguido do Título temático; o CENÁRIO 2, seguido do Título temático; e assim por diante.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "3",
      },
      {
        idPergunta: "198",
        idCategoriaPergunta: "57",
        title:
          "Haverá metodologia e forma de apresentação específicas no Capítulo 4?",
        content:
          "Sim. Quanto à apresentação, seguir-se-á o modelo já adotado nos Capítulos 1, 2 e 3 e que segue sendo fielmente adotado nesta INTRODUÇÃO: o modelo de perguntas e respostas. Do ponto de vista metodológico, sem muito aqui se estender, o método, principalmente, dedutivo, calcado em fontes bibliográficas, jurisprudenciais, artigos técnicos e de revistas, jornais e colunas, de cunho mais ou menos técnico, entrevistas etc. será o mais comumente utilizado. Nada, entretanto, limitador para os objetivos ora pretendidos, podendo ocorrer em um CENÁRIO a utilização de método indutivo, ainda que em menor freqüência. Pesquisa de campo, de forma muito criteriosa, pode também embasar o estudo presente em um CENÁRIO. Nada também impedindo que um CENÁRIO possa voltar-se para um Dossiê sobre renomado jurista nacional ou internacional, assim como também a uma entrevista. Enfim, saliente-se, um grande e maior objetivo estará sempre presente: o da contribuição e difusão do conhecimento técnico, independentemente de quaisquer barreiras, razão pela qual não se quer criar qualquer obstáculo formal e/ou metodológico.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "4",
      },
      {
        idPergunta: "199",
        idCategoriaPergunta: "57",
        title:
          "No Capítulo 4, algum CENÁRIO poderá ser escrito em idioma que não o nacional?",
        content:
          "Preponderantemente, será utilizado o idioma nacional. Entretanto, nada impedirá a existência de um CENÁRIO escrito em mais de uma língua (bilíngue, por exemplo) ou, ainda, um CENÁRIO escrito e apresentado apenas em um outro idioma.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "5",
      },
      {
        idPergunta: "228",
        idCategoriaPergunta: "57",
        title: "Qual a PERIODICIDADE de lançamento de cada CENÁRIO?",
        content:
          "No primeiro ano de sua vigência, ou seja, 2018, a cada 03 SEMANAS, sempre no mesmo dia da semana, foi lançado um novo CENÁRIO, com o primeiro lançamento ocorrido no dia 31 de julho de 2018, uma TERÇA-FEIRA. No entanto, a partir de 2019, passou-se a adotar uma periodicidade mensal, considerando as necessidades e aprofundamentos inerentes ao constante trabalho de pesquisa. Enfim, ressalte-se que, paralelamente, nada impede o lançamento de CENÁRIOS denominados EXTRAS, ou seja, que não estejam ligados e, da mesma forma, não afetem a periodicidade mensal acima citada. Por fim, informa-se que o acima dito vale e se aplica ao período anual de MARÇO a JUNHO, e de AGOSTO a NOVEMBRO de CADA ANO. Nos meses de DEZEMBRO a FEVEREIRO, e de JULHO, a periodicidade poderá ser alterada, depender do desenvolvimento dos trabalhos, contextos de pesquisa e planejamentos investigativos.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "6",
      },
      {
        idPergunta: "190",
        idCategoriaPergunta: "57",
        title: "O que é o LETACI, citado na INTRODUÇÃO do APP?",
        content:
          "O LETACI é um Laboratório de Pesquisa jurídica vinculado à Faculdade Nacional de Direito (FND) e ao Programa de Pós-Graduação em Direito (PPGD) da Universidade Federal do Rio de Janeiro (UFRJ), criado após o auxílio recebido pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq), no âmbito do Edital Universal do ano de 2011, em projeto desenvolvido pelo Programa de Pós-Graduação em Direito da Universidade Federal do Rio de Janeiro. Possui site próprio, qual seja, www.letaci.com.br.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "7",
      },
      {
        idPergunta: "191",
        idCategoriaPergunta: "57",
        title: "Qual o significado da expressão LETACI?",
        content:
          'Originariamente, "Laboratório de Estudos Teóricos e Analíticos sobre o Comportamento das Instituições". Atualmente, "Laboratório de Estudos Institucionais".',
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "8",
      },
      {
        idPergunta: "192",
        idCategoriaPergunta: "57",
        title: "Qual a área de abrangência material de estudos do LETACI?",
        content:
          "Uma área muito ampla. Tem no Direito Constitucional um cerne, caminhando por teorias institucionais, mas alcançando, também e, praticamente, todos os demais ramos do Direito e outras áreas do saber, como sociologia, filosofia etc.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "9",
      },
      {
        idPergunta: "193",
        idCategoriaPergunta: "57",
        title: "Qual a importância do LETACI para este APP?",
        content:
          "No Capítulo 4, este APP tem claros objetivos de divulgação e coletivização de pesquisas jurídicas, a maioria das quais ligadas a estudos desenvolvidos por Grupo seleto de Pesquisadores, sob a Coordenação do criador deste APP, um dos Coordenadores do LETACI. Mater-se-ão, conforme exposto nesta INTRODUÇÃO, o sistema e a forma de perguntas e respostas, entretanto, ligadas a questões bem mais específicas do Direito.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "10",
      },
      {
        idPergunta: "194",
        idCategoriaPergunta: "57",
        title:
          "O LETACI está vinculado a algum Curso de Direito de excelência brasileiro?",
        content:
          "Sim. O LETACI está vinculado à Faculdade de Direito da Universidade Federal do Rio de Janeiro (FND/UFRJ), assim como ao Programa de Pós-graduação em Direito da mesma Universidade Federal do Rio de Janeiro (PPGD/UFRJ).",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "11",
      },
      {
        idPergunta: "195",
        idCategoriaPergunta: "57",
        title:
          "Qual a área de abrangência territorial de estudos do LETACI e, paralelamente, sua relação com este APP?",
        content:
          "Logicamente, por estar vinculado à Universidade Federal do Rio de Janeiro (UFRJ), o Brasil é a primeira área de abrangência. Entretanto, dados os aprofundamentos e as pesquisas em teorias estrangeiras, múltiplos outros países, com suas respectivas áreas de saber jurídico, são alcançados pelas pesquisas do LETACI. E, para além disso, pesquisadores correspondentes internacionais, assim como convênios com Faculdades e Universidades do exterior, fazem com que a internacionalização do LETACI, por meio da própria UFRJ, seja uma realidade já desde sua formação, mas em constante e permanente evolução. E, se este APP já representou e representa um inovador caminho para a disseminação do conhecimento jurídico no Brasil, com foco na população em geral e em grupos específicos (como estudantes do ensino médio, por exemplo), neste Capítulo 4 também representa inédita forma de, também, difusão local, regional e nacional (e/ou, igualmente, internacional) de conhecimentos, pesquisas e relações jurídicas institucionais.",
        idCategoria: "57",
        idCategoriaPai: "55",
        descCategoria: "Introdução",
        ordemCategoriaPai: "400",
        ordemCategoria: "401",
        ordemPergunta: "12",
      },
    ],
  };

  const cenario1 = {
    rows: [
      {
        idPergunta: "229",
        idCategoriaPergunta: "65",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de análise sobre uma problemática que gira em torno da concessão, por Ministro do Supremo Tribunal Federal (STF), monocraticamente e por ser Relator de um Processo decorrente de uma Ação Direta de Inconstitucionalidade (ADIN) ou de uma Arguição de Descumprimento de Preceito Fundamental (ADPF), de decisão que suspende os efeitos de uma lei. As Leis 9.882/99 e 9.868/99 vêm sendo interpretadas pelo STF como permissivas de Decisão Monocrática em Medida Cautelar para a suspensão temporária de lei que se pretende declarar inconstitucional (Lei 9.868/99) e para determinação de que juízes e tribunais suspendam o andamento de processo ou os efeitos de decisões judiciais, ou de qualquer outra medida que apresente relação com a matéria objeto da arguição de descumprimento de preceito fundamental (Lei 9.882/99). E, com uma aprovação eventual do Projeto de Lei 7.104-B de 2017, a suspensão de lei, tanto em ADIN, quanto em ADPF, somente poderia ocorrer por Decisão plenária do STF.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "1",
      },
      {
        idPergunta: "230",
        idCategoriaPergunta: "65",
        title:
          "O que são a Ação Direta de Inconstitucionalidade (ADIN) e a Arguição de Descumprimento de Preceito Fundamental (ADPF)?",
        content:
          "Resumidamente, são instrumentos do chamado controle concentrado, abstrato ou, entre outras denominações, controle direto de constitucionalidade, o qual consiste em exame da norma jurídica em tese. No Brasil, adota-se um sistema misto de controle de constitucionalidade, composto do controle chamado difuso, concreto ou, entre outros nomes, indireto de constitucionalidade e do acima já citado controle concentrado. Tanto a ADIN, quanto a ADPF, são instrumentos deste chamado controle concentrado, sem relação imediata alguma com o também mencionado controle difuso, o qual, sob um primeiro foco, pode ocorrer em qualquer órgão ou instância do Poder Judiciário.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "2",
      },
      {
        idPergunta: "231",
        idCategoriaPergunta: "65",
        title: "E para que servem a ADIN e a ADPF?",
        content:
          "A primeira, isto é, a ADIN, tem por objetivo a eliminação do ordenamento jurídico brasileiro de norma que esteja entrando em choque com a Constituição (CRFB). Objetiva-se, então, a declaração, pelo STF, da inconstitucionalidade da norma. Entretanto, vale lembrar que eventual improcedência do pedido nesta Ação gera efeito contrário e a chamada declaração de constitucionalidade da norma (Art. 24 da Lei 9.868/99). Já a ADPF tem por objetivo mais direto, evitar ou reparar lesão, causada por ato do Poder Público, a algum preceito fundamental, inclusive presente em normas municipais e estaduais, para além das federais.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "3",
      },
      {
        idPergunta: "232",
        idCategoriaPergunta: "65",
        title:
          "Existem normas jurídicas regulatórias do controle concentrado de constitucionalidade no Brasil?",
        content:
          "Sim. Tanto a CRFB, nos Artigos 101 e seguintes, quanto leis infraconstitucionais, trazem normas jurídicas sobre o chamado controle concentrado. Mais precisamente e, com maior relação ao que neste CENÁRIO se apresenta, as Leis 9.868/99 e 9.882/99, tratam das ADIN’s e das ADPF’s, respectivamente.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "4",
      },
      {
        idPergunta: "233",
        idCategoriaPergunta: "65",
        title:
          "Qual a regra hoje vigente sobre a possibilidade, em medidas cautelares, de decisões monocráticas em ADIN’s e em ADPF’s?",
        content:
          "A regra, de acordo com o Art. 10 da Lei 9.868/99 e com o Art. 5º e seus parágrafos, da Lei 9.882/99, é da possibilidade, respectivamente, de concessão de medida cautelar, mas com submissão à decisão de um plenário formado por, pelo menos, 08 (oito) Ministros (Art. 22, da Lei 9.868/99) e de concessão da ordem liminar ad referendum do Tribunal Pleno.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "5",
      },
      {
        idPergunta: "234",
        idCategoriaPergunta: "65",
        title:
          "Por que, então, o STF aceita decisões monocráticas em medidas cautelares em ADIN’s e em ADPF’s, com geração, principalmente, de efeitos por tempo indeterminado?",
        content:
          "Por decisão do próprio STF, entendendo, sob uma inicial análise, que os Artigos das Leis 9.868/99 e 9.882/99, não proíbem, expressamente, a concessão de decisões monocráticas em medidas cautelares em ADIN’s e em ADPF’s. E, no caso da última Lei, o Art. 5º claramente permite a concessão de ordem liminar por Decisão Monocrática, ou seja, apenas do Relator. Além do mais, o Art. 12 da Lei 9.868/99, usa a palavra “faculdade”, possibilitando uma interpretação, sistemático-teleológica, no sentido da possibilidade de concessão de medidas cautelares em ADIN’s e em ADPF’s.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "6",
      },
      {
        idPergunta: "235",
        idCategoriaPergunta: "65",
        title:
          "Qual o problema ligado à concessão, por decisões monocráticas, de medidas cautelares e, então, de ordens liminares em ADIN’s e em ADPF’s?",
        content:
          "O problema é amplo e pode envolver uma série de questões ligadas à chamada “monocratização” de Decisões tomadas pela mais alta Corte do país. Mas, para o que aqui se analisa neste APP, com foco específico no Projeto de Lei nº 7.104-B de 2017, a problemática central é que, por meio destas decisões monocráticas em medidas cautelares em ADIN’s e em ADPF’s, pode-se, entre outros atos, suspender temporariamente a eficácia de uma lei. Entretanto, o que vem ocorrendo é uma suspensão por prazo indeterminado, postergando-se uma decisão plenária, enquanto os efeitos centrais pretendidos já estão sendo produzidos e, ressalte-se, por meio de decisão proferida por um só Ministro. Resumidamente, vem ocorrendo a suspensão de leis por tempo indeterminado, por decisão de apenas um Ministro.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "7",
      },
      {
        idPergunta: "236",
        idCategoriaPergunta: "65",
        title:
          "Existe alguma previsão constitucional expressa e específica sobre a maneira pela qual deve um Tribunal brasileiro deliberar sobre matérias que envolvam a declaração de inconstitucionalidade de uma lei?",
        content:
          "Sim. Entre várias previsões no texto constitucional sobre o controle de constitucionalidade, chama-se atenção para uma, em especial: a contida no Art. 97, da CRFB, mais precisamente conhecida como “cláusula de reserva de plenário” (In verbis: “Somente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público”). Aqui se profere entendimento segundo o qual este Artigo não se aplica somente ao controle difuso ou ao controle concentrado. Aplica-se a ambos.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "8",
      },
      {
        idPergunta: "237",
        idCategoriaPergunta: "65",
        title: "Quais as Conclusões?",
        content:
          "Portanto, embora o Projeto de Lei nº 7.104-B de 2017 traga à tona o problema ligado à concessão de ordens liminares, monocraticamente, por Ministros do Supremo Tribunal Federal (STF), o seu foco central é a concessão de ordens liminares em ADIN’s e em ADPF’s, instrumentos do controle concentrado de constitucionalidade. E com o objetivo de fazer, em caso da transformação do referido Projeto em Lei, que não mais se consiga, liminarmente, por meio de um só Ministro do STF, suspender os efeitos de uma lei, por exemplo, por tempo indeterminado. É certo que a referida aprovação do Projeto de Lei não resolverá, definitivamente, a problemática ligada à concessão de grande número de ordens liminares, por um só Ministro, nem mesmo o tempo de validade das respectivas decisões liminares. Pois ordens liminares monocráticas, no âmbito do STF, não ocorrem apenas em ADIN’s e ADPF’s, nem, muito menos, somente na esfera do chamado controle concentrado de constitucionalidade brasileiro.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "9",
      },
      {
        idPergunta: "238",
        idCategoriaPergunta: "65",
        title: "Quais os textos dos dispositivos legais citados neste CENÁRIO?",
        content:
          '1. Lei 9.868/99: “Art. 24. Proclamada a constitucionalidade, julgar-se-á improcedente a ação direta ou procedente eventual ação declaratória; e, proclamada a inconstitucionalidade, julgar-se-á procedente a ação direta ou improcedente eventual ação declaratória”; “Art. 10. Salvo no período de recesso, a medida cautelar na ação direta será concedida por decisão da maioria absoluta dos membros do Tribunal, observado o disposto no art. 22, após a audiência dos órgãos ou autoridades dos quais emanou a lei ou ato normativo impugnado, que deverão pronunciar-se no prazo de cinco dias”; “Art. 22. A decisão sobre a constitucionalidade ou a inconstitucionalidade da lei ou do ato normativo somente será tomada se presentes na sessão pelo menos oito Ministros”. “Art. 12. Havendo pedido de medida cautelar, o relator, em face da relevância da matéria e de seu especial significado para a ordem social e a segurança jurídica, poderá, após a prestação das informações, no prazo de dez dias, e a manifestação do Advogado-Geral da União e do Procurador-Geral da República, sucessivamente, no prazo de cinco dias, submeter o processo diretamente ao Tribunal, que terá a faculdade de julgar definitivamente a ação”.\r\n2. Lei 9.882/99 (Art. 5º, caput e § 1º; demais §§ disponíveis na Lei, conforme "Referências" e ora não transcritos): “Art. 5º O Supremo Tribunal Federal, por decisão da maioria absoluta de seus membros, poderá deferir pedido de medida liminar na arguição de descumprimento de preceito fundamental”; “§ 1º Em caso de extrema urgência ou perigo de lesão grave, ou ainda, em período de recesso, poderá o relator conceder a liminar, ad referendum do Tribunal Pleno”.',
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "10",
      },
      {
        idPergunta: "239",
        idCategoriaPergunta: "65",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética:\r\n1) BONIZZATO, Luigi;\r\n2) COSATI, Maria Clara Conde Moraes;\r\n3) LEITE, Manuella Suita Dutra;\r\n4) MOULIN, Isabelle Esteves;\r\n5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "11",
      },
      {
        idPergunta: "240",
        idCategoriaPergunta: "65",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética:1) BACHOF, Otto. Normas Constitucionais Inconstitucionais?. Tradução de José Manuel M. Cardoso da Costa. Coimbra: Livraria Almedina, 1994.\r\n2) BARROSO, Luis Roberto. O controle de constitucionalidade no Direito brasileiro. São Paulo: Editora Saraiva, 2004.\r\n3) CLÈVE, Clèmerson Merlin. A fiscalização abstrata da constitucionalidade no Direito brasileiro. 2. ed. São Paulo: Editora Revista dos Tribunais, 2000.\r\n4) MENDES, Gilmar Ferreira. Jurisdição Constitucional. 06. ed. São Paulo: Editora Saraiva, 2014.\r\n5) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.\r\n6) VIEIRA, Oscar Vilhena. Supremo Tribunal Federal. 2. ed. São Paulo: Editora Malheiros, 2002.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "12",
      },
      {
        idPergunta: "241",
        idCategoriaPergunta: "65",
        title:
          "Quais as Referências das legislações e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível no link: www.planalto.gov.br</a>. Acesso em: 25 jul. 2018. 2) BRASIL. Lei nº 9.868, de 10 de novembro de 1999. Dispõe sobre o processo e julgamento da ação direta de inconstitucionalidade e da ação declaratória de constitucionalidade perante o Supremo Tribunal Federal. Disponível no link: www.camara.leg.br</a>. Acesso em: 25 jul. 2018. 3) BRASIL. Lei nº 9.882, de 03 de dezembro de 1999. Dispõe sobre o processo e julgamento da arguição de descumprimento de preceito fundamental, nos termos do §1º do art. 102 da Constituição Federal. Disponível no link: www.planalto.gov.br</a>. Acesso em: 25 jul. 2018. 4) BRASIL. Projeto de Lei n° 7.104 B, de 2017. Altera os artigos 10 da Lei 9.868/99, o artigo 5º caput e suprime o § 1º do artigo 5º da Lei 9.882/99 deste mesmo artigo. Disponível no link: www.camara.gov.br</a>. Acesso em: 30 jul. 2018.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "13",
      },
      {
        idPergunta: "242",
        idCategoriaPergunta: "65",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "14",
      },
      {
        idPergunta: "243",
        idCategoriaPergunta: "65",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre relações institucionais: BOLONHA, Carlos, BONIZZATO, Luigi, MAIA, Fabiana (Coord.). Teoria Institucional e Constitucionalismo Contemporâneo. Curitiba: Editora Juruá, 2016.\r\n\r\n2) Sobre o Supremo Tribunal Federal:\r\n\r\nOLIVEIRA, Fabiana Luci de. STF: do autoritarismo à democracia. Rio de Janeiro: Editora Campus Elsevier, 2011.\r\n\r\n3) Sobre controle de constitucionalidade:\r\n\r\nSTRECK, Lenio Luiz. Jurisdição Constitucional. 05. ed. São Paulo: Forense, 2018.",
        idCategoria: "65",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF, Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017",
        ordemCategoriaPai: "400",
        ordemCategoria: "402",
        ordemPergunta: "15",
      },
    ],
  };
  const cenario2 = {
    rows: [
      {
        idPergunta: "248",
        idCategoriaPergunta: "67",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de uma análise sobre fenômeno crescente no Brasil: o da aprovação de leis infraconstitucionais que, de alguma forma, interferem, em menor ou maior grau, em normas constitucionais, diante da maior facilidade ou, simplesmente, possibilidade, de se aprovar as referidas leis ao invés de Emendas à Constituição.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "1",
      },
      {
        idPergunta: "249",
        idCategoriaPergunta: "67",
        title: "O que seria a infraconstitucionalização?",
        content:
          "Seria a aqui denominada tendência a, ao invés de se proceder a uma modificação do texto constitucional, criar-se uma ou mais leis infraconstitucionais, que findam por, em alguns casos, até confrontar a própria Constituição (CRFB). Outro nome que poderia ser aqui utilizado é o de desconstitucionalização de determinadas matérias.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "2",
      },
      {
        idPergunta: "250",
        idCategoriaPergunta: "67",
        title: "Existiria alguma problemática ligada a esta tendência?",
        content:
          "Uma problemática gira em torno de eventual lei infraconstitucional, sobre determinado assunto que já é tratado na CRFB, possuir normas que entrem em choque com o conteúdo da CRFB. Pois, neste caso, pelo menos, 02 (duas) situações centrais merecem destaque. A (a) primeira, relativa a normas constitucionais, passíveis de serem alteradas por meio de Emenda, não serem modificadas por este instrumento, em razão de não se conseguir o quórum qualificado para a sua aprovação (três quintos dos membros do Congresso Nacional, em votação em dois turnos, em cada Casa Legislativa, ou seja, Câmara dos Deputados e Senado Federal, nos termos do Art. 60, da CRFB). E a (b) segunda, relativa a normas constitucionais não passíveis de serem alteradas, tais como as portadoras de direitos fundamentais, pelo fato de serem reputadas cláusulas pétreas, findarem por serem contrariadas por leis infraconstitucionais. Repare-se que as referidas leis infraconstitucionais são, na maioria absoluta dos casos, leis ordinárias e, por consequência, aprovadas pelo quórum denominado “maioria simples ou relativa”, de acordo com o Art. 47 da CRFB. Em outras palavras, quórum muito mais fácil se comparado ao mais difícil trâmite legislativo previsto na CRFB.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "3",
      },
      {
        idPergunta: "251",
        idCategoriaPergunta: "67",
        title:
          "Existiria alguma utilidade nesta tendência, no que se refere à primeira situação exposta na resposta à pergunta antecedente (alínea “a”)?",
        content:
          "No que tange à primeira situação acima narrada, ou seja, na resposta à pergunta anterior (alínea “a”), uma possível utilidade é, mediante discussões, debates e disputas legislativas muito intensas e acirradas, que tornam complicada a aprovação de Emendas a determinadas normas constitucionais, proceder-se, a partir de pressões de grupos sociais específicos, à aprovação de leis infraconstitucionais, mesmo que com parte de seu conteúdo, em um primeiro momento, considerado direta ou indiretamente inconstitucional, tendo em vista que não se alterou a CRFB, quando o correto seria a modificação de seu texto.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "4",
      },
      {
        idPergunta: "252",
        idCategoriaPergunta: "67",
        title:
          "Existiria alguma utilidade nesta tendência, no que se refere à segunda situação exposta na resposta à penúltima pergunta antecedente (alínea “b”)?",
        content:
          "No que tange à segunda situação acima narrada, ou seja, na resposta à penúltima pergunta acima (alínea “b”), uma possível utilidade é, por meio de uma lei infraconstitucional, grupos sociais de pressão e interesse, junto ao Congresso Nacional, conseguirem “driblar” uma proibição de alteração de norma constitucional, criando uma lei infraconstitucional, a priori, inconstitucional.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "5",
      },
      {
        idPergunta: "253",
        idCategoriaPergunta: "67",
        title:
          "Entretanto, como podem, em quaisquer situações, leis infraconstitucionais serem aprovadas e continuarem em vigor, se são portadoras de dispositivos inconstitucionais?",
        content:
          "No Brasil, toda e qualquer espécie normativa criada, prevista no Art. 59 da CRFB, goza da chamada presunção de constitucionalidade. Uma presunção de constitucionalidade relativa e, não, absoluta. Pois, se fosse absoluta, sequer se poderia cogitar da existência do instituto do controle de constitucionalidade no país. Assim, quando uma lei ordinária, por exemplo, é aprovada pelo Congresso Nacional, sancionada pelo Presidente da República (Art. 66) e entra em vigor, torna-se imediatamente aplicável. Nesse sentido, até que alguém provoque, pela via direta ou indireta, isto é, pelo controle concentrado ou difuso o Poder Judiciário, pleiteando a declaração de inconstitucionalidade da lei ou de parte dela, permanecerá e continuará a produzir efeitos, repita-se, ainda que se a entenda inconstitucional. E, ainda, com a possibilidade de, por meio de interpretações judiciais variadas, demorar-se ou, até mesmo, eternizar-se a existência de uma lei ou parte desta, inconstitucional. Afinal de contas, também o Poder Judiciário é alvo de pressões variadas, dentro do complexo mecanismo institucional brasileiro.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "6",
      },
      {
        idPergunta: "254",
        idCategoriaPergunta: "67",
        title:
          "Existem exemplos concretos do aqui chamado fenômeno da “infraconstitucionalização”?",
        content:
          "Sim. Entre outras, a chamada reforma trabalhista, consolidada por meio da Lei nº 13.467, de 13 de julho de 2017; a reforma política, consolidada por meio da Lei nº 13.165, de 29 de setembro de 2015.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "7",
      },
      {
        idPergunta: "255",
        idCategoriaPergunta: "67",
        title: "Quais as Conclusões?",
        content:
          "Portanto, o fenômeno aqui chamado de infraconstitucionalização, pode ser eficaz e arguta ferramenta utilizada por grupos de pressão específicos, para a aprovação de normas de seu interesse, as quais serão consideradas aplicáveis até que, por meio de controle de constitucionalidade, sejam consideradas inconstitucionais e, por conseguinte, eliminadas do ordenamento jurídico brasileiro. E isso, conforme exposto em respostas acima, caso se consiga, efetivamente, a declaração de inconstitucionalidade, a qual pode ser adiada ou sequer vir a ocorrer, dependendo do entendimento judicial construído, calcado em interpretações jurídicas, inúmeras vezes politizadas pelas relações entre as múltiplas macro e micro instituições brasileiras.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "8",
      },
      {
        idPergunta: "256",
        idCategoriaPergunta: "67",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi. 2) COSATI, Maria Clara Conde Moraes. 3) LEITE, Manuella Suita Dutra. 4) MOULIN, Isabelle Esteves. 5) RODRIGUES, Tayssa Cristine.\r\n",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "9",
      },
      {
        idPergunta: "257",
        idCategoriaPergunta: "67",
        title: "Quais as referências bibliográficas?",
        content:
          "1) BONIZZATO, Luigi, REIS, José Carlos Vasconcellos dos. Direito Constitucional: questões clássicas, contemporâneas e críticas: atualizada e ampliada nos 30 anos da Constituição de 1988. 02. ed. Rio de Janeiro: Editora Lumen Juris, 2018. 2) CANOTILHO, J.J. Gomes. Direito Constitucional e Teoria da Constituição. 07. Ed. Coimbra: Almedina, 2003. 3) HESSE, Konrad. A força normativa da Constituição. Porto Alegre: Sergio Antonio Fabris Editor, 1991. 4) LOPES, Ana Maria D’Ávila. Os direitos fundamentais como limites ao poder de legislar. Porto Alegre: Sérgio Antônio Fabris Editor, 2001. 5) MOREIRA NETO, Diogo de Figueiredo. Legitimidade e discricionariedade. 4. ed. Rio de Janeiro: Editora Forense, 2001. 6) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "10",
      },
      {
        idPergunta: "260",
        idCategoriaPergunta: "67",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: www.planalto.gov.br</a>. Acesso em: 25 jul. 2018. 2) BRASIL. Lei 13.467, de 13 de julho de 2017. Altera a Consolidação das Leis do Trabalho (CLT), aprovada pelo Decreto-Lei no 5.452, de 1o de maio de 1943, e as Leis nos 6.019, de 3 de janeiro de 1974, 8.036, de 11 de maio de 1990, e 8.212, de 24 de julho de 1991, a fim de adequar a legislação às novas relações de trabalho. Disponível em: www.planalto.gov.br</a>. Acesso em: 19 ago. 2018. 3) BRASIL. Lei 13.165, de 29 de setembro de 2015. Altera as Leis nos 9.504, de 30 de setembro de 1997, 9.096, de 19 de setembro de 1995, e 4.737, de 15 de julho de 1965 - Código Eleitoral, para reduzir os custos das campanhas eleitorais, simplificar a administração dos Partidos Políticos e incentivar a participação feminina. Disponível em: www.planalto.gov.br</a>. Acesso em: 19 ago. 2018.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "11",
      },
      {
        idPergunta: "258",
        idCategoriaPergunta: "67",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "12",
      },
      {
        idPergunta: "259",
        idCategoriaPergunta: "67",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1)\tSobre relações institucionais:\r\n\r\nSUNSTEIN, Cass R., VERMEULE, Adrian. Interpretation and Institutions (July 2002). U Chicago Law & Economics, Olin Working Paper No. 156; U Chicago Public Law Research Paper No. 28. Disponível em SSRN: http://ssrn.com/abstract=320245 or http://dx.doi.org/10.2139/ssrn.320245.\r\n\r\n2)\tSobre interpretação constitucional:\r\n\r\nSCHIER, Paulo Ricardo. Filtragem Constitucional. Porto Alegre: Sergio Antonio Fabris Editor, 1999.\r\n\r\n3)\tSobre controle de constitucionalidade:\r\n\r\nCLÈVE, Clèmerson Merlin. A fiscalização abstrata da constitucionalidade no Direito brasileiro. 2. ed. São Paulo: Editora Revista dos Tribunais, 2000.\r\n",
        idCategoria: "67",
        idCategoriaPai: "55",
        descCategoria: "CENÁRIO 2 - Infraconstitucionalização?",
        ordemCategoriaPai: "400",
        ordemCategoria: "403",
        ordemPergunta: "13",
      },
    ],
  };
  const cenario3 = {
    rows: [
      {
        idPergunta: "275",
        idCategoriaPergunta: "69",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de análise sobre contexto específico ocorrido no Estado de Roraima (ER), Região Norte do Brasil, a partir do grande fluxo migratório envolvendo o povo venezuelano. Diante de situação entendida como de gravidade, sobretudo social e com reflexos em vários setores, tais como, entre outros, políticos, econômicos etc., o ER emitiu Decreto, pelo qual proibiu o acesso a serviços públicos essenciais no território do referido Estado integrante da Federação nacional, assim como a permanência no país, a partir de entrada pelas fronteiras com a Venezuela, de venezuelanos em situação considerada irregular, de acordo com a legislação brasileira e internacional. Cabe ressaltar, no tocante à apenas citada irregularidade, que é a entendida quando comparada a situações de normalidade, que seriam as consideradas como decorrentes de fluxos migratórios não oriundos de busca por refúgio ou de outras causas extremas (guerra civil, grave instabilidade institucional, estado de guerra etc.), ou seja, aquelas mais comuns no cotidiano de entrada e saída diária de pessoas de um país. Mas, retomando o específico caso do ingresso de venezuelanos no Brasil, na primeira metade do ano de 2018, em resumo, pelo Decreto nº 25.681-E, somente venezuelanos portadores de passaporte válido, entre outros requisitos, passariam a poder entrar e permanecer no país pelas fronteiras do ER e, igualmente, ter acesso a serviços públicos essenciais, conforme já se fez menção. Além do citado Decreto, Decisões judiciais e reações institucionais, incluindo populacionais, levaram, senão a situações de exceção ou a um quiçá “estado de coisas inconstitucional”, a uma sucessão de atos e fatos atentatórios à Constituição brasileira (CRFB), principal base sobre a qual se fundará o presente exame.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "1",
      },
      {
        idPergunta: "276",
        idCategoriaPergunta: "69",
        title:
          "Qual, em resumo, o quadro geral que conduziu à emissão do Decreto nº 25.681-E e a Decisões judiciais sobre o assunto?",
        content:
          "Em breve resumo, uma vez que o foco central deste CENÁRIO está ligado aos desdobramentos internos, ou seja, no Brasil, da entrada maciça de venezuelanos pelas fronteiras entre Brasil e Venezuela, mais precisamente no ER, o quadro geral citado envolve a crise, pelo menos política, econômica e social da República Bolivariana da Venezuela (RBV), decorrente de situação governamental que levou a reflexos em diversas áreas, setores e instituições daquele país.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "2",
      },
      {
        idPergunta: "277",
        idCategoriaPergunta: "69",
        title:
          "O que estabelece a Constituição brasileira (CRFB) sobre a relação com povos estrangeiros, em situações como a dos venezuelanos em meados de 2018?",
        content:
          "Genericamente, alguns dispositivos trazem normas, algumas das quais princípios, que devem ser observados pela República Federativa do Brasil. O Art. 4º, logo no Título Primeiro da CRFB, traz o que ela própria denomina princípios, no que tange às relações internacionais do Estado brasileiro, com realce para a prevalência dos direitos humanos (inciso II), a cooperação entre os povos para o progresso da humanidade (inciso IX) e para a concessão de asilo politico (inciso X). Embora o caso dos venezuelanos ora em debate não se enquadre na figura do asilo politico em sentido formal, os valores de base do referido asilo podem ser também, sob certa medida, aplicados à situação concreta, aí sim, em sentido macro. E, quando no parágrafo único, do mesmo Art. 4º, estabelece-se que “a República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações”, está-se reforçando a ideia de cooperação entre os povos latino-americanos. Além disso, em complementação à CRFB, a Lei da Migração (Lei 13.445, de 24 de maio de 2017), entre outros dispositivos, logo em seu Art. 3º estabelece como princípios e diretrizes a não criminalização da imigração (inciso III), o repúdio à xenofobia e a todas as formas de discriminação (inciso II), a acolhida humanitária (inciso VI), além de uma série de outras diretrizes e princípios calcados na manutenção e garantia de direitos humanos e fundamentais, em um total de 22 incisos. Acresça-se, outrossim, a previsão de não discriminação e respeito, entre outros, ao princípio da igualdade, contida no Art. 45, parágrafo único, da mesma Lei, segundo a qual “ninguém será impedido de ingressar no País por motivo de raça, religião, nacionalidade, pertinência a grupo social ou opinião política”.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "3",
      },
      {
        idPergunta: "278",
        idCategoriaPergunta: "69",
        title:
          "O que, mais precisamente, estabeleceu o Decreto nº 25.681-E, de 01º de agosto de 2018, do Estado de Roraima (ER)?",
        content:
          "De forma especificamente voltada ao exame deste CENÁRIO, entre outras previsões, no parágrafo único, do Art. 3º, o Decreto 25.681-E estabeleceu que “para acesso aos serviços públicos oferecidos pelo Governo do ER a estrangeiros, com exceção de urgências e emergências, é necessária a apresentação de passaporte válido, a não ser os indivíduos oriundos de Argentina, Paraguai e Uruguai, que gozam dos direitos e prerrogativas do Mercosul, e que podem apresentar documento de identidade válido”. E, além da limitação de acesso a serviços públicos essenciais, intimamente ligados a direitos sociais e fundamentais previstos na Carta Magna brasileira, determinou o mesmo Decreto, em seu Art. 4º, que o Departamento Estadual de Trânsito e a Polícia Militar de Roraima, “intensifique as fiscalizações de trânsito e aqueles veículos estrangeiros flagrados em situação irregular de ingresso no país” sejam recolhidos e encaminhados à Receita Federal do Brasil em Roraima para as providências cabíveis.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "4",
      },
      {
        idPergunta: "279",
        idCategoriaPergunta: "69",
        title:
          "Como o Judiciário, assim como outras instituições brasileiras, uma vez provocados, exerceram influência sobre a situação concreta que ora se narra?",
        content:
          "Uma primeira provocação ao Poder Judiciário brasileiro ocorreu em abril de 2018, quando foi proposta a Ação Cível Originária nº 3.121/2018, diretamente no Supremo Tribunal Federal (STF), pelo Governo do Estado Roraima e contra a União, requerendo o fechamento temporário das fronteiras do ER com a RBV ou a limitação da entrada de venezuelanos no país. A Relatoria recaiu sobre a Ministra Rosa Weber, que findou por denegar o pedido de antecipação de tutela em 06.08.2018. Entretanto, em razão de lapso temporal para a tomada da referida Decisão denegatória, quando de sua prolação, já havia sido proposta Ação Civil Pública (ACP nº 002879-92.2018.4.01.4200, com trâmite na 1ª Vara Federal do Estado de Roraima) pelo Ministério Público Federal (MPF) e pela Defensoria Pública da União (DPU), contra a União e o ER, requerendo liminarmente a suspensão do Decreto nº 25.681-E, do ER. Paralelamente, tanto o MPF, quanto a DPU, também emitiram manifestações formais: o primeiro, uma recomendação ao Governo de Roraima para revogação do Decreto; a segunda uma declaração, concluindo pela inconstitucionalidade do ato do Governo de Roraima. A referida ACP redundou, nos seus autos, em tomada de Decisão liminar, de 05 de agosto de 2018, pela qual, por um lado, foram suspensos alguns Artigos do Decreto nº 25.681-E, mas, por outro lado, foi determinado o fechamento das fronteiras entre Brasil e Venezuela, reforce-se, no ER (invocando seu poder geral de cautela, o Juízo Federal de 1º Grau ordenou, nos termos da alínea “d”, da parte dispositiva da Decisão liminar: “suspender a admissão e o ingresso no Brasil de imigrantes venezuelanos a partir da ciência desta decisão e até que se alcance um equilíbrio numérico com o processo de interiorização e se criem condições para um acolhimento humanitário no Estado de Roraima”). A anteriormente mencionada Decisão da Ministra do STF determinou que fosse oficiado, com urgência, o Juízo de 1º Grau que concedeu a ordem liminar de fechamento das fronteiras, mas não determinou, de modo expresso, qualquer revogação da Decisão dada pela Justiça Federal, apesar de a própria Ministra ter declarado que o fechamento das fronteiras contrariaria tanto a CRFB, quanto previsões contidas em demais legislações brasileiras e Tratados Internacionais. Nos autos deste mesmo Processo, ou seja, da Ação Civil Originária nº 3.121/2018, proposta junto ao STF, a Advocacia Geral da União (AGU) protocolizara Petição requerendo, incidentalmente, a suspensão do Decreto (25.681-E) citado e explicado em perguntas anteriores deste mesmo CENÁRIO. Entretanto, a Ministra Rosa Weber, em sua mesma Decisão acima mencionada, determinou que fosse intimada a Procuradoria Geral da República para pronunciamento sobre o pedido incidental. Finalmente e, ainda que novos entendimentos judiciais e institucionais sobrevenham ao que neste CENÁRIO se explica, nova Decisão judicial veio a suspender os efeitos da Decisão da 1ª Vara Federal do Estado de Roraima, que levou ao fechamento temporário das fronteiras, a partir da manutenção de parte do Decreto 25.681-E. Trata-se de Decisão, a partir de novo pedido feito pela AGU, proferida no dia 07.08.2018, pelo Tribunal Regional Federal da 1ª Região (TRF-1), que suspendeu, em parte, a ordem liminar concedida em primeiro grau de jurisdição pela por vezes citada 1ª Vara Federal do Estado de Roraima. Assim, foram mantidas abertas as fronteiras entre Brasil e Venezuela.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "5",
      },
      {
        idPergunta: "280",
        idCategoriaPergunta: "69",
        title:
          "Ainda no que diz respeito ao Decreto e as decisões judiciais e de demais instituições nacionais, houve alguma afronta à Constituição brasileira (CRFB), digna de realce, para além do até aqui já exposto neste CENÁRIO?",
        content:
          "Os direitos sociais previstos na CRFB são reputados fundamentais e aplicáveis, na medida da possibilidade e alcance jurídicos de cada um, a todas as pessoas que estiverem no território nacional. Portanto, limitar o acesso à saúde, educação (se cabível), segurança, trabalho etc. a estrangeiros entendidos como refugiados no país, significa também afrontar a CRFB, sobretudo no tocante à previsão relativa à fundamentalidade de vários direitos. Portanto, deve o Poder Público brasileiro encontrar meios e adotar as medidas necessárias para que as leis brasileiras sejam aplicadas, assim como, principalmente, a CRFB.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "6",
      },
      {
        idPergunta: "281",
        idCategoriaPergunta: "69",
        title:
          "O Decreto nº 25.681-E, emitido pelo Governo do Estado de Roraima (ER), trouxe alguma outra previsão no tocante aos direitos fundamentais?",
        content:
          "Sim. Várias outras. Vale destacar Artigos voltados à proteção de direitos fundamentais (Art. 5º), com sujeição de infratores venezuelanos à deportação ou expulsão, à proteção da propriedade e da posse no Estado (Art. 6º) e, sobretudo, o de proteção à criança, ao adolescente e ao idoso (Art. 7º).",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "7",
      },
      {
        idPergunta: "283",
        idCategoriaPergunta: "69",
        title:
          "Existiram novas repercussões sociais no Brasil, contrárias às previsões contidas na CRFB, após a manutenção da abertura das fronteiras entre Brasil e Venezuela?",
        content:
          "Embora o foco deste APP e CENÁRIO seja jurídico e ligado, em menor ou maior grau, à CRFB, algumas questões e reflexos sociais merecem ser assinalados, pois levam a consequências também jurídicas. Em Pacaraima, cidade de fronteira com a Venezuela, ataques a venezuelanos, pela população brasileira local, começaram a ocorrer, tais como destruição de acampamentos e expulsão de imigrantes das ruas. Tais fatos, entre outros, reputados manifestações sociais diretas, levaram a um estado de violência e medo na região, o que levou alguns venezuelanos a retornarem a pé para a RBV. Para além disso, a falta de condições minimamente dignas de recepção, abrigo e assistência aos desamparados, conduziu a um problema humanitário grave, com o registro de crianças venezuelanas procurando alimento em depósitos de lixo. Enfim, entre outras questões, a entrada maciça de venezuelanos no Brasil, trouxe para o país a ameaça de um surto da patologia denominada sarampo, o que levou os órgãos de saúde nacionais a promoverem várias campanhas de vacinação da população.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "8",
      },
      {
        idPergunta: "284",
        idCategoriaPergunta: "69",
        title:
          "Por fim, o que é e se poderia falar de um “estado de coisas inconstitucional” no Estado de Roraima (ER)? Ou de um “estado de exceção”?",
        content:
          "Em um primeiro momento e, a partir de todas as considerações feitas, aqui se entende que a quantidade e o acúmulo de tensões, problemas e ameaças sociais, a instituições, a Tratados Internacionais e, por fim, à CRFB, conduziu, máxime o ER, a uma situação que pode ser considerada como de exceção. Se, entretanto, o grau de gravidade pode levar à decretação formal de uma das hipóteses integrantes do chamado sistema constitucional das crises, o foco assume uma direção. Intervenção Federal e, principalmente, Estado de Defesa e Estado de Sítio podem ser decretados diante, por exemplo, de quadros de grande instabilidade institucional. Mas decretação oficial depende, acima de tudo, de decisão política do Presidente da República, seguida, em exame e visão gerais, do Congresso Nacional. Quanto ao “estado de coisas inconstitucional”, em visão um tanto resumida, nada mais seria do que um estado, judicialmente decretado e ligado a falhas estruturais, principalmente sociais e sistêmicas. Encontra-se, por sua vez, mais voltado a situações ligadas a problemas estruturais, relacionadas a faltas de atuação estatal gerais e cumulativas em determinado Estado-Nação ou parte dele. Em um primeiro momento, aqui se considera que não se está diante de um contexto capaz de levar à decretação judicial de um “estado de coisas inconstitucional” no ER, pelo menos conforme suas características próprias e derivadas de sua mais famosa origem, isto é, da Corte Constitucional Colombiana. Melhor, certamente, deixar o prosseguimento de estudos variados levar a mais conclusões sobre a realidade vivenciada, principalmente, a partir do início do ano de 2018, nas fronteiras entre Brasil e Venezuela. Logicamente, com todos os entendimentos ora expressados imediata e vocacionalmente submetidos à reflexão e debate coletivos.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "9",
      },
      {
        idPergunta: "285",
        idCategoriaPergunta: "69",
        title: "Quais as Conclusões?",
        content:
          "A crise na RBV, que levou a um grande fluxo migratório, com a elevada entrada no Brasil de venezuelanos, fez com que uma série de acontecimentos sociais e jurídicos ocorressem no país. Decreto do Poder Executivo de Roraima, decisões judiciais no âmbito do STF e da Justiça Federal da 1ª Região, assim como a participação de múltiplas instituições nacionais em meio a uma crise de proporções humanitárias e sociais, marcou boa parte do ano de 2018 na região norte do Brasil, com reflexos em todo país e fora dele, no âmbito de relações e determinações internacionais. Nesse contexto, a CRFB findou por se colocar, na maioria das vezes, no centro de discussões, imbróglios e tomadas de decisões. E, o que quer que tenha já ocorrido, assim como venha a acontecer, jurídica, política, social, econômica e institucionalmente no Brasil, deve ser interpretado, focado e solucionado com base, exatamente, na CRFB, lei máxima e norteadora jurídica nacional.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "10",
      },
      {
        idPergunta: "286",
        idCategoriaPergunta: "69",
        title: "Quais os textos dos dispositivos legais citados neste CENÁRIO?",
        content:
          "Dada a grande quantidade e, se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais citados neste CENÁRIO.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "11",
      },
      {
        idPergunta: "287",
        idCategoriaPergunta: "69",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "12",
      },
      {
        idPergunta: "288",
        idCategoriaPergunta: "69",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BRANDÃO, Rodrigo. Supremacia Judicial versus Diálogos Constitucionais. 02. ed. Rio de Janeiro: Lumen Juris, 2017.; 2) CAMPOS, Carlos Alexandre de Azevedo. Estado de coisas inconstitucional. Salvador: Editora Jus PodVum, 2016.; 3) GUERRA, Sidney. Direito Internacional dos Direitos Humanos. 02. ed. São Paulo: Editora Saraiva, 2015.; 4) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.; 5) SARMENTO, Daniel (orgs.). Direitos sociais: fundamentos, judicialização e direitos sociais em espécie. Rio de Janeiro: Lumen Juris, 2008.; 6) VERMEULE, Adrian. The system of the Constitution. New York: Oxford University Press, Inc., 2011.; 7) VERMEULE, Adrian. Mechanisms of democracy – Institutional Design Writ Small. New York: Oxford University Press, Inc., 2007.\r\n",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "13",
      },
      {
        idPergunta: "289",
        idCategoriaPergunta: "69",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: www.planalto.gov.br</a>. Acesso em: 23 ago. 2018.; 2) BRASIL. Lei nº 13.445, de 24 de maio de 2017. Institui a Lei de Migração. Disponível em: www.planalto.gov.br</a>. Acesso em: 23 ago. 2018.; 3) BRASIL. Decreto 25.681-E, de 01º de agosto de 2018. Decreta atuação especial das forças de segurança pública e demais agentes públicos do Estado de Roraima em decorrência do fluxo migratório de estrangeiros em território do Estado de Roraima e dá outras providências. Disponível em: imprensaoficial.hospedagemdesites.ws</a>. Acesso em: 23 ago. 2018.; 4) BRASIL. Decisão Judicial proferida em 1ª Instância pela Justiça Federal do Estado de Roraima na ACP nº 002879-92.2018.4.01.4200. Disponível em: conjur.com.br</a>. Acesso em: 04 set. 2018; 5) BRASIL. Decisão Judicial proferida em 2ª Instância pelo TRF – 1ª Região. Disponível em: conjur.com.br</a>. Acesso em: 04 set. 2018.; 6) BRASIL. Decisão Judicial proferida pelo Supremo Tribunal Federal (STF) em Ação Cível Originária nº 3.121/2018. Disponível em: portal.stf.jus.br</a>. Acesso em: 04 set. 2018.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "14",
      },
      {
        idPergunta: "290",
        idCategoriaPergunta: "69",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "15",
      },
      {
        idPergunta: "291",
        idCategoriaPergunta: "69",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre Constituição e instituições: VERMEULE, Adrian. The Constitution of Risk. Cambridge: Cambridge University Press, 2013.; 2) Sobre direitos sociais: BONIZZATO, Luigi, REIS, José Carlos Vasconcellos dos. Direito Constitucional: questões clássicas, contemporâneas e críticas: atualizada e ampliada nos 30 anos da Constituição de 1988. 02. ed. Rio de Janeiro: Editora Lumen Juris, 2018.; 3) Sobre Globalização, Estado e direitos: SOBRINHO, Sergio Francisco Graziano. Globalização e sociedade de controle: a cultura do medo e o mercado da violência. Rio de Janeiro: Editora Lumen Juris, 2010.; 4) Sobre Estado de Exceção: AGAMBEN, Giorgio. Estado de Exceção. Tradução de Iraci D. Poleti. São Paulo: Boitempo, 2004.",
        idCategoria: "69",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões e considerações jurídicas, a partir de impasses judiciais e institucionais",
        ordemCategoriaPai: "400",
        ordemCategoria: "404",
        ordemPergunta: "16",
      },
    ],
  };

  const cenario4 = {
    rows: [
      {
        idPergunta: "292",
        idCategoriaPergunta: "70",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de abordagem sobre alguns papéis, funções, poderes e relações institucionais da figura do(a) Presidente do Supremo Tribunal Federal (STF). Eleito(a) a cada 02 (dois) anos pelos próprios membros dos STF, o(a) Presidente possui algumas prerrogativas e, em torno da figura institucional da presidência da cúpula do Poder Judiciário brasileiro existem questões que podem suscitar reflexões, pesquisas e debates. E, se muitas dessas questões findam por não serem tão notórias, outras já são de maior domínio público em matéria de conhecimento. Portanto, examinar tanto a figura da presidência do STF, quanto possíveis desdobramentos funcionais e, por corolário, institucionais, é tarefa profícua para que se estimule ainda mais o saber jurídico específico sobre o STF. Por fim, informa-se que, para fins de destaque ao longo do presente CENÁRIO, didaticamente optar-se-á pelo uso da inicial maiúscula para referência ao(à) Presidente do STF.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "1",
      },
      {
        idPergunta: "293",
        idCategoriaPergunta: "70",
        title:
          "Quais as principais funções e estrutura do Supremo Tribunal Federal (STF)?",
        content:
          "Ao STF, cúpula do Poder Judiciário brasileiro, compete precipuamente a guarda da Constituição, nos termos do caput do Art. 102 da Constituição da República (CRFB). De acordo com a mesma CRFB, no seu Art. 101, bem como no Art. 2º do Regimento Interno do Supremo Tribunal Federal (RISTF), o STF é composto por 11 (onze) ministros(as), os(as) quais são indicados(as) pelo(a) Presidente da República (chefe do Poder Executivo), aprovados(as) pelo Senado Federal (Casa do Poder Legislativo) após sabatina, nomeados(as) pelo(a) mesmo(a) Presidente da República e empossados(as) pelo Presidente do STF, função a ser destacada no presente CENÁRIO. Além disso, o STF é subdividido em 02 (duas) Turmas, sem qualquer hierarquia entre elas. Cada Turma é composta por 05 (cinco) Ministros(as), sendo que o(a) Presidente não integra nenhuma delas. Ressalte-se, por o processo de escolha dos(as) Ministros(as) passar por decisões tanto do Poder Executivo, cujo(a) chefe é, comumente, diretamente eleito(a) pelo povo, quanto pelo Poder Legislativo, cujos membros também são resultado de escolha por processo eleitoral nacional e popular, é possível se proclamar a legitimidade dos Ministros e Ministras, assim como, por corolário, do(a) próprio(a) Presidente do STF. O que, em última análise, conduz a uma legitimação contínua da CRFB quando protegida, além de devida, adequada e criteriosamente aplicada e interpretada pelo STF, conforme analogia pontual com considerações do jurista norte-americano Mark Tushnet sobre a importância da Constituição, principalmente nos EUA.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "2",
      },
      {
        idPergunta: "294",
        idCategoriaPergunta: "70",
        title: "O STF possui um(a) Presidente? Se sim, como é escolhido(a)?",
        content:
          "Sim, conforme já se deduz do exposto neste CENÁRIO, o STF possui um(a) Presidente. O(A) Presidente do STF é eleito(a) pelos próprios Ministros(as) do STF, tendo um mandato de 02 (dois) anos, vedada a reeleição para o período imediatamente subsequente (Art. 12, caput, do RISTF). O que ocorre no STF brasileiro é um acordo entre os(as) Ministros(as) para que sempre o(a) próximo(a) Presidente eleito(a) seja o(a) Ministro(a) mais antigo(a) da Corte que ainda não tenha exercido a função, nem assumido o cargo de Presidente do STF. Portanto, embora ocorra, finda por ser a eleição, preponderantemente, uma mera formalidade institucional, dado o acordo a que se fez apenas menção. De todo modo, o modus operandi e procedimento para a eleição interna corporis para Presidente do STF encontram-se regulados no Art. 12, caput e parágrafos 1º a 8º, do RISTF.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "3",
      },
      {
        idPergunta: "295",
        idCategoriaPergunta: "70",
        title:
          "Existe uma relação específica entre o Presidente do STF e outras instituições brasileiras? Se sim, quais instituições?",
        content:
          "Existem várias relações entre o(a) Presidente do STF e outras instituições brasileiras. Uma delas reside na possibilidade real e constitucional de o(a) Presidente do STF assumir o cargo de Presidente da República Federativa do Brasil. Vagando os cargos, ainda que temporariamente, de Presidente e Vice-Presidente da República, de presidente da Câmara dos Deputados e de presidente do Senado Federal, ocupa o cargo de Presidente da República o(a) Ministro(a) que se encontrar na presidência do STF. Isto de acordo com o Art. 80, caput, da CRFB. Igualmente, se os(as) próprios(as) ministros(as) do STF, individual ou coletivamente, exalam opiniões que levam a interpretações de variados grupos sociais e institucionais, o mesmo ocorre com o(a) Presidente da Corte, cuja opinião expressada e divulgada pode produzir efeitos também sociais, dentro do próprio STF e interinstitucionais variados. Tais opiniões podem manifestar-se por meio de decisões e votos, assim como, ilustrativamente, por meio de entrevistas à indústria midiática nacional, o que neste CENÁRIO se entende como inadequado, dadas inúmeras normas constitucionais e processuais vigentes que zelam pela imparcialidade da atividade judicante, pelo respeito ao juiz natural e, entre outras, pela proteção da plena possibilidade de exercício do contraditório e da ampla defesa. Enfim, aqui ainda se cita a influência clara da figura presidencial do STF no Conselho Nacional de Justiça (CNJ).",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "4",
      },
      {
        idPergunta: "296",
        idCategoriaPergunta: "70",
        title:
          "Quais as considerações mais específicas sobre o Conselho Nacional de Justiça (CNJ) e a relação entre a presidência do STF e o presidente do CNJ?",
        content:
          "Primeiramente, saliente-se que, de acordo com o § 1º, do Art. 103-B, da CRFB, a presidência do CNJ é ocupada pelo(a) Presidente do STF, durante seu mandato de 02 anos, com atribuições definidas no Art. 6º do Regimento Interno do CNJ. Uma vinculação automática que faz com que todo(a) e qualquer novo(a) Presidente do STF, via de regra, imediatamente assuma a presidência do CNJ. Este último, por sua vez, é uma instituição criada pela Emenda Constitucional nº 45, de 30 de dezembro de 2004 e voltada a uma tentativa de aperfeiçoamento do sistema judiciário brasileiro, tratando-se, teórica e conceitualmente, de um órgão de controle do Poder Judiciário e de desenvolvimento de políticas judiciárias. Assim, observa-se a clara influência da figura presidencial do STF no CNJ e, consequentemente, em todo o Poder Judiciário brasileiro; pois, ao também ocupar a presidência de um Conselho que estabelece metas, políticas, programas de avaliação, define planejamento estratégico, enfim, controla administrativamente o Poder Judiciário brasileiro (competências previstas no § 4º, do Art. 103-B, da CRFB), o(a) Presidente do STF detém um poder que ultrapassa as fronteiras tradicionais da clássica cúpula do Judiciário nacional, ou seja, do STF. Cumpre, no mesmo sentido, ressaltar que o CNJ possui os chamados “conselheiros”. Também nos termos do já citado Art. 103-B da CRFB, para além da figura do(a) presidente, são 14 (quatorze) os “conselheiros” e todos(as) escolhidos(as) entre ministros(as) de tribunais superiores (indicados pelos respectivos tribunais); juízes(as) de Direito; desembargadores(as) (alguns ou algumas indicados pelo próprio STF); procuradores(as) federais e promotores(as) estaduais; advogados(as); e cidadãos(ãs) de notável saber jurídico e reputação ilibada, indicados(as), respectivamente, pela Câmara dos Deputados e pelo Senado Federal. Ou seja, a tarefa de organização e controle administrativo, sob a presidência do CNJ, é desempenhada pelos mesmos operadores do Direito que ocupam cargos, exercem função jurisdicional e/ou participam, de alguma forma, da dinâmica processual de tutela jurisdicional de direitos, em instâncias e órgãos do Poder Judiciário.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "5",
      },
      {
        idPergunta: "297",
        idCategoriaPergunta: "70",
        title:
          "A presidência do STF pode influenciar em decisões proferidas por este Tribunal?",
        content:
          "Sim, a presidência do STF exerce influência sobre decisões proferidas pelo Tribunal. De acordo com o RISTF, entre outras atribuições do(a) Presidente, chama-se ora atenção para, nos termos do previsto no Art. 13 do RISTF, (a) o poder de decisão sobre questões de ordem (por exemplo, levantadas momentânea e especificamente pelos próprios Ministros e Ministras do STF), (b) o poder de decisão sobre questões urgentes nos períodos de recesso ou férias, (c) a possibilidade de proferir voto de qualidade nas decisões do Plenário, para as quais o RISTF não tenha previsto solução diversa (e isto quando o empate na votação decorrer de ausência de Ministro ou Ministra em virtude de duas situações específicas expressas no RISTF, fato a ser minuciado adiante) e (d) o poder de decidir, de forma irrecorrível, sobre a manifestação de terceiros, subscrita por procurador habilitado, em audiências públicas ou em qualquer processo em curso no âmbito da presidência. Paralelamente, merece também especial destaque o chamado “poder de pauta” do(a) Presidente do STF, pelo qual o(a) Ministro(a) detentor deste cargo define quais casos serão postos em pauta, de acordo com o que será melhor explicado na resposta à pergunta subsequente deste CENÁRIO. Pelo acima exposto, portanto, resta claro que a figura presidencial do STF muito influencia nas decisões proferidas no âmbito deste Tribunal.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "6",
      },
      {
        idPergunta: "306",
        idCategoriaPergunta: "70",
        title:
          "O que é e como funciona o “poder de pauta” do(a) Presidente do STF?",
        content:
          "O “poder de pauta” do(a) Presidente do STF consiste na atribuição que lhe é dada de definir quais processos serão postos, ou seja, listados e inseridos na pauta de e para julgamento. O RISTF, ao prever as inclusões em pauta realizadas tanto pelo(a) Presidente, quanto pelo(a) Relator(a), não prevê critérios objetivos para a escolha dos casos. Por essa razão, há teorias constitucionais que defendem que a seleção dos processos a serem incluídos em pauta acaba por se tornar uma escolha eminentemente política. De qualquer maneira, o previsto no Art. 129 do RISTF, assim como nos incisos VI e VII, do Art. 13, do RISTF, são exemplos de possibilidades, poderes e prerrogativas, permeadas por uma abertura normativa considerável ao Presidente do STF e capazes de dar ensejo, também e, em análise ampla, ao próprio “poder de pauta” que ora se apresenta. Exemplo: entre múltiplos exemplos, a opção da Ministra e então Presidente do STF, na primeira metade do ano de 2018, por incluir em pauta o HC (Habeas Corpus) nº 152.752 (no qual era paciente o ex-presidente Luiz Inácio Lula da Silva) e, não, as Ações Declaratórias de Constitucionalidade nºs 43 e 44, que versavam sobre o mesmo tema (possibilidade ou não de concretização de prisão após decisão em Segunda Instância), contudo no âmbito de controle concentrado de constitucionalidade de lei. Ressalte-se, apenas um exemplo, com finalidade meramente técnica, entre tantos que poderiam ser dados e levantados, mas escolhido em razão da notoriedade adquirida, sobretudo por envolver como personagem um ex-Presidente da República Federativa do Brasil.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "7",
      },
      {
        idPergunta: "298",
        idCategoriaPergunta: "70",
        title:
          "No que consiste o “voto de qualidade” que possui o(a) Presidente do STF?",
        content:
          "O “voto de qualidade” do(a) Presidente do STF consiste na atribuição que lhe é conferida para, no caso de empate em decisões do Plenário, sem que haja solução diversa prevista no RISTF, proferir um novo voto para resolução do impasse, respeitados os termos do Art. 13, inciso IX, do RISTF. Conforme estatui o Art. 143 do mesmo RISTF, o Plenário irá se reunir com a presença mínima de 6 (seis) Ministros(as) e, nos casos dispostos no parágrafo único do próprio Art. 143, o quórum para votação será de, no mínimo, 8 (oito) Ministros(as). Nesse sentido, existe a possibilidade dos(as) Ministros(as) se ausentarem e, por conta do quórum, ocorrer um empate na votação. Para resolução do referido empate, deverão ser observadas as soluções previstas no RISTF (exemplos: Arts. 40 e 146 do RISTF), sendo certo que o “voto de qualidade” somente será proferido em última hipótese. Destarte, consoante o já citado Art. 13, inciso IX, do RISTF, no empate decorrente da ausência de Ministro(a) em virtude de (a) impedimento ou suspeição ou de (b) vaga ou licença médica superior a 30 (trinta) dias, quando for urgente a matéria e não se puder convocar o(a) Ministro(a) licenciado(a), não havendo solução diversa prevista, o(a) Presidente deverá proferir “voto de qualidade”.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "8",
      },
      {
        idPergunta: "299",
        idCategoriaPergunta: "70",
        title: "Quais as Conclusões?",
        content:
          "Portanto, embora se esteja diante de um cargo e de uma função exercidos a partir de uma eleição interna e, não, popular, quem ocupa a presidência do STF possui uma série de poderes que acabam por marcante e patentemente influenciar, tanto no âmbito comportamental do próprio STF e de suas decisões, quanto na esfera de outras instituições, inclusive do próprio Poder Judiciário, amplamente concebido. Assim, apesar de poder parecer que o(a) Presidente do STF possui função meramente formal e da qual não decorrem prerrogativas, é certo que esta não é a realidade, podendo, até mesmo vir um(a) Presidente do STF a ocupar o cargo de Presidente da República Federativa do Brasil.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "9",
      },
      {
        idPergunta: "300",
        idCategoriaPergunta: "70",
        title:
          "Quais os textos dos dispositivos legais e regimentais citados neste CENÁRIO?",
        content:
          "Dada a grande quantidade, QUANDO DA MENÇÃO ÀS REFERÊNCIAS LEGISLATIVAS e REGIMENTAIS, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais e, máxime, regimentais citados neste CENÁRIO. De todo modo, alguns textos seguem abaixo: RISTF – “Art. 13. São atribuições do Presidente: (…) VI – executar e fazer cumprir os seus despachos, suas decisões monocráticas, suas resoluções, suas ordens e os acórdãos transitados em julgado e por ele relatados, bem como as deliberações do Tribunal tomadas em sessão administrativa e outras de interesse institucional, facultada a delegação de atribuições para a prática de atos processuais não decisórios; VII – decidir questões de ordem, ou submetê-las ao Tribunal, quando entender necessário; (...) IX – proferir voto de qualidade nas decisões do Plenário, para as quais o Regimento Interno não preveja solução diversa, quando o empate na votação decorra de ausência de Ministro em virtude de: a) impedimento ou suspeição; b) vaga ou licença médica superior a 30 (trinta) dias, quando seja urgente a matéria e não se possa convocar o Ministro licenciado”; “Art. 129. Em caso de urgência, o Relator poderá indicar preferência para o julgamento”; “Art. 143. O Plenário, que se reúne com a presença mínima de seis Ministros, é dirigido pelo Presidente do Tribunal. Parágrafo único. O quórum para votação de matéria constitucional e para a eleição do Presidente e do Vice-Presidente, dos membros do Conselho Nacional da Magistratura e do Tribunal Superior Eleitoral é de oito Ministros”.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "10",
      },
      {
        idPergunta: "301",
        idCategoriaPergunta: "70",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "11",
      },
      {
        idPergunta: "302",
        idCategoriaPergunta: "70",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BARROSO, Luis Roberto. O controle de constitucionalidade no Direito brasileiro. São Paulo: Editora Saraiva, 2004.; 2) BOLONHA, Carlos, BONIZZATO, Luigi, MAIA, Fabiana (Coord.). Teoria Institucional e Constitucionalismo Contemporâneo. Curitiba: Editora Juruá, 2016.; 3) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.; 4) STRECK, Lenio Luiz. Jurisdição Constitucional. 05. ed. São Paulo: Forense, 2018.; 5) TUSHNET, Mark. Why the Constitution matters. New Haven: Yale University Press, 2010.; 6) VIEIRA, Oscar Vilhena. Supremo Tribunal Federal. 2. ed. São Paulo: Editora Malheiros, 2002.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "12",
      },
      {
        idPergunta: "303",
        idCategoriaPergunta: "70",
        title:
          "Quais as referências bibliográficas das legislações, regimentos e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 04 set. 2018.; 2) BRASIL. Regimento Interno do Supremo Tribunal Federal (RISTF). Disponível em: stf.jus.br</a>. Acesso em: 04 set. 2018.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "13",
      },
      {
        idPergunta: "304",
        idCategoriaPergunta: "70",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "14",
      },
      {
        idPergunta: "305",
        idCategoriaPergunta: "70",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre relações institucionais: BRANDÃO, Rodrigo. Supremacia Judicial versus Diálogos Constitucionais. 02. ed. Rio de Janeiro: Lumen Juris, 2017.; 2) Sobre o Supremo Tribunal Federal: OLIVEIRA, Fabiana Luci de. STF: do autoritarismo à democracia. Rio de Janeiro: Editora Campus Elsevier, 2011.; 3) Sobre controle de constitucionalidade: MENDES, Gilmar Ferreira. Jurisdição Constitucional. 06. ed. São Paulo: Editora Saraiva, 2014.",
        idCategoria: "70",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura do(a) PRESIDENTE do Supremo Tribunal Federal (STF)",
        ordemCategoriaPai: "400",
        ordemCategoria: "405",
        ordemPergunta: "15",
      },
    ],
  };

  const cenario5 = {
    rows: [
      {
        idPergunta: "307",
        idCategoriaPergunta: "71",
        title: "Quais as considerações iniciais?",
        content:
          'Trata-se de abordagem sobre o comportamento do órgão de cúpula do Poder Judiciário na tomada de suas decisões. A ideia principal é trabalhada no livro "One Case at a Time: Judicial Minimalism on the Supreme Court", do autor estadunidense Cass Sunstein. Um Poder Judiciário, por exemplo, caracterizado como minimalista, seria aquele que decide apenas as questões que, em cada caso concreto, entende como real e verdadeiramente cruciais para a solução do conflito, ou seja, da controvérsia que lhe foi apresentada. Dessa forma, a contrario sensu, evita-se uma atuação judicial excessiva, que finda por ultrapassar o objeto principal das ações judiciais e fazer com que o Judiciário caminhe para um, até mesmo, chamado ativismo judicial.',
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "1",
      },
      {
        idPergunta: "308",
        idCategoriaPergunta: "71",
        title:
          "Em que consiste, em um primeiro e técnico exame, o minimalismo judicial?",
        content:
          'Segundo o descrito pelo autor (C. Sunstein), verifica-se um comportamento tipicamente minimalista quando a Suprema Corte, ao decidir um caso, trata apenas das temáticas necessárias para justificar/ fundamentar determinado resultado, deixando indecidido (ou sem enfrentamento pela Corte) tanto quanto for pela própria Corte entendido como possível. A Corte, assim, decide apenas a controvérsia que lhe foi trazida, sem expandir sua decisão para temas relacionados de modo subjetivo - do indivíduo que é parte do processo para o grupo ao qual pertence - ou objetivo – de uma temática específica para outras temáticas semelhantes. O próprio Autor trata do chamado “acordo incompletamente teorizado" como conceito central e basilar da teoria do minimalismo que ora se aborda.',
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "2",
      },
      {
        idPergunta: "309",
        idCategoriaPergunta: "71",
        title:
          "Mais precisamente, o que seriam os “acordos incompletamente teorizados”?",
        content:
          'Em linhas gerais, os chamados "acordos incompletamente teorizados" constituem técnica utilizada para se alcançar o consenso na tomada de decisões. Esta técnica pode ser utilizada diante de duas diferentes possibilidades. A primeira ocorre quando se está diante de forte dissenso quanto a aplicação específica de princípios gerais. Diante disso, a solução com base em acordos incompletamente teorizados consistiria em buscar o consenso no plano geral e abstrato. É o que ocorre, por exemplo, quando se concorda sobre o conceito abstrato de liberdade de expressão mas existem opiniões distintas acerca da regulação da mídia. Já a segunda possibilidade seria a concordância no plano concreto e específico diante da discordância no plano geral e abstrato. Como exemplo, podemos citar o acordo quanto aos malefícios da discriminação por gênero, religião ou raça, embora haja diferentes visões do conceito abstrato de igualdade. Assim, conclui-se, em linhas gerais, que o autor nomeia de acordos incompletamente teorizados aqueles buscados no plano geral ou específico, concreto ou abstrato, de modo a superar a discordância em outros planos.',
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "3",
      },
      {
        idPergunta: "310",
        idCategoriaPergunta: "71",
        title:
          "Quais as principais características de uma decisão minimalista?",
        content:
          "A decisão minimalista é definida, principalmente, por ser estreita (não larga) e rasa (não profunda). Primeiramente, a decisão é definida estreita, na medida em que a Corte minimalista busca decidir apenas o caso que lhe é apresentado, sem formular teorias amplas ou estender a decisão a outros casos, a menos quando for estritamente necessário ou quando for provocada para tanto. Nesta última situação, ou seja, de provocação, a atuação Corte, aí sim, pode ser mais profunda e menos estreita, pois assim foi a Corte induzida, estimulada e direcionada para agir. Paralelamente, a decisão minimalista é rasa, porque busca abordar, em sua fundamentação, questões sobre as quais não paire grande controvérsia ou discordância, tanto do ponto de vista teórico, quanto prático. Por isso, busca-se adotar, na fundamentação das decisões, os já mencionados acordos incompletamente teorizados. Tal dinâmica, por consequência, finda por evitar decisões muito amplas e aprofundadas, que acabam por levar o Judiciário a um caminho mais abrangente do ponto de vista do alcance de suas decisões.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "4",
      },
      {
        idPergunta: "311",
        idCategoriaPergunta: "71",
        title:
          "Quais os possíveis benefícios obtidos pela adoção de postura minimalista por uma Corte?",
        content:
          "A postura decisória de caráter minimalista pode trazer, de acordo com Cass Sunstein e seu estudo específico sobre o assunto, já devidamente mencionado neste CENÁRIO, 02 (dois) principais benefícios. O primeiro deles é reduzir o “fardo” das decisões judiciais. Isto significa dizer que, em um órgão de decisão composto por magistrados com diferentes visões de mundo e que podem, muitas vezes, discordar entre si, escolher decidir sobre questões pontuais e não formular teorias amplas pode ser um caminho para facilitar o consenso. Da mesma forma, obter uma decisão e um acordo sobre questões de elevada amplitude é algo que requer maior diversidade de informações, cujos tempo e esforço para obtenção poderão prejudicar a eficiência da Corte. O segundo principal benefício em se adotar o minimalismo é o de reduzir as chances de erro em uma decisão, bem como o potencial de danos dele decorrentes. Se a Corte resolve, por exemplo, adotar determinado entendimento sobre uma situação específica e não sobre uma gama de casos semelhantes, eventual erro cometido afetará somente os casos concernentes àquela situação e terá impactos menores e menos abrangentes.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "5",
      },
      {
        idPergunta: "312",
        idCategoriaPergunta: "71",
        title:
          "Em quais circunstâncias a postura minimalista deve ser adotada?",
        content:
          "No entendimento de Cass Sunstein, o minimalismo pode ser adotado, por exemplo, nas seguintes circunstâncias: (1) quando magistrados estiverem decidindo em meio a incertezas factuais ou morais ou a circunstâncias que estejam em constante transformação; (2) quando a solução possa ser deturpada em futuros casos; e (3) quando não houver necessidade para planejamento antecipado e as decisões puderem ser tomadas de forma gradual.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "6",
      },
      {
        idPergunta: "313",
        idCategoriaPergunta: "71",
        title:
          "Em quais circunstâncias é possível adotar postura maximalista, ou seja, a entendida como contrária à minimalista?",
        content:
          "O autor não considera o minimalismo como postura aplicável a toda e qualquer decisão judicial de interpretação constitucional. Afirma que é possível proferir decisões amplas e profundas (maximalistas), por exemplo, quando: (1) magistrados tiverem confiança considerável no teor daquela solução; quando a solução puder reduzir uma custosa incerteza para futuras Cortes e partes litigantes; e (3) quando for importante realizar um planejamento antecipado – decidindo o caso de forma ampla, para se fixar “aquele” entendimento, que pode ser provavelmente um entendimento mais longevo e duradouro.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "7",
      },
      {
        idPergunta: "314",
        idCategoriaPergunta: "71",
        title: "Existe relação entre minimalismo e democracia?",
        content:
          'Existe. O minimalismo pode incentivar a democracia, já que uma de suas vantagens é, com a redução do conteúdo enfrentado pelas Cortes em suas decisões judiciais, garantir maior espaço aos outros Poderes. Em seu já, neste CENÁRIO, citado livro, Cass Sunstein afirma que uma decisão judicial minimalista, ao invés de fixar entendimentos amplos e de se adiantar em relação aos outros Poderes, solucionaria apenas a controvérsia em questão, permitindo que as temáticas a ela relacionadas fossem debatidas no ambiente democrático correspondente e respectivo, assim aqui considerado o ambiente mais consentâneo e adequado, a partir do definido pelas normas organizacionais democráticas de uma nação. Ressalte-se que aqui o autor entende "democracia" como “democracia deliberativa”, uma vez que as questões deixadas em aberto pela Corte ficariam ao encargo do debate político no âmbito dos Poderes que possuíssem essa legitimidade.',
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "8",
      },
      {
        idPergunta: "315",
        idCategoriaPergunta: "71",
        title: "Quais as conclusões?",
        content:
          "Conclui-se, portanto, que uma atuação considerada minimalista do Judiciário é marcada por decisões que levam em conta apenas as questões cruciais para a solução de um conflito apresentado. As decisões acabam por ser estreitas e rasas, ou seja, geralmente não se estendem a outros casos, nem formulam teorias amplas, optando por questões que não sejam objeto de grande controvérsia. Cabe também salientar que os acordos incompletamente teorizados, já esclarecidos ao longo do CENÁRIO, são adotados na fundamentação de tais decisões. Desta forma, o fenômeno denominado minimalismo pode vir a ser benéfico, na medida em que facilita o consenso e otimiza o tempo despendido pela Corte, a qual busca decidir questões pontuais em sua conduta minimalista. Além disso, as chances de erro são reduzidas em uma decisão reputada minimalista e, consequentemente, os eventuais danos decorrentes de possível erro afetarão somente aquela situação específica, objeto do julgamento procedido. Outro ponto positivo seria que o minimalismo facilitaria a democracia deliberativa, já que as questões deixadas em aberto, pela Corte, poderiam ser debatidas no âmbito dos Poderes que possuíssem legitimidade para tal. Por fim, apesar das vantagens apresentadas, cabe salientar que o minimalismo não deve, segundo Cass Sunstein, ser aplicado a toda e qualquer decisão judicial de interpretação constitucional. De acordo o também visto neste CENÁRIO, há casos em que decisões maximalistas são possíveis e mais indicadas.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "9",
      },
      {
        idPergunta: "316",
        idCategoriaPergunta: "71",
        title:
          "Quais os textos dos dispositivos legais e/ou constitucionais citados neste CENÁRIO?",
        content:
          "Não houve menção a dispositivo legal ou constitucional, uma vez que este CENÁRIO teve por objetivo analisar a temática escolhida de modo eminentemente teórico.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "10",
      },
      {
        idPergunta: "317",
        idCategoriaPergunta: "71",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "11",
      },
      {
        idPergunta: "318",
        idCategoriaPergunta: "71",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) ACKERMAN, Bruce. New Separation of Powers. Harvard Law Review, Vol. 133, 633, 2000.; 2) SCHMITT, Carl. Teoria de la Constitución. Madrid: Alianza Editorial, 1982.; 3) SUNSTEIN, Cass R. One case at a time – judicial minimalism in the Supreme Court. Cambridge: Harvard University Press, 2001.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "12",
      },
      {
        idPergunta: "319",
        idCategoriaPergunta: "71",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "13",
      },
      {
        idPergunta: "320",
        idCategoriaPergunta: "71",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre minimalismo judicial: SUNSTEIN, Cass R. Beyond judicial minimalism (september 25, 2008). University of Chicago, Public Law Working Paper, n. 237. Disponível em: chicagounbound.uchicago.edu</a>. 2) Sobre acordos incompletamente teorizados: SUNSTEIN, Cass R. Incompletely theorized agreements in constitutional law. University of Chicago, Public Law Working Paper, n. 147. Disponível em: ssrn.com</a>. 3) Sobre relações institucionais: BRANDÃO, Rodrigo. Supremacia Judicial versus Diálogos Constitucionais. 02. ed. Rio de Janeiro: Lumen Juris, 2017.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "14",
      },
      {
        idPergunta: "321",
        idCategoriaPergunta: "71",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre minimalismo judicial: SUNSTEIN, Cass R. Beyond judicial minimalism (september 25, 2008). University of Chicago, Public Law Working Paper, n. 237. Disponível em: chicagounbound.uchicago.edu</a>. 2) Sobre acordos incompletamente teorizados: SUNSTEIN, Cass R. Incompletely theorized agreements in constitutional law. University of Chicago, Public Law Working Paper, n. 147. Disponível em: ssrn.com</a>. 3) Sobre relações institucionais: BRANDÃO, Rodrigo. Supremacia Judicial versus Diálogos Constitucionais. 02. ed. Rio de Janeiro: Lumen Juris, 2017.",
        idCategoria: "71",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de Cass Sunstein e outros desdobramentos teóricos",
        ordemCategoriaPai: "400",
        ordemCategoria: "406",
        ordemPergunta: "15",
      },
    ],
  };
  const cenario6 = {
    rows: [
      {
        idPergunta: "322",
        idCategoriaPergunta: "72",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de abordagem estrita e específica sobre uma entre várias relações entre instituições brasileiras. No caso em tela, de um lado, entre o poder jurisdicional no julgamento de casos concretos envolvendo a saúde privada, pedidos de coberturas de procedimentos e/ou tratamentos médicos e a aplicação de normas legais e, de outro, um desprezo pela aplicação de normas técnicas, oriundas da Agência Reguladora responsável pela regulação da saúde suplementar no Brasil, pelo mesmo Poder Judiciário, no exercício da sua citada atividade judicante.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "1",
      },
      {
        idPergunta: "323",
        idCategoriaPergunta: "72",
        title:
          "Qual o conflito institucional e relativo à aplicação de normas, existente entre o Poder Judiciário e a Administração Pública, referente ao foco do presente CENÁRIO?",
        content:
          "Seria o aqui considerado conflito na escolha, pelo Poder Judiciário, no julgamento de casos concretos, entre (1) a aplicação das normas técnicas elaboradas pela Agência Nacional de Saúde Suplementar (ANS) e (2) a aplicação de outras normas jurídicas, comumente de cunho menos técnico e mais genérico, previstas em leis e na própria Constituição da República (CRFB).",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "2",
      },
      {
        idPergunta: "324",
        idCategoriaPergunta: "72",
        title:
          "Qual a principal tendência do Poder Judiciário, na aplicação das duas categorias de normas mencionadas nas pergunta e resposta anteriores?",
        content:
          "O Poder Judiciário a partir de um exame recortado, de 2013 a 2017, de 33 (trinta e três) casos concretos, relativos a decisões proferidas por Tribunais Estaduais, preteriu normas técnicas claras elaboradas pela ANS, por meio de seu poder técnico-normativo, e preferiu aplicar normas jurídicas previstas em leis e/ou na CRFB.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "3",
      },
      {
        idPergunta: "325",
        idCategoriaPergunta: "72",
        title:
          "Qual a consequência da escolha, pelo Poder Judiciário, por não aplicar as normas técnicas nos 33 (trinta e três) casos examinados?",
        content:
          "A consequência foi a procedência dos pedidos autorais em todas as Ações Judiciais, com a liberação de um tratamento e/ou procedimento antes administrativamente negado por uma Operadora de Plano de Saúde Privado, com base em norma técnica clara e enquadrável à situação do beneficiário, cliente e, também, paciente.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "4",
      },
      {
        idPergunta: "326",
        idCategoriaPergunta: "72",
        title:
          "Qual o critério utilizado para a seleção dos 33 (trinta e três) casos concretos?",
        content:
          "O critério específico foi o da seleção de casos envolvendo o pedido de liberação e cobertura, por Operadoras de Planos de Saúde, de medicamentos para o tratamento de patologias de natureza oncológica.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "5",
      },
      {
        idPergunta: "327",
        idCategoriaPergunta: "72",
        title:
          "E qual a base para a ANS elaborar normas técnicas que não obrigaram as Operadoras a cobrir os custos dos medicamentos citados na resposta à pergunta anterior?",
        content:
          "Bases técnicas ligadas à não obrigatoriedade de liberação de medicamentos recém-criados e não comercializados no Brasil, ou seja, medicamentos importados para o combate a determinados tipos de doenças oncológicas.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "6",
      },
      {
        idPergunta: "328",
        idCategoriaPergunta: "72",
        title:
          "E quais as razões expostas pelo Poder Judiciário para a não aplicação de normas da ANS, em prol da aplicação de normas legais e constitucionais de caráter mais genérico?",
        content:
          "As fundamentações presentes nos 33 (trinta e três) casos possuíam particularidades, mas, em comum, sempre a invocação de direitos e princípios constitucionais, como o direito à vida e a dignidade da pessoa humana. Além disso, a presença de normas previstas no Código de Defesa do Consumidor mostraram-se também sempre presentes para justificar o afastamento de norma técnica específica permissiva de uma não obrigatoriedade de cobertura pelas Operadoras de Planos de Saúde, e a incidência do dever de estas mesmas Operadoras cobrirem tratamentos, mesmo que considerados não obrigatórios pela Agência Reguladora específica. Assim, no embate entre normas técnicas específicas (relacionadas ao tema central aqui enfrentado) e normas jurídicas de maior abstração e generalidade, estas últimas prevaleceram.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "7",
      },
      {
        idPergunta: "329",
        idCategoriaPergunta: "72",
        title:
          "Qual a principal motivação para a pesquisa que provocou o presente CENÁRIO?",
        content:
          "A principal, mas não primeira, motivação foi a abordagem que envolve a relação, no Brasil, entre a Administração Pública, na figura das Agências Reguladoras, e as decisões proferidas pelo Poder Judiciário, no caso em tela, fundamentadas em normas legais, elaboradas pelo Poder Legislativo, ou em normas constitucionais, criadas pelo poder constituinte originário. Paralelamente, a motivação inicial e básica foi o exame do chamado Estado Administrativo norte-americano, do qual o Brasil extraiu o exemplo e o modelo principais para a criação das Agências Reguladoras pátrias, com a averiguação de que, nos Estados Unidos (EUA), abnega-se e se recusa, frequentemente, a aplicação de leis, em favor da aplicação de normas técnicas elaboradas por Agências Reguladoras. A chamada deferência judicial às Agências e suas normas é marcante nos EUA e, no que se refere ao recorte temático escolhido para o presente CENÁRIO, praticamente inexistente no Brasil. O estudo de Adrian Vermeule, Professor da Faculdade de Direito de Harvard (Harvard Law School), intitulado “Law’s Abnegation: from Law’s Empire to the Administrative State”, foi a grande base teórica para o que neste CENÁRIO se apresenta.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "8",
      },
      {
        idPergunta: "330",
        idCategoriaPergunta: "72",
        title: "Quais as Conclusões?",
        content:
          "Portanto, conclui-se que, no Brasil, a partir do resultado do exame jurisprudencial no período temporal recortado (2013-2017), as normas técnicas criadas pela ANS foram preteridas pelo Poder Judiciário quando do julgamento de pedidos feitos em Ações Judiciais para a liberação de medicamentos recém-criados e/ou importados para o tratamento de doenças oncológicas, o que demonstrou uma não deferência do Judiciário para com a Administração Pública, na figura da ANS. E, nos EUA, a deferência às Agências Reguladoras e ao Estado Administrativo é a realidade mais intensamente constatada e vigente.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "9",
      },
      {
        idPergunta: "331",
        idCategoriaPergunta: "72",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "10",
      },
      {
        idPergunta: "332",
        idCategoriaPergunta: "72",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi, REIS, José Carlos Vasconcellos dos. Direito Constitucional: questões clássicas, contemporâneas e críticas: atualizada e ampliada nos 30 anos da Constituição de 1988. 02. ed. Rio de Janeiro: Editora Lumen Juris, 2018.; 2) MOREIRA NETO, Diogo de Figueiredo. Mutações do Direito Administrativo. 2. ed. Rio de Janeiro: Editora Renovar, 2001.; 3) SEN, Amartya. Desenvolvimento como liberdade. Tradução de Laura Teixeira Motta. São Paulo: Companhia das Letras, 2000.; 4) SOUTO, Macos Juruena Villela. Desestatização, privatização, concessões e terceirizações. 03. ed. Rio de Janeiro: Editora Lumen Juris, 2000.; 5) VERMEULE, Adrian. Law’s abnegation: from Law’s Empire to the Administrative State. Cambridge, Massachusetts: Harvard University Press, 2016.; 6) VERMEULE, Adrian. The Constitution of Risk. New York: Cambridge University Press, 2014.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "11",
      },
      {
        idPergunta: "333",
        idCategoriaPergunta: "72",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content:
          "Sim. Jurisprudencial. 33 (trinta e três) casos concretos, distribuídos por 04 Estados brasileiros (Rio de Janeiro, São Paulo, Minas Gerais e Curitiba) mais o Distrito Federal, com decisões resolutórias de mérito transitadas em julgado durante o período de 2013 a 2017. Não são aqui divulgadas especificidades dos Processos em respeito aos nomes e particularidades de cada Parte envolvida.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "12",
      },
      {
        idPergunta: "334",
        idCategoriaPergunta: "72",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre relações institucionais: BRANDÃO, Rodrigo. Supremacia Judicial versus Diálogos Constitucionais. 02. ed. Rio de Janeiro: Lumen Juris, 2017.; 2) Sobre Agências Reguladoras no Brasil e nos EUA: ARAGÃO, Alexandre Santos de. Agências reguladoras e a evolução do direito administrativo econômico. Rio de Janeiro: Editora Forense, 2002.",
        idCategoria: "72",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em casos concretos?",
        ordemCategoriaPai: "400",
        ordemCategoria: "407",
        ordemPergunta: "13",
      },
    ],
  };

  const cenario7 = {
    rows: [
      {
        idPergunta: "336",
        idCategoriaPergunta: "73",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de análise sobre o resultado, até o momento, de uma suposta disputa diretamente relacionada entre o direito à cultura e o direito dos animais. Mas, para além disso, de um suposto conflito maior entre o mesmo direito à cultura e o direito ao ambiente, artificial e natural. E, em sentido ainda mais amplo, entre a cultura enquanto direito e a vida e o direito dela decorrente. Nesse rumo, a abordagem das perguntas e respostas subsequentes tentará demonstrar e induzir reflexões sobre (a) a existência de uma verdadeira disputa ou (b) de uma necessidade de se melhor saber interpretar direitos fundamentais e os fazer integrar um chamado círculo virtuoso ao invés de vicioso. Ou ainda (c) ambas ou (d) nenhuma das situações acima. Por fim, para um entendimento mais concreto, serão trazidos à tona os debates e ações institucionais, máxime de macro instituições, em seus processos relacionais e dialógicos. Tudo isso ainda somado a ocorrências até beligerantes e que chegaram a extremos, assim como a colocações de ocorrência de fenômenos, entre outros, como o do backlash. Uma celeuma que, certamente, pode perfeitamente manter-se acesa, a menos que se entenda, estenda e cristalize uma compreensão do que logo no início desta introdução se colocou: a necessidade de se proteger uma virtuosidade sobre uma viciosidade.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "1",
      },
      {
        idPergunta: "337",
        idCategoriaPergunta: "73",
        title:
          "Inicialmente, qual o histórico resumido e recente do começo da problemática que envolve a criação da Emenda Constitucional nº 96, de 06 de junho de 2017?",
        content:
          "Na realidade, em breve resumo, em maio de 2013 a Procuradoria Geral da República (PGR) propõe Ação Direta de Inconstitucionalidade (ADIN 4983) contra Lei do Estado do Ceará (Lei Estadual nº 15.299/2013) que regulamentava a prática da vaquejada naquele Estado. Pouco mais de 03 (três) anos depois, em 06 de outubro de 2016, o Supremo Tribunal Federal (STF), em decisão plenária (muito embora a análise dos votos de cada Ministro leve à conclusão de que fundamentações diferentes conduziram a um resultado final comum, tal problemática de funcionamento e atuação do STF não será aqui, neste CENÁRIO, enfrentada) e pelo placar apertado de 06 (seis) votos - Ministros Marco Aurélio Mello (Relator), Luís Roberto Barroso, Rosa Weber, Ricardo Lewandowski, Celso de Mello e a Presidente da Corte, Ministra Cármen Lúcia - contra 05 (cinco) – Ministros Luiz Edson Fachin, Teori Zavascki, Luiz Fux, José Antonio Dias Toffoli e Gilmar Ferreira Mendes -, julga procedente o pedido formulado na citada ADIN (nº 4983) e decide pela inconstitucionalidade da Lei do Estado do Ceará, implicando na inconstitucionalidade e proibição da prática formal da vaquejada no país. Os grupos sociais de pressão, refletidos dentro do Congresso Nacional e interessados e/ou defensores da chamada cultura da vaquejada levaram parlamentares a proporem, em 19 de outubro de 2016, a Proposta de Emenda à Constituição (PEC) nº 50/2016, exatos, apenas e então 13 (treze) dias depois da decisão plenária do STF a que se fez acima menção. Tal PEC tinha como principal objetivo acrescentar o parágrafo sétimo ao Art. 225 da CRFB, a fim de se criar exceção ao previsto no Art. 225, § 1º, inciso VII, da mesma CRFB. Mais precisamente, criar exceção em prol da prática desportiva que envolva a utilização de animais, ainda que contrarie a vedação de submissão de animais, seres vivos, a atos considerados de crueldade. Aproximados 08 (oito) meses após a apresentação da PEC nº 50/2016, é esta aprovada nos 02 (dois) turnos de votação, nas 02 (duas) Casas do Congresso Nacional, com quórum até superior ao mínimo exigido para a aprovação de Emendas à Constituição, nos termos do seu Art. 60. Assim, é criada a Emenda Constitucional (EC) nº 96, de 06 de junho de 2017.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "2",
      },
      {
        idPergunta: "338",
        idCategoriaPergunta: "73",
        title:
          "Preliminarmente, ainda, por que se faz menção a uma “suposta” disputa ou a um suposto “conflito” entre direitos fundamentais à cultura e dos animais, ao ambiente ou ao direito à vida?",
        content:
          "Para o que aqui se entende, os verdadeiros e reais direitos em jogo, ou seja, em debate são os relativos à proteção da cultura, de um lado e, de outro, o de defesa da vida. Inseridos dentro do espectro do direito à vida encontram-se, tendo em vista o caso concreto ora em voga, o direito ao ambiente - seja ele artificial, seja ele natural, os quais, apesar de passíveis de compartimentalização, devem “caminhar de mãos dadas”, com o perdão da expressão mais coloquial – e, por corolário, o direito também dos animais. A vida e o direito que dela decorre incluem as concepções de (a) permanecer ou estar vivo (entre vários, Art. 5º, caput, da CRFB), de (b) ter vida digna (entre vários, Art. 1º, inciso III, Art. 170, caput) e de (c) proteção do ambiente (entre vários, Art. 225 e Art. 182), em seu sentido mais amplo, que inclui todas as formas de vida na terra, em especial, nos termos da Constituição brasileira de 1988 (CRFB), a fauna e a flora. Portanto, como colocar em uma mesma balança, do lado esquerdo a cultura e, do lado direito, a vida? Note-se, não há, nesta visão que aqui se coloca, o que se equilibrar, sopesar ou ponderar. Se a maioria absoluta dos direitos fundamentais e de sua aplicabilidade somente faz sentido se a vida, antes de tudo, estiver presente e garantida, enquadrando-se o direito à cultura nesta maioria absoluta mencionada, por consequência, não se pode conceber a defesa de uma cultura que fira a dignidade de um ser vivo, que fira seu direito de estar vivo e, enfim, o próprio ambiente em sentido amplo. Pensar em sentido contrário, representará a criação de um círculo vicioso em que direitos fundamentais serão atacados uns pelos outros, com lesões constantes às respectivas essências e núcleos de cada um deles (núcleos essenciais, em invocação de teoria clássica) e, sobretudo, com desconsiderações constantes ao tão precioso direito à vida (CANOTILHO, 2003). Mas, pensar no outro sentido proposto significará preservar em círculo virtuoso sempre e cada vez mais os direitos fundamentais, em uma roda permanente de valorização da vida e de seu direito, a partir das 03 (três) concepções que logo acima se levantou.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "3",
      },
      {
        idPergunta: "339",
        idCategoriaPergunta: "73",
        title: "Em resumidos dizeres, no que consiste a vaquejada?",
        content:
          "De acordo com reportagem do NEXO JORNAL (FREITAS, 2017), a vaquejada surgiu no nordeste brasileiro no século 19. Como naquela época, as fazendas de pecuária não eram cercadas, boiadas de diferentes fazendeiros se misturavam nos pastos. Na separação das boiadas feitas por alguns vaqueiros, alguns animais eram mais difíceis de serem conduzidos. Por consequência, era necessário puxá-los pelo rabo e os derrubar e os vaqueiros que se destacavam nesta prática passaram a ganhar fama por derrubar o boi pelo rabo, fato que, com o decorrer dos anos, virou um esporte. O objetivo maior da vaquejada, praticada por duplas de vaqueiros, é o de encurralar o boi com os cavalos e o derrubar puxando seu rabo. É necessário deixá-lo com as quatro patas para cima para marcar pontos (FREITAS, 2017). Esta prática, considerada esportiva, de alta inserção cultural, sobretudo no Nordeste do país, comprovadamente submete animais a atos cruéis, com ferimentos que podem leva-los à morte. Ferimentos causados, principalmente, durante o ato esportivo mais direto, mas não restrito a este, pois tanto antes, quanto após a vaquejada, também comprovadamente os bois podem ter seus chifre serrados, além de serem submetidos a estresses crônicos. Para maiores detalhes, sugere-se consulta, entre tantos, ao SITE do NEXO JORNAL: nexojornal.com.br</a>.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "4",
      },
      {
        idPergunta: "340",
        idCategoriaPergunta: "73",
        title:
          "Já houve alguma insurgência social ou institucional contra a Emenda Constitucional (EC) nº 96/2017?",
        content:
          "Sim. Até a data de publicação deste APP, para além de reações sociais favoráveis à cultura, ainda que sua garantia implique em maus-tratos a animais, assim como reações contrárias à EC nº 96/2017 e a práticas de crueldade contra seres vivos, qualquer que sejam, mas, sobretudo, animais, 02 (duas) ADIN’s já foram propostas contra a referida EC nº 96/2017: uma pelo Fórum Nacional de Proteção e Defesa Animal (ADIN nº 5.728); e outra pela própria PGR (ADIN nº 5.772), que foi quem em 2013 provocou o Poder Judiciário para a declaração de inconstitucionalidade da Lei do Estado do Ceará que regulamentava a vaquejada. Vale sempre lembrar que a declaração de inconstitucionalidade de Emendas à Constituição traz à tona tradicional e importante debate sobre sua possibilidade e viabilidade. Seria o caso de normas constitucionais poderem ser declaradas inconstitucionais (BACHOF, 1994)? Embora haja precedentes no STF, a discussão, principalmente teórica, é sempre digna de realce. Saliente-se, em complemento, que a ADIN proposta pela PGR (ADIN nº 5.772) objetiva, também e, paralelamente, a declaração de inconstitucionalidade da Lei nº 13.364/2016, que considerou a prática de vaquejada patrimônio cultural imaterial e da Lei nº 10.220/2001, que qualificou de atleta profissional o peão praticante e participante da vaquejada.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "5",
      },
      {
        idPergunta: "341",
        idCategoriaPergunta: "73",
        title:
          "De acordo com o citado Livro de Otto Bachof, é possível que normas constitucionais sejam declaradas inconstitucionais?",
        content:
          "Sim. Resumidamente, o autor, em linhas gerais, defende a possibilidade de inconstitucionalidade de normas constitucionais e enumera diferentes formas de sua ocorrência. Assim, em se tratando de uma emenda constitucional, manifestação do poder constituinte derivado reformador ou, em outros termos, de uma alteração constitucional, pode-se inferir que a norma já nasce com a qualidade de norma constitucional eficaz. No entanto, simultaneamente, “(...) medida pela norma da Constituição até aí inalterável, seria inconstitucional” (BACHOF, 1994, p. 13). Ainda com relação à hipótese específica e ora abordada neste CENÁRIO, Bachof defende que uma “lei de alteração da Constituição” (nomenclatura aqui aproximada e entendida como “emenda constitucional”) pode infringir a Constituição formal ou materialmente, de modo que a primeira se dá pela inobservância de normas processuais para alteração da Constituição; e a segunda, quando a “lei de alteração” intenta alterar disposições constitucionais de forma a contrariar a “declaração de imodificabilidade” do texto constitucional. Ou seja, em apertada síntese, tem-se uma violação material à Constituição por uma emenda constitucional quando o seu conteúdo contrariar, de alguma maneira, o preconizado e protegido pela Constituição. Ademais e, em conclusão, cumpre lembrar o já exposto neste CENÁRIO, na reposta à indagação logo anterior à presente, no sentido de que no Supremo Tribunal Federal (STF) já houve o reconhecimento da factibilidade do controle de constitucionalidade de emendas constitucionais.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "6",
      },
      {
        idPergunta: "342",
        idCategoriaPergunta: "73",
        title:
          "Onde se encontra prevista a garantia constitucional do direito à cultura?",
        content:
          "É certo e indubitável que a proteção da cultura e do direito dela decorrente encontram farta guarida constitucional. Proteger o patrimônio histórico e cultural de uma país, em suas variadas formas, é não somente direito, mas também dever fundamental de todos. Veja-se, por exemplo, o previsto no Art. 215, caput e parágrafo primeiro, da CRFB: “Art. 215. O Estado garantirá a todos o pleno exercício dos direitos culturais e acesso às fontes da cultura nacional, e apoiará e incentivará a valorização e a difusão das manifestações culturais. § 1º O Estado protegerá as manifestações das culturas populares, indígenas e afro-brasileiras, e das de outros grupos participantes do processo civilizatório nacional”. Entretanto, como já abordado acima, não pode apenas permitir uma defesa do direito à cultura que o faça fomentar o giro de um círculo vicioso de desrespeito de outros direitos fundamentais tão caros e relevantes, o principal dos quais, ligado ao presente CENÁRIO, o direito à vida.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "7",
      },
      {
        idPergunta: "343",
        idCategoriaPergunta: "73",
        title:
          "No que consiste o chamado backlash e teria ocorrido tal fenômeno no caso que envolve a vaquejada, com a atuação, principalmente, de Judiciário e Legislativo em um processo de ação e reação?",
        content:
          'O fenômeno denominado backlash consiste, em linhas gerais e preliminares, em uma reação de parcela da sociedade ou de forças políticas diante de determinada decisão judicial. Segundo Cass Sunstein (SUNSTEIN, 2007, p. 435), o efeito backlash consistiria em "desaprovação pública intensa e sustentada de uma decisão judicial, acompanhada de medidas agressivas para resistir a essa decisão e remover sua força legal." No caso que envolve a vaquejada, o que se percebeu foi uma reação do Poder Legislativo (composto por representantes do povo brasileiro e submetido, por isso mesmo, a pressões internas e externas constantes), por meio da Emenda Constitucional nº 96/2017, no sentido de superar a decisão tomada pelo Plenário do Supremo Tribunal Federal, que determinara a inconstitucionalidade de lei que regulamentava a prática da vaquejada. Por se tratar de relutância do Congresso Nacional (por intermédio de suas 02 Casas Legislativas, recheadas de inúmeros representantes eleitos do povo brasileiro) em aceitar a decisão tomada pela cúpula do Poder Judiciário, inclusive com a adoção de medidas concretas para superá-la, entende-se, sem prejuízo de qualquer abalizada compreensão contrária, que o caso em tela é um exemplo de ocorrência do fenômeno do backlash, ajustado para conceitualmente também conceber alguns fenômenos que incluem reações de algumas específicas instituições.',
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "8",
      },
      {
        idPergunta: "344",
        idCategoriaPergunta: "73",
        title:
          "Qual o central e principal núcleo de disputas, relações e diálogos institucionais presentes no caso deste CENÁRIO?",
        content:
          "Conforme resposta a indagações já presentes neste CENÁRIO, a partir de outubro de 2016 começaram os principais conflitos. O STF, no dia 06 de outubro de 2016, julgou procedente o pedido formulado na ADIN, proposta pela PGR, contra Lei do Estado do Ceará, que regulamentava a prática da vaquejada naquele Estado, o que ocasionou a inconstitucionalidade e consequente proibição da prática formal da vaquejada no país. Apenas 13 dias após tal decisão plenária do STF, o Congresso Nacional reagiu e os parlamentares propuseram Proposta de Emenda à Constituição (PEC) n° 50/2016, tendo como principal objetivo criar exceção ao art. 225, §1°, VII, da CRFB/88, em prol da prática desportiva. Oito meses após a apresentação da PEC, a mesma foi aprovada nos dois turnos de votação, nas duas Casas do Congresso Nacional, sendo, assim, criada a Emenda Constitucional n° 96, de 06 de junho de 2017.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "9",
      },
      {
        idPergunta: "345",
        idCategoriaPergunta: "73",
        title:
          "Quais os desdobramentos centrais e principais das disputas, relações e diálogos institucionais presentes no caso em tela, em continuidade à resposta à pergunta imediatamente anterior do presente CENÁRIO?",
        content:
          "Primeiramente, cabe acrescentar que, durante a votação da PEC e, no cerne dos debates interna corporis, ligados aos grupos de pressão existentes dentro do Congresso Nacional, inúmeros argumentos foram utilizados e alguns deles chamaram a atenção. Um deles foi o que defendia que os animais não teriam serventia (assim como o jumento – animal -, hoje, já se encontraria em tal situação), caso não existisse a vaquejada e que esta seria responsável pela geração de inúmeros empregos, além de fazer parte da cultura nordestina. Também dentro das teses de defesa da prática da vaquejada, houve alegações no sentido de que há presença de médico veterinário no local, além da garantia de água e alimentação para os animais. Sob o prisma desses argumentos, as discussões e embates levavam à conclusão de que os animais serviam apenas para esse propósito e, além disso, dada a tensão que envolveu o debate, de que não existia outra saída para o desenvolvimento econômico da região em caso de extinção da vaquejada. Paralelamente, argumentos contrários vieram à tona, com menção ao fato de que outras alternativas poderiam, muito bem, movimentar a economia regional, como festas, parques de exposições, festivais culturais etc. Ademais, o fim da vaquejada representaria o fim da atividade que é defendida por alguns como um esporte, mas não o fim da cultura nordestina, que vai muito além de tal prática. Nesse caminho de argumentos contrários à prática da vaquejada, também foram utilizados laudos técnicos para comprovação de maus-tratos aos animais envolvidos, assim como foi argumentado que a forma de contenção dos animais, antes mesmo do início provas, já os colocavam em situação de alto estresse. Além do que não existia garantias de que os eventos fossem realmente fiscalizados.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "10",
      },
      {
        idPergunta: "346",
        idCategoriaPergunta: "73",
        title:
          "Ainda na esteira dos desdobramentos dos arranjos institucionais presentes no caso em tela, merecem realce detalhes da votação da PEC nº 50/2016 (e 304/2017) e, paralelamente, detalhes das ADIN’s propostas?",
        content:
          "Sim. Além das linhas argumentativas utilizadas, outro fato que chama bastante atenção é a quantidade de votos, até mesmo superior ao mínimo exigido, para aprovação de uma Proposta de Emenda à Constituição (PEC). A título de curiosidade, teve-se o seguinte número de votos: (a) no Senado Federal (PEC 50/2016) e, em 1° turno: 55 (cinquenta e cinco) votos favoráveis, 8 (oito) votos contrários e 3 (três) abstenções; em 2° turno: 52 (cinquenta e dois) votos favoráveis, 9 (nove) votos contrários e 2 (duas) abstenções; (b) na Câmara dos Deputados (PEC 304/2017): em 1° turno: 366 (trezentos e sessenta e seis) votos favoráveis, 50 (cinquenta) votos contrários e 6 (seis) abstenções; em 2° turno: 373 (trezentos e setenta e três) votos favoráveis, 50 (cinquenta) votos contrários e 6 (seis) abstenções. O protagonismo, atuação e engajamento de parlamentares nordestinos no Congresso Nacional pode ser uma das explicações para o número expressivo de votos a favor da vaquejada, além de para o trâmite tão rápido da votação da PEC, bem como para a rapidez de sua propositura e apresentação. Quanto, finalmente, às já neste CENÁRIO mencionadas 02 ADIN’s propostas contra a referida EC n° 96/2017, saliente-se que uma foi ajuizada pelo Fórum Nacional de Proteção e Defesa Animal (ADIN n° 5.728) e outra pela própria PGR (ADIN n° 5.772). A declaração de inconstitucionalidade de Emendas à Constituição retoma a discussão em torno de se aceitar ou não que normas constitucionais sejam declaradas inconstitucionais, de acordo com o já perscrutado neste CENÁRIO. Além disso, o STF, ao julgar as ADIN’s acima mencionadas pode, até mesmo, praticar um overruling – muito resumidamente, hipótese de mudança de entendimento da Corte que reforma entendimento anterior, normalmente em caminho oposto ao antecedente -, caso reforme tudo que defendeu antes e, repita-se, não dê procedência às duas Ações Diretas de Inconstitucionalidade (ADIN’s) propostas.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "11",
      },
      {
        idPergunta: "347",
        idCategoriaPergunta: "73",
        title:
          "Quais as primeiras considerações finais sobre o todo até aqui apresentado neste CENÁRIO, principalmente no que tange à EC nº 96/2017 e aos chamados diálogos ou “incomunicabilidades” institucionais?",
        content:
          "O que fica claro, em um primeiro momento, é um grande desequilíbrio existente entre as relações e diálogos institucionais presentes no caso deste CENÁRIO. De um lado, a defesa pela vida dos animais (no intuito claro de vedação dos maus-tratos) e, do outro, questões culturais fortemente enraizadas e ligadas a determinadas regiões do país. A Emenda à Constituição (EC) n° 96/2017 não busca ou representa um diálogo com o STF, nem mesmo com os demais atores constitucionais e institucionais, incluindo os cidadãos. Reflete mais uma “incomunicabilidade” que levou a uma reação que pode até significar um embate, mas não, em uma primeira visão, um arranjo dialógico. A situação em foco no presente CENÁRIO poderia ser ideal para ilustrar um quiçá verdadeiro diálogo institucional, por exemplo, entre os Poderes da República brasileira. Mas, infelizmente, a realidade é que mais pareceu e continua parecendo uma sucessão de monólogos ou de concentração de opiniões únicas e não submetidas a um verdadeiro e extenso debate, máxime se levada em conta a pluralidade cultural nacional, as dimensões continentais brasileiras e, com base nisso, a possibilidade de uma bem mais ampla discussão conduzir a conclusões vinculadas a argumentos mais próximos da proteção da vida do que da cultura propriamente dita. O que demonstra que, no Brasil, ainda há muitos passos a serem dados no que se refere, junto com múltiplas outras questões, ao diálogo, comunicação e inter-relação institucionais.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "12",
      },
      {
        idPergunta: "348",
        idCategoriaPergunta: "73",
        title: "Quais as Conclusões?",
        content:
          "Portanto, diante do histórico resumido e recente da problemática que envolve a criação da Emenda Constitucional n° 96, de 06 de junho de 2017, que suscitou e realçou, de um lado, o debate relativo à proteção da cultura e, de outro, o de defesa da vida (inserido nesse espectro o direito ao ambiente e dos animais), é possível aqui concluir – em que pesem outras linhas argumentativas e, por conseguinte, conclusivas merecerem, igualmente, a devida atenção de qualquer estudioso, interessado e/ou pesquisador - que não se pode apenas permitir uma defesa do direito à cultura que faça fomentar o giro de um círculo vicioso de desrespeito de outros direitos fundamentais tão caros e relevantes, o principal dos quais o direito à vida, em seu mais amplo sentido. É preciso preservar sempre e cada vez mais os direitos fundamentais, mas em um chamado círculo virtuoso, com uma permanente valorização da vida e de seu direito, assim como de todos os demais direitos fundamentais que findam, em menor ou maior grau, por estarem diretamente vinculados e ligados entre si, sob o manto maior da tão e por vezes citada vida, nos termos da maneira pela qual foi ela concebida neste CENÁRIO. Noutro viés, é preciso observar que a EC n° 96/2017 consistiu em uma reação do Poder Legislativo para a superação da Decisão tomada pelo Plenário do STF sobre a inconstitucionalidade da regulamentação da prática da vaquejada, caracterizando um processo de ação e reação entendido, no presente CENÁRIO, como um possível e particular exemplo da ocorrência do fenômeno denominado blacklash. Em face da referida Emenda ocorreram inúmeras insurgências sociais e institucionais, incluindo a propositura de 02 ADIN’s. Nesse sentido, cabe destacar que, de acordo com o já mencionado livro de Otto Bachof e precedentes do STF, é possível e viável a declaração de inconstitucionalidade de Emendas à Constituição. Resta saber se haverá algum término nesta “briga”, disputa e embate entre Poderes, pois uma nova declaração de inconstitucionalidade pode levar a uma nova Emenda à Constituição que novamente venha a modificar uma Decisão Plenária do STF. Por fim, restou evidente que a EC n° 96/2017 não objetiva um diálogo com o STF, nem com os demais atores constitucionais, incluindo os cidadãos, trazendo à tona um grande desequilíbrio existente nas relações entre variadas instituições do país, incluindo os três Poderes da Federação brasileira.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "13",
      },
      {
        idPergunta: "349",
        idCategoriaPergunta: "73",
        title:
          "Quais os textos dos dispositivos constitucionais e legais citados neste CENÁRIO?",
        content:
          "Entre outros (alguns já transcritos), transcrevem-se os principais, porque bem diretamente ligados à temática central, mas devendo os demais serem também visitados pelo leitor: 1) Art. 225, § 1º, inciso VII - “Art. 225. Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações. § 1º Para assegurar a efetividade desse direito, incumbe ao Poder Público: (…) VII - proteger a fauna e a flora, vedadas, na forma da lei, as práticas que coloquem em risco sua função ecológica, provoquem a extinção de espécies ou submetam os animais a crueldade”.; 2) Art. 225, § 7º - “§ 7º Para fins do disposto na parte final do inciso VII do § 1º deste artigo, não se consideram cruéis as práticas desportivas que utilizem animais, desde que sejam manifestações culturais, conforme o § 1º do art. 215 desta Constituição Federal, registradas como bem de natureza imaterial integrante do patrimônio cultural brasileiro, devendo ser regulamentadas por lei específica que assegure o bem-estar dos animais envolvidos”.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "14",
      },
      {
        idPergunta: "350",
        idCategoriaPergunta: "73",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.\r\n",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "15",
      },
      {
        idPergunta: "354",
        idCategoriaPergunta: "73",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BACHOF, Otto. Normas Constitucionais Inconstitucionais?. Tradução de José Manuel M. Cardoso da Costa. Coimbra: Livraria Almedina, 1994.; 2) BRANDÃO, Rodrigo. Supremacia Judicial versus Diálogos Constitucionais. 02. ed. Rio de Janeiro: Lumen Juris, 2017.; 3) CANOTILHO, J.J. Gomes. Direito Constitucional e teoria da Constituição. 07. ed. Coimbra: Almedina, 2003.; 4) FREITAS, Ana. O que é a vaquejada. E por que ela foi proibida pelo Supremo. In: NEXO JORNAL, 2017. Disponível on line em: nexojornal.com.br</a>. Acesso em: 21 nov. 2018.; 5) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.; 6) SUNSTEIN, Cass. Backlashs Travels. Harvard Civil Rights-Civil Liberties Law Review, v. 42, 2007.; 7) VERMEULE, Adrian. The system of the Constitution. New York: Oxford University Press, Inc., 2011.; 8) VERMEULE, Adrian. Mechanisms of democracy – Institutional Design Writ Small. New York: Oxford University Press, Inc., 2007.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "16",
      },
      {
        idPergunta: "351",
        idCategoriaPergunta: "73",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 07 out. 2018.; 2) BRASIL. Decisão Judicial proferida pelo Supremo Tribunal Federal (STF) em Ação Direta de Inconstitucionalidade nº 4983. Disponível em: redir.stf.jus.br</a>. Acesso em 30 out. 2018.; 3) BRASIL. Lei do Estado do Ceará nº 15.299, de 15 de janeiro de 2013. Disponível em: al.ce.gov.br</a>. Acesso em: 21 nov. 2018.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "17",
      },
      {
        idPergunta: "352",
        idCategoriaPergunta: "73",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "18",
      },
      {
        idPergunta: "353",
        idCategoriaPergunta: "73",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre Constituição e instituições: VERMEULE, Adrian. The Constitution of Risk. Cambridge: Cambridge University Press, 2013.; 2) Sobre efeito backlash e a EC-96/2017: FREIRE, Karina Abreu; LEMOS, Victor Hugo Pacheco. O efeito backlash como instrumento de estruturas de poder conservadoras e o desafio à supremacia judicial: a reação legislativa na regulamentação da vaquejada. In: Sociologia jurídica contra dogmática? Pontos de convergência. Anais VII Congresso da AbraSD: Ceará, 2017, p. 380 – 400.",
        idCategoria: "73",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o Direito à Vida",
        ordemCategoriaPai: "400",
        ordemCategoria: "408",
        ordemPergunta: "19",
      },
    ],
  };

  const cenario8 = {
    rows: [
      {
        idPergunta: "367",
        idCategoriaPergunta: "75",
        title: "Quais as Considerações Iniciais?",
        content:
          "A Constituição de 1988 (CRFB) prevê hipóteses do que se chama estados de exceção. Mais especificamente, principalmente “estado de defesa” e “estado de sítio” integram as hipóteses constitucionais de estado de exceção, mas também acompanhadas pela igualmente importante figura da “intervenção federal”. Em 2018, o Brasil vivenciou 02 (dois) casos de decretação oficial, pela Presidência da República, de intervenção federal: (a) uma, no início do ano, com extensão limitada à área de segurança pública, no Estado do Rio de Janeiro, e (b) outra, já em dezembro de 2018, no Estado de Roraima, mas sem delimitação de extensão, ou seja, qualquer delimitação de área ou setor de incidência. Assim, enquanto no Estado do Rio de Janeiro o Governador do Estado foi mantido para a governança de área que não a da segurança, no Estado de Roraima, foi nomeado um interventor que substituiu, integralmente, a até então Governadora do Estado. E, em ambos os casos, o Decreto Presidencial de intervenção estabeleceu o limite temporal até 31.12.2018. Mas, neste contexto de grande excepcionalidade, uma vez que, pelo menos, desde 1988 nunca houve, no país, a decretação de 02 (duas) intervenções federais simultâneas, há como se trazer à tona semelhanças e diferenças entre as 02 (duas)? É o que neste CENÁRIO tentar-se-á demonstrar.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "1",
      },
      {
        idPergunta: "368",
        idCategoriaPergunta: "75",
        title:
          "Quais os casos de “estado de exceção” previstos na Constituição de 1988 (CRFB), que não o da “intervenção federal”?",
        content:
          "Em um primeiro momento, os “estados constitucionais de exceção” são o estado de defesa, o estado de sítio e a intervenção federal. Muito embora o foco deste CENÁRIO recaia sobre a intervenção federal, cabem breves explicações sobre estado de defesa e estado de sítio, conforme previsto na indagação feita. O estado de defesa, previsto no Art. 136 da CRFB, pode ser decretado pelo Chefe do Poder Executivo Nacional, após oitiva dos Conselhos da República e de Defesa Nacional, em casos de ameaça à ordem pública ou à paz social, em casos de instabilidade institucional ou, ainda, em casos de calamidade natural. Nos termos do Art. 84, inciso IX, da CRFB, a referida decretação é de competência privativa do Presidente da República, assim como no caso de estado de sítio. Com pareceres positivos dos citados Conselhos, o Decreto entra em vigor, mas devendo ser submetido, no prazo de 24 (vinte e quatro) horas, ao Congresso Nacional, o qual terá o prazo de 10 (dez) dias para apreciação do Decreto. Além disso, o estado de defesa é comumente destinado e direcionado para locais restritos e determinados dentro do território nacional, com validade de 30 (trinta) dias, prorrogáveis, uma única vez, por igual período. Por fim, nestas breves considerações, acrescente-se que, sob a vigência de estado de defesa, alguns direitos fundamentais podem ficar suspensos, tais como, por exemplo, os previstos no Art. 5º, incisos XII, XVI e LXI. O inciso XII do Art. 5º, ilustrativamente, versa sobre o sigilo das comunicações telegráficas, de dados bancários e fiscais, além de sobre o sigilo das comunicações telefônicas. Por sua vez, o estado de sítio, previsto nos Arts. 137 e seguintes da CRFB, pode ser decretado pelo Presidente da República, após ouvidos os mesmos Conselhos da República e de Defesa Nacional, além de, entretanto, depois de autorização do Congresso Nacional, decorrente de ato formal de solicitação do Chefe do Poder Executivo nacional ao Poder Legislativo. Em outras palavras, no caso do estado de sítio, há uma espécie de controle político prévio, sem o qual o Presidente da República pode não ser autorizado pelo Congresso Nacional a decretar o estado de sítio. Além disso, as hipóteses que dão ensejo à possibilidade de sua decretação são as situações de grande comoção nacional, de declaração de guerra, de resposta a uma agressão armada estrangeira ou de ineficácia do estado de defesa eventual e anteriormente decretado. A competência para decretação é idêntica à do estado de defesa, com base em mesmo fundamento e o prazo de sua vigência também é de 30 (trinta) dias. Contudo, as possibilidades de renovação ou prorrogação não possuem limitações. Enquanto perdurarem as causas que deram ensejo à decretação do estado de sítio, o mesmo, a cada 30 (trinta) dias, pode ser renovado. Por fim, imprescindível ressaltar que o estão de sítio também pode levar a restrições a direitos fundamentais, entretanto mais intensas se comparadas ao estado de defesa. Por exemplo, os direitos elencados no Art. 5º, incisos XI, XII, XVI, XXV, LXI, todos da CRFB, assim como as liberdades de imprensa e manifestação de pensamentos estampadas no Art. 220 da CRFB podem ser suspensos sob a vigência do estado de sítio, o qual, ressalte-se, possuirá abrangência nacional e, não, local, como no caso do estado de defesa.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "2",
      },
      {
        idPergunta: "369",
        idCategoriaPergunta: "75",
        title:
          "Quais os principais desdobramentos jurídico-constitucionais da decretação formal e oficial de um estado de exceção?",
        content:
          "Primeiramente, conforme já salientado na resposta à pergunta anterior, a possibilidade de suspensão de direitos fundamentais, em menor ou maior grau, a depender do tipo de estado de exceção decretado, é um desdobramento altamente relevante. E, entre outros, imperioso ressaltar que, no termos do Art. 60, § 1º, da CRFB, “a Constituição não poderá ser emendada na vigência de intervenção federal, de estado de defesa ou de estado de sítio”. Ou seja, não podem haver alterações ao texto constitucional quando estiver vigente qualquer um dos casos de estados de exceção constitucionais.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "3",
      },
      {
        idPergunta: "370",
        idCategoriaPergunta: "75",
        title:
          "De modo inicial, o que é a “intervenção federal” e quais as suas causas ensejadoras, nos moldes do previsto na CRFB?",
        content:
          "A “intervenção federal” consiste em uma medida extraordinária e excepcional que afasta, de modo temporário, a autonomia do ente federativo brasileiro que sofre a referida medida, com o escopo de preservar o pacto federativo nacional. A União intervirá nos Estados e Distrito Federal, nas hipóteses taxativas previstas no Art. 34 da CRFB, e nos Municípios localizados em Território Federal (Art. 35 da CRFB). Além disso, os Estados poderão intervir nos Municípios (Art. 35 da CRFB). Além do afastamento da autonomia do ente federativo, outra consequência da intervenção federal é a impossibilidade da Carta Magna brasileira sofrer qualquer Emenda durante a vigência de uma intervenção federal (art. 60, § 1º, da CRFB). E, a título meramente inicial dentro do presente CENÁRIO, vale salientar que compete privativamente ao Presidente da República a decretação da intervenção federal, por meio do “Decreto Interventivo”, conforme disposto no Art. 84, inciso X, da CRFB. E tal Decreto Interventivo deverá conter (Art. 36, §1º, da CRFB): (1) a amplitude da intervenção; (2) o seu prazo; (3) as condições de execução; e, somente se necessário, (4) a nomeação de interventor, com a especificação de suas funções.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "4",
      },
      {
        idPergunta: "371",
        idCategoriaPergunta: "75",
        title:
          'Do ponto de vista teórico e a partir do exame dos dispositivos constitucionais brasileiros, existem classificações ligadas à "intervenção federal"?',
        content:
          "A referida intervenção pode ser classificada como (A) “espontânea” (Art. 34, incisos I a III e V, da CRFB), quando o próprio Presidente verifica a ocorrência de alguma das situações nos incisos supramencionados, caso em que, antes da intervenção, deve consultar o Conselho da República e o Conselho de Defesa Nacional (uma espécie de controle preventivo exercido por tais Conselhos, apesar de não estar o Presidente vinculado aos posicionamentos dos Conselhos). Ou, também, classificada como (B) “provocada”, situação que pode ocorrer mediante (1) “solicitação” (Art. 34, inciso IV da CRFB), para defesa do livre exercício dos Poderes da República, ou (2) “requisição” (Art. 34, incisos VI e VII da CRFB), que poderá ser concretizada pelo Supremo Tribunal Federal (STF), Superior Tribunal de Justiça (STJ) ou pelo Tribunal Superior Eleitoral (TSE).",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "5",
      },
      {
        idPergunta: "372",
        idCategoriaPergunta: "75",
        title: "Está a “intervenção federal” sujeita a algum tipo de controle?",
        content:
          "A intervenção federal, apesar de ser um ato preponderantemente considerado e classificado como político, pode sofrer controle dos Poderes Legislativo e Judiciário, com realce para os controles prévio (já mencionado e explanado na resposta à indagação anterior deste CENÁRIO) e repressivo. No que diz respeito ao segundo tipo de controle, cumpre destacar o “procedimento” da medida de intervenção, eis que o Decreto Interventivo deverá ser submetido ao Congresso Nacional em um prazo de 24 horas (votação realizada em um turno e com aprovação por maioria simples, devendo estar presente a maioria absoluta dos membros das Casas Legislativas), conforme estabelece o Art. 36, §§ 1º, parte final, e 2º da CRFB. Depois da aprovação, será gerado um Decreto Legislativo, promulgado pelo Presidente do Senado Federal. Entretanto, vale ressaltar que o controle repressivo não se mostrará presente somente nesse primeiro momento; a qualquer tempo, o Congresso Nacional pode suspender a medida de intervenção, por entender que a mesma não se faz mais necessária. Esse procedimento é dispensado nas hipóteses do Art. 34, incisos VI e VII da CRFB (casos de requisição do Poder Judiciário), por se tratar do caso de “Ação Direta de Inconstitucionalidade Interventiva”, conforme a seguir, neste mesmo CENÁRIO, melhor se explanará. E, exatamente no caso da apenas referida Ação, o supramencionado controle repressivo, via de regra, não ocorrerá. Por fim, de acordo com o que mais adiante ver-se-á, em resposta à indagação formulada neste mesmo CENÁRIO, conforme estatui o Art. 36 da CRFB, cessados os motivos que deram causa à intervenção federal, as autoridades que foram afastadas de seus cargos a estes voltarão, salvo algum impedimento legal.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "6",
      },
      {
        idPergunta: "373",
        idCategoriaPergunta: "75",
        title:
          "A “intervenção federal” possui princípios norteadores? E, se sim, quais seriam eles?",
        content:
          "Entre outros que podem ser eventual e naturalmente citados, são princípios que norteiam a intervenção federal: (1) temporariedade; (2) excepcionalidade (ou não intervenção); e (3) proporcionalidade. Vale sempre lembrar que a intervenção federal é uma categoria e espécie do gênero “estado de exceção”. Por isso, não pode ser “permanente” e os atos decorrentes da intervenção federal não podem, de modo algum, descambar para o que, ainda que com um grau de indeterminação, aqui se denomina “desproporcionalidade”.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "7",
      },
      {
        idPergunta: "374",
        idCategoriaPergunta: "75",
        title: "O que são os “princípios constitucionais sensíveis”?",
        content:
          "Em linhas gerais, “princípios constitucionais sensíveis” são aqueles cuja violação pode deflagrar a intervenção federal. Segundo Gilmar Ferreira Mendes (conferir referência bibliográfica deste CENÁRIO), tais princípios “visam assegurar uma unidade de princípios organizativos tida como indispensável para a identidade jurídica da Federação, não obstante a autonomia dos Estados-membros para se auto-organizarem”. Referidos princípios estão dispostos no artigo 34, inciso VII da CRFB. São eles: a) forma republicana, sistema representativo e regime democrático; b) direitos da pessoa humana; c) autonomia municipal; d) prestação de contas da administração pública, direta e indireta; e) aplicação do mínimo exigido da receita resultante de impostos estaduais, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde. No que tange ao vocábulo “sensível”, José Afonso da Silva (conferir referência bibliográfica deste CENÁRIO) explica que tal adjetivo se refere à circunstância de estarem os princípios nitidamente dispostos na Constituição e também tem o sentido de “coisa dotada de sensibilidade que, em sendo contrariada, provoca reação, e esta, no caso, é a intervenção nos Estados”.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "8",
      },
      {
        idPergunta: "375",
        idCategoriaPergunta: "75",
        title:
          "De modo geral, o que é, como surgiu e quais as principais bases teóricas da “Ação Direta de Inconstitucionalidade Interventiva” e qual a sua relação com a intervenção federal?",
        content:
          "Também conhecida como “representação interventiva”, o controle de constitucionalidade da intervenção federal surgiu em um regime jurídico nacional a partir da Constituição de 1934, em seu Art. 12, §2º. A partir da Constituição de 1946, o Procurador Geral da República (PGR) ganhou competência para impugnar a constitucionalidade de atos locais por violação aos “princípios constitucionais sensíveis”, sendo da competência do Supremo Tribunal Federal o respectivo julgamento da referida impugnação. Referindo-se ao momento atual, ao tratar da organização do Estado brasileiro, a CRFB determina que a organização político-administrativa compreende todos os entes federativos, ou seja, União, Estados-membros, Distrito Federal e Municípios, todos autônomos. A autonomia é a regra, porém, a própria Constituição, nos 07 (sete) incisos do art. 34, prevê os casos nos quais poderá ocorrer a intervenção da União nos Estados e no Distrito Federal. E, em uma das situações previstas no citado Art. 34, a “Ação Direta de Inconstitucionalidade Interventiva” apresenta-se como um dos pressupostos para a decretação da intervenção federal ou estadual, pelos Chefes do Executivo, Presidente da República (Art. 34 da CRFB/88) ou Governador de Estado (artigo 35 da CRFB). Assim, em uma das possibilidades de decretação da intervenção federal, a do artigo 34, inciso VII da CRFB, para a defesa e observância dos princípios constitucionais sensíveis já elencados na resposta à indagação anterior deste CENÁRIO, pode surgir causa a ensejar a propositura da “Ação Direta de Inconstitucionalidade Interventiva”. Reforce-se que os “princípios constitucionais sensíveis” são assim chamados em razão de eventual não observância poder acarretar a intervenção federal sobre a autonomia política do Estado ou Distrito Federal que exercer mal suas competências legislativas, administrativas ou tributárias. Desta forma, quaisquer leis ou atos normativos do Poder Público, na realização de sua competência constitucional, que violem um dos “princípios constitucionais sensíveis”, poderão sofrer controle concentrado de constitucionalidade, por meio da resumidamente e também chamada, “ação direta interventiva”. Nessa modalidade de procedimento, o único com legitimidade ativa para a propositura da representação interventiva é o Procurador-Geral da República (se federal) e o Procurador-Geral de Justiça (se estadual) (artigo 129, inciso IV, da CRFB). Quem decreta a intervenção é o chefe do Poder Executivo (federal ou estadual) e o Poder Judiciário, por sua vez, exerce o controle da ordem constitucional do caso concreto que lhe é submetido à análise.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "9",
      },
      {
        idPergunta: "376",
        idCategoriaPergunta: "75",
        title:
          "Mais especificamente, qual a dinâmica procedimental da “Ação Direta Interventiva” no âmbito federal?",
        content:
          "No âmbito federal, alvo central do exame realizado neste CENÁRIO, de acordo com Pedro Lenza (conferir referência bibliográfica deste CENÁRIO), o processamento será dividido em três fases. Na primeira fase (1), após proposta a Ação pelo Procurador-Geral da República, no STF, quando a lei ou o ato normativo estadual (ou distrital de natureza estadual) contrariar os princípios sensíveis da CRFB, buscar-se-á a solução administrativa. Não sendo o caso, nem o de arquivamento, serão solicitadas informações às autoridades estaduais ou distritais responsáveis e ouvido o Procurador-Geral da República, sendo, então, o pedido relatado e levado a julgamento. Julgado procedente o pedido (com a exigência de quórum de maioria absoluta), o Presidente do STF imediatamente comunicará a decisão aos órgãos do Poder Público interessados e requisitará a intervenção ao Presidente da República, que, por se tratar de requisição e, não, de mera solicitação, não poderá descumprir a ordem mandamental, sob pena de cometimento tanto de crime comum, quanto de crime de responsabilidade, inaugurando-se, assim, a fase dois do procedimento. Na segunda fase (2), o Presidente da República, por meio de decreto, limitar-se-á a suspender a execução do ato impugnado (Art. 36, §3°, da CRFB), se essa medida bastar para o restabelecimento da normalidade. Nessa fase não haverá o controle político por parte do Congresso Nacional. Por último, na fase três (3), não sendo suficiente apenas a decisão de suspender o ato normativo para o restabelecimento da normalidade, o Presidente da República decretará a efetiva intervenção no Estado ou Distrito Federal, executando-a, com a nomeação de interventor, se for o caso, quando deverão ser afastadas as autoridades responsáveis de seus respectivos cargos. Por fim, é sempre importante ressaltar, cessados os motivos que deram causa à intervenção, as autoridades afastadas, se não houver impedimento legal, voltarão aos seus cargos.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "10",
      },
      {
        idPergunta: "377",
        idCategoriaPergunta: "75",
        title:
          "Quais as principais finalidades da “Ação Direta Interventiva” no âmbito federal?",
        content:
          "A “Ação Direta Interventiva” tem dupla finalidade, ou seja, objetiva a (a) declaração de inconstitucionalidade da lei ou do ato normativo estadual ou distrital (de natureza estadual) e a (b) decretação de intervenção federal no Estado-membro ou no Distrito Federal. Segundo o Ministro do STF, Alexandre de Moraes (conferir referência bibliográfica deste CENÁRIO), a primeira delas seria de natureza jurídica e a última de natureza política. Moraes, nessa linha, explica os efeitos jurídicos da “Ação Direta Interventiva” como sendo decorrentes de sua dupla finalidade. Assim, no referido sentido jurídico, a lei ou o ato normativo inconstitucional será nulo e excluído da ordem jurídica com os efeitos retroativos e de observância obrigatória por todos. Já politicamente, a declaração de inconstitucionalidade gera efeitos políticos consistentes na possibilidade de intervenção federal em um Estado-membro ou no Distrito Federal.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "11",
      },
      {
        idPergunta: "378",
        idCategoriaPergunta: "75",
        title:
          "Comparando-se, em breve exame, as 02 (duas) intervenções federais decretadas no ano de 2018, quais as mais salientes semelhanças e diferenças?",
        content:
          "A intervenção federal no Estado do Rio de Janeiro, decretada em 16 de fevereiro de 2018 (Decreto nº 9.288) pelo Presidente da República Michel Temer e com término ocorrido em 31 de dezembro daquele ano, limitou-se à área de segurança pública. A medida teve como justificativa uma forma de intensificação no combate ao crime organizado que vinha avançando no Estado, principalmente após a ocorrência de variados tipos de atos criminosos (tais como os coloquialmente chamados “arrastões”) durante o feriado de Carnaval do ano de 2018. Tratou-se da primeira intervenção federal decretada desde a promulgação da Constituição da República de 1988. Cumpre, outrossim, apontar que o Estado do Rio de Janeiro, antes da decretação da intervenção federal, já havia sido auxiliado pela União na área da segurança pública, por meio de operações de Garantia da Lei e da Ordem (GLO) e do emprego da denominada Força Nacional. Uma peculiaridade da intervenção no Estado do Rio de Janeiro é a expressa menção à natureza militar do cargo de interventor no artigo segundo, parágrafo único, do referido Decreto. Cargo este que foi confiado ao General de Exército Walter Souza Braga Netto. A intervenção federal no Estado de Roraima, por seu turno, iniciada com a publicação do Decreto nº 9.602, em 10 de dezembro de 2018, deu-se em virtude, principalmente, de alegação de crise social enfrentada pelo referido Estado, devido à chegada em massa de venezuelanos e, também, de crise no sistema prisional do Estado. Da mesma forma que o Decreto nº 9.288 de 2018 (que decretou a intervenção no Estado do Rio de Janeiro), o referido Decreto nº 9.602/18 previu a duração da intervenção até 31 de dezembro de 2018. Ponto que merece destaque foi a nomeação do Governador então eleito para o Estado de Roraima, Antonio Oliverio Garcia de Almeida (ressalte-se, apenas 20 – vinte – dias antes de sua posse como Governador daquele Estado), para o cargo de interventor (Art. 2º do Decreto 9.602/18), e o consequente afastamento da então Governadora, Suely Campos. Outra peculiaridade é a descrição, no Art. 3º do citado Decreto 9.602, das atribuições do interventor, que seriam as mesmas previstas para o Governador do Estado de Roraima; diferentemente do Decreto de intervenção no Estado do Rio de Janeiro, que se limitou a destacar que a função de interventor possuiria natureza militar e referente à área de segurança pública. Por conseguinte, há que se ressaltar que a intervenção federal no Estado de Roraima, diferentemente da do Estado do Rio de Janeiro, foi integral, isto é, não atingiu somente uma área específica (como a de segurança pública, no Estado do Rio de Janeiro); de modo que, no Rio de Janeiro, o então Governador do Estado, Luiz Fernando Pezão, continuou a exercer com autonomia suas funções de Governador, com exceção para a área de segurança pública, ao contrário do ocorrido com a Governadora Suely Campos, que foi afastada do cargo.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "12",
      },
      {
        idPergunta: "379",
        idCategoriaPergunta: "75",
        title: "Quais as Conclusões?",
        content:
          'Sucintamente e a título de conclusão, é sempre fundamental lembrar que a decretação dos estados de exceção previstos na CRFB somente deve ocorrer em hipóteses realmente excepcionais, conforme reforçado pela utilização da palavra "exceção". A partir do momento em que, suposta e eventualmente, uma excepcionalidade se torna permanente, deixa de ser exceção e passa a ser considerada regra. No ano de 2018, o Brasil vivenciou situação distinta, sobretudo se levada em conta a história nacional pós-Constituição de 1988. Foram decretadas 02 (duas) intervenções federais, em épocas e em Estados distintos da Federação brasileira. Rio de Janeiro e Roraima, cada qual com intervenções com características particulares, foram alvo da excepcionalidade constitucional. Exatamente por isso, portanto, o presente CENÁRIO voltou-se a um enfrentamento não somente do instituto da “intervenção federal” e de seus vários desdobramentos e possibilidades, mas também de uma, ainda que breve e com viés técnico-jurídico, comparação entre as intervenções federais decretadas. ',
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "13",
      },
      {
        idPergunta: "380",
        idCategoriaPergunta: "75",
        title: "Quais os textos dos dispositivos legais citados neste CENÁRIO?",
        content:
          "Dada a grande quantidade e, se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais citados neste CENÁRIO.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "14",
      },
      {
        idPergunta: "381",
        idCategoriaPergunta: "75",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "15",
      },
      {
        idPergunta: "382",
        idCategoriaPergunta: "75",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BARROSO, Luis Roberto. O controle de constitucionalidade no Direito brasileiro. São Paulo: Editora Saraiva, 2004.; 2) BERCOVICI, Gilberto. Constituição e Estado de Exceção permanente: atualidade de Weimar. Rio de Janeiro: Azougue Editorial, 2004.; 3) BONIZZATO, Luigi. A Constituição Urbanística e elementos para elaboração de uma teoria do Direito Constitucional Urbanístico. Rio de Janeiro: Editora Lumen Juris, 2010.; 4) LENZA, Pedro. Direito constitucional esquematizado. 18. ed. São Paulo: Saraiva, 2014.; 5) MENDES, Gilmar Ferreira; BRANCO, Paulo Gustavo Gonet. Curso de Direito Constitucional. 09. ed. São Paulo: Saraiva, 2014.; 6) MORAES, Alexandre de. Constituição do Brasil Interpretada e Legislação Constitucional, 04. ed. São Paulo: Atlas, 2004.; 7) POSNER, Eric A., VERMEULE, Adrian. Terror in the balance: security, liberty, and the Courts. New York: Oxford University Press, Inc., 2007.; 8) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.; 9) SILVA, José Afonso da. Curso de direito constitucional positivo. São Paulo: Malheiros, 1992, p. 520 -521.; 10) SUNSTEIN, Cass R. Why Groups Go To Extremes. Washington, DC: American Enterprise Institute, 2008.; 11) VALIM, Rafael. Estado de exceção: a forma jurídica do neoliberalismo. São Paulo: Editora Contracorrente, 2017.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "16",
      },
      {
        idPergunta: "383",
        idCategoriaPergunta: "75",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 31 dez. 2018.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "17",
      },
      {
        idPergunta: "384",
        idCategoriaPergunta: "75",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "18",
      },
      {
        idPergunta: "385",
        idCategoriaPergunta: "75",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "Em ordem alfabética: 1) Sobre Estado de Exceção: AGAMBEN, Giorgio. Estado de Exceção. Tradução de Iraci D. Poleti. São Paulo: Boitempo, 2004.; 2) Sobre estados de exceção constitucionais na CRFB: BONIZZATO, Luigi, REIS, José Carlos Vasconcellos dos. Direito Constitucional: questões clássicas, contemporâneas e críticas: atualizada e ampliada nos 30 anos da Constituição de 1988. 02. ed. Rio de Janeiro: Editora Lumen Juris, 2018.; 3) Sobre Intervenção Federal: LEWANDOWSKI, Enrique Ricardo. Pressupostos materiais e formais da intervenção federal no Brasil. 02. ed. Belo Horizonte: Editora Fórum, 2018.",
        idCategoria: "75",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções federais em menos de 01 (um) ano?",
        ordemCategoriaPai: "400",
        ordemCategoria: "409",
        ordemPergunta: "19",
      },
    ],
  };
  const cenario9 = {
    rows: [
      {
        idPergunta: "386",
        idCategoriaPergunta: "76",
        title: "Quais as Considerações Iniciais?",
        content:
          "A Constituição de 1988 (CRFB), elaborada em circunstâncias redemocratizantes e pós-ditatoriais, foi compromissória, nos clássicos dizeres de José Eduardo Faria e, portanto, sujeita a uma série de interesses de grupos sociais quando de seu processo de elaboração. Tal fato se traduz em uma negatividade, por um lado, tendo em vista que a conformação e maior homogeneidade das normas constitucionais e do ordenamento jurídico brasileiro tornaram-se complexas. Mas, por outro lado, uma incontestável riqueza de normas jurídicas invadiram o texto constitucional, o qual foi e ainda é, por vezes, chamado de contraditório, entretanto recheado de novas possibilidades, até então ainda não vistas na história do país. Afinal de contas, muitas categorias de assuntos foram elevadas à esfera constitucional, algo que, com o tempo, pôde ser melhor visualizado e valorizado por toda sociedade e comunidade jurídica nacional, sobretudo em razão de normas constitucionais serem hierarquicamente superiores a todas as outras existentes no Brasil. Nesse contexto, os Artigos 182 e 183 da CRFB lideraram e lideram, até hoje, em matéria urbanística e da ordem urbana, o que acima se colocou. Nenhuma Constituição brasileira havia, até então, dado tanta importância a tais matérias, e a sua constitucionalização findou por proporcionar a criação de uma série de leis e de uma verdadeira ordem urbanística interna, ainda em permanente construção. E tal construção conduziu, por exemplo, à criação de leis infraconstitucionais complementadoras, a principal das quais o Estatuto da Cidade, que é um marco legislativo em matéria urbanística, mas com naturais virtudes e mazelas. Algumas a serem aqui examinadas, pois ligadas à eficácia direta de suas normas.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "1",
      },
      {
        idPergunta: "387",
        idCategoriaPergunta: "76",
        title: "O que é o Estatuto da Cidade?",
        content:
          "Em considerações iniciais, o Estatuto da Cidade é uma lei complementadora da CRFB, especificamente dos Artigos 182 e 183, mas, se examinada de forma mais ampla e aqui reputada correta, também de uma série de outros dispositivos constitucionais que, de modo mais ou menos direto, versam sobre relevantes questões urbanas. Os Artigos 30 (este que trata de competências, principalmente, legislativas, dos municípios brasileiros) e 6º (que traz o rol de direitos sociais previstos na CRFB), são claros exemplos, entre tantos outros, da extensão da lei complementadora constitucional sobre matéria preponderantemente urbanística. E, vale lembrar, o Estatuto da Cidade foi trazido pela Lei 10.257, de 10 de julho de 2001.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "2",
      },
      {
        idPergunta: "388",
        idCategoriaPergunta: "76",
        title: "Qual a natureza jurídica do Estatuto da Cidade?",
        content:
          "Entre variadas concepções, aqui se simplifica e estabelece que o referido Estatuto é uma lei ordinária, federal e de eficácia nacional, vinculando, portanto, todas as demais normas estaduais e municipais brasileiras. Planos urbanísticos, dos quais o Plano Diretor é o mais conhecido, assim como leis estaduais e municipais, além de decretos executivos sobre matéria urbanística, devem incondicional respeito ao Estatuto da Cidade. Além de, de acordo com o entendimento proferido neste CENÁRIO, também as Constituições Estaduais e Leis Orgânicas municipais. Nesse sentido vale ilustrar que o Estatuto da Cidade é uma lei ordinária que forma uma cadeia (ressalte-se, desde já, uma cadeia formada por, no mínimo: CRFB, Estatuto da Cidade, Estatuto da Metrópole e Constituições Estaduais, Leis Orgânicas municipais, Plano Diretor, leis municipais e decretos executivos), normativa urbanística de suma relevância para o país.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "3",
      },
      {
        idPergunta: "389",
        idCategoriaPergunta: "76",
        title: "Em linhas gerais, o que é o Plano Diretor?",
        content:
          "Trata-se de um plano urbanístico. E, no Brasil, mesmo após a recente criação do Plano de Desenvolvimento Urbano Integrado (PDUI) por outra e mais recente Lei denominada Estatuto da Metrópole, o Plano Diretor continua a ser o plano urbanístico aqui chamado por excelência. Até porque é o único expressa e claramente previsto na própria CRFB. O Plano Diretor, a ser elaborado pelos municípios brasileiros, de acordo com os requisitos e exigências contidos tanto na CRFB, quanto no próprio Estatuto da Cidade, é uma lei neste CENÁRIO entendida como geral e específica. Específica se considerado e visualizado todo território nacional, em que cada município é obrigado a criar seu Plano Diretor, nele trará peculiaridades, particularidades e, então, especificidades locais, municipais e ligadas somente, por corolário, ao respectivo município que o criou. Geral porque, recortado o olhar e visualizado somente um município, o Plano Diretor trará normas que dizem respeito somente àquele, ou seja, o correspondente município que o criou. Um aparente paradoxo (lei geral e específica), mas com as explicações e soluções logo acima expostas.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "4",
      },
      {
        idPergunta: "390",
        idCategoriaPergunta: "76",
        title: "Para que serve o Plano Diretor?",
        content:
          "Também em linhas gerais, o Plano Diretor tem por objetivo mais direto a chamada ordenação do território municipal e, com a soma de praticamente a maioria dos municípios brasileiros, a ordenação territorial brasileira. É certo que cada município elabora o seu Plano Diretor, que pode ter funções e objetivos diversos de outros Planos Diretores, inclusive de municípios limítrofes. Mas assim decidiu o legislador constituinte originário, valorizando a figura do terceiro grau federativo brasileiro. Concomitantemente, é fundamental salientar que a chegada do Estatuto da Metrópole, em 2015, trouxe o já citado PDUI, o qual, apesar de não ser agora objeto de tratamento específico, trouxe a possibilidade de grande avanço em matéria de conexão de Planos Diretores dentro de um Estado da Federação brasileira, já que em regiões metropolitanas os Planos Diretores deverão respeitar o contido nos respectivos PDUI’s, de competência criadora dos Estados brasileiros. Assim, se um diálogo entre instituições municipais sempre se mostrou importante no processo de elaboração de Planos Diretores, máxime em regiões metropolitanas, apesar de muito pouco ou quase nunca terem ocorrido, os PDUI’s chegaram para fomentar e propiciar tal comunicação institucional. Por fim, vale dizer que, para além do objetivo de ordenação territorial, os Planos Diretores findam por trazer e reforçar, entre outras, normas de cunho social, ordem urbanística e civil, objetivando a criação de uma verdadeira ordem urbana, no sentido mais amplo da expressão, no âmbito municipal. E tudo em prol de objetivos constitucionais e até princípios de Direito Urbanístico, tais como os da função social da propriedade urbana, o da qualidade de vida, o do bem-estar social, o da sustentabilidade, entre alguns outros.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "5",
      },
      {
        idPergunta: "391",
        idCategoriaPergunta: "76",
        title:
          "Os Planos Diretores são de criação obrigatória por todos os mais de 5.500 (cinco mil e quinhentos) municípios brasileiros?",
        content:
          "Não. Nos termos do Art. 182, § 1º, da CRFB, o Plano Diretor deve ser obrigatoriamente elaborado por municípios com mais de 20 (vinte) mil habitantes. 13 (treze) anos após a entrada em vigor da CRFB, com a chegada do Estatuto da Cidade, seu Art. 41 reforçou a previsão constitucional e ampliou o rol de obrigatoriedades de elaboração do Plano Diretor. Assim, por exemplo, mesmo que um município não possua 20 (vinte) mil habitantes, se integrar uma área de especial interesse turístico ou uma área de especial interesse ambiental, entre outras exigências contidas no referido Art. 41 do Estatuto da Cidade, tornar-se-á obrigado a criar um Plano Diretor. Tal extensão de obrigatoriedades prevista no Estatuto da Cidade não é entendida como inconstitucional, em razão do entendimento segundo o qual o Plano Diretor é algo considerado extremamente positivo e até imprescindível para qualquer município brasileiro, a reforçar princípios de Direito Urbanístico (muitos já aqui citados) e de outros ramos do Direito e proporcionar a construção de condições para uma maior qualidade de vida e bem-estar social no Brasil.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "6",
      },
      {
        idPergunta: "392",
        idCategoriaPergunta: "76",
        title:
          "Qual a ideia central ligada à eficácia ou não do Estatuto da Cidade?",
        content:
          "Finalmente se chegando ao cerne deste CENÁRIO, por que se questiona sobre a eficácia ou não do Estatuto da Cidade? Exatamente porque, (a) em primeiro lugar, não se pode negar que o Estatuto da Cidade, apesar de ter ainda um longo caminho a percorrer para que consiga o aprimoramento aplicacional de suas normas, findou por modificar o pensamento, a lógica e as relações institucionais urbanísticas e ligadas a uma ordem urbana e civil no país. Antes dele, a própria figura não somente do Plano Diretor, o qual já havia sido fortificado com a previsão constitucional, mas também de vários instrumentos e institutos de política urbana, mostravam-se bem mais espalhadas e desuniformes no território brasileiro. Com a chegada do Estatuto da Cidade, criaram-se as condições legislativas para uma unificação de todos estes institutos, razão pela qual neste APP se afirma ser o Estatuto da Cidade um verdadeiro marco legislativo em matéria, pelo menos, urbanística. E os instrumentos e institutos de política urbana a que se fez apenas menção são vários: direito de preempção, outorga onerosa do direito de construir (antigamente denominado solo criado), operação urbana consorciada, estudo prévio de impacto de vizinhança etc. Enfim e, (b) em segundo lugar, muito embora o dito acima represente, sim, uma aplicabilidade das normas contidas no Estatuto e deste como um todo, a formação estrutural legislativa do Estatuto da Cidade, com relação a muitos instrumentos e institutos de política urbana por ele trazidos, apenas estendeu uma inaplicabilidade imediata começada na própria CRFB, mais precisamente no caput do seu Art. 182. Isto porque, ao se ler Artigos do Estatuto da Cidade percebe-se, com intensa frequência, frases como a seguinte (criação ilustrativa): “lei municipal baseada no Plano Diretor definirá os parâmetros para a utilização de determinado instituto”. Ora, previsões como esta, findaram por impedir que a riqueza estatutária pudesse ser rápida, imediata e diretamente usufruída. Pois, primeiro, o município desejador de usar um instituto ou instrumento de política urbana previsto no Estatuto da Cidade precisa criar seu Plano Diretor (algo que os mais de 17 anos de vigência do Estatuto mostraram ser um processo complexo e demorado) e, para além disso, precisam as respectivas Câmaras Municipais (Câmara dos Vereadores) criar leis municipais específicas e respeitadoras do Plano Diretor, para criarem, finalmente, as bases para a aplicação efetiva de um ou mais institutos ou instrumentos estatutários reforçados no Plano Diretor. Assim, se por um lado a própria Constituição conferiu aos municípios a prevalência legislativa e executiva em matéria urbanística aos municípios (e as vantagens desta conferência são evidentes, pois os municípios são os entes federativos mais próximos da população e, por conseguinte, das necessidades locais de cada pequena área do território do Brasil), por outro, findou por gerar uma maior dificuldade para a concretização, aplicação e criação de políticas em prol da ordem urbana e, consequentemente, civil local, uma vez que dependentes de decisões pulverizadas e, portanto, compartimentalizadas de cada município. Uma problemática de difícil, mas não impossível solução, principalmente caso se fortifiquem arranjos e diálogos institucionais, fomentem-se capacidades destas instituições e se promova uma sempre crescente conscientização e informação da população e de governantes da importância e relevância de ordens urbanísticas saudáveis, sustentáveis e desenvolvimentistas.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "7",
      },
      {
        idPergunta: "393",
        idCategoriaPergunta: "76",
        title: "Quais as Conclusões?",
        content:
          "Sucintamente e a título de conclusão, é fundamental sempre lembrar que a CRFB, dirigente e analítica, trouxe em seu rol a previsão de variadas normas de cunho urbanístico, entre as quais a que previu o Plano Diretor como plano urbanístico de competência municipal. Além disso, estabeleceu a imperiosa necessidade de o legislador infraconstitucional complementar a CRFB com múltiplas leis (de modo a se constituir um verdadeiro bloco constitucional), uma delas o Estatuto da Cidade, complementador oficial dos Artigos 182 e 183, mas de uma série de outros dispositivos também. Nesse sentido, o Estatuto da Cidade tornou-se um marco legislativo em matéria urbanística, mesmo diante do auxílio de uma cadeia de normas urbanísticas, previstas em um também linha legislativa desta natureza: CRFB, Estatuto da Cidade, Constituições Estaduais, Leis Orgânicas municipais, Plano Diretor, leis municipais, decretos executivos, sem contar o Estatuto da Metrópole que muito bem se insere na estrutura apenas apresentada.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "8",
      },
      {
        idPergunta: "394",
        idCategoriaPergunta: "76",
        title: "Quais os textos dos dispositivos legais citados neste CENÁRIO?",
        content:
          "Dada a grande quantidade e, se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais citados neste CENÁRIO.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "9",
      },
      {
        idPergunta: "395",
        idCategoriaPergunta: "76",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.\r\n",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "10",
      },
      {
        idPergunta: "396",
        idCategoriaPergunta: "76",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) ÁLVAREZ, Maria Pardo. La potestad de planeamiento urbanístico bajo el Estado social, autonômico y democrático de Derecho. Madrid: Marcial Pons, 2005.; 2) BONIZZATO, Luigi, MOULIN, Isabelle Esteves. PDUI (Plano de Desenvolvimento Urbano Integrado): primeiros aspectos, comparações, críticas, conclusões, relações e experiências após 03 (três) anos de sua criação legal. In: Revista de Direito da Cidade. [on line]. Disponível na Internet via www.URL: . Última Atualização em 20 de janeiro de 2019.; 3) BONIZZATO, Luigi. Constituição, Democracia e Plano Diretor, sob o influxo de direitos sociais e de liberdade, políticas estatais e institucionais. Rio de Janeiro: Editora Lumen Juris, 2014.; 4) BONIZZATO, Luigi. A Constituição Urbanística e elementos para elaboração de uma teoria do Direito Constitucional Urbanístico. Rio de Janeiro: Editora Lumen Juris, 2010.; 5) FARIA, José Eduardo. O direito na economia globalizada. São Paulo: Editora Malheiros, 2000.; 6) FARIA, José Eduardo. O Brasil pós-constituinte. Rio de Janeiro: Graal, 1989.; 7) PINTO, Victor Carvalho. Direito urbanístico, plano diretor e direito de propriedade. São Paulo: Editora Revista dos Tribunais, 2005.; 8) SUNSTEIN, Cass R., VERMEULE, Adrian. Interpretation and Institutions (July 2002). U Chicago Law & Economics, Olin Working Paper No. 156; U Chicago Public Law Research Paper No. 28. Disponível em SSRN: http://ssrn.com/abstract=320245 or http://dx.doi.org/10.2139/ssrn.320245.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "11",
      },
      {
        idPergunta: "397",
        idCategoriaPergunta: "76",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 23 ago. 2018. 2) BRASIL. Estatuto da Cidade. planalto.gov.br</a>. Acesso em: 20 jan. 2019. 3) BRASIL. Estatuto da Metrópole. planalto.gov.br</a>. Acesso: 20 jan. 2019.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "12",
      },
      {
        idPergunta: "398",
        idCategoriaPergunta: "76",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "13",
      },
      {
        idPergunta: "399",
        idCategoriaPergunta: "76",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "Em ordem alfabética: 1)\tSobre Estatuto da Cidade: BONIZZATO, Luigi. O advento do Estatuto da Cidade e conseqüências fáticas em âmbito da propriedade, vizinhança e sociedade participativa. Rio de Janeiro: Editora Lumen Juris, 2005.; 2) Sobre Ordem Urbana e Direitos Sociais: BONIZZATO, Luigi. Propriedade Urbana Privada & Direitos Sociais: 2ª Edição – Revista e Atualizada, incluindo a Lei 13.089/15, que instituiu o Estatuto da Metrópole. Curitiba: Juruá Editora, 2015.",
        idCategoria: "76",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da Cidade: eficácia ou ineficácia anunciada?",
        ordemCategoriaPai: "400",
        ordemCategoria: "410",
        ordemPergunta: "14",
      },
    ],
  };

  const cenario10 = {
    rows: [
      {
        idPergunta: "400",
        idCategoriaPergunta: "77",
        title: "Quais as Considerações Iniciais?",
        content:
          "A contemporaneidade trouxe consigo a necessidade de atualização constante do conhecimento e, na área jurídica, do conhecimento técnico sobre como o avanço tecnológico, em suas mais variadas áreas e vertentes, influenciou, influencia e influenciará o Direito. A internet e tudo que dela deriva, como, por exemplo, as redes sociais, profissionais etc., mudaram comportamentos e a maneira pela qual relações de múltiplos tipos ocorrem, desenvolvem-se e se consolidam. Negócios são travados via redes sociais, via WhatsApp e demais meios disponibilizados pela internet. Eleições são definidas com a utilização destes mesmos meios, assim como um cruzamento permanente de dados, a partir de modernas fórmulas (que fizeram o vocábulo “algoritmo” entrar em moda e cena em áreas que não a das ciências exatas) e uma nova geração de conexões passaram a dominar o cenário atual de relações sociais. Nesse contexto e nessa nova configuração relacional, entre inúmeros direitos ora atacados, ora submetidos a novas interpretações, alguns princípios também se mostraram sob pressão e novo tensionamento. E, no presente CENÁRIO, derivado de capítulo de Livro de autoria do Professor Coordenador do “Projeto Capítulo 4”, o princípio para o qual as atenções serão voltadas, é o chamado devido processo legal, uma das bases centrais de qualquer Estado Democrático de Direito e para onde devem estudos e preocupações convergirem, sobretudo em razão de sua, muitas vezes, supressão, a partir, por exemplo, dos novos meios de convencimento social oriundos da mencionada e em sempre evolução tecnologia da comunicação, em sentido amplo. Portanto, nesta Parte 1, o Devido Processo Legal será o centro das atenções, mas já com uma introdutória provocação ligada à influência tecnológica sobre o mesmo e tão importante princípio jurídico.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "1",
      },
      {
        idPergunta: "401",
        idCategoriaPergunta: "77",
        title:
          "Em inicial análise e termos gerais, o que seria o devido processo legal?",
        content:
          "O devido processo legal nada mais é do que um princípio, previsto na Constituição da República (CRFB) e com aplicação em vários ramos do Direito. Por meio de sua garantia e aplicação, garante-se a existência e aplicação de muitos outros princípios, entre os quais do princípio da igualdade, da legalidade e da liberdade, em variadas nuanças. Pela CRFB, ninguém será privado de seus bens nem da liberdade, sem o devido processo legal. Ou seja, em um primeiro momento, o devido processo legal representa a necessidade de serem respeitados processos legais para que determinadas situações, consequências, desdobramentos etc. ocorram. Por exemplo, para que uma pessoa seja condenada a pagar uma indenização ou a cumprir uma pena de prisão, é indispensável que, antes de um Juiz proferir uma sentença condenatória, tenham sido respeitados todos os ritos, direitos, procedimentos etc. previstos em lei e na CRFB. Uma vez tendo sido cumpridos, respeitados e seguidos, rigorosamente, os mencionados ritos, direitos e procedimentos, por exemplo, poder-se-á dizer que a sentença condenatória foi proferida em total consonância com o princípio do devido processo legal. Mas, por outro lado, quando não se respeita o devido processo legal, ocorre vício de gravíssimas consequências para um ordenamento jurídico. Pois isto significará que algum rito, procedimento e/ou direito incidente em um processo, do qual são partes, pessoas, seres humanos e, ainda mais precisamente, muitas vezes nós próprios, não foi ou foram cumpridos pelo Juiz da Causa, o que representará uma afronta à lei e às normas jurídicas do país.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "2",
      },
      {
        idPergunta: "402",
        idCategoriaPergunta: "77",
        title:
          "A CRFB prevê expressamente o princípio do devido processo legal?",
        content:
          "Sim. Em seu Art. 5º, inciso LIV, o devido processo legal aparece de forma expressa. Eis o seu inteiro teor: “Art. 5º. (…) LIV - ninguém será privado da liberdade ou de seus bens sem o devido processo legal”. Ressalte-se, entretanto, que a CRFB foi a primeira na história constitucional brasileira a, de forma clara e precisa, prever tal princípio.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "3",
      },
      {
        idPergunta: "403",
        idCategoriaPergunta: "77",
        title:
          "Do ponto de vista da história constitucional brasileira, havia previsões do princípio do devido processo legal em Constituições anteriores à de 1988?",
        content:
          "De forma clara e expressa e com esta designação, não. A Constituição de 1824, primeira da história independente brasileira, timidamente, no rol dos direitos então reputados fundamentais para a época, determinava, no inciso XI do Art. 179, em matéria de garantia de aplicação da lei e de sua forma, a partir da autoridade competente, que ninguém seria “sentenciado, senão pela Autoridade competente, por virtude de Lei anterior, e na fórma por ella prescripta”. Na Constituição de 1891, marco histórico em diversas matérias jurídicas, praticamente se manteve a ideia da Constituição anterior no que tange ao respeito à forma da lei (Art. 72, § 15, com redação dada pela Emenda Constitucional de 3 de setembro de 1926). Em 1934, o Brasil incorpora, na nova Constituição, avanços ligados à ordem social, cultural e econômica. Mas se mantém a direção então clássica, com a ideia estampada no Art. 113, item 26, de que “Ninguém será processado, nem sentenciado senão pela autoridade competente, em virtude de lei anterior ao fato, e na forma por ela prescrita”. O Estado Novo e sua nova Constituição, não são tão generosos em termos democráticos, o que reflete no rol dos direitos então fundamentais da época, enumerados na Carta Constitucional brasileira de 1937, com especial destaque para o item 11, do Art. 122: “(...) À exceção do flagrante delito, a prisão não poderá efetuar-se senão depois de pronúncia do indiciado, salvo os casos determinados em lei e mediante ordem escrita da autoridade competente. Ninguém poderá ser conservado em prisão sem culpa formada, senão pela autoridade competente, em virtude de lei e na forma por ela regulada (...)”. Contudo, foi tal dispositivo, assim como vários outros do texto constitucional até então vigente, suspenso pelo Decreto nº 10.358, de 1942. A Constituição de 1946, em seu artigo 141 assim estatuía, no parágrafo 27: “Ninguém será processado nem sentenciado senão pela autoridade competente e na forma de lei anterior”. Com o golpe militar de 1964 e a entrada em vigor da Constituição de 1967, o Art. 150 do novo texto constitucional não trouxe qualquer expressa previsão semelhante às Constituições anteriores no que toca à necessidade de “respeito à forma” da lei. Nem mesmo se inaugurou uma clara previsão do devido processo legal. E o mesmo veio a ocorrer em 1969, quando da Emenda Constitucional nº 01 à Constituição de 1967, com o novo Art. 153, dedicado ao rol dos direitos e garantias individuais.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "4",
      },
      {
        idPergunta: "404",
        idCategoriaPergunta: "77",
        title: "O devido processo legal é criação nacional?",
        content:
          "Não. O devido processo legal, ou due process of law, conforme o denominaram os ingleses e, a posteriori, os americanos, é cláusula fundamental tanto ao ordenamento jurídico pátrio, quanto a diversos outros ao redor do globo, não tendo, de forma alguma, nascido no Brasil ou sido uma criação brasileira. Crê-se que o primeiro ordenamento que teria feito menção a esse princípio seria o decorrente da Magna Charta de João Sem Terra, do ano de 1215, quando se referiu à law of the land (art. 39), sem, ainda, ter mencionado expressamente a locução devido processo legal. O processo de independência das Treze Colônias norte-americanas solidificou o princípio, sendo previsto por várias Declarações de Direitos dos Estados, para, ao final, ser definitivamente consagrado pelas Emendas nº 05 e 14, à Constituição da Filadélfia. Por conseguinte e, modernamente, pode-se afirmar que os Estados Unidos (EUA) são a grande fonte, na qual ordenamentos jurídicos variados buscaram inspiração para a previsão e invocação do devido processo legal.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "5",
      },
      {
        idPergunta: "405",
        idCategoriaPergunta: "77",
        title:
          "O devido processo legal está ligado a mais de um ramo do Direito brasileiro?",
        content:
          "Sim. Conforme exposto acima, é princípio que norteia o ordenamento jurídico como um todo e, também, vários ramos do Direito. O Direito Processual, Civil ou Penal, Administrativo e Constitucional, assim como praticamente todos os outros ramos e todas as demais bases da Justiça e Direito brasileiros encontram um fundamento superior no devido processo legal.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "6",
      },
      {
        idPergunta: "406",
        idCategoriaPergunta: "77",
        title: "Existem classificações do devido processo legal?",
        content:
          'Sim. Neste momento, serão brevemente anunciadas e, em outras Partes deste estudo, melhor destrinchadas. Então, por ora, chama-se a atenção para duas importantes vertentes do devido processo legal: a processual e a substantiva. Assim, o devido processo legal processual (também chamado ou incluído na categoria denominada "formal") nada mais seria, segundo Nelson Nery Junior, do que “a possibilidade efetiva de a parte ter acesso à justiça, deduzindo pretensão e defendendo-se do modo mais amplo possível, isto é, de ter his day in Court, na denominação genérica da Suprema Corte dos Estados Unidos”. Percebe-se, desta forma, que em sua nuança processual, seria uma garantia de cumprimento de todas as etapas do processo, consideradas estas em seu sentido lato. No que toca ao devido processo legal substantivo, um controle judicial expansivo a atividades discricionárias do Poder Público, em outras palavras, ao mérito administrativo, vem se mostrando, dia a dia, mais necessário de qualquer Estado Democrático de Direito. Com base em uma cláusula do devido processo legal em seu sentido material, poder-se-á, inclusive, admitir intervenção judicial nas classificações legislativas, sempre, é claro, que se verificarem inaceitáveis afrontas a princípios constitucionais - por desarrazoadas -, exempli gratia, ao princípio da igualdade. E que o mesmo possa acontecer para garantir a igualdade e a razoabilidade na sociedade moderna, a partir da solidificação de que todos merecem e, para além disso, têm incondicional direito a um julgamento justo, sendo este reputado aquele no qual sejam respeitadas todas as garantias processuais e/ou constitucionais ligadas ao processo, junto a um Poder Judiciário independente, por piores e mais agudas que possam ser as críticas a este desferidas em momentos históricos do país. Para John V. Orth, há múltiplas dimensões e elementos a serem considerados e “beginning as the history of proper procedure, the history of due process became the history of substantive guarantees as well. Procedure is a perennial concern of the courts, but substance varies with the times, as economic and social demands come and go”.',
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "7",
      },
      {
        idPergunta: "407",
        idCategoriaPergunta: "77",
        title:
          "Como a contemporaneidade pode estar influenciando, embarreirando e prejudicando a aplicação do devido processo legal?",
        content:
          "O advento constante de novas tecnologias, muito vem influenciando a conduta de pessoas e o funcionamento, portanto, de ordenamentos jurídicos. Novos “empoderamentos”, como os consequentes de redes sociais da internet, novos canais tecnológicos e pela sempre atenta e poderosa indústria midiática, alteraram o contexto político, social, jurídico e econômico mundial. Uma única notícia veiculada em uma rede social pode ter o condão de fazer despencar Bolsas de Valores, gerar revoltas sociais, mudanças em cenários políticos e reinterpretações jurídicas. Os canais de transmissão de informação são cada dia mais variáveis e as possibilidades de formação de opinião também. De todo modo, o fato é que a sociedade civil, em geral, isto é, seja por seus mais variados e organizados grupos, seja de forma esparsa e difusa, cada vez mais participa e exerce pressão, sobretudo, política, sobre as mais diversas questões e comportamentos sociais e institucionais, levando a julgamentos sociais, políticos, econômicos e jurídicos velozes como modernos computadores e incapazes de respeitar o devido processo legal. Julga-se e se condena e, depois, avaliam-se os direitos envolvidos etc. Este o perigo da sociedade contemporânea para o qual se quis, nesta Parte 01 deste CENÁRIO sobre devido processo legal, fazer a devida anunciação e chamar a atenção.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "8",
      },
      {
        idPergunta: "408",
        idCategoriaPergunta: "77",
        title: "Quais as conclusões?",
        content:
          "Nesta Parte 1, pretendeu-se dar início a uma série de debates que será, Parte após Parte (não necessariamente em sequência temporal no Capítulo 4 do APP “Constituição para Leigos”), acrescida de novos institutos, conceitos e reflexões, assim como aprofundada, no intuito de que a matéria central sob foco, qual seja, a influência do avanço tecnológico nas tradicionais relações republicanas, institucionais e democráticas, seja cada vez mais entendida e alvo de diálogos no meio jurídico, logicamente, composto, principalmente, a partir da leitura dos CENÁRIOS deste APP. Certamente, o devido processo legal, ora mais, ora de forma menos direta, será um pano de fundo constante para os exames e análises que virão.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "9",
      },
      {
        idPergunta: "409",
        idCategoriaPergunta: "77",
        title:
          "Quais os textos dos dispositivos constitucionais e legais citados neste CENÁRIO?",
        content:
          "O principal, com a existência do respectivo LINK “nas referências bibliográficas das legislações” para a CRFB, é o relativo ao devido processo legal. Repita-se o Art. 5º, inciso LIV: “Art. 5º. (…) LIV - ninguém será privado da liberdade ou de seus bens sem o devido processo legal”. Demais menções legislativas retiradas de Livro elencado nas “referências bibliográficas”.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "10",
      },
      {
        idPergunta: "410",
        idCategoriaPergunta: "77",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "11",
      },
      {
        idPergunta: "411",
        idCategoriaPergunta: "77",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi. A Constituição e suas Instituições contemporâneas: representatividade, crises, exemplos e marcos fáticos no Brasil como elementos de análise de teorias constitucionais-institucionais brasileiras. Rio de Janeiro: Editora Lumen Juris, 2017.; 2) CAMPANHOLE, Adriano, CAMPANHOLE, Hilton Lobo. Constituições do Brasil. 04. ed. São Paulo: Editora Atlas, 1979.; 3) CASTRO, Carlos Roberto de Siqueira. O devido processo legal e a razoabilidade das leis na nova Constituição do Brasil. 02. ed. Rio de Janeiro: Editora Forense, 1989.; 4) NERY JUNIOR, Nelson. Princípios do Processo Civil na Constituição Federal. 07. ed. São Paulo: Editora Revista dos Tribunais, 2002.; 5) ORTH, John V. Due process of law: a brief history. Kansas: University Press of Kansas, 2003.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "12",
      },
      {
        idPergunta: "412",
        idCategoriaPergunta: "77",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 07 out. 2018.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "13",
      },
      {
        idPergunta: "413",
        idCategoriaPergunta: "77",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "14",
      },
      {
        idPergunta: "414",
        idCategoriaPergunta: "77",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Devido Processo Legal: MASSARO, Toni M., SULLIVAN, E. Thomas. The Arc of Due Process in American Constitutional Law. New York: Oxford University Press, 2013. 2) Direito, mídia e tecnologia: SUNSTEIN, Cass R. #REPUBLIC: divided democracy in the age of social media. Princeton: Princeton Uiversity, 2017.\r\n",
        idCategoria: "77",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros questionamentos no mundo tecnológico contemporâneo",
        ordemCategoriaPai: "400",
        ordemCategoria: "411",
        ordemPergunta: "15",
      },
    ],
  };

  const cenario11 = {
    rows: [
      {
        idPergunta: "415",
        idCategoriaPergunta: "78",
        title: "Quais as Considerações Iniciais?",
        content:
          "A Constituição de 1988 (CRFB) claramente estabeleceu que a saúde é direito de todos e dever do Estado. Tanto no Art. 6º, quanto, entre outros, em seu Art. 196, reforçou tal condição, de modo que se está diante de um direito social e, ao mesmo tempo, fundamental. Entretanto, a mesma CRFB, com base em princípios, sobretudo, da livre iniciativa e concorrência, abriu espaço para a chamada saúde suplementar e privada. Em mais precisos dizeres, para além de promover o direito à saúde, colocando-o nas citadas categorias de fundamental e social, a CRFB permitiu a exploração da saúde pela iniciativa privada. Eis, desde já, o teor do Art. 199 da mesma CRFB: “Art. 199. A assistência à saúde é livre à iniciativa privada”. Neste sentido, na medida do seu natural amadurecimento, a CRFB, o Estado, sociedades e governos brasileiros levaram o país à crescente e maior chegada da então denominada saúde privada, preponderantemente consubstanciada na figura de Operadoras e Seguros Privados de Planos de Saúde. Por corolário, entender os novos e básicos conceitos, dificuldades, virtudes, problemáticas e desafios de um verdadeiro novo universo, um real novo subsistema, passou a ser necessário, máxime para a população que passou a se fazer valer e/ou optar pela contratação da saúde privada. Portanto, esta temática, que será subdividida em partes, dada a riqueza e grandeza dos temas envolvidos, faz com que este CENÁRIO represente a Parte 1 de uma “série”. A primeira parte, que se dedicará a uma relevante introdução para a formação, acima de tudo, de bases conceituais vinculadas ao objeto sob estudo.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "1",
      },
      {
        idPergunta: "416",
        idCategoriaPergunta: "78",
        title:
          "Inicialmente, existe alguma legislação complementadora da Constituição de 1988 e que veio a trazer mais segurança jurídica à temática da saúde privada?",
        content:
          "Sim. Mas somente foi criada em 1998 após período de tramitação, discussões e ajustes no Congresso Nacional. Tratou-se da Lei 9.656/98, ainda em vigência, mas já com várias alterações supervenientes. Tal Lei pôde e pode ser realmente entendida como um marco regulatório na matéria de saúde privada no Brasil. Trouxe normas conceituais, definiu limites de atuação para Contratantes e Contratados de Planos e Seguros de Saúde, entre outras inúmeras inovações para o âmbito jurídico nacional. Ressalte-se, além disso, que neste CENÁRIO serão considerados como alcançados por todas as regras da saúde privada também os Seguros Privados de Assistência à Saúde. Entretanto, estes também se submetem às normas e ao controle, sobretudo, econômico-financeiro da Superintendência de Seguros Privados (SUSEP). Mas, como aqui se reforçará, neste CENÁRIO não serão os Seguros Privados de Assistência à Saúde afastados dos exames e enfrentamentos, máxime porque se entenderá que incluem a categoria “saúde privada”. Portanto, também, em certas medida e matérias, serão incluídos no alcance do poder regulatório da própria ANS. Uma opção que nesta Parte 1 se fará e que, em Partes futuras, poder-se-á melhor esmiuçar e destrinchar.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "2",
      },
      {
        idPergunta: "417",
        idCategoriaPergunta: "78",
        title:
          "Existiram contratações anteriores e posteriores à citada Lei 9.656/98? E, nesse sentido, como se deram eventuais transições contratuais?",
        content:
          "Sim. Antes mesmo de a referida Lei 9.656/98 entrar em vigor, Planos e Seguros de Saúde Privada já eram comercializados no Brasil. Entretanto, faltavam normas mais claras e as Sociedades Empresárias ou demais Contratadas, vendiam seus produtos de acordo com Contratos elaborados com base em seus interesses comerciais e imanentes à atividade exercida. O Código de Defesa do Consumidor (Lei 8.090/90), ainda imaturo, teve algum – mas não forte – peso, assim como a CRFB. As vendas de Planos e Seguros privados de assistência médica não possuíam qualquer uniformidade e orientação do ponto de vista legal. Fato que teve na Lei 9.656/98 um verdadeiro início de uma nova Era, que até hoje amadurece, seja pela atuação privada, seja pela do Poder Público em esferas executiva, legislativa e judiciária. Quanto à transição mencionada na pergunta formulada, a própria lei, assim como a Agência Nacional de Saúde Suplementar (ANS), sobre a qual melhor se falará na resposta à indagação subsequente, trataram de oferecer as chamadas adaptações contratuais aos consumidores (ressalte-se, na categoria de “consumidores” foram enquadrados os contratantes de Planos ou Seguros Privados de Saúde). E estes, ao longo dos anos e, mediante “estímulos” oferecidos pelas Contratadas aos Contratantes, puderam optar se se mantinham beneficiários de Planos ou Seguros sob a vigência de Contratos anteriores à Lei 9.656/98 ou se migravam seus Planos para serem regidos pelo manto da nova Lei. Até os dias de hoje, há muitos grupos de pessoas e, por conseguinte, contratos anteriores à Lei 9.656/98 em plena vigência.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "3",
      },
      {
        idPergunta: "418",
        idCategoriaPergunta: "78",
        title:
          "Qual a relevância da transição de contratos para serem regidos pela nova Lei 9.656/98?",
        content:
          "Entre inúmeros aspectos e, respeitando os limites temáticos deste CENÁRIO, citam-se, por exemplo, algumas limitações trazidas pela Lei 9.656/98 às Operadoras de Planos de Saúde ou Seguros Privados, não respeitadas em Contratos anteriores. Por exemplo, vários Contratos anteriores à Lei em tela excluíam a cobertura de materiais e procedimentos que, após a Lei, passaram a ser de cobertura obrigatória. Por outro lado, há casos de situações em que Contratos anteriores à Lei 9.656/98 traziam algumas vantagens aos consumidores (algumas das quais conseguidas com a própria ajuda do Poder Judiciário, no julgamento de casos concretos com os quais se depara), as quais foram melhor delimitadas ou eliminadas pela Lei. Por conseguinte, a relevância ligada à transição de contratos é grande e, até o dias de hoje, aflige Operadoras e Seguros Privados, Poderes Executivo, Legislativo e Judiciário, além de, logicamente, consumidores, isto é, beneficiários de planos ou seguros privados de assistência médica no Brasil.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "4",
      },
      {
        idPergunta: "419",
        idCategoriaPergunta: "78",
        title:
          "Existe algum controle e/ou fiscalização sobre a atuação da saúde privada no Brasil?",
        content:
          "Sim. Além de métodos sociais cada vez mais tradicionais de fiscalização, a reforma do Estado do final da década de 90, do século findo, trouxe em massa para o Brasil a figura das chamadas Agências Reguladoras. Com forte inspiração norte-americana, o modelo trazido e inserido no país criou, frise-se, a figura mencionada das Agências e, ao mesmo tempo, a elas concedeu poderes. Como a criação de Agências se dá, via de regra, por lei, foram sendo gradativamente criadas e, em 2000, por meio da Lei 9.961, de 28 de janeiro daquele ano, nasceu a Agência Nacional de Saúde Suplementar (ANS), com o objetivo de controlar, fiscalizar e, entre outros poderes, deveres e prerrogativas, regular o setor da saúde privada ou também chamada de suplementar no país. A partir daí foram inúmeros os métodos de controle e fiscalizatórios, com a aplicação de sanções pela ANS (tais como multas, suspensão do direito de comercializar planos etc.), assim como poderes normativos, o que levou à edição de várias e várias Resoluções Normativas, a maioria das quais complementadoras da Lei 9.656/98 e com a finalidade de dar maior concretude, especificidade e aprofundamento a complexas questões que sempre envolveram o tema.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "5",
      },
      {
        idPergunta: "420",
        idCategoriaPergunta: "78",
        title:
          "Do ponto de vista de relações, comportamentos e influências institucionais, existe algo a ser preliminar e introdutoriamente dito sobre as Agências Reguladoras, mas, em especial, sobre a ANS?",
        content:
          "Sim e, certamente. É certo que problemáticas de cunho institucional envolveram, dominaram e continuarão sempre a influenciar a atuação de Agências e, no caso em tela, da ANS. Pressões dos mais variados grupos de interesse estão sempre presentes e montam a lógica de um regime democrático, mas com paralelos laços liberais, ligados às escolhas governamentais e constituintes a que já se fez breve menção neste CENÁRIO. Se, por um lado, a título meramente ilustrativo, o processo de fiscalização e de criação de normas e, igualmente, de decisões pela ANS não repercutem bem no âmbito de interações institucionais e sociais, de modo até a gerar múltiplas contra reações, frise-se, sociais e de instituições especificamente interessadas, por outro, tal mesmo ou outro processo de fiscalização e de criação de normas e tomadas de decisões pode ser o grande objetivo de outras camadas sociais e, por conseguinte, institucionais. Questões e problemáticas da maior grandeza, estudadas por pesquisadores com cabedal jurídico indiscutível, costumam rechear bibliotecas de trabalhos sobre o tema. Como mero exemplo, a figura comumente chamada de capturing (vocábulo oriundo da língua inglesa), reflete uma crítica e uma realidade para a qual não se pode fechar os olhos: a do poder de influência do Poder Privado sobre as Agências Reguladoras, comprometendo um exercício de poderes em conformidade com os princípios centrais que norteiam a administração pública, presente no caput do Art. 37, da CRFB (legalidade, moralidade, impessoalidade, publicidade e eficiência). Mas, reforce-se, esse é um mero exemplo entre tantos que refletem a complexidade institucional não somente brasileira, mas também de ordenamentos jurídicos que adotam o sistema regulatório agencial.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "6",
      },
      {
        idPergunta: "421",
        idCategoriaPergunta: "78",
        title:
          "Quais os novos conceitos e até institutos a que este CENÁRIO pretende introdutoriamente se dedicar, repita-se, ligados à saúde privada brasileira?",
        content:
          "São muitos. Selecionar-se-ão 03 (três), nesta Parte 1 deste estudo, para a qual se dedica este CENÁRIO, a título meramente exemplificativo, mas com fins de realmente introdução do leitor no tema. Nesse sentido, eis os conceitos e/ou institutos escolhidos: a) carência e preexistência; b) rol de procedimentos; c) planos individuais e coletivos. Relativamente aos institutos da carência e preexistência, far-se-á uma breve e nova subdivisão: a.1) carência; a.2) preexistência. Nesse rumo, começando pelo instituto da carência, declara-se que nada mais é do que um período durante o qual um beneficiário e contratante de planos ou seguros privados de saúde não poderá fazer jus a determinadas coberturas contratuais. A Lei 9.656/98, assim como Resoluções complementadoras da ANS, trataram de estabelecer os prazos máximos de carência a serem estipulados pelas Operadoras de Planos e Seguros privados de assistência à saúde. Entretanto, se uma destas últimas desejar estabelecer um prazo menor, pode e poderá fazê-lo. O que não pode nem poderá será estipular prazos de carência maiores do que os estabelecidos por lei. Por exemplo, cirurgias e exames de alta complexidade costumam ter um prazo de carência de 180 (cento e oitenta) dias, contados a partir da contratação do Plano ou Seguro de Saúde, para que possam ser realizados pelo beneficiário. Este sistema objetiva simplesmente evitar que uma pessoa contrate um Plano hoje, no dia seguinte realize o procedimento que deseje e, em seguida, cancele seu Plano ou Seguro Privado, fato que geraria uma impossibilidade financeira de manutenção dos Planos. Por sua vez, no tocante à preexistência, nada mais é do que uma aqui abreviação para o que se chama doença preexistente. Isto é, ao contratar um Plano ou Seguro de Saúde a pessoa contratante deve declarar, provida de boa-fé, se possui ou já teve alguma doença anterior, comumente listadas em uma Declaração pré-elaborada pela Operadora ou Seguro contratado. Caso possua uma ou mais doenças preexistentes, as normas jurídicas preveem a possibilidade de imposição de cumprimento de um prazo máximo de 24 (vinte e quatro) meses de carência para que a pessoa contratante possa ter qualquer tipo de cobertura contratual relativa, especificamente, a ou às doenças preexistentes declaradas quando da contratação do Plano ou do Seguro. Enfim, ressalte-se que casos de urgência e/ou emergência médica, são tratados à parte pela Lei e demais normas vigentes, as quais garantem um atendimento de até 12 horas em pronto-socorro ou em âmbito ambulatorial para quem estiver cumprindo qualquer carência: seja por prazo contratual carencial normal, seja por prazo carencial decorrente de doença preexistente. Entretanto, as inúmeras questões, problemáticas e incursões que envolvem a urgência e/ou emergência enquanto institutos da matéria ora sob foco serão tratadas em outras Partes do estudo sobre a saúde privada no Brasil.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "7",
      },
      {
        idPergunta: "422",
        idCategoriaPergunta: "78",
        title:
          "E quanto aos outros dois conceitos e institutos mencionados na resposta à pergunta anterior?",
        content:
          "Quanto aos institutos e/ou conceitos ora intitulados de “Rol de Procedimentos” (alínea “b” da questão anterior) e “planos individuais e coletivos” (alínea “c” da questão anterior), seguem as considerações. Relativamente ao Rol de Procedimentos, ressalte-se que a Lei 9.656/98 preocupou-se com a necessidade de regulamentação para a definição de quais procedimentos médicos teriam cobertura obrigatória pelas operadoras de planos e seguros privados de assistência à saúde, a partir de critérios técnicos e médicos para tanto. Por esta razão, nasceu, através da Resolução nº 10 do CONSU (Conselho de Saúde Suplementar), o Rol de Procedimentos Médicos, que nada mais é do que uma lista que, neste CENÁRIO, considera-se taxativa (e, não, exemplificativa, ideia esta que aparece no entendimento esboçado em numerosas decisões judiciais pelo Brasil) dos procedimentos cuja cobertura é obrigatória pelas Operadoras de Planos e Seguros de Saúde. O Art. 1º e parágrafo único da referida Resolução estabelecem que o Rol de Procedimentos “deverá ser utilizado pelas operadoras de planos e seguros privados de assistência à saúde como referência da cobertura de que tratam os artigos 10 e 12 da Lei nº 9.656/98”. E o seu parágrafo único que “a inclusão de novos procedimentos dependerá de proposição do Ministério da Saúde para aprovação no CONSU”. Ou seja, o Rol é atualizado periodicamente a fim de que acompanhe os avanços técnicos da medicina. E frise-se que, com a criação da ANS, autarquia federal vinculada ao Ministério da Saúde, responsável pela regulamentação e fiscalização dos planos e seguros privados de assistência à saúde, conforme neste CENÁRIO já explicado, aquela assumiu a responsabilidade pela apenas citada atualização do referido Rol de Procedimentos Médicos. Já no tocante aos “planos individuais”, nada mais são do que aqueles contratados por uma pessoa física, diretamente junto a uma Operadora ou Seguradora de planos privados de assistência médica. São regulados pela Lei 9.656/98 (ou por ela não regulados, em casos, conforme neste mesmo CENÁRIO, anteriormente explicado – caso de Planos contratados antes da entrada em vigor da referida Lei), criada a partir de permissão da CRFB e por demais normas emitidas pela ANS. Já os “Planos Coletivos” podem ser, pelo menos de 02 (duas) espécies aqui selecionadas: I) os coletivos por adesão; ou II) os coletivos empresariais. Os planos coletivos por adesão são os que são contratados por meio de empresas (sociedades empresárias intermediadoras) que têm por único objetivo comercializar planos e seguros privados de assistência médica para pessoas físicas. Entretanto, fazem um Contrato Coletivo prévio entre elas (também pessoas jurídicas) e as Operadoras ou Seguradoras, aos quais as pessoas físicas interessadas se filiam, a partir de contratação. Por isso, tais empresas são consideradas pessoas jurídicas intermediárias para a contratação de planos e seguros de saúde. Os beneficiários finais são pessoas físicas. Contudo, seus planos e seguros são regidos por Contratos Coletivos e, não, individuais. Já os planos empresariais são os normalmente também contratados diretamente junto a uma Operadora ou Seguradora de planos privados de assistência médica. Entretanto, contratados por uma pessoa jurídica. Não há intermediários. Uma pessoa jurídica procura diretamente outra pessoa jurídica (Operadora ou Seguradora) e faz a contratação de um Plano ou Seguro de Saúde para os empregados ou sócios de sua sociedade (sociedade empresária ou outra instituição).",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "8",
      },
      {
        idPergunta: "423",
        idCategoriaPergunta: "78",
        title:
          "E quanto à problemática fático-legislativa citada no próprio Título deste CENÁRIO?",
        content:
          "Entre várias, escolheu-se a ligada à parte final da resposta à indagação anterior. Mas sob um recortado aspecto, pois muitas são as questões que podem ser levantadas. Assim, optou-se por se aqui levantar a problemática atual ligada aos planos chamados coletivos, sejam eles por adesão, sejam eles empresariais, mas com foco especial nos primeiros, ou seja, nos por adesão. Na realidade, a Lei 9.856/98, marco legislativo sobre a saúde privada no Brasil e complementadora da CRFB nesta matéria, majoritária e preponderantemente versou sobre os chamados planos individuais. Nesse sentido, a maioria das normas legais, variadas e relativas a uma série de matérias, que criaram limitações, sobretudo para Operadora e Seguradoras de planos e seguros de saúde, versam sobre os planos individuais e, não, coletivos. Salvo exceções, que não serão tratadas nesta parte deste estudo e, portanto, neste CENÁRIO, a Lei 9.656/98 possui um viés nitidamente voltado para planos individuais. Por conseguinte, o crescimento de plano coletivos no Brasil fez com que muitos começassem a criar contratos com cláusulas ora contrárias, ora divergentes, ora simplesmente diferentes das previsões contidas na Lei 9.656/98. Isto gerou uma insegurança na ordem jurídica que versa sobre a saúde privada no Brasil, que tentou ser atenuada com uma série de normatizações oriundas da ANS. Entretanto, seja porque muitas destas normatizações não satisfizeram os consumidores finais, pessoas físicas, seja porque não satisfizeram as próprias pessoas jurídicas contratantes ou, ainda, mostraram-se insuficientes do ponto de vista regulatório-normativo, inúmeros Contratos Coletivos, geradores dos denominados planos coletivos, começaram a ser questionados perante o Poder Judiciário. E isto porque traziam cláusulas que proporcionavam certas vantagens às Operadoras e Seguradoras, comparativamente ao previsto na Lei 9.656/98. Possibilidades de reajustes no valor de mensalidades para além do previsto na referida lei; possibilidades de cancelamento dos planos de saúde, também fora das previsões contidas na Lei 9.656/98, fizeram com que as Operadoras e Seguradoras encontrassem um caminho legalmente viável para a elaboração de contratos diferenciados, se espelhados na por vezes mencionada legislação vigente sobre planos e seguros privados de assistência médica privada. Por consequência, embora o tema sempre mereça mais aprofundamentos (o que ora se estimula aos leitores deste CENÁRIO), aqui se entende que urge, no Brasil, uma alteração aditiva na Lei 9.656/98, ou mesmo uma nova Lei, que especificamente regule e normatize os chamados Planos Coletivos. Pois, por enquanto, são regidos, preponderantemente, por normas da ANS, muitas vezes ainda incompletas, apesar de, em outras tantas, adequadas do ponto de vista técnico, mas pouco aceitas no âmbito judicial, onde findam por chegar as insatisfações (ações judiciais) de consumidores e beneficiários finais de planos e seguros de saúde.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "9",
      },
      {
        idPergunta: "424",
        idCategoriaPergunta: "78",
        title: "Quais as Conclusões?",
        content:
          "A saúde privada é utilizada por milhões de brasileiros e sua análise, cada vez e sempre mais criteriosa, merece espaço especial em agendas políticas, econômicas, sociais e, igualmente, jurídicas. Nesta Parte 1, para além de uma introdução na referida temática e de breves explanações sobre institutos e conceitos, ora mais ora menos amplos, decidiu-se também já anunciar uma problemática, para a qual os esforços que aqui se entendem indispensáveis não foram ainda tomados. Mais precisamente, explicou-se que os Planos Coletivos carecem da devida e adequada normatização pelo legislador brasileiro e, logicamente, não apenas pela regulamentação por parte da ANS, a qual, em vários casos, pode acabar por ultrapassar os lindes de sua atuação regulatória, o mesmo ocorrendo com o Poder Judiciário, quando invocado para tratar do assunto, sem uma legislação clara que cuide, com a necessária precisão, dos chamados e tantas vezes mencionados Planos Coletivos. Dessa forma, a partir desta Parte 1, deu-se início a uma esfera de debates que será gradativamente (e não necessariamente, sequencialmente, no Capítulo 4 do APP “Constituição para Leigos”) acrescida de novos institutos e conceitos, assim como aprofundada, no intuito de que a matéria central sob foco seja cada vez mais entendida e alvo de diálogos no meio jurídico, logicamente, composto, principalmente, dos leitores dos CENÁRIOS deste APP.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "10",
      },
      {
        idPergunta: "425",
        idCategoriaPergunta: "78",
        title:
          "Quais os textos dos dispositivos constitucionais e legais citados neste CENÁRIO?",
        content:
          "Dada a grande quantidade e, se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais citados neste CENÁRIO.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "11",
      },
      {
        idPergunta: "426",
        idCategoriaPergunta: "78",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "12",
      },
      {
        idPergunta: "427",
        idCategoriaPergunta: "78",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) ARAGÃO, Alexandre Santos de. Agências reguladoras e a evolução do direito administrativo econômico. Rio de Janeiro: Editora Forense, 2002.; 2) BONIZZATO, Luigi, REIS, José Carlos Vasconcellos dos. Direito Constitucional: questões clássicas, contemporâneas e críticas: atualizada e ampliada nos 30 anos da Constituição de 1988. 02. ed. Rio de Janeiro: Editora Lumen Juris, 2018.; 3) CANOTILHO, J.J. Gomes. Direito Constitucional e teoria da Constituição. 07. ed. Coimbra: Almedina, 2003.; 4) MOREIRA NETO, Diogo de Figueiredo. Mutações do Direito Administrativo. 2. ed. Rio de Janeiro: Editora Renovar, 2001.; 5) SEN, Amartya. Desenvolvimento como liberdade. Tradução de Laura Teixeira Motta. São Paulo: Companhia das Letras, 2000.; 6) SOUTO, Macos Juruena Villela. Desestatização, privatização, concessões e terceirizações. 03. ed. Rio de Janeiro: Editora Lumen Juris, 2000.; 7) VERMEULE, Adrian. Law’s abnegation: from Law’s Empire to the Administrative State. Cambridge, Massachusetts: Harvard University Press, 2016.; 8) SÉGUIN, Elida. Plano de Saúde. Rio de Janeiro: Editora Lumen Juris, 2005.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "13",
      },
      {
        idPergunta: "428",
        idCategoriaPergunta: "78",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 06 mar. 2019. 2) BRASIL. Lei 9.656, de 03 de junho de 1998. Disponível em: planalto.gov.br</a>. Acesso em: 06 mar. 2019. 3) BRASIL. Resolução CONSU nº 10, de 03 de novembro de 1998. Disponível em: planalto.gov.br</a>. Acesso em: 06 mar. 2019.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "14",
      },
      {
        idPergunta: "429",
        idCategoriaPergunta: "78",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "15",
      },
      {
        idPergunta: "430",
        idCategoriaPergunta: "78",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre o direito à saúde: CURY, Ieda Tatiana. Direito fundamental à saúde: evolução, normatização e efetividade. Rio de Janeiro: Editora Lumen Juris, 2005.; 2) Sobre planos de assistência privada à saúde: BOTTESINI, Maury Ângelo, MACHADO, Mauro Conti. Lei dos Planos e Seguros de Saúde: comentada artigo por artigo – doutrina – jurisprudência. 02. Ed. São Paulo: Editora Revista dos Tribunais, 2005 (e edições posteriores).",
        idCategoria: "78",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais e uma primeira problemática fático-legislativa",
        ordemCategoriaPai: "400",
        ordemCategoria: "412",
        ordemPergunta: "16",
      },
    ],
  };
  const cenario12 = {
    rows: [
      {
        idPergunta: "431",
        idCategoriaPergunta: "79",
        title: "Considerações Iniciais?",
        content:
          "Não é de hoje que o sistema e o arcabouço da democracia representativa do Brasil encontram-se em manifesta crise. Apesar de ser difícil a substituição de sua preponderância dentro do processo democrático do país, fato é que tradicionais mecanismos, institutos e instituições ligadas à representatividade vêm sendo constantemente colocadas em cheque pela população. Por exemplo, institutos como o voto, instituições como Partidos Políticos e Sindicatos, e mecanismos como as eleições são alvo crescente de descrédito e de variadas reações por parte do povo brasileiro. Portanto, este CENÁRIO fará um exame amplo e geral, mas com questionamentos também pontuais, sobre o fenômeno acima anunciado e sobre como outras formas de manifestação democrática vêm ganhando mais espaço da conjuntura política nacional. Uma conjuntura, certamente, não exclusividade do Brasil, mas ligada a problemas vivenciados também em outras nações, inclusive desenvolvidas, cujos povos questionam-se sobre o quão realmente estão representados por seu líderes eleitos, comumente, pelo escrutínio popular.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "1",
      },
      {
        idPergunta: "432",
        idCategoriaPergunta: "79",
        title:
          "Em inicial análise, o que estabelece a Constituição de 1988 sobre a democracia propriamente dita?",
        content:
          "A Constituição vigente foi claríssima em seus dizeres ao estabelecer, entre inúmeros outros dispositivos de seu texto, mas logo em seu Art. 1º e parágrafo único, que o Brasil, além de ser um Estado Democrático de Direito, tem todo poder emanado do povo. E este mesmo povo pode exercer todo o poder a ele conferido direta ou indiretamente, nos termos do que a própria Constituição prevê. Nesse sentido, extrai-se, sob um já inicial olhar, que a Constituição prestigiou duas formas democráticas básicas: a representativa (exercício indireto do poder) e participativa (exercício direto do poder). Ademais, a soberania popular foi sacramentada como um dos alicerces do Estado Constitucional brasileiro.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "2",
      },
      {
        idPergunta: "433",
        idCategoriaPergunta: "79",
        title:
          "O que seriam, em preliminares dizeres e, exemplificativamente, a democracia representativa e a democracia participativa?",
        content:
          "A democracia representativa é, em singelas e exordiais considerações, a fundada na escolha de representantes pelo povo brasileiro, por meio das chamadas eleições típicas. Chefes dos Poderes Executivos das três esferas da Federação (União, Estados e Municípios), ou seja, Presidente da República, Governadores de Estado e Prefeitos, assim como os membros dos Poderes Legislativos, também nos três graus federativos citados, isto é, Deputados Federais (Câmara dos Deputados), Senadores da República (Senado Federal), Deputados Estaduais (Assembleias Legislativas), Deputados Distritais (Câmara Legislativa) e Vereadores (Câmaras Municipais ou dos Vereadores), são os considerados eleitos pela mencionadas eleições típicas. E, para todas as figuras apenas salientadas, por meio do voto, o povo transfere poderes de administração, de elaboração de leis e até constituintes (caso, principalmente, dos Deputados Federais e Senadores, que podem, mediante quórum especialíssimo previsto no Art. 60, da CRFB, emendá-la). Valendo lembrar que tais poderes são transferidos por tempo determinado, dado que a própria CRFB previu a periodicidade para o exercício do direito de voto e, por corolário, a periodicidade dos mandatos eleitorais. Se tal modelo representativo, em relação ao qual se constatou um estado de crise, também se afirmou ser o ainda francamente preponderante no Brasil, a democracia participativa encontra nas figuras do plebiscito (consulta prévia) e do referendo (consulta posterior) seus institutos mais tradicionais. Entretanto, tais chamadas consultas à população se dão pelo exercício de uma escolha em um processo muito semelhante ao eleitoral. O povo vai às urnas para dizer um “sim” ou um “não”, um “concordo” ou um “discordo”, relativamente a determinadas matérias objeto de projetos de lei. A iniciativa popular de lei, prevista no Art. 61, § 2º, da CRFB, pode também ser considerado um clássico modelo de participação mais direta da população no processo legislativo, mas suas rigorosas exigências findam por tornar poucas as experiências bem sucedidas brasileiras, desde a promulgação da CRFB, o mesmo ocorrendo com o plebiscito e com o referendo, pouquíssimas vezes convocados pelo Congresso Nacional. Enfim, ressalte-se que os citados plebiscito, referendo e iniciativa popular de lei são pelos aqui pesquisadores entendidos como formas de participação semidireta do povo brasileiro. E isto porque as participações diretas diferem por derivarem da voz popular ouvida diretamente das ruas, em manifestações populares ou outras formas de participação que destoem de qualquer comando ou preparação por parte do Poder Público. ",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "3",
      },
      {
        idPergunta: "434",
        idCategoriaPergunta: "79",
        title:
          "Por que a democracia representativa está sendo considerada como vítima de crise?",
        content:
          "Os representantes eleitos, repletos de poderes, muitas vezes não correspondem às expectativas do eleitor, que naqueles não enxerga uma real outorga dos poderes passados pela via eleitoral. A bandeira política da corrupção, congregada a casos julgados e oficialmente declarados como de improbidade administrativa, muitos dos quais ligados a atos corruptos, corrobora a formação de uma imagem desgastada dos representantes eleitos para a defesa dos interesses do povo e, por consequência, do interesse público primário, nos termos exatos utilizados por Celso Antônio Bandeira de Mello (MELLO, 1999), em clássica Obra sobre Direito Administrativo, utilizada como base para ainda que as mais contemporâneas e novas teorias sobre a temática. Paralelamente, ordenamentos que se valem de eleições indiretas para a escolha de governantes, vivem momentos também de indagações. Uma escolha indireta para Presidente dos Estados Unidos da América, país com suas peculiaridades, mas com normas e condutas que muito também influenciaram a formação do ordenamento jurídico brasileiro, principalmente, desde a Proclamação da República e a subsequente entrada em vigor da Constituição dos Estados Unidos do Brazil de 1891, promove, há tempos, desconfianças e divergências de opiniões no que tange à relação entre representante e representado naquele país (GRIFFIN, 2015). No Brasil, ainda que a rega geral estampada no Art. 60, § 4º, inciso II, da CRFB, seja a do voto direto, eleições parlamentares costumam reservar surpresas para o eleitorado, dadas as complexas normas eleitorais de composição das Casas Legislativas, sobretudo as compostas por sistema proporcional, assim como outras mais normatizações, inclusive as relativas à figura da “suplência”, que tantas vezes traz mudanças na ocupação de cadeiras que deveriam estar sendo utilizadas por reais vencedores de eleições e, não, por suplentes, na maioria, das vezes desconhecidos. Estes e outros mais fatores, que não comportam mais aprofundamento neste momento, levam e levaram democracias representativas a desgastes ímpares ao longo dos anos, fato indubitavelmente causador do que aqui se chama de crise.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "4",
      },
      {
        idPergunta: "435",
        idCategoriaPergunta: "79",
        title:
          "Por que a democracia participativa ganha fôlego e cada vez mais espaço no Brasil e no mundo?",
        content:
          "Entre outras causas, em razão da crise da democracia representativa já citada e do crescimento das possibilidades de acesso a informações que, há anos atrás, seriam privilégio de poucos, a democracia participativa vai ganhando cada vez mais espaço na esfera política. Entretanto, no caso brasileiro, a participação popular resta igualmente garantida e prevista da CRFB, em vários dispositivos. Institutos aqui já mencionados, como plebiscito, referendo e iniciativa popular de lei, por exemplo, constam expressamente não somente do Art. 14 da CRFB, que cuida dos direitos políticos enquanto direitos fundamentais, mas também de outras normas da própria CRFB e de leis infraconstitucionais. Mas, tais institutos, como já neste CENÁRIO anunciado, podem ser considerados uma forma de participação mais direta da população, mas não tão exclusiva, nem mesmo intensa. Manifestações populares ganharam muita força no país, sobretudo a partir das fatídicas manifestações de junho de 2013 e a tecnologia da informação fez com que o povo crescentemente passasse a ter mais contato e, gradativamente, interesse pelos negócios políticos do Estado. No tocante à tecnologia da informação, merece especial destaque o advento e consolidação das redes sociais, as quais serviram de apoio interna e externamente para uma série de mudanças de rumos políticos. A “Primavera Árabe” que trouxe consigo inúmeras consequências sociais, políticas, econômicas, geoestratégicas etc., teve precedentes (países como a Islândia, por exemplo) e foi acompanhada de perto, assim como sucedida por vários movimentos e mobilizações populares que revolucionaram muitos países. A mesma tecnologia da informação, também de modo mais institucionalizado, vem mostrando sua força com sítios e portais na internet, nos quais cidadãos podem mais diretamente participar e opinar para os rumos políticos do Estado. No Brasil, a título meramente ilustrativo e entre outros exemplos, Câmara dos Deputados e Senado Federal possuem seus portais, pelos quais recebem de modo veloz opiniões oriundas de diversas pessoas e cidadãos, ligados aos mais variados grupos sociais.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "5",
      },
      {
        idPergunta: "436",
        idCategoriaPergunta: "79",
        title:
          "Quais alguns dos principais problemas contemporâneos para o Estado, ligados à crise da representatividade e ao crescimento da participação popular mais direta?",
        content:
          "Se, então, conforme visto neste CENÁRIO, o avanço da tecnologia da informação, com a fortificação de acesso à internet e a redes sociais, é uma realidade no Brasil, tal fenômeno não vem desacompanhado de problemas de inúmeras ordens. É sabido que as redes sociais não são nem podem ser consideradas uma fonte completamente fidedigna de informação e formação de opinião. Aliás, em um mundo cujo avanço tecnológico é de potencial elevadíssimo, o rastreamento de perfis já é há um bom tempo fato consumado, o que faz com que redes sociais passem a ser muito mais um espelho de seus usuários do que uma fonte de novidades. Portanto, muito pelo contrário, a redes sociais não podem exercer um papel que, se elas conferido, pode trazer consequências altamente danosas, tanto de cunho individual, quanto de cunho coletivo. E que não se fale somente de tais redes! E-mails e a própria navegação em si, na rede mundial de computadores, é acompanhada de rastreamentos que, lançando mão de algoritmos sofisticados, conseguem filtrar os mais particulares e individualizados perfis. Entra em um sítio eletrônico para uma mera pesquisa sobre uma possível, mas não concretizada compra de uma geladeira, e lá começam as propagandas de geladeiras em todos os momentos em que se “navega” pelo mundo digital. Mesmo com leis sobre proteção de dados entrando em vigor em vários países, entre outras normas protetivas de direitos de liberdade fundamentais, é irrevogável o avanço tecnológico e digital. E um mundo praticamente sem fronteiras tornou-se realidade implacável, com a qual não apenas cada país tem que conviver e administrar com cada vez mais cuidado e atenção, mas também cada indivíduo, fato que, sob uma primeira análise, parece ainda de difícil alcance. Nesse sentido, estes e tantos outros fatores, a serem também examinados em CENÁRIOS futuros, tornaram a democracia em seus moldes participativos também recheada de problemas, os quais não a afastam e nem podem servir de base para seu enfraquecimento, mas precisam ser alvo de todas as atenções sociais e governamentais.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "6",
      },
      {
        idPergunta: "437",
        idCategoriaPergunta: "79",
        title: "Quais as conclusões?",
        content:
          "Nesta Parte 1, pretendeu-se dar início a uma série de debates que será, Parte após Parte (não necessariamente em sequência temporal no Capítulo 4 do APP “Constituição para Leigos”), acrescida de novos institutos, conceitos e reflexões, assim como aprofundada, no intuito de que a matéria central sob foco, qual seja, a crise da democracia representativa, assim como novos rumos da participação popular, juntamente com a influência do avanço tecnológico nas tradicionais relações republicanas, institucionais e democráticas, seja cada vez mais entendida e alvo de diálogos no meio jurídico, logicamente, composto, principalmente, a partir da leitura dos CENÁRIOS deste APP. Não há dúvidas de que o assunto é de grande espetro e amplitude, o que faz com que recortes temáticos tenham que sucessivamente ocorrer em prol de um entendimento sempre mais preciso do que aqui se pretende coletivizar em matéria de conhecimento, especialmente jurídico.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "7",
      },
      {
        idPergunta: "438",
        idCategoriaPergunta: "79",
        title:
          "Quais os textos dos dispositivos constitucionais e legais citados neste CENÁRIO?",
        content:
          "Dada uma certa quantidade e, se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais citados neste CENÁRIO.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "8",
      },
      {
        idPergunta: "439",
        idCategoriaPergunta: "79",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "9",
      },
      {
        idPergunta: "440",
        idCategoriaPergunta: "79",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi. A Constituição e suas Instituições contemporâneas: representatividade, crises, exemplos e marcos fáticos no Brasil como elementos de análise de teorias constitucionais-institucionais brasileiras. Rio de Janeiro: Editora Lumen Juris, 2017.; 2) CAMPANHOLE, Adriano, CAMPANHOLE, Hilton Lobo. Constituições do Brasil. 04. ed. São Paulo: Editora Atlas, 1979.; 3) CANOTILHO, J. J. Gomes. Direito Constitucional e teoria da Constituição. 07. ed. Coimbra: Almedina, 2003.; 4) GRIFFIN, Stephen M. Broken Trust: dysfunctional Governament and Constitutional Reform. Kansas: University Press of Kansas, 2015.; 5) MELLO, Celso Antônio Bandeira de. Curso de Direito Administrativo. 11. ed. São Paulo: Editora Malheiros, 1999.; 6) SARTORI, Giovanni. Homo videns: televisão e pós-pensamento. Tradução de Antonio Angonese. Bauru: EDUSC, 2001.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "10",
      },
      {
        idPergunta: "441",
        idCategoriaPergunta: "79",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 07 out. 2018.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "11",
      },
      {
        idPergunta: "442",
        idCategoriaPergunta: "79",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "12",
      },
      {
        idPergunta: "443",
        idCategoriaPergunta: "79",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Constitucionalismo e teorias institucionais: BOLONHA, Carlos, BONIZZATO, Luigi, MAIA, Fabiana (Coords.). Teoria institucional e constitucionalismo contemporâneo. Curitiba: Editora Juruá, 2016.; 2) Redes sociais, Primavera Árabe e democracia contemporânea: CASTELLS, Manuel. Redes de indignação e esperança: movimentos sociais na era da internet. Tradução de Carlos Alberto Medeiros. Rio de Janeiro: Jorge Zahar Editor, 2012.",
        idCategoria: "79",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 12 - Crise da Democracia Representativa brasileira e novas formas de participação popular: uma abordagem ampla (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "413",
        ordemPergunta: "13",
      },
    ],
  };
  const cenario13 = {
    rows: [
      {
        idPergunta: "445",
        idCategoriaPergunta: "80",
        title: "Quais as Considerações Iniciais?",
        content:
          "A utilização de Decretos pelos membros da Administração Pública brasileira é prevista na Constituição (CRFB) e em lei e, portanto, um ato, a priori, considerado legal e constitucional. Apesar de ser normal e genericamente criado pelos Chefes dos Poderes Executivos dos Três Graus Federativos brasileiros, ou seja, União, Estados e Municípios, somando-se, ainda, o Distrito Federal (não como Grau, mas como mais um ente a ser considerado de modo sui generis), podem e devem outros específicos administradores públicos, tais como Ministros de Estado, Secretários Estaduais e Municipais, referendá-los e expedir instruções em respeito aos referidos Decretos (Art. 87 da CRFB, com aplicação, em respeito ao princípio da simetria, aos demais graus federativos indiretamente citados). Entretanto, a utilização de Decretos, embora útil e eficaz do ponto de vista gerencial e governamental (que se observe sua utilização intensa a partir de janeiro de 2019, máxime no âmbito do Poder Executivo da União), em um Estado de Direito como o brasileiro, no qual o princípio da separação do Poderes se encontra estampado logo no Art. 2º da CRFB, deve respeitar os seus próprios limites conceituais e teóricos (frise-se, dos próprios Decretos), com todos os efeitos práticos daqueles decorrentes. Nesse sentido, um Decreto, até mesmo por ser elaborado por uma só pessoa (por exemplo, o Presidente da República ou um Governador de Estado ou, ainda, entre outros, um Prefeito no âmbito municipal), não deve ultrapassar suas fronteiras, a fim de que a Constituição não seja desrespeitada, tanto quando expressamente fez menção à figura dos Decretos, quanto quando, embora não expressamente, entregou ao Poder Legislativo a atividade legiferante e o poder de inovação e criação na ordem jurídica nacional. A partir disso, as perguntas e respostas subsequentes tentarão melhor localizar o leitor interessado em questões centrais ligadas ao tão importante instituto e instrumento jurídico denominado “Decreto”.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "1",
      },
      {
        idPergunta: "446",
        idCategoriaPergunta: "80",
        title:
          "Em inicial análise, quais serão os tipos de Decretos examinados neste CENÁRIO?",
        content:
          "Em um primeiro momento e, para as escolhas, recortes temáticos e fins específicos deste CENÁRIO, serão examinados os aqui chamados Decretos Inominados, Decretos Regulamentares, Decretos Legislativos e os antigos e não mais existentes Decretos-leis.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "2",
      },
      {
        idPergunta: "447",
        idCategoriaPergunta: "80",
        title: "O que seriam, de acordo com este APP, os Decretos Inominados?",
        content:
          "Os Decretos Inominados são aqueles considerados ordinários e ligados à necessidade de o administrador público responsável tomar alguns atos reputados formais e ligados, direta e imediatamente, ao funcionamento da Administração Pública brasileira. Por exemplo, assim, são Decretos pelos quais se nomeia um agente para a ocupação de um cargo público, assim como se demite e se remove, nas hipóteses em que a lei e a CRFB autorizam. Costuma-se dizer que o Decreto é o veículo principal de manifestação do Presidente da República e, por simetria, dos Governadores dos 26 Estados membros da Federação brasileira, dos Prefeitos dos mais de 5.500 municípios brasileiros, assim como, ainda, do Governador do Distrito Federal.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "3",
      },
      {
        idPergunta: "448",
        idCategoriaPergunta: "80",
        title:
          "O que seriam, de acordo com este APP, os Decretos Regulamentares?",
        content:
          "Com uma carga jurídica substancialmente maior, os Decretos Regulamentares são aqueles pelos quais um administrador público e, comumente, um chefe de Poder Executivo, regulamenta uma lei, devidamente criada pelo Poder Legislativo, de modo a torná-la mais facilmente aplicável, dando-a maior concretude, mas sem se perder da abstração legal e, em menor nível mas também existente, da abstração que deve subsidiar todas as normas jurídicas do país, incluindo os próprios Decretos. Na realidade, muito utilizados no Brasil, sobretudo na esfera do Terceiro Grau Federativo (o municipal), apesar de poderem ser alvo de utilização no âmbito de todas as esferas federativas do país, os Decretos Regulamentares são ferramenta essencial para um também bom funcionamento da Administração Pública, sobretudo quando se pensa na fiel e mais factível execução de certas leis. É certo que nem todas as leis precisarão de regulamentação posterior, mas muitas, sim. E, ao elaborar um Decreto Regulamentar, a chefia de um Poder Executivo deve levar em conta a necessidade que uma certa lei apresenta de ser regulamentada para ser aplicada ou, simplesmente, melhor e mais adequadamente aplicada, a depender dos dizeres e do grau de abstração legal. Também, deve ser avaliado o tipo e o conteúdo da lei que se pretende regulamentar, uma vez que muitas leis não têm uma influência direta em atos que interessem ao Poder Executivo, real e legal regulamentador de leis e, portanto, criador dos Decretos Regulamentares.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "4",
      },
      {
        idPergunta: "449",
        idCategoriaPergunta: "80",
        title:
          "O que seriam, de acordo com este APP, os Decretos Legislativos?",
        content:
          "Os Decretos Legislativos, já em diretos e objetivos dizeres, são os previstos no Art. 59, inciso VI, da CRFB. E são aqueles que devem e vão veicular matérias de competência exclusiva do Congresso Nacional. Tais matérias são as previstas nos 17 (XVII) incisos Art. 49 da CRFB e incluem, por exemplo, “resolver definitivamente sobre tratados, acordos ou atos internacionais que acarretem encargos ou compromissos gravosos ao patrimônio nacional”, “julgar anualmente as contas prestadas pelo Presidente da República e apreciar os relatórios sobre a execução dos planos de governo” e, entre outras competências, “autorizar, em terras indígenas, a exploração e o aproveitamento de recursos hídricos e a pesquisa e lavra de riquezas minerais”. Para além destes casos, após a Emenda Constitucional nº 32/2001, que alterou o regime jurídico das Medidas Provisórias, o Art. 62 foi enriquecido com uma série de parágrafos, um dos quais o 3º, que assim estatui: “As medidas provisórias, ressalvado o disposto nos §§ 11 e 12 perderão eficácia, desde a edição, se não forem convertidas em lei no prazo de sessenta dias, prorrogável, nos termos do § 7º, uma vez por igual período, devendo o Congresso Nacional disciplinar, por decreto legislativo, as relações jurídicas delas decorrentes”. Assim, neste caso específico, o chamado Decreto Legislativo, de também competência do Congresso Nacional, tem uma função expressamente definida pela CRFB, que é a de regular, no prazo de 60 dias (§11, do Art. 62, da CRFB) as relações jurídicas decorrentes da perda da eficácia de uma Medida Provisória por decurso do prazo sem votação pelo Poder Legislativo ou por sua não aprovação. Portanto e, em resumo, nos casos do Art. 49, a partir da previsão formal inicial do Art. 59, inciso VI, assim como na hipótese dos §§ 3º e 11 do Art. 62, todos da CRFB, pode ter lugar a edição de um Decreto chamado Legislativo.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "5",
      },
      {
        idPergunta: "450",
        idCategoriaPergunta: "80",
        title: "O que seriam, de acordo com este APP, os Decretos-leis?",
        content:
          "Primeiramente, é mister salientar que os Decretos-leis não mais existem no ordenamento jurídico brasileiro desde a entrada em vigor da CRFB. Entretanto, ainda se houve falar deles. Algumas vezes de forma correta, outras tantas de forma equivocada. Os Decretos-leis, para os fins da pesquisa que levou à materialização deste APP, foram os previstos nas Constituições de 1967 e de 1969. A Constituição de 1967 assim estabelecia em seu Art. 58: “Art 58 - O Presidente da República, em casos de urgência ou de interesse público relevante, e desde que não resulte aumento de despesa, poderá expedir decretos com força de lei sobre as seguintes matérias: I - segurança nacional; II - finanças públicas”. E assim estatuía o Art. 55 da Constituição de 1969: “Art. 55. O Presidente da República, em casos de urgência ou de interêsse público relevante, e desde que não haja aumento de despesa, poderá expedir decretos-leis sôbre as seguintes matérias: I - segurança nacional; II - finanças públicas, inclusive normas tributárias; e III - criação de cargos públicos e fixação de vencimentos”. É certo que no presente CENÁRIO não se adentrarão questões mais específicas e aprofundadas sobre a função e as características dos Decretos-leis sob a égide das Constituições anteriores à atual. Entretanto, vale ressaltar que, apesar de institutos distintos da atual Medida Provisória, possuem com estas algumas semelhanças, a principal das quais a relativa à competência criadora do Presidente da República, com entrada em vigor imediatamente após a sua edição. De todo modo e, retornando ao objetivo central do presente CENÁRIO e da pergunta em tela, estas foram as principais e mais relevantes considerações sobre os Decretos-leis, os quais, repita-se, não mais existem no ordenamento jurídico nacional.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "6",
      },
      {
        idPergunta: "451",
        idCategoriaPergunta: "80",
        title:
          "Há limites para o exercício dos Decretos e, em especial, dos Decretos Regulamentares?",
        content:
          "Em que pese a relevância de todos os tipos de Decretos aqui citados e a necessidade imperiosa de respeito aos seus limites legais e constitucionais, o que exsurge, para os fins da pesquisa executada para a publicação do presente CENÁRIO, como alvo de maiores preocupações de mérito e conteúdo, no que tange aos seus limites, é o chamado Decreto Regulamentar. O Decreto Regulamentar nada mais é, também e, em outras palavras e reflexões, a materialização de um dos chamados “poderes” que o administrador público possui. Assim, possui o administrador público, por exemplo, o poder vinculado, o poder discricionário, o poder disciplinar e, entre outros, o poder regulamentar. É, este último, em reforço ao já dito em respostas a questões anteriores deste CENÁRIO, o poder de regulamentação de leis. Regulamentar as leis, que são decorrentes da atividade legiferante, de responsabilidade do Poder Legislativo, conferindo a elas maior aplicabilidade, por meio de um processo normativo de concessão de maior concretude a dispositivos mais genéricos. Mas, que toda atenção se preste neste momento: um poder de regulamentar e, não, de primariamente criar. E tal afirmação se pauta na longa história brasileira de utilização do poder regulamentar, principalmente por meio da edição de Decretos, ultrapassando-se o ato meramente regulamentador e se atingindo a esfera de normatização inovadora. Vale sempre lembrar, somente ao Poder Legislativo cabe primariamente criar e inovar no ordenamento jurídico brasileiro. Não pode um Prefeito, um Presidente ou um Governador, por Decreto, criar normas que não sejam decorrência de uma outra norma prevista em lei, sob pena de ferirem o princípio da separação dos Poderes, já citado neste CENÁRIO. Certamente e, muitas vezes, não é tarefa fácil para um administrador público imbuído de boa-fé, elaborar um Decreto Regulamentar, o qual possui a estrutura muito semelhante à de uma Lei (uma estrutura com Artigos, parágrafos, inciso etc.). E isto porque a linha imaginária divisória entre uma Lei e um Decreto pode ser bastante tênue, de modo a fazer com que se tenha grande dificuldade em se definir se se está inovando ou não por meio da edição de normas que devem ser apenas regulamentares. Mas, por outro lado, uma simples falta de preocupação ou atenção de um administrador público no exercício de seu poder regulamentar já pode ser também suficiente para que, com maior facilidade, a linha imaginária divisória citada seja ultrapassada e se desrespeite o chamado poder regulamentar e, por conseguinte, o princípio da separação dos poderes e a base democrática segundo a qual as leis devem seu elaboradas pelo colegiado de pessoas eleitas pelo povo para tal, ou seja, os chamados parlamentares, integrantes dos Poderes Legislativos da União, dos Estados e dos municípios, além do Distrito Federal; e, por corolário, segundo a qual as normas jurídicas devem ser primariamente criadas não por uma só pessoa, no caso que ora se debate, por um dos chefes dos Poderes Executivos da Federação brasileira ou por quaisquer de seus auxiliares diretos.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "7",
      },
      {
        idPergunta: "452",
        idCategoriaPergunta: "80",
        title:
          "Em mais breves dizeres, como se poderia, com rapidez teórica, estabelecer uma diferenciação entre a Lei e um Decreto Regulamentar?",
        content:
          "Para além de todo o exposto na resposta à indagação anterior, em termos mais diretos, mas, de forma alguma, distintos do até aqui já colocado neste CENÁRIO, à Lei, sempre mais genérica, caberia criar o direito propriamente dito e a respectiva obrigação. E ao Decreto Regulamentar caberiam as minúcias, o modo de cumprir a obrigação. Por isso a ideia, extraída da palavra “regulamentar”, de regulamento.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "8",
      },
      {
        idPergunta: "467",
        idCategoriaPergunta: "80",
        title:
          'Pode haver controle de constitucionalidade sobre um "Decreto Regulamentar"?',
        content:
          'Embora o Supremo Tribunal Federal venha divergindo, ao longo dos anos, no tocante a entendimentos de alguns de seus Ministros, aqui se entende ser cabível o controle pela via concentrada e pela via difusa de um "Decreto Regulamentar". De acordo com eventuais e diversos posicionamentos teóricos, um "Decreto Regulamentar" que, por exemplo, exorbitasse sua esfera caracteristicamente regulamentar, enquadrar-se-ia na esfera da ilegalidade e, não, da inconstitucionalidade. Deveria, portanto, também nos termos do Art. 49, inciso V, da CRFB, ser examinado e, quiçá sustado, pelo Congresso Nacional (Art. 49. É da competência exclusiva do Congresso Nacional: (...) V - sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa"). Entretanto, repita-se, com base no Art. 102, inciso I, alínea "a", da CRFB, enquanto um ato normativo (em sentido amplo) federal que pode apresentar manifestas inconstitucionalidades, tais como, entre outras, ofensa ao princípio da separação dos Poderes, conforme já visto neste CENÁRIO, um "Decreto Regulamentar" pode estar sujeito ao exame pelo Supremo Tribunal Federal, uma vez provocado sob a alegação de ataque à CRFB. Por fim pela chamada via difusa do controle de constitucionalidade, o Art. 102, inciso III, alínea "a", poderia dar ensejo a um questionamento de "Decreto Regulamentar", no caso de contrariedade a dispositivo da CRFB. Percebe-se que a matéria pode guardar controvérsia teórica quanto ao cabimento de um controle de constitucionalidade ou de alegação de mera ilegalidade - caso em que se proclama o descabimento deste último -, apesar, frise-se, de neste CENÁRIO defender-se a aplicação mais ampla de um controle de constitucionalidade, sobretudo quando um "Decreto Regulamentar" exorbitar suas fronteiras e, paralelamente, atingir dispositivo da CRFB.',
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "9",
      },
      {
        idPergunta: "453",
        idCategoriaPergunta: "80",
        title: "Quais as conclusões?",
        content:
          "As principais conclusões deste CENÁRIO estão relacionadas ao exercício do chamado poder regulamentar. A partir de um exame inicial da figura dos Decretos, que podem ser de diversas categorias, tendo sido aqui escolhidas quatro – inominados, regulamentares, legislativos e Decretos-leis -, uma das quais sequer mais existente no ordenamento jurídico nacional, foram montadas algumas bases sobre as quais se caminhou para considerações sobre os Decretos Regulamentares. E estes enquanto materialização daquele, isto é, do poder regulamentar. Apesar de boa parte da utilização dos chamados decretos regulamentares, nos últimos tempos, terem sido elaborados no âmbito municipal, terceiro grau federativo brasileiro, o Governo federal, que tomou posse no início do ano de 2019, veio a mais lançar mão de tal instrumento, legalmente previsto e com bases constitucionais. E isto acabou chamando mais a atenção de todo universo social, econômico e jurídico para o instituto e seus desdobramentos. Contudo, como bem exposto neste CENÁRIO, seja no âmbito federal, municipal ou estadual, juntamente com a figura do Distrito Federal, deve-se sempre atentar para os limites do exercício do poder regulamentar, ensejador mor para a criação dos Decretos Regulamentares. Pois, por meio deste, teórica e formalmente, não se pode, de modo algum, inovar na ordem jurídica. Criar normas e fazer com que o Executivo se sobreponha e/ou substitua o Poder Legislativo.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "10",
      },
      {
        idPergunta: "454",
        idCategoriaPergunta: "80",
        title:
          "Quais os textos dos dispositivos constitucionais e legais citados neste CENÁRIO?",
        content:
          "Dada uma certa quantidade e, se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais citados neste CENÁRIO.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "11",
      },
      {
        idPergunta: "455",
        idCategoriaPergunta: "80",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "12",
      },
      {
        idPergunta: "456",
        idCategoriaPergunta: "80",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BINENBOJM, Gustavo. Uma teoria do Direito Administrativo: direitos fundamentais, democracia e constitucionalização. 02. Ed. Rio de Janeiro: Editora Renovar, 2008.; 2) BONIZZATO, Luigi. A Constituição Urbanística e elementos para elaboração de uma teoria do Direito Constitucional Urbanístico. Rio de Janeiro: Editora Lumen Juris, 2010.; 3) CAETANO, Marcello. Manual de Direito Administrativo. 10. ed., vol. 1. Coimbra: Editora Almedina, 1997, 2 v.; 4) CAETANO, Marcello. Princípios fundamentais do Direito Administrativo. Coimbra: Livraria Almedina, 1996.; 5) CAMPANHOLE, Adriano, CAMPANHOLE, Hilton Lobo. Constituições do Brasil. 04. ed. São Paulo: Editora Atlas, 1979.; 6) CANOTILHO, J. J. Gomes. Direito Constitucional e teoria da Constituição. 07. ed. Coimbra: Almedina, 2003.; 7) MELLO, Celso Antônio Bandeira de. Curso de Direito Administrativo. 11. ed. São Paulo: Editora Malheiros, 1999.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "13",
      },
      {
        idPergunta: "457",
        idCategoriaPergunta: "80",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 27 jun. 2019.\r\n2) BRASIL. Constituição da República Federativa do Brasil de 1967. Disponível em: planalto.gov.br</a>. Acesso em: 27 jun. 2019.\r\n3) BRASIL. Emenda Constitucional nº 1, de 17 de outubro de 1969 (Constituição de 1969). Disponível em: planalto.gov.br</a>. Acesso em: 27 jun. 2019.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "14",
      },
      {
        idPergunta: "458",
        idCategoriaPergunta: "80",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "15",
      },
      {
        idPergunta: "459",
        idCategoriaPergunta: "80",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Constitucionalismo e comportamento institucional: BOLONHA, Carlos, BONIZZATO, Luigi, MAIA, Fabiana (Coords.). Teoria institucional e constitucionalismo contemporâneo. Curitiba: Editora Juruá, 2016. 2) Direito administrativo contemporâneo: JORDÃO, Eduardo. Controle judicial de administração pública complexa: a experiência estrangeira na adaptação da intensidade do controle. São Paulo: Editora Malheiros, 2016.",
        idCategoria: "80",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e conceitos clássicos, sob a égide de sua utilização contemporânea",
        ordemCategoriaPai: "400",
        ordemCategoria: "414",
        ordemPergunta: "16",
      },
    ],
  };
  const cenario14 = {
    rows: [
      {
        idPergunta: "472",
        idCategoriaPergunta: "83",
        title: "Alguma Primeira Informação?",
        content:
          "Sim. Este CENÁRIO é todo escrito em inglês, a fim de que se respeite a literalidade das respostas do Professor Sanford Levinson. PUBLICADO em 12.08.2019.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "1",
      },
      {
        idPergunta: "473",
        idCategoriaPergunta: "83",
        title: "Any First Information?",
        content:
          "Yes. This SCENARIO is fully written in English, in respect of the literality of the Professor Sanford Levinson’s answers. PUBLISHED in 08.12.2019.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "2",
      },
      {
        idPergunta: "474",
        idCategoriaPergunta: "83",
        title: "Preliminary Considerations?",
        content:
          "Yes. This app’s chapter 4 remains firmly committed to its line of analysis and its purposes. This 14º SCENARIO is dedicated to its first interview, with one of the greatest names of western Constitutional Law and, most certainly, of United States of America, Professor Sanford Levinson. The subject of analysis, chosen not only after accurate curricular analysis of Professor Levinson, but also after his agreement, is related to present times, in which Constitutional States lean, each one within its democratic system, towards representatives designated in this SCENARIO as right-wing or extreme right-wing. That demonstrates an increasing and relentless contemporaneity, especially when taken into account the atmosphere of risks for the Democratic States founding constitutional texts.\r\nSanford Levinson is Professor at the University of Texas Law School and possess a plural academic background of unmatched magnitude and excellence, that includes Duke University (A.B.), Stanford University Law School (J.D.) and Harvard University (Ph.D.).\r\nIn the following lines, we present just some questions and answers to encourage an in-depth debate about the “Governments and the Life of Constitutions” in contemporary times. It is worth noting that it is a text that was deliberately kept in English, in order to maintain the genuine meaning of questions and Professor Levinson’s answers.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "3",
      },
      {
        idPergunta: "486",
        idCategoriaPergunta: "83",
        title:
          "1) Professor Levinson, what do you think about the extreme-right governments growth around the world, such as USA, Brazil, Italy and England?",
        content:
          "Needless to say, I regret them all very much. It is important, though, to note that “extreme-right” can take different forms in different countries. What one sees in many countries, e.g., Poland, is the return of a close-to-fascistic form of nationalism (and nativism), but it is coupled with support of a generous Welfare State (so long as the benefits go to the “right people”). Similarly, in the U.K., it’s not clear how much the Tories will continue to eviscerate the British Welfare State, as against, once again, limiting its benefits to “real English men and women”. In the U.S. these days, one sees a pernicious nativism mixed with a full-fledged attack on the Welfare State that is almost unique, I think (American exceptionalism, perhaps).",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "4",
      },
      {
        idPergunta: "475",
        idCategoriaPergunta: "83",
        title:
          "2) In your opinion, are the so called “more advanced democracies”, linked to the developed countries, more reliable, stable and safer than the ones of emerging countries, like Brazil?",
        content:
          "The evidence is still out on this. Part of the reason lies in the fact that “democracy” is an “essentially contested concept,” which means, by definition, that we really don’t necessary agree on what counts as an “advanced democracy”. One of my books, for example, is entitled “Our Undemocratic Constitution”, and I resist describing the U.S. as truly democratic at all. Indeed, I think that some of our own difficulties are directly traceable to the fact that we have a notably “counter-majoritarian” Constitution that is tilted in a major way toward preserving the status quo.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "5",
      },
      {
        idPergunta: "487",
        idCategoriaPergunta: "83",
        title:
          '3) Do you think that modern Constitutions and Constitutional Systems - mainly the ones that are based on fundamental rights texts - are compatible with these "new" political orders?',
        content:
          "Sure, with a caveat: “fundamental rights” are themselves “essentially contested”, and it is not difficult for talented lawyers to interpret constitutional provisions in ways that take surprising directions. The U.S. understanding of free speech, for example, is notably different from that of the rest of the world with regard, say, to “hate speech” and its regulation, just as there is debate all over the world about the “true” meaning of equality with regard, say, to “affirmative action”. I would also add that a major dispute among political and constitutional theorists is the status of “property” as a “fundamental right”. Those on the left are inclined to minimize its important, those on the right to make it close to primary. This is especially relevant where redistribution of economic resources, including, in some countries, land itself, is a major political issue.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "6",
      },
      {
        idPergunta: "485",
        idCategoriaPergunta: "83",
        title:
          "4) Professor what about Carl Schmitt`s classical theories? Would they be perceived as more alive than ever?",
        content:
          'I believe that Schmitt, unfortunately, may be the most truly important 20th Century legal philosopher. His theories about emergency power remain altogether relevant, even (or especially) if one disagrees with them. Just as important, perhaps, are his views about the nature of "constitutional identity" and the relationship to an organic people (or volk). ',
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "7",
      },
      {
        idPergunta: "476",
        idCategoriaPergunta: "83",
        title:
          "5) Do you believe that we are having a kind of resurgence of past similar political systems?",
        content:
          "Yes and no. Mark spoke, of course, of initial tragedies that turn into later farces. That is too dismissive, but it’s important to note differences as well as similarities between contemporary and past political system. To emphasize similarities with past political systems may be to blind us to crucial (and potentially terrible) differences based, for example, on modern methods of surveillance and “total information awareness” that limit the necessity, say, of “old-fashioned” police measures as a means of gaining secret information.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "8",
      },
      {
        idPergunta: "477",
        idCategoriaPergunta: "83",
        title:
          "6) In many countries that have democratically chosen right or extreme-right governments, do you think new constitutional interpretations, mainly the ones provided by Supreme Courts, can support the maintenance and continuity of their own Constitutions?",
        content:
          "They can certain try their best, but the crucial questions will involve, first of all, the ease with which old judges can be displaced and new, regime-friendly ones can be appointed, and, then, secondly, whether the powers that be will in fact comply with judicial decrees they strongly disagree with (and perhaps can convince the public to disagree with as well). I am inclined to believe that we—i.e., academic lawyers—tend to overestimate the empirical importance of judicial institutions even if it is necessary to be reminded that courageous judges can in fact help to stave off what Tom Ginsburg and Aziz Huq have labeled “constitutional erosion”. The Colombian Constitutional Court is especially interesting in this regard.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "9",
      },
      {
        idPergunta: "478",
        idCategoriaPergunta: "83",
        title:
          "7) Professor Levinson, do you believe that the Constitutions of the countries mentioned above are threatened?",
        content:
          "YES. I strongly recommend the Ginsburg-Huq book inasmuch as it focuses on the central reality of “erosion” instead of the past practice of “overthrow” via military coups and the like. The most clever authoritarians, such as Victor Orban in Hungary, have learned ways to use “the rule of law” against itself, inasmuch as ominous changes take place by passing constitutional amendments that affect basic structures of the state, including, for example, the appointment and retention of judges.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "10",
      },
      {
        idPergunta: "479",
        idCategoriaPergunta: "83",
        title: "Any Conclusions?",
        content:
          "Professor Sanford Levinson, in his interview with this APP’s Coordinator and Research Group, made clear his concern about the life of the Constitutions in various countries. And, conclusively, in a statement about Carl Schmitt, after being questioned, the Professor said, in verbis, “I believe that Schmitt, unfortunately, may be the most truly important 20th Century legal philosopher”. Thank you very much, Professor Levinson. We look forward to having you participating of our research projects again!",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "11",
      },
      {
        idPergunta: "480",
        idCategoriaPergunta: "83",
        title:
          "What were the legal and constitutional texts mentioned in this SCENARIO?",
        content: "No legal and constitutional texts mentioned.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "12",
      },
      {
        idPergunta: "481",
        idCategoriaPergunta: "83",
        title:
          "What were the participants of the present and specific research?",
        content:
          "In alphabetical order: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "13",
      },
      {
        idPergunta: "482",
        idCategoriaPergunta: "83",
        title: "What were the bibliography references?",
        content:
          "1) GINSBURG, Tom; HUQ, Aziz Z.. How to save a Constitutional Democracy. Chicago: University of Chicago Press, 2018.; 2) LEVINSON, Sanford. Our Undemocratic Constitution: Where the Constitution Goes Wrong (And How We the People Can Correct It). 1 ed. Oxford University Press, 2006.; 3) LEVINSON, Sanford. Reflexões sobre o que constitui uma Constituição: a importância da Constituição de Estrutura e a irrelevância potencial do Juiz Hércules. In: BOLONHA, Carlos, BONIZZATO, Luigi, MAIA, Fabiana (Coords.). Teoria institucional e constitucionalismo contemporâneo. Curitiba: Editora Juruá, 2016.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "14",
      },
      {
        idPergunta: "483",
        idCategoriaPergunta: "83",
        title:
          "What were the bibliography references of the legislations and Constitutions mentioned?",
        content:
          "No formal references, because of no legal and constitutional texts were mentioned.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "15",
      },
      {
        idPergunta: "484",
        idCategoriaPergunta: "83",
        title:
          "Bibliography suggestions to theoretical deepening in the present or similar themes?",
        content:
          "Between other many thesis, it will be mentioned the following ones: 1) LEVINSON, Sanford. Our Undemocratic Constitution: Where the Constitution Goes Wrong (And How We the People Can Correct It). 1 ed. Oxford University Press, 2006.; 2) LEVINSON, Sanford. Framed: America’s 51 Constitutions and the Crisis of Governance. 1 ed. Oxford University Press, 2012.; 3) LEVINSON, Sanford. Constitutional Faith. Revised ed. Princeton University Press, 2011.",
        idCategoria: "83",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme: Governments and Life of the Constitutions",
        ordemCategoriaPai: "400",
        ordemCategoria: "415",
        ordemPergunta: "16",
      },
    ],
  };

  const cenario15 = {
    rows: [
      {
        idPergunta: "492",
        idCategoriaPergunta: "85",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de análise sobre uma problemática que gira em torno da concessão, por Ministra e Presidente do Supremo Tribunal Federal (STF), monocraticamente, de pedido para obtenção de ordem liminar em uma Arguição de Descumprimento de Preceito Fundamental (ADPF), mais precisamente, na ADPF nº 532/2018. Por meio da referida Decisão judicial de Magistrada da Corte Superior e máxima brasileira, foi suspensa a eficácia da Resolução Normativa (RN) nº 433/2018 da ANS, a qual veio, em curto prazo de tempo e, diante da repercussão social do caso, a ser revogada pela própria instituição que a criou, tornando sem objeto a ADPF nº 532.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "1",
      },
      {
        idPergunta: "493",
        idCategoriaPergunta: "85",
        title:
          "Quais as características mais concretas e precisas do objeto central da pesquisa que redundou no presente CENÁRIO?",
        content:
          "Resumidamente, tudo se inicia com a edição, pela ANS, da Resolução Normativa (RN) nº 433, de 27 de junho de 2018. Tal RN trouxe novas normas para Planos Privados de Assistência Médica (sobre estes, indica-se leitura do inicial CENÁRIO sobre o assunto, qual seja, o de nº 11), a serem comercializados por Operadoras e Seguradoras Privadas de Planos de Saúde. Mais precisamente, a referida RN e suas normas trouxeram, entre outros dispositivos, alguns que especificamente versaram sobre a possibilidade de utilização e de cobrança de coparticipação e, também, de franquias, a clientes/consumidores da saúde privada brasileira. Institutos nunca existentes ou apenas incidentes sobre específicos Planos de Saúde, passaram a poder ser utilizados para Planos também individuais, além de para os chamados Planos de Saúde Coletivos e Empresariais por Adesão (ou não). E, ressalte-se, uma utilização a ocorrer já não mais somente por determinações contratuais, mas também por claras e expressas previsões normativas, conferindo-se muito maior força aos institutos citados, vale frisar, da coparticipação e/ou da franquia.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "2",
      },
      {
        idPergunta: "494",
        idCategoriaPergunta: "85",
        title:
          "Em breves e iniciais dizeres, o que seriam, para os fins da pesquisa deste CENÁRIO, a coparticipação e a franquia?",
        content:
          "Por meio da citada Resolução (RN 433), em inicial resumo, estabeleceu-se que todos os novos Planos de Saúde comercializados pelas Operadoras de Planos de Saúde brasileiras poderiam ter a exigência de coparticipação (uma espécie de quantia a ser paga) do beneficiário final em montante equivalente a até 40% (quarenta por cento) do valor de procedimentos médicos, tais como consultas e exames. Nos termos do Art. 2º da Resolução, seriam a coparticipação e a franquia espécies de Mecanismo Financeiros de Regulação (nos termos do Art. 1º da RN 433, “fatores moderadores de utilização dos serviços de assistência médica, hospitalar ou odontológica no setor de saúde suplementar”), a primeira definida como o “valor devido à operadora de plano privado de assistência à saúde, em razão da realização de um procedimento ou evento em saúde pelo beneficiário” e a segunda como sendo o valor “estabelecido no contrato de plano privado de assistência à saúde, até o qual a operadora de plano privado de assistência à saúde não tem responsabilidade de cobertura, quer nos casos de reembolso ou nos casos de pagamento à rede credenciada, referenciada ou cooperada”.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "3",
      },
      {
        idPergunta: "495",
        idCategoriaPergunta: "85",
        title:
          "Por que se faz menção aos limites do poder regulamentar de Agências Reguladoras no presente CENÁRIO?",
        content:
          "Exatamente pelo fato de que, tanto com base na pesquisa que traz, ainda que resumidamente, como um de seus resultados, o aqui exposto, quanto com base nas pretensões e argumentos contidos na ADPF 532 e na Decisão proferida pela Ministra e então Presidente do STF, a ANS, ao editar a RN 433 e criar novas possibilidades de aplicação para a franquia e para a coparticipação, inovou no ordenamento jurídico, ultrapassando, portanto, os limites do poder regulamentar (sobre o poder regulamentar, recomenda-se conferir o CENÁRIO 13) conferido ao administrador público, em sentido amplo.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "4",
      },
      {
        idPergunta: "496",
        idCategoriaPergunta: "85",
        title:
          "Mais precisamente, o que então ocorreu no presente caso concreto?",
        content:
          "Uma vez editada a RN 433, a sociedade civil interessada findou por tomar conhecimento de seu teor e de como tão intensamente poderia refletir sobre a saúde privada e modificar sua estrutura vigente. Tal ciência foi difundida pelos meios e veículos de comunicação tradicionais e representantes de consumidores começaram a tecer duras críticas à RN, a qual era, por outro lado, defendida pelas Operadoras e Seguradoras de Planos Privados de Assistência Médica. De modo conciso, aqueles alegavam que a RN traria grandes prejuízos a consumidores e a clientes, uma vez que sua maior oneração seria evidente. Já as últimas declaravam que a chegada dos institutos da coparticipação e da franquia, nos moldes da RN 433, traria benefícios para todos, com um possível barateamento do valor das mensalidades dos Planos ou Seguros, entre outras consequências.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "5",
      },
      {
        idPergunta: "497",
        idCategoriaPergunta: "85",
        title:
          "E por que findou a RN 433 por ser suspensa e depois cancelada pela própria ANS?",
        content:
          "Na realidade, os grupos sociais mobilizados contra a entrada em vigor da RN 433, findaram por se beneficiar do entendimento da Ordem dos Advogados do Brasil (OAB Federal), a qual impetrou ADPF, numerada 532, na qual se expôs que, principalmente, teria a ANS extrapolado seu poder regulamentar e efetivamente inovado na ordem jurídica, ou seja, legislado. Distribuída a ADPF, a relatoria foi entregue ao Ministro Ricardo Lewandowski, que, encontrando-se em recesso, fez com que fosse o Processo e o pedido para obtenção de ordem liminar encaminhados à Presidente do STF, Ministra Carmen Lucia. E a mesma Magistrada, após exame do caso, decidiu pela procedência do pedido liminar de suspensão, embasando sua Decisão, sobretudo, nos principais argumentos trazidos na Peça Exordial da ADPF. Lembre-se e, de modo mais preciso, com base no fato de a Lei 9.656/98 e nem mesmo qualquer outra lei elaborada pelo Poder Legislativo ter devida e suficientemente tratado do assunto, o que impossibilitava o Poder Executivo, na figura da ANS, de criar normas sobre o tema e, portanto, sobrepor-se à figura parlamentar. Por fim e, diante do estado de coisas e fatos acima narrado, e também entendendo que toda matéria constante da RN 433 necessitaria de maior debate e amadurecimento social, a ANS criou a RN 434, com o fito único de revogar a RN 433, o que levou à perda do objeto da ADPF 532.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "6",
      },
      {
        idPergunta: "498",
        idCategoriaPergunta: "85",
        title:
          "Quais as bases fundantes da dinâmica institucional relativa à situação concreta tratada no presente CENÁRIO?",
        content:
          "Vale ressaltar, para os fins e limites temáticos e espaciais do presente CENÁRIO, que ocorreu um verdadeiro embate, envolvendo sociedade e instituições nacionais. O Poder Executivo, na figura da ANS, exerceu seu poder normativo, o qual veio a ser entendido como exorbitante pelo Poder Judiciário, que foi provocado por outra instituição (OAB Federal) e a partir, em certa medida, de manifestações de grupos sociais contrários ao teor da RN 433. Cabendo frisar que, ao final dos embates institucionais e sociais, findou a própria ANS por revogar seu ato. Tudo isso, merece registro, em um período inferior a 02 (dois) meses, o que mostra o quão relevante para todos os envolvidos se mostrou o conteúdo da atuação da ANS, por meio da RN 433.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "7",
      },
      {
        idPergunta: "499",
        idCategoriaPergunta: "85",
        title: "Quais as Conclusões?",
        content:
          "Com efeito e, conclusivamente, entende-se que o caso da ADPF 532 e da RN 433, sucedida pela RN 434, que revogou a RN anterior, trouxe à tona assuntos de total interesse para instituições públicas e privadas brasileiras, assim como também para vários setores da sociedade nacional. Nesse sentido e, uma vez que todos os envolvidos não possuíram entendimentos consensuais, estabeleceu-se uma dinâmica de embates e novos arranjos institucionais, os quais atingiram, diretamente, os Poderes Executivo e Judiciário e, indiretamente, o próprio Poder Legislativo, a quem cabe a primazia do poder legiferante e, por conseguinte, o poder básico de inovação na ordem jurídica brasileira.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "8",
      },
      {
        idPergunta: "500",
        idCategoriaPergunta: "85",
        title:
          "Quais os textos dos dispositivos legais/normativos citados neste CENÁRIO?",
        content:
          "Se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais/normativos citados neste CENÁRIO.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "9",
      },
      {
        idPergunta: "501",
        idCategoriaPergunta: "85",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "10",
      },
      {
        idPergunta: "502",
        idCategoriaPergunta: "85",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BARROSO, Luis Roberto. O controle de constitucionalidade no Direito brasileiro. São Paulo: Editora Saraiva, 2004.; 2) BONIZZATO, Luigi, RODRIGUES, Tayssa Cristine. Abstract submetido e apresentado no Law and Society (LSA) realizado na cidade de Washington D.C./USA. 2019.; 3) CLÈVE, Clèmerson Merlin. A fiscalização abstrata da constitucionalidade no Direito brasileiro. 2. ed. São Paulo: Editora Revista dos Tribunais, 2000.; 4) MENDES, Gilmar Ferreira. Jurisdição Constitucional. 06. ed. São Paulo: Editora Saraiva, 2014.; 5) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "11",
      },
      {
        idPergunta: "503",
        idCategoriaPergunta: "85",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "Em ordem alfabética: 1) BRASIL. Decisão Judicial proferida em 01º de agosto de 2018, na ADPF 532 MC/DF. Disponível em: portal.stf.jus.br</a>. Acesso em 26 set. 2019.; 2) BRASIL. Decisão Judicial proferida em 14 de julho de 2018, na ADPF 532 MC/DF. Disponível em: portal.stf.jus.br</a>. Acesso em 26 set. 2019.; 3) BRASIL. Resolução Normativa nº 433, de 27 de junho de 2018, da Agência Nacional de Saúde Suplementar (ANS). Disponível em: www.ans.gov.br</a>. Acesso em 26 set. 2019.; 4) BRASIL. Resolução Normativa nº 434, de 03 de setembro de 2018, da Agência Nacional de Saúde Suplementar (ANS). Disponível em: www.ans.gov.br</a>. Acesso em 26 set. 2019.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "12",
      },
      {
        idPergunta: "504",
        idCategoriaPergunta: "85",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content:
          "Não. Para a linha teórica que separa a jurisprudência e a determina como fonte autônoma, houve a utilização de Decisões judiciais.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "13",
      },
      {
        idPergunta: "505",
        idCategoriaPergunta: "85",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre relações institucionais: BONIZZATO, Luigi, BOLONHA, Carlos, MAIA, Fabiana. Teoria Institucional e Constitucionalismo Contemporâneo. Curitiba: Editora Juruá, 2016.; 2) Sobre Regulação: GUERRA, Sérgio. Discricionariedade, regulação e reflexividade: uma nova teoria sobre as escolhas administrativas. 05. ed. Belo Horizonte: Editora Fórum, 2018.; 3) Sobre controle de constitucionalidade: STRECK, Lenio Luiz. Jurisdição Constitucional. 05. ed. São Paulo: Forense, 2018.",
        idCategoria: "85",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde Suplementar (ANS) e a ADPF nº 532",
        ordemCategoriaPai: "400",
        ordemCategoria: "416",
        ordemPergunta: "14",
      },
    ],
  };
  const cenario16 = {
    rows: [
      {
        idPergunta: "506",
        idCategoriaPergunta: "86",
        title: "Quais as Considerações Iniciais?",
        content:
          "A Constituição de 1988 (CRFB) claramente definiu, em seu Art. 60, incisos I, II e III, a quem cabe a iniciativa para apresentação de uma Proposta de Emenda à Constituição (PEC). E, entre o rol de pessoas, físicas ou jurídicas, instituições e/ou órgãos, não figurou a população. Deste modo, não previu, de forma expressa, a CRFB, a possibilidade de iniciativa popular de emenda à CRFB. Entretanto, a mesma CRFB, documento fundado em valores essencialmente democráticos, previu a chamada iniciativa popular de lei. É o que consta do seu Art. 61, § 2º, no qual surgem requisitos rígidos para a ocorrência de tal iniciativa. Apesar de modernas formas de participação popular (formas digitais, por exemplo; além de previsões constitucionais extraídas do direito comparado, as quais não serão objeto de exame neste CENÁRIO) no processo de elaboração das leis estarem auxiliando na implementação de uma democracia cada vez mais participativa, a aqui invocada iniciativa popular de emenda à Constituição (mais precisamente, à CRFB) permanece em zona teórica nebulosa e controversa, assim como, em termos práticos, ainda inexistente. No presente CENÁRIO, pretende-se, ainda que brevemente, explorar o assunto e fomentar reflexões sobre ele, além de, igualmente, sobre a democracia brasileira atual.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "1",
      },
      {
        idPergunta: "507",
        idCategoriaPergunta: "86",
        title:
          "Preliminarmente, quais seriam as bases primeiras para se invocar algo não clara, literal e expressamente previsto na CRFB?",
        content:
          "De acordo com o Art. 1º, parágrafo único, da CRFB, “todo poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente (...)”. Assim, prestigiou-se tanto uma democracia representativa, quanto uma participativa. E, pensando-se em um avanço cada vez maior da participação popular, de modo mais direto e, não somente nos chamados negócios políticos do Estado em sentido executivo, mas também no sentido legiferante, a fortificação da iniciativa popular de lei, levando a um quiçá fortalecimento da ideia de uma iniciativa popular de emenda à Constituição, é algo a ser observado e enfrentado. E, realce-se, ainda mais quando o país, já há algum tempo, abriu espaço para a iniciativa popular de emenda, em seu 2º Grau Federativo, no âmbito dos chamados Estados membros da Federação. Muitos destes, por meio de suas Constituições Estaduais (optar-se-á por não citar as Constituições Estaduais que permitem tal possibilidade, máxime porque são várias; convida-se, assim, o leitor, a fazer, por si só, tal pesquisa e verificação, a começar pela Constituição de seu próprio Estado), aprovaram a chamada iniciativa popular de emenda à Constituição Estadual, fazendo com que algo não previsto no processo legislativo federal, passasse a poder ocorrer na esfera estadual.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "2",
      },
      {
        idPergunta: "508",
        idCategoriaPergunta: "86",
        title:
          "Em continuação à indagação anterior e, apesar da não existência de literal dispositivo constitucional sobre a possibilidade de iniciativa popular de emenda à Constituição dos Estados, existe alguma abertura ou outra previsão na CRFB sobre o referido assunto?",
        content:
          "Sim. Nessa linha, em prosseguimento ao que na resposta à pergunta anterior se desenvolveu, para além do ali já citado, é imperioso ressaltar específica previsão constitucional sobre o tema. Trata-se do contido no Art. 27, § 4º, da CRFB. E eis o teor do dispositivo: “A lei disporá sobre a iniciativa popular no processo legislativo estadual”. Desse modo, independentemente da existência ou não de uma “lei” dispondo sobre a questão, a mera e simples menção na CRFB de uma iniciativa popular no processo legislativo estadual, ainda mais a ser disposta por lei – o que, sob certo e determinado caminho hermenêutico, poderia ser considerado uma abertura da norma -, poderia ser considerado um caminho descampado criado pelo legislador constituinte originário. Entretanto, um caminho condutor para uma iniciativa popular de lei, nos moldes do que foi também previsto no processo legislativo federal, conforme a seguir se verá, ou um caminho condutor para outras formas de iniciativa popular, tal como a própria iniciativa popular de emenda à Constituição?",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "3",
      },
      {
        idPergunta: "509",
        idCategoriaPergunta: "86",
        title:
          "E, pensando em desdobramentos, principalmente do que se desenvolveu a partir das indagações anteriores, há outros elementos fundantes que mereçam destaque no que tange à iniciativa popular de emenda à Constituição?",
        content:
          "Sim. Em primeiro lugar, (a) é preciso reforçar que a iniciativa popular de emenda à Constituição de um Estado se encontra presente em uma série de Constituições Estaduais do Brasil. E, reforce-se, tal fato pode, a depender da interpretação e concepção do que é e deve ser o chamado princípio da simetria, tornar-se algo, no mínimo, perigoso e, em mais acurada e ampla análise, manifestamente inconstitucional. Mas, para que esta apenas citada conclusão se fortifique, é indispensável defender que o processo legislativo federal, nos moldes do previsto a partir do Art. 59 da CRFB, traz normas de reprodução obrigatória ou, pelo menos, de reprodução que não as contrarie, no âmbito dos demais entes e graus federativos brasileiros. Em outras palavras, é preciso entender que o princípio da simetria seria plenamente aplicado sobre a relação entre o processo legislativo federal e o processo legislativo dos demais graus e entes federativos, de modo a vincular os legisladores constituintes derivados decorrentes. E, enfim, é imperioso também limitar qualquer maior extensão que se pretenda conferir ao § 4º, do Art. 27, da CRFB, de modo a fazer com que se entenda que a lei disporá sobre a iniciativa popular “também de lei” no âmbito estadual, uma vez que foi esta, e unicamente esta, a hipótese de iniciativa popular prevista na CRFB. Entretanto e, por outro lado, (b) tendo em vista que várias Constituições Estaduais brasileiras trouxeram a previsão de iniciativa popular de emenda às suas respectivas Constituições e, considerando a ainda manutenção de tais normas estaduais no ordenamento jurídico brasileiro, sem uma declaração de inconstitucionalidade expressa, já também há algum tempo se proclama uma possibilidade de se cogitar de uma iniciativa popular de emenda à CRFB. A ideia central seria, mais ou menos, esta: ora, se as Constituições de Estados membros da Federação podem, por que não se fazer o mesmo na esfera federal e, por conseguinte, nacional? Fica então instaurado um debate de grande riqueza e com entendimentos teóricos oscilantes.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "4",
      },
      {
        idPergunta: "510",
        idCategoriaPergunta: "86",
        title:
          "Com base na CRFB e seu texto, haveria como se pensar em uma interpretação capaz de estimular e permitir tal possibilidade, ou seja, de iniciativa popular de emenda à Constituição?",
        content:
          "O Art. 14, caput, associado ao Art. 61, § 2º, da CRFB, trazem a previsão constitucional da chamada iniciativa popular de lei. Frise-se, de lei. A mesma CRFB não previu, em momento algum, a possibilidade de a população apresentar ao Parlamento e detentor do poder constituinte derivado reformador, proposta de emenda à Constituição (PEC). Entretanto, pensando-se em interpretações, (a) uma primeira seria a que decorre da resposta à pergunta anterior. A partir de uma interpretação sistemática de todo ordenamento jurídico constitucional brasileiro, que levaria em conta uma extensão hermenêutica do próprio e já por vezes mencionado Art. 27, § 4º, da CRFB, todas as normas desta mesma CRFB e, concomitantemente, todos os dispositivos de todas as Constituições Estaduais e Leis Orgânicas municipais e do Distrito Federal, estaria já aberto o caminho para a iniciativa popular de emenda à Constituição, em razão de um exame federativo às avessas ou, quem sabe, de modo invertido. Ao invés de se pensar no primeiro grau federativo estabelecendo premissas e orientações, ter-se-ia um cenário invertido, de graus federativos inferiores influenciando os rumos do ou dos superiores. Outra interpretação (b) a ser considerada favorável à implantação de iniciativa popular de emenda à CRFB, seria a no sentido de se pensar em uma interpretação extensiva do Art. 61, § 2º, de modo a alcançar a espécie normativa denominada emenda. A ideia seria a de que, se o legislador constituinte originário quis prestigiar a figura da iniciativa popular, que seja a mesma estendida para uma espécie normativa tão importante, como a chamada emenda à Constituição. Enfim e, entre outras, (c) que não se esqueça de uma interpretação no sentido de defender uma alteração concreta do Art. 60, caput, da CRFB, acrescentando um inciso IV, com previsão de iniciativa popular de emenda. Tal entendimento basear-se-ia, por exemplo, no posicionamento segundo o qual a ampliação de direito, ainda mais de participação popular, não feriria qualquer petrificação constitucional.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "5",
      },
      {
        idPergunta: "511",
        idCategoriaPergunta: "86",
        title: "E a ideia de democracia participativa?",
        content:
          "Certamente, há defensores e negadores da possibilidade de instauração, sob a égide da CRFB, de uma iniciativa popular de emenda. Por um lado, é certo que a ideia de iniciativa popular e de sua expansão tende a ser positiva para uma ordem constitucional e um ordenamento jurídico de um Estado Democrático de Direito. Sob este aspecto, pensar e pretender a instauração de uma nova possibilidade, tal qual a de iniciativa popular de emenda à CRFB, seria algo muito positivo para o país. Contudo, por outro lado, apesar de a ideia apresentar-se indubitavelmente como em consonância com os mais valorosos proclames democráticos, sua inserção na ordem constitucional atual do Brasil mostrar-se-ia insólita e sem bases e alicerces jurídicos suficientes. Uma interpretação extensiva de dispositivo que versa sobre lei ou de um que prevê iniciativa popular no âmbito estadual, verbi gratia, com finalidade de alcance à figura da emenda, espécie normativa que, inclusive, consolida a tão relevante norma jurídica da rigidez constitucional, seria algo temerário. Espelhar a Lei Maior do país em leis maiores de entes e graus federativos inferiores, também seria algo um tanto quanto juridicamente arriscado. E, enfim, a alteração do Art. 60 da CRFB encontra-se proibida implicitamente, pois, se permitida sua alteração, permite-se a quebra de toda lógica de possibilidade de modificação ou não da CRFB, fato que comprometerá a rigidez e a supremacia constitucional brasileira, em conformidade com o que na resposta à pergunta subsequente melhor se verá.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "6",
      },
      {
        idPergunta: "512",
        idCategoriaPergunta: "86",
        title:
          "Por fim, seria o Art. 60 da CRFB real e completamente inalterável?",
        content:
          "Após todas as considerações anteriores, finalmente, o entendimento que neste CENÁRIO se quer passar é aquele no sentido de que valorizar a democracia participativa é sempre algo positivo e a trazer consequências benéficas à sociedade brasileira. No entanto, paralelamente se entende que o legislador constituinte originário brasileiro não desejou a criação da hipótese de iniciativa popular à CRFB. Senão, teria estabelecido previsão expressa. Portanto, embora muito aqui se valorize a democracia, vale dizer, representativa, participativa, deliberativa etc., para os fins de implantação, na ordem constitucional atual, da possibilidade de emenda à CRFB, existe um bloqueio jurídico que não deve ser desprezado, nem superado. De acordo com o ora entendido, o mais adequado caminho para a implantação da possibilidade ora sob foco seria o da modificação do caput do Art. 60 pela via tradicional, ou seja, por emenda à CRFB. Todavia, mesmo se pensando ser uma democracia participativa algo positivo, o que levaria a uma mudança da CRFB em prol do avanço de direitos fundamentais, a permissão de alteração do Art. 60 conduziria a CRFB e a ordem constitucional brasileira a um status bem mais perigoso e ameaçador. Pois se abriria um precedente para a possibilidade de alteração do Art. 60, aquele em relação ao qual vige a chamada vedação implícita de alteração da CRFB. Não por acaso. Exatamente porque se permitir a mudança do próprio dispositivo constitucional que cuida dos casos de mudança da CRFB, significaria uma permissão de criação de uma nova ordem constitucional, a partir de futuras e novas modificações no Art. 60.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "7",
      },
      {
        idPergunta: "513",
        idCategoriaPergunta: "86",
        title: "Quais as Conclusões?",
        content:
          "A democracia participativa foi, várias vezes, prevista e valorizada pelo legislador constituinte originário brasileiro. Entretanto, não previu, o mesmo legislador citado, qualquer hipótese de iniciativa popular de emenda à CRFB. Nesse sentido, apesar de argumentos abalizados e respeitáveis existirem em prol da possibilidade de permissão de uma iniciativa popular de emenda à CRFB, no presente CENÁRIO conclui-se pela impossibilidade, de acordo com o ordenamento jurídico atual. Da mesma maneira, conclui-se pela não possibilidade de Constituições estaduais trazerem tal previsão no âmbito estadual. Compreende-se que que as normas do processo legislativo federal, previstas no Art. 59 e seguintes da CRFB, não são simplesmente normas gerais, de modo a permitirem uma flexibilização no princípio da simetria. Logicamente, o processo legislativo estadual, municipal e distrital terá particularidades mais ligadas à estrutura de cada um destes entes. Mas, para além de adaptações e previsões distintas da CRFB, em razão e fundadas na estrutura diferente dos Poderes Legislativos e, por consequência, do processo legislativo, não devem Estados, municípios e Distrito Federal inovarem em Constituições Estaduais e Leis Orgânicas, de maneira a inovar e criar novas situações e possibilidades não imaginadas pelo legislador constituinte originário, quando da criação da CRFB. E tal medida, em um círculo virtuoso de análise, finda por proteger a própria democracia brasileira, pois protetora mor da CRFB e da ordem constitucional nacional.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "8",
      },
      {
        idPergunta: "514",
        idCategoriaPergunta: "86",
        title:
          "Quais os textos dos dispositivos constitucionais e legais citados neste CENÁRIO?",
        content:
          "Dada a grande quantidade e, se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINK, com a possibilidade de visita a SITE onde são encontrados os textos oficiais de todos os dispositivos normativos citados neste CENÁRIO.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "9",
      },
      {
        idPergunta: "515",
        idCategoriaPergunta: "86",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "10",
      },
      {
        idPergunta: "516",
        idCategoriaPergunta: "86",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BARROSO, Luis Roberto. Direito Constitucional brasileiro: o problema da Federação. Rio de Janeiro: Editora Forense, 1982.; 2) BOBBIO, Norberto. Estado, Governo, Sociedade, para uma teoria geral da política. 7. ed. Tradução de Marco Aurélio Nogueira, Rio de Janeiro: Editora Paz e Terra, 1999.; 3) BONIZZATO, Luigi, REIS, José Carlos Vasconcellos dos. Direito Constitucional: questões clássicas, contemporâneas e críticas: atualizada e ampliada nos 30 anos da Constituição de 1988. 02. ed. Rio de Janeiro: Editora Lumen Juris, 2018.; 4) CANOTILHO, J.J. Gomes. Direito Constitucional e teoria da Constituição. 07. ed. Coimbra: Almedina, 2003.; 5) FERREIRA, Raúl Gustavo. Reforma Constitucional y Control de Constitucionalidad. Buenos Aires: Ediar, 2014.; 6) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "11",
      },
      {
        idPergunta: "517",
        idCategoriaPergunta: "86",
        title:
          "Quais as referências bibliográficas das legislações e Constituições mencionadas?",
        content:
          "BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: planalto.gov.br</a>. Acesso em: 06 mar. 2019.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "12",
      },
      {
        idPergunta: "518",
        idCategoriaPergunta: "86",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "13",
      },
      {
        idPergunta: "519",
        idCategoriaPergunta: "86",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Constitucionalismo e teorias institucionais: BOLONHA, Carlos, BONIZZATO, Luigi, MAIA, Fabiana (Coords.). Teoria institucional e constitucionalismo contemporâneo. Curitiba: Editora Juruá, 2016.; 2) Sobre democracia, representatividade e exemplos do funcionamento institucional no Brasil: BONIZZATO, Luigi. A Constituição e suas Instituições contemporâneas: representatividade, crises, exemplos e marcos fáticos no Brasil como elementos de análise de teorias constitucionais-institucionais brasileiras. Rio de Janeiro: Editora Lumen Juris, 2017.",
        idCategoria: "86",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição?",
        ordemCategoriaPai: "400",
        ordemCategoria: "417",
        ordemPergunta: "14",
      },
    ],
  };
  const cenario17 = {
    rows: [
      {
        idPergunta: "527",
        idCategoriaPergunta: "89",
        title: "Alguma Primeira Informação?",
        content:
          "Sim. Este CENÁRIO é todo escrito em inglês, a fim de que se respeite a literalidade das respostas do Professor Mark Tushnet.\r\nPUBLICADO em 16.12.2019",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "1",
      },
      {
        idPergunta: "528",
        idCategoriaPergunta: "89",
        title: "Any First Information?",
        content:
          "Yes. This SCENARIO is fully written in English, in respect of the literality of the Professor Mark Tushnet’s answers.\r\nPUBLISHED in 12.16.2019",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "2",
      },
      {
        idPergunta: "529",
        idCategoriaPergunta: "89",
        title: "Preliminary Considerations?",
        content:
          "Yes. This app’s chapter 4 remains firmly committed to its line of analysis and its purposes. And now, we present an interview with Professor Mark Tushnet. Similar to what happened in the 14º SCENARIO, the 17º SCENARIO is dedicated to an interview with another of the greatest names of western Constitutional Law and of United States of America, Professor Mark Tushnet. The subject of analysis, chosen not only after accurate curricular analysis of Professor Tushnet, but also after his agreement to speak and write a little bit about a very important and current theme, is related to what was called the democratic and constitutional relevance of a Supreme Court or a Constitutional Court, thinking about countries that have this Courts model for constitutional protection.\r\nMark Victor Tushnet, graduated from Harvard College and Yale Law School, served as a law clerk to Justice Thurgood Marshall, is the William Nelson Cromwell Professor of Law at Harvard Law School. He is on the very select and short list of the best and most famous Professors of Constitutional Law at Harvard Law School. Among uncountable contributions for his country and the world, he is an example of researcher, studious and professional of Law. For decades, he’s written and published many articles, books and other kinds of deep studies, like, just for example, “Weak Courts, Strong Rights: Judicial Review and Social Welfare Rights in Comparative Constitutional Law” (2007), “Taking the Constitution Away From the Courts” (1999), “Why the Constitution Matters” (2010), and between a lot of other productions, the newest book, “Taking Back the Constitution: Activist Judges and the Next Age of American Law” (2020).\r\nIn the following lines, we present just some questions and answers to encourage an in-depth debate about “the Democratic-constitutional importance of a Supreme Court or Constitutional Court” in contemporary and future times. The text was kept in English, in order to maintain the genuine meaning of questions and Professor Tushnet’s answers.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "3",
      },
      {
        idPergunta: "530",
        idCategoriaPergunta: "89",
        title:
          "1) Professor Mark Tushnet, do you believe every democratic country depends on a strong and active Supreme Court or Constitutional Court?",
        content:
          "Constitutional democracies survive largely because their citizens are committed to preserving democracy. Sometimes, though not always, constitutional courts can contribute to developing a political culture committed to democracy. But there are good examples of constitutional democracies without strong constitutional courts, and sometimes such courts actually undermine democracy, often by diverting citizens’ attention from the tasks of politics and toward a legalistic approach to the constitution.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "4",
      },
      {
        idPergunta: "531",
        idCategoriaPergunta: "89",
        title:
          "2) It is known that the composition of a Supreme Court or a Constitutional Court can be varied. Does homogeneity or heterogeneity of its members tend to be healthier or more dangerous?",
        content:
          "Having a diverse set of voices on a constitutional court is generally a healthy thing for democracy, because doing so helps reproduce on the court the range of views available in the society as a whole.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "5",
      },
      {
        idPergunta: "532",
        idCategoriaPergunta: "89",
        title:
          "3) In your book, “Why the Constitution matters”, we think you say the Constitution also matters because it determines, in the U.S., that the members of the Supreme Court will be chosen by the President, who is elected by the people. Do you believe that the American electoral system can guarantee to the people good choices, democratically speaking, for the Supreme Court?",
        content:
          "The U.S. system of appointing Supreme Court justices is only one of many possible ways of combining some degree of democratic accountability with the independence necessary for fair adjudication. The U.S. system is an outlier internationally. Most nations have concluded, probably correctly, that the U.S. system has resulted in an overly politicized process – “too much” accountability, and too little independence from party-political control.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "6",
      },
      {
        idPergunta: "533",
        idCategoriaPergunta: "89",
        title:
          "4) Regarding to who should be the guardian of the Constitution: Carl Schmitt (Reich President) or Hans Kelsen (Constitutional Court)?",
        content:
          "Historically, it seems clear that, overall, Kelsen was right: The guardian of the constitution should be the constitutional court rather than the national president. Schmitt believed that the president could be “above politics,” but historical experience has shown that that is not generally true (and might never be true).",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "7",
      },
      {
        idPergunta: "534",
        idCategoriaPergunta: "89",
        title:
          "5) Brazil is going through difficult and turbulent moments from the political-democratic point of view. Because of this, many Brazilians have been very hostile to the Brazilian Supreme Federal Court (guardian of Brazilian Constitution and the highest Court of Law in the country) and its Ministers. How do you see this hostility?",
        content:
          "Hostility to a constitutional court is almost inevitable because one of the court’s functions is to take positions against the views of the currently prevailing political majority, in the service of the long-term values inscribed in the constitution.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "8",
      },
      {
        idPergunta: "535",
        idCategoriaPergunta: "89",
        title:
          "6) In a brief comparison, would you agree that the Brazilian Supreme Federal Court, among other things, lacks closer rapprochement between Ministers when they decide, especially in plenary, in order to occur a better reasoning consensus, such as in the U.S. Supreme Court? If so, why?",
        content:
          "Like many from outside Brazil, I am struck by the constitutional court’s practice of deliberating in public. I am more sympathetic to that practice, though, because it does provide one technique by which the public can become educated about what is, after all, their constitution. Beyond that observation, though, I cannot really offer a comparison between the U.S. and the Brazilian practice.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "9",
      },
      {
        idPergunta: "536",
        idCategoriaPergunta: "89",
        title:
          "7) Considering the general and specific themes of the previous questions, how do you see, with total critical freedom to answer, the Brazilian Supreme Federal Court?",
        content:
          "Although I am familiar with only a small slice of the Brazilian Supreme Court’s jurisprudence, in the areas with which I am familiar the court seems to me performing well within the range of good functioning. No court is perfect, of course, but – again in the areas with which I am familiar – the Brazilian court does not seem to be especially badly functioning.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "10",
      },
      {
        idPergunta: "537",
        idCategoriaPergunta: "89",
        title:
          "8) Considering the general and specific themes of the previous questions, how do you see, with total critical freedom to answer, the US Supreme Court?",
        content:
          "Of course I am more familiar with the U.S. Supreme Court’s overall performance. I believe that it has become somewhat too politicized, and has taken a larger role in U.S. politics than is desirable. But, using the same measure that I used in connection with the preceding question, I think the U.S. Supreme Court is functioning reasonably well, compared to other constitutional courts around the world.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "11",
      },
      {
        idPergunta: "538",
        idCategoriaPergunta: "89",
        title:
          "9) Would you consider lifetime tenure to be positive or negative?",
        content:
          "Lifetime tenure is pretty clearly undesirable in the U.S. form – with no lower bounds on the age of appointment, and no age limit for staying on the Court. That form gives appointing presidents an incentive to choose young judges for the Court, and gives sitting justices incentives to stay longer than their health and mental capacity warrants. Most constitutional designers have chosen to give constitutional court judges long terms, typically not renewable (and sometimes with restrictions on post-tenure work). That seems to me a better design than the U.S. one.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "12",
      },
      {
        idPergunta: "539",
        idCategoriaPergunta: "89",
        title:
          "10) And finally, could the future of the Constitutions lie in the hands of the Supreme Courts?",
        content:
          "Around the world constitutional courts have taken an important role in preserving national constitutions. As noted above, though, preserving the constitution is ultimately a in the hands of the people themselves.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "13",
      },
      {
        idPergunta: "540",
        idCategoriaPergunta: "89",
        title: "Any Conclusions?",
        content:
          "Professor Mark Tushnet, in his interview with this APP’s Coordinator and Research Group, made clear his concern about how courts are relevant to preserve constitutions. And, mainly, how the people is important to maintain alive the Constitutions of their own countries. In a statement about U.S. Supreme Court, after being questioned, the Professor said, in verbis, that he believes “that it has become somewhat too politicized, and has taken a larger role in U.S. politics than is desirable”. But, concluding, he also said: “I think the U.S. Supreme Court is functioning reasonably well, compared to other constitutional courts around the world”. Words to think about, mainly when comparing different realities in many nations, one of them, the Brazilian one. Thank you very much, Professor Mark Tushnet. An honor for our permanent Research Group to get your answers and we look forward to having you participating of our research projects again!",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "14",
      },
      {
        idPergunta: "541",
        idCategoriaPergunta: "89",
        title:
          "What were the legal and constitutional texts mentioned in this SCENARIO?",
        content: "No legal and constitutional texts mentioned.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "15",
      },
      {
        idPergunta: "542",
        idCategoriaPergunta: "89",
        title:
          "What were the participants of the present and specific research?",
        content:
          "In alphabetical order: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "16",
      },
      {
        idPergunta: "543",
        idCategoriaPergunta: "89",
        title: "What were the bibliography references?",
        content:
          "Just one directly mentioned in the main text:\r\n\r\nTUSHNET, Mark. Why the Constitution matters. New Haven: Yale University Press, 2010.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "17",
      },
      {
        idPergunta: "544",
        idCategoriaPergunta: "89",
        title:
          "What were the bibliography references of the legislations and Constitutions mentioned?",
        content:
          "No formal references, because of no legal and constitutional texts were mentioned.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "18",
      },
      {
        idPergunta: "545",
        idCategoriaPergunta: "89",
        title:
          "Bibliography suggestions to theoretical deepening in the present or similar themes?",
        content:
          "Between other many thesis, it will be mentioned the following ones:\r\n\r\nTUSHNET, Mark. Weak Courts, Strong Rights: Judicial Review and Social Welfare Rights in Comparative Constitutional Law. New Jersey: Princeton University Press, 2008.\r\n\r\n______. Taking the Constitution away from the Courts. 03. ed. Princeton: Princeton University Press, 2000.",
        idCategoria: "89",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The Democratic-Constitutional Importance of a Supreme Court or Constitutional Court",
        ordemCategoriaPai: "400",
        ordemCategoria: "418",
        ordemPergunta: "19",
      },
    ],
  };
  const cenario18 = {
    rows: [
      {
        idPergunta: "548",
        idCategoriaPergunta: "91",
        title: "Qual a data de publicação do presente CENÁRIO?",
        content:
          "Este CENÁRIO foi publicado no dia 03 de abril de 2020.\r\nAtualizado em 16 de abril de 2020.\r\nAtualizado em 18 de abril de 2020.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "1",
      },
      {
        idPergunta: "549",
        idCategoriaPergunta: "91",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se da análise a partir da incidência da pandemia da COVID-19, doença infecciosa causada por um novo tipo de coronavírus. Em meio à disseminação do referido vírus e a consequente contaminação exponencial em diversos países de todo o mundo, o Brasil acabou inserido nessa lista. Nesse sentido, houve a gradativa necessidade de tomada de medidas econômicas, sociais, jurídicas, entre outras, tanto no âmbito da União, quanto na esfera de Estados e Municípios. Neste CENÁRIO, portanto, com foco nas inicialmente mencionadas medidas jurídicas e suas implicações institucionais e para o Direito, tentar-se-á avaliar e trazer à tona, para reflexão, algumas questões sobre um assunto atual, mas certamente a ser discutido durante muitos e muitos anos da história brasileira e mundial. Focar-se-á, notadamente, em alguns pontos de forma mais intensa e, em outros, de modo mais moderado, em razão de critérios metodológicos de pesquisa, para esta primeira Parte. E tal foco diferenciado leva em conta, acima de tudo, a plêiade de matérias que, em uma rotina praticamente diária, surge como sendo potencial alvo de criações normativas e decisões judiciais. Por isso, a data de publicação deste CENÁRIO foi expressamente informada, o que não é de praxe no “Capítulo 04”, salvo nos casos de entrevistas.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "2",
      },
      {
        idPergunta: "550",
        idCategoriaPergunta: "91",
        title:
          "Do ponto de vista do pacto Federativo brasileiro, existem implicações iniciais a serem avaliadas?",
        content:
          "Sim. Foram algumas as questões ligadas ao pacto federativo brasileiro que vieram à tona a partir da pandemia da Covid-19. Algumas serão tratadas e comentadas, de forma específica, nas perguntas e respostas subsequentes. Entretanto, é fundamental deixar claro que o pacto federativo decorre de uma associação inicial e conjunta de Estados que, ao abrirem mão de algumas competências e resguardando para si outras; ao abdicarem da soberania, máxime do ponto de vista internacional; e, entre outras medidas e decisões, ao reduzirem sua independência, entregam parte das competências, a soberania em âmbito internacional e parte significativa de sua independência a um ente superior. Um ente que será o resultado da junção das mencionadas concessões e forças de todos os referidos Estados e formará um Estado-nação reconhecido internacionalmente como um país. Mas um país que para si escolheu a forma de Estado chamada “federal”. Nesse contexto, por exemplo e, levando em conta que o Brasil é uma federação desde Constituição de 1891, ressalte-se que a Constituição de 1988 (CRFB) trouxe dispositivos de divisão de bens, de atribuições e de competências, tais como os Artigos 20, 21, 22, 23, 24, 30 entre outros. Neste CENÁRIO não se aprofundará o estudo dos referidos dispositivos, mas apenas deixar claro que a divisão de competências faz parte e integra uma característica central de um estado Federal e que, por conseguinte, eventuais decisões de Estados membros não podem ser revogadas pelo ente federado máximo, chamado “União”. A conhecida “hierarquia” pode, sim, existir, mas não será, na maioria dos casos, a regra e, sim, a exceção no complexo Estado Federal brasileiro.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "3",
      },
      {
        idPergunta: "551",
        idCategoriaPergunta: "91",
        title:
          "As várias tomadas de decisões, sobretudo pelos Poderes Executivos de Estados e Municípios, por meio de Decretos, já foram alvo de muitos questionamentos e dúvidas. Contudo, exemplificativamente, houve violações, pela União, ao pacto federativo e às competências federativas brasileiras?",
        content:
          "Sim. Inúmeras poderiam ser as ilustrações para o esforço de confirmação do que ora se indaga. No que diz respeito a uma decisão da União de concentração de todos os aparelhos respiradores artificiais, inclusive, para além dos novos aparelhos produzidos e adquiridos, com a retirada dos já existentes de Estados e Municípios, para uma redistribuição única, pela União, a todos os entes federativos, a discussão ganhou fôlego e divisão de opiniões, sobretudo se consideradas variadas áreas do saber. Do ponto de vista jurídico e de teorias sobre Estado, entretanto, é fato, conforme já exposto em resposta à indagação anterior, que o Estado Federal pressupõe, muito mais, uma divisão de competências do que uma hierarquia verticalizada entre União, Estados e Municípios brasileiros. Nessa linha, vale transcrever a previsão contida no Art. 198, inciso I, da CRFB: “Art. 198. As ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado de acordo com as seguintes diretrizes: I - descentralização, com direção única em cada esfera de governo”. E, igualmente, o contido no Art. 24, inciso XII, da CRFB: “Art. 24. Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre: (…) XII - previdência social, proteção e defesa da saúde”. Assim, além da clara competência concorrente, que confere poderes e competências a todos os entes, perceba-se que, em matéria de saúde, o Brasil criou o chamado Sistema Único de Saúde, mas que depende da regionalização de ações e serviços públicos. Embora surja e apareça a palavra “hierarquizada”, no contexto do dispositivo ela não significa uma preponderância de um ente sobre outro, mas, sim, uma característica organizacional do sistema de saúde. E, a complementar e confirmar tal ideia, o inciso I, do mesmo Art. 198, deixa clara a concepção de descentralização, com direção única em cada esfera de governo. Enquanto o diverso fenômeno da desconcentração representa, verbi gratia, a criação de órgãos dentro de uma mesma pessoa jurídica, a descentralização costuma estar associada à criação de novas pessoas jurídicas, com personalidades jurídicas e funções próprias. Nesse contexto, outras legislações merecem destaque, entre as quais a própria Lei Orgânica da Saúde, a qual reforça e intensifica o papel gerenciador e, não, dominador, da União, máxime na relação com Estados e Municípios.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "4",
      },
      {
        idPergunta: "552",
        idCategoriaPergunta: "91",
        title:
          "Exemplificativamente e, agora versando a pergunta mais diretamente a Estados e Municípios, houve violações, por parte destes, ao pacto federativo e às competências federativas brasileiras?",
        content:
          'Sim. Entre variados exemplos que podem ser levantados, escolher-se-á o do Decreto 46.980, de 19 de março de 2020, emitido no âmbito do Estado do Rio de Janeiro que, embora possuindo inúmeros pontos de aparente legalidade e constitucionalidade, invadiu, em alguns momentos, esferas de competência de outros entes, com destaque para a União. Eis o que estatuem os Artigos 21, inciso XII, alínea “c” e 21, inciso XXI, da CRFB: “Art. 21. Compete à União: (…) XII - explorar, diretamente ou mediante autorização, concessão ou permissão: (…) c) a navegação aérea, aeroespacial e a infra-estrutura aeroportuária” e “Art. 21. Compete à União: (…) XXI - estabelecer princípios e diretrizes para o sistema nacional de viação”. Ademais, veja-se o conteúdo do Art. 22, incisos I, X, XI e XXVIII da mesma CRFB, os quais, dentro do sistema constitucional normativo, merecem uma interpretação conjunta, teleológica e sistemática: “Art. 22. Compete privativamente à União legislar sobre: (…) I - direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho; (…) X - regime dos portos, navegação lacustre, fluvial, marítima, aérea e aeroespacial; XI - trânsito e transporte; (…) XXVIII - defesa territorial, defesa aeroespacial, defesa marítima, defesa civil e mobilização nacional”. E, enfim, imperioso citar parte do Decreto Estadual 46.980, de 19 de março de 2020, a que se fez menção logo no início da presente resposta: “Art. 4º - De forma excepcional, com o único objetivo de resguardar o interesse da coletividade na prevenção do contágio e no combate da propagação do coronavírus, (COVID-19), diante de mortes já confirmadas e o aumento de pessoas contaminadas, DETERMINO A SUSPENSÃO, pelo prazo de 15 (quinze) dias, das seguintes atividades: (…) X- a partir da 0h (zero hora) do dia 21 de março de 2020, a operação aeroviária de passageiros internacionais, ou nacionais com origem nos estados São Paulo, Minas Gerais, Espírito Santo, Bahia, Distrito Federal e demais estados em que a circulação do vírus for confirmada ou situação de emergência decretada. A presente medida não recai sobre as operações de carga aérea. Compete à Agência Nacional de Aviação Civil - ANAC ratificar esta determinação até o início da vigência do presente dispositivo. O Estado do Rio de Janeiro deverá ser comunicado com antecedência nos casos de passageiros repatriados para a adoção de medidas de isolamento e acompanhamento pela Secretaria de Estado de Saúde”. Portanto, sem pretensões de conclusões precipitadas, sobre quaisquer temas, ainda mais complexos em situações de graves crises, fato é que a estrutura das normas acima mencionada mostra embates e contradições. O Decreto Estadual, ao impor ato de ratificação à Agência Nacional de Aviação Civil (ANAC), integrante da Administração Pública indireta da União, no mínimo, rompe com a divisão constitucional de competências estabelecida nos dispositivos constitucionais supratranscritos e, também, em outros tantos, inclusive infraconstitucionais, a que não se fez menção, guardados os limites e intenções do presente CENÁRIO e APP. Contudo e, por derradeiro, nota-se que deve haver uma tendência a uma dinâmica dialógica entre as macro-instituições do país, de modo a favorecer nos maiores níveis, graus e instâncias, soluções unívocas e, não, dissonantes e portadoras de inseguranças institucionais, sociais, econômicas, políticas e jurídicas. Que se rapidamente amadureça nesse sentido. E, em já ATUALIZAÇÃO DESTE CENÁRIO, ocorrida em 16.04.2020, a fim fortificar a situação que ora se expõe, pôde-se agora já se trazer Decisão plenária do STF sobre a matéria. Após ordem liminar concedida na Ação Direta de Inconstitucionalidade (ADIN) nº 6.341 / Distrito Federal, confirmada em decisão do Pleno do STF em 15.04.2020, o mesmo STF entendeu, por unanimidade dos votos de seus Ministros, o que neste CENÁRIO TAMBÉM E, ANTERIORMENTE, JÁ SE HAVIA ANUNCIADO E ANTECIPADO. Mais precisamente, o fato de que a competência entre União, Estados, Municípios e Distrito Federal é concorrente em matéria de "ações e serviços públicos de saúde", com a invocação do Art. 198, inciso I, da CF, com transcrição e comentários feitos na resposta à questão anterior deste CENÁRIO. Mas, a fim de se considerar constitucional o § 9º, do Art. 3º, da Lei 13.979, de 06 de fevereiro de 2020 (um MARCO LEGISLATIVO INICIAL no Brasil para o combate à Pandemia e também alterada pela Medida Provisória nº 926, de 20 de março de 2020), a ele se conferiu "interpretação conforme à Constituição", fazendo com que o Presidente da República mantenha seu poder de editar decretos que venham a dispor sobre serviços públicos e atividades essenciais, respeitadas, entretanto, as competências legislativas constitucionalmente previstas dos demais entes federativos brasileiros.',
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "5",
      },
      {
        idPergunta: "553",
        idCategoriaPergunta: "91",
        title:
          "A Constituição prevê uma série de direitos sociais, enquanto direitos também fundamentais. Entre eles o direito à saúde, naturalmente salta aos olhos e é tratado, sob alguns vieses, durante todo este CENÁRIO. Mas os direitos trabalhistas também são direitos sociais, constitucionais e fundamentais. Houve atos normativos versando sobre normas de cunho trabalhista?",
        content:
          'Sim. Vários atos e medidas. Entre outros e, até a data de publicação deste APP, já se pode adiantar que a possibilidade de suspensão do Contrato de Trabalho por 04 meses, com apenas manutenção (§ 3º, do revogado Art. 18, da Medida Provisória – MP - nº 927, de 22 de março de 2020) dos “benefícios voluntariamente concedidos pelo empregador”, tais como, por exemplo, Plano de Saúde etc., causou grandes discussões no meio social e jurídico nacional. A MP nº 927/2020, em seu Art. 18, depois revogado pelo próprio Chefe do Poder Executivo, é um exemplo da dificuldade no trato com o tema, altissimamente complexo, sobretudo em momento de tão grave crise, como a atual. Entretanto, mesmo com a revogação do referido Art. 18, deve-se atentar para o Art. 2º (“Art. 2º. Durante o estado de calamidade pública a que se refere o art. 1º, o empregado e o empregador poderão celebrar acordo individual escrito, a fim de garantir a permanência do vínculo empregatício, que terá preponderância sobre os demais instrumentos normativos, legais e negociais, respeitados os limites estabelecidos na Constituição”), cujo teor pode levar à permissão outrora contida no Art. 18. Ademais, decisões judiciais Brasil afora ocorreram, ocorrem e ocorrerão, trazendo novidades ou, simplesmente, enquadramentos legais. Uma delas, somente a título meramente ilustrativo, foi concedida pela Desembargadora do Tribunal Regional do Trabalho da 1ª Região (TRT – 1ª Região) que, ao invocar a Lei (Lei 8.306/1990) do Fundo de Garantia por Tempo de Serviço (FGTS), autorizou o Reclamante e trabalhador a sacar a quantia equivalente ao seu FGTS, com base na previsão legal que permite o saque em situações de calamidade pública ou de emergência [Art. 20, inciso XVI, alínea “a”, da acima referida Lei, que assim prescreve: “Art. 20. A conta vinculada do trabalhador no FGTS poderá ser movimentada nas seguintes situações: (…) XVI - necessidade pessoal, cuja urgência e gravidade decorra de desastre natural, conforme disposto em regulamento, observadas as seguintes condições: a) o trabalhador deverá ser residente em áreas comprovadamente atingidas de Município ou do Distrito Federal em situação de emergência ou em estado de calamidade pública, formalmente reconhecidos pelo Governo Federal”]. E vale ressaltar que o Decreto Legislativo nº 06 de 2020, reconhece “para os fins do art. 65 da Lei Complementar nº 101, de 4 de maio de 2000, a ocorrência do estado de calamidade pública, nos termos da solicitação do Presidente da República encaminhada por meio da Mensagem nº 93, de 18 de março de 2020”. Dada a velocidade praticamente nunca antes vista, tanto em termos de expansão nos casos de contágio pelo vírus, quanto no que diz respeito a medidas, decisões executivas e judiciais, atos administrativos, legislações etc., será fundamental ao leitor interessado no acompanhamento da matéria, manter-se permanentemente atualizado, a partir dos novos acontecimentos, em todas as esferas acima citadas. Veja-se, por exemplo, que pouco antes do encerramento deste CENÁRIO, nova MP foi criada pelo governo, autorizando redução de até 70% nos salários, no intuito, segundo justificativa governamental, de preservação de até 8.5 milhões de empregos. Trata-se da MP nº 936, de 01º de abril de 2020, que permitiu que os salários sejam diminuídos nos exatos percentuais de 25%, 50% e, em até 70%, a partir de acordo individual entre empregado e empregador, nos termos no Art. 7º do referido ato normativo (“Art. 7º Durante o estado de calamidade pública a que se refere o art. 1º, o empregador poderá acordar a redução proporcional da jornada de trabalho e de salário de seus empregados, por até noventa dias, observados os seguintes requisitos: I - preservação do valor do salário-hora de trabalho; II - pactuação por acordo individual escrito entre empregador e empregado, que será encaminhado ao empregado com antecedência de, no mínimo, dois dias corridos; e III - redução da jornada de trabalho e de salário, exclusivamente, nos seguintes percentuais: a) vinte e cinco por cento; b) cinquenta por cento; ou c) setenta por cento”). Deve, contudo, sempre ser levado em conta que a CRFB é soberana e continua em pleno vigor, mesmo na situação emergencial em que vive o Brasil. Assim, deve-se acompanhar a vigência da referida MP e se verificar se novas alterações virão. Sobretudo se considerada já uma indagação: e a previsão do Art., 7º, inciso VI, da CRFB? Eis o que estatui: “Art. 7º São direitos dos trabalhadores urbanos e rurais, além de outros que visem à melhoria de sua condição social: (…) VI - irredutibilidade do salário, salvo o disposto em convenção ou acordo coletivo”. Somente uma já questão para reflexão entre outras que podem surgir. E, a partir de NOVA ATUALIZAÇÃO DESTE CENÁRIO, ocorrida em 18.04.2020, ressalta-se que o Plenário do STF, por 07 (sete) votos a 03 (três), revogou a ordem liminar concedida na ADIN nº 6.363, em 06 de abril de 2020, pelo Ministro Relator (ordem liminar que, apesar de permitir a entrada em vigor, de imediato, do acordo individual, exigia que o mesmo fosse submetido ao respectivo Sindicato, no prazo de 10 dias, para deliberação e, caso houvesse negociação e acordo coletivos, estes se sobreporiam ao acordo individual), com a finalidade de considerar constitucional o Art. 7º da MP nº 936 de 2020, sobretudo no tocante à possibilidade de realização do acordo individual entre empregado e empregador durante o período de calamidade e emergencial. O STF, por maioria de votos, procedeu a uma específica interpretação, segundo a qual a "medida emergencial compatibiliza valores do trabalho com a livre iniciativa", conforme previsão constitucional contida no Art. 170 da CRFB. Estes e outros exemplos vão ocorrendo e se impondo para discussão e reflexão durante o momento de crise causado pela pandemia da Covid-19, sem precedentes na história, pelo menos recente, da humanidade.',
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "6",
      },
      {
        idPergunta: "554",
        idCategoriaPergunta: "91",
        title:
          "No que tange ao grande dilema ligado ao direito fundamental à vida, que afunilou a discussão em torno de um isolamento social vertical ou horizontal, já no início do mês de março, há considerações a serem feitas?",
        content:
          "A CRFB trouxe, no seu Título VII (“Da Ordem Econômica”), uma tentativa de união de valores comumente distintos: liberdade de concorrência e valorização do trabalho humano. Ao longo dos anos, foi esta mesma CRFB se fortificando, assim como, a democracia brasileira, a qual, mesmo com inúmeros obstáculos e com longo caminho e tortuoso trajeto a percorrer, rumo à continuação de um amadurecimento, segue como ainda o modelo e regime brasileiros. Entretanto, apesar de os valores acima citados, para além dos Artigos 170 e seguintes, estarem estampados em vários momentos, sobretudo e logo no Art. 1º, em que dignidade humana e livre iniciativa também se cruzam, esta última findou por – arrisque-se -, na maioria dos casos, levar uma certa vantagem com relação àquela, uma vez que, declaradamente, é o Brasil um país em que predominam valores, ideias, medidas e decisões de cunho e molde capitalistas. Mas, o que se deve, constantemente, tentar impedir é que este difícil equilíbrio se transforme em um abismo. Que a balança leve aos céus a livre iniciativa e derrube ou, até enterre, a valorização do trabalho humano. Pois esta foi a vontade constituinte, de acordo com as previsões constitucionais supracitadas. Portanto, é verdade, sim, que não se pode abandonar a economia, mas também não é possível sobrevalorizá-la ao ponto de esmagar o trabalho e a dignidade humana. Em respeito à CRFB, a atual situação emergencial requer medidas que levem em conta a tentativa de equilíbrio. Novamente, um CENÁRIO deste APP se defronta com a necessidade de as instituições brasileiras se unirem em uma dinâmica dialógica e, não, conflituosa. União e equilíbrio entre valores e forças. Que devem acompanhar, implacavelmente, o Direito brasileiro. Assim, aqui se defende a tese da “circularidade dos direitos fundamentais”, a qual faz com que eles gravitem em torno de um epicentro, tal qual em uma órbita, mas que leva em conta um bem jurídico maior como uma espécie de sol a todos iluminar: a vida. Em tempos de crises de proporções gigantescas, tal como a atual, o respeito aos valores constitucionais mais básicos torna-se missão ainda mais difícil, mas também de suma importância e relevância, pois é ela, sempre ela, a CRFB, a comandar o Estado, seus governantes e o povo brasileiro.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "7",
      },
      {
        idPergunta: "555",
        idCategoriaPergunta: "91",
        title:
          "Quanto a liberdades fundamentais específicas, a título ilustrativo, há também análises que mereçam atenção?",
        content:
          "Sim. Várias. Mas, exemplificativamente, a liberdade de locomoção, ligada ao direito de ir e vir, exsurge como uma das principais, juntamente com a liberdade econômica de abertura ou não de negócios como restaurantes, supermercados, papelarias, cabelereiros, bares etc. Primeiramente, é imperioso destacar que inúmeros entes federados decretaram a chamada situação de emergência. Esta por sua vez, tende a ser definida como circunstância fora do comum/extraordinária, que deve ser declarada pelo governo, inclusive, podendo este alterar ou suspender algumas de suas funções para melhor enfrentá-la, seja essa situação causada por desastres naturais, crises políticas ou econômicas, situações de guerra e, até mesmo, epidemias ou pandemias, como é o caso da Covid-19. Além disso, encontra importante fundamento legal na Lei nº 12.608, de 10 de abril de 2012. Veja-se o teor dos Artigos 6º, inciso VII, 7º, incisos VI e VII e 8º, inciso VI, da referida Lei: “Art. 6º Compete à União: (…) VII - instituir e manter sistema para declaração e reconhecimento de situação de emergência ou de estado de calamidade pública”; “Art. 7º Compete aos Estados: VI - apoiar a União, quando solicitado, no reconhecimento de situação de emergência e estado de calamidade pública; VII - declarar, quando for o caso, estado de calamidade pública ou situação de emergência”; e “Art. 8º Compete aos Municípios: (…) VI - declarar situação de emergência e estado de calamidade pública”. Entretanto, especificamente no tocante ao direito de ir e vir, não se impõe, de forma absoluta, uma restrição de circulação, fato que poderia até acontecer, em todo território nacional, se decretado, com base no Art. 137 da Constituição da República (CRFB), o denominado Estado de Sítio (Art. 139, inciso I, por exemplo, estabelece: ”Art. 139. Na vigência do estado de sítio decretado com fundamento no art. 137, I, só poderão ser tomadas contra as pessoas as seguintes medidas: I - obrigação de permanência em localidade determinada”). Por conseguinte, as pessoas podem se locomover livremente nas ruas, mas sob recomendações estatais de não o fazer, com base em muito bem fundamentada decisão de isolamento social em razão do grande risco de contaminação e/ou disseminação do contágio, dadas as características peculiares do novo coronavírus. Já no que diz respeito ao fechamento da maioria dos negócios, tais como restaurantes, bares, lojas em geral, shopping centers etc., trata-se de decisão fundamentada em lei, na CRFB - com dispositivos já anteriormente mencionados neste APP -, em Constituições Estaduais, Leis Orgânicas Municipais e, normalmente, consolidadas por decretos regulamentares, emitidos pelos Chefes dos Poderes Executivos do país, ao se depararem com casos de calamidade pública e/ou situação de emergência.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "8",
      },
      {
        idPergunta: "556",
        idCategoriaPergunta: "91",
        title:
          "E houve implicações no âmbito do Direito Penal brasileiro, da criminologia, ciências criminais e segurança pública?",
        content:
          'Sim. Inúmeras. Entretanto, aqui se traz o exemplo de medida que teve por objetivo diminuir a concentração de pessoas em presídios e dentro da estrutura prisional brasileira. Decisão do Superior Tribunal de Justiça (STJ), do dia 01º de abril de 2020, determinou a extensão dos efeitos de uma ordem liminar já concedida para o Estado do Espírito Santo, para que todos os presos com liberdade condicionada ao pagamento de fiança fossem soltos, valendo tal decisão judicial para todo território nacional. O Ministro Relator do Processo originado de pedido feito pela Defensoria Pública da União, declarou que “Na hipótese, conforme asseverado pela requerente, o quadro fático apresentado pelo Estado do Espírito Santo é idêntico aos dos demais Estados brasileiros: o risco de contágio pela pandemia do coronavírus (Covid-19) é semelhante em todo o País, assim como o é o quadro de superlotação e de insalubridade dos presídios brasileiros”. Em realidade, entendeu-se que, via de regra, pessoas presas pela prática de crimes e que se encontrassem em situação de liberdade condicionada a fiança, poderiam ser consideradas cidadãs de menor potencial ofensivo para a sociedade, razão pela qual se justificaria a medida judicial protetiva destes indivíduos, em momento de situação de emergência e calamidade púbicas declaradas, decorrente da pandemia da Covid-19. Uma questão complexa, com repercussões sociais variadas e a ser objeto de inúmeras reflexões. Enfim, a Portaria Ministerial nº 151, de 30 de março de 2020, autorizou o emprego da Força Nacional de Segurança Pública para dar apoio ao Ministério da Saúde nas ações de combate ao novo coronavírus. A portaria prevê que a Força Nacional possa atuar nas "ações de preservação da ordem pública e da incolumidade das pessoas e do patrimônio por meio de apoio às ações do Ministério da Saúde na prevenção e combate da pandemia do novo coronavírus". O texto faz referência à Lei nº 13.979, de 6 de fevereiro de 2020 e à Portaria Interministerial nº 5, de 17 de março de 2020. A Lei se refere às medidas de enfrentamento da emergência de saúde pública por conta do novo vírus. Já a portaria interministerial nº 5 trata especificamente da compulsoriedade (obrigatoriedade) de medidas que o governo pode tomar e prevê punição para os casos de descumprimento.',
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "9",
      },
      {
        idPergunta: "557",
        idCategoriaPergunta: "91",
        title: "Quais as Conclusões?",
        content:
          "Em decorrência de todo o exposto, pode-se já, desde o início, perceber que a complexidade jurídica do tema se inicia em questões ligadas à divisão de competência entre os entes federativos do país, se estende para essenciais e inafastáveis direitos fundamentais, tais como o direito à vida, ao trabalho, a ir e vir, entre tantos outros e, enfim, expande-se ainda mais quando levada em conta a rapidez das transformações e inovações jurídicas, sociais, econômicas, políticas etc. A cada dia, há uma série de novidades em termos de políticas, determinações, processos legislativos etc., de modo que o acompanhamento e a atualização do leitor interessado devem ser constantes. Este CENÁRIO é apenas um incentivador inicial para que possam ser enfrentadas algumas consequências da pandemia, do modo que menos desrespeite ou, de modo ideal, da maneira que não seja a CRFB desrespeitada e, sim, utilizada em favor da sociedade, com sua força normativa dosada e colocada ao dispor do povo brasileiro, destinatário maior de suas normas.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "10",
      },
      {
        idPergunta: "558",
        idCategoriaPergunta: "91",
        title:
          "Quais os textos dos dispositivos legais/normativos citados neste CENÁRIO?",
        content:
          "Se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá menção aos sites onde são encontrados os textos oficiais de todos os dispositivos legais/normativos citados neste CENÁRIO.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "11",
      },
      {
        idPergunta: "559",
        idCategoriaPergunta: "91",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "12",
      },
      {
        idPergunta: "561",
        idCategoriaPergunta: "91",
        title: "Quais as referências bibliográficas?",
        content:
          "Em ordem alfabética: 1) BERCOVICI, Gilberto. Constituição e Estado de Exceção permanente: atualidade de Weimar. Rio de Janeiro: Azougue Editorial, 2004.; 2) BONIZZATO, Luigi. Anunciações e escolhas teóricas e fáticas para um estudo e crítica da contemporânea Federação brasileira. In: BOLONHA, Carlos, LIZIERO, Leonam, SEPULVEDA, Antonio (Orgs). Federalismo: desafios contemporâneos. Porto Alegre: Editora Fi, 2019, p. 73-112.; 3) BONIZZATO, Luigi. A Constituição Urbanística e elementos para elaboração de uma teoria do Direito Constitucional Urbanístico. Rio de Janeiro: Editora Lumen Juris, 2010.; 4) POSNER, Eric A., VERMEULE, Adrian. Terror in the balance: security, liberty, and the Courts. New York: Oxford University Press, Inc., 2007.; 5) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.; 6) TUSHNET, Mark. Why the Constitution matters. New Haven: Yale University Press, 2010.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "13",
      },
      {
        idPergunta: "562",
        idCategoriaPergunta: "91",
        title:
          "Quais as referências bibliográficas das legislações, decisões e Constituições mencionadas?",
        content:
          "Em ordem alfabética: 1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: . Acesso em: 23 ago. 2018.; 2) BRASIL. Decreto Legislativo nº 6 de 2020. Senado Federal, 20 de março de 2020. Disponível em: ; 3) BRASIL. Lei nº 8.036 de 1990. Diário Oficial da União, 14 de maio de 1990. Disponível em: ; 4) BRASIL. Lei nº 12.608 de 2012. Diário Oficial da União, 11 de abril de 2012. Disponível em: ; 5) BRASIL. Lei 13.979 de 2020. DiárioOficial da União, 06 de fevereiro de 2020. Disponível em: ; 6) BRASIL. Medida Provisória nº 926 de 2020. Diário Oficial da União, 20 de março de 2020. Disponível em: ; 7) BRASIL. Medida Provisória nº 927 de 2020. Diário Oficial da União, 22 de março de 2020. Disponível em: ; 8) BRASIL. Medida Provisória nº 936 de 2020. Diário Oficial da União, 01º de abril de 2020. ; 9) BRASIL. Poder Judiciário. Decisão proferida na Reclamação Trabalhista nº 0101212-53.2018.5.01.0043. Diário Oficial da União, 30 de março de 2020. Disponível em: ; 10) BRASIL. Poder Judiciário. Decisão proferida no Habeas Corpus nº 568.693 – ES (2020/0074523-0). Disponível em: ;11) EPIDEMIA DA COVID-19 OBRIGA JUSTIÇA A MEDIAR BATALHA POR RESPIRADORES. Conjur, 30 de março de 2020. Disponível em: ; 12) RIO DE JANEIRO. Secretaria de Estado da Casa Civil e Governança. Decreto nº 46.980 de 2020. Diário Oficial do Estado do Rio de Janeiro, 19 de março de 2020. Disponível em: ; 13) CORRÊA, Marcello, Geralda DOCA, Manoel VENTURA. Nova MP permite redução de até 70% nos salários e deve preservar 8,5 milhões de emprego. O Globo. On Line. Acesso em 01º de abril de 2020. Disponível em: ",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "14",
      },
      {
        idPergunta: "563",
        idCategoriaPergunta: "91",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content:
          "Não. Para a linha teórica que separa a jurisprudência e a determina como fonte autônoma, houve a utilização de Decisões judiciais.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "15",
      },
      {
        idPergunta: "564",
        idCategoriaPergunta: "91",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre relações institucionais: BONIZZATO, Luigi, BOLONHA, Carlos, MAIA, Fabiana (Coord.). Teoria Institucional e Constitucionalismo Contemporâneo. Curitiba: Editora Juruá, 2016.; 2) Sobre Estado de Exceção: AGAMBEN, Giorgio. Estado de Exceção. Tradução de Iraci D. Poleti. São Paulo: Boitempo, 2004.",
        idCategoria: "91",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 1)",
        ordemCategoriaPai: "400",
        ordemCategoria: "419",
        ordemPergunta: "16",
      },
    ],
  };
  const cenario19 = {
    rows: [
      {
        idPergunta: "566",
        idCategoriaPergunta: "92",
        title: "Quais as Considerações Iniciais?",
        content:
          "O presente CENÁRIO versa sobre a avaliação e olhar específicos acerca do mais recente artigo de Adrian Vermeule, Professor de Direito Constitucional da Universidade de Harvard, intitulado “Beyond Originalism”, publicado em 31.03.2020, na revista “The Atlantic”. Na referida publicação, o autor defende a superação do chamado “Originalismo” e se afasta de uma teoria da interpretação constitucional baseada estritamente no sentido comum e simples do texto legal, como pode ser denominado o “Textualismo”. Nessa linha, o referido pesquisador estadunidense propôs o que denominou de “Constitucionalismo do Bem Comum”. Os principais conceitos e ideias do artigo serão abordados ao longo de todo o presente CENÁRIO, bem como eventuais, peculiares e determinadas críticas, a partir de recortados estudos desenvolvidos no âmbito do Grupo de Pesquisa “Capítulo 4”, do Laboratório de Estudos Institucionais (LETACI). ",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "1",
      },
      {
        idPergunta: "567",
        idCategoriaPergunta: "92",
        title:
          "Inicialmente, o que seria o “Originalismo”? E quais as suas principais características?",
        content:
          'O “Originalismo”, para os fins do aqui estudado e anunciado nas Considerações Iniciais do presente CENÁRIO, é uma teoria hermenêutica constitucional que se caracteriza por ser uma filosofia conservadora de interpretação da Constituição, de viés eminentemente histórico, segundo a qual o significado do texto constitucional teria sido fixado no momento de sua promulgação. No contexto dos Estados Unidos da América (EUA), por exemplo, a referida ocasião ocorreu em 1787, ano de promulgação da Constituição Estadunidense. Desse modo, a interpretação das cláusulas constitucionais deve ser feita de acordo com seu “sentido original”, ou seja, conforme aquilo que os “Pais Fundadores” (Founding Fathers, entre os quais, dentre tantos outros, citam-se Alexander Hamilton, John Jay e James Madison, em razão de seus escritos terem redundado na famosa Obra intitulada The Federalist - o primeiro e o terceiro, uns dos 40 Delegados da Convenção Constitucional; e o segundo, o primeiro "Chefe de Justiça" da Suprema Corte dos EUA) quiseram dizer naquele momento. O desenvolvimento da “corrente originalista” se deu ao longo dos anos 70 e 80 e, segundo Vermeule, a mencionada corrente foi de grande utilidade no âmbito do desenvolvimento do conservadorismo norte-americano, possibilitando que mantivessem seu posicionamento naquilo que Vermeule denomina “ambiente hostil”, em oposição ao “liberalismo jurídico”, que caracterizava o ambiente dos Tribunais e da Academia, à época. No atual contexto estadunidense que, segundo Vermeule, não é mais hostil aos conservadores, o “Originalismo” se revelaria como um verdadeiro obstáculo, nos dizeres do referido autor, para o desenvolvimento de uma teoria de interpretação constitucional conservadora, mais forte e robusta.',
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "2",
      },
      {
        idPergunta: "568",
        idCategoriaPergunta: "92",
        title:
          "O que pode ser ponderado quanto a uma superação do “Originalismo”?",
        content:
          "Vermeule parece apresentar, em seu texto, alternativas ao “Originalismo”: (1) o “constitucionalismo libertário” (adiante também referido ou chamado de “constitucionalismo liberal” e “legalismo libertário”), que enfatiza os princípios da liberdade individual, usualmente em tensão com o significado original da Constituição e as normas da geração fundadora; e (2) o “tradicionalismo burguês”, que busca diminuir o ritmo da inovação jurídica. Por tal natureza, esta corrente também pode ir de encontro ao “Originalismo”, tendo em vista que este pode ser revolucionário em alguns momentos, ensejando uma ruptura dos precedentes de longa data da Corte, uma vez que já houve grande modificação quanto às interpretações.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "3",
      },
      {
        idPergunta: "569",
        idCategoriaPergunta: "92",
        title:
          "Quais alguns dos possíveis desdobramentos – de acordo com o Texto, objeto central deste CENÁRIO – das ponderações colocadas na resposta à pergunta antecedente?",
        content:
          "Apesar da existência das alternativas citadas na resposta à pergunta anterior, o “Originalismo” prevaleceu ao longo do tempo. Ocorre que Vermeule traz nova alternativa ao “Originalismo” e ao “constitucionalismo liberal”, apresentando um “constitucionalismo moral”. Este, segundo suas palavras, não deve ser escravizado ao significado original da Constituição e, também, deve ser libertado da narrativa sacramental abrangente dos liberais de esquerda, da expansão implacável da autonomia individualista.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "4",
      },
      {
        idPergunta: "570",
        idCategoriaPergunta: "92",
        title:
          "Existem outros aspectos a serem realçados no que se refere a uma superação do “Originalismo” até aqui tratado no presente CENÁRIO?",
        content:
          "Sim. Alguns aspectos merecem ser considerados quanto à superação do “Originalismo”. Sendo o “Originalismo”, no contexto aqui apresentado, uma afirmação de que a interpretação constitucional deve ser realizada com base no significado das cláusulas constitucionais fixado no momento da promulgação da Constituição, é possível levantar alguns questionamentos. Inicialmente, é difícil garantir que aquilo que o intérprete atual diz é o mesmo que pretendiam os “Pais Fundadores” (vide resposta à segunda indagação deste CENÁRIO). Há também dificuldade em saber se todos eles pensavam de igual maneira. Ater-se, única e exclusivamente, à interpretação do momento em que a Constituição foi promulgada, significa não levar em consideração a evolução da sociedade e mudança de seus valores e ideais. Contudo, o panorama não indica que o “Originalismo” deva ser totalmente superado, mas, sim, que as interpretações, além de não ficarem totalmente atreladas ao passado, não devam abrir mão de significados responsáveis por maior segurança jurídica. Nesse viés, Vermeule finda por trazer uma nova alternativa ao “Originalismo” e ao “constitucionalismo liberal”, qual seja, o “Constitucionalismo do Bem Comum”.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "5",
      },
      {
        idPergunta: "571",
        idCategoriaPergunta: "92",
        title:
          "O que se entenderia, sob a ótica do Autor (Vermeule), por “Constitucionalismo do Bem Comum”? ",
        content:
          "Sob um primeiro e específico olhar, o Autor refere-se ao “Constitucionalismo do Bem Comum” como uma (nova) abordagem conservadora à teoria constitucional interpretativa do “Originalismo”, que, conforme já exposto, o mesmo Autor considera ultrapassada. Tal teoria do “Constitucionalismo do Bem Comum” estaria baseada na principiologia segundo a qual o Estado auxiliaria diretamente a população e a sociedade organizada, em prol do bem comum e que, ademais, seria possível – e, frise-se, legítimo – que existissem práticas de governo mais restritivas (“strong rule”), desde que necessárias ao atingimento do “bem comum de todos”. Tratar-se-ia de um constitucionalismo substantivamente moral, uma nova modalidade de constitucionalismo, que se diferiria do “Originalismo” e do “legalismo libertário”, ao passo que não se preocuparia em garantir a autonomia individual enquanto direito fundamental.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "6",
      },
      {
        idPergunta: "572",
        idCategoriaPergunta: "92",
        title:
          "Vermeule estabelece alguma relação de sua abordagem teórica com a pandemia de 2019/2020?",
        content:
          "Considerando o contexto pandêmico, Vermeule defende, inclusive, que tal abordagem de práticas governistas mais restritivas e abruptas, especialmente mencionadas na resposta à pergunta anterior, deve ser ampliada, pois, dessa forma, permitiria ao Estado melhor lidar com a crise de saúde pública.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "7",
      },
      {
        idPergunta: "573",
        idCategoriaPergunta: "92",
        title:
          'Alguma relação estabelecida entre conceitos e figuras como “autoridade” e "moralidade”?',
        content:
          "No rumo do que se vem desenvolvendo neste CENÁRIO, Vermeule aponta alguns princípios morais básicos e substantivos que conduziriam ao bem comum, princípios a partir dos quais a Constituição deveria ser interpretada. Assim sendo, demonstra-se especial importância ao respeito à autoridade governante e aos governantes em geral, à hierarquia inerente às sociedades – que, aliás, o autor aponta como necessária ao funcionamento de toda e qualquer sociedade –, bem como aos papéis legítimos desempenhados por órgãos e figuras públicas, para além da solidariedade entre grupos sociais, famílias e associações. Diante disso, reitera-se que o “Constitucionalismo do Bem Comum” seria pautado em uma vontade de legislar a moralidade, com o reconhecimento de que todo ordenamento jurídico é necessariamente fundado em alguma concepção substantiva de moralidade e de que promover a moralidade é uma função essencial e legítima da autoridade. E isto tudo seria então indispensável ao alcance do “bem comum de todos”.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "8",
      },
      {
        idPergunta: "574",
        idCategoriaPergunta: "92",
        title:
          "Quais seriam os pontos sensíveis, na prática e, na visão específica da Pesquisa ora desenvolvida para a elaboração do presente CENÁRIO, do “Constitucionalismo do Bem Comum”?",
        content:
          "A ideia de que o governo estaria assumindo o papel de direcionar a sociedade para o bem comum e que, com esse propósito, seriam legítimas regras fortes, é um tanto quanto preocupante. Vermeule chega, até mesmo, a defender que os governantes poderiam agir contra o que os próprios cidadãos entenderiam que é melhor para eles, de forma coercitiva. Tudo isso pautado na ideia de um governo forte, em que um Estado considerado justo seria um Estado que possuísse ampla autoridade para proteger os vulneráveis. A “autonomia individualista”, assim como o “Originalismo”, passariam a possuir sua importância esvaziada pelo autor, nesse panorama de bem comum. Enquanto a autoridade do governo, o respeito pelas hierarquias e a moralidade seriam tidos como base desse estudado panorama. Desta forma, nesta específica pesquisa, entende-se, ainda que preliminarmente, que alguns pontos importantes precisam ser analisados, de modo, por exemplo, a determinar que haja cautela para que esse ambiente não enseje uma realidade marcada pelo autoritarismo. Ainda e, em acréscimo, entende-se importante ressaltar a ideia de que o governo detenha quase que absoluto domínio sobre a sociedade, sem dar importância a “autonomia individualista”, em um cenário considerado democrático, seria algo bem audacioso e arriscado. Seria interessante, e até mais prudente, que todos esses valores pudessem ser considerados, operando em conjunto e com maior equilíbrio. Enfim, entre tantos pontos que poderiam ser levantados, um outro fator importante a ser destacado é que o conceito de moralidade é muito subjetivo. Assim, esperar que o governo tome iniciativas capazes de afetar toda a sociedade, pautando-se em um conceito tão subjetivo, também seria perigoso e temerário.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "9",
      },
      {
        idPergunta: "575",
        idCategoriaPergunta: "92",
        title: "Quais as considerações finais?",
        content:
          "A partir do que foi verificado, múltiplas poderiam ser as conclusões. Mas, de acordo com a Pesquisa ora realizada e, tendo em vista os recortes hermenêuticos utilizados e escolhidos, é possível inferir que a ideia de “Constitucionalismo do Bem Comum”, muito embora seu autor afirme como fundamento a cláusula do bem-estar geral, faz uso de conceitos que, historicamente, deram azo ao desrespeito a liberdades individuais. É o caso de alguns dos princípios afirmados por Vermeule, tais como o respeito à autoridade/hierarquia e a possibilidade de legislar sobre aspectos morais. Não obstante, a leitura da Constituição com base exclusiva na concepção originalista também se pode mostrar problemática, tanto pela dificuldade em conhecer o significado original, quanto pela necessidade interpretativa de se levar em conta as mudanças sociais. Sendo assim, embora o “Constitucionalismo do Bem Comum” pregue uma concentração de poder maior nas mãos dos governantes, é necessário que esta se mantenha pautada pela legalidade, constitucionalidade democrática e segurança jurídica. Restará assim saber, por um lado, se tal última hipótese mostrar-se-á possível, factível e concretizável ou, por outro lado, pura e simplesmente, inviável.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "10",
      },
      {
        idPergunta: "576",
        idCategoriaPergunta: "92",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi; 2) COSATI, Maria Clara Conde Moraes; 3) LEITE, Manuella Suita Dutra; 4) MOULIN, Isabelle Esteves; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "11",
      },
      {
        idPergunta: "577",
        idCategoriaPergunta: "92",
        title: "Quais as Referências Bibliográficas?",
        content:
          "Em ordem alfabética: 1) STRECK, Lênio Luiz. Senso Incomum: Professor de Harvard lança “constitucionalismo Deus acima de todos”. Consultor Jurídico. Disponível em: https://www.conjur.com.br/2020-abr-23/senso-incomum-professor-harvard-lanca-constitucionalismo-deus-acima-todos. Acesso em 13 jul. 2020.; 2) VERMEULE, Adrian. Beyond Originalism: The dominant conservative philosophy for interpreting the Constitution has served its purpose, and scholars ought to develop a more moral framework. The Atlantic. Disponível em: https://www.theatlantic.com/ideas/archive/2020/03/common-good-constitutionalism/609037/. Acesso em 7 jul. 2020.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "12",
      },
      {
        idPergunta: "578",
        idCategoriaPergunta: "92",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content: "Não.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "13",
      },
      {
        idPergunta: "579",
        idCategoriaPergunta: "92",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "Sobre teorias e relações institucionais variadas: BOLONHA, Carlos; BONIZZATO, Luigi; MAIA, Fabiana (Coord.). Teoria Institucional e o Constitucionalismo Contemporâneo. Curitiba: Editora Juruá, 2016. Sobre interpretação e instituições: SUNSTEIN, Cass R. VERMEULE, Adrian. Interpretation and Institutions. In: Coase-Sandor Working Paper Series in Law and Economics. University of Chicago Law School. Chicago Unbound, 2002. Disponível em http://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=1279&context=law_and_economics. Acesso em 7 jul. 2020. Sobre teorias institucionais:\r\nVERMEULE, Adrian. Judging under uncertainty: an institutional theory of legal interpretation. Massachusetts: Harvard University Press, 2006.",
        idCategoria: "92",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto intitulado Beyond Originalism (2020)",
        ordemCategoriaPai: "400",
        ordemCategoria: "420",
        ordemPergunta: "14",
      },
    ],
  };
  const cenario20 = {
    rows: [
      {
        idPergunta: "580",
        idCategoriaPergunta: "93",
        title: "Qual a data de publicação do presente CENÁRIO?",
        content: "Este CENÁRIO foi publicado no dia 14.10.2020.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "1",
      },
      {
        idPergunta: "581",
        idCategoriaPergunta: "93",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se, em complemento ao CENÁRIO 18 deste APP (Parte 1), de Entrevista com o Dr. Marcio Fernandes Nehab, médico, especialista em medicina vacinal e em infectologia, professor, mestre em Saúde da Criança e da Mulher pelo Instituto Nacional de Saúde da Mulher, da Criança e do Adolescente Fernandes Figueira (IFF-FIOCRUZ), pediatra e infectologista do Instituto Nacional de Saúde da Mulher, da Criança e do Adolescente Fernandes Figueira (IFF-FIOCRUZ), membro do comitê de ensino de pediatria da Sociedade de Pediatria do Estado do Rio de Janeiro e supervisor do Programa de Residência Médica em Pediatria do Instituto Nacional de Saúde da Mulher, da Criança e do Adolescente Fernandes Figueira (IFF-FIOCRUZ). O objetivo desta entrevista gira em torno de, sem perda da didática necessária para a compreensão, até o momento, sobre o Novo Coronavírus e a Covid-19, trazer à baila novas informações, de cunho médico altamente qualificado e, com maior especificidade e tecnicidade, sobre o processo de contaminação que mudou paradigmas, comportamentos sociais, institucionais, econômicos, tecnológicos etc. no Brasil e no mundo. Ressalte-se, esta Entrevista foi concedida pelo Entrevistado no dia 28 de setembro de 2020, de forma oral e, subsequentemente, transcrita para que pudesse constar do presente CENÁRIO do modo mais fidedigno.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "2",
      },
      {
        idPergunta: "582",
        idCategoriaPergunta: "93",
        title:
          "Dr. Marcio, o novo coronavírus significa e significou um momento da história da humanidade praticamente sem precedentes. Mesmo com o atual avanço tecnológico e da medicina, a doença causada pelo novo coronavírus já matou milhões de pessoas pelo mundo. E a Constituição brasileira garante o direito à saúde, com normas, inclusive, que versam sobre a necessidade de se evitar o avanço e a contaminação de doenças. Mas, por que o novo coronavírus atinge com mais gravidade algumas pessoas e com menos ou nenhuma gravidade, outras pessoas?",
        content:
          "Por ser algo muito específico, a carga genética de cada indivíduo, quando interage com o vírus causador da COVID-19, pode levar a uma série de cascatas inflamatórias, que, em alguns casos, podem levar a desfecho muito grave, com o comprometimento de múltiplos órgãos, ou até ao desfecho fatal. Isso se dá muito mais pela singularidade da carga genética e do quadro individual e a sua interação com o vírus do que por qualquer característica ou virulência especial da COVID-19. Corrobora a afirmação o fato de que, quando se trata de crianças, o vírus se mostra, de modo geral, benigno.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "3",
      },
      {
        idPergunta: "583",
        idCategoriaPergunta: "93",
        title:
          "Do ponto de vista médico, qual a sua opinião sobre as medidas de isolamento social, tomadas no Brasil e em vários países do mundo?",
        content:
          "As medidas de isolamento social e distanciamento são fundamentais e, com certeza, as melhores maneiras de diminuir a infecção pelo COVID-19. As pessoas, quando aglomeradas, transmitem umas para as outras de maneira muito fácil, seja através do ar, do contato, de gotículas ou de superfícies contaminadas por secreções. Quando as pessoas ficam longe umas das outras, essa transmissão se torna muito mais difícil. Sendo assim, o ideal é que as pessoas se mantenham a dois metros de distância umas das outras; esse é o mínimo preconizado pela Organização Mundial da Saúde. É possível perceber, por meio de dados – inclusive, de GPS de celular - que o Brasil não conseguiu fazer o isolamento tal como foi implementado em diversos países europeus, ou seja, o isolamento acima de 80% (da população) pelo tempo mínimo de oito semanas. Como resultado, a mortalidade no Brasil é muito maior, principalmente em razão da insuficiência do isolamento e distanciamento social. Em comparação, a mortalidade em boa parte do continente europeu é menor porque, em razão de circunstâncias sociais, econômicas e governamentais, foi viabilizada a implementação do isolamento tal qual recomendado.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "4",
      },
      {
        idPergunta: "584",
        idCategoriaPergunta: "93",
        title:
          "E, sob o manto do mesmo ponto de vista técnico e médico, qual a sua opinião sobre as medidas, em inúmeros países do mundo e no Brasil, de relaxamento do isolamento social?",
        content:
          "Não há como ser feito o isolamento, o lockdown horizontal de forma muito duradoura, pois ninguém consegue ficar em casa durante tanto tempo. No entanto, se todas as pessoas ou a grande maioria (80%) tivesse ficado em casa durante 2 meses, o desfecho teria sido outro. Quanto ao relaxamento, fato é que muitos acabam não aguentando ficar em casa, o que reverbera no número de casos. Dessa forma, quando se inicia um relaxamento nas medidas de isolamento, é percebido, necessariamente, um aumento do número de casos. Isto ocorre a não ser que se trate de país no qual a pandemia foi controlada, o que não é o caso do Brasil.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "5",
      },
      {
        idPergunta: "585",
        idCategoriaPergunta: "93",
        title:
          "A partir de seu olhar técnico, o Sistema de Saúde brasileiro, tanto privado, quanto público, conseguiu dar conta do atendimento adequado aos pacientes? O país conseguiu atender de modo efetivo, do ponto de vista médico, os pacientes com Covid-19? Ou houve falhas e problemas que levaram a óbitos que poderiam ter sido evitados?",
        content:
          "O Brasil tem um Sistema Único de Saúde muito bem organizado e estruturado, mas faltam muitos recursos, pessoal, investimento. Contudo, com relação ao COVID, o que os grandes centros e as cidades, que tiveram esse investimento, fizeram foi trabalhar com tendas ou com hospitais de campanha e fizeram o que puderam em relação ao enfrentamento. O grande problema é que não adianta ter apenas recursos (seja respirador, leito, CTI, máquina de hemodiálise e todo o maquinário e hospital para atender), é necessário que tenha pessoal. Quando se trata de terapia intensiva, por exemplo, não tem como ser feito um curso de trinta minutos para o profissional aprender a ser médico “intensivista”, são necessários anos de experiência. Então, não há como contratar pessoas para trabalharem em terapia intensiva (onde há maiores riscos de os pacientes entrarem em uma complicação e ficarem graves) da noite para o dia. É necessário que haja investimento nisso também. E isso foi muito ruim, mas não só no Brasil. Em qualquer outro país do mundo isso também aconteceu. Não há um grupo de reserva de trabalho para isso. Não é apenas levar um exame de sangue em um laboratório, por exemplo, são necessários médicos que tenham treinamento em terapia intensiva (tanto pediátrica quanto adulta). Então, no pico da pandemia, no Rio de Janeiro, em maio/junho, não se teve essa quantidade suficiente de pessoas bem treinadas para isso. E é óbvio que quando não se tem um profissional adequadamente treinado para trabalhar em uma coisa altamente específica, que é a terapia intensiva, o atendimento fica aquém do esperado. Mas dentro do que foi possível, foi feito o que podíamos. Nunca seremos iguais a Alemanha, aos Estados Unidos, mas eles também tiveram problemas gravíssimos e seríssimos, inclusive com pessoas que já estavam aposentadas avançando para voltar a trabalhar, bem como o movimento de pessoas que estavam em cidades em situação menos pior para cidades que estavam piores, etc. Esse tipo de enfrentamento, não vi com tanta veemência no país.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "6",
      },
      {
        idPergunta: "586",
        idCategoriaPergunta: "93",
        title:
          "Do ponto de vista médico, o que, como e seria possível uma reinfecção pelo novo coronavírus? Se sim, existe alguma noção de probabilidade?",
        content:
          "Então, estamos começamos a ver agora, na literatura médica, as reinfecções por Covid-19. Ainda tem muita coisa a ser estudada e publicada. Mas já sabíamos isso sobre a família do Coronavírus, não dos casos graves do Sars-Cov-1 e do Mers, que são os que foram limitados e muito graves, eu desconheço algum tipo de reinfecção por esses dois agentes. Mas, dos outros quatro (são sete, no total), já se sabe que são os vírus do resfriado comum e, em alguns casos, pneumonia ou, em pessoas com fatores de risco ou imunodepressão, enfim, que pode-se ter reinfecção. Qualquer pessoa pode ter mais de uma vez coronavírus, da família. Com relação a esse vírus, dificilmente seria diferente. A probabilidade de se ter de novo a doença é pequena, pois ainda não deu tempo. Qualquer doença infecciosa, por exemplo, sarampo e catapora, a pessoa teve uma vez, dificilmente terá de novo. A chance é pequena. O resfriado comum, entretanto, por coronavírus, você pode ter mais de uma vez. Há um trabalho publicado em Nova Iorque, mostrando que famílias acompanhadas por segmento prolongado, em uma mesma família, um indivíduo contraiu coronavírus oito vezes (não o Covid-19, mas outro vírus da família). Logo, por que seria diferente com o Covid-19? Só que o tempo para essa reinfecção é ainda desconhecido. Pessoas que tiveram infecções mais graves provavelmente montaram uma resposta imunológica mais poderosa e pode ser que essas estejam mais protegidas. Pessoas que tiveram infecções mais leves, não montam imunidade tal qual pessoas que tiveram infecções mais graves. Então, provavelmente, essas podem ter novamente. Ainda há de ser comprovado se a segunda infecção será mais grave que a primeira. Ainda há poucos casos descritos na literatura, até hoje, final de setembro de 2020, para se confirmar isso. Mas, com certeza, pode-se ter reinfecção.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "7",
      },
      {
        idPergunta: "587",
        idCategoriaPergunta: "93",
        title:
          'Enquanto uma vacina não surge, o Senhor acha que, contrair a Covid-19 e sendo um paciente com sintomas leves ou um paciente assintomático, poder ser "interessante" ou "útil", em razão da aquisição de uma quiçá imunidade? Ou ainda não se sabe sobre as reais sequelas que a doença por causar?',
        content:
          "Essa pergunta é excelente. Acho que a gente não deve pegar de jeito nenhum coronavírus. Não há vantagem, é só desvantagem. Desvantagem por você mesmo ter a doença, e nunca se sabe se você é aquela pessoa que pode evoluir com um desfecho desfavorável, e também pode transmitir para outras pessoas. O grande problema do coronavírus é que ele é altamente transmissível para outras pessoas. Você pode transmitir para uma pessoa e ela ter um resfriado comum, como você pode transmitir para uma pessoa que tenha vários fatores de risco, comorbidades e é vulnerável às formas graves. Não, de forma alguma. Temos que evitar, de toda forma, pegar coronavírus, com as medidas de isolamento, lavagem e mãos e uso de máscara.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "8",
      },
      {
        idPergunta: "588",
        idCategoriaPergunta: "93",
        title:
          "O Senhor acha que, caso surja uma vacina antes do final de 2020, todos devem tomá-la ou, em razão do pouco tempo de pesquisa, será melhor esperar por futuras novas vacinas e/ou confirmações?",
        content:
          "Confesso que ainda não se sabe quando teremos uma vacina para toda a população. Provavelmente começaremos vacinando os profissionais de saúde, depois a população de risco mais vulnerável, acredito que semelhante à vacinação de gripe (com seus grupos de risco e ordem de vacinação) para, posteriormente, vacinar todo o resto da população. As vacinas que forem liberadas pelo Ministério da Saúde não só eu tomarei, mas também meus filhos e toda a minha família, afinal, não existe nada na humanidade, depois da água potável, que salve mais vidas do que a vacina e, provavelmente, essa é a vacina mais esperada da nossa geração. Então não vou esperar nada, tomarei a vacina assim que sair. Se ela foi liberada pelo Ministério da Saúde significa que sofreu todos os critérios de segurança, farmacodinâmica, biodisponibilidade, de efeitos adversos e de segurança da população. Acredito que se isso é feito, como ocorre no Brasil há muitos anos através do Programa Nacional de Imunizações, com o instituto Butantan e a Fiocruz produzindo milhões de doses feitas com toda a segurança para a população brasileira, isso não seria diferente com a vacina para o Covid, que ambos os institutos já estão em fases finais de testes para fornecer toda a segurança para a população brasileira.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "9",
      },
      {
        idPergunta: "589",
        idCategoriaPergunta: "93",
        title:
          "Na opinião do Senhor, a humanidade continuará vulnerável a vírus, bactérias e outra formas de vida invisíveis a olho nu, como ocorrido nestes anos de 2019 e, principalmente, 2020?",
        content:
          "Sim, com certeza. As epidemias e as pandemias vão continuar existindo, bem como já existem desde que o homem é homem. Temos exemplos recentes. Antes do coronavírus, tivemos a pandemia de vírus da influenza H1N1, bem como tivemos as epidemias de dengue. Estas últimas não foram pandemias, que abrangem o mundo inteiro, pois são doenças típicas de zonas tropicais (dengue, zika, chikungunya). Acredito que, infelizmente, teremos outros agentes infecciosos que vão infectar o mundo inteiro. O maior problema do coronavírus, que era o maior medo de qualquer infectologista, é que ele é um vírus de ata transmissibilidade, ou seja, é muito fácil de ser transmitido e que é transmissível pelo ar. Outro grande problema dele é que é transmitido de forma assintomática, ou seja, a pessoa nem sabe que está transmitindo. Diferente do Ebola, que tem uma letalidade altíssima (beira 40%, 50%) em que apenas se transmite quando a pessoa está infectada pelo vírus e há sintoma. E casos muito graves não se transmite porque, muitas vezes, a doença é fatal e não se propaga da mesma forma que os vírus da gripe, por exemplo (influenza ou coronavírus). Mas, sim, acredito que continuaremos tendo por uma série de motivos, normalmente é a falência econômica mundial, de uma forma geral, desigualdades sociais, que são pratos cheios para as pandemias.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "10",
      },
      {
        idPergunta: "590",
        idCategoriaPergunta: "93",
        title:
          "Por fim, enquanto Professor, altamente especializado em infectologia, e médico pediatra especialista no tratamento de patologias infantis de grande gravidade, o Senhor teve contato com alguma criança que tenha contraído a Covid-19, tenha sido hospitalizada em estado de saúde grave e, também, teve contato com algum óbito infantil decorrente da doença?",
        content:
          "Essa é uma pergunta importante, mas, do ponto de vista pediátrico, estamos muito tranquilos. Só para vocês terem uma ideia (não vou saber exatamente os dados), por exemplo, nos Estados Unidos, de 200 mil óbitos de coronavírus, menos de 200 crianças morreram. Dessas, ¾ tinham doenças de base. Isso não quer dizer que crianças não possam morrer por causa do coronavírus, mas isso é algo raríssimo, mesmo nas formas graves e inflamatórias. Tanto as formas graves em crianças são raríssimas, da ordem de 1 a 2 para 100 mil habitantes, quanto o fato de que, mesmo quando pegam essas formas graves, é muita pequena a chance de óbito. Eu trabalho em Unidade de Referência e, infelizmente, eu vi, sim, uma criança com essa forma gravíssima, mas, quando ela foi tratada de forma adequada, com toda a equipe de saúde envolvida e todo o maquinário de terapia intensiva de alto nível, ela foi muito bem tratada e saiu bem e sem sequela. Os casos de óbito em pediatria podem ocorrer, sim, mas eles são raros. Não é que eu não esteja preocupado, preocupado a gente sempre fica, mas a gente não fica desesperado como ficam os idosos e pessoas mais velhas que têm comorbidade quando comparado com as crianças. As crianças abaixo de 20 anos estão, aparentemente, bem protegidas e isso não quer dizer que elas não possam ter as complicações ou precisar de terapia intensiva. Mas, quando comparadas com adultos, idosos e pessoas com comorbidades, esse desfecho é muito menos comum. Pelo menos, dessa vez, as crianças ficaram bem protegidas em relação ao coronavírus, quando comparadas com adultos.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "11",
      },
      {
        idPergunta: "591",
        idCategoriaPergunta: "93",
        title: "Quais as Conclusões?",
        content:
          "Percebe-se, a partir de todas as respostas e considerações feitas pelo Entrevistado, que há muito o que ainda se aprender sobre o tema e que os estudos não param e não podem parar. E, da mesma forma, é imperioso ressaltar que os referidos estudos somente poderão seguir sempre adiante a partir de investimentos sempre maiores em educação e saúde enquanto direitos sociais e fundamentais previstos na Constituição da República Federativa do Brasil (CRFB).",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "12",
      },
      {
        idPergunta: "592",
        idCategoriaPergunta: "93",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "93",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e transversais conhecimentos: entrevista com o médico, Dr. Marcio Fernandes Nehab (Parte 2)",
        ordemCategoriaPai: "400",
        ordemCategoria: "421",
        ordemPergunta: "13",
      },
    ],
  };

  const cenario21 = {
    rows: [
      {
        idPergunta: "606",
        idCategoriaPergunta: "97",
        title: "Qual a data de publicação do presente CENÁRIO?",
        content: "Este CENÁRIO foi publicado no dia 22.05.2021.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "1",
      },
      {
        idPergunta: "607",
        idCategoriaPergunta: "97",
        title: "Quais as Considerações Iniciais?",
        content:
          "Trata-se de análise sobre a figura das Comissões Parlamentares de Inquérito (CPI’s) e do específico contexto ocorrido para a instauração da Comissão Parlamentar de Inquérito (CPI) da Covid-19, que possui como principal objetivo a apuração de eventuais irregularidades e omissões relacionadas ao combate à pandemia de Covid-19. Nesse sentido, o presente CENÁRIO buscará enfrentar a problemática que girou em torno da criação da referida CPI, tendo em vista a decisão do Ministro Relator (Luís Roberto Barroso), confirmada em Plenário do Supremo Tribunal Federal (STF), que determinou a sua instalação. Ressalte-se que a decisão judicial se impôs, em razão de provocação de dois parlamentares e diante da inércia do Presidente do Senado Federal no que tange à referida instauração. Portanto, o presente CENÁRIO abordará, brevemente, não apenas questões ligadas a toda e qualquer CPI, mas também argumentos, questionamentos e reflexões, principalmente ligados ao cabimento (ou não) da CPI da Covid-19, especificamente (remete-se, desde já e, quando necessário, aos CENÁRIOS 18 e 20 deste APP).",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "2",
      },
      {
        idPergunta: "608",
        idCategoriaPergunta: "97",
        title:
          "Em breve síntese, no que consiste uma CPI? Quais são os requisitos para a sua instauração e suas principais funções e características?",
        content:
          "Primeiramente, cumpre destacar que uma CPI nada mais é que uma manifestação da atividade fiscalizadora do Parlamento. Encontra previsão no art. 58, § 3º, da Constituição de 1988 (CRFB/88), bem como na Lei nº 1.579, de 1952, e nos regimentos internos da Câmara dos Deputados e do Senado Federal. O primeiro requisito para a instauração de uma CPI é a aprovação de, pelo menos, 1?3 dos membros da Câmara dos Deputados ou do Senado Federal, o que corresponde, respectivamente, a 171 Deputados ou 27 Senadores. Quando uma CPI é composta, em conjunto, pelo Senado Federal e pela Câmara dos Deputados, que juntos formam o Congresso Nacional, ela recebe o nome de CPI Mista. Além disso, deverá ser instaurada por prazo certo (com início e término previamente previstos). E isso porque se trata de uma Comissão de caráter temporário, sendo possível que o referido prazo seja sucessivamente prorrogado, desde que dentro de uma mesma legislatura e por requerimento subscrito por, pelo menos, 1/3 dos parlamentares. Por fim, deve a CPI ser criada para a investigação de determinado fato (ou fato determinado), que coloque em risco a ordem pública. Nesse sentido, a sua principal finalidade é justamente a apuração de fatos certos e objetivamente identificados, que devem ser de interesse público e necessariamente estar no âmbito de competência da União, com uma possibilidade de também investigar situações, atos e fatos concretos, mas paralelos e, igualmente, certos, desde que estejam intimamente ligados ao objeto e fato principais sob apuração. Ressalte-se, por esse viés, que a CPI não irá processar, julgar ou acusar ninguém, mas, sim, investigar fato, colhendo elementos de prova e, caso necessário, poderá encaminhar suas conclusões aos órgãos de controle cabíveis, para que estes adotem as medidas necessárias, promovendo a responsabilidade civil e criminal dos infratores. Os referidos órgãos de controle, a título exemplificativo, podem ser o Ministério Público, o Tribunal de Contas, a Advocacia-Geral da União, entre outros que se mostrem competentes para os fins propostos. Entre os inúmeros poderes das CPIs, trazidos pela legislação, doutrina e jurisprudência do STF, pode-se desde já chamar a atenção para o já mencionado poder de investigação, tal qual uma autoridade judicial, podendo inquirir testemunhas, ouvir suspeitos, requisitar informações e documentos, tomar o depoimento de autoridades, quebrar sigilos bancários e ficais, decretar prisões etc.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "3",
      },
      {
        idPergunta: "609",
        idCategoriaPergunta: "97",
        title: "Por que foi instaurada esta específica CPI da Covid-19?",
        content:
          'Conforme explicitado na pergunta anterior, a CPI é um instrumento utilizado para apurar determinadas situações e, em certas circunstâncias, buscar a responsabilidade de quem tenha praticado atos ilícitos (entendendo-se por atos ilícitos não necessariamente os pertencentes à esfera criminal, uma vez que há possibilidade de ilícitos civis e administrativos). Em janeiro de 2021, diante da falta de oxigênio para pacientes internados com a Covid-19, situação que acometeu especialmente a cidade de Manaus, capital do estado do Amazonas, o senador Randolfe Rodrigues (Rede-AP) deu início à coleta de assinaturas para a instauração de uma CPI que investigasse ações ou omissões do Governo Federal (Poder Executivo), que pudessem ter ensejado o agravamento da pandemia. O referido Senador da República obteve a assinatura de 33 senadores - reduzidas a 32 com a morte do senador Major Olímpio (PSL-SP) pela Covid-19. O número foi mais do que o necessário (de 27 assinaturas), mas a CPI não foi instalada imediatamente pelo Presidente do Senado Federal, senador Rodrigo Pacheco (DEM-MG). Diante dessa situação de inércia, os senadores Alessandro Vieira (Cidadania-SE) e Jorge Kajuru (Cidadania-GO) impetraram um Mandado de Segurança junto ao Supremo Tribunal Federal (STF) alegando que, se um pedido de abertura de uma CPI cumprir todos os pré-requisitos, previstos na CRFB/88, não caberia mais ao Senado Federal decidir e deliberar (ou não), sobre a sua instalação. Em decisão pela qual se proferiu ordem liminar, o já neste CENÁRIO mencionado Ministro Relator determinou a instalação da CPI. Após tal episódio, a decisão foi confirmada pelo Plenário do STF. Resta claro que o escopo da CPI aqui discutida foi o de, nos termos das razões legislativas utilizadas para a sua própria abertura, “apurar as ações e omissões do Governo Federal no enfrentamento da pandemia da Covid-19 no Brasil e, em especial, no agravamento da crise sanitária no Amazonas com a ausência de oxigênio para os pacientes internados". Em resumo, o objetivo foi apurar eventuais irregularidades e omissões do Governo Federal no enfrentamento à pandemia, com foco na situação de escassez de oxigênio no Estado do Amazonas, além do atraso na compra de vacinas e uso de dinheiro público na compra de medicamentos sem comprovação científica (como a hidroxicloroquina), entre outras questões. Cumpre destacar que entre a primeira decisão do STF e a leitura dos requerimentos em sessão legislativa do Senado, o senador Eduardo Girão (Podemos-CE) elaborou um novo requerimento de CPI, que contou com as assinaturas necessárias para investigar o uso de verbas federais, destinadas ao combate da pandemia, nos estados e municípios. Nesse sentido, os dois requerimentos foram unidos, e o escopo da CPI da Covid-19 ampliado, de modo a também contemplar a apuração de possíveis desvios e mau uso das verbas da União repassadas aos entes da Federação para o combate à Covid-19.',
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "4",
      },
      {
        idPergunta: "610",
        idCategoriaPergunta: "97",
        title:
          "Por que e como o STF foi convocado a agir para a abertura da presente CPI?",
        content:
          "Conforme já mencionado, o STF fora convocado a agir para que houvesse a instauração da CPI em comento. Isso se deu partir da impetração do Mandado de Segurança (MS) n° 37.760/DF, com medida cautelar, impetrado pelos senadores Alessandro Vieira e Jorge Kajuru Reis da Costa Nasser, em face do Presidente do Senado Federal, Rodrigo Pacheco, solicitando a adoção das providências necessárias à instalação de Comissão Parlamentar de Inquérito para “apurar as ações e omissões do Governo Federal no enfrentamento da pandemia da Covid-19 no Brasil e, em especial, no agravamento da crise sanitária no Amazonas com a ausência de oxigênio para os pacientes internados”. Frise-se que o ajuizamento do mencionado remédio constitucional ocorreu após inércia e/ou recusa do Presidente do Senado Federal em instaurar a CPI, apesar de todos os requisitos constitucionais e regimentais estarem presentes. Nesse sentido, argumentou-se que a instauração da CPI deve ser considerada um direito fundamental da minoria parlamentar. Assim, a não instauração representaria uma violação a direito líquido e certo, o que, por fim, ensejaria o ajuizamento de Mandado de Segurança (MS).",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "5",
      },
      {
        idPergunta: "611",
        idCategoriaPergunta: "97",
        title:
          "Deve o STF poder intervir na atividade legislativa e determinar a abertura da CPI e, se SIM, quais poderiam ser alguns dos argumentos centrais favoráveis a esta específica atuação judicial?",
        content:
          "A questão não se restringe à determinação de instauração de CPI, mas, em verdade, refere-se a um aspecto mais amplo, relativo aos limites da atividade judicial, precipuamente no que concerne à observância do princípio da separação dos poderes. Em um primeiro momento, cumpre reiterar que o Supremo Tribunal Federal foi instigado, via Mandado de Segurança, a manifestar-se sobre a questão. Portanto, foi provocado para conceder ou não ordem liminar para a determinação “[d]a adoção das providências necessárias à efetiva instalação da CPI nos precisos termos do Requerimento SF/21139.59425-24”, em razão de omissão da autoridade coatora - in casu, o Presidente do Senado Federal. Desta feita e, conforme consignado em decisão proferida pelo Ministro Relator, a jurisprudência do STF já era uníssona no sentido de que seria cabível a intervenção judicial na atividade legislativa. Em outras palavras, de que somente seria viável o controle jurisdicional de atos parlamentares na hipótese de desrespeito de direitos ou garantias constitucionais, de modo que a intervenção se mostraria necessária para assegurar a supremacia e a integridade constitucional. Assim, ressalte-se anterior julgado do STF, pelo qual “‘revela-se legítima a intervenção jurisdicional, sempre que os corpos legislativos ultrapassem os limites delineados pela Constituição ou exerçam as suas atribuições institucionais com ofensa a direitos públicos subjetivos impregnados de qualificação constitucional e titularizados, ou não, por membros do Congresso Nacional’” (MS 24.849, Rel. Min. Celso de Mello, julgado em 22.06.2005). Portanto, pode-se perceber que um forte argumento favorável à intervenção do STF, para possibilitar a criação e a abertura da CPI da Covid-19, foi o de que a instauração da CPI deve ser considerada um direito fundamental da minoria parlamentar. A criação de uma CPI, por essa linha, seria decorrência direta do regime democrático, sendo sua instauração, cumpridos os requisitos constitucionais e regimentais já mencionados no presente CENÁRIO, um direito subjetivo - de modo que as maiorias não poderiam barrar sua criação. Os próprios Regimentos Internos da Câmara dos Deputados e do Senado Federal não dão azo a qualquer tipo de discricionariedade do Presidente da respectiva Casa Legislativa para decidir o que terá prosseguimento ou não. Assim, uma vez aprovada a abertura de CPI, com o atendimento aos seus requisitos, deve-se fazer uma análise meramente formal sobre a presença (ou não) dos requisitos constitucionais e regimentais para a sua instauração, nos termos do art. 35, § 2°, da Resolução da Câmara dos Deputados n° 17, de 1989, e art. 145, § 2°, da Resolução do Senado Federal n° 93, de 1970.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "6",
      },
      {
        idPergunta: "612",
        idCategoriaPergunta: "97",
        title:
          "Deve o STF poder intervir na atividade legislativa e determinar a abertura da CPI e, se NÃO, quais poderiam ser alguns dos argumentos centrais contrários a esta específica atuação judicial?",
        content:
          "Apesar da CPI ter efetivamente sido instaurada, é preciso destacar que a mesma foi alvo de inúmeras críticas. A principal delas gira em torno da enorme interferência do STF no Poder Legislativo, ao determinar diretamente o que o Presidente do Senado Federal deveria fazer. Estaria o STF agindo com desrespeito ao princípio da separação de poderes (art. 2° da CRFB/88), assim como sob o viés daquilo que se denomina ativismo judicial e interferindo no espaço de atuação do Congresso Nacional? Por essa perspectiva, muitos parlamentares sustentaram que o Presidente do Senado Federal exerceu juízo de conveniência e oportunidade políticas, pois esse não seria o melhor momento para a instauração de uma CPI, devido à gravidade da pandemia no Brasil e seus graves desdobramentos políticos, sociais, econômicos, jurídicos, entre outros. De acordo com o neste CENÁRIO já citado art. 58, § 3º, da CRFB/88, único dispositivo constitucional a tratar das CPI’s, depreende-se que todo o processo gira em torno de atos legislativos, parlamentares, ou seja, da Casa ou das Casas Legislativas nas quais se tentará instaurar uma CPI. Mais precisamente, então, todo processo e procedimento de instalação de uma CPI estaria ligado a atos do Poder Legislativo, o que tornaria interferências formais de outros Poderes, a priori, inadequadas. De todo modo, tendo em vista que ao Poder Judiciário, no Brasil, basta ser provocado para que seja obrigado a agir, restaria saber se no caso específico examinado neste CENÁRIO, poderia o STF, sobretudo a partir de bases teóricas e, não, jurisprudenciais, interferir no ofício inerente aos cargos de parlamentares, ainda que a ser, em seguida, recheado de funções atípicas do Poder Legislativo. Em um possível novo CENÁRIO, voltar-se-á ao tema, uma vez que, propositalmente, se deixa suspensa qualquer resposta à problemática lançada. Certo é que cabe ao Poder Legislativo instaurar uma CPI. E certo é que situações concretas trazem comumente novos elementos, os quais escapam de previsões constitucionais e legais, para os quais, muitas vezes, finda por caber ao Poder Judiciário obrigatoriamente ter que se posicionar. Tivesse o Presidente do Senado Federal aberto a CPI, desnecessário teria sido o MS proposto junto ao STF. E, sobretudo teoricamente, renova-se a indagação sobre a competência do Presidente do Senado Federal no tocante à obrigação ou não de abertura de uma CPI, cujos requisitos encontram-se totalmente presentes e preenchidos.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "7",
      },
      {
        idPergunta: "613",
        idCategoriaPergunta: "97",
        title: "Quais as Conclusões?",
        content:
          "Pode-se concluir que as CPI’s são um importante mecanismo presente no ordenamento jurídico brasileiro, consistentes em uma manifestação da atividade fiscalizadora do Parlamento. Com poderes de investigação próprios das autoridades judiciais, as CPI’s apuram fatos determinados de interesse e relevância sociais, públicos e para a ordem constitucional vigente. A CPI da Covid-19 foi instaurada possuindo como plano de trabalho investigar as ações de enfrentamento à pandemia, assistência farmacêutica, as estruturas de combate à crise, o colapso de saúde no Amazonas, as ações de prevenção e atenção à saúde indígena e o emprego de recursos federais. Ocorre que o contexto de sua instauração foi extremamente turbulento, gerando inúmeros debates quanto à existência (ou não) de juízo de conveniência e oportunidade políticos para a sua instauração pelo Presidente da respectiva Casa. Enquanto alguns entendem que a instauração da CPI da Covid-19 seria, sim, uma prerrogativa do Presidente do Senado e que decisão do STF teria sido uma clara interferência no Poder Legislativo, outros defendem que a instauração da CPI, cumpridos os requisitos constitucionais e regimentais, é direito fundamental da minoria parlamentar.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "8",
      },
      {
        idPergunta: "614",
        idCategoriaPergunta: "97",
        title:
          "Quais os textos dos dispositivos legais/normativos citados neste CENÁRIO?",
        content:
          "Se já não reproduzidos no próprio corpo das respectivas respostas às perguntas deste CENÁRIO, quando da menção às referências legislativas, haverá não somente menção, mas a existência de LINKS, com a possibilidade de visita a SITES onde são encontrados os textos oficiais de todos os dispositivos legais/normativos citados neste CENÁRIO.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "9",
      },
      {
        idPergunta: "615",
        idCategoriaPergunta: "97",
        title: "Quais os participantes da presente e específica pesquisa?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi.; 2) COSATI, Maria Clara Conde Moraes.; 3) LEITE, Manuella Suita Dutra.; 4) MOULIN, Isabelle Esteves.; 5) RODRIGUES, Tayssa Cristine.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "10",
      },
      {
        idPergunta: "616",
        idCategoriaPergunta: "97",
        title: "Quais as referências bibliográficas (incluindo vídeos)?",
        content:
          "Em ordem alfabética: 1) BONIZZATO, Luigi, REIS, José Carlos Vasconcellos dos. Direito Constitucional: questões clássicas, contemporâneas e críticas: atualizada e ampliada nos 30 anos da Constituição de 1988. 02. ed. Rio de Janeiro: Editora Lumen Juris, 2018; 2) BONIZZATO, Luigi. A Constituição e suas Instituições contemporâneas: representatividade, crises, exemplos e marcos fáticos no Brasil como elementos de análise de teorias constitucionais-institucionais brasileiras. Rio de Janeiro: Editora Lumen Juris, 2017.; 3) CANOTILHO, J.J. Gomes. Direito Constitucional e Teoria da Constituição. 07. Ed. Coimbra: Almedina, 2003.; 4) JORDÃO, Eduardo. Controle judicial de administração pública complexa: a experiência estrangeira na adaptação da intensidade do controle. São Paulo: Editora Malheiros, 2016.; 5) LOPES, Ana Maria D’Ávila. Os direitos fundamentais como limites ao poder de legislar. Porto Alegre: Sérgio Antônio Fabris Editor, 2001.; 6) MENDES, Gilmar Ferreira, BRANCO, Paulo Gustavo Gonet, COELHO, Inocência Mártires. Curso de direito constitucional. 4. ed. São Paulo: Saraiva, 2009.; 7) MOREIRA NETO, Diogo de Figueiredo. Legitimidade e discricionariedade. 4. ed. Rio de Janeiro: Editora Forense, 2001.; 8) PADILHA, Rodrigo. Comissão Parlamentar de Inquérito - CPI. In: Youtube, 30 de maio de 2012. Disponível em: < https://www.youtube.com/watch?v=nhBMN2wZ23s> Acesso em: 21 maio 2020.; 9) SARLET, Ingo, MARINONI, Luiz Guilherme, MITIDIERO, Daniel. Curso de Direito Constitucional. 06. ed. São Paulo: Editora Saraiva, 2017.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "11",
      },
      {
        idPergunta: "617",
        idCategoriaPergunta: "97",
        title:
          "Quais as referências bibliográficas das legislações, decisões e Constituições mencionadas?",
        content:
          "Em ordem alfabética: 1) BRASIL. Constituição Federal da República Federativa do Brasil (1988). Disponível em: http://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm. Acesso em: 20 maio 2021; 2) BRASIL. Resolução n° 17 de 1989. Câmara dos Deputados, 20 de maio de 2021. Disponível em: https://www2.camara.leg.br/atividade-legislativa/legislacao/regimento-interno-da-camara-dos-deputados/arquivos-1/RICD%20atualizado%20ate%20RCD%2021-2021.pdf; 3) BRASIL. Resolução nº 93 de 1970. Senado Federal, 20 de maio de 2021. Disponível em: https://www25.senado.leg.br/documents/12427/45868/RISF+2018+Volume+1.pdf/cd5769c8-46c5-4c8a-9af7-99be436b89c4.; 4) BRASIL. Decisão Judicial proferida pelo Supremo Tribunal Federal (STF) em Mandado de Segurança n° 37.760/DF. Disponível em: redir.stf.jus.br. Acesso em 20 de maio de 2021.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "12",
      },
      {
        idPergunta: "618",
        idCategoriaPergunta: "97",
        title:
          "Houve a utilização de alguma outra Fonte de pesquisa, que não a bibliográfica?",
        content:
          "Não. Para a linha teórica que separa a jurisprudência e a determina como fonte autônoma, houve a utilização de decisões judiciais.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "13",
      },
      {
        idPergunta: "619",
        idCategoriaPergunta: "97",
        title:
          "Sugestões bibliográficas para aprofundamento no tema específico ou em temas paralelos (limitação a uma indicação por categoria)?",
        content:
          "1) Sobre relações institucionais: BOLONHA, Carlos, BONIZZATO, Luigi, MAIA, Fabiana (Coords.). Teoria institucional e constitucionalismo contemporâneo. Curitiba: Editora Juruá, 2016.; 2) Sobre Separação de Poderes: ACKERMAN, Bruce. New Separation of Powers. Harvard Law Review, Vol. 133, 633, 2000.; 3) Sobre Poderes: BICKEL, Alexander M. The Least Dangerous Branch: The Supreme Court at the Bar of Politics. 02. ed. New Haven: Yale University Press, 1986.",
        idCategoria: "97",
        idCategoriaPai: "55",
        descCategoria:
          "CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e envolvimentos constitucionais e institucionais (Parte 3). Específicas considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o caso da instauração da CPI da Covid-19",
        ordemCategoriaPai: "400",
        ordemCategoria: "422",
        ordemPergunta: "14",
      },
    ],
  };

  const styles = {
    bgColor: "white",
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "grey",
    arrowColor: "black",
  };

  const config = {
    animate: false,
    arrowIcon: <IoIosArrowDown size={20} />,
    tabFocus: true,
  };

  useEffect(() => {}, []);

  const [showEleicoes, setShowEleicoes] = useState(false);
  const [showEstruturaapp, setShowEstruturaapp] = useState(false);
  const [showConstituicaoAlteracao, setShowConstituicaoAlteracao] =
    useState(false);
  const [showConstituicaoNocoes, setShowConstituicaoNocoes] = useState(false);
  const [showConstituicaoHistoria, setShowConstituicaoHistoria] =
    useState(false);
  const [showConstituicaoApresentacao, setShowConstituicaoApresentacao] =
    useState(false);
  const [showConstituicaoReligiao, setShowConstituicaoReligiao] =
    useState(false);
  const [showDemocracia, setShowDemocracia] = useState(false);
  const [showPrincipios, setShowPrincipios] = useState(false);
  const [showInconstitucionalidade, setShowInconstitucionalidade] =
    useState(false);
  const [showGovestreg, setShowGovestreg] = useState(false);
  const [showPoderes, setShowPoderes] = useState(false);
  const [showDireitosFundamentais, setShowDireitosFundamentais] =
    useState(false);
  const [showDireitosLiberdade, setShowDireitosLiberdade] = useState(false);
  const [showDireitosHumanos, setShowDireitosHumanos] = useState(false);
  const [showPrincipioIgualdade, setShowPrincipioIgualdade] = useState(false);
  const [showDireitoVida, setShowDireitoVida] = useState(false);
  const [showDireitoPropriedade, setShowDireitoPropriedade] = useState(false);
  const [showDireitosSocias, setShowDireitosSocias] = useState(false);
  const [showDireitosSeguranca, setShowDireitosSeguranca] = useState(false);
  const [showPoliciaBombeiros, setShowPoliciaBombeiros] = useState(false);
  const [showGuardaMunicipal, setShowGuardaMunicipal] = useState(false);
  const [showDireitosDefiencia, setShowDireitosDefiencia] = useState(false);
  const [showDireitoSaude, setShowDireitoSaude] = useState(false);
  const [showDireitoTransporte, setShowDireitoTransporte] = useState(false);
  const [showDireitoPolitico, setShowDireitoPolitico] = useState(false);
  const [showPartidosPoliticos, setShowPartidosPoliticos] = useState(false);
  const [showDireitoAdquirido, setShowDireitoAdquirido] = useState(false);
  const [showNacionalidade, setShowNacionalidade] = useState(false);
  const [showSimbolos, setShowSimbolos] = useState(false);
  const [showProcessoJudicial, setShowProcessoJudicial] = useState(false);
  const [showDireitoPenalConstitucional, setShowDireitoPenalConstitucional] =
    useState(false);
  const [showPoderExecutivo, setShowPoderExecutivo] = useState(false);
  const [showAtualPresidente, setShowAtualPresidente] = useState(false);
  const [showPoderLegislativo, setShowPoderLegislativo] = useState(false);
  const [showComissoesParlamentares, setShowComissoesParlamentares] =
    useState(false);
  const [showProcessoLegislativo1, setShowProcessoLegislativo1] =
    useState(false);
  const [showProcessoLegislativo2, setShowProcessoLegislativo2] =
    useState(false);
  const [showSancaoVeto, setShowSancaoVeto] = useState(false);
  const [showPoderJudiciario, setShowPoderJudiciario] = useState(false);
  const [showSupremoTribunal, setShowSupremoTribunal] = useState(false);
  const [showAtuaisMinistros, setShowAtuaisMinistros] = useState(false);
  const [showEstadoDefesa, setShowEstadoDefesa] = useState(false);
  const [showIntervencaoFederal, setShowIntervencaoFederal] = useState(false);
  const [showForcasArmadas, setShowForcasArmadas] = useState(false);
  const [showMinisterioPublico, setShowMinisterioPublico] = useState(false);
  const [showTribunalContas, setShowTribunalContas] = useState(false);
  const [showAdmPublica, setShowAdmPublica] = useState(false);
  const [showAdmPublicaIndireta, setShowAdmPublicaIndireta] = useState(false);
  const [showOrdemEconomica, setShowOrdemEconomica] = useState(false);
  const [showOrdemUrbana, setShowOrdemUrbana] = useState(false);
  const [showOrdemAmbiental, setShowOrdemAmbiental] = useState(false);
  const [showInstrumentoConstitucionais, setShowInstrumentoConstitucionais] =
    useState(false);
  const [showTributacaoConstituicao, setShowTributacaoConstituicao] =
    useState(false);
  const [showOrcamentoConstituicao, setShowOrcamentoConstituicao] =
    useState(false);
  const [showDireitoCultura, setShowDireitoCultura] = useState(false);
  const [showDireitoDesporto, setShowDireitoDesporto] = useState(false);
  const [showFamilia, setShowFamilia] = useState(false);
  const [showCensura, setShowCensura] = useState(false);
  const [showRacismo, setShowRacismo] = useState(false);
  const [showPrevidencia, setShowPrevidencia] = useState(false);
  const [showLiminar, setShowLiminar] = useState(false);
  const [showMandatoMandado, setShowMandatoMandado] = useState(false);
  const [showReformas, setShowReformas] = useState(false);
  const [showSetencaAcordao, setShowSetencaAcordao] = useState(false);
  const [showUsucapiao, setShowUsucapiao] = useState(false);
  const [showTransitoJulgado, setShowTransitoJulgado] = useState(false);
  const [showCapitulo4, setShowCapitulo4] = useState(false);
  const [showCenario1, setShowCenario1] = useState(false);
  const [showCenario2, setShowCenario2] = useState(false);
  const [showCenario3, setShowCenario3] = useState(false);
  const [showCenario4, setShowCenario4] = useState(false);
  const [showCenario5, setShowCenario5] = useState(false);
  const [showCenario6, setShowCenario6] = useState(false);
  const [showCenario7, setShowCenario7] = useState(false);
  const [showCenario8, setShowCenario8] = useState(false);
  const [showCenario9, setShowCenario9] = useState(false);
  const [showCenario10, setShowCenario10] = useState(false);
  const [showCenario11, setShowCenario11] = useState(false);
  const [showCenario12, setShowCenario12] = useState(false);
  const [showCenario13, setShowCenario13] = useState(false);
  const [showCenario14, setShowCenario14] = useState(false);
  const [showCenario15, setShowCenario15] = useState(false);
  const [showCenario16, setShowCenario16] = useState(false);
  const [showCenario17, setShowCenario17] = useState(false);
  const [showCenario18, setShowCenario18] = useState(false);
  const [showCenario19, setShowCenario19] = useState(false);
  const [showCenario20, setShowCenario20] = useState(false);
  const [showCenario21, setShowCenario21] = useState(false);

  return (
    <>
      <Title hr onClick={() => setShowEleicoes(!showEleicoes)}>
        ELEIÇÕES 2022 <hr />
      </Title>
      {showEleicoes && <Faq data={eleicoes} styles={styles} config={config} />}

      <Title hr onClick={() => setShowEstruturaapp(!showEstruturaapp)}>
        INTRODUÇÃO À ESTRUTURA DO APP <hr />
      </Title>
      {showEstruturaapp && (
        <Faq data={estruturaapp} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowConstituicaoAlteracao(!showConstituicaoAlteracao)}
      >
        CONSTITUIÇÃO - ALTERAÇÃO <hr />
      </Title>
      {showConstituicaoAlteracao && (
        <Faq data={constituicaoAlteracao} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowConstituicaoNocoes(!showConstituicaoNocoes)}
      >
        CONSTITUIÇÃO - NOÇÕES <hr />
      </Title>
      {showConstituicaoNocoes && (
        <Faq data={constituicaoNocoes} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowConstituicaoHistoria(!showConstituicaoHistoria)}
      >
        CONSTITUIÇÃO - HISTÓRIA <hr />
      </Title>
      {showConstituicaoHistoria && (
        <Faq data={constituicaoHistoria} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() =>
          setShowConstituicaoApresentacao(!showConstituicaoApresentacao)
        }
      >
        CONSTITUIÇÃO -APRESENTAÇÃO ESTRUTURA
        <hr />
      </Title>
      {showConstituicaoApresentacao && (
        <Faq data={constituicaoApresentacao} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowConstituicaoReligiao(!showConstituicaoReligiao)}
      >
        CONSTITUIÇÃO - RELIGIÃO <hr />
      </Title>
      {showConstituicaoReligiao && (
        <Faq data={constituicaoReligiao} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowDemocracia(!showDemocracia)}>
        DEMOCRACIA <hr />
      </Title>
      {showDemocracia && (
        <Faq data={democracia} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowPrincipios(!showPrincipios)}>
        PRINCÍPIOS <hr />
      </Title>
      {showPrincipios && (
        <Faq data={principios} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowInconstitucionalidade(!showInconstitucionalidade)}
      >
        INCONSTITUCIONALIDADE <hr />
      </Title>
      {showInconstitucionalidade && (
        <Faq data={inconstitucionalidade} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowGovestreg(!showGovestreg)}>
        GOVERNO, ESTADO, REGIMES <hr />
      </Title>
      {showGovestreg && (
        <Faq data={govestreg} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowPoderes(!showPoderes)}>
        PODERES <hr />
      </Title>
      {showPoderes && <Faq data={poderes} styles={styles} config={config} />}

      <Title
        hr
        onClick={() => setShowDireitosFundamentais(!showDireitosFundamentais)}
      >
        DIREITOS FUNDAMENTAIS <hr />
      </Title>
      {showDireitosFundamentais && (
        <Faq data={direitosFundamentais} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowDireitosLiberdade(!showDireitosLiberdade)}
      >
        DIREITOS DE LIBERDADE <hr />
      </Title>
      {showDireitosLiberdade && (
        <Faq data={direitosLiberdade} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowDireitosHumanos(!showDireitosHumanos)}>
        DIREITOS HUMANOS <hr />
      </Title>
      {showDireitosHumanos && (
        <Faq data={direitosHumanos} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowPrincipioIgualdade(!showPrincipioIgualdade)}
      >
        PRINCÍPIOS DA IGUALDADE <hr />
      </Title>
      {showPrincipioIgualdade && (
        <Faq data={principioIgualdade} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowDireitoVida(!showDireitoVida)}>
        DIREITO À VIDA <hr />
      </Title>
      {showDireitoVida && (
        <Faq data={direitoVida} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowDireitoPropriedade(!showDireitoPropriedade)}
      >
        DIREITO DE PROPRIEDADE <hr />
      </Title>
      {showDireitoPropriedade && (
        <Faq data={direitoPropriedade} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowDireitosSocias(!showDireitosSocias)}>
        DIREITOS SOCIAIS <hr />
      </Title>
      {showDireitosSocias && (
        <Faq data={direitosSocias} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowDireitosSeguranca(!showDireitosSeguranca)}
      >
        DIREITOS À SEGURANÇA <hr />
      </Title>
      {showDireitosSeguranca && (
        <Faq data={direitosSeguranca} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowPoliciaBombeiros(!showPoliciaBombeiros)}>
        POLÍCIA E CORPOS DE BOMBEIROS MILITARES <hr />
      </Title>
      {showPoliciaBombeiros && (
        <Faq data={policiaBombeiros} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowGuardaMunicipal(!showGuardaMunicipal)}>
        GUARDA MUNICIPAL <hr />
      </Title>
      {showGuardaMunicipal && (
        <Faq data={guardaMunicipal} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowDireitosDefiencia(!showDireitosDefiencia)}
      >
        DIREITOS DA PESSOA COM DEFICIÊNCIA <hr />
      </Title>
      {showDireitosDefiencia && (
        <Faq data={direitosDefiencia} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowDireitoSaude(!showDireitoSaude)}>
        DIREITO À SAÚDE <hr />
      </Title>
      {showDireitoSaude && (
        <Faq data={direitoSaude} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowDireitoTransporte(!showDireitoTransporte)}
      >
        DIREITO AO TRANSPORTE <hr />
      </Title>
      {showDireitoTransporte && (
        <Faq data={direitoTransporte} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowDireitoPolitico(!showDireitoPolitico)}>
        DIREITOS POLÍTICOS <hr />
      </Title>
      {showDireitoPolitico && (
        <Faq data={direitoPolitico} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowPartidosPoliticos(!showPartidosPoliticos)}
      >
        PARTIDOS POLÍTICOS <hr />
      </Title>
      {showPartidosPoliticos && (
        <Faq data={partidosPoliticos} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowDireitoAdquirido(!showDireitoAdquirido)}>
        DIREITO ADQUIRIDO <hr />
      </Title>
      {showDireitoAdquirido && (
        <Faq data={direitoAdquirido} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowNacionalidade(!showNacionalidade)}>
        NACIONALIDADE <hr />
      </Title>
      {showNacionalidade && (
        <Faq data={nacionalidade} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowSimbolos(!showSimbolos)}>
        SÍMBOLOS <hr />
      </Title>
      {showSimbolos && <Faq data={simbolos} styles={styles} config={config} />}

      <Title hr onClick={() => setShowProcessoJudicial(!showProcessoJudicial)}>
        Processo Judicial e Princípios Constitucionais do Processo (Devido
        Processo Legal, Inafastabilidade do Poder Judiciário, Coisa Julgada,
        Ampla Defesa e Contraditório etc.)
        <hr />
      </Title>
      {showProcessoJudicial && (
        <Faq data={processoJudicial} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() =>
          setShowDireitoPenalConstitucional(!showDireitoPenalConstitucional)
        }
      >
        DIREITO PENAL CONSTITUCIONAL <hr />
      </Title>
      {showDireitoPenalConstitucional && (
        <Faq
          data={direitoPenalConstitucional}
          styles={styles}
          config={config}
        />
      )}

      <Title hr onClick={() => setShowPoderExecutivo(!showPoderExecutivo)}>
        PODER EXECUTIVO <hr />
      </Title>
      {showPoderExecutivo && (
        <Faq data={poderExecutivo} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowAtualPresidente(!showAtualPresidente)}>
        Qual o nome do atual Presidente eleito da República Federativa do
        Brasil? E quais os nomes dos anteriores, desde que a Constituição de
        1988 foi promulgada?
        <hr />
      </Title>
      {showAtualPresidente && (
        <Faq data={atualPresidente} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowPoderLegislativo(!showPoderLegislativo)}>
        PODER LEGISLATIVO <hr />
      </Title>
      {showPoderLegislativo && (
        <Faq data={poderLegislativo} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() =>
          setShowComissoesParlamentares(!showComissoesParlamentares)
        }
      >
        COMISSÕES PARLAMENTARES DE INQUÉRITO (CPI's) <hr />
      </Title>
      {showComissoesParlamentares && (
        <Faq data={comissoesParlamentares} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowProcessoLegislativo1(!showProcessoLegislativo1)}
      >
        PROCESSO LEGISLATIVO - Parte 1 (O que são e como são feitas as Leis?){" "}
        <hr />
      </Title>
      {showProcessoLegislativo1 && (
        <Faq data={processoLegislativo1} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowProcessoLegislativo2(!showProcessoLegislativo2)}
      >
        PROCESSO LEGISLATIVO - Parte 2 (Etapas e outras informações) <hr />
      </Title>
      {showProcessoLegislativo2 && (
        <Faq data={processoLegislativo2} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowSancaoVeto(!showSancaoVeto)}>
        SANÇÃO E VETO <hr />
      </Title>
      {showSancaoVeto && (
        <Faq data={sancaoVeto} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowPoderJudiciario(!showPoderJudiciario)}>
        PODER JUDICIÁRIO <hr />
      </Title>
      {showPoderJudiciario && (
        <Faq data={poderJudiciario} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowSupremoTribunal(!showSupremoTribunal)}>
        SUPREMO TRIBUNAL FEDERAL (STF) <hr />
      </Title>
      {showSupremoTribunal && (
        <Faq data={supremoTribunal} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowAtuaisMinistros(!showAtuaisMinistros)}>
        Quem são os atuais 11 (onze) Ministros do Supremo Tribunal Federal
        (STF)? <hr />
      </Title>
      {showAtuaisMinistros && (
        <Faq data={atuaisMinistros} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowEstadoDefesa(!showEstadoDefesa)}>
        Estado de Defesa e Estado de Sítio (Estados de Exceção) <hr />
      </Title>
      {showEstadoDefesa && (
        <Faq data={estadoDefesa} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowIntervencaoFederal(!showIntervencaoFederal)}
      >
        INTERVENÇÃO FEDERAL <hr />
      </Title>
      {showIntervencaoFederal && (
        <Faq data={intervencaoFederal} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowForcasArmadas(!showForcasArmadas)}>
        FORÇAS ARMADAS - EXÉRCITO, MARINHA E AERONÁUTICA <hr />
      </Title>
      {showForcasArmadas && (
        <Faq data={forcasArmadas} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowMinisterioPublico(!showMinisterioPublico)}
      >
        MINISTÈRIO PÚBLICO <hr />
      </Title>
      {showMinisterioPublico && (
        <Faq data={ministerioPublico} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowTribunalContas(!showTribunalContas)}>
        TRIBUNAL DE CONTAS <hr />
      </Title>
      {showTribunalContas && (
        <Faq data={tribunalContas} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowAdmPublica(!showAdmPublica)}>
        ADMINISTRAÇÃO PÚBLICA <hr />
      </Title>
      {showAdmPublica && (
        <Faq data={admPublica} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowAdmPublicaIndireta(!showAdmPublicaIndireta)}
      >
        ADMINISTRAÇÃO PÚBLICA INDIRETA - EXEMPLOS <hr />
      </Title>
      {showAdmPublicaIndireta && (
        <Faq data={admPublicaIndireta} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowOrdemEconomica(!showOrdemEconomica)}>
        ORDEM ECONÔMICA <hr />
      </Title>
      {showOrdemEconomica && (
        <Faq data={ordemEconomica} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowOrdemUrbana(!showOrdemUrbana)}>
        ORDEM URBANA, POLÍTICA URBANA, PLANO DIRETOR E CIDADE <hr />
      </Title>
      {showOrdemUrbana && (
        <Faq data={ordemUrbana} styles={styles} config={config} />
      )}

      <Title hr onClick={() => setShowOrdemAmbiental(!showOrdemAmbiental)}>
        ORDEM AMBIENTAL <hr />
      </Title>
      {showOrdemAmbiental && (
        <Faq data={ordemAmbiental} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() =>
          setShowInstrumentoConstitucionais(!showInstrumentoConstitucionais)
        }
      >
        Instrumentos e Ações Constitucionais - Mandado de Segurança; Habeas
        Corpus etc <hr />
      </Title>
      {showInstrumentoConstitucionais && (
        <Faq
          data={instrumentoConstitucionais}
          styles={styles}
          config={config}
        />
      )}

      <Title
        hr
        onClick={() =>
          setShowTributacaoConstituicao(!showTributacaoConstituicao)
        }
      >
        TRIBUTAÇÃO E CONSTITUIÇÃO <hr />
      </Title>
      {showTributacaoConstituicao && (
        <Faq data={tributacaoConstituicao} styles={styles} config={config} />
      )}

      <Title
        hr
        onClick={() => setShowOrcamentoConstituicao(!showOrcamentoConstituicao)}
      >
        ORÇAMENTO E CONSTITUIÇÃO <hr />
      </Title>
      {showOrcamentoConstituicao && (
        <Faq data={orcamentoConstituicao} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowDireitoCultura(!showDireitoCultura)}>
        DIREITO À CULTURA <hr />
      </Title>
      {showDireitoCultura && (
        <Faq data={direitoCultura} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowDireitoDesporto(!showDireitoDesporto)}>
        DIREITO AO DESPORTO <hr />
      </Title>
      {showDireitoDesporto && (
        <Faq data={direitoDesporto} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowFamilia(!showFamilia)}>
        FAMÍLIA <hr />
      </Title>
      {showFamilia && <Faq data={familia} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCensura(!showCensura)}>
        Censura, Sigilo das Fontes e Direito de Defesa <hr />
      </Title>
      {showCensura && <Faq data={censura} styles={styles} config={config} />}

      <Title hr onClick={() => setShowRacismo(!showRacismo)}>
        Racismo, Discriminação e Preconceito
        <hr />
      </Title>
      {showRacismo && <Faq data={racismo} styles={styles} config={config} />}

      <Title hr onClick={() => setShowPrevidencia(!showPrevidencia)}>
        PREVIDÊNCIA OU PREVIDÊNCIA SOCIAL <hr />
      </Title>
      {showPrevidencia && (
        <Faq data={previdencia} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowLiminar(!showLiminar)}>
        LIMINAR <hr />
      </Title>
      {showLiminar && <Faq data={liminar} styles={styles} config={config} />}
      <Title hr onClick={() => setShowMandatoMandado(!showMandatoMandado)}>
        MANDATO E MANDADO <hr />
      </Title>
      {showMandatoMandado && (
        <Faq data={mandatoMandado} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowReformas(!showReformas)}>
        REFORMAS <hr />
      </Title>
      {showReformas && <Faq data={reformas} styles={styles} config={config} />}
      <Title hr onClick={() => setShowSetencaAcordao(!showSetencaAcordao)}>
        SETENÇA E ACÓRDÃO
        <hr />
      </Title>
      {showSetencaAcordao && (
        <Faq data={setencaAcordao} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowUsucapiao(!showUsucapiao)}>
        USUCAPIÃO <hr />
      </Title>
      {showUsucapiao && (
        <Faq data={usucapiao} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowTransitoJulgado(!showTransitoJulgado)}>
        TRÃNSITO EM JULGADO <hr />
      </Title>
      {showTransitoJulgado && (
        <Faq data={transitoJulgado} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCapitulo4(!showCapitulo4)}>
        CAPÍTULO 4 - INTRUDUÇÃO <hr />
      </Title>
      {showCapitulo4 && (
        <Faq data={capitulo4} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario1(!showCenario1)}>
        CENÁRIO 1 - Decisões Monocráticas em Medidas Cautelares em ADIN, ADPF,
        Leis 9.868/99 e 9.882/99, e Projeto de Lei 7.104-B de 2017 <hr />
      </Title>
      {showCenario1 && <Faq data={cenario1} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario2(!showCenario2)}>
        CENÁRIO 2 - Infraconstitucionalização <hr />
      </Title>
      {showCenario2 && <Faq data={cenario2} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario3(!showCenario3)}>
        CENÁRIO 3 - Constituição de 1988 e Fronteira com a Venezuela: reflexões
        e considerações jurídicas, a partir de impasses judiciais e
        institucionais <hr />
      </Title>
      {showCenario3 && <Faq data={cenario3} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario4(!showCenario4)}>
        CENÁRIO 4 - Poderes, funções e questões institucionais ligadas à figura
        do(a) PRESIDENTE do Supremo Tribunal Federal (STF) <hr />
      </Title>
      {showCenario4 && <Faq data={cenario4} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario5(!showCenario5)}>
        CENÁRIO 5 - Poder Judiciário e Minimalismo Judicial: a contribuição de
        Cass Sunstein e outros desdobramentos teóricos <hr />
      </Title>
      {showCenario5 && <Faq data={cenario5} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario6(!showCenario6)}>
        CENÁRIO 6 - ANS e Poder Judiciário: aplicação de normas técnicas em
        casos concretos <hr />
      </Title>
      {showCenario6 && <Faq data={cenario6} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario7(!showCenario7)}>
        CENÁRIO 7 - Emenda Constitucional (EC) nº 96, de 06 de junho de 2017 e o
        Direito à Vida <hr />
      </Title>
      {showCenario7 && <Faq data={cenario7} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario8(!showCenario8)}>
        CENÁRIO 8 - Estados Constitucionais de Exceção: 02 (duas) intervenções
        federais em menos de 01 (um) ano <hr />
      </Title>
      {showCenario8 && <Faq data={cenario8} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario9(!showCenario9)}>
        CENÁRIO 9 - Constituição de 1988 e complementação pelo Estatuto da
        Cidade: eficácia ou ineficácia anunciada <hr />
      </Title>
      {showCenario9 && <Faq data={cenario9} styles={styles} config={config} />}
      <Title hr onClick={() => setShowCenario10(!showCenario10)}>
        CENÁRIO 10 - Devido Processo Legal (Parte 1): introdução e primeiros
        questionamentos no mundo tecnológico contemporâneo
        <hr />
      </Title>
      {showCenario10 && (
        <Faq data={cenario10} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario11(!showCenario11)}>
        CENÁRIO 11 - Saúde Privada (Parte 1), seus elementos clássicos, centrais
        e uma primeira problemática fático-legislativa
        <hr />
      </Title>
      {showCenario11 && (
        <Faq data={cenario11} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario12(!showCenario12)}>
        CENÁRIO 12 - Saúde Privada (Parte 2), aplicação de normas técnicas em
        casos concretos
        <hr />
      </Title>
      {showCenario12 && (
        <Faq data={cenario12} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario13(!showCenario13)}>
        CENÁRIO 13 - Decretos e Poder Regulamentar no Brasil: delimitações e
        conceitos clássicos, sob a égide de sua utilização contemporânea
        <hr />
      </Title>
      {showCenario13 && (
        <Faq data={cenario13} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario14(!showCenario14)}>
        CENÁRIO 14 - Interview with Professor Sanford Levinson. Theme:
        Governments and Life of the Constitutions
        <hr />
      </Title>
      {showCenario14 && (
        <Faq data={cenario14} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario15(!showCenario15)}>
        CENÁRIO 15 – Limites do poder regulamentar da Agência Nacional de Saúde
        Suplementar (ANS) e a ADPF nº 532
        <hr />
      </Title>
      {showCenario15 && (
        <Faq data={cenario15} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario16(!showCenario16)}>
        CENÁRIO 16 - Iniciativa Popular de Emenda à Constituição
        <hr />
      </Title>
      {showCenario16 && (
        <Faq data={cenario16} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario17(!showCenario17)}>
        CENÁRIO 17 - Interview with Professor Mark Tushnet. Theme: The
        Democratic-Constitutional Importance of a Supreme Court or
        Constitutional Court
        <hr />
      </Title>
      {showCenario17 && (
        <Faq data={cenario17} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario18(!showCenario18)}>
        CENÁRIO 18 - Coronavírus, Covid-19, algumas questões jurídicas e
        envolvimentos constitucionais e institucionais (Parte 1)
        <hr />
      </Title>
      {showCenario18 && (
        <Faq data={cenario18} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario19(!showCenario19)}>
        CENÁRIO 19 - “Constitucionalismo do Bem Comum” e uma superação do
        “Originalismo” sob a ótica de Adrian Vermeule, a partir do seu texto
        intitulado Beyond Originalism (2020)
        <hr />
      </Title>
      {showCenario19 && (
        <Faq data={cenario19} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario20(!showCenario20)}>
        CENÁRIO 20 – Coronavírus, Covid-19, novos, multidisciplinares e
        transversais conhecimentos: entrevista com o médico, Dr. Marcio
        Fernandes Nehab (Parte 2)
        <hr />
      </Title>
      {showCenario20 && (
        <Faq data={cenario20} styles={styles} config={config} />
      )}
      <Title hr onClick={() => setShowCenario21(!showCenario21)}>
        CENÁRIO 21 - Coronavírus, COVID-19, algumas questões jurídicas e
        envolvimentos constitucionais e institucionais (Parte 3). Específicas
        considerações sobre as Comissões Parlamentares de Inquérito (CPI’s) e o
        caso da instauração da CPI da Covid-19
      </Title>
      {showCenario21 && (
        <Faq data={cenario21} styles={styles} config={config} />
      )}

      <div
        style={{
          border: "1px solid #000",
          marginBottom: "20px",
        }}
      ></div>
    </>
  );
};

export default Datas;
