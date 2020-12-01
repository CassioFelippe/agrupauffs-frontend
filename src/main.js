import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from '@/App.vue'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import cad_usu from '@/components/cad_usu.vue'
import chat from '@/components/chat.vue'
import router from '@/router.js'

library.add(fas)

Vue.config.productionTip = false

Vue.component('home', home)
Vue.component('login', login)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('cad_usu', cad_usu)
Vue.component('chat', chat)

Vue.use(BootstrapVue)
Vue.use(Router);

Vue.mixin({
  methods: {
    to(route) {
      this.$router.push(route).then(() => {
        this.$router.go()
      });
    },

    mobile() {
      const userAgent = navigator.userAgent;
      return userAgent.match(/Android/i)
          || userAgent.match(/webOS/i)
          || userAgent.match(/iPhone/i)
          || userAgent.match(/iPad/i)
          || userAgent.match(/iPod/i)
          || userAgent.match(/BlackBerry/i)
          || userAgent.match(/Windows Phone/i);
    }
  },
})

new Vue({
  router, render: h => h(App),
}).$mount('#app')
