<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      this.retrieveData('immagine')
      this.retrieveData('collection')
    },
    methods: {
      async retrieveData (item) {
        try {
          await this.$store.dispatch('retrieveData', item)
        } catch (error) {
          console.log('Error', error)
        }
      },
    },
  }
</script>

<style lang="scss">
html {
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #1e1e1e;
}
body{
  background-color: #1e1e1e;
}
</style>
