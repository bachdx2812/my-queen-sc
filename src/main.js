import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBQqFqJ9VtJiJBI9oWn75UsTiBVAb8k_vw",
  authDomain: "my-queen-1169c.firebaseapp.com",
  databaseURL: "https://my-queen-1169c.firebaseio.com",
  projectId: "my-queen-1169c",
  storageBucket: "",
  messagingSenderId: "1051102495347"
}
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
