<template>
    <div class="tela" v-if="!parametro">
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
</template> 
<script>
import card from '@/components/Catalago.vue'
export default {
    name: "categoryPage",
    components: {
        card
    },
    data() {
        return {
            parametro: undefined
        }
    },
    created() {
        this.parametro = this.$route.params.type
        console.log(this.parametro)
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