<template>
    <div class="tela">
        <!-- Banner principal -->
        <div class="carrosel">
            <span class="material-icons botao-volta" v-on:click="passarAnterior()">
                arrow_back_ios
            </span>
            <banners :imagemBanner="require('@/assets/the-last-of-us.jpg')" tituloBanner="The Last of Us"
                v-if="pagina == 1" />
            <banners :imagemBanner="require('@/assets/john-wick-4.jpeg')" tituloBanner="John Wick 4: Baba Yaga"
                v-if="pagina == 2" />
            <banners :imagemBanner="require('@/assets/Transformers-O-Despertar-das-Feras.jpg')"
                tituloBanner="Transformers: O Despertar das Feras" v-if="pagina == 3" />
            <banners :imagemBanner="require('@/assets/guardioes-da-galaxia-3.jpg')"
                tituloBanner="Guadiões da Galáxia: Vol.3" v-if="pagina == 4" />
            <span class="material-icons botao-proximo" v-on:click="passarFrente()">
                arrow_forward_ios
            </span>
            <div class="conteiner-dots">
                <span class="material-icons dot" v-on:click="dotAlterar1()">
                fiber_manual_record
            </span><span class="material-icons dot" v-on:click="dotAlterar2()">
                fiber_manual_record
            </span><span class="material-icons dot" v-on:click="dotAlterar3()">
                fiber_manual_record
            </span><span class="material-icons dot" v-on:click="dotAlterar4()">
                fiber_manual_record
            </span>
            </div>
            
        </div>
        <!-- Fim -->

        <!-- Carrosel Series  -->
        <div class="titulo-fileiras">
            <router-link to="/series" class="link-titulo">
                Séries
            </router-link>
        </div>
        <div class="separacao">
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarSeries()">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards" v-if="series == 1">
                <miniCards :imagem="require('@/assets/the-witcher.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/casa-de-papel.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/house.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/mr-robot.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/prison-break.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/stranger-things.jpg')" :scale="true" />
            </div>
            <div class="fileira-cards" v-if="series == 2">
                <miniCards :imagem="require('@/assets/citadel.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/strain.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/moon-night.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/fauda.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/bodyguard.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/origem.jpg')" :scale="true" />
            </div>
            <div class="fileira-cards" v-if="series == 3">
                <miniCards :imagem="require('@/assets/halo.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/peaky-blinders.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/ted-lasso.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/sweet-tooth.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/loki.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/walking-dead.png')" :scale="true" />
            </div>
            <span class="material-icons seta" v-on:click="passarSeries()">
                keyboard_arrow_right
            </span>
        </div>
        <!-- Fim -->

        <!-- Carrosel em Alta -->
        <div class="titulo-fileiras link-titulo">
            Em alta
        </div>
        <div class="separacao">
        </div>
        <div div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarEmAlta()">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards" v-if="emAlta == 1">
                <cards :imagemGrande="require('@/assets/card-last-of-us.jpg')" />
                <cards :imagemGrande="require('@/assets/aranha-verso.jpg')" />
                <cards :imagemGrande="require('@/assets/mandaloriam.jpg')" />
            </div>
            <div class="fileira-cards" v-if="emAlta == 2">
                <cards :imagemGrande="require('@/assets/transformers-despertar-das-feras.png')" />
                <cards :imagemGrande="require('@/assets/guardioes-da-galaxia.jpg')" />
                <cards :imagemGrande="require('@/assets/click.jpg')" />
            </div>
            <span class="material-icons seta" v-on:click="passarEmAlta()">
                keyboard_arrow_right
            </span>
        </div>
        <!-- Fim -->

        <!-- Carrosel Filmes -->
        <div class="titulo-fileiras">
            <router-link to="/filmes" class="link-titulo">
                Filmes
            </router-link>
        </div>
        <div class="separacao">
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarFilmes()">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards" v-if="filmes == 1">
                <!-- :Scale esta aplicando a propriedade scale nos minicards apenas na pagina inicial -->
                <miniCards 
                    :scale="true"
                    :imagem="require('@/assets/interstelar.jpg')" 
                    nome="Interstelar" 
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
                    :scale="true"
                    :imagem="require('@/assets/vida-inseto.jpg')" 
                    nome="Vida de Inseto" 
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
                    :scale="true" 
                    :imagem="require('@/assets/espaço-entre-nos.jpg')" 
                    nome="Espaço Entre Nós" 
                    conteudoSinopse="O primeiro humano nascido em Marte viaja para a Terra pela primeira vez e experimenta o planeta com um olhar refrescante. 
                    Juntamente com um novo amigo, ela embarca em uma aventura para descobrir sua origem"
                    classificacao="6.4 / 10" categoria1="Ficção" categoria2="Romance" categoria3="Aventura"
                    :bannerWallpaper="require('@/assets/espaco-entre-nos-wallpaper.jpg')"
                    sinopseCompleta="O adolescente Gardner Elliot é o primeiro humano nascido em solo marciano. Mas ele deseja fazer uma viagem à Terra para conhecer
                    a verdade sobre seu pai biológico, e sobre seu nascimento. Nesta jornada, ele tem o apoio de Tulsa." 
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h1 min"/>

                <miniCards 
                    :scale="true" 
                    :imagem="require('@/assets/card-shang-chi.jpg')" 
                    nome="Shang-Chi: A Lenda dos Dez Anéis"
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
                    :scale="true" 
                    :imagem="require('@/assets/assim-na-terra.jpg')" 
                    nome="Assim na Terra como no Inferno"
                    conteudoSinopse="Um grupo de arqueólogos procura um artefacto místico nas catacumbas de Paris. Mas aquele local, revelará um segredo 
                    que vai mexer com a mente de todos, fazendo os demónios pessoais de cada um voltarem para os assombrar."
                    classificacao="6.4 / 10" categoria1="Terror" categoria2="Suspense" categoria3="Mistério"
                    :bannerWallpaper="require('@/assets/assim-na-terra-wallpaper.jpg')"
                    sinopseCompleta="Um grupo de arqueólogos está em busca de um tesouro perdido e, para isso, explora o desconhecido labirinto de ossos 
                    nas catacumbas abaixo de Paris. Aquela região, conhecida como a cidade dos mortos, revela um segredo que mexerá com a psique humana de 
                    modo que os demônios pessoais de cada um voltarão para assombrá-los."
                    :faixaEtaria="require('@/assets/pegi-14.png')"
                    duracaoFilme="1h33 min"/>

                <miniCards  
                    :scale="true"
                    :imagem="require('@/assets/esposa-mentira.jpg')" 
                    nome="Esposa de Mentirinha" 
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
            </div>
            <div class="fileira-cards" v-if="filmes == 2">
                <miniCards 
                    :scale="true" 
                    :imagem="require('@/assets/baleia.png')" 
                    nome="A Baleia" 
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
                    :scale="true" 
                    :imagem="require('@/assets/avatar.png')" 
                    nome="Avatar" 
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
                    :scale="true" 
                    :imagem="require('@/assets/creed-3.jpg')" 
                    nome="Creed 3" 
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
                    :scale="true"
                    :imagem="require('@/assets/enrolados.png')" 
                    nome="Enrolados" 
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
                    :scale="true" 
                    :imagem="require('@/assets/eternos.png')" 
                    nome="Eternos" 
                    conteudoSinopse="A saga dos Eternos, uma raça de seres imortais que viveram na Terra e transformaram sua historia e civilização."
                    classificacao="6.3 / 10" 
                    categoria1="Ação" categoria2="Super-Herói" categoria3="Fantasia"
                    :bannerWallpaper="require('@/assets/eternos-wallpaper.jpeg')"
                    sinopseCompleta="Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas 
                    civilizações enquanto batalhavam os malignos Deviantes."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h37 min"  />

                <miniCards 
                    :scale="true" 
                    :imagem="require('@/assets/homem-aranha-2.png')" 
                    nome="Espetacular Homem-Aranha 2"
                    conteudoSinopse=" Quando Nova Iorque está em assédio por Oscorp, o Homem-Aranha deberá salvar a cidade é proteger a seus amados."
                    classificacao="6.6 / 10" 
                    categoria1="Ação" categoria2="Ficção" categoria3="Super-Herói"
                    :bannerWallpaper="require('@/assets/homem-aranha-2-wallpaper.jpg')"
                    sinopseCompleta="O jovem Peter Parker está fascinado com as habilidades que adquiriu como Homem-Aranha. Agora, ele precisa lidar com dois problemas:
                    o retorno de um velho amigo, Harry Osborn, e a chegada de um vilão mais forte e poderoso, Electro."
                    :faixaEtaria="require('@/assets/pegi-12.png')"
                    duracaoFilme="2h22 min"  />
            </div>
            <div class="fileira-cards" v-if="filmes == 3">
                <miniCards 
                    :scale="true"
                    :imagem="require('@/assets/kingsman-origem.png')" 
                    nome="Kingsman: A Origem" 
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
                    :scale="true" 
                    :imagem="require('@/assets/maquinas-mortais.jpg')" 
                    nome="Máquinas Mortais" 
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
                    :scale="true" 
                    imagem="require('@/assets/panico-6.png')" 
                    nome="Pânico 6" 
                    conteudoSinopse="Os sobreviventes dos assassinatos de Ghostface deixam Woodsboro para trás e iniciam um novo capítulo na cidade de Nova York."
                    classificacao="6.6 / 10" 
                    categoria1="Terror" categoria2="Suspense" categoria3="Mistério"
                    :bannerWallpaper="require('@/assets/panico-6-wallpaper.jpg')"
                    sinopseCompleta="Sam, Tara, Chad e Mindy, os quatro sobreviventes do massacre realizado pelo Ghostface, decidem deixar Woodsboro para trás em 
                    busca de um novo começo em Nova York. Mas não demora muito para eles se tornarem alvo de um novo serial killer."
                    :faixaEtaria="require('@/assets/pegi-18.png')"
                    duracaoFilme="2h2 min"  />

                <miniCards 
                    :scale="true" 
                    :imagem="require('@/assets/super-velozes.png')" 
                    nome="Super Velozes, Mega Furiosos"
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
                    :scale="true"
                    :imagem="require('@/assets/venon-2.png')" 
                    nome="Venom: Tempo de Carnificina" 
                    conteudoSinopse="O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, 
                    descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados."
                    classificacao="5.9 / 10" 
                    categoria1="Ação" categoria2="Ficção" categoria3="Super-Herói"
                    :bannerWallpaper="require('@/assets/venon-2-wallpaper.jpg')"
                    sinopseCompleta="O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, 
                    esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados."
                    :faixaEtaria="require('@/assets/pegi-14.png')"
                    duracaoFilme="1h37 min"  />

                <miniCards 
                    :scale="true" 
                    :imagem="require('@/assets/a-morte-do-demonio.png')" 
                    nome="A Morte do Demônio: A Ascensão"
                    conteudoSinopse="Beth visita sua irmã mais velha, ella, que está criando 3 filhos em um apartamento apertado em Los Angeles. 
                    Sua reunião é curta quando eles encontram um livro demoníaco, The Necronomicon Ex-Mortis."
                    classificacao="6.7 / 10" 
                    categoria1="Terror" categoria2="Suspense" categoria3="Mistério"
                    :bannerWallpaper="require('@/assets/a-morte-do-demonio-wallpaper.jpg')"
                    sinopseCompleta="Uma mulher se encontra em uma luta por sua vida quando um livro antigo dá à luz demônios sedentos por sangue. 
                    Eles se tornam cada vez mais agressivos em um prédio em Los Angeles."
                    :faixaEtaria="require('@/assets/pegi-18.png')"
                    duracaoFilme="2h" />
            </div>
            <span class="material-icons seta" v-on:click="passarFilmes()">
                keyboard_arrow_right
            </span>
        </div>
        <!-- Fim -->

        <!-- Carrosel animes -->
        <div class="titulo-fileiras">
            <router-link to="/animes" class="link-titulo">
                Animes
            </router-link>
        </div>
        <div class="separacao">
        </div>
        <div class="conteiner-cards">
            <span class="material-icons seta" v-on:click="voltarAnimes()">
                keyboard_arrow_left
            </span>
            <div class="fileira-cards" v-if="animes == 1">
                <miniCards :imagem="require('@/assets/classroom-elite.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/deamon-slayer.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/dragon-ball.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/full-metal.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/toradora.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/jujutsu-kaisen.jpg')" :scale="true" />
            </div>
            <div class="fileira-cards" v-if="animes == 2">
                <miniCards :imagem="require('@/assets/bleach.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/erased.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/great-pretender.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/one-punch-man.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/record-of-ragnarok.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/sao.png')" :scale="true" />
            </div>
            <div class="fileira-cards" v-if="animes == 3">
                <miniCards :imagem="require('@/assets/viland-saga.png')" :scale="true" />
                <miniCards :imagem="require('@/assets/boku-no-hero.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/hells-paradise.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/mashle.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/one-piece.jpg')" :scale="true" />
                <miniCards :imagem="require('@/assets/spy-family.jpg')" :scale="true" />
            </div>
            <span class="material-icons seta" v-on:click="passarAnimes()">
                keyboard_arrow_right
            </span>
        </div>
        <!-- FIm -->
    </div>
</template>
<script>
import miniCards from '@/components/MiniCards.vue'
import banners from '@/components/Baners.vue'
import cards from '@/components/Cards.vue'
export default {
    name: "pagina-inicio",
    components: {
        miniCards,
        banners,
        cards
    },
    data() {
        return {
            pagina: 1,
            series: 1,
            filmes: 1,
            emAlta: 1,
            animes: 1
        }
    },
    methods: {
        dotAlterar1() {
            if(this.pagina != 1) {
                this.pagina = 1
            }
        },
        dotAlterar2() {
            if(this.pagina != 2) {
                this.pagina = 2
            }
        },
        dotAlterar3() {
            if(this.pagina != 3 ) {
                this.pagina = 3
            }
        },
        dotAlterar4() {
            if(this.pagina != 4) {
                this.pagina = 4
            }
        },
        passarFrente() {
            if (this.pagina >= 4) {
                this.pagina = 1
            } else {
                this.pagina++
            }
        },
        passarAnterior() {
            if (this.pagina <= 1) {
                this.pagina = 4
            } else {
                this.pagina--
            }
        },
        passarSeries() {
            if (this.series >= 3) {
                this.series = 1
            } else {
                this.series++
            }
        },
        voltarSeries() {
            if (this.series <= 1) {
                this.series = 3
            } else {
                this.series--
            }
        },
        passarFilmes() {
            if (this.filmes >= 3) {
                this.filmes = 1
            } else {
                this.filmes++
            }
        },
        voltarFilmes() {
            if (this.filmes <= 1) {
                this.filmes = 3
            } else[
                this.filmes--
            ]
        },
        passarEmAlta() {
            if (this.emAlta >= 2) {
                this.emAlta = 1
            } else {
                this.emAlta++
            }
        },
        voltarEmAlta() {
            if (this.emAlta <= 1) {
                this.emAlta = 2
            } else {
                this.emAlta--
            }
        },
        passarAnimes() {
            if (this.animes >= 3) {
                this.animes = 1
            } else {
                this.animes++
            }
        },
        voltarAnimes() {
            if (this.animes <= 1) {
                this.animes = 3
            } else {
                this.animes--
            }
        }
    },
}
</script>
<style scoped>
.tela {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.carrosel {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin-top: 2vw;
}
.botao-volta {
    position: absolute;
    cursor: pointer;
    color: #B2B2B2;
    font-size: 6vh;
    left: 1vw;
    opacity: 0;
    transition: 200ms ease-in-out 3s;

}

.botao-proximo {
    position: absolute;
    cursor: pointer;
    color: #B2B2B2;
    font-size: 6vh;
    right: 1vw;
    opacity: 0;
    transition: 200ms ease-in-out 3s;

}
.carrosel:hover > .botao-proximo, .botao-volta {
    opacity: 1;
    transition: 200ms ease-in-out;
}
.conteiner-dots {
    position: absolute;
    bottom: 1vw;
    color: #B2B2B250;
    display: flex;
    gap: 1vw;
    opacity: 0;
    transition: 200ms ease-in-out 3s;
}
.dot {
    font-size: 2.5vh;
    cursor: pointer;
}
.dot:hover {
    color: #e8e8e8;
}
.carrosel:hover > .conteiner-dots {
    opacity: 1;
    transition: 200ms ease-in-out;
} 
.botao-volta:hover,
.botao-proximo:hover {
    color: #e8e8e8;
}

.separacao {
    width: 95%;
    height: 1px;
    background-image: linear-gradient(to right, #898989, #1f1f1f);
    margin: 0 0 3vh 4vw;
}

.titulo-fileiras {
    color: #B2B2B2;
    font-size: 4vh;
    margin: 5vw 0 0 7vw;
    cursor: pointer;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
}

.link-titulo {
    text-decoration: none;
    color: #B2B2B2;
}

.link-titulo:hover {
    color: #f64348;
}

.conteiner-cards {
    display: flex;
    color: #898989;
    justify-content: center;
    width: 100%;
    align-items: center;
}

.fileira-cards {
    width: 100%;
    display: flex;
    gap: 1.5vw;
    width: fit-content;
}

.fileira-cards:hover :not(:hover) {
    opacity: 0.4;
}

.seta {
    font-size: 5vh;
    cursor: pointer;
    transition: 300ms;
}

.seta:hover {
    color: #e8e8e8;
    transition: 300ms;
}
</style>