import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/Home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Variadores',
    name: 'Variadores',
    component: () => import('../views/Variadores.vue')
  },
  {
    path:'/Administracion',
    name:'Administracion',
    component:() => import('..//views/Administracion.vue')
  }
  ]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
