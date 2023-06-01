<template>
    <div class="tela">
        <div class="carrosel">
            <div class="botao-volta" v-on:click="passarAnterior()">
                &#10094;
            </div>
            <banners :imagemBaner="require('@/assets/the-last-of-us.jpg')" tituloBaner="The Last of Us"
                v-if="pagina == 1" />
            <banners :imagemBaner="require('@/assets/john-wick-4.jpeg')" tituloBaner="John Wick: Capítulo 4"
                v-if="pagina == 2" />
            <banners :imagemBaner="require('@/assets/Transformers-O-Despertar-das-Feras.jpg')"
                tituloBaner="Transformers: O Despertar das Feras" v-if="pagina == 3" />
            <banners :imagemBaner="require('@/assets/guardioes-da-galaxia-3.jpg')" tituloBaner="Guadiões da Galáxia: Vol.3" v-if="pagina == 4"/>
            <div class="botao-proximo" v-on:click="passarFrente()">
                &#10095;
            </div>
        </div>
        <div class="titulo-fileiras">
            Séries
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/the-witcher.jpg')" />
                <miniCards :imagem="require('@/assets/casa-de-papel.jpg')" />
                <miniCards :imagem="require('@/assets/house.jpg')" />
                <miniCards :imagem="require('@/assets/mr-robot.jpg')" />
                <miniCards :imagem="require('@/assets/prison-break.jpg')" />
                <miniCards :imagem="require('@/assets/stranger-things.jpg')" />
            </div>
            <span class="material-icons seta">
                keyboard_arrow_right
            </span>
        </div>

        <div class="titulo-fileiras">
            Em alta
        </div>
        <div div class="conteiner-cards">
            <span class="material-icons seta">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards">
                <cards :imagemGrande="require('@/assets/card-last-of-us.jpg')" />
                <cards :imagemGrande="require('@/assets/aranha-verso.jpg')" />
                <cards :imagemGrande="require('@/assets/mandaloriam.jpg')" />
            </div>
            <span class="material-icons seta">
                keyboard_arrow_right
            </span>
        </div>

        <div class="titulo-fileiras">
            Filmes
        </div>
        <div class="conteiner-cards">

            <span class="material-icons seta">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/interstelar.jpg')" />
                <miniCards :imagem="require('@/assets/espaço-entre-nos.jpg')" />
                <miniCards :imagem="require('@/assets/vida-inseto.jpg')" />
                <miniCards :imagem="require('@/assets/card-shang-chi.jpg')" />
                <miniCards :imagem="require('@/assets/assim-na-terra.jpg')" />
                <miniCards :imagem="require('@/assets/esposa-mentira.jpg')" />
            </div>
            <span class="material-icons seta">
                keyboard_arrow_right
            </span>
        </div>
        <div class="titulo-fileiras">
            Animes
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/classroom-elite.jpg')" />
                <miniCards :imagem="require('@/assets/deamon-slayer.jpg')" />
                <miniCards :imagem="require('@/assets/dragon-ball.jpg')" />
                <miniCards :imagem="require('@/assets/full-metal.jpg')" />
                <miniCards :imagem="require('@/assets/toradora.jpg')" />
                <miniCards :imagem="require('@/assets/jujutsu-kaisen.jpg')" />
            </div>
            <span class="material-icons seta">
                keyboard_arrow_right
            </span>
        </div>
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
            pagina: 1
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
        }
    }
}
</script>
<style scoped>
.tela {
    width: 100%;
    height: 100%;
}

.botao-volta,
.botao-proximo {
    cursor: pointer;
    width: 3vw;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 5vh;
    user-select: none;
}
.carrosel {
    display: flex;
    align-items: center;
}
.botao-proximo {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.botao-volta:hover,
.botao-proximo:hover {
    background-color: rgba(0, 0, 0, 0.8)
}

.numeros-paginas {
    color: #f2f2f2;
    font-size: 2.5vh;
}

.circulo {
    cursor: pointer;
    height: 2vh;
    width: 2vh;
    background-color: #bbb;
    border-radius: 50%;
    transition: background-color 0.6s ease;
}

.circulo:hover {
    background-color: #717171;
}

.titulo-fileiras {
    color: #B2B2B2;
    font-size: 4vh;
    margin: 2vh 0 2vh 4vw;
    cursor: pointer;
    width: fit-content;
}

.titulo-fileiras:hover {
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
    padding: 1vw;
    width: fit-content;
}

.fileira-cards:hover :not(:hover) {
    opacity: 0.4;
}

.seta {
    font-size: 8vh;
    cursor: pointer;
}
</style>