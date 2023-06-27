<template>
    <div class="tela">
        <!-- Conteiner Esquerdo -->
        <div class="conteiner-esquerdo">
            <div class="geral">
                <div class="titulo">
                    Geral
                </div>
                <div class="sub-titulos" v-on:click="assinatura()">
                    Dados da Assinatura
                </div>
                <div class="sub-titulos" v-on:click="preferencia()">
                    Preferências
                </div>
                <div class="sub-titulos" v-on:click="alterarEmail()">
                    Alterar E-mail
                </div>
                <div class="sub-titulos" v-on:click="alterarSenha()">
                    Alterar Senha
                </div>
                <div class="titulo">
                    Pagamentos
                </div>
                <div class="sub-titulos" v-on:click="pagamentos()">
                    Histórico de Pagamentos
                </div>
                <div class="sub-titulos" v-on:click="metodosPagamentos()">
                    Métodos de Pagamento
                </div>
            </div>
        </div>
        <!-- Fim -->

        <!-- Conteiner direito -->
        <div class="conteiner-direito">
            <!-- Conteiner de Dados da Assinatura -->
            <div class="conteiner-sub-titulos" v-if="tab =='assinatura'">
                Detalhes da assinatura
                <div class="descricao">
                    Gerencie seu plano de assinatura
                    <div class="plano">
                        Plano Básico
                        <div>
                            R$25,90/mês
                        </div>
                    </div>
                </div>
                <div>
                    Torne-se Premium
                </div>
                <div class="premium">
                    Acesso ilimitado a todo o conteúdo, sem anúncios,
                    assista videos em 4k e em até 5 dispositvos simultaneamente.
                </div>
                <button>
                    Assinar Premium
                </button>
            </div>
            <!-- fim -->

            <!-- Conteiner de Preferencias  -->
            <div class="conteiner-sub-titulos" v-if="tab == 'preferencia'">
                Preferências
                <div class="descricao">
                    Configuraçõa de idioma de exibição e vídeo
                </div>
                <div class="idioma">
                    Idioma
                    <div class="titulo-idioma">
                        Exibição
                    </div>
                    <div class="dropdown" v-on:click="clicouIdioma()">
                        Português (Brasil)
                        <div class="conteudo-dropdown-idioma" :style="mostrarIdiomas()">
                            <div class="escrita-dropdown">
                                English (US)
                            </div>
                            <div class="escrita-dropdown">
                                Español
                            </div>
                            <div class="escrita-dropdown">
                                Italiano
                            </div>
                            <div class="escrita-dropdown">
                                Français
                            </div>
                            <div class="escrita-dropdown">
                                Português (Brasil)
                            </div>
                        </div>
                    </div>
                </div>
                <div class="idioma">
                    Video
                    <div class="titulo-idioma">
                        Áudio
                    </div>
                    <div class="dropdown" v-on:click="clicouAudio()">
                        Português (Brasil)
                        <div class="conteudo-dropdown-audio" :style="mostrarAudio()">
                            <div class="escrita-dropdown">
                                English (US)
                            </div>
                            <div class="escrita-dropdown">
                                Español
                            </div>
                            <div class="escrita-dropdown">
                                Italiano
                            </div>
                            <div class="escrita-dropdown">
                                Français
                            </div>
                            <div class="escrita-dropdown">
                                Português (Brasil)
                            </div>
                        </div>
                    </div>
                    <div class="titulo-idioma">
                        Legenda
                    </div>
                    <div class="dropdown" v-on:click="clicouLegenda()">
                        Português (Brasil)
                        <div class="conteudo-dropdown-legenda" :style="mostrarLegenda()">
                            <div class="escrita-dropdown">
                                English (US)
                            </div>
                            <div class="escrita-dropdown">
                                Español
                            </div>
                            <div class="escrita-dropdown">
                                Italiano
                            </div>
                            <div class="escrita-dropdown">
                                Français
                            </div>
                            <div class="escrita-dropdown">
                                Português (Brasil)
                            </div>
                        </div>
                    </div>
                </div>
                <div class="conteudo">
                    <span class="material-icons check-on" v-if="check == true" v-on:click="checado()">
                        toggle_on
                    </span>
                    <span class="material-icons check-off" v-if="check == false" v-on:click="naoChecado()">
                        toggle_off
                    </span>
                    Exibir conteúdo adulto

                </div>
            </div>
            <!-- Fim -->

            <!-- Conteiner de Email -->
            <div class="conteiner-sub-titulos" v-if="tab == 'email'">
                Alterar E-mail
                <div class="descricao">
                    Altere o e-mail e senha para fazer login
                </div>
                <div class="alterar-input">
                    E-mail atual:
                    <input type="email">
                    Novo E-mail:
                    <input type="email">
                    <button class="botao-input">
                        Confirmar
                    </button>
                </div>
            </div>
            <!-- Fim -->

            <!-- Conteiner de senha-->
            <div class="conteiner-sub-titulos" v-if="tab == 'senha'">
                Alterar senha
                <div class="descricao">
                    Alterar senha para fazer login
                </div>
                <div class="alterar-input">
                    Senha atual:
                    <input type="password">
                    Nova senha:
                    <input type="password">
                    <button class="botao-input">
                        Confirmar
                    </button>
                </div>
            </div>
            <!-- Fim -->

            <!-- Histórico de pagamento -->
            <div class="conteiner-sub-titulos" v-if="tab == 'pagamentos'">
                Histórico de pagamento
                <div class="descricao">
                    Detalhes de cobramça
                </div>
                <div class="conteiner-pagamentos">
                    <div class="titulo-pagamentos">
                        Última cobrança:
                        <div class="escrita-pagamentos">
                            19/06/2023
                        </div>
                    </div>
                    <div class="titulo-pagamentos">
                        Sua próxima cobrança:
                        <div class="escrita-pagamentos">
                            19/07/2023
                        </div>
                    </div>
                    <div class="titulo-pagamentos">
                        Valor:
                        <div class="escrita-pagamentos">
                            R$25,90
                        </div>
                    </div>
                    <div class="titulo-pagamentos">
                        Informações do cartão:
                        <div class="escrita-pagamentos">
                            MasterCard final 7777
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim -->

            <!-- Forma de pagamentos -->
            <div class="conteiner-sub-titulos" v-if="tab =='metodos'">
                Métodos de pagamento
                <div class="descricao">
                    Edite os dados de pagamento ou
                    adicione uma forma de pagamento alternativa
                </div>
                <div class="credito">
                    Cartão de Crédito
                    <div class="cartao">
                        <img src="@/assets/mastercard.svg"> **** **** **** 7777
                        <div class="editar">
                            Editar
                        </div>
                    </div>
                    <button>
                        Adicionar forma de pagamento
                    </button>
                </div>
            </div>
            <!-- Fim -->
        </div>
        <!-- Fim -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            tab: "assinatura",
            idioma: false,
            audio: false,
            legenda: false,
            check: false
        }
    },
    methods: {
        assinatura() {
            this.tab = "assinatura"
        },
        preferencia() {
            this.tab = "preferencia"
        },
        alterarEmail() {
          this.tab = "email"
        },
        alterarSenha() {
           this.tab =  "senha"
        },
        pagamentos() {
            this.tab =  "pagamentos"
        },
        metodosPagamentos() {
            this.tab = "metodos"
        },
        clicouIdioma() {
            if (this.idioma == false) {
                this.idioma = true
            } else {
                this.idioma = false
            }
        },
        mostrarIdiomas() {
            if (this.idioma == true) {
                return "display:block;"
            }
        },
        clicouAudio() {
            if (this.audio == false) {
                this.audio = true
            } else {
                this.audio = false
            }
        },
        mostrarAudio() {
            if (this.audio == true) {
                return "display:block;"
            }
        },
        clicouLegenda() {
            if (this.legenda == false) {
                this.legenda = true
            } else {
                this.legenda = false
            }
        },
        mostrarLegenda() {
            if (this.legenda == true) {
                return "display:block;"
            }
        },
        checado() {
            this.check = false
        },
        naoChecado() {
            this.check = true
        }
    }
}
</script>
<style scoped>
.tela {
    display: flex;
    justify-content: center;
    letter-spacing: 1.5px;
    align-items: center;
    height: 80vh;
    width: 100%;
    gap: 5vw;
}

.conteiner-esquerdo {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    color: #B2B2B2;
    border-radius: 10px;
    background-color: #353535;
    padding: 0 1vw 1vw 1vw;
}

.titulo {
    font-size: 4vh;
    color: #e8e8e8;
    margin: 1vw;
}

.geral {
    text-align: center;
    padding: 1vh;
}

.sub-titulos {
    padding: 1vh;
    cursor: pointer;
    transition: 200ms;
}

.sub-titulos:hover {
    color: #f64348;
    transition: 200ms;
}

.conteiner-sub-titulos {
    width: 30vw;
    height: fit-content;
    background-color: #353535;
    color: #e8e8e8;
    font-size: 4vh;
    padding: 2vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.descricao {
    color: #B2B2B2;
    font-size: 2vh;
}

.plano {
    display: flex;
    justify-content: space-around;
    border: 2px solid #1f1f1f;
    margin: 3vh 0;
    width: 25vw;
    font-size: 2.5vh;
}

.premium {
    font-size: 2.5vh;
    color: #e8e8e8;
    margin-top: 1vw;
}

button {
    padding: 1.5vh;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background-color: #1f1f1f;
    color: #e8e8e8;
    font-weight: bold;
    transition: 300ms;
    margin-top: 1vw;
}

button:hover {
    background-color: #f64348;
    transition: 300ms;
}

.dropdown {
    position: relative;
    display: inline-block;
    font-size: 2.5vh;
    cursor: pointer;
    width: 20vw;
    color: #B2B2B2;
    font-size: 2vh;
    margin-bottom: 2vh;
    border-bottom: #B2B2B2 1px solid;
}

.conteudo-dropdown-audio,
.conteudo-dropdown-idioma,
.conteudo-dropdown-legenda {
    display: none;
    position: absolute;
    background-color: #353535;
    width: 100%;
    border-radius: 0 0 10px 10px;
    margin-top: 0.5vh;
    z-index: 1;
    color: #B2B2B2;
}

.idioma {
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    font-size: 3vh;
}

.escrita-dropdown {
    padding: 1vh 0;
}

.escrita-dropdown:hover {
    background-color: #1f1f1f;
}

.titulo-idioma {
    font-size: 1.5vh;
    color: #e8e8e8;
    margin: 1vh 0;
}

.check-on {
    font-size: 7vh;
    color: #f64348;
    cursor: pointer;
}

.check-off {
    font-size: 7vh;
    color: #B2B2B2;
    cursor: pointer;
}

.conteudo {
    display: flex;
    align-items: center;
    gap: 1vw;
    font-size: 3vh;
}

.alterar-input {
    font-size: 2.5vh;
    color: #B2B2B2;
    display: flex;
    flex-direction: column;
    width: 25vw;
    align-items: center;
    margin: 2vw 0;
}

input[type="email"],
input[type="password"] {
    background-color: #1f1f1f;
    border: none;
    padding: 1vh;
    border-radius: 10px;
    margin: 1vh 0;
    width: 20vw;
}

.botao-input {
    width: 15vw;
}

.conteiner-pagamentos {
    font-size: 2.5vh;
    color: #B2B2B2;
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
    gap: 2vh;
}

.titulo-pagamentos {
    display: flex;
    gap: 1vh;
    color: #e8e8e8;
}

.escrita-pagamentos {
    color: #B2B2B2;
}

.credito {
    font-size: 3vh;
    margin: 2vw 0;
}

.cartao {
    display: flex;
    align-items: center;
    gap: 1vw;
    color: #B2B2B2;
    margin: 1vw 0;
}

.editar {
    color: #B2B2B2;
    font-size: 2vh;
    margin-left: 2vw;
    cursor: pointer;
    transition: 300ms;
}

.editar:hover {
    color: #f64348;
    transition: 300ms;
}
</style>