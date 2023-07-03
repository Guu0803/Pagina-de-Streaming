<template>
    <div class="tela"> 
        <div class="titulo">
            Categorias
        </div>
        <div class="conteiner-cards">
            <router-link to="/animes" class="link">
                <card texto="Animes" />
            </router-link>
            <router-link to="/series" class="link">
                <card texto="Séries" />
            </router-link>
            <router-link to="/filmes" class="link">
                <card texto="Filmes" />
            </router-link>
            <card texto="Ação" />
            <card texto="Romance" />
        </div>
        <div class="conteiner-cards">
            <card texto="Ficção" />
            <card texto="Terror" />
            <card texto="Aventura" />
            <card texto="Suspense" />
            <card texto="Comédia" />
        </div>
        <div class="conteiner-cards">
            <card texto="Drama" />
            <card texto="Super-Herói" />
            <card texto="Fantasia" />
            <card texto="Sobrenatural" />
            <card texto="Animação" />
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
}
</script>
<style scoped>
.tela {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5vw;
}
.titulo {
    color: #e8e8e8;
    font-size: 4vh;
    margin-left: 5vw;
}
.conteiner-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3vw;
}

.link {
    text-decoration: none;
}
</style>