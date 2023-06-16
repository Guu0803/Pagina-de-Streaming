<template>
    <filmesComponents v-if="parametro == 'filmes'" />
    <animesComponents v-if="parametro == 'animes'"/>
    <seriesComponents v-if="parametro == 'series'"/>
</template> 
<script>
import animesComponents from '@/components/AnimesComponent.vue'
import seriesComponents from '@/components/SeriesComponent.vue'
import filmesComponents from '@/components/FilmesComponent.vue'
export default {
    name:"categoryPage",
    components: {
        animesComponents,
        seriesComponents,
        filmesComponents
    },
    data () {
        return{
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
</style>