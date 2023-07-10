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
                "conteudoSinopse (a sinopse em si)", "classificação" e a "categoria" -->
                <!-- A prop "bannerWallpaper", "sinopseCompleta", "faixaEtaria" e "duracaoFilme" estão recebendo variaveis que estao sendo salvas no localStorage  e sendo exibidas na pagina "Detalhes do titulo" -->
                <miniCards 
                    :imagem="require('@/assets/interstelar.jpg')" 
                    nome="Interstelar" 
                    :sinopse="true" 
                    conteudoSinopse="Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, 
                    na tentativa de garantir a sobrevivência da humanidade." 
                    classificacao="8.7 / 10"
                    categoria1="Ficção" categoria2="Drama" categoria3="Aventura"
                    :bannerWallpaper="require('@/assets/interstelar-wallpaper.jpg')" 
                    sinopseCompleta="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas 
                    recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando 
                    a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca 
                    mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
                    :faixaEtaria="require('@/assets/pegi-10.png')"
                    duracaoFilme="2h49 min" />

                <miniCards 
                    :imagem="require('@/assets/espaço-entre-nos.jpg')" 
                    nome="Espaço Entre Nós" 
                    :sinopse="true"
                    conteudoSinopse="O primeiro humano nascido em Marte viaja para a Terra pela primeira vez e experimenta o planeta com um olhar refrescante. 
                    Juntamente com um novo amigo, ela embarca em uma aventura para descobrir sua origem"
                    classificacao="6.4 / 10" categoria1="Ficção" categoria2="Romance" categoria3="Aventura"
                    :bannerWallpaper="require('@/assets/espaco-entre-nos-wallpaper.jpg')"
                    sinopseCompleta="O adolescente Gardner Elliot é o primeiro humano nascido em solo marciano. Mas ele deseja fazer uma viagem à Terra para conhecer
                    a verdade sobre seu pai biológico, e sobre seu nascimento. Nesta jornada, ele tem o apoio de Tulsa." 
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h1 min"
                    />

                <miniCards 
                    :imagem="require('@/assets/vida-inseto.jpg')" 
                    nome="Vida de Inseto" 
                    :sinopse="true"
                    conteudoSinopse="Uma formiga desajustada, à procura de guerreiros para salvar sua colônia de gananciosos grilos, recruta um grupo de 
                    criaturas que se revelam uma inepta companhia de circo." 
                    classificacao="7.2 / 10"
                    categoria1="Animação" categoria2="Infantil" categoria3="Aventura" 
                    :bannerWallpaper="require('@/assets/vida-inseto-wallpaper.jpg')"
                    sinopseCompleta="Flik é uma formiga cheia de ideias e sempre causa problemas na sua colônia. Seu último acidente foi destruir os alimentos que 
                    seriam usados para pagamento ao gafanhoto Hopper. Agora, Hopper está exigindo o dobro, senão a colônia será aniquilada. Para evitar o desastre, 
                    Flik tenta recrutar combatentes para defender o local, e quando encontra um bando de insetos voadores, ele acredita que encontrou a sua salvação."
                    :faixaEtaria="require('@/assets/pegi-livre.png')"
                    duracaoFilme="1h35 min" />

                <miniCards 
                    :imagem="require('@/assets/card-shang-chi.jpg')" 
                    nome="Shang-Chi: A Lenda dos Dez Anéis"
                    :sinopse="true" 
                    conteudoSinopse="Shang-Chi é obrigado a confrontar um passado que julgava ter deixado para trás quando é atraído à teia da misteriosa
                    organização conhecida como os Dez Anéis." classificacao="7.4 / 10" categoria1="Ação"
                    categoria2="Aventura" categoria3="Super-Herói"
                    :bannerWallpaper="require('@/assets/shang-chi-wallpaper.jpg')"
                    sinopseCompleta="Shang-Chi é o filho do líder de uma organização criminosa poderosa. O rapaz foi criado desde criança para ser um guerreiro, 
                    mas decidiu abandonar esse caminho e fugiu para viver uma vida pacífica. Porém, tudo isso muda quando ele é atacado por um grupo de assassinos 
                    e se vê forçado a enfrentar seu passado."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h12 min"/>

                <miniCards 
                    :imagem="require('@/assets/assim-na-terra.jpg')" 
                    nome="Assim na Terra como no Inferno"
                    :sinopse="true"
                    conteudoSinopse="Um grupo de arqueólogos procura um artefacto místico nas catacumbas de Paris. Mas aquele local, revelará um segredo 
                    que vai mexer com a mente de todos, fazendo os demónios pessoais de cada um voltarem para os assombrar."
                    classificacao="6.4 / 10" categoria1="Terror" categoria2="Suspense" categoria3="Mistério"
                    :bannerWallpaper="require('@/assets/assim-na-terra-wallpaper.jpg')"
                    sinopseCompleta="Um grupo de arqueólogos está em busca de um tesouro perdido e, para isso, explora o desconhecido labirinto de ossos 
                    nas catacumbas abaixo de Paris. Aquela região, conhecida como a cidade dos mortos, revela um segredo que mexerá com a psique humana de 
                    modo que os demônios pessoais de cada um voltarão para assombrá-los."
                    :faixaEtaria="require('@/assets/pegi-14.png')"
                    duracaoFilme="1h33 min"/>
            </div>
            <div class="fileira-cards">
                <miniCards 
                    :imagem="require('@/assets/baleia.png')" 
                    nome="A Baleia" 
                    :sinopse="true" 
                    conteudoSinopse="Um professor de inglês recluso que vive com obesidade severa tenta se reconectar com sua distante filha adolescente
                    para uma última chance de redenção." 
                    classificacao="7.7 / 10"
                    categoria1="Drama" categoria2="Ficção" 
                    :bannerWallpaper="require('@/assets/baleia-wallpaper.jpg')"
                    sinopseCompleta=" Depois de sofrer vários traumas, o professor de inglês Charlie se torna uma pessoa reclusa. Como última tentativa de redenção, 
                    ele tenta desesperadamente se reconectar com a sua filha adolescente."
                    :faixaEtaria="require('@/assets/pegi-16.png')"
                    duracaoFilme="1h57 min"  />

                <miniCards 
                    :imagem="require('@/assets/avatar.png')" 
                    nome="Avatar" 
                    :sinopse="true" 
                    conteudoSinopse="Um militar paraplégico despachado para a lua Pandora em uma missão única fica dividido entre seguir suas ordens e
                    proteger o mundo que ele sente ser sua casa." 
                    claissificacao="7.9 / 10" 
                    categoria1="Ficção" categoria2="Aventura" categoria3="Fantasia" 
                    :bannerWallpaper="require('@/assets/avatar-wallpaper.jpg')"
                    sinopseCompleta="No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. 
                    Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente
                    em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Na'vi. Esta paixão leva
                    Jake a lutar pela sobrevivência de Pandora."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h42 min"/>

                <miniCards 
                    :imagem="require('@/assets/creed-3.jpg')" 
                    nome="Creed 3" 
                    :sinopse="true" 
                    conteudoSinopse="Adonis prospera em sua carreira e vida familiar, mas quando um amigo de infância e ex-prodígio do boxe ressurge, 
                    o confronto é mais do que apenas uma luta" 
                    classificacao="6.8 / 10" 
                    categoria1="Drama" categoria2="Ação" categoria3="Esporte"
                    :bannerWallpaper="require('@/assets/creed-3-wallpaper.jpg')"
                    sinopseCompleta="Depois de dominar os ringues, Adonis Creed tem prosperado com sua carreira e família. Quando um amigo de infância 
                    e ex-prodígio do boxe, Damian, ressurge após uma longa sentença na prisão, o campeão fica ansioso para provar que merece sua chance.
                    O confronto entre ex-amigos é mais do que apenas uma luta. Para acertar as contas, Adonis deve colocar seu futuro em risco para 
                    enfrentar Damian, um lutador que não tem nada a perder."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="1h56 min" />

                <miniCards 
                    :imagem="require('@/assets/enrolados.png')" 
                    nome="Enrolados" 
                    :sinopse="true" 
                    conteudoSinopse="Rapunzel passou toda a sua vida em uma torre, mas agora que um ladrão fugitivo a tropeçou, ela está prestes a 
                    descobrir o mundo pela primeira vez e quem ela realmente é." 
                    classificacao="7.7 / 10"
                    categoria1="Infantil" categoria2="Aventura" categoria3="Animação"
                    :bannerWallpaper="require('@/assets/enrolados-wallpaper.jpg')"
                    sinopseCompleta="O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente
                    de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente
                    a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante."
                    :faixaEtaria="require('@/assets/pegi-livre.png')"
                    duracaoFilme="1h40 min" />

                <miniCards 
                    :imagem="require('@/assets/eternos.png')" 
                    nome="Eternos" 
                    :sinopse="true"
                    conteudoSinopse="A saga dos Eternos, uma raça de seres imortais que viveram na Terra e transformaram sua historia e civilização."
                    classificacao="6.3 / 10" 
                    categoria1="Ação" categoria2="Super-Herói" categoria3="Fantasia"
                    :bannerWallpaper="require('@/assets/eternos-wallpaper.jpeg')"
                    sinopseCompleta="Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas 
                    civilizações enquanto batalhavam os malignos Deviantes."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h37 min"  />
            </div>
            <div class="fileira-cards">
                <miniCards 
                    :imagem="require('@/assets/kingsman-origem.png')" 
                    nome="Kingsman: A Origem" 
                    :sinopse="true"
                    conteudoSinopse="Nos primeiros anos do século 20, a agência Kingsman é formada para enfrentar uma cabala 
                    que planeja uma guerra para eliminar milhões." 
                    classificacao=" 6.3 / 10" 
                    categoria1="Ação" categoria2="Suspense" categoria3="Espionagem" 
                    :bannerWallpaper="require('@/assets/kings-man-a-origem-wallpaper.jpg')"
                    sinopseCompleta=" Um homem precisa correr contra o tempo para impedir que os piores tiranos e criminosos da história exterminem milhões
                    de pessoas e destruam a humanidade."
                    :faixaEtaria="require('@/assets/pegi-16.png')"
                    duracaoFilme="2h11 min" />

                <miniCards 
                    :imagem="require('@/assets/maquinas-mortais.jpg')" 
                    nome="Máquinas Mortais" 
                    :sinopse="true"
                    conteudoSinopse="Em um mundo pós-apocalíptico, onde as cidades viajam sobre rodas e consomem umas às outras para sobreviver, 
                    duas pessoas se reúnem em Londres e tentam impedir uma conspiração." 
                    classificacao="6.1 / 10"
                    categoria1="Ação" categoria2="Ficção" categoria3="Suspense"
                    :bannerWallpaper="require('@/assets/maquinas-mortais-wallpaper.jpg')"
                    sinopseCompleta=" A Terra está destruída e para sobreviver as cidades se movem em rodas gigantes, conhecidas como Cidades Tração, 
                    e lutam com outras para conseguir mais recursos naturais. Quando Londres se envolve em um ataque, Tom é lançado para fora da cidade
                    junto com uma fora da lei, e os dois juntos precisam lutar para sobreviver e ainda enfrentar uma ameaça que coloca a vida no planeta
                    em risco."
                    :faixaEtaria="require('@/assets/pegi-14.png')"
                    duracaoFilme="2h8 min"  />

                <miniCards 
                    :imagem="require('@/assets/panico-6.png')" 
                    nome="Pânico 6" 
                    :sinopse="true"
                    conteudoSinopse="Os sobreviventes dos assassinatos de Ghostface deixam Woodsboro para trás e iniciam um novo capítulo na cidade de Nova York."
                    classificacao="6.6 / 10" 
                    categoria1="Terror" categoria2="Suspense" categoria3="Mistério"
                    :bannerWallpaper="require('@/assets/panico-6-wallpaper.jpg')"
                    sinopseCompleta="Sam, Tara, Chad e Mindy, os quatro sobreviventes do massacre realizado pelo Ghostface, decidem deixar Woodsboro para trás em 
                    busca de um novo começo em Nova York. Mas não demora muito para eles se tornarem alvo de um novo serial killer."
                    :faixaEtaria="require('@/assets/pegi-18.png')"
                    duracaoFilme="2h2 min"  />

                <miniCards 
                    :imagem="require('@/assets/super-velozes.png')" 
                    nome="Super Velozes, Mega Furiosos"
                    :sinopse="true" 
                    conteudoSinopse="Um policial disfarçado se junta a uma gangue de corredores de rua e criminosos para se aproximar do chefe do 
                    crime de Los Angeles." 
                    classificacao="4.1 / 10" 
                    categoria1="Comédia" categoria2="Besteirol" 
                    :bannerWallpaper="require('@/assets/supervelozesfuriosos-wallpaper.jpg')"
                    sinopseCompleta="Lucas White é um policial disfarçado que se infiltra na gangue de rachas de Vin Serento. Eles são velozes, 
                    eles são furiosos e eles planejam acabar com o criminoso Juan Carlos de La Sol que esconde dinheiro num bar no centro de L.A."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="1h39 min" />

                <miniCards 
                    :imagem="require('@/assets/venon-2.png')" 
                    nome="Venom: Tempo de Carnificina" 
                    :sinopse="true"
                    conteudoSinopse="O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, 
                    descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados."
                    classificacao="5.9 / 10" 
                    categoria1="Ação" categoria2="Ficção" categoria3="Super-Herói"
                    :bannerWallpaper="require('@/assets/venon-2-wallpaper.jpg')"
                    sinopseCompleta="O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, 
                    esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados."
                    :faixaEtaria="require('@/assets/pegi-14.png')"
                    duracaoFilme="1h37 min"  />
            </div>
            <div class="fileira-cards">
                <miniCards 
                    :imagem="require('@/assets/esposa-mentira.jpg')" 
                    nome="Esposa de Mentirinha" 
                    :sinopse="true"
                    conteudoSinopse="Numa viagem durante o fim de semana, um médico convençe a sua assistente de fingir ser a ex esposa dele para cubrir 
                    a mentira que diz para sua namorada."
                    classificacao="6.4 / 10" 
                    categoria1="Comédia" categoria2="Romance" categoria3="Aventura"
                    :bannerWallpaper="require('@/assets/esposa-mentira-wallpaper.jpg')"
                    sinopseCompleta="Infeliz em sua tentativa de casamento, Danny passa a vivenciar relacionamentos sem compromisso para driblar a carência.
                    Assim, ele toca sua vida como cirurgião plástico bem-sucedido, tendo sua melhor amiga Katherine, mãe solteira de um casal, como fiel escudeira. 
                    Quando conhece a jovem Palmer e a paixão toma conta de ambos, ele inventa, para tentar conquistá-la, que é marido de Katherine, pai das crianças e que vai se separar."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="1h57 min"  />

                <miniCards 
                    :imagem="require('@/assets/homem-aranha-2.png')" 
                    nome="Espetacular Homem-Aranha 2"
                    :sinopse="true"
                    conteudoSinopse=" Quando Nova Iorque está em assédio por Oscorp, o Homem-Aranha deberá salvar a cidade é proteger a seus amados."
                    classificacao="6.6 / 10" 
                    categoria1="Ação" categoria2="Ficção" categoria3="Super-Herói"
                    :bannerWallpaper="require('@/assets/homem-aranha-2-wallpaper.jpg')"
                    sinopseCompleta="O jovem Peter Parker está fascinado com as habilidades que adquiriu como Homem-Aranha. Agora, ele precisa lidar com dois problemas:
                    o retorno de um velho amigo, Harry Osborn, e a chegada de um vilão mais forte e poderoso, Electro."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h22 min"  />

                <miniCards 
                    :imagem="require('@/assets/a-morte-do-demonio.png')" 
                    nome="A Morte do Demônio: A Ascensão"
                    :sinopse="true" 
                    conteudoSinopse="Beth visita sua irmã mais velha, ella, que está criando 3 filhos em um apartamento apertado em Los Angeles. 
                    Sua reunião é curta quando eles encontram um livro demoníaco, The Necronomicon Ex-Mortis."
                    classificacao="6.7 / 10" 
                    categoria1="Terror" categoria2="Suspense" categoria3="Mistério"
                    :bannerWallpaper="require('@/assets/a-morte-do-demonio-wallpaper.jpg')"
                    sinopseCompleta="Uma mulher se encontra em uma luta por sua vida quando um livro antigo dá à luz demônios sedentos por sangue. 
                    Eles se tornam cada vez mais agressivos em um prédio em Los Angeles."
                    :faixaEtaria="require('@/assets/pegi-18.png')"
                    duracaoFilme="2h"  />

                <miniCards
                    :imagem="require('@/assets/no-aranhaverso.png')" 
                    nome="Homem Aranha: No Aranhaverso"
                    :sinopse="true" 
                    conteudoSinopse="Um jovem se torna o Homem Aranha de sua realidade, cruzando seu caminho com cinco colegas de outras 
                    dimensões para impedir uma ameaça a todas as realidades." 
                    classificacao="8.4 / 10"
                    categoria1="Ação" categoria2="Aventura" categoria3="Animação"
                    :bannerWallpaper="require('@/assets/aranha-verso-wallpaper.jpg')"
                    sinopseCompleta="Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no 
                    legado do já falecido Peter Parker. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, 
                    vestindo o traje do herói por baixo de um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha."
                    :faixaEtaria="require('@/assets/pegi-10.png')"
                    duracaoFilme="1h40 min" />
                
                <miniCards 
                    :imagem="require('@/assets/ghosted.png')" 
                    nome="Ghoted: Sem Resposta" 
                    :sinopse="true"
                    conteudoSinopse="O corretíssimo Cole se apaixona pela enigmática Sadie, porém, enfrenta a descoberta de que ela é uma agente secreta.Antes que eles 
                    possam decidir se terão ou não um segundo encontro, Cole e Sadie são arrastados para uma aventura internacional para salvar o mundo"
                    classificacao="5.8 / 10" 
                    categoria1="Romance" categoria2="Ação" categoria3="Aventura"
                    :bannerWallpaper="require('@/assets/ghosted-wallpaper.jpg')"
                    sinopseCompleta="O filme acompanha Cole Cole (Chris Evans), um homem honesto e certinho. Ele convida a misteriosa Sadie (Ana de Armas) para um encontro.
                    O que à primeira vista parece não ir muito bem. Porém, logo os dois acabam se envolvendo profundamente. Só que Cole logo descobre que a mulher é uma agente disfarçada da CIA.
                    Então, ambos se veem obrigados a trabalharem juntos em uma missão perigosa."
                    :faixaEtaria="require('@/assets/pegi-14.png')"
                    duracaoFilme="1h56 min"  />
            </div>
        </div>
    </div>
</template>
<script>
import miniCards from '@/components/MiniCards.vue'
export default {
    name: "paginaFilmes",
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

.link {
    text-decoration: none;
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