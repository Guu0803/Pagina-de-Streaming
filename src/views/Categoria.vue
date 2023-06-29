<template>
    <div class="tela">
        <div class="conteiner-cards">
            <card texto="Animes" />
            <card texto="Séries" />
            <card texto="Filmes" />
            <card texto="Ação" />
            <card texto="Romance" />
        </div>
        <div class="conteiner-cards">
            <card texto="Ficção" />
            <card texto="Terror" />
        </div>
    </div>
    <filmesComponents v-if="parametro == 'filmes'" />
    <animesComponents v-if="parametro == 'animes'" />
    <seriesComponents v-if="parametro == 'series'" />
</template> 
<script>
import animesComponents from '@/components/AnimesComponent.vue'
import seriesComponents from '@/components/SeriesComponent.vue'
import filmesComponents from '@/components/FilmesComponent.vue'
import card from '@/components/Catalago.vue'
export default {
    name: "categoryPage",
    components: {
        animesComponents,
        seriesComponents,
        filmesComponents,
        card
    },
    data() {
        return {
            parametro: undefined
        }
    },
    created() {
        this.parametro = this.$route.params.type
    },
    watch: {
        "$route.params.type"() {
            this.parametro = this.$route.params.type
        }
    }
}
</script>
<style scoped>
.tela {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 5vw;
}

.conteiner-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3vw;
}
</style>