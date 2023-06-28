<template>
    <div class="tela">
        <div class="conteiner-filtro-titulo">
            <div class="titulo">
                Filmes
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
                "conteudoSinopse (a sinopse em si)" e "classificação" -->
                <miniCards :imagem="require('@/assets/interstelar.jpg')" nome="Interstelar" :sinopse="true"
                    conteudoSinopse="Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade." classificacao="8.7 / 10"/>
                <miniCards :imagem="require('@/assets/espaço-entre-nos.jpg')" nome="Espaço Entre Nós" :sinopse="true"
                    conteudoSinopse="O primeiro humano nascido em Marte viaja para a Terra pela primeira vez e experimenta o planeta com um olhar refrescante. 
                Juntamente com um novo amigo, ela embarca em uma aventura para descobrir sua origem" classificacao="6.4 / 10"/>
                <miniCards :imagem="require('@/assets/vida-inseto.jpg')" nome="Vida de Inseto" :sinopse="true" 
                    conteudoSinopse="Uma formiga desajustada, à procura de guerreiros para salvar sua colônia de gananciosos grilos, recruta um grupo de 
                    criaturas que se revelam uma inepta companhia de circo." classificacao="7.2 / 10"/>
                <miniCards :imagem="require('@/assets/card-shang-chi.jpg')" nome="Shang-Chi: A Lenda dos Dez Anéis" :sinopse="true"
                    conteudoSinopse="Shang-Chi é obrigado a confrontar um passado que julgava ter deixado para trás quando é atraído à teia da misteriosa
                     organização conhecida como os Dez Anéis." classificacao="7.4 / 10"/>
                <miniCards :imagem="require('@/assets/assim-na-terra.jpg')" nome="Assim na Terra como no Inferno" :sinopse="true" 
                    conteudoSinopse="Um grupo de arqueólogos procura um artefacto místico nas catacumbas de Paris. Mas aquele local, revelará um segredo 
                    que vai mexer com a mente de todos, fazendo os demónios pessoais de cada um voltarem para os assombrar." classificacao="6.4 / 10"/>
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/baleia.png')" nome="A Baleia" :sinopse="true" 
                    conteudoSinopse="Um professor de inglês recluso que vive com obesidade severa tenta se reconectar com sua distante filha adolescente
                    para uma última chance de redenção." classificacao="7.7 / 10"/>
                <miniCards :imagem="require('@/assets/avatar.png')" nome="Avatar" :sinopse="true" 
                    conteudoSinopse="Um militar paraplégico despachado para a lua Pandora em uma missão única fica dividido entre seguir suas ordens e
                    proteger o mundo que ele sente ser sua casa." claissificacao="7.9 / 10"/>
                <miniCards :imagem="require('@/assets/creed-3.jpg')" nome="Creed 3"  :sinopse="true"
                    conteudoSinopse="Adonis prospera em sua carreira e vida familiar, mas quando um amigo de infância e ex-prodígio do boxe ressurge, 
                    o confronto é mais do que apenas uma luta" classificacao="6.8 / 10"/>
                <miniCards :imagem="require('@/assets/enrolados.png')" nome="Enrolados" :sinopse="true" 
                    conteudoSinopse="Rapunzel passou toda a sua vida em uma torre, mas agora que um ladrão fugitivo a tropeçou, ela está prestes a 
                    descobrir o mundo pela primeira vez e quem ela realmente é." classificacao="7.7 / 10"/>
                <miniCards :imagem="require('@/assets/eternos.png')" nome="Eternos" :sinopse="true"
                    conteudoSinopse="A saga dos Eternos, uma raça de seres imortais que viveram na Terra e transformaram sua historia e civilização." classificacao="6.3 / 10"/>     
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/kingsman-origem.png')" nome="Kingsman: A Origem"  :sinopse="true"
                    conteudoSinopse="Nos primeiros anos do século 20, a agência Kingsman é formada para enfrentar uma cabala que planeja uma guerra para eliminar milhões." classificacao=" 6.3 / 10"/>
                <miniCards :imagem="require('@/assets/maquinas-mortais.jpg')" nome="Máquinas Mortais"  :sinopse="true"
                    conteudoSinopse="Em um mundo pós-apocalíptico, onde as cidades viajam sobre rodas e consomem umas às outras para sobreviver, 
                    duas pessoas se reúnem em Londres e tentam impedir uma conspiração." classificacao="6.1 / 10"/>
                <miniCards :imagem="require('@/assets/panico-6.png')" nome="Pânico 6" :sinopse="true"
                    conteudoSinopse="Os sobreviventes dos assassinatos de Ghostface deixam Woodsboro para trás e iniciam um novo capítulo na cidade de Nova York." classificacao="6.6 / 10"/>
                <miniCards :imagem="require('@/assets/super-velozes.png')" nome="Super Velozes, Mega Furiosos"  :sinopse="true"
                    conteudoSinopse="Um policial disfarçado se junta a uma gangue de corredores de rua e criminosos para se aproximar do chefe do crime de Los Angeles." classificacao="4.1 / 10"/>
                <miniCards :imagem="require('@/assets/venon-2.png')" nome="Venom: Tempo de Carnificina"  :sinopse="true"
                    conteudoSinopse="O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, 
                    descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados." classificacao="5.9 / 10"/>               
            </div>
            <div class="fileira-cards">
                <miniCards :imagem="require('@/assets/esposa-mentira.jpg')" nome="Esposa de Mentirinha" :sinopse="true"
                    conteudoSinopse="Numa viagem durante o fim de semana, um médico convençe a sua assistente de fingir ser a ex esposa dele para cubrir a mentira que diz para sua namorada." classificacao="6.4 / 10"/>
                <miniCards :imagem="require('@/assets/homem-aranha-2.png')" nome="Espetacular Homem-Aranha 2" :sinopse="true"
                    conteudoSinopse=" Quando Nova Iorque está em assédio por Oscorp, o Homem-Aranha deberá salvar a cidade é proteger a seus amados." classificacao="6.6 / 10"/>
                <miniCards :imagem="require('@/assets/a-morte-do-demonio.png')" nome="A Morte do Demônio: A Ascensão" :sinopse="true"
                    conteudoSinopse="Beth visita sua irmã mais velha, ella, que está criando 3 filhos em um apartamento apertado em Los Angeles. 
                    Sua reunião é curta quando eles encontram um livro demoníaco, The Necronomicon Ex-Mortis." classificacao="6.7 / 10"/>
                <miniCards :imagem="require('@/assets/no-aranhaverso.png')" nome="Homem Aranha: No Aranhaverso" :sinopse="true"
                    conteudoSinopse="Um jovem se torna o Homem Aranha de sua realidade, cruzando seu caminho com cinco colegas de outras dimensões para impedir uma ameaça a todas as realidades." classificacao="8.4 / 10"/>
                <miniCards :imagem="require('@/assets/ghosted.png')" nome="Ghoted: Sem Resposta" :sinopse="true"
                    conteudoSinopse="O corretíssimo Cole se apaixona pela enigmática Sadie, porém, enfrenta a descoberta de que ela é uma agente secreta.Antes que eles 
                    possam decidir se terão ou não um segundo encontro, Cole e Sadie são arrastados para uma aventura internacional para salvar o mundo" classificacao="5.8 / 10"/>
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
}
</style>