<script>
import LearningResource from './LearningResource.vue'
export default {
  inject: ['resources'],
  // props: ['resources']
  components: {
    LearningResource
  }
}
</script>

<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    >
    </learning-resource>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
