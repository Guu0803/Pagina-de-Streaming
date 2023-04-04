<template>


    <div class="corpo">
        <div class="setaVoltar">
            <img src="@/assets/kingsman/iconeVoltar.png">
        </div>
        <div class="titulo">
            Kingsman: <br>
            O Círculo Dourado
        </div>
        <div class="infoFilme">
            <img src="@/assets/kingsman/imbd.png"> 6,7
            <img src="@/assets/kingsman/relogio.png"> 2h 21min
            <img src="@/assets/kingsman/faixaEtaria.png">
            2017
            <img src="@/assets/kingsman/hd.png">
        </div>
        <div class="sinopse">
            Depois que a sede do Kingsman é destruída e o mundo é feito refém,<br>
            uma organização de espionagem aliada nos Estados Unidos é descoberta. <br>
            Essas duas organizações secretas de elite devem se unir <br>
            para derrotar um inimigo comum.

        </div>
        <div class="grupoAtores">
            Diretor:
            <div class="atores">
                Matthew Vaughn
            </div>
        </div>
        <div class="grupoAtores">
            Atores principais:
            <div class="atores">
                Taron Egerton,
            </div>
            <div class="atores">
                Colin Firth,
            </div>
            <div class="atores">
                Mark Strong
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
    name: "Kingsman-O-Circulo-Dourado",
    components: {
        botoes,
        rodape
    }
}
</script>
<style scoped>

.corpo {
    background-image: url(@/assets/kingsman/kingsmanWallpaper.png);
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