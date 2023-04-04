<template>

  <div class="corpo">
    <div class="setaVoltar">
      <img src="@/assets/eternos/iconeVoltar.png">
    </div>
    <div class="titulo">
      Eternos
    </div>
    <div class="infoFilme">
      <img src="@/assets/eternos/imbd.png"> 6,3
      <img src="@/assets/eternos/relogio.png"> 2h 36min
      <img src="@/assets/eternos/faixaEtaria.png">
      2021
      <img src="@/assets/eternos/hd.png">
    </div>
    <div class="sinopse">
      A saga dos Eternos, uma raça de seres imortais <br>
      que viveram na Terra e transformaram sua historia e civilização.
    </div>
    <div class="grupoAtores">
      Diretor:
      <div class="atores">
        Chloe Zhao
      </div>
    </div>
    <div class="grupoAtores">
      Atores principais:
      <div class="atores">
        Gemma Chan,
      </div>
      <div class="atores">
        Richard Madden,
      </div>
      <div class="atores">
        Angelina Jolie
      </div>
    </div>
    <botoes />
  </div>
  <rodape />
</template>

<script>

import botoes from '@/components/Botoes.vue'
import rodape from '@/components/Rodape.vue'
export default {
  name: "Os-eternos",
  components: {
    botoes,
    rodape
  }
}
</script>

<style scoped>
.corpo {
  border-top: 1px solid #000000;
  background-image: url(@/assets/eternos/eternosWallpaper.jpg);
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.setaVoltar {
  width: fit-content;
  margin: 1vw;
  border-radius: 49%;
}

.setaVoltar:hover {
  background-color: #00000070;
  cursor: pointer;
}

.titulo {
  color: #ffffff99;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 7vh;
  margin: 20vh 0 5vh 8vw;
}

.infoFilme {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  gap: 1vw;
  align-items: center;
  margin: 0 0 2vh 7vw;
  color: #ffffff99;
}

.sinopse {
  color: #ffffff99;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 0 0 2vh 7vw;
}

.grupoAtores {
  display: flex;
  gap: 1vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 1vh 0 0 7vw;
  color: #ffffff99;
}

.atores:hover {
  cursor: pointer;
  transition: 150ms;
  color: hsl(46, 89%, 51%)
}
</style>