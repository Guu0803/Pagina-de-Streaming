<template>
    <div class="tela">
        <div class="banner">
            <span class="material-icons seta-voltar">
                reply
            </span>
            <div class="titulo">
                {{informarcoes.name}}
                <span class="material-icons play">
                    play_arrow
                </span> 
            </div>
            <div class="info">
                <div>
                    2h49 min
                </div>
                <div>
                    <img src="@/assets/pegi-10.png">
                </div>
                <div>
                    Full HD
                </div>
            </div>
        </div>
        <div class="sinopse">
           {{ informarcoes.sinopse }}
        </div>
    </div>
</template>
<script>
export default {
    name: "detalheTitulo",
    data() {
        return {
            informarcoes: {}
        }
    },
    created() {
        let informarcoesSalva = localStorage.getItem("info")
        informarcoesSalva = JSON.parse(informarcoesSalva) 
        this.informarcoes = informarcoesSalva
    }
}
</script>
<style scoped>
.tela {
    width: 100%;
}

.banner {
    background-image: url('@/assets/interstelar-wallpaper.jpg');
    height: 90vh;
    background-size: cover;
    color: #e8e8e8;
    box-shadow: inset 10px -120px 40px #1f1f1f, inset -10px -70px 40px #1f1f1f;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;
}

.seta-voltar {
    position: absolute;
    top: 0;
    left: 1vw;
    font-size: 7vh;
    cursor: pointer;
    transition: 200ms;
}

.seta-voltar:hover {
    color: #1f1f1f80;
    transition: 200ms;
}

.titulo {
    font-size: 8vh;
    position: absolute;
    bottom: 4vw;
    left: 8vw;
    display: flex;
    align-items: center;
    gap: 2vw;
}
.play {
    font-size: 9vh;
    cursor: pointer;
}
.info {
    display: flex;
    align-items: center;
    gap: 2vw;
    width: fit-content;
    position: absolute;
    bottom: 1.8vw;
    left: 9vw;
    font-size: 3vh;
}
.sinopse {
    width: 70%;
    color: #e8e8e8;
    font-size: 3vh;
    margin-left: 9vw;
    text-align: justify;
}

</style>