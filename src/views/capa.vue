<template>
    <div class="tela-fundo">
        <img src="@/assets/buraco.jpg"  class="logo">

    </div>
</template>
<script>
export default {
    name: "capa-pagina"
}
</script>
<style scoped>
    .tela-fundo{
        background-color:#121212;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .logo {
        width: 30vw;
    }

</style>