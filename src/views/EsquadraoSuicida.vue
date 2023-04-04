<template>

    <div class="corpo">
        <div class="setaVoltar">
            <img src="@/assets/esquadraoSuicida/iconeVoltar.png">
        </div>
        <div class="titulo">
            O Esquadrão Suicida
        </div>
        <div class="infoFilme">
            <img src="@/assets/esquadraoSuicida/imbd.png"> 7,2
            <img src="@/assets/esquadraoSuicida/relogio.png"> 2h 12min
            <img src="@/assets/esquadraoSuicida/faixaEtaria.png">
            2021
            <img src="@/assets/esquadraoSuicida/hd.png">
        </div>
        <div class="sinopse">
            Supervilões Harley Quinn, Bloodsport, Peacemaker e uma coleção <br>
            de reclusos malucos na prisão Belle Reve juntam-se à Task Force X <br>
            super-secreta e super sombria, ao serem deixados na remota <br>
            ilha de Corto Maltese, infundida no inimigo.
        </div>
        <div class="grupoAtores">
            Diretor:
            <div class="atores">
                James Gunn
            </div>
        </div>
        <div class="grupoAtores">
            Atores principais:
            <div class="atores">
                Margot Robbie,
            </div>
            <div class="atores">
                Idris Elba,
            </div>
            <div class="atores">
                John Cena
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
    name: "VingadoresUltimato",
    components: {
        
        botoes,
        rodape
    }
}
</script>
<style scoped>
.corpo {
    border-top: 1px solid #000000;
    background-image: url(@/assets/esquadraoSuicida/esquadraoWallpaper.jpg);
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
    color: #ffffff;
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
    color: #ffffff;
}

.sinopse {
    color: #ffffff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0 0 2vh 7vw;
}

.grupoAtores {
    display: flex;
    gap: 1vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 1vh 0 0 7vw;
    color: #ffffff;
}

.atores:hover {
    cursor: pointer;
    transition: 150ms;
    color: hsl(46, 89%, 51%)
}

</style>