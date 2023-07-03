<template>
    <div class="tela">
        Central de Ajuda
        <div class="conteiners">
            <div class="conteiner-esquerdo">
                <details>
                    <summary>
                        PLanos
                    </summary>
                    <p> Como assinar "nome do site" </p>
                    <p> Alterar Plano </p>
                    <p> Alterar forma de pagamento </p>
                    <p> Cancelar conta </p>
                </details>
                <details>
                    <summary>
                        Configurações
                    </summary>
                    <p> Não consegue acessar "nome do site" </p>
                    <p> Alterar Idioma </p>
                    <p> Alterar E-mail </p>
                    <p> Alterar Senha </p>
                    <p> Gerenciar Perfis</p>
                    <p> Downloads dos titulos </p>
                </details>
                <details>
                    <summary>
                        Termos de Uso / Política de Privacidade
                    </summary>
                    <p> Termos de Uso </p>
                    <p> Política de Privacidade </p>
                </details>
            </div>
            <div class="conteiner-direito">
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
        </div>
    </div>
</template>
<script>
export default {
    name: "paginaAjuda"
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

</style>