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
      type: String,
      required: false,
      default: '0', // can be a function
      validator: function (value) {
        return value === '1' || value === '0'
      }
    }
  },
  data() {
    return {
      detailsAreVisible: true,
      friend: { id: 'cisu', name: 'Cisu Moeg', phone: '6949999999', email: 'cis2@moeg.com' },
      friendIsFavorite: this.isFavorite
    }
  },

  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },

    toogleFavorite() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0'
      } else {
        this.friendIsFavorite = '1'
      }
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toogleFavorite">toggle Favorite</button>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
