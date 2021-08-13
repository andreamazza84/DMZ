<template>
  <base-section
    id="gallery-alt"
    space="0"
  >
    <!-- Related Images  -->
    <!-- <v-row>
      <v-col
        cols="12"
        class="px-5 py-2"
      >
        <base-heading title="Galleria" />
      </v-col>
    </v-row> -->
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in activeProject">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <base-project-alt
            class="my-2 mx-1"
            :src="project"
          />
        </v-col>
      </template>
    </v-row>
    <!-- Shuffle Projects -->
    <!-- <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in shuffledProjects">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <base-project
            class="my-2 mx-1"
            v-bind="project"
          />
        </v-col>
      </template>
    </v-row> -->
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProjectGalleryAlt',
    computed: {
      activeProject () {
        const id = this.$route.params.id
        const activeProject = this.appData.projects.find(prj => +prj.id === +id)
        let activeGallery = []
        for (const i in activeProject.src) {
          activeGallery.push(activeProject.src[i])
        }
        // console.log('activeGallery', activeGallery)
        activeGallery = activeGallery.slice()
        const breakpoint = this.$vuetify.breakpoint.name
        const sizeMap = {
          xs: 3,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
        }
        // console.log(activeGallery.slice(0, sizeMap[breakpoint]))
        return activeGallery.slice(0, sizeMap[breakpoint])
      },
      shuffledProjects () {
        // console.log(this.appData.projects.slice())
        const projs = this.appData.projects.slice()
        const breakpoint = this.$vuetify.breakpoint.name
        projs.sort(() => Math.random() - 0.5)
        const sizeMap = {
          xs: 3,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
        }
        return projs.slice(0, sizeMap[breakpoint])
      },
    },
  }
</script>
