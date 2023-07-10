<template>
    <div class="conteiner-card" v-on:click="salvar()">
        <div class="div-teste">
            <!-- :class metodo que esta verificando na pagina inicial se é verdadeiro ou não a condição e retornando uma classe -->
            <img :src="imagem" class="card" :class="checarScale()">
            <!-- Fim -->
            <div v-if="sinopse == true" class="teste">
                <div class="classificacao">
                    {{ classificacao }}
                    <span class="material-icons estrela">
                        star_rate
                    </span>
                </div>
                <div class="categoria-conteiner">
                    <div class="categoria" >
                        {{categoria1}}
                    </div>
                    <span class="material-icons dot">
                        fiber_manual_record
                    </span>
                    <div class="categoria">
                        {{categoria2}}
                    </div>
                    <span class="material-icons dot" v-if="categoria3">
                        fiber_manual_record
                    </span>
                    <div class="categoria">
                        {{categoria3}}
                    </div>
                </div>
                {{ conteudoSinopse }}
            </div>
        </div>
        <div class="info-card">
            {{ nome }}
        </div>
    </div>
</template>
<script>
export default {
    name: "miniCardsComponent",
    props: ["imagem", "nome", "sinopse", "conteudoSinopse", "classificacao", "scale", "categoria1", "categoria2", "categoria3", "sinopseCompleta","duracaoFilme", "faixaEtaria","bannerWallpaper"],
    methods: {
        checarScale() {
            if (this.scale == true) {
                return "card-scale"
            }
        },
        salvar() {
            let informarcoes = {
                name: this.nome,
                sinopse: this.sinopseCompleta,
                duracao:this.duracaoFilme,
                faixaEtaria: this.faixaEtaria,
                banner:this.bannerWallpaper,
                categoriaPrimaria:this.categoria1,
                categoriaSecundaria: this.categoria2,
                categoriaTerceciaria: this.categoria3
            }
            informarcoes = JSON.stringify(informarcoes)
            localStorage.setItem("info", informarcoes)
            this.$router.push("/detalhe-titulo")
        }
    }
}
</script>
<style scoped>
.conteiner-card {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.div-teste {
    position: relative;
}

.card {
    height: 40vh;
    width: 14vw;
    border-radius: 10px;
    box-shadow: 1.5vh 1.5vh 2vh black, -0.5vh -0.5vh 2vh #343434;
    cursor: pointer;
    transition: 300ms ease-in-out;
}

.card-scale:hover {
    scale: 1.2;
    transition: 300ms ease-in-out;
}

.info-card {
    text-align: center;
    margin-top: 2vw;
    color: #B2B2B2;
    cursor: pointer;
    width: fit-content;
    transition: 300ms;
}

.info-card:hover {
    color: #f64348;
    transition: 300ms;
}

.teste {
    visibility: hidden;
    transition: 100ms ease-in-out;
    display: flex;
    text-align: center;
    padding: 10% 0;
    flex-direction: column;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    height: 85%;
    width: 100%;
    border-radius: 10px;
    color: #e8e8e8;
    cursor: pointer;
    font-size: 2vh;
}

.div-teste:hover>.teste {
    visibility: visible;
    transition: 100ms ease-in-out;
}

.div-teste:hover~.info-card {
    color: #f64348;
    transition: 100ms ease-in-out;
}
.dot {
    font-size: 1.5vh;
    color: #B2B2B2;
}
.categoria-conteiner{
    display: flex;
    color: #B2B2B2;
    align-items: center;
    justify-content: center;
    gap: 0.5vh;
    margin: 2vh 0;
}
.categoria:hover {
    color: #f64348;
} 
.classificacao {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vh 0;
}

.estrela {
    color: #DAA520;
    font-size: 3vh;
}
</style>



