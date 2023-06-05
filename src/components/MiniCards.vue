<template>
    <div class="conteiner-card">
        <img :src="imagem" class="card">
    </div>
</template>
<script>
export default {
    name: "miniCardsComponent",
    props: ["imagem"]
}
</script>
<style scoped>

.card {
    height: 35vh;
    width: 13vw;
    border-radius: 10px;
    box-shadow: 1.5vh 1.5vh 2vh black, -0.5vh -0.5vh 2vh #343434;
    cursor: pointer;
    transition: 300ms;
}

.card:hover {
    scale: 1.2;
    transition: 300ms;
}
</style>