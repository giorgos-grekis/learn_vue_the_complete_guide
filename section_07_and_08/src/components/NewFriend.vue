<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enterName: '',
      enterPhone: '',
      enterEmail: ''
    }
  },

  methods: {
    submitData() {
      this.$emit('add-contact', this.enterName, this.enterPhone, this.enterEmail)
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enterName" />
    </div>

    <div>
      <label>Phone</label>
      <input type="tel" v-model="enterPhone" />
    </div>

    <div>
      <label>E-mail</label>
      <input type="email" v-model="enterEmail" />
    </div>

    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
