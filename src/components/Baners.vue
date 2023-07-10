<template>
    <div class="tela">
        <div class="conteiner-banner" :style="getImage()">
            <div class="titulo-banner">
                {{ tituloBanner }}
            </div>
            <div class="conteiner-reproduzir">
                <div class="conteiner-icones">
                    <span class="material-icons botao-play">
                        play_arrow
                    </span>
                    Iniciar
                </div>
                <div class="conteiner-icones">
                    <span class="material-icons">
                        theaters
                    </span>
                    Trailer
                </div>
                <div class="conteiner-icones" v-on:click="addLista()">
                    <span class="material-icons add" v-if="adicionarLista == false">
                        add
                    </span>
                    <span class="material-icons check" v-if="adicionarLista == true">
                        done
                    </span>
                    Lista
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "banerComponent",
    props: ["tituloBanner", "imagemBanner"],
    data() {
        return {
            adicionarLista: false
        }
    },
    methods: {
        getImage() {
            return "background-image: url(" + this.imagemBanner + ")"
        },
        addLista() {
            if (this.adicionarLista == false) {
                this.adicionarLista = true
            } else {
                this.adicionarLista = true
            }
        }
    }
}
</script>
<style scoped>
.conteiner-banner {
    border-radius: 10px;
    color: white;
    box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
    width: 95vw;
    height: 70vh;
    background-size: cover;
    cursor: pointer;
}

.titulo-banner {
    position: absolute;
    bottom: 10vw;
    left: 8vw;
    font-size: 9vh;
    width: 40vw;
    text-transform: uppercase;
}

.conteiner-reproduzir {
    position: absolute;
    bottom: 8vw;
    left: 8vw;
    display: flex;
    align-items: center;
    gap: 1vw;
    font-size: 4vh;
}

.conteiner-icones {
    display: flex;
    align-items: center;
    gap: 1vh;
    cursor: pointer;
}

.conteiner-icones:hover {
    cursor: pointer;
    color: #f64348;
    transition: 300ms;
}
</style>