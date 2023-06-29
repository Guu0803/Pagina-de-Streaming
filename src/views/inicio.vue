<template>
    <div class="tela">
        <div class="conteiner-esquerdo">
            <div class="conteiner-titulo">
                Filmes, séries, animes e
                <div class="muito-mais">
                    muito mais!
                </div>
            </div>
                <div class="descubra">
                    Descubra o que mais te agrada e conheça histórias incríveis em um só lugar
                </div>
                <button>
                    Inciar teste gratuito
                </button>
        </div>
        <div class="conteiner-direito">
        </div>
    </div>
</template>

<script>
export default {
    name: "paginaIncial"
}
</script>

<style scoped>
.tela {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    width: 100%;
    height: 100vh;
}
.conteiner-esquerdo {
    display: flex;
    flex-direction: column;
    gap: 3vw;
    align-items: center;
    margin-left: 5vw;
}
.conteiner-titulo {
    display: flex;
    color: #e8e8e8;
    font-size: 5vh;
    gap: 1vw;
}
.muito-mais {
    color: #f64348;
}
.descubra {
    font-size: 3vh;
    color: #B2B2B2;
}
button {
    font-size: 3vh;
    background-color: #f64348;
    border-radius: 10px;
    padding: 2vh;
    box-shadow: 5px 5px 5px #353535;
    cursor: pointer;
    width: fit-content;
}
.conteiner-direito{
    width: 60vw;
    height: 50vw;
    background-size: cover;
    box-shadow: 30px 30px  70px #1f1f1f inset, -20px -20px 20px 50px #1f1f1f inset ;
    background-image: url("@/assets/mr-robot.jpg");
    background-size: cover;
}
</style>