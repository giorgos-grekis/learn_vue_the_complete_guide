<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources'
    }
  },

  method: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resources')">Add Resources</base-button>
  </base-card>

  <component :is="selectedTab"> </component>
</template>
