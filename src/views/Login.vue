<template>
    <div class="wallpaper">
        <div class="login">
            <div class="entrar">
                Entrar
            </div>
            <div class="naoPossuiConta">
                Não possui uma conta?
                <RouterLink to="/cadastro" class="criarConta">
                    Criar conta
                </RouterLink>
            </div>
            <div class="conjuntoInputs">
                <input type="email" value="Email">
                <input type="password" value="password">
            </div>
            <div class="esqueciSenha">
                Esqueceu a senha?
            </div>
            <BotaoAcao  text="Entrar" />
        </div>
    </div>
    
</template>
<script>
import BotaoAcao from '@/components/BotoesAcao.vue'
export default {
    name: "pagina-login",
    components: {
        BotaoAcao,
    }
}
</script>
<style scoped>
body {
    margin: 0;
}

.wallpaper {
    background-color: #1f1f1f;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
}

.login {
    width: fit-content;
    background-color: #1f1f1f;
    border-radius: 2vh;
    display: flex;
    flex-direction: column;
    color:#B2B2B2;
    box-shadow: 1.5vh 1.5vh 2vh black, -1.5vh -1.5vh 2vh #343434;
    padding: 3vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
}


.entrar {
    font-size: 5vh;
    text-align: center;
}

.naoPossuiConta {
    display: flex;
    gap: 1vh;
    margin-bottom: 3vh;
    justify-content: center;
}

.criarConta {
    color: #f64348;
    text-decoration: none;
}

.conjuntoInputs {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center;
}

input {
    background-color: #404040;
    border: none;
    height: 5vh;
    width: 25vw;
    padding-left: 1vh;
    border-radius: 2vh;
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
    box-shadow: inset 0px 0px 1vh 0.5vh #00000020;
}

input:hover {
    background-color: #898989;
    transition: 100ms;
}

.esqueciSenha {
    margin: 1vw 0 0 3vw;
    color: #f64348;
    cursor: pointer;
    margin-bottom: 3vh;
}

</style>