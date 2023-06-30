<template>
    <div class="tela">
        <div class="conteiner-perfil">
            <div class="perfil" v-for="usuario in listaUsuarios" :key="usuario.id">
                <span class="material-icons icone-perfil" v-if="usuario.img == false">
                    person
                </span>
                <div :style="getImgUser1(usuario.img)" v-if="usuario.img">
                </div>
                {{ usuario.nome }}
                <div class="conteiner-editar" :style="editarAparece()">
                    <label :for="'idDoInput' + usuario.id">
                        <span class="material-icons icones">
                            edit
                        </span>
                    </label>
                    <span class="material-icons icones" v-on:click="deletar()">
                        delete
                    </span>
                </div>
                <input type="file" style="display:none" :id="'idDoInput' + usuario.id"
                    v-on:change="event => alterarImgUser1(event, usuario)">
            </div>
            <div class="perfil" v-on:click="addUsuario()">
                <span class="material-icons icone-perfil">
                    person_add
                </span>
                Novo perfil
            </div>
        </div>
        <div class="novo-usuario-conteiner" v-if="adicionarUsuario == true"> 
            <div class="titulo-usuario-conteiner" >
                Adicionar novo Usuario
            </div>
            Nome:
            <input type="name" v-model="nomeUsuario" class="input-nome">
            <input type="file" v-on:change="event => imagemDoUser(event)" class="input-file">
            <button v-on:click="confimarNovoUsario()">
                Confirmar
            </button>
        </div>
        <div class="msg-alerta" v-if="mensagemAlerta == true">
            Numero máximo de usuários foi atingido
            <button v-on:click="fecharMsg()">
                Fechar
            </button>
        </div>
        <button v-on:click="editarBtn()" v-if="editarPerfil == true">
            Editar Perfil
        </button>
        <button v-on:click="confirmarBtn()" v-if="confirmarPerfil == true">
            Confirmar
        </button>
    </div>
</template>
<script>
export default {
    name: "perfilPag",
    data() {
        return {
            editarPerfil: true,
            confirmarPerfil: false,
            nomeUsuario: "",
            listaUsuarios: [
                {
                    nome: "Gustavo",
                    img: "",
                    id: 1
                },
            ],
            mensagemAlerta: false,
            adicionarUsuario: false,
            confirmou: false,
            imagemEscolhida:''
        }
    },
    methods: {
        addUsuario() {
            if (this.listaUsuarios.length <= 4) {
                this.adicionarUsuario = true
            } else {
                this.mensagemAlerta = true
            }
        },    
        confimarNovoUsario() {
            if (this.nomeUsuario && this.imagemEscolhida) {
                this.adicionarUsuario = false
                this.confirmar = true
                    let usuario = {
                        nome: this.nomeUsuario,
                        img: this.imagemEscolhida,
                        id: this.listaUsuarios[this.listaUsuarios.length - 1].id + 1
                    }
                    this.listaUsuarios.push(usuario)
                    this.adicionarUsuario = false
                }
        },
        editarBtn() {
            this.confirmarPerfil = true
            this.editarPerfil = false
        },
        editarAparece() {
            if (this.confirmarPerfil == true)
                return "position: absolute; font-size:5vh; height: 20vh; width: 9.7vw;display: flex;justify-content: center;align-items: center;border-radius: 50%;background-color: rgba(0, 0, 0, 0.5);"
        },
        confirmarBtn() {
            this.confirmarPerfil = false
            this.editarPerfil = true
        },
        alterarImgUser1(event, usuario) {
            usuario.img = URL.createObjectURL(event.target.files[0])
            console.log(event.target.files[0])
            this.imgUsuario1 = true
        },
        imagemDoUser(event) {
            this.imagemEscolhida = URL.createObjectURL(event.target.files[0])
        },
        getImgUser1(imagemDoUsuario) {
            return "background-image: url(" + imagemDoUsuario + "); height:20vh; width:20vh; background-size:cover; border-radius:50%;"
        },
        fecharMsg() {
            this.mensagemAlerta = false
        },
        deletar() {
            for (let index = 0; index < this.listaUsuarios.length; index++) {
                const element = this.listaUsuarios[index];
                element.splice(index, 1)
            }
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
    position: relative;
}

.conteiner-editar {
    display: none;
    gap: 1vw;
}

.icones {
    cursor: pointer;
    color: #e8e8e8;
}

.icones:hover {
    color: #f64348;
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
.novo-usuario-conteiner {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111111;
    border-radius: 10px;
    color: #B2B2B2;
    padding: 2vw;
    gap: 1vw;
}
.input-nome {
    padding: 1vh;
    border: none;
    border-radius: 10px;
}
.input-file {
    cursor: pointer;
}
.titulo-usuario-conteiner {
    font-size: 3vh;
    color: #e8e8e8;
}
.perfil:hover {
    color: #f64348;
    cursor: pointer;
}

.perfil:hover>.icone-perfil {
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
    cursor: pointer;
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
.msg-alerta {
    color: #B2B2B2;
    font-size: 3vh;
}
</style>