<template>
  <div>
    <div class="cabecalho">
      <div>
        <RouterLink to="/home" class="escrita-cabecalho">
          Início
        </RouterLink>
      </div>
      <div class="dropdown-conteiner">
        <router-link to="/categoria" class="escrita-cabecalho">
          Categorias
        </router-link>
        <div class="conteudo-dropdown">
          <router-link to="/series" class="escrita-dropdown">
            Séries
          </router-link>
          <router-link to="/filmes" class="escrita-dropdown">
            Filmes
          </router-link>
          <router-link to="/animes" class="escrita-dropdown">
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
          <router-link to="/minha-conta" class="escrita-dropdown">
            Conta
          </router-link>
          <router-link to="/meu-perfil" class="escrita-dropdown">
            Perfil
          </router-link>
          <router-link to="/ajuda" class="escrita-dropdown">
            Ajuda
          </router-link>
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
        <div class="escrita-rodape">
          Sobre
        </div>
        <RouterLink to="/ajuda" class="escrita-rodape">
          Ajuda
        </RouterLink>
        <router-link to="/termos-de-uso" class="escrita-rodape">
          Termos de Uso
        </router-link>
        <router-link to="/politica-de-privacidade" class="escrita-rodape">
          Política de Privacidade
        </router-link>
        <router-link to="/aviso-legal" class="escrita-rodape">
          Aviso Legal
        </router-link>
      </div>
      <div class="conteiner-subtiluos">
        <div class="subtitulos-rodape">
          Conta
        </div>
        <RouterLink to="/login" class="escrita-rodape">
          Login
        </RouterLink>
        <RouterLink to="/cadastro" class="escrita-rodape">
          Criar Conta
        </RouterLink>
      </div>
    </div>
  </div>
</template>
  
<style>
body {
  margin: 0;
  background-color: #1f1f1f;
  font-family: 'Karla', sans-serif;
}

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
  color: #e8e8e8;
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
  color: #e8e8e8;
  padding: 1vh 2vw;
  display: block;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;
}

.escrita-dropdown:hover {
  background-color: #f64348;
  color: #e8e8e8;
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
  color: #e8e8e8;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.lupa {
  font-size: 4vh;
  color: #e8e8e8;
  cursor: pointer;
  margin-left: -2.5vw
}

.icones-cabecalho:hover {
  color: #f64348;
}

.rodape {
  padding: 2vw 0;
  width: 100%;
  background-color: #181818;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  margin-top: 5vw;
}

.escrita-rodape {
  display: flex;
  align-items: center;
  font-size: 2vh;
  color: #e8e8e8;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
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
  color: #e8e8e8;
  cursor: pointer;
  width: fit-content;
}

.subtitulos-rodape:hover {
  color: #f64348;
}

input {
  border-radius: 10px;
  border: none;
  background-color: #343434;
  color: #e8e8e8;
  padding: 1vh;
  transition: 200ms ease-in-out;

}

input:hover {
  background-color: #898989;
  transition: 200ms ease-in-out;
}
</style>
  

