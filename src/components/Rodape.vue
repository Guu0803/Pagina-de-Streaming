<template>
    <div class="rodape">
        <div class="infoRodape">
            <div class="termos">
                Termos e aviso de privacidade
            </div>
            <div class="termos">
                Enviar feedback
            </div>
            <div class="termos">
                Ajuda
            </div>
            <div>
                <img src="@/components/iconesRodape/copyright.png"> 1923-2023, Disney.com, Inc. ou suas afiliadas.
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "rodapeComponent"
}
</script>
<style>
.rodape {
    padding: 1vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    width: 99vw;
}

.infoRodape {
    display: flex;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    gap: 1vw;
    align-items: center;
}

.termos:hover {
    cursor: pointer;
    color: #72bcd4
}
</style>