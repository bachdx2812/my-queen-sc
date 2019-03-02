import Vue from 'vue'
import Router from 'vue-router'
import TimeLine from '@/components/TimeLine'
// import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/',
      name: 'TimeLine',
      component: TimeLine,
      meta: { requiresAuth: true }
    },
    // {
    //   path: '/signup',
    //   name: 'Signup',
    //   component: Signup
    // },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      // return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
      // Handle Errors here.
      alert(error.message);
      // var errorCode = error.code;
      // var errorMessage = error.message;
    });
})

export default router;
