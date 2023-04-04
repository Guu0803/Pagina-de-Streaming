<template>

    <div class="corpo">
        <div class="setaVoltar">
            <img src="@/assets/homem-aranha-sem-volta-pra-casa/iconeVoltar.png">
        </div>
        <div class="titulo">
            Homem-Aranha: <br>
            Sem Volta para Casa
        </div>
        <div class="infoFilme">
            <img src="@/assets/homem-aranha-sem-volta-pra-casa/imbd.png"> 8,2
            <img src="@/assets/homem-aranha-sem-volta-pra-casa/relogio.png"> 2h 28min
            <img src="@/assets/homem-aranha-sem-volta-pra-casa/faixaEtaria.png">
            2021
            <img src="@/assets/homem-aranha-sem-volta-pra-casa/hd.png">
        </div>
        <div class="sinopse">
            Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. <br>
            Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e <br>
            seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.
        </div>
        <div class="grupoAtores">
            Diretor:
            <div class="atores">
                Jon Watts
            </div>
        </div>
        <div class="grupoAtores">
            Atores principais:
            <div class="atores">
                Tom Holland,
            </div>
            <div class="atores">
                Zendaya,
            </div>
            <div class="atores">
                Benedict Cumberbatch
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
    name: "HomemAranhaSemVoltaPraCasa",
    components: {
    
        botoes,
        rodape
    }
}
</script>

<style scoped>

.corpo {
    background-image: url(@/assets/homem-aranha-sem-volta-pra-casa/SpiderWallpaper1.jpg);
    background-size: cover;
    border-top: 1px solid #000000;
    height: 100vh;
    width: 100vw;
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
    color: hsl(46, 89%, 51%);
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
    opacity: 0, 9;
}

.sinopse {
    color: #000000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0 0 2vh 7vw;
}

.grupoAtores {
    display: flex;
    gap: 1vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 1vh 0 0 7vw;
}

.atores:hover {
    cursor: pointer;
    transition: 150ms;
    color: hsl(46, 89%, 51%)
}
</style>