<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      this.retrieveData('raccolta')
      this.retrieveData('immagine')
    },
    methods: {
      retrieveData: function (item) {
        return this.$store.dispatch('retrieveData', item)
      }
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
