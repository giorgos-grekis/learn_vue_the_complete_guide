<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
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
      detailsAreVisible: true,
      friendIsFavorite: this.isFavorite
    }
  },

  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },

    toogleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toogleFavorite">toggle Favorite</button>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
