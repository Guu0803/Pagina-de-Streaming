<template>
    <div class="botaoConteiner">
        <div class="botaoAcao">
            {{ text }}
        </div>
    </div>
</template>
<script>
export default {
    name: "BotoesAcao",
    props: ["text"]

}
</script>
<style scoped>

.botaoConteiner {
    padding-bottom: 3vh;
    display: flex;
    justify-content: center;
}

.botaoAcao {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
    border-radius: 2vh;
    padding: 1vh;
    width: 20vw;
    border: none;
    text-align: center;
    background-color: #AC2E32;
}

.botaoAcao:hover {
    cursor: pointer;
    background-color:  #f64348;
    transition: 300ms;
}

</style>