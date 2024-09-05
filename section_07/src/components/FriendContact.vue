<script>
export default {
  data() {
    return {
      detailsAreVisible: true,
      friend: { id: 'cisu', name: 'Cisu Moeg', phone: '6949999999', email: 'cis2@moeg.com' }
    }
  },

  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
}
</script>

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>
