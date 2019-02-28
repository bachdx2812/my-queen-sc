<template>
  <div>
    <form class="login-form">
      <p class="login-text">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-lock fa-stack-1x"></i>
        </span>
      </p>
      <input v-model="username" type="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
      <input type="password" v-model="password" class="login-password" required="true" placeholder="Password" />
      <button type="button" class="login-submit" @click="signIn">Log In </button>
    </form>
    <div class="underlay-photo"></div>
    <div class="underlay-black"></div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/login.scss';
</style>
