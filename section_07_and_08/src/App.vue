<!-- <script setup lang="ts">
import FriendContact from './components/FriendContact.vue'
</script> -->

<script lang="ts">
export default {
  data() {
    return {
      friends: [
        {
          id: 'cisu',
          name: 'Cisu Moeg',
          phone: '6949999999',
          email: 'cisu@moeg.com',
          isFavorite: true
        },
        {
          id: 'doe',
          name: 'John Doe',
          phone: '6979999999',
          email: 'john@mdoe.com',
          isFavorite: false
        }
      ]
    }
  },

  methods: {
    // friendId accepted as a first paramenter
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find((friend) => friend.id === friendId)

      identifiedFriend.isFavorite = !identifiedFriend.isFavorite
    },

    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        isFavorite: false
      }

      this.friends.push(newFriendContact)
    },

    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId)
    }
  }
}
</script>

<template>
  <header>
    <h1>My Friensd</h1>
  </header>

  <new-friend @add-contact="addContact"></new-friend>

  <section>
    <!-- <FriendContact /> -->
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
