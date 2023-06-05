<template>
  <div>
    <div class="cabecalho">
      <div>
        <RouterLink to="/" class="escrita-cabecalho">
          Início
        </RouterLink>
      </div>
      <div class="dropdown-conteiner">
        <RouterLink to="/categoria" class="escrita-cabecalho">
          Categorias
        </RouterLink>
        <div class="conteudo-dropdown">
          <div class="escrita-dropdown">
            Séries
          </div>
          <div class="escrita-dropdown">
            Filmes
          </div>
          <div class="escrita-dropdown">
            Animes
          </div>
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
          <div class="escrita-dropdown">
            Conta
          </div>
          <div class="escrita-dropdown">
            Configurações
          </div>
          <div class="escrita-dropdown">
            Editar perfil
          </div>
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
      <div class="infoRodape">
        <div class="termos">
          Termos e aviso de privacidade
        </div>
        <div class="termos">
          Enviar feedback
        </div>
        <div class="termos">
          Ajuda
        </div>
        <div>
          <img src="@/components/iconesRodape/copyright.png"> 1923-2023, Disney.com, Inc. ou suas afiliadas.
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
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  width: 99vw;
}

.infoRodape {
  display: flex;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  gap: 1vw;
  align-items: center;
}

.termos:hover {
  cursor: pointer;
  color: #f64348
}

input {
  border-radius: 10px;
  border: none;
  background-color: #343434;
  color: white;
  padding: 1vh;
}
</style>
  

