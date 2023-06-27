<template>
    <div class="tela">
        <div class="conteiner-filtro-titulo">
            <div class="titulo">
                Séries
            </div>
            <div class="conteiner-filtro">
                <div class="sort-dropdown">
                    <div class="sort">
                        <span class="material-icons">
                            sort
                        </span>
                        Populares
                    </div>
                    <div class="conteudo-dropdown-sort">
                        <div class="escrita-dropdown">
                            Mais Populares
                        </div>
                        <div class="escrita-dropdown">
                            Mais Recentes
                        </div>
                        <div class="escrita-dropdown">
                            Ordem Alfabéitca
                        </div>
                    </div>
                </div>
                <div class="tune-dropdown">
                    <div class="tune">
                        <span class="material-icons">
                            tune
                        </span>
                        Filtro
                    </div>
                    <div class="conteudo-dropdown-tune">
                        <div class="checkbox">
                            <div class="conteiner-check" v-on:click="checkboxAcao()">
                                <span class="material-icons filtro-acao" v-if="checkAcao == false">
                                    radio_button_unchecked
                                </span>
                                <span class="material-icons filtro-acao" v-if="checkAcao == true">
                                    radio_button_checked
                                </span>
                                Ação
                            </div>
                            <div class="conteiner-check" v-on:click="checkboxComedia()">
                                <span class="material-icons filtro-comedia" v-if="checkComedia == false">
                                    radio_button_unchecked
                                </span>
                                <span class="material-icons filtro-comedia" v-if="checkComedia == true">
                                    radio_button_checked
                                </span>
                                Comédia
                            </div>
                            <div class="conteiner-check" v-on:click="checkboxRomance()">
                                <span class="material-icons filtro-romance" v-if="checkRomance == false">
                                    radio_button_unchecked
                                </span>
                                <span class="material-icons filtro-romance" v-if="checkRomance == true">
                                    radio_button_checked
                                </span>
                                Romance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="conteiner-geral">
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/the-witcher.jpg')" nome="The Withcer" />
                <miniCards :imagem="require('@/assets/casa-de-papel.jpg')" nome="La Casa de Papel"/>
                <miniCards :imagem="require('@/assets/house.jpg')" nome="House"/>
                <miniCards :imagem="require('@/assets/mr-robot.jpg')" nome="Mr. Robot" />
                <miniCards :imagem="require('@/assets/prison-break.jpg')" nome="Prison Break" />
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/citadel.jpg')" nome="Citadel" />
                <miniCards :imagem="require('@/assets/strain.png')" nome="Strain"/>
                <miniCards :imagem="require('@/assets/moon-night.jpg')" nome="Cavaleiro da Lua"/>
                <miniCards :imagem="require('@/assets/fauda.jpg')" nome="Fauda"/>
                <miniCards :imagem="require('@/assets/bodyguard.jpg')" nome="Segurança em jogo" />
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/halo.png')" nome="Halo"/>
                <miniCards :imagem="require('@/assets/peaky-blinders.png')" nome="Peaky Blinders"/>
                <miniCards :imagem="require('@/assets/ted-lasso.png')" nome="Ted Lasso"/>
                <miniCards :imagem="require('@/assets/sweet-tooth.png')" nome="Sweet Tooth"/>
                <miniCards :imagem="require('@/assets/loki.png')" nome="Loki"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/walking-dead.png')" nome="Walking Dead" />
                <miniCards :imagem="require('@/assets/origem.jpg')" nome="Origem"/>
                <miniCards :imagem="require('@/assets/stranger-things.jpg')" nome="Stranger Things" />
                <miniCards :imagem="require('@/assets/what-if.png')" nome="What if...?"/>
                <miniCards :imagem="require('@/assets/roda-do-tempo.png')" nome="Roda do Tempo" />
            </div>
        </div>
    </div>
</template>
<script>
import miniCards from '@/components/MiniCards.vue'
export default {
    components: {
        miniCards
    },
    data() {
        return {
            checkAcao: false,
            checkComedia: false,
            checkRomance: false
        }
    },
    methods: {
        // Essa function está mudando o checkbox pois usei uma img, entao ele esta trocando da img checada para nao checada
        checkboxAcao() {
            if (this.checkAcao == false) {
                this.checkAcao = true
            } else {
                this.checkAcao = false
            }
        },
        checkboxRomance() {
            if (this.checkRomance == false) {
                this.checkRomance = true
            } else {
                this.checkRomance = false
            }
        },
        checkboxComedia() {
            if (this.checkComedia == false) {
                this.checkComedia = true
            } else {
                this.checkComedia = false
            }
        }
        // Fim
    }
}
</script>
<style scoped>
.tela {
    padding: 3vw;
}

.conteiner-geral {
    margin: 5vw;
    display: flex;
    flex-direction: column;
    gap: 20vh;
    align-items: center;
}

.fileira-cards {
    display: flex;
    gap: 3vw;
}

.info-card {
    display: flex;
    margin-top: 2vw;
    color: #B2B2B2;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.info-card:hover {
    color: #f64348;
}

.conteiner-filtro-titulo {
    display: flex;
    color: #B2B2B2;
    font-size: 4vh;
    justify-content: space-between;
    margin-bottom: 10vw;
}

.conteiner-filtro {
    display: flex;
    gap: 2vw;
    font-size: 3vh;
    align-items: center;
}

.sort,
.tune {
    font-size: 2.5vh;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh;
    width: 10vw;
    justify-content: center;
}

.sort:hover,
.tune:hover {
    background-color: #B2B2B235;
}

.sort-dropdown,
.tune-dropdown {
    display: inline-block;
    position: relative;
}

.sort-dropdown:hover .conteudo-dropdown-sort,
.tune-dropdown:hover .conteudo-dropdown-tune {
    background-color: #B2B2B235;
    transition: 300ms;
    display: block;
}

.conteudo-dropdown-sort,
.conteudo-dropdown-tune {
    display: none;
    position: absolute;
    z-index: 1;
    font-size: 2.5vh;
    letter-spacing: 1px;
    width: 100%;
}

.escrita-dropdown {
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh 0;
}

.escrita-dropdown:hover {
    background-color: #121212;
    transition: 300ms;
}

.titulo {
    cursor: pointer;
    margin-left: 10vw;
    transition: 300ms;
}

.titulo:hover {
    color: #f64348;
    transition: 300ms;
}

.checkbox {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding-bottom: 1vh;
}

.filtro-acao,
.filtro-comedia,
.filtro-romance {
    display: flex;
    align-items: flex-start;
    padding-left: 1vw;
    cursor: pointer;

}

.conteiner-check {
    display: flex;
    gap: 1vh;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh 0;
}

.conteiner-check:hover {
    background-color: #121212;
    transition: 300ms;
}
</style>