<template>
    <div class="conteiner-big-cards">
        <img :src="imagemGrande" class="big-card">
        
    </div>
</template>
 <script>
 export default {
    name:"cardsComponents",
    props:["imagemGrande"]
 }
</script>
<style>
.conteiner-big-cards {
    display: flex;
    justify-content: center;
    gap: 2vw;
}
.conteiner-big-cards:hover :not(:hover) {
    opacity: 0.4;
}
.big-card {
    height: 65vh;
    width: 25vw;
    border-radius: 10px;
    box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
    cursor: pointer;
    transition: 300ms;
}
.big-card:hover {
    scale: 1.1;
    transition: 300ms;
}
</style>