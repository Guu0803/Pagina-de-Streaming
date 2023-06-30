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
                Descubra um universo de entretenimento ilimitado com nossa assinatura de streaming.
                Junte-se à nossa comunidade apaixonada, experimente gratuitamente e desfrute de uma transmissão impecável.
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
    z-index: 1;
    max-width: 40vw;
    text-align: center;

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
    background-color: #B2B2B2;
    border-radius: 10px;
    padding: 2vh;
    cursor: pointer;
    width: fit-content;
    font-weight: bold;
    color: #282828;
    transition: 200ms ease-in-out;
    border: none;
}
button:hover {
    color: #e8e8e8;
    background-color: #f64348;
    box-shadow: 5px 5px 10px #B2B2B2;
    transition: 200ms ease-in-out;
}
.conteiner-direito {
    width: 60vw;
    height: 35vw;
    background-size: cover;
    box-shadow: 60px 50px 40px #1f1f1f inset, -20px -50px 40px #1f1f1f inset;
    background-image: url("@/assets/banner-inicio.jpeg");
    margin-left: -10vw;

}</style>