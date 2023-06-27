<template>
    <div class="conteiner-card">
        <!-- :class metodo que esta verificando na pagina inicial se e verdadeiro ou nao a condicao e retornando uma classe -->
        <img :src="imagem" class="card" :class="checarScale()">
        <!-- Fim -->
        <div class="info-card">
            {{ nome }}
        </div>
        <div v-if="sinopse == true" class="teste">
            <div class="titulo-sinopse">
                {{ nome }}
            </div>
            <div class="classificacao">
                {{ classificacao }}
                <span class="material-icons estrela">
                    star_rate
                </span>
            </div>
            {{ conteudoSinopse }}
        </div>
    </div>
</template>
<script>
export default {
    name: "miniCardsComponent",
    props: ["imagem", "nome", "sinopse", "conteudoSinopse", "classificacao","scale"],
    methods: {
        checarScale () {
            if(this.scale == true) {
            return "card-scale"
            }
        }
    }
}
</script>
<style scoped>
.conteiner-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.card {
    height: 40vh;
    width: 14vw;
    border-radius: 10px;
    box-shadow: 1.5vh 1.5vh 2vh black, -0.5vh -0.5vh 2vh #343434;
    cursor: pointer;
    transition: 300ms;
}
.card-scale:hover  {
    scale: 1.2;
    transition: 300ms;
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

.conteiner-card:hover>.info-card {
    color: #f64348;
    transition: 300ms;
}


.teste {
    visibility: hidden;
    transition: 100ms;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    height: 100%;
    max-width: 100%;
    border-radius: 10px;
    color: #e8e8e8;
    text-align: center;
    padding: 1vh;
    cursor: pointer;

}

.conteiner-card:hover>.teste {
    visibility: visible;
    transition: 100ms;
    
}

.titulo-sinopse {
    color: #e8e8e8;
}

.classificacao {
    display: flex;
    justify-content: center;
    margin: 1vw 0;
}

.estrela {
    color: #DAA520;
}</style>



