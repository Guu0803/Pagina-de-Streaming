<template>
  <div>
    <div class="cabecalho">
      <div>
        <RouterLink to="/" class="escrita-cabecalho">
          Início
        </RouterLink>
      </div>
      <div class="dropdown-conteiner">
        <router-link to="/categoria" class="escrita-cabecalho">
          Categorias
        </router-link>
        <div class="conteudo-dropdown">
          <router-link to="/categoria/series/" class="escrita-dropdown">
            Séries
          </router-link>
          <router-link to="/categoria/filmes/" class="escrita-dropdown">
            Filmes
          </router-link>
          <router-link to="/categoria/animes/" class="escrita-dropdown">
            Animes
          </router-link>
        </div>
      </div>
      <div class="escrita-cabecalho">
        Minha lista
      </div>
      <div class="conteiner-pesquisa">
        <input type="search" placeholder="Procurar">
        <span class="material-icons lupa">
          search
        </span>
      </div>

      <div class="dropdown-conteiner">
        <span class="material-icons icones-cabecalho">
          account_circle
        </span>
        <div class="conteudo-dropdown">
          <router-link to="/minha-conta" class="escrita-dropdown" >
            Conta
          </router-link>
          <router-link to="/meu-perfil" class="escrita-dropdown" >
            Perfil
          </router-link>
          <div class="escrita-dropdown">
            Ajuda
          </div>
          <div class="escrita-dropdown">
            Sair
          </div>
        </div>
      </div>
    </div>

    <router-view />
    
    <div class="rodape">
      <div class="conteiner-subtiluos">
        <div class="subtitulos-rodape">
          Contatos
        </div>
        <div class="escrita-rodape">
          <img src="@/assets/instagram.svg">
          Instagram
        </div>
        <div class="escrita-rodape">
          <img src="@/assets/facebook.svg">
          Facebook
        </div>
        <div class="escrita-rodape">
          <img src="@/assets/twitter.svg">
          Twitter
        </div>
        <div class="escrita-rodape">
          <img src="@/assets/github.png">
          https://github.com/Guu0803
        </div>
      </div>
      <div class="conteiner-subtiluos">
        <div class="subtitulos-rodape">
          Nome do site
        </div>
        <div class="teste-gratis">
          Experimente Grátis
        </div>
        <div class="escrita-rodape">
          Sobre
        </div>
        <div class="escrita-rodape">
          Ajuda
        </div>
        <div class="escrita-rodape">
          Termos de Uso / Política de Privacidade
        </div>
      </div>
      <div class="conteiner-subtiluos">
        <div class="subtitulos-rodape">
          Conta
        </div>
        <div class="escrita-rodape">
          Criar Conta
        </div>
        <div class="escrita-rodape">
          Login
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.cabecalho {
  width: 100%;
  background-color: #121212;
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  line-height: 5vh;
}

.dropdown-conteiner {
  position: relative;
  display: inline-block;
}

.escrita-cabecalho {
  text-decoration: none;
  color: #B2B2B2;
  padding: 1vh;
  font-size: 3vh;
  border-bottom: #121212 3px solid;
  transition: 100ms;
}

.conteudo-dropdown {
  display: none;
  position: absolute;
  background-color: #343434;
  min-width: 160px;
  z-index: 1;
  box-shadow: 1.5vh 1.5vh 5vh black;
  border-radius: 0 0 10px 10px;
}

.escrita-dropdown {
  color: #B2B2B2;
  padding: 1vh 2vw;
  display: block;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;
}

.escrita-dropdown:hover {
  background-color: #f64348;
  color: white;
  transition: 200ms;
}

.dropdown-conteiner:hover .conteudo-dropdown {
  display: block;
  transition: 300ms;
}

.escrita-cabecalho:hover {
  cursor: pointer;
  color: #f64348;
  border-color: #f64348;
  transition: 100ms;
}

.conteiner-pesquisa {
  display: flex;
}

.icones-cabecalho {
  font-size: 4vh;
  color: #B2B2B2;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.lupa {
  font-size: 4vh;
  color: #B2B2B2;
  cursor: pointer;
  margin-left: -2.5vw
}

.icones-cabecalho:hover {
  color: #f64348;
}

.rodape {
  margin-top: 5vw;
  padding: 2vw 0;
  width: 100%;
  background-image: linear-gradient(to bottom, #060606, #121212, #1f1f1f, #2c2c2c, #393939, #454545, #5f5f5f);
  height: 30vh;
  display: flex;
  justify-content: space-around;
}

.escrita-rodape {
  display: flex;
  align-items: center;
  font-size: 2vh;
  color: #B2B2B2;
  cursor: pointer;
  width: fit-content;
}

.conteiner-subtiluos {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.escrita-rodape:hover {
  color: #f64348;
}

.subtitulos-rodape {
  font-size: 3vh;
  color: white;
  cursor: pointer;
  width: fit-content;
}

.subtitulos-rodape:hover {
  color: #f64348;
}
.teste-gratis {
  cursor: pointer;
  color: white;
  font-size: 2.5vh;
}
.teste-gratis:hover {
  color: #f64348;
}
input {
  border-radius: 10px;
  border: none;
  background-color: #343434;
  color: white;
  padding: 1vh;
}
</style>
  

