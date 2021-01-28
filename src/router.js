import Router from 'vue-router'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import cad_usu from '@/components/cad_usu.vue'
import grupos from '@/components/grupos.vue'
import gruposhow from '@/components/grupo-show.vue'
import gruponew from '@/components/grupo-new.vue'
import grupoedit from '@/components/grupo-edit.vue'

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/cad_usu', component: cad_usu },
    { path: '/grupos', component: grupos },
    { path: '/grupo/show/:id', component: gruposhow },
    { path: '/grupo/edit/:id', component: grupoedit },
    { path: '/grupo/new', component: gruponew }
  ]
})


export default router
