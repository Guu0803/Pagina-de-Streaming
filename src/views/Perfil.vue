<template>
    <div class="tela">
        <div class="conteiner-perfil">
            <div class="perfil">
                <span class="material-icons icone-perfil">
                    person
                </span>
                Gustavo
                <span class="material-icons editar" :style="editarAparece()">
                    edit
                </span>
            </div>
            <div class="perfil">
                <span class="material-icons icone-perfil">
                    person_add
                </span>
                Novo perfil
                <span class="material-icons editar" :style="editarAparece()">
                    edit
                </span>
                
            </div>
        </div>
        <button v-on:click="botao()" v-if="cliqueiEditar == true">
            Editar Perfil
        </button>
        <button v-on:click="confirmar()" v-if="cliqueiEditar == false">
            Confirmar
        </button>
    </div>
</template>
<script>
export default {
    name: "perfilPag",
    data() {
        return {
            cliqueiBotao: false,
            cliqueiEditar: true
        }
    },
    methods: {
        botao() {
            this.cliqueiBotao = true
            this.cliqueiEditar = false
        },
        editarAparece() {
            if(this.cliqueiBotao == true)
            return "position: absolute; font-size:5vh; height: 20vh; width: 9.7vw;display: flex;justify-content: center;align-items: center;border-radius: 50%;background-color: rgba(0, 0, 0, 0.5);"
        },
        confirmar() {
            this.cliqueiBotao = false
            this.cliqueiEditar = true
        }
    }
}
</script>
<style scoped>
.tela {
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2vw;
}

.conteiner-perfil {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25vh;
    gap: 4vw;
}

.perfil {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e8e8e8;
    gap: 1vw;
    font-size: 3vh;
    transition: 300ms;
    cursor: pointer;
}
.perfil:hover  {
    color: #f64348;
}
.perfil:hover > .icone-perfil {
    color: #f64348;
    border-color: #f64348;
    transition: 300ms;
}
.icone-perfil {
    font-size: 15vh;
    color: #B2B2B2;
    border: 3px solid #B2B2B2;
    padding: 1vw;
    border-radius: 50%;
    cursor: pointer;
    background-color: #353535;
    transition: 300ms;
}

button {
    font-size: 2.5vh;
    padding: 1.5vh;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background-color: #353535;
    color: #B2B2B2;
    font-weight: bold;
    transition: 300ms;
    margin-top: 2vw;
}

button:hover {
    background-color: #f64348;
    transition: 300ms;
    color: white;
}

.editar {
    display: none;
}
.editar:hover {
    color: #f64348;
}
</style>