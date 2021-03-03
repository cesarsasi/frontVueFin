import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  },
  {
    path: '/crearProyecto',
    name: 'CrearProyecto',
    component: () => import(/* webpackChunkName: "about" */ '../components/crearProyecto.vue')
  },
  {
    path: '/listarPostulantes',
    name: 'ListarPostulantes',
    component: () => import(/* webpackChunkName: "about" */ '../components/listarPostulantes.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router