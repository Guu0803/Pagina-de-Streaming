<template>
    <div class="wallpaper">
        <div class="quadro">
            <div class="criarConta">
                Criar conta 
            </div>
            
            <div class="conjuntoInputs">
                <div>
                    <input class="input" type="name" value="Nome Completo">
                </div>
                <div>
                    <input class="input" type="email" value="Email">
                </div>
                <div>
                    <div style="margin-bottom: 1vh;">
                        Senha:
                    </div>
                    <input class="input" type="password" value="password">
                </div>
                <div>
                    <div style="margin-bottom: 1vh;">
                        Confirmar Senha:
                    </div>
                    <input class="input" type="password" value="password">
                </div>
            </div>
            <div>
                <div class="conjuntoCheckBox">
                    <div class="termo">
                        <input type="checkbox" class="check">
                        Li e Concordo com os
                        <div class="termoUso">
                            Termos de uso
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" class="check">
                        Sim! Quero receber ofertas especiais <br>
                        e outras informações.
                    </div>
                </div>
            </div>
            <BotoesAcao text="Criar conta" />
            <BotoesAcao text="Já tem conta? Entrar" />
        </div>

    </div>
</template>
<script>
import BotoesAcao from '@/components/BotoesAcao.vue'
export default {
    name: "pagina-cadastro",
    components: {
        BotoesAcao,
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
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
}

.quadro {
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

.criarConta {
    font-size: 5vh;
    text-align: center;
    margin-bottom: 3vh;
}
.conjuntoInputs {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center;
    
}

.input {
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

.input:hover {
    background-color: #898989;
    transition: 100ms;
}

.conjuntoCheckBox {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    margin: 4vh 0 3vh 2vw;
}

.check {
    cursor: pointer;

}

.termo {
    display: flex;
    gap: 1vh;
}

.termoUso {
    color: #f64348;
    cursor: pointer;
}

</style>