<template>
  <base-section
    id="gallery"
    space="0"
  >
    <v-row
      justify="start"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in visibleProjects">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <base-project
            v-bind="project"
            :src="project.acf.immagine_di_copertina"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProjectGallery',
    computed: {
      visibleProjects () {
        const visibleProjects = this.$store.state.raccolta
        console.log('visibleProjects', visibleProjects)
        return visibleProjects
      },

    },
  }
</script>

<style lang="scss" scoped>

</style>
