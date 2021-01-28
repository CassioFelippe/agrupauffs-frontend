import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import App from '@/App.vue'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import cad_usu from '@/components/cad_usu.vue'
import chat from '@/components/chat.vue'
import goback from '@/components/go-back.vue'
import router from '@/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.config.productionTip = false

Vue.component('home', home)
Vue.component('login', login)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('cad_usu', cad_usu)
Vue.component('chat', chat)
Vue.component('go-back', goback)

Vue.use(BootstrapVue)
Vue.use(Router)
Vue.use(VueAxios, axios)

Vue.mixin({
  methods: {
    mobile() {
      const userAgent = navigator.userAgent;
      return userAgent.match(/Android/i)
          || userAgent.match(/webOS/i)
          || userAgent.match(/iPhone/i)
          || userAgent.match(/iPad/i)
          || userAgent.match(/iPod/i)
          || userAgent.match(/BlackBerry/i)
          || userAgent.match(/Windows Phone/i);
    },

    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    
    goback() {
      this.$router.back();
    },

    redirect(route) {
      this.$router.push(route || '/').catch(e => e).then(() => {
        this.$router.go();
      });
    }
  },

  data() {
    return {
      packagejson: require('@/../package.json')
    }
  }
})

new Vue({
  router, render: h => h(App),
}).$mount('#app')
