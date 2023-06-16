import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from '@/views/Cadastro.vue'
import Login from '@/views/Login.vue'
import capa from '@/views/capa.vue'
import categoria from '@/views/Categoria.vue'
import Inicio from '@/views/inicio.vue'

const routes = [
  {
    path: '/',
    name: "inicio",
    component: Inicio
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
    path: '/categoria/:type',
    name: 'pagina-categoria',
    component: categoria
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
