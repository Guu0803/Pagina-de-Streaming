<template>
    <div class="tela">
        <div class="conteiner-filtro-titulo">
            <div class="titulo">
                Séries
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
                <!-- Cada component minicard esta recebendo uma prop, "nome", ":sinopse (se for verdadeiro, ao passar o mouse em cima exibira a sinopse)", 
                "conteudoSinopse (a sinopse em si)", "classificação" e a "categoria" -->
                <miniCards :imagem="require('@/assets/the-witcher.jpg')" nome="The Withcer"  :sinopse="true" 
                    conteudoSinopse="Geralt de Rivia, um caçador de monstros, luta contra um mundo onde as vezes as pessoas são mais temidas do
                    que as bestas." classificacao="8.1 / 10" categoria1="Ação" categoria2="Aventura" categoria3="Drama"/>
                <miniCards :imagem="require('@/assets/casa-de-papel.jpg')" nome="La Casa de Papel" :sinopse="true"
                    conteudoSinopse="Um grupo de ladrões peculiares assaltam a Fábrica de Moneda e Timbre para realizar o assalto mais
                    perfeito da história da Espanha e levar para casa bilhões de euros." classificacao="8.2 / 10"  categoria1="Ação" categoria2="Policial" categoria3="Drama"/>
                <miniCards :imagem="require('@/assets/house.jpg')" nome="House" :sinopse="true"
                    conteudoSinopse="Um médico antisocial faz o que seja para resolver os casos mas difíceis que se encontra com a ajuda
                    do equipe de médicos." classificacao="8.7 / 10"  categoria1="Drama" categoria2="Mistério" categoria3=""/>
                <miniCards :imagem="require('@/assets/mr-robot.jpg')" nome="Mr. Robot: Sociedade Hacker" :sinopse="true" 
                    conteudoSinopse="Elliot, um jovem engenheiro de segurança cibernética e hacker vigilante, 
                    torna-se uma figura chave em um jogo de domínio global quando ele e seus aliados tentam derrubar a 
                    corporação para a qual ele trabalha." classificacao="8.5 / 10"  categoria1="Policial" categoria2="Drama" categoria3="Suspense"/>
                <miniCards :imagem="require('@/assets/prison-break.jpg')" nome="Prison Break" :sinopse="true" 
                    conteudoSinopse="Por conspiraçao política um homem inocente é levado para prisão, sua única esperança é seu irmão, 
                    quem deliberadamente se leva á mesma prisão para escapar da prisão o dois juntos." classificacao="8.3 / 10"  categoria1="Ação" categoria2="Policial" categoria3="Drama"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/citadel.jpg')" nome="Citadel" :sinopse="true"     
                    conteudoSinopse="A agência global de espionagem Citadel foi fechada e as memórias de seus agentes foram apagadas. 
                    Manticore agora fica mais forte. Os agentes da Cidadela conseguirão recuperar suas memórias e revidar?" classificacao="6.1 / 10 "  categoria1="Ação" categoria2="Drama" categoria3="Suspense"/>
                <miniCards :imagem="require('@/assets/strain.png')" nome="Strain" :sinopse="true"   
                    conteudoSinopse="Um misterioso vírus com características de uma antiga e maligna estirpe de vampirismo 
                    está assolando a cidade de Nova York." classificacao="7.3 / 10"  categoria1="Drama" categoria2="Fantasia" categoria3="Terror"/>
                <miniCards :imagem="require('@/assets/moon-night.jpg')" nome="Cavaleiro da Lua" :sinopse="true"
                    conteudoSinopse="Marc Spector, um ex-agente da CIA, recebe uma segunda chance de vida do Deus egípcio Khonshu, 
                    que canaliza o poder da lua para se tornar seu avatar na Terra." classificacao="7.3 / 10"  categoria1="Ação" categoria2="Aventura" categoria3="Fantasia"/>
                <miniCards :imagem="require('@/assets/fauda.jpg')" nome="Fauda" :sinopse="true"
                    conteudoSinopse="Histórias humanas, vistas de ambos os lados do conflito Israel-Palestina." classificacao="8.3 / 10"  categoria1="Ação" categoria2="Drama" categoria3="Suspense"/>
                <miniCards :imagem="require('@/assets/bodyguard.jpg')" nome="Segurança em jogo" :sinopse="true"
                    conteudoSinopse="Uma série de suspense que envolve a realeza e o departamento de proteção especial da polícia de Londres." classificacao="8.1 / 10"  categoria1="Policial" categoria2="Drama" categoria3="Suspense"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/halo.png')" nome="Halo" :sinopse="true"
                    conteudoSinopse="Os extraterrestres ameaçam a existência humana em um confronto épico do século 26." classificacao="7.2 / 10"  categoria1="Ação" categoria2="Aventura" categoria3="Ficção"/>
                <miniCards :imagem="require('@/assets/peaky-blinders.png')" nome="Peaky Blinders" :sinopse="true"
                    conteudoSinopse="Depois de servir no Exército, Thomas Shelby e seus irmãos voltam para controlar a cidade, mas,
                    conforme as ambições de Shelby se estendem, ele planeja construir seu próprio negócio e impedir qualquer um que atrapalhe." classificacao="8.8 / 10"  categoria1="Policial" categoria2="Drama" />
                <miniCards :imagem="require('@/assets/ted-lasso.png')" nome="Ted Lasso" :sinopse="true"
                    conteudoSinopse="Segue o treinador americano de futebol Ted Lasso, que chega ao Reino Unido para
                    liderar um time da primeira divisão ao topo do futebol britânico." classificacao="8.8 / 10"  categoria1="Comédia" categoria2="Drama" categoria3="Esportes"/>
                <miniCards :imagem="require('@/assets/sweet-tooth.png')" nome="Sweet Tooth" :sinopse="true"
                    conteudoSinopse="Um rapaz que é meio humano e meio veado sobrevive num mundo pós-apocalíptico com outros híbridos." classificacao="7.8 / 10"  categoria1="Ação" categoria2="Drama" categoria3="Aventura"/>
                <miniCards :imagem="require('@/assets/loki.png')" nome="Loki" :sinopse="true"
                    conteudoSinopse="O vilão Loki reempreende seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de Vingadores: Ultimato." classificacao="8.2/ 10"  categoria1="Ação" categoria2="Aventura" categoria3="Fantasia"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/walking-dead.png')" nome="Walking Dead" :sinopse="true"
                    conteudoSinopse="Um Xerife acorda de um coma para dar-se conta que o mundo está em ruínas, 
                    e deve liderar um grupo de sobreviventes para se manter vivo." classificacao="8.1 / 10"  categoria1="Drama" categoria2="Terror" categoria3="Suspense"/>
                <miniCards :imagem="require('@/assets/origem.jpg')" nome="Origem" :sinopse="true"
                    conteudoSinopse="Desvenda o mistério de uma cidade na América Central que aprisiona todos os que entram. 
                    Enquanto os residentes lutam para manter uma sensação de normalidade e buscar uma saída, 
                    eles também devem sobreviver às ameaças da floresta ao redor." classificacao="7.7 / 10"  categoria1="Drama" categoria2="Terror" categoria3="Mistério" />
                <miniCards :imagem="require('@/assets/stranger-things.jpg')" nome="Stranger Things" :sinopse="true"
                    conteudoSinopse="Depois do desaparecimento de un menino, sua mãe, um chefe de polícia
                     e seus amigos precisam enfrentar forças aterrorizantes para trazê-lo de volta." classificacao="8.7 / 10"  categoria1="Terror" categoria2="Suspense" categoria3="Sobrenatural" />
                <miniCards :imagem="require('@/assets/what-if.png')" nome="What if...?" :sinopse="true"
                    conteudoSinopse="Explorando momentos cruciais do Universo do Cinema da Marvel, levando o público ao território desconhecido." classificacao="7.4 / 10"  categoria1="Ação" categoria2="Aventura" />
                <miniCards :imagem="require('@/assets/roda-do-tempo.png')" nome="Roda do Tempo" :sinopse="true" 
                    conteudoSinopse="Situada em um mundo de alta fantasia onde a magia existe, mas apenas alguns podem acessá-la, 
                    uma mulher chamada Moiraine cruza o caminho com cinco rapazes e moças. Isso desencadeia uma jornada perigosa por todo o mundo." classificacao="7.1 / 10"  categoria1="Fantasia" categoria2="Drama" categoria3="Aventura"/>
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
        // Essa function está mudando o checkbox pois usei uma img, entao ele esta trocando da img checada para nao checada
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
        // Fim
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
    gap: 10vh;
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
}
</style>