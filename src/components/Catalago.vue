<template>
    <div class="card">
        {{ texto }}
    </div>
</template>
<script>
export default {
    name: "cardCatalogo",
    props: ["texto"]
}
</script>
<style scoped>
    .card {
        width: 15vw;
        height: 20vh;
        border: 1px solid black;
        background-image: url('@/assets/wallpaper-cards.avif');
        border-radius: 10px;
        box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
        cursor: pointer;
        transition: 200ms;
        display: flex;
        align-items: center;
        font-size: 4vh;
        padding-left:1vw;
    }
    .card:hover {
        color: white;
        transition: 200ms;
        scale: 1.1;
    }
</style>
