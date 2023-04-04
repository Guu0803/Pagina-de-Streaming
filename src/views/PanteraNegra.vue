<template>


    <div class="corpo">
        <div class="setaVoltar">
            <img src="@/assets/pantera/iconeVoltar.png">
        </div>
        <div class="titulo">
            Pantera Negra
        </div>
        <div class="infoFilme">
            <img src="@/assets/pantera/icons8-imdb-25.png"> 7,3
            <img src="@/assets/pantera/icons8-relógio-25.png"> 2h 14min
            <img src="@/assets/pantera/icons8-14-25.png">
            2018
            <img src="@/assets/pantera/icons8-hd-25.png">
        </div>
        <div class="sinopse">
            T'Challa, herdeiro do reino oculto, mas avançado de Wakanda, <br>
            deve dar um passo adiante para conduzir seu povo a um novo futuro <br>
            e deve enfrentar um adversário do passado de seu país.
        </div>
        <div class="grupoAtores">
            Diretor:
            <div class="atores">
                Ryan Coogler
            </div>
        </div>
        <div class="grupoAtores">
            Atores principais:
            <div class="atores">
                Chadwick Boseman,
            </div>
            <div class="atores">
                Michael B. Jordan,
            </div>
            <div class="atores">
                Lupita Nyong'o
            </div>
        </div>
        <botoes/>
    </div>
    <rodape/>

</template>
<script>

import botoes from '@/components/Botoes.vue'
import rodape from '@/components/Rodape.vue'
export default {
    name: "Pantera-Negra",
    components: {
      
        botoes,
        rodape
    }
}
</script>
<style scoped>

.corpo {
    background-image: url(@/assets/pantera/panteraWallpaper.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    border-top: 1px solid #000000;
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
    color: #00000098;
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
    color: #00000098;
}

.sinopse {
    color: #00000090;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0 0 2vh 7vw;
}

.grupoAtores {
    display: flex;
    gap: 1vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 1vh 0 0 7vw;
    color: #00000090;
}

.atores:hover {
    cursor: pointer;
    transition: 150ms;
    color: hsl(46, 89%, 51%)
}

</style>
  