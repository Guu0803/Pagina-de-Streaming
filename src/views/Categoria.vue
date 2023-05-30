<template>
    <div class="generos">
        <cardCategorias texto="Séries"/>
        <cardCategorias texto="Filmes"/>
        <cardCategorias texto="Animes"/>
    </div>
</template> 
<script>
import cardCategorias from '@/components/Catalago.vue'
export default {
    name:"categoryPage",
    components: {
        cardCategorias
    }
}
</script>
<style scoped>
.generos {
    margin: 2vw;
    display: flex;
    gap: 3vw;
}
</style>