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
        color: black;
        background-image: url('@/assets/wallpaper-cards.avif');
        border-radius: 10px;
        cursor: pointer;
        transition: 200ms;
        display: flex;
        align-items: center;
        font-size: 4vh;
        padding-left:1vw;
        text-decoration: none;
        transition: 200ms ease-in-out;
    }
    .card:hover {
        color: #e8e8e8;
        transition: 200ms ease-in-out;
        scale: 1.1;
    }
</style>
