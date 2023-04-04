<template>
  <div class="corpo">

    <div class="setaVoltar">
      <img src="@/assets/deadpool/iconeVoltar.png">
    </div>
    <div class="titulo">
      Deadpool
    </div>
    <div class="infoFilme">
      <img src="@/assets/deadpool/imbd.png"> 8,0
      <img src="@/assets/deadpool/relogio.png"> 1h 48min
      <img src="@/assets/deadpool/faixaEtaria.png">
      2016
      <img src="@/assets/deadpool/hd.png">
    </div>
    <div class="sinopse">
      Depois de um experimento com ele, um mercenário de truques <br>
      se torna imortal mas feio, e pretende rastrear o homem que <br>
      arruinou sua aparência.
    </div>
    <div class="grupoAtores">
      Diretor:
      <div class="atores">
        Tim Miller
      </div>
    </div>
    <div class="grupoAtores">
      Atores principais:
      <div class="atores">
        Ryan Reynolds,
      </div>
      <div class="atores">
        Morena Baccarin,
      </div>
      <div class="atores">
        T.J. Miller
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
  name: "deadpool-1",
  components: {

    botoes,
    rodape
  }
}
</script>
<style scoped>

.corpo {
  border-top: 1px solid #000000;
  background-image: url(@/assets/deadpool/deadpoolWallpaper.jpg);
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
  