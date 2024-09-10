<script>
export default {
  data() {
    return {
      /**
       * @property {
       *  Array<{
       * id: string,
       * title: string,
       * description: string,
       * link: string
       * }>
       * } storedResources
       *
       */
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://vuejs.org/'
        }
      ]
    }
  }
}
</script>

<template>
  <ul></ul>
</template>
