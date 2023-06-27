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
                        <div class="checkbox">
                            <div class="conteiner-check" v-on:click="checkboxAcao()">
                                <span class="material-icons filtro-acao" v-if="checkAcao == false">
                                    radio_button_unchecked
                                </span>
                                <span class="material-icons filtro-acao" v-if="checkAcao == true">
                                    radio_button_checked
                                </span>
                                Ação
                            </div>
                            <div class="conteiner-check" v-on:click="checkboxComedia()">
                                <span class="material-icons filtro-comedia" v-if="checkComedia == false">
                                    radio_button_unchecked
                                </span>
                                <span class="material-icons filtro-comedia" v-if="checkComedia == true">
                                    radio_button_checked
                                </span>
                                Comédia
                            </div>
                            <div class="conteiner-check" v-on:click="checkboxRomance()">
                                <span class="material-icons filtro-romance" v-if="checkRomance == false">
                                    radio_button_unchecked
                                </span>
                                <span class="material-icons filtro-romance" v-if="checkRomance == true">
                                    radio_button_checked
                                </span>
                                Romance
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="conteiner-geral">
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/viland-saga.png')" nome="Vinland Saga" :sinopse="true"
                    conteudoSinopse="Thorfinn embarca em uma jornada com o assassino de seu pai para se vingar e 
                    terminar sua vida em um duelo como um honrado guerreiro e prestar homenagem a seu pai." classificacao="8.8 / 10" />
                <miniCards :imagem="require('@/assets/boku-no-hero.jpg')" nome="Boku no Hero" :sinopse="true" 
                    conteudoSinopse="Uma criança obsecado pelos heroís está determinado a entrar numa institução 
                    de herois para aprender o que é realmente ser um deles." classificacao="8.3 / 10" />
                <miniCards :imagem="require('@/assets/hells-paradise.jpg')" nome="Hell's Paradise" :sinopse="true" 
                    conteudoSinopse="Um esquadrão de prisioneiros e seus guardas são enviados para investigar uma ilha misteriosa.
                     Eles ficam presos lá e devem confiar um no outro para sobreviver aos misteriosos e monstruosos residentes da ilha." classificacao="8.5 / 10" />
                <miniCards :imagem="require('@/assets/mashle.jpg')" nome="Mashle" :sinopse="true" 
                    conteudoSinopse="Em um mundo de mágicos nasce Mash, um menino que carece de magia, mas é a pessoa mais forte que existe. 
                    Sua existência e destino mudarão seu mundo" classificacao="7.8 / 10" />
                <miniCards :imagem="require('@/assets/one-piece.jpg')" nome="One Piece" :sinopse="true" 
                    conteudoSinopse="Siga as aventuras de Monkey Luffy e seus amigos para encontrar o maior tesouro que o lendário pirata já deixou." classificacao="8.9 / 10" />
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/bleach.png')" nome="Bleach" :sinopse="true"
                    conteudoSinopse="O estudante do colegio, o Kurosaki Ichigo é diferente de qualquer criança comum, porque ele pode ver fantasmas." classificacao="8.2 / 10" />
                <miniCards :imagem="require('@/assets/erased.png')" nome=" Erased" :sinopse="true" 
                    conteudoSinopse="Satoru Fujinuma, é devolvido 18 anos pelo tempo para evitar os eventos que levaram à morte de sua mãe, 
                    que começou com uma série de sequestros no seu quinto ano." classificacao="8.5 / 10"/>
                <miniCards :imagem="require('@/assets/great-pretender.png')" nome=" Great Pretender" :sinopse="true"
                    conteudoSinopse="Um vigarista japonês cruza o caminho de um rival francês e se envolve em conspirações e fraudes além de seus sonhos." classificacao="7.9 / 10"/>
                <miniCards :imagem="require('@/assets/one-punch-man.png')" nome="One Punch Man" :sinopse="true"
                    conteudoSinopse="A história de Saitama, um herói apenas por diversão que pode derrotar seus inimigos com um único soco." classificacao="8.7 / 10"/>
                <miniCards :imagem="require('@/assets/record-of-ragnarok.png')" nome="Record of Ragnarok" :sinopse="true"
                    conteudoSinopse="A cada 1000 anos, o Conselho dos Deuses se reúne para decidir o destino da humanidade. Após 7 milhões de anos de história humana, 
                    os deuses tomam a decisão de que os seres humanos são irredimíveis e devem se extinguir." classificacao="6.4 / 10"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/classroom-elite.jpg')" nome="Class Room of The Elite" :sinopse="true"
                    conteudoSinopse="Quando Kiyotaka entra no ensino médio de elite patrocinado pelo governo, ele descobre o quão
                     baseado no mérito é esse sistema educacional." classificacao="7.7 / 10"/>
                <miniCards :imagem="require('@/assets/deamon-slayer.jpg')" nome="Kimetsu no Yaiba" :sinopse="true" 
                    conteudoSinopse="Uma familia é atacada por demónios, o Tanjiro e sua irmã são os unicos que sobrevivem, ele se volta
                     em assassino de demonios para vingar sua familia." classificacao="8.7 / 10"/>
                <miniCards :imagem="require('@/assets/dragon-ball.jpg')" nome="Dragon Ball Z" :sinopse="true"
                    conteudoSinopse="Depois de descobrir que ele é de outro planeta, Goku e seus amigos são forçados
                     a defendê-lo de um ataque de inimigos extraterrestres." classificacao="8.8 / 10"/>
                <miniCards :imagem="require('@/assets/full-metal.jpg')" nome="Fullmetal Alchemist: Brotherhood" :sinopse="true"
                    conteudoSinopse="Dois irmãos buscam uma pedra filosofal depois que uma tentativa de reviver sua falecida 
                    mãe se desfaz e os deixa em formas físicas danificadas." classificacao="9.1 / 10"/>
                <miniCards :imagem="require('@/assets/toradora.jpg')" nome="Toradora!" :sinopse="true"
                    conteudoSinopse="Toradora conta a história de Ryuji e Taiga ajudando um ao outro a confessar suas paixões." classificacao="8.0 / 10"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/jujutsu-kaisen.jpg')" nome="Jujutsu Kaisen" :sinopse="true" 
                    conteudoSinopse="Um menino engole um talismã maldito e se torna amaldiçoado. Ele entra na escola de um xamã
                     para poder localizar as outras partes do corpo do demônio e assim se exorcizar." classificacao="8.5 / 10"/>
                <miniCards :imagem="require('@/assets/sao.png')" nome=" Sword Art Online" :sinopse="true"
                    conteudoSinopse="No ano de 2022, milhares de pessoas ficam presas em um novo MMORPG, e o lobo solitário, Kirito, luta para escapar." classificacao="7.5 / 10"/>
                <miniCards :imagem="require('@/assets/spy-family.jpg')" nome="Spy x Family" :sinopse="true"
                    conteudoSinopse="Para cumprir uma missão com sucesso, um espião ultrassecreto do mais alto nível precisa formar uma família normal. 
                    Mal sabia ele que sua esposa e filha têm seus próprios segredos e fariam parte dela, uma assassina e uma criança telepata." classificacao="8.4 / 10"/>
                <miniCards :imagem="require('@/assets/hellsing.png')" nome="Hellsing" :sinopse="true"
                    conteudoSinopse="Uma força-tarefa britânica, liderada pela filha do caçador de vampiros Prof. Van Helsing, luta contra o sobrenatural com a ajuda de dois vampiros." classificacao="7.8 / 10"/>
                <miniCards :imagem="require('@/assets/amor-999.png')" nome="Loving Yamada at Lv999!" :sinopse="true"
                    conteudoSinopse="Depois que seu namorado termina com ela por outra garota, Akane Kinoshita decide que vai fazê-lo se arrepender.Inesperadamente, 
                    ela conhece um jogador socialmente desajeitado que pode resolver todos os seus problemas." classificacao="7.7 / 10"/>
            </div>
        </div>

    </div>
</template>
<script>
import miniCards from '@/components/MiniCards.vue'
export default {
    components: {
        miniCards
    },
    data() {
        return {
            checkAcao: false,
            checkComedia: false,
            checkRomance: false
        }
    },
    methods: {
        checkboxAcao() {
            if (this.checkAcao == false) {
                this.checkAcao = true
            } else {
                this.checkAcao = false
            }
        },
        checkboxRomance() {
            if (this.checkRomance == false) {
                this.checkRomance = true
            } else {
                this.checkRomance = false
            }
        },
        checkboxComedia() {
            if (this.checkComedia == false) {
                this.checkComedia = true
            } else {
                this.checkComedia = false
            }
        }
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

.sort,
.tune {
    font-size: 2.5vh;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh;
    width: 10vw;
    justify-content: center;
}

.sort:hover,
.tune:hover {
    background-color: #B2B2B235;
}

.sort-dropdown,
.tune-dropdown {
    display: inline-block;
    position: relative;
}

.sort-dropdown:hover .conteudo-dropdown-sort,
.tune-dropdown:hover .conteudo-dropdown-tune {
    background-color: #B2B2B235;
    transition: 300ms;
    display: block;
}

.conteudo-dropdown-sort,
.conteudo-dropdown-tune {
    display: none;
    position: absolute;
    z-index: 1;
    font-size: 2.5vh;
    letter-spacing: 1px;
    width: 100%;
}

.escrita-dropdown {
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh 0;
}

.escrita-dropdown:hover {
    background-color: #121212;
    transition: 300ms;
}

.titulo {
    cursor: pointer;
    margin-left: 10vw;
    transition: 300ms;
}

.titulo:hover {
    color: #f64348;
    transition: 300ms;
}

.checkbox {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding-bottom: 1vh;
}

.filtro-acao,
.filtro-comedia,
.filtro-romance {
    display: flex;
    align-items: flex-start;
    padding-left: 1vw;
    cursor: pointer;

}

.conteiner-check {
    display: flex;
    gap: 1vh;
    cursor: pointer;
    transition: 300ms;
    padding: 1vh 0;
}

.conteiner-check:hover {
    background-color: #121212;
    transition: 300ms;
}</style>