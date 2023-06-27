<template>
    <div class="tela">
        <div class="conteiner-filtro-titulo">
            <div class="titulo">
                Filmes
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
                <miniCards :imagem="require('@/assets/interstelar.jpg')" nome="Interstelar"/>
                <miniCards :imagem="require('@/assets/espaço-entre-nos.jpg')" nome="Espaço Entre Nós"/>
                <miniCards :imagem="require('@/assets/vida-inseto.jpg')" nome="Vida de Inseto"/>
                <miniCards :imagem="require('@/assets/card-shang-chi.jpg')" nome="Shang-Chi: A Lenda dos Dez Anéis"/>
                <miniCards :imagem="require('@/assets/assim-na-terra.jpg')" nome="Assim na Terra como no Inferno"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/baleia.png')" nome="A Baleia"/>
                <miniCards :imagem="require('@/assets/avatar.png')" nome="Avatar"/>
                <miniCards :imagem="require('@/assets/creed-3.jpg')" nome="Creed 3" />
                <miniCards :imagem="require('@/assets/enrolados.png')" nome="Enrolados"/>
                <miniCards :imagem="require('@/assets/eternos.png')" nome="Eternos"/>     
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/kingsman-origem.png')" nome="Kingsman: A Origem" />
                <miniCards :imagem="require('@/assets/maquinas-mortais.jpg')" nome="Máquinas Mortais" />
                <miniCards :imagem="require('@/assets/panico-6.png')" nome="Pânico 6"/>
                <miniCards :imagem="require('@/assets/super-velozes.png')" nome="Super Velozes, Mega Furiosos" />
                <miniCards :imagem="require('@/assets/venon-2.png')" nome="Venom: Tempo de Carnificina" />               
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/esposa-mentira.jpg')" nome="Esposa de Mentirinha"/>
                <miniCards :imagem="require('@/assets/homem-aranha-2.png')" nome="Espetacular Homem-Aranha 2"/>
                <miniCards :imagem="require('@/assets/a-morte-do-demonio.png')" nome="A Morte do Demônio: A Ascensão"/>
                <miniCards :imagem="require('@/assets/no-aranhaverso.png')" nome="Homem Aranha: No Aranhaverso"/>
                <miniCards :imagem="require('@/assets/ghosted.png')" nome="Ghoted: Sem Resposta"/>
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