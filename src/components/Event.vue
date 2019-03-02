<template>
  <div>
    Event
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  created: function() {
    this.database = firebase.database();
    this.eventsRef = this.database.ref('events');
  },
  data: function() {
    return {
      events: []
    }
  }
}
</script>
