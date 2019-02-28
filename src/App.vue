<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!--   <router-link to="/">Home</router-link> | -->
    <!--   <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <!-- <router-view/> -->
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import './assets/styles/hello_world.css';
</style>
