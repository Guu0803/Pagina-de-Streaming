<template>
    <div class="tela">
        <!-- Banner principal -->
        <div class="carrosel">
            <div class="botao-volta" v-on:click="passarAnterior()" >
                &#10094;
            </div>
            <banners :imagemBanner="require('@/assets/the-last-of-us.jpg')" tituloBanner="The Last of Us" sinopseBanner="Vinte anos após um fungo que transforma os seres humanos em seres canibalísticos agressivos devastar o mundo, 
                os sobreviventes Joel Miller (Pedro Pascal) e Ellie (Bella Ramsey) precisam lutar contra circunstâncias brutais e assassinos
                implacáveis para encontrar um grupo que pode ser sua salvação." v-if="pagina == 1" />
            <banners :imagemBanner="require('@/assets/john-wick-4.jpeg')" tituloBanner="John Wick 4: Baba Yaga"
                sinopseBanner="Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o 
                High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim."
                v-if="pagina == 2" />
            <banners :imagemBanner="require('@/assets/Transformers-O-Despertar-das-Feras.jpg')"
                tituloBanner="Transformers: O Despertar das Feras"
                sinopseBanner="Nos anos 1990, Maximals, Predacons e Terrorcons se juntam à batalha entre Autobots e Decepticons."
                v-if="pagina == 3" />
            <banners :imagemBanner="require('@/assets/guardioes-da-galaxia-3.jpg')"
                sinopseBanner="Peter Quill deve reunir sua equipe para defender
                o universo e proteger um dos seus. Se a missão não for totalmente bem-sucedida, isso pode levar ao fim dos Guardiões." tituloBanner="Guadiões da Galáxia: Vol.3"
                v-if="pagina == 4" />
            <div class="botao-proximo" v-on:click="passarFrente()">
                &#10095;
            </div>
        </div>
        <!-- Fim -->

        <!-- Carrosel Series  -->
        <div class="titulo-fileiras">
            <router-link to="/categoria/series/" class="link-titulo">
                Séries
            </router-link>
        </div>
        <div class="separacao">
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarSeries()">
                    keyboard_arrow_left
                </span>
            <div class="fileira-cards" v-if="series == 1">
                <miniCards :imagem="require('@/assets/the-witcher.jpg')" :scale="true"/>
                <miniCards :imagem="require('@/assets/casa-de-papel.jpg')" :scale="true"/>
                <miniCards :imagem="require('@/assets/house.jpg')" :scale="true"/>
                <miniCards :imagem="require('@/assets/mr-robot.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/prison-break.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/stranger-things.jpg')" :scale="true" />
            </div>
            <div class="fileira-cards" v-if="series == 2">
                <miniCards :imagem="require('@/assets/citadel.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/strain.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/moon-night.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/fauda.jpg')" :scale="true"  />
                <miniCards :imagem="require('@/assets/bodyguard.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/origem.jpg')" :scale="true" />
            </div>
            <div class="fileira-cards" v-if="series == 3">
                <miniCards :imagem="require('@/assets/halo.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/peaky-blinders.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/ted-lasso.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/sweet-tooth.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/loki.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/walking-dead.png')" :scale="true" />
            </div>
            <span class="material-icons seta" v-on:click="passarSeries()">
                    keyboard_arrow_right
                </span>
        </div>
        <!-- Fim -->

        <!-- Carrosel em Alta -->
        <div class="titulo-fileiras link-titulo">
            Em alta
        </div>
        <div class="separacao">
        </div>
        <div div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarEmAlta()">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards" v-if="emAlta == 1">
                <cards :imagemGrande="require('@/assets/card-last-of-us.jpg')" />
                <cards :imagemGrande="require('@/assets/aranha-verso.jpg')" />
                <cards :imagemGrande="require('@/assets/mandaloriam.jpg')" />
            </div>
            <div class="fileira-cards" v-if="emAlta == 2">
                <cards :imagemGrande="require('@/assets/transformers-despertar-das-feras.png')" />
                <cards :imagemGrande="require('@/assets/guardioes-da-galaxia.jpg')" />
                <cards :imagemGrande="require('@/assets/click.jpg')" />
            </div>
            <span class="material-icons seta" v-on:click="passarEmAlta()">
                keyboard_arrow_right
            </span>
        </div>
        <!-- Fim -->
        
        <!-- Carrosel Filmes -->
        <div class="titulo-fileiras">
            <router-link to="/categoria/filmes/" class="link-titulo">
                Filmes
            </router-link>
        </div>
        <div class="separacao">
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarFilmes()">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards" v-if="filmes == 1">
                <!-- :Scale esta aplicando a propriedade scale nos minicards apenas na pagina inicial -->
                <miniCards :imagem="require('@/assets/interstelar.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/espaço-entre-nos.jpg')" :scale="true"/>
                <miniCards :imagem="require('@/assets/vida-inseto.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/card-shang-chi.jpg')" :scale="true"/>
                <miniCards :imagem="require('@/assets/assim-na-terra.jpg')" :scale="true"/>
                <miniCards :imagem="require('@/assets/esposa-mentira.jpg')" :scale="true"/>
            </div>
            <div class="fileira-cards" v-if="filmes == 2">
                <miniCards :imagem="require('@/assets/baleia.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/avatar.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/creed-3.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/enrolados.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/eternos.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/homem-aranha-2.png')"  :scale="true"/>
            </div>
            <div class="fileira-cards" v-if="filmes == 3">
                <miniCards :imagem="require('@/assets/kingsman-origem.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/maquinas-mortais.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/panico-6.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/super-velozes.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/venon-2.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/a-morte-do-demonio.png')" :scale="true" />
            </div>
            <span class="material-icons seta" v-on:click="passarFilmes()">
                keyboard_arrow_right
            </span>
        </div>
        <!-- Fim -->

        <!-- Carrosel animes -->
        <div class="titulo-fileiras">
            <router-link to="/categoria/animes/" class="link-titulo">
                Animes
            </router-link>
        </div>
        <div class="separacao">
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarAnimes()">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards" v-if="animes == 1">
                <miniCards :imagem="require('@/assets/classroom-elite.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/deamon-slayer.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/dragon-ball.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/full-metal.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/toradora.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/jujutsu-kaisen.jpg')"  :scale="true"/>
            </div>
            <div class="fileira-cards" v-if="animes == 2">
                <miniCards :imagem="require('@/assets/bleach.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/erased.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/great-pretender.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/one-punch-man.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/record-of-ragnarok.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/sao.png')"  :scale="true"/>
            </div>
            <div class="fileira-cards" v-if="animes == 3">
                <miniCards :imagem="require('@/assets/viland-saga.png')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/boku-no-hero.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/hells-paradise.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/mashle.jpg')"  :scale="true"/>
                <miniCards :imagem="require('@/assets/one-piece.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/spy-family.jpg')"  :scale="true"/>
            </div>
            <span class="material-icons seta" v-on:click="passarAnimes()">
                keyboard_arrow_right
            </span>
        </div>
        <!-- FIm -->
    </div>
</template>
<script>
import miniCards from '@/components/MiniCards.vue'
import banners from '@/components/Baners.vue'
import cards from '@/components/Cards.vue'
export default {
    name: "pagina-inicio",
    components: {
        miniCards,
        banners,
        cards
    },
    data() {
        return {
            pagina: 1,
            series: 1,
            filmes: 1,
            emAlta: 1,
            animes: 1
        }
    },
    methods: {
        passarFrente() {
            if (this.pagina >= 4) {
                this.pagina = 1
            } else {
                this.pagina++
            }
        },
        passarAnterior() {
            if (this.pagina <= 1) {
                this.pagina = 4
            } else {
                this.pagina--
            }
        },
        passarSeries() {
            if (this.series >= 3) {
                this.series = 1
            } else {
                this.series++
            }
        },
        voltarSeries() {
            if (this.series <= 1) {
                this.series = 3
            } else {
                this.series--
            }
        },
        passarFilmes() {
            if (this.filmes >= 3) {
                this.filmes = 1
            } else {
                this.filmes++
            }
        },
        voltarFilmes() {
            if (this.filmes <= 1) {
                this.filmes = 3
            } else[
                this.filmes--
            ]
        },
        passarEmAlta() {
            if (this.emAlta >= 2) {
                this.emAlta = 1
            } else {
                this.emAlta++
            }
        },
        voltarEmAlta() {
            if (this.emAlta <= 1) {
                this.emAlta = 2
            } else {
                this.emAlta--
            }
        },
        passarAnimes() {
            if (this.animes >= 3) {
                this.animes = 1
            } else {
                this.animes++
            }
        },
        voltarAnimes() {
            if (this.animes <= 1) {
                this.animes = 3
            } else {
                this.animes--
            }
        }
    },
}
</script>
<style scoped>
.tela {
    width: 100%;
    height: 100%;
}

.botao-volta {
    position: relative;
    left: 3vw;
    cursor: pointer;
    width: 4vw;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #B2B2B2;
    font-weight: bold;
    font-size: 5vh;
    user-select: none;
}
.botao-proximo {
    position: relative;
    right: 3vw;
    cursor: pointer;
    width: 4vw;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #B2B2B2;
    font-weight: bold;
    font-size: 5vh;
    user-select: none;
}

.carrosel {
    display: flex;
    align-items: center;
}

.botao-volta:hover,
.botao-proximo:hover {
    background-color: rgba(0, 0, 0, 0.8)
}

.separacao {
    width: 95%;
    height: 1px;
    background-image: linear-gradient(to right, #898989, #1f1f1f);
    margin: 0 0 3vh 4vw;
}

.titulo-fileiras {
    color: #B2B2B2;
    font-size: 4vh;
    margin: 5vw 0 0 7vw;
    cursor: pointer;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
}

.link-titulo {
    text-decoration: none;
    color: #B2B2B2;
}

.link-titulo:hover {
    color: #f64348;
}

.conteiner-cards {
    display: flex;
    color: #898989;
    justify-content: center;
    width: 100%;
    align-items: center;
}

.fileira-cards {
    width: 100%;
    display: flex;
    gap: 1.5vw;
    width: fit-content;
}

.fileira-cards:hover :not(:hover) {
    opacity: 0.4;
}

.seta {
    font-size: 5vh;
    cursor: pointer;
    transition: 300ms;
}

.seta:hover {
    background-color: black;
    transition: 300ms;
}
</style>