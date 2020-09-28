import Vue from 'vue'
import App from '@/App.vue'
import BootstrapVue from 'bootstrap-vue'
import home from '@/components/home.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.component('home', home)

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
