<template>
   

    <div class="corpo">
        <div class="setaVoltar">
            <img src="@/assets/vingadores-ultimato/iconeVoltar.png">
        </div>
        <div class="titulo">
            Vingadores: Ultimato

        </div>
        <div class="infoFilme">
            <img src="@/assets/vingadores-ultimato/imbd.png"> 8,4
            <img src="@/assets/vingadores-ultimato/relogio.png"> 3h 1min
            <img src="@/assets/vingadores-ultimato/faixaEtaria.png">
            2019
            <img src="@/assets/vingadores-ultimato/hd.png">
        </div>
        <div class="sinopse">
            Após os eventos devastadores de Vingadores: Guerra Infinita, <br>
            o universo está em ruínas e com a ajuda de aliados os Vingadores <br>
            se reúnem para desfazer as ações de Thanos e restaurar a ordem.
        </div>
        <div class="grupoAtores">
            Diretores:
            <div class="atores">
                Anthony Russo, Joe Russo
            </div>
        </div>
        <div class="grupoAtores">
            Atores principais:
            <div class="atores">
                Robert Downey Jr,
            </div>
            <div class="atores">
                Chris Evans,
            </div>
            <div class="atores">
                Mark Ruffalo
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
    background-image: url(@/assets/vingadores-ultimato/vingadoresUltimato.jpg);
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
    color: #000000;
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
    color: #000000;
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
    color: #000000;
}

.atores:hover {
    cursor: pointer;
    transition: 150ms;
    color: hsl(46, 89%, 51%)
}
</style>