<template>


    <div class="corpo">
        <div class="setaVoltar">
            <img src="@/assets/shang-chi/iconeVoltar.png">
        </div>
        <div class="titulo">
            Shang-Chi <br>
            E a Lenda dos Dez Anéis
        </div>
        <div class="infoFilme">
            <img src="@/assets/shang-chi/imbd.png"> 7,4
            <img src="@/assets/shang-chi/relogio.png"> 2h 12min
            <img src="@/assets/shang-chi/faixaEtaria.png">
            2021
            <img src="@/assets/shang-chi/hd.png">
        </div>
        <div class="sinopse">
            Shang-Chi é obrigado a confrontar um passado que julgava ter deixado <br>
            para trás quando é atraído à teia da misteriosa organização conhecida <br>
            como os Dez Anéis.
        </div>
        <div class="grupoAtores">
            Diretor:
            <div class="atores">
                Destin Daniel Cretton
            </div>
        </div>
        <div class="grupoAtores">
            Atores principais:
            <div class="atores">
                Simu Liu,
            </div>
            <div class="atores">
                Awkwafina,
            </div>
            <div class="atores">
                Tony Chiu-Wai Leung
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
    name: "Shang-chi",
    components: {
    
        botoes,
        rodape
    }
}
</script>
<style scoped>

.corpo {
    background-image: url(@/assets/shang-chi/shangWallpaper.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    border-top: 1px solid #000000;
}

.setaVoltar {
    width: fit-content;
    margin: 1vw;
    border-radius: 1vh;
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