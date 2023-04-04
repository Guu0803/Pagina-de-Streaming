import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import HomemAranhaLongeDeCasa from '@/views/HomemAranhaLongeDeCasa'
import ShangChi from '@/views/ShangChi.vue'
import Eternos from '@/views/Eternos.vue'
import PanteraNegra from '@/views/PanteraNegra.vue'
import KingsmanCirculo from '@/views/KingsmanCirculoDourado.vue'
import HomemAranhaSemVolta from '@/views/HomemAranhaSemVoltaPraCasa.vue'
import Vingadores from '@/views/VingadoresUltimato.vue'
import Xmen from '@/views/FenixNegra.vue'
import Deadpool from '@/views/Deadpool.vue'
import EsquadraoSuicida from '@/views/EsquadraoSuicida.vue'
import Cadastro from '@/views/Cadastro.vue'
import Login from '@/views/Login.vue'
import capa from '@/views/capa.vue'
import inicial from '@/views/inicio.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path:'/homem-aranha-longe-de-casa',
    name: 'Homem-AranhaLongedeCasa',
    component: HomemAranhaLongeDeCasa
  },
  {
    path: '/shang-chi',
    name: 'Shang-chi',
    component: ShangChi
  },
  {
    path: '/eternos',
    name: 'Os-eternos',
    component: Eternos
  },
  {
    path: '/pantera-negra',
    name: 'Pantera-Negra',
    component: PanteraNegra
  },
  {
    path:'/kingsman-o-circulo-dourado',
    name: 'Kingsman-O-Circulo-Dourado',
    component: KingsmanCirculo
  },
  {
    path: '/homem-aranha-sem-volta-pra-casa',
    name: 'HomemAranhaSemVoltaPraCasa',
    component: HomemAranhaSemVolta
  },
  {
    path: '/vingadores-ultimato',
    name: 'VingadoresUltimato',
    component: Vingadores
  },
  {
    path:'/xmen-fenix-negra',
    name: 'X-men-Fenix-Negra',
    component: Xmen
  },
  {
    path: '/deadpool',
    name: "deadpool-1",
    component: Deadpool
  },
  {
    path:'/esquadrao-suicida',
    name:"EsquadraoSuicida",
    component: EsquadraoSuicida
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
    path : '/inicio',
    name: "pagina-inicio",
    component:  inicial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
