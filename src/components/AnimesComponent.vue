<template>
    <div class="tela">
        <div class="conteiner-filtro-titulo">
            <div class="titulo">
                Animes
            </div>
            <div class="conteiner-filtro">
                <div class="sort-dropdown">
                    <div class="sort">
                        <span class="material-icons">
                            sort
                        </span>
                        Populares
                    </div>
                    <div class="conteudo-dropdown-sort">
                        <div class="escrita-dropdown">
                            Mais Populares
                        </div>
                        <div class="escrita-dropdown">
                            Mais Recentes
                        </div>
                        <div class="escrita-dropdown">
                            Ordem Alfabéitca
                        </div>
                    </div>
                </div>
                <div class="tune-dropdown">
                    <div class="tune">
                        <span class="material-icons">
                            tune
                        </span>
                        Filtro
                    </div>
                    <div class="conteudo-dropdown-tune">
                        <div>
                            Gênero
                        </div>
                        <div>
                            <input type="checkbox"> Ação <br>
                            <input type="checkbox"> Romance <br>
                            <input type="checkbox"> Comédia
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="conteiner-geral">
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/viland-saga.png')" />
                <miniCards :imagem="require('@/assets/boku-no-hero.jpg')" />
                <miniCards :imagem="require('@/assets/hells-paradise.jpg')" />
                <miniCards :imagem="require('@/assets/mashle.jpg')" />
                <miniCards :imagem="require('@/assets/one-piece.jpg')" />
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/bleach.png')" />
                <miniCards :imagem="require('@/assets/erased.png')" />
                <miniCards :imagem="require('@/assets/great-pretender.png')" />
                <miniCards :imagem="require('@/assets/one-punch-man.png')" />
                <miniCards :imagem="require('@/assets/record-of-ragnarok.png')" />
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/classroom-elite.jpg')" />
                <miniCards :imagem="require('@/assets/deamon-slayer.jpg')" />
                <miniCards :imagem="require('@/assets/dragon-ball.jpg')" />
                <miniCards :imagem="require('@/assets/full-metal.jpg')" />
                <miniCards :imagem="require('@/assets/toradora.jpg')" />
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/jujutsu-kaisen.jpg')" />
                <miniCards :imagem="require('@/assets/sao.png')" />
                <miniCards :imagem="require('@/assets/spy-family.jpg')" />
                <miniCards :imagem="require('@/assets/hellsing.png')" />
                <miniCards :imagem="require('@/assets/amor-999.png')" />
            </div>
        </div>

    </div>
</template>
<script>
import miniCards from '@/components/MiniCards.vue'
export default {
    components: {
        miniCards
    }
}
</script>
<style scoped>
.tela {
    padding: 3vw;
}

.conteiner-geral {
    margin: 5vw;
    display: flex;
    flex-direction: column;
    gap: 20vh;
    align-items: center;
}

.fileira-cards {
    display: flex;
    gap: 3vw;
}

.conteiner-filtro-titulo {
    display: flex;
    color: #B2B2B2;
    font-size: 4vh;
    justify-content: space-between;
    margin-bottom: 10vw;
}

.conteiner-filtro {
    display: flex;
    gap: 2vw;
    font-size: 3vh;
    align-items: center;
}

.sort {
    font-size: 2.5vh;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh;
    width: 12vw;
    justify-content: center;
}
.tune { 
    font-size: 2.5vh;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh;
    width: 8vw;
    justify-content: center;
}
.sort:hover, .tune:hover {
    background-color: #B2B2B235;
}

.sort-dropdown, .tune-dropdown {
    display: inline-block;
    position: relative;
}
.tune-dropdown {
    display: inline-block;
    position: relative;
}
.sort-dropdown:hover .conteudo-dropdown-sort  {
    background-color: #B2B2B235;
    transition: 300ms;
    display: block;
}
.tune-dropdown:hover .conteudo-dropdown-tune  {
    background-color: #B2B2B235;
    transition: 300ms;
    display: block;
}
.conteudo-dropdown-sort, .conteudo-dropdown-tune {
    display: none;
    position: absolute;
    z-index: 1;
    font-size: 2.5vh;
    letter-spacing: 1px;
}

.escrita-dropdown {
    text-align: center;
    width: 13vw;
    cursor: pointer;
    padding: 1vh 0;
    transition: 300ms;
}

.escrita-dropdown:hover {
    background-color: #121212;
    transition: 300ms;

}

.titulo {
    cursor: pointer;
}
</style>