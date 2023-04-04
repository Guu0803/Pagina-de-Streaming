<template>

    <div class="corpo">
        <div class="setaVoltar">
            <img src="@/assets/Xmen/iconeVoltar.png">
        </div>
        <div class="titulo">
            X-Men: Fênix Negra

        </div>
        <div class="infoFilme">
            <img src="@/assets/Xmen/imbd.png"> 5,7
            <img src="@/assets/Xmen/relogio.png"> 1h 53min
            <img src="@/assets/Xmen/faixaEtaria.png">
            2019
            <img src="@/assets/Xmen/hd.png">
        </div>
        <div class="sinopse">
            Jean Grey começa a desenvolver poderes incríveis que a <br>
            transformam em uma Fênix Negra. Agora os X-Men terão que <br>
            decidir se a vida de um membro da equipe vale mais do que <br>
            todas as pessoas no mundo.

        </div>
        <div class="grupoAtores">
            Diretor:
            <div class="atores">
                Simon Kinberg
            </div>
        </div>
        <div class="grupoAtores">
            Atores principais:
            <div class="atores">
                James McAvoy,
            </div>
            <div class="atores">
                Michael Fassbender,
            </div>
            <div class="atores">
                Jennifer Lawrence
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
    name: "X-men-Fenix-Negr",
    components: {
      
        botoes,
        rodape
    }
}
</script>
<style scoped>

.corpo {
    border-top: 1px solid #000000;
    background-image: url(@/assets/Xmen/xmenWallpaper.jpg);
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