<template>
  <div>
    <div class="cabecalho">
      <div>
        <RouterLink to="/" class="escrita-cabecalho">
          Início
        </RouterLink>
      </div>
      <RouterLink to="/categoria" class="escrita-cabecalho">
        Categorias
      </RouterLink>
      <div class="escrita-cabecalho">
        Minha conta
      </div>
      <div class="icones-conteiner">
        <span class="material-icons icones-cabecalho">
        search
      </span>
      <span class="material-icons icones-cabecalho">
        account_circle
      </span>
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

</template>
  
<style scoped>
.cabecalho {
  width: 100%;
  background-color: #121212;
  display: flex;
  gap: 3vw;
  align-items: center;
  justify-content: center;
  line-height: 5vh;
}

.escrita-cabecalho {
  text-decoration: none;
  color: #B2B2B2;
  padding: 1vh;
  font-size: 3vh;
  border-bottom: #121212 3px solid;
  transition: 100ms;

}

.escrita-cabecalho:hover {
  cursor: pointer;
  color: #f64348;
  border-color: #f64348;
  transition: 100ms;
}
.icones-conteiner {
  display: flex;
  gap: 8vw;
}
.icones-cabecalho {
  font-size: 5vh;
  color: #B2B2B2;
  cursor: pointer;
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
</style>
  

