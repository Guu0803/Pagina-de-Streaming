<template>
    <div class="tela">
        <div class="conteiner-banner" :style="getImage()">
            <div class="conteudo-baner">
                <div class="titulo-banner">
                    {{ tituloBanner }}
                </div>
                <div class="sinopse">
                    {{ sinopseBanner }}
                </div>
                <div class="conteiner-reproduzir">
                    <div class="play">
                        <span class="material-icons botao-play">
                            play_circle_filled
                        </span>
                        Play
                    </div>
                    <div class="dropdown">
                        <span class="material-icons info">
                            info
                        </span>
                        <div class="conteudo-dropdown">
                            <div class="escrita-dropdown">
                                Informações
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span class="material-icons add" v-on:click="adicionarLista()" :style="addLista()">
                            add_circle
                        </span>
                        <div class="conteudo-dropdown-add-lista">
                            <div class="escrita-dropdown">
                                Adicionar a Lista
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span class="material-icons check" v-on:click="retirarLista()" :style="aparecerCheck()">
                            check_circle
                        </span>
                        <div class="conteudo-dropdown-remover-lista">
                            <div class="escrita-dropdown">
                                Remover da Lista
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "banerComponent",
    props: ["tituloBanner", "imagemBanner", "sinopseBanner",],
    data() {
        return {
            adicionar: 1
        }
    },
    methods: {
        getImage() {
            return "background-image: url(" + this.imagemBanner + ")"
        },
        adicionarLista() {
            this.adicionar = 2
        },
        retirarLista() {
            this.adicionar = 1
        },
        addLista() {
            if (this.adicionar == 2) {
                return "display:none;"
            } else {
                return "display:block"
            }
        },
        aparecerCheck() {
            if (this.adicionar == 2) {
                return "display:block;"
            } else {
                return "display:none"
            }
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
    margin-left: 5vh;
    width: 40vw;
}

.conteiner-reproduzir {
    margin: 3vh 0 0 6vh;
    display: flex;
    align-items: center;
}

.sinopse {
    margin-left: 6vh;
    width: 30vw;
    font-size: 2.3vh;
    font-family: 'Times New Roman', Times, serif;
    background-color: #34343440;
}

.play {
    display: flex;
    align-items: center;
    transition: 300ms;
    line-height: 6vh;
    font-size: 4vh;
    gap: 1vh;
    letter-spacing: 1px;
}

.botao-play {
    font-size: 4.5vh;
}

.play:hover {
    cursor: pointer;
    color: #f64348;
    transition: 300ms;
    scale: 1.2;
}

.dropdown {
    position: relative;
    display: inline-block;
    padding-top: 0.8vh;
}

.escrita-dropdown {
    color: white;
    display: block;
    cursor: pointer;
    transition: 200ms;
}

.conteudo-dropdown,
.conteudo-dropdown-remover-lista,
.conteudo-dropdown-add-lista {
    display: none;
    position: absolute;
    background-color: #343434;
    padding: 1vh;
    z-index: 1;
    margin-left: -1.5vh;
    border-radius: 10px;
}

.dropdown:hover .conteudo-dropdown {
    display: block;
    transition: 300ms;
}

.dropdown:hover .conteudo-dropdown-add-lista {
    display: block;
    transition: 300ms;
}

.dropdown:hover .conteudo-dropdown-remover-lista {
    display: block;
    transition: 300ms;
}

.info,
.add,
.check {
    font-size: 5vh;
    transition: 300ms;
    cursor: pointer;
    margin-left: 1vw;
}

.info:hover,
.add:hover,
.check:hover {
    color: #f64348;
}
</style>