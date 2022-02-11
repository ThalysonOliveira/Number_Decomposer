<h1 align="center">Decompositor de Números</h1>

<p align="center">
  <a href="#tecnologia">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pre-requisitos">Pre-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotas">Rotas</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <img alt="Catalago de filmes" src="https://i.imgur.com/HZdsrqr.png" width="49%">
  <img alt="Descrição do filme" src="https://i.imgur.com/whmd60J.png" width="49%">
 
</p>

<a id="tecnologia"></a>
## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [ReactJS](https://www.postgresql.org/)
- [Docker](https://www.docker.com)
- [TypeScript](https://www.typescriptlang.org/)

<a id="pre-requisitos"></a>
## :fire: **Pré-requisitos**

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

<a id="como-usar"></a>
## :zap: Como usar

- Faça um clone desse repositório: `https://github.com/ThalysonOliveira/Number_Decomposer.git`

- Utilizando o docker e docker-compose:
  - Acesse a raiz do projeto e rode o seguinte comando: `docker-compose up` ou `docker-compose up -d` (para rodar em background)
  - Acesse a aplicação: `http://localhost:3000/`
  
- Utilizando sem o docker e docker-compose:
   - Acesse a raiz do projeto
   - `cd backend`
   - `npm i`
   - Altere o nome do arquivo `.env.example` para `.env` e coloque uma porta da sua escolha
   - `npm run dev`
   - Acesse a raiz do projeto novamente
   - `cd frontend`
   - `npm i`
   Altere o nome do arquivo `.env.example` para `.env` e coloque a mesma porta que colocou no arquivo anterior
   - `npm start`
- Acesse a aplicação: `http://localhost:suaporta/`

- Podemos estar acessando a aplicação também pela seguinte URL: https://numberdecomposer.vercel.app/
- Documentação da API: https://number-decomposer.herokuapp.com/number-decomposer/documentation/#/Fatora%C3%A7%C3%A3o/post_number_decomposer

<a id="funcionalidades"></a>
## 🛠️ Funcionalidades

Sistema desenvolvido para fazer a decomposição dos números, a interface foi criada utilizando reactjs com javascript, a API foi construida utlizando node, typescript, tdd, boas práticas tais como: clean code, clean architecture e solid.
- Números divisores.
- Números primos divisores.

<a id="rotas"></a>
### ↪︎ Rotas
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Decompositor%20de%20N%C3%BAmeros&uri=https%3A%2F%2Fraw.githubusercontent.com%2FThalysonOliveira%2FNumber_Decomposer%2Fmain%2Fnumber_decomposer.json)
