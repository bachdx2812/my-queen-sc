import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vuefire from 'vuefire'
Vue.use(vuefire);

import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
