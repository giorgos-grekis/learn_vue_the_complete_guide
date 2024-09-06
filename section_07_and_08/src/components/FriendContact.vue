<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false // can be a function
      // validator: function (value) {
      //   return value === '1' || value === '0'
      // }
    }
  },

  emits: ['toggle-favorite', 'delete'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (!id) {
  //       console.warn('Id is missing!')
  //       return false
  //     }
  //     return true
  //   }
  // },

  data() {
    return {
      detailsAreVisible: false
    }
  },

  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },

    toogleFavorite() {
      // this.id provided as a first argument to a method that listens to this event "toggleFavoriteStatus in App.vue"
      this.$emit('toggle-favorite', this.id)
    }

    // deleteFriend() {
    //   this.$emit('delete')
    // }
  }
}
</script>

<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toogleFavorite">toggle Favorite</button>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>

    <!-- When binding to an event, you can either:
      1. point at a method
      2. execute a method
      3. execute any other basic JS code. 
    -->
    <button @click="$emit('delete', this.id)">Delete</button>
  </li>
</template>
