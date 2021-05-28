# Desafio Técnico

Frontend que consome dados da api do <a href="https://www.themoviedb.org/">TheMoviedb</a>, com informações de referentes a filmes e séries.

## Demonstração da tela

Home
![Screenshot_2021-05-28 React App](https://user-images.githubusercontent.com/19713358/120040786-8a114f80-bfdd-11eb-99a7-c0dcac5aa2a0.jpg)

Favoritos
![Screenshot_2021-05-28 React App](https://user-images.githubusercontent.com/19713358/120040899-bb8a1b00-bfdd-11eb-90de-7b3b2a1e2bcc.png)

### Link para acesso <a href="https://movies-stat.vercel.app/">aqui</a>

## Sobre

O projeto é composto de duas telas, sendo uma de listagem dos filmes lançados recentemente, onde pode visualizar detalhes sobre os filmes ou sérios, como título, sinopse e data de lançamento. É possível fazer busca pelo título interessado e adicionar os filmes do seu gosto em um favoritos, que você pode ver a relevância dos títulos.
Foi utilizado <a href="https://pt-br.reactjs.org/">ReactJs</a> na versão 17 e o Framework de componentes <a href="https://rsuitejs.com/">React Suite (rsuite)</a> para ajudar na agilidade para construir os layouts. Também tive o auxílio do <a href="https://redux.js.org/">Redux</a> para gerenciar alguns estados.

## Frameworks e libs

- ReactJs - <a href="https://pt-br.reactjs.org/">https://pt-br.reactjs.org/</a> (Lib estrutural)
- React Suite - <a href="https://rsuitejs.com/">https://rsuitejs.com/</a> (Framework React Componentes)
- Redux - <a href="https://redux.js.org/">https://redux.js.org/</a> (Gerenciador de estado)
- React-toastify - <a href="https://fkhadra.github.io/react-toastify/introduction">https://fkhadra.github.io/react-toastify/introduction</a> (Lib Toast ou alertas)
- Axios - <a href="https://github.com/axios/axios">https://github.com/axios/axios</a> (Lib para fazer requisições HTTP client)
- Redux-Thunk - <a href="https://github.com/reduxjs/redux-thunk">https://github.com/reduxjs/redux-thunk</a> (Lib para gerenciar requisições com Redux)

## Rodando Projeto

### Primeiro instale (Caso não tenha instalado)

Git bash - <a href="https://gitforwindows.org/">https://gitforwindows.org/</a>

NodeJs - <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>

- Clonando Repositório

```
git clone https://github.com/pcbsytem/movies-stat.git
```

### Variáveis de ambiente

Crie uma conta na <a href="https://www.themoviedb.org/">TheMoviedb</a>. Vá até configurações do seu perfil e selecione API e copie Chave da API (v3 auth) e cole no .env e .env.prod.

![tmdb](https://user-images.githubusercontent.com/19713358/120040461-f8a1dd80-bfdc-11eb-9db4-f891a51f3140.png)

```
REACT_APP_API= url principal
REACT_APP_API_IMAGE= url api de imagens
REACT_APP_TOKEN= adicione chave da API (v3 auth)
```

### Rodando frontend

Instalar dependências e rodar

```
cd movies-stat
yarn
yarn start
```
