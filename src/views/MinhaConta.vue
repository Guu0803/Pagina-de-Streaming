<template>
    <div class="tela">
        <div class="conteiner-esquerdo">
            <div class="geral">
                <div class="titulo">
                    Geral
                </div>
                <div class="sub-titulos">
                    Dados da Assinatura
                </div>
                <div class="sub-titulos">
                    Preferências
                </div>
                <div class="sub-titulos">
                    Alterar E-mail / Alterar Senha
                </div>
                <div class="sub-titulos">
                    Gerenciamento de Dispositivos
                </div>
            </div>
            <div class="pagamentos">
                <div class="titulo">
                    Pagamentos
                </div>
                <div class="sub-titulos">
                    Histórico de Pagamentos
                </div>
                <div class="sub-titulos">
                    Métodos de Pagamento
                </div>
            </div>
        </div>
        <div class="conteiner-direito">
            <div class="dados-assinatura">
                <div>
                    Plano
                </div>
                <div>
                    Básico <br>
                    R$25,90/mês
                </div>
                <div>
                    Data da próxima fatura
                </div>
                <div>
                    2 de Julho de 2023
                </div>
            </div>
            <div class="preferencias">
                <div>
                    Idioma 
                </div>
                <div>
                    Português (Brasil)
                </div>
                <div>
                    Video
                </div>
                <div>
                    Português (Brasil)
                </div>
                <div>
                    Legendas 
                </div>
                <div>
                    <input type="checkbox"> Conteúdo adulto
                </div>
            </div>
            <div class="alteracoes">
                <div>
                    Alterar E-mail:
                    <input type="email">
                </div>
                <div>
                    Alterar Senha:
                    <input type="password">
                </div>
            </div>
            <div class="gereciamento">
                dispositivos logados
            </div>
            <div class="historico=pagamentos">
                <div>
                    Último pagamento <br>
                    Data: 19/06/2023
                </div>
                <div>
                    Próximo pagamento <br>
                    Data: 19/07/2023
                </div>
            </div>
            <div class="metodo-pagamento">
                <div>
                    Cartão de Crédito
                </div>
                <div>
                    Cartão de Débito
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.tela {
    display: flex;
    justify-content: space-around;
    letter-spacing: 1.5px;
}
.conteiner-esquerdo {
    border: 1px solid rebeccapurple;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    color: #B2B2B2;

}
.conteiner-direito {
    border: 1px solid red;
}
.titulo {
  font-size: 4vh;
  margin-bottom: 2vw;
}
.geral, .pagamentos {
   text-align: center;
    padding: 1vh;
}
.sub-titulos {
    padding: 1vh;
    border: 1px solid blue;
    cursor: pointer;
    transition: 200ms;
}
.sub-titulos:hover {
    color: #f64348;
    transition: 200ms;
}

</style>