<template>
    <div class="tela">
        <div class="conteiner-banner">
            <div class="conteiner-esquerdo">
                <div class="conteiner-titulo">
                    Filmes, séries, animes e
                    <div class="muito-mais">
                        muito mais!
                    </div>
                </div>
                <div class="descubra">
                    Descubra um universo de entretenimento ilimitado com nossa assinatura de streaming.
                    Junte-se à nossa comunidade apaixonada, experimente gratuitamente e desfrute de uma transmissão
                    impecável.
                </div>
                <div class="conteiner-botao">
                    <button>
                        Inciar teste gratuito
                    </button>
                    <div>
                        Já e cadastrado?
                    </div>
                    <button>
                        Faça Login
                    </button>
                </div>
            </div>
            <div class="banner">
            </div>
        </div>
        <div class="conteiner-planos">
            Confira nossos planos!
            <div class="planos">
                <planos plano="Plano Mensal" preco="R$ 25,90" />
                <planos plano="Plano Trimestral" descricao="Por R$ 21,99 / mês" preco="R$ 65,99" />
                <planos plano="Plano Semestral" descricao="Por R$ 19,99 / mês" preco="R$ 119.99" />
                <planos plano="Plano Anual" descricao="Por R$ 15,99 / mês" preco="R$ 191,99" />
            </div>
            <div class="info-planos">
                *todos os planos são renovados automaticamente, cancele quando quiser.
            </div>
            <div style="font-size: 3.5vh;">
                Incluso:
            </div>
            <div class="conteiner-descricao">
                <div class="descricao">
                    <div>
                        <span class="material-icons dots">
                            fiber_manual_record
                        </span>
                        Conteúdo em alta definição e qualidade 4K.
                    </div>
                    <div>
                        <span class="material-icons dots">
                            fiber_manual_record
                        </span>
                        Download das suas séries e filmes favoritos, <br>
                        assista onde e quando quiser.
                    </div>
                </div>
                <div class="descricao">
                    <div>
                        <span class="material-icons dots">
                            fiber_manual_record
                        </span>
                        Até 5 telas simultaneamente.
                    </div>
                    <div>
                        <span class="material-icons dots">
                            fiber_manual_record
                        </span>
                        Crie até 5 perfis diferentes.
                    </div>
                </div>
            </div>
        </div>
        <div class="conteiner-banner-secundario">
            <div class="banner-secundario">
            </div>
            <div class="descricao-banner-secundario">
                <div class="titulo-banner-secundario">
                    Não perca tempo e junte-se a nós
                    <div style="color:#f64348 ;">
                        agora mesmo!
                    </div>
                </div>
                E comece a explorar um universo infinito de filmes e séries,
                mergulhe em histórias envolventes e desfrute de momentos inesquecíveis de entretenimento.
            </div>
        </div>

    </div>
</template>

<script>
import planos from '@/components/cardPlanos.vue';
export default {
    name: "paginaIncial",
    components: {
        planos
    }
}
</script>

<style scoped>
.tela {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vw;
    padding-top: 4vw;
}

.conteiner-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
}

.conteiner-esquerdo {
    display: flex;
    flex-direction: column;
    gap: 3vw;
    align-items: center;
    z-index: 1;
    max-width: 43vw;
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
    color: #e8e8e8;
}

.conteiner-botao {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    align-items: center;
    color: #e8e8e8;
    font-size: 2vh;
}

button {
    font-size: 3vh;
    background-color: #f64348;
    border-radius: 10px;
    padding: 2vh;
    cursor: pointer;
    width: fit-content;
    font-weight: bold;
    color: #282828;
    transition: 200ms ease-in-out;
    border: none;
    font-family: 'Karla', sans-serif;

}

button:hover {
    color: #e8e8e8;
    transition: 200ms ease-in-out;
}

.banner {
    width: 60vw;
    height: 37vw;
    background-size: cover;
    box-shadow: 60px 50px 40px #1f1f1f inset, -10px -10px 25px 25px #1f1f1f inset;
    background-image: url("@/assets/banner-inicio.png");
    margin-left: -10vw;
}
.banner-secundario {
    background-image: url("@/assets/banner2.png");
    background-size: cover;
    width:57vw;
    height: 65vh;
    margin-left: 4vh;
    box-shadow: 10px 10px 25px 15px #1f1f1f inset, -55px -50px 50px #1f1f1f inset;
}
.conteiner-banner-secundario {
    display: flex;
    align-items: center;
}
.titulo-banner-secundario {
    font-size: 4.4vh;
    display: flex;
    gap: 1vh;
    margin-bottom: 2vw;
}
.descricao-banner-secundario{
    color: #e8e8e8;
    z-index: 1;
    max-width: 48vw;
    text-align: center;
    font-size: 3vh;
    margin-left: -2vw;
}
.conteiner-planos {
    width: 100%;
    text-align: center;
    color: #e8e8e8;
    font-size: 5vh;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    background-image: linear-gradient(to bottom, #181818, #1b1b1b);
    padding: 2vw 0;
}

.planos {
    display: flex;
    justify-content: center;
    gap: 4vw;
    margin-top: 3vw;
}

.info-planos {
    font-size: 2vh;
}

.conteiner-descricao {
    display: flex;
    font-size: 2.5vh;
    justify-content: center;
    align-items: flex-start;
    gap: 10vw;
}

.dots {
    font-size: 2vh;
    color: #f64348;
}

.descricao {
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

</style>