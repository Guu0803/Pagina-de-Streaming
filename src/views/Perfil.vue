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
                    <label :for="'idDoInput'+ usuario.id">
                        <span class="material-icons icones">
                            edit
                        </span>
                    </label>
                    <span class="material-icons icones">
                        delete
                    </span>
                </div>
                <input type="file" style="display:none" :id="'idDoInput'+ usuario.id" v-on:change="event => alterarImgUser1(event, usuario)">
            </div>
            <!-- <div class="perfil" v-if="numeroUsuario >= 2">
                <span class="material-icons  icone-perfil" v-if="imgUsuario2 == false">
                    person
                </span>
                <div :style="getImgUser2()" v-if="imagem2">
                </div>
                Novo perfil
                 <div class="conteiner-editar" :style="editarAparece()">
                    <label for="img2">
                        <span class="material-icons icones">
                            edit
                        </span>
                    </label>
                    <span class="material-icons icones">
                        delete
                    </span>
                </div>
                <input type="file" style="display: none;" id="img2" v-on:change="event => alterarImgUser2(event)">
            </div>

            <div class="perfil" v-if="numeroUsuario >= 3">
                <span class="material-icons  icone-perfil" v-if="imgUsuario3 == false">
                    person
                </span>
                <div :style="getImgUser3()" v-if="imagem3">
                </div>
                Novo perfil
                <div class="conteiner-editar" :style="editarAparece()">
                    <label for="img3">
                        <span class="material-icons icones">
                            edit
                        </span>
                    </label>
                    <span class="material-icons icones">
                        delete
                    </span>
                </div>
                <input type="file" style="display: none;" id="img3" v-on:change="event => alterarImgUser3(event)">
            </div>

            <div class="perfil" v-if="numeroUsuario >= 4">
                <span class="material-icons  icone-perfil" v-if="imgUsuario4 == false">
                    person
                </span>
                <div :style="getImgUser4()" v-if="imagem4">
                </div>
                Novo perfil
                <div class="conteiner-editar" :style="editarAparece()">
                    <label for="img4">
                        <span class="material-icons icones">
                            edit
                        </span>
                    </label>
                    <span class="material-icons icones">
                        delete
                    </span>
                </div>
                <input type="file" style="display: none;" id="img4" v-on:change="event => alterarImgUser4(event)">
            </div>

            <div class="perfil" v-if="numeroUsuario >= 5">
                <span class="material-icons  icone-perfil" v-if="imgUsuario5 == false">
                    person
                </span>
                <div :style="getImgUser5()" v-if="imagem5">
                </div>
                Novo perfil
                <div class="conteiner-editar" :style="editarAparece()">
                    <label for="img5">
                        <span class="material-icons icones">
                            edit
                        </span>
                    </label>
                    <span class="material-icons icones">
                        delete
                    </span>
                </div>
                <input type="file" style="display: none;" id="img5" v-on:change="event => alterarImgUser5(event)">
            </div> -->
            <div class="perfil" v-on:click="addUsuario()">
                <span class="material-icons icone-perfil">
                    person_add
                </span>
                Novo perfil
            </div>
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
            imagem1: '',
            imagem2: '',
            imagem3: '',
            imagem4: '',
            imagem5: '',
            imgUsuario1: false,
            imgUsuario2: false,
            imgUsuario3: false,
            imgUsuario4: false,
            imgUsuario5: false,
            listaUsuarios: [
                {
                    nome: "Gustavo",
                    img: "",
                    id: 1
                },
                {
                    nome: "mira",
                    img: "",
                    id: 2
                }
            ],
            mensagemAlerta: false
        }
    },
    methods: {
        addUsuario() {
            let usuario = {
                nome: "novo perfil",
                img: '',
                id: this.listaUsuarios[this.listaUsuarios.length - 1].id + 1
            }
            this.listaUsuarios.push(usuario)
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
        alterarImgUser2(event) {
            this.imagem2 = URL.createObjectURL(event.target.files[0])
            console.log(event.target.files[0])
            this.imgUsuario2 = true
        },
        alterarImgUser3(event) {
            this.imagem3 = URL.createObjectURL(event.target.files[0])
            console.log(event.target.files[0])
            this.imgUsuario3 = true
        },
        alterarImgUser4(event) {
            this.imagem4 = URL.createObjectURL(event.target.files[0])
            console.log(event.target.files[0])
            this.imgUsuario4 = true
        },
        alterarImgUser5(event) {
            this.imagem5 = URL.createObjectURL(event.target.files[0])
            console.log(event.target.files[0])
            this.imgUsuario5 = true
        },
        getImgUser1(imagemDoUsuario) {
            return "background-image: url(" + imagemDoUsuario + "); height:20vh; width:20vh; background-size:cover; border-radius:50%;"
        },
        getImgUser2() {
            return "background-image: url(" + this.imagem2 + "); height:20vh; width:20vh; background-size:cover; border-radius:50%;"
        },
        getImgUser3() {
            return "background-image: url(" + this.imagem3 + "); height:20vh; width:20vh; background-size:cover; border-radius:50%;"
        },
        getImgUser4() {
            return "background-image: url(" + this.imagem4 + "); height:20vh; width:20vh; background-size:cover; border-radius:50%;"
        },
        getImgUser5() {
            return "background-image: url(" + this.imagem5 + "); height:20vh; width:20vh; background-size:cover; border-radius:50%;"
        },
        fecharMsg() {
            this.mensagemAlerta = false
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