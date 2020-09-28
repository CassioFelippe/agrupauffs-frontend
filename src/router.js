import Router from 'vue-router'
import home from '@/components/home.vue'
import login from '@/components/login.vue'

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: home },
    { path: '/login', component: login }
  ]
})


export default router
