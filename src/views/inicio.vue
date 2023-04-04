<template>
    <div>
        <div class="tela">
            <banners />
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
    }
}
</script>
<style>
.tela {
    width: 100%;
    height: 100%;
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