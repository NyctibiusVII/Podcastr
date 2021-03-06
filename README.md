<h1 align="center">
    <br>
    <img src="./.github/logo-podcastr.svg" width="200" heigh="150" alt="logo podcastr">
</h1>
<h4 align="center">
    Trilha ReactJS <img src="./.github/logo-react.svg" height="15" alt="logo react">
</h4>
<!-- <h4 align="center">Projeto web construído durante o Next Level Week #05-Discovery com a Rocketseat/DiegoFernandes.</h4> -->
<p align="center">
    <img alt="Plataforma" src="https://img.shields.io/static/v1?label=Plataforma&message=Mobile/PC&color=04d361&labelColor=8257e5">
    <a aria-label="Completado" href="https://nextlevelweek.com/episodios/react/5/edicao/5">
        <img alt="Podcastr" src="https://img.shields.io/badge/Podcastr-NLW 5.0-04d361?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==&labelColor=8257e5"></img>
    </a>
    <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/NyctibiusVII/Podcastr?color=04d361&labelColor=8257e5">
    <a href="https://github.com/NyctibiusVII/Podcastr/blob/main/LICENSE">
        <img alt="Licença" src="https://img.shields.io/static/v1?label=License&message=MIT&color=04d361&labelColor=8257e5">
    </a>
    <a href="https://picpay.me/Matheus_nyctibius_vii">
        <img alt="Donate" src="https://img.shields.io/static/v1?label=$&message=Donate&color=8257e5&labelColor=04d361">
    </a>
</p>
<p align="center">
    <a href="#podcastr-">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#tecnologias-">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#layout-">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#licença-%EF%B8%8F">Licença</a>
</p>
<!--
<p align="center">
    <a href="README.md">Inglês</a>
    ·
    <a href="README-pt.md">Português</a>
</p>
-->

# Podcastr <img src=".github/logo-podcastr.svg" width="30" alt="logo icon">
Projeto desenvolvido para gerenciar seus podcasts. Projeto realizado na Next Level Week #5 @Rocketseat.

###### O melhor para você ouvir, sempre. 🎧🎶

<br>

#### Funcionalidades <img src=".github/headphone.svg" width="15" alt="logo headphone">
* Escutar podcast.
* Visualizar sobre o que se trata o podcast.
* Gerenciar podcasts.
* ❌ Modal Cookies consent
* ❌ Site responsivo.

<details>
    <summary>Desafios</summary>

```
✔ - Documentar bem o projeto
✖ - Melhorar o estilo: Responsividade e Design
✖ - Banco de dados
✖ - Next PWA

Funcionalidades:
    - Trocar o tema da aplicação: Light e Dark
    ✖ - COOKIES:
        - Cookies consent
        - Guardar dados
        - Alterar dados
        - Deletar dados
    ✖ - SQL:
        - Guardar dados
        - Alterar dados
        - Deletar dados
    - Telas:
        ✔ - Home
        ✔ - Episodes
        - 404
```
</details>

<br>

#### Erros de layout da NLW#5 🚧 ⇄ Consertos 🛠⚙
* *(error 1)* - Img diminuída ou nem aparecendo no 'card' **.latestEpisodes ul li**.
* *(error 2)* - Scroll lateral, componentes transbordando.

<details>
    <summary>Fixed <i>error 1</i>:</summary>

```scss
    /* Adicione 'width: 1%;' dentro de '.episodeDetails {}' */
    .episodeDetails {
        width: 1%; /* NOVA LINHA */
        margin-left: 1rem;
        flex: 1;

        a {/*...*/}
        p {/*...*/}
        span {/*...*/}
    } /* - home.module.scss */
```
</details>

<details>
    <summary>Fixed <i>error 2</i>:</summary>

```scss
    /* Config. for Notebooks with small screen */
    @media (max-width: 1366px) {
        html {
            font-size: 80%;
        }
    } /* - global.scss */

    /**
     * Você pode editar o valor da 'max-width'
     * caso não sirva totalmente para o seu caso,
     * assim como criar outras media queries para
     * outros tamanhos de tela se preferir.
     */

    /* --------------------------------------- */

    /* Config. for Tablet & Mobile */
    @media (max-width: 1220px) {
        .latestEpisodes {
            ul {
                grid-template-columns: 1fr;
                grid-template-rows: repeat(2, 1fr);
            }
        }
    } /* - home.module.scss */
    /**
     * Esta configuração faz com que telas que
     * tenham uma largura menor que 1220px, as
     * ul's se adaptem e quebrem de linha,
     * ocupando assim uma coluna e duas linhas.
     */
```
</details>

## Tecnologias 🚀
Esse projeto foi desenvolvido com as seguintes tecnologias:
- [Html | 5](https://pt.wikipedia.org/wiki/HTML)
- [Sass | ^1.32.11](https://sass-lang.com/)
- [Typescript | ^4.2.4](https://www.typescriptlang.org/)
- [ReactJS | ^17.0.2](https://pt-br.reactjs.org/)
- [NextJS | ^10.1.3](https://nextjs.org/)
- [NodeJS | ^14.16.1](https://nodejs.org/en/)

## Layout 🚧
### Desktop Screenshot
<div style="display: flex; flex-direction: 'column'; align-items: 'center';">
<!-- Responsive, 1440 x 900, 50% (Laptop L - 1440px)-->
    <img width="400px" src="./.github/desktop/home-without-podcast.png">
    <img width="400px" src="./.github/desktop/home-with-podcast.png">
    <img width="400px" src="./.github/desktop/podcast-information.png">
</div>
<a href="./.github/README-IMGS.md">Ver mais</a>

### Mobile Screenshot
<div style="display: flex; flex-direction: 'row';">
<!-- Responsive, 425 x 900, 60% (Mobile L - 425px)-->
    Em breve...
    <!--<img width="180px" src="./.github/mobile/home-without-podcast.png">-->
    <!--<img width="180px" src="./.github/mobile/home-with-podcast.png">-->
    <!--<img width="180px" src="./.github/mobile/podcast-information.png">-->
</div>
<!--<a href="./.github/README-IMGS.md">Ver mais</a>-->
    <!-- IMGS
      ------------------------------
      home-without-podcast
      home-with-podcast
      ------------------------------
      podcast-information
      ------------------------------
    -->

## Rodando o projeto 🚴🏻‍♂️
#### "Só vou dar uma olhadinha...":
  <a href="https://podcastr-nyctibiusvii.vercel.app/">🎧 Site hospedado na Vercel 🎶</a>

#### Na sua maquina:
<details>
    <summary>Dependências</summary>

```json
    "dependencies": {
        "axios": "^0.21.1",
        "date-fns": "^2.21.1",
        "next": "10.1.3",
        "rc-slider": "^9.7.2",
        "react": "17.0.2",
        "react-dom": "17.0.2",
        "sass": "^1.32.11"
    },
    "devDependencies": {
        "@types/node": "^14.14.41",
        "@types/react": "^17.0.3",
        "@types/react-dom": "^17.0.3",
        "json-server": "^0.16.3",
        "typescript": "^4.2.4"
    }
    //Ex: $ npm install @types/_____ -D
```
</details>

```bash
# Clone o repositório
$ git clone https://github.com/NyctibiusVII/Podcastr.git

# Acesse a pasta do projeto no prompt de comando
$ cd podcastr

# Instale as dependências
$ npm install

# Execute o script "dev"
$ npm run dev

# O projeto inciará na porta: 3000 - acesse http://localhost:3000
```

## Contribuição 💭
Para construir essa aplicação tive a ajuda do professor **Diego Fernandes** da Rocketseat que disponibilizou video aulas do projeto **Podcastr** e tive uma ajuda desta grande comunidade que a Rocketseat construiu no *Discord*.
Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discord.gg/YxU7fJT)

### Hashtags \#
| Dias  | Hashtags               |
|-------|------------------------|
| Dia 1 | #MissãoEspacial        |
| Dia 2 | #EmBuscaDoPróximoNível |
| Dia 3 | #Astronautas           |
| Dia 4 | #UniversoInfinito      |
| Dia 5 | #MissãoCumprida        |

## Licença ⚖️
Este projeto está sob a licença do MIT. Veja o arquivo [LICENSE](https://github.com/NyctibiusVII/Podcastr/blob/main/LICENSE) para mais detalhes.

## Contato ✉️
| <img src="https://user-images.githubusercontent.com/52816125/90341686-05b68880-dfd8-11ea-969c-70c9ce9d0278.jpg" width=100><br><sub><a href="https://www.instagram.com/nyctibius_vii/?hl=pt-br">@MatheusVidigal🦊</a></sub> |
| :---: |

<p align="left">
    <a href="https://www.linkedin.com/in/matheus-vidigal-nyctibiusvii/">
        <img alt="Matheus Vidigal / Linkedin" src="https://img.shields.io/badge/-Matheus Vidigal-8257e5?style=flat&logo=Linkedin&logoColor=fff" />
    </a>
    <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSGLCKpKJfwPsKKqzXBplKkGtCLvCQcFWdWxCxQFfkHzzjVkgzrMFPBgKBmWFHvrjrCsMqSH">
        <img alt="Matheus Vidigal / Linkedin" src="https://img.shields.io/badge/-Matheus Vidigal-04d361?style=flat&logo=Gmail&logoColor=fff" />
    </a>
</p>