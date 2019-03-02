<template>
    <div class="overlay">
      <form>
        <div class="con">
          <header class="head-form">
            <h2>Love of my life</h2>
          </header>
          <br>
          <div class="field-set">
            <input class="form-input" type="text" placeholder="UserName" v-model="username" required>
            <br>
            <input class="form-input" type="password" placeholder="Password" id="pwd" name="password" v-model="password" required>
            <br>
            <button class="log-in" type="button" @click="signIn"> Log In </button>
          </div>
        </div>
      </form>
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
          alert(`I Love you my dear ${user.user.email}`);
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

<style>
body {
  background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
background-attachment: fixed;
  background-repeat: no-repeat;

  font-family: 'Vibur', cursive;
  font-family: 'Abel', sans-serif;
  opacity: .95;
}
</style>
