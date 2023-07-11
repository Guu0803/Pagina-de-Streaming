<template>
    <div class="tela">
        <div class="quadro">
            <div class="criar-conta">
                Criar conta
            </div>
            <div class="conjunto-inputs">
                <input class="input" type="name" placeholder="Nome Completo" v-model="nome">
                <input class="input" type="email" placeholder="Email" v-model="email">
                <div class="conteiner-senha">
                    <input class="input" :type="visulalizarSenha(senhaVisivel)" placeholder="Senha" v-model="senha">
                    <div class="visibilidade" v-on:click="mostrarSenha()">
                        <span class="material-icons" v-if="this.senhaVisivel == false">
                            visibility
                        </span>
                        <span class="material-icons" v-if="this.senhaVisivel == true">
                            visibility_off
                        </span>
                    </div>
                </div>
                <div class="conteiner-senha">
                    <input class="input" :type="visualizarConfirmarSenha(senhaNovamenteVisivel)"
                        placeholder="Digite a Senha novamente" v-model="senhaNovamente">
                    <div class="visibilidade" v-on:click="mostrarSenhaNovamente()">
                        <span class="material-icons" v-if="this.senhaNovamenteVisivel == false">
                            visibility
                        </span>
                        <span class="material-icons" v-if="this.senhaNovamenteVisivel == true">
                            visibility_off
                        </span>
                    </div>
                </div>
            </div>
            <div class="conteiner-checkbox">
                <input type="checkbox" class="check">
                Sim! Quero receber ofertas especiais <br>
                e outras informações.
            </div>
            <div class="condicoes">
                Ao criar uma conta, você concorda com os
                <div class="termos" v-on:click="termosUso()">
                    Termos de uso
                </div>
                e a
            </div>
            <div class="politica" v-on:click="politica()">
                Política de Privacidade.
            </div>
            <BotoesAcao text="Criar conta" v-on:click="cadastrarUsuario()" />
            <div class="logar">
                <div class="separacao">
                </div>
                Já possui uma conta?
                <div class="separacao">
                </div>
            </div>
            <BotoesAcao text="Entrar" v-on:click="entrar()" />
        </div>
        <div class="conteiner-msg" v-if="criouConta == true">
            <div class="msg">
                Conta criada com sucesso
                <BotoesAcao text="Fechar" v-on:click="fecharMsg()"/>
            </div>
          
        </div>
    </div>
</template>
<script>
import BotoesAcao from '@/components/BotoesAcao.vue'
export default {
    name: "pagina-cadastro",
    components: {
        BotoesAcao,
    },
    data() {
        return {
            senhaVisivel: false,
            senhaNovamenteVisivel: false,
            listaUsuarios: [],
            nome: '',
            email: '',
            senha: '',
            senhaNovamente: '',
            criouConta: false
        }
    },
    methods: {
        termosUso() {
            this.$router.push('/termos-de-uso')
        },
        politica() {
            this.$router.push('/politica-de-privacidade')
        },
        entrar() {
            this.$router.push('/login')
        },
        mostrarSenha() {
            if (this.senhaVisivel == false) {
                this.senhaVisivel = true
            } else {
                this.senhaVisivel = false
            }
        },
        mostrarSenhaNovamente() {
            if (this.senhaNovamenteVisivel == false) {
                this.senhaNovamenteVisivel = true
            } else {
                this.senhaNovamenteVisivel = false
            }
        },
        visulalizarSenha(senhaVisiel) {
            if (senhaVisiel == true) {
                return "text"
            } else {
                return "password"
            }
        },
        visualizarConfirmarSenha(senhaNovamenteVisivel) {
            if (senhaNovamenteVisivel == true) {
                return "text"
            } else {
                return "password"
            }
        },
        cadastrarUsuario() {
            if (this.senha == this.senhaNovamente) {
                let Usuario = {
                    nomeUsuario: this.nome,
                    emailUsario: this.email,
                    senhaUsario: this.senha,
                    id: this.listaUsuarios.length + 1
                }
                this.listaUsuarios.push(Usuario)
                console.log(this.listaUsuarios)
                localStorage.setItem("Usuario", JSON.stringify(Usuario))
            }
        },
        fecharMsg(){
            this.criouConta = false
        }


    }

}
</script>
<style scoped>
.tela {
    background-color: #1f1f1f;
    justify-content: center;
    width: 100%;
    padding: 5vw 0;
    display: flex;
    align-items: center;
    position: relative;
}

.quadro {
    width: fit-content;
    background-color: #1f1f1f;
    border-radius: 10px;
    color: #e8e8e8;
    box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
    padding: 3vh;
    font-size: large;
}

.criar-conta {
    font-size: 5vh;
    text-align: center;
    margin-bottom: 3vh;
}

.conjunto-inputs {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center;
}

.input {
    background-color: #343434;
    border: none;
    height: 4vh;
    width: 25vw;
    padding-left: 1vh;
    border-radius: 2vh;
    color: #e8e8e8;
    font-size: medium;
    box-shadow: inset 0px 0px 1vh 0.5vh #00000020;
    font-family: 'Karla', sans-serif;

}

::placeholder {
    color: #959595;
    font-family: 'Karla', sans-serif;

}

input[type=checkbox] {
    accent-color: #f64348;
    cursor: pointer;
}

input:hover {
    background-color: #646464;
    transition: 200ms ease-in-out;
}

.conteiner-senha {
    position: relative;
    display: flex;
    align-items: center;
    color: #959595;
}

.visibilidade {
    position: absolute;
    right: 1vw;
    cursor: pointer;
}

.visibilidade:hover {
    color: #f64348;
}

.conteiner-checkbox {
    display: flex;
    font-size: 2.5vh;
    gap: 1vh;
    align-items: baseline;
    margin: 3vh 0 5vh 2vh;
}

.condicoes {
    display: flex;
    gap: 1vh;
    font-size: 2vh;
}

.politica {
    font-size: 2vh;
    width: fit-content;
    margin-bottom: 2vw;
}

.termos:hover,
.politica:hover {
    color: #f64348;
    cursor: pointer;
}

.logar {
    display: flex;
    align-items: center;
    gap: 1vh;
    margin-bottom: 3vh;
    justify-content: center;
    font-size: 2vh;
}

.separacao {
    border-bottom: 1px solid #e8e8e8;
    width: 5vw;
}
.conteiner-msg {
    position: absolute;
    color: #e8e8e8;
    font-size: 3vh;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.msg {
    width: fit-content;
    height: auto;
    background-color: #1f1f1f;
    border-radius: 10px;
    padding: 1vw;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    text-align: center;

}
</style>