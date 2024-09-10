<script>
export default {
  inject: ['addResource'],
  methods: {
    submit(e) {
      e.preventDefault()

      const enteredTitle = this.$refs.titleInput.value
      const enteredDescription = this.$refs.descInput.value
      const enteredUrl = this.$refs.linkInput.value

      this.addResource({ title: enteredTitle, description: enteredDescription, url: enteredUrl })
    }
  }
}
</script>

<template>
  <base-card>
    <!-- @submit.prevent="submit" -->
    <form>
      <!-- title -->
      <!-- v-model="form.title"  -->
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>

      <!-- description -->
      <!-- v-model="form.description" -->
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
      </div>

      <!-- link -->
      <!-- v-model="form.link" -->
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>

      <!-- submit -->
      <div class="form-control">
        <!-- <base-button @click="(e) => submit(e)" type="submit">Add Resource </base-button> -->
        <base-button @click="submit($event)" type="submit">Add Resource </base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
