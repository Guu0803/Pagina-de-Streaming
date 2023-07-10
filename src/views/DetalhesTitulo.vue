<template>
    <div class="tela">
        <div class="banner" :style="getImage()">
            <span class="material-icons seta-voltar" v-on:click="voltar()">
                reply
            </span>
            <div class="titulo">
                {{ informarcoes.name }}
            </div>
            <div class="info">
                <div>
                    {{ informarcoes.duracao }}
                </div>
                <div>
                    <img :src="informarcoes.faixaEtaria">
                </div>
                <div>
                    Full HD
                </div>
            </div>
        </div>
        <div class="conteiner-reproduzir">
            <div class="conteiner-play">
                <span class="material-icons play">
                    play_arrow
                </span>
                Iniciar
            </div>
            <div class="conteiner-play">
                <span class="material-icons trailer">
                    movie
                </span>
                Trailer
            </div>
        </div>
        <div class="sinopse">
            {{ informarcoes.sinopse }}
        </div>
        <div class="categorias">
            <div class="escrita-categoria">
                {{ informarcoes.categoriaPrimaria }}
            </div>
            <span class="material-icons dot">
                fiber_manual_record
            </span>
            <div class="escrita-categoria">
                {{ informarcoes.categoriaSecundaria }}
            </div>
            <span class="material-icons dot" v-if="informarcoes.categoriaTerceciaria">
                fiber_manual_record
            </span>
            <div class="escrita-categoria">
                {{ informarcoes.categoriaTerceciaria }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "detalheTitulo",
    data() {
        return {
            informarcoes: {}
        }
    },
    methods: {
        getImage() {
            return "background-image: url(" + this.informarcoes.banner + ")"
        },
        voltar() {
            this.$router.go(-1)
        },
    },
    created() {
        let informarcoesSalva = localStorage.getItem("info")
        informarcoesSalva = JSON.parse(informarcoesSalva)
        this.informarcoes = informarcoesSalva
    }
}
</script>
<style scoped>
.tela {
    width: 100%;
}

.banner {
    height: 90vh;
    background-size: cover;
    color: #e8e8e8;
    box-shadow: inset 10px -120px 40px #1f1f1f, inset -10px -70px 40px #1f1f1f;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
}

.seta-voltar {
    position: absolute;
    top: 0;
    left: 1vw;
    font-size: 7vh;
    cursor: pointer;
    transition: 200ms;
}

.seta-voltar:hover {
    color: #1f1f1f80;
    transition: 200ms;
}

.titulo {
    font-size: 6vh;
    position: absolute;
    bottom: 3vw;
    left: 8vw;
    display: flex;
    align-items: center;
    gap: 2vw;
    text-transform: uppercase;
}
.conteiner-reproduzir {
    display: flex;
    color: #e8e8e8;
    margin-left: 8vw;
    width: fit-content;
    margin-top: 1vw;
    font-size: 4vh;
    gap: 2vw;
}
.conteiner-play {
    display: flex;
    align-items: center;
    gap: 1vh;
}
.conteiner-play:hover, .conteiner-trailer:hover {
    color: #f64348;
    cursor: pointer;
}

.play {
    font-size: 6vh;
}
.info {
    display: flex;
    align-items: center;
    gap: 2vw;
    width: fit-content;
    position: absolute;
    bottom: 0;
    left: 9vw;
    font-size: 2.5vh;
}

.sinopse {
    width: 70%;
    color: #e8e8e8;
    font-size: 3vh;
    margin: 2vw 0 0 9vw;
    text-align: justify;
}

.categorias {
    display: flex;
    align-items: center;
    color: #e8e8e8;
    gap: 1vw;
    font-size: 2vh;
    margin: 1vw 0 0 10vw;
}

.categorias .dot {
    font-size: 2vh;
}
.escrita-categoria:hover {
    color: #f64348;
    cursor: pointer;

}
</style>