import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from '@/views/Cadastro.vue'
import Login from '@/views/Login.vue'
import capa from '@/views/capa.vue'
import categoria from '@/views/Categoria.vue'
import Home from '@/views/Home.vue'
import MinhaPagina from '@/views/MinhaConta.vue'
import Perfil from '@/views/Perfil.vue'
import Inicio from '@/views/Inicio.vue'

const routes = [
  {
    path: '/home',
    name: "home",
    component: Home
  },
  {
    path: '/cadastro',
    name:"pagina-cadastro",
    component: Cadastro
  },
  {
    path: '/login',
    name: "pagina-login",
    component: Login
  },
  {
    path: '/capa',
    name: "capa-da-pagina",
    component: capa
  }, 
  {
    path: '/categoria/:type?',
    name: 'pagina-categoria',
    component: categoria
  },
  {
    path: '/minha-conta',
    name: "minha-conta",
    component: MinhaPagina
  },
  {
    path: '/meu-perfil',
    name: 'meu-perfil',
    component: Perfil
  },
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
