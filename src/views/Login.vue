<template>
    <div class="tela">
        <div class="login">
            <div class="entrar">
                Entrar
            </div>
            <div class="conjunto-inputs">
                <input type="email" placeholder="Email">
                <div class="conteiner-senha">
                    <input type="password" placeholder="Senha">
                    <div class="visibilidade" v-on:click="mostrarSenha()">
                        <span class="material-icons" v-if="senhaVisiel == false">
                            visibility
                        </span>
                        <span class="material-icons" v-if="senhaVisiel == true">
                            visibility_off
                        </span>
                    </div>
                </div>
            </div>
            <div class="esqueci-senha">
                Esqueci a senha
            </div>
            <BotaoAcao text="Entrar" />
            <div class="nao-possui-conta">
                <div class="separacao">
                </div>
                Não possui uma conta?
                <div class="separacao">
                </div>
            </div>
            <BotaoAcao text="Criar Conta" v-on:click="criarConta()" />
        </div>
    </div>
</template>
<script>
import BotaoAcao from '@/components/BotoesAcao.vue'
export default {
    name: "pagina-login",
    components: {
        BotaoAcao,
    },
    data() {
        return {
            senhaVisiel: false
        }
    },
    methods: {
        criarConta() {
            this.$router.push('/cadastro')
        },
        mostrarSenha() {
            if(this.senhaVisiel == false){
                this.senhaVisiel = true
            } else {
                this.senhaVisiel = false
            }
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
}

.login {
    width: fit-content;
    background-color: #1f1f1f;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color: #e8e8e8;
    box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
    padding: 3vh;
}

.entrar {
    font-size: 5vh;
    text-align: center;
    margin-bottom: 1vw;
}

.nao-possui-conta {
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


.conjunto-inputs {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center;
    justify-content: center;
}

.conteiner-senha {
    display: flex;
    align-items: center;
    color: #959595;
    position: relative;
}

.visibilidade {
    position: absolute;
    right: 1vw;
    cursor: pointer;
}

.visibilidade:hover {
    color: #f64348;
}

input {
    background-color: #343434;
    border: none;
    height: 4vh;
    width: 25vw;
    padding-left: 1vh;
    border-radius: 2vh;
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
    box-shadow: inset 0px 0px 1vh 0.5vh #00000020;
    transition: 200ms ease-in-out;
}

::placeholder {
    color: #959595;
    font-family: 'Karla', sans-serif;

}

input:hover {
    background-color: #646464;
    transition: 200ms ease-in-out;
}

.esqueci-senha {
    font-size: 2vh;
    margin: 1vh 0 2vw 17vw;
    cursor: pointer;

}

.esqueci-senha:hover {
    color: #f64348;
}</style>