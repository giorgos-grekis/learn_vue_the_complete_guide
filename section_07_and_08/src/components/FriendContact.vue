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
  </li>
</template>
