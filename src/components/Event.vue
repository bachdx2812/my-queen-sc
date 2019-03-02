<template>
  <div class="container">
    <h1 class="title">CRUD</h1>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Time" v-model="newEvent.time">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Title" v-model="newEvent.title">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Content" v-model="newEvent.content">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="HTML Content" v-model="newEvent.htmlContent">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click="createEvent">
          Add
        </button>
      </p>
    </div>
    <hr>
    <table class="table">
      <thead>
        <tr>
          <td width="5%">Index</td>
          <td width="5%">Time</td>
          <td width="10%">Title</td>
          <td width="30%">Content</td>
          <td width="45%">HTML Content</td>
          <td width="5%"></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events" v-bind:key="event['.key']">
          <td>{{ index }}</td>
          <td>{{ event.time }}</td>
          <td>{{ event.title }}</td>
          <td>{{ event.content }}</td>
          <td><div v-html="event.htmlContent"></div></td>
          <td>
            <p class="buttons">
              <a class="button">
                Edit
              </a>
              <a class="button" @click="deleteEvent(event)">
                Delete
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '@/firebase'
const eventsRef = db.ref('events')

export default {
  created: function() {
  },
  data: function() {
    return {
      newEvent: {}
    }
  },
  firebase: {
    events: {
      source: eventsRef
    }
  },
  methods: {
    createEvent: function() {
      eventsRef.push(this.newEvent)
      alert(' Successfully created new event babe!')
      this.newEvent = {}
    },
    deleteEvent: function(event) {
      const r = confirm(`You really want to delete : ${event.title} ?`);
      if (r == true) {
        eventsRef.child(event['.key']).remove()
        alert('Successfully deleted event')
      }
    }
  }
}
</script>
