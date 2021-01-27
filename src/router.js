import Router from 'vue-router'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import cad_usu from '@/components/cad_usu.vue'
import grupos from '@/components/grupos.vue'
import grupo from '@/components/grupo-show.vue'

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/cad_usu', component: cad_usu },
    { path: '/grupos', component: grupos },
    { path: '/grupos/:id', component: grupo }
  ]
})


export default router
