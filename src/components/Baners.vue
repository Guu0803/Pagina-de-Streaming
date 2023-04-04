<template>
    <div class="conteiner-banner">
        <div class="banner">
        <span class="material-icons seta-voltar">
            arrow_back_ios
        </span>
        <div>
            <div class="titulo-banner">
                The Last of Us
            </div>

            <div class="conteiner-reproduzir">
                <span class="material-icons botao-banner">
                    play_circle_filled
                </span>
                Reproduzir
                <span class="material-icons botao-info">
                    info
                </span>
            </div>
        </div>
        <span class="material-icons seta-proximo">
            arrow_forward_ios
        </span>
    </div>
    </div>
    
</template>
<script>

export default {
    name: "banerComponent",
}
</script>
<style>
.conteiner-banner {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 4vh;
}

.banner {
    background-image: url(@/assets/the-last-of-us.jpg);
    background-size: cover;
    height: 70vh;
    width: 95vw;
    display: flex;
    border-radius: 5px;
    color: white;
    align-items: center;
    box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
    cursor: pointer;

}

.titulo-banner {
    font-size: 9vh;
    margin-left: 10vh;
}

.conteiner-reproduzir {
    font-size: 3.5vh;
    margin-left: 6vw;
    padding-top: 3vh;
    display: flex;
    align-items: center;
}

.botao-banner {
    font-size: 5vh;
    margin-right: 0.5vw;
    line-height: 6vh;
    transition: 300ms;
}

.botao-banner:hover {
    cursor: pointer;
    color: #404040;
    transition: 300ms;
    scale: 1.4;
}

.botao-info {
    margin-left: 2vw;
    font-size: 3vh;
}

.botao-info:hover {
    cursor: pointer;
    color: #404040;
    transition: 300ms;
}

.seta-voltar {
    position: absolute;
    left: 3.3vw;
    font-size: 6vh;
}

.seta-proximo {
    position: absolute;
    right: 3vw;
    font-size: 6vh;
}
</style>