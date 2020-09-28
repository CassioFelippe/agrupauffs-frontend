import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'

import App from '@/App.vue'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import router from '@/router.js'


Vue.config.productionTip = false

Vue.component('home', home)
Vue.component('login', login)

Vue.use(BootstrapVue)
Vue.use(Router);

Vue.mixin({
  methods: {
    to(route) {
      this.$router.push(route).catch(e => e).then(() => {
        this.$router.go()
      });
    },
  },
})

new Vue({
  router, render: h => h(App),
}).$mount('#app')
