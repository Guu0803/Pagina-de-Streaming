<template>
    <div class="tela">
        <div class="conteiner-banner" :style="getImage()">
            <!-- <span class="material-icons seta-voltar">
                arrow_back_ios
            </span> -->
            <div class="conteudo-baner">

                <div class="titulo-banner">
                    {{ tituloBaner }}
                </div>
                <div class="conteiner-reproduzir">
                    <span class="material-icons botao-banner">
                        play_circle_filled
                    </span>
                    Reproduzir
                    <span class="material-icons botao-info">
                        info
                    </span>
                </div>

            </div>
            <!-- <span class="material-icons seta-proximo">
                arrow_forward_ios
            </span> -->
        </div>
    </div>
</template>
<script>

export default {
    name: "banerComponent",
    props: ["tituloBaner", "imagemBaner",],
    methods: {
        getImage() {
            return "background-image: url(" + this.imagemBaner + ")"
        }
    }
}
</script>
<style scoped>
.tela {
    display: flex;
    justify-content: space-around;
}

.conteiner-banner {
    margin-top: 4vh;
    border-radius: 10px;
    color: white;
    box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
    width: 90vw;
    height: 70vh;
    background-size: cover;
    display: flex;
    align-items: center;
}

.conteudo-baner {
    display: flex;
    flex-direction: column;
    margin-left: 10vh;
}

.titulo-banner {
    font-size: 9vh;
    margin-left: 10vh;
}

.conteiner-reproduzir {
    font-size: 3.5vh;
    margin-left: 6vw;
    padding-top: 3vh;
    display: flex;
    align-items: center;
}

.botao-banner {
    font-size: 5vh;
    margin-right: 0.5vw;
    line-height: 6vh;
    transition: 300ms;
}

.botao-banner:hover {
    cursor: pointer;
    color: #f64348;
    transition: 300ms;
    scale: 1.4;
}

.botao-info {
    margin-left: 2vw;
    font-size: 3vh;
}

.botao-info:hover {
    cursor: pointer;
    color: #f64348;
    transition: 300ms;
}

.seta-voltar {
    position: absolute;
    left: 5.3vw;
    font-size: 6vh;
    width: fit-content;
}

.seta-proximo {
    position: absolute;
    right: 5vw;
    font-size: 6vh;
}

.seta-proximo:hover {
    background-color: #40404040;
    cursor: pointer;
}

.seta-voltar:hover {
    background-color: #40404040;
    cursor: pointer;
}
</style>