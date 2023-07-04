import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from '@/views/Cadastro.vue'
import Login from '@/views/Login.vue'
import categoria from '@/views/Categoria.vue'
import Home from '@/views/Home.vue'
import MinhaPagina from '@/views/MinhaConta.vue'
import Perfil from '@/views/Perfil.vue'
import Inicio from '@/views/Inicio.vue'
import Animes from '@/views/Animes.vue'
import Series from '@/views/Series.vue'
import Filmes from '@/views/Filmes.vue'
import Ajuda from '@/views/Ajuda.vue'
import Termos from '@/views/TermosDeUso.vue'
import Politica from '@/views/PoliticaDePrivacidade.vue'

const routes = [
  // Rota Home
  {
    path: '/home',
    name: "home",
    component: Home
  },
  // Rota Cadastro
  {
    path: '/cadastro',
    name:"pagina-cadastro",
    component: Cadastro
  },
  // Rota Login 
  {
    path: '/login',
    name: "pagina-login",
    component: Login
  },
  // Rota Categoria
  {
    path: '/categoria/:type?',
    name: 'pagina-categoria',
    component: categoria
  },
  // Rota Minha Conta
  {
    path: '/minha-conta',
    name: "minha-conta",
    component: MinhaPagina
  },
  // Rota Meu Perfil
  {
    path: '/meu-perfil',
    name: 'meu-perfil',
    component: Perfil
  },
  // Rota Inicio
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  // Rota Animes
  {
    path: '/animes',
    name: 'paginaAnime',
    component: Animes
  },
  // Rota Series 
  {
    path: '/series',
    name:'paginaSeries',
    component: Series
  },
  // Rota Filmes'
  {
    path: '/filmes',
    name: 'paginaFilmes',
    component: Filmes
  },
  // Rota Ajuda 
  {
    path: '/ajuda',
    name: 'paginaAjuda',
    component: Ajuda
  },
  // Rota Termos de Uso
  {
    path:'/termos-de-uso',
    name: "paginaTermosDeUso",
    component: Termos
  },
  // Rota Politica de Privacidade
  {
    path: '/politica-de-privacidade',
    name:"paginaPoliticaDePrivacidade",
    component: Politica
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
