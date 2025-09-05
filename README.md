# Vitrine de Extensão - UENF

---

## 🎯 Objetivo
Criar uma plataforma interativa onde a comunidade possa facilmente encontrar e participar de projetos de extensão da **UENF**.

---

## 👥 Equipe
- **Davi Ribeiro**  
- **Anna Julya Padilha**  
- **Código da dupla:** at6r0
---

## 📝 Contexto
O projeto foi desenvolvido durante o **Hackathon da SCTI 2025**, no tema **Vitrine de Extensão**.  

Após análise do site atual da Pró-Reitoria de Extensão ([link oficial](https://uenf.br/extensao/)) e uma entrevista com a secretária responsável, identificamos dificuldades no processo seletivo, desde a divulgação até as inscrições e resultados.  

**Principais pontos de melhoria levantados:**
- Divulgação mais atrativa dos projetos.  
- Melhor organização e divisão das abas importantes para facilitar a navegação.  
- Inclusão de uma seção de dúvidas frequentes (FAQ) sobre os editais.  
- Fluxo simplificado de inscrição e direcionamento claro para o candidato.  

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

---
📂 Estrutura do Projeto

   vitrine-de-extensao/
   ├── backend/
   │   ├── db.js
   │   ├── seed.js
   │   └── server.js
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   ├── img/
   ├── index.html
   └── README.md

---
## ⚙ Instruções de Execução

🔹 Front

1. Clone este repositório:  
   git clone https://github.com/anninha05/vitrine-de-extensao.git
2. Acesse a pasta do projeto:
   cd vitrine-de-extensao-main
3. Abra o arquivo index.html no seu navegador.

🔹 Backend

1. Acesse a pasta do backend:
   cd backend

2. Instale as dependências:
   npm install

3. Execute o seed para criar o banco e inserir os projetos reais:
   ode seed.js

4. Inicie o servidor:
   node server.js

5. Acesse a rota /projetos para visualizar os dados em JSON:
   http://localhost:3000/projetos
   http://localhost:3000/projetos/1
   http://localhost:3000/projetos/2
   
