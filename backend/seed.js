// seed.js
const db = require('./db');

db.serialize(() => {
  db.run("DELETE FROM projetos");

  // insercao dos dados no banco
  db.run(`INSERT INTO projetos 
    (id, titulo, tipo_bolsa, grau, carga_horas, vagas, tipo_perfil, publico_alvo, coordenador, centro, laboratorio, valor_unitario, valor_total, resumo, eixo_tematico)
    VALUES 
    (
      1,
      "Arte & Fibras Naturais — Sustentabilidade, Empreendedorismo e Autogestão, este é o caminho — Ano II",
      "Bolsa Extensão Discente UENF",
      NULL,           -- Grau não informado
      NULL,           -- Carga horária não informada
      1,
      "01",
      "Estar matriculado na UENF a partir do 2º período, CR ≥ 6,0, preferencialmente cursando Administração Pública, Eng. de Produção ou Eng. Metalúrgica.",
      "Paula Mousinho Martins",
      "Centro de Ciências e Tecnologias (CCT)",
      "LAMAV",
      700,
      700,
      "O grupo de participantes desse programa é constituído por artesãos, alunos e profissionais de diversos segmentos, com foco em moda, decoração, construção civil e outras peças artesanais, a partir do bagaço de cana-de-açúcar e também outras fibras naturais, além de alguns materiais recicláveis.",
      NULL            -- Eixo temático não informado
    ),
    (
      2,
      "“Tempo” de Aprender em “Clima” de Ensinar",
      "Bolsa UA Superior (20h)",
      "Superior",     -- Grau informado
      20,             -- Carga horária informada
      1,
      "05",
      "Nível superior completo em Engenharia ou outra área tecnológica, com experiência em linguagens computacionais e uso de interfaces de sistema web. Desejável inglês intermediário.",
      "Maria Gertrudes Alvarez Justi da Silva",
      "Centro de Ciência e Tecnologia (CCT)",
      "LAMET",
      1320,
      1320,
      "Conhecer os fenômenos extremos, explicar as variações e as mudanças climáticas e entender como as previsões do tempo e do clima são feitas são os principais objetivos deste projeto de popularização da ciência. Através da instalação de estações meteorológicas em escolas, o projeto promove a vivência entre alunos e professores do ensino fundamental e médio das diferenças entre os conceitos de 'tempo' e 'clima', acompanhando as variações das condições da atmosfera no dia a dia (o “tempo”) e mostrando a persistência e as variações das características da atmosfera ao longo dos anos e décadas (o “clima”).",
      NULL            -- Eixo temático não informado
    )
  `);

  console.log("inseriu");
});

db.close();
