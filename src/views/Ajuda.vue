<template>
    <div class="tela">
        Central de Ajuda
        <div class="conteiners">
            <div class="conteiner-esquerdo">
               <!-- Sumario Planos -->
                <details>
                    <summary>
                        PLanos
                    </summary>
                    <p v-on:click="assinar()"> Como assinar "nome do site" </p>
                    <p v-on:click="planos()"> Alterar Plano </p>
                    <p v-on:click="pagamentos()"> Alterar forma de pagamento </p>
                    <p v-on:click="cancelar()"> Cancelar conta </p>
                </details>
                <!-- Fim -->

                <!-- Sumario Configs -->
                <details>
                    <summary>
                        Configurações
                    </summary>
                    <p v-on:click="idioma()"> Alterar Idioma </p>
                    <p v-on:click="email()"> Alterar E-mail </p>
                    <p v-on:click="senha()"> Alterar Senha </p>
                    <p v-on:click="perfil()"> Gerenciar Perfis</p>
                    <p v-on:click="download()"> Downloads dos titulos </p>
                </details>
                <!-- Fim -->

                <!-- Sumario termos / Politica  -->
                <details>
                    <summary>
                        Termos de Uso / Política de Privacidade
                    </summary>
                    <p v-on:click="termos()"> Termos de Uso</p>
                    <p v-on:click="politica()"> Política de Privacidade </p>
                </details>
                <!-- Fim -->
            </div>

            <div class="conteiner-direito">
                <!-- Conteiner Assinar -->
                <div v-if="tab == 'assinar'">
                    Como assinar "nome do site"
                    <div class="descricao">
                        Assista a títulos premiados de séries de TV, filmes,
                        e muito mais sem sair de casa
                    </div>
                    <div class="instrucoes">
                        1. Acesse "link do site". <br>
                        2. Escolha o melhor plano para seu bolso, podendo migrar
                        para qualquer outro plano a qualquer momemnto. <br>
                        3. Crie uma conta e senha.<br>
                        4. Escolha um meio de Pagamento.<br>
                        5. Prontinho! Agora é só aproveitar!<br>
                    </div>
                </div>
                <!-- Fim  -->

                <!-- Conteiner Planos -->
                <div v-if="tab == 'planos'">
                    Alterar plano
                    <div class="descricao">
                        Altere seu plano atual para um que se ajuste melhor a você
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. No ícone do seu perfil, vá em Conta. <br>
                        3. Na aba "Dados da Assinatura". <br>
                        4. Clique no botão "Alterar plano". <br>
                        5. Escolha o plano e confirme.
                    </div>
                </div>
                <!-- Fim -->
                <!-- Conteiner  Pagamentos  -->
                <div v-if="tab == 'pagamento'">
                    Alterar forma de pagamento
                    <div class="descricao">
                        Altere a forma de pagamento
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. No ícone do seu perfil, vá em Conta. <br>
                        3. Na aba "Métodos de Pagamento". <br>
                        4. Clique no botão "Alterar". <br>
                        5. Escolha o método de pagamento e confirme.
                    </div>
                </div>
                <!-- Fim -->

                <!-- Conteiner Cancelar -->
                <div v-if="tab == 'cancelar'">
                    Cancelar conta
                    <div class="descricao">
                        Cancele sua conta "nome do site"
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. No ícone do seu perfil, vá em Conta. <br>
                        3. Na aba "Dados da Assinatura". <br>
                        4. Clique no botão "Cancelar conta" e confirme.
                    </div>
                </div>
                <!-- Fim -->

                <!-- Conteiner  Idioma -->
                <div v-if="tab == 'idioma'">
                    Alterer Idioma
                    <div class="descricao">
                        Altere o idioma em que o site é exibido
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. No ícone do seu perfil, vá em Conta. <br>
                        3. Na aba "Preferências". <br>
                        4. Selecione o idioma desejado.
                    </div>
                </div>
                <!-- Fim -->

                <!-- Conteiner Email -->
                <div v-if="tab == 'email'">
                    Alterar E-mail
                    <div class="descricao">
                        Altere o e-mail para receber nossas novidades
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. No ícone do seu perfil, vá em Conta. <br>
                        3. Na aba "Alterar E-mail". <br>
                        4. Insira o novo e-mail e confirme.
                    </div>
                </div>
                <!-- Fim -->

                <!-- Conteiner Senha -->
                <div v-if="tab == 'senha'">
                    Alterar Senha
                    <div class="descricao">
                        Altere a senha para logar no "nome do site"
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. No ícone do seu perfil, vá em Conta. <br>
                        3. Na aba "Alterar Senha". <br>
                        4. Insira a nova senha e confirme.
                    </div>
                </div>
                <!-- Fim -->

                <!-- Conteiner Perfil -->
                <div v-if="tab == 'perfil'">
                    Gerenciar Perfis
                    <div class="descricao">
                        Gerencie seus perfis existentes ou adicione novos
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. No ícone do seu perfil, vá em Perfil. <br>
                        3. Adicione um novo perfil ou altere um existente e confirme.
                    </div>
                </div>
                <!-- Fim -->

                <!-- Conteiner Download -->
                <div v-if="tab == 'download'">
                    Downloads
                    <div class="descricao">
                        Baixe os títulos que mais te agradam e assista em qualquer lugar
                    </div>
                    <div class="instrucoes">
                        1. Faça o login na sua conta "nome do site" <br>
                        2. Escolha o filme/série que deseja baixar. <br>
                        3. Clique no ícone de download. <br>
                        4. Prontinho! Agora pode assistir em qualquer lugar offline.
                    </div>
                </div>
                <!-- Fim -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "paginaAjuda",
    data() {
        return {
            tab: ''
        }
    },
    methods: {
        termos() {
            this.$router.push("/termos-de-uso")
        },
        politica() {
            this.$router.push("/politica-de-privacidade")
        },
        assinar(){
            this.tab = "assinar"
        },
        planos(){
            this.tab = "planos"
        },
        pagamentos(){
            this.tab = "pagamento"
        },
        cancelar(){
            this.tab = "cancelar"
        },
        idioma(){
            this.tab = "idioma"
        },
        email(){
            this.tab = "email"
        },
        senha(){
            this.tab = "senha"
        },
        perfil(){
            this.tab = "perfil"
        },
        download(){
            this.tab = "download"
        }
    }
}
</script>
<style scoped>
.tela {
    color: #e8e8e8;
    text-align: center;
    padding: 3vw;
    font-size: 5vh;
    height: auto;
}

.conteiners {
    display: flex;
    gap: 2vw;
}

.conteiner-esquerdo {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 10vw;
    height: auto;
    width: fit-content;
    padding: 2vw;
    font-size: 3vh;
    background-color: #353535;
    margin-top: 2vw;
    border-radius: 10px;
    text-align: left;
}

summary,
p {
    cursor: pointer;
    padding: 1vh;
    width: fit-content;
    text-decoration: none;
}

summary:hover,
p:hover {
    color: #f64348;
}

.conteiner-direito {
    font-size: 5vh;
    background-color: #353535;
    margin-top: 2vw;
    border-radius: 10px;
    padding: 2vw;
    color: #f64348;

}

.descricao {
    font-size: 2.5vh;
    margin: 0 0 2vw 0;
    color: #e8e8e8;

}

.instrucoes {
    font-size: 3vh;
    text-align: left;
    color: #e8e8e8;

}

.link {
    text-decoration: none;
    color: #e8e8e8;
}
</style>