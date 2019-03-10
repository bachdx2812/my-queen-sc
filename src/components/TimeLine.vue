<template>
  <section class='block-content t-block-teal l-block-spacing'>
    <div class='l-contained'>
        <header class="heading-group">
            <h2>Our Story</h2>
            <p class="subtitle">
              <router-link to="/events">
                Lets write our story together
              </router-link>
            </p>
        </header>
        <ul class="timeline-list">
            <li v-for="event in events" v-bind:key="event.title">
                <div class="content">
                    <h3 class="title">{{ event.title }}</h3>
                    <h4>{{ event.time }}</h4>
                    <p>{{ event.content }}</p>
                    <p v-if="event.htmlContent" v-html="event.htmlContent"></p>
                </div>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase';

export default {
  created: function() {
    this.database = firebase.database();
    this.eventsRef = this.database.ref('events');

    var _this = this;
    this.eventsRef.on('value', function(snapshot) {
      _this.events = snapshot.val();
    });
  },
  data: function() {
    return {
      events: [],
      database: null,
      eventsRef: null,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/hello_world.css';
</style>
