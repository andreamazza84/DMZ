<template>
  <base-section
    id="story-alt"
    space="0"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
      >
        <carousel
          :height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 100px)' : 'calc(100vh - 60px)'"
          :src="gallery"
        />
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in gallery">
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
            :active="i === $store.state.count"
            :index="i"
          />
        </v-col>
      </template>
    </v-row>
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        class="px-5 py-2"
      >
        <base-heading
          class="font-weight-bold mt-4"
          :title="activeProject.title"
          align="left"
        />
        <base-subheading
          :title="activeProject.subtitle"
        />
        <base-subtitle
          title="Date"
          weight="bold"
        />
        <base-body
          space="2"
          :text="activeProject.date"
        />
        <base-subtitle
          title="Description"
          weight="bold"
        />
        <base-body
          :text="activeProject.description"
          space="3"
        />
        <base-subtitle
          title="Tags"
          weight="bold"
        />
        <template v-for="(tag, i) in activeProject.tags">
          <base-tag
            :key="i"
            :text="tag"
          />
        </template>
        <div />
        <!-- <base-btn
          class="mt-10 elevation-0 mx-1"
          color="black"
          dark
          depressed
        >
          <span
            class="font-weight-black text-none"
            v-text="'Order Work'"
          />
        </base-btn> -->
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  import Carousel from '@/components/base/Carousel.vue'
  export default {
    name: 'SectionProjectDetail',
    components: {
      Carousel,
    },
    computed: {
      activeProject () {
        const id = this.$route.params.id
        return this.appData.projects.find(prj => +prj.id === +id)
      },
      gallery () {
        const id = this.$route.params.id
        const proj = this.appData.projects.find(prj => +prj.id === +id)
        let gallery = []
        for (const i in proj.src) {
          gallery.push(proj.src[i])
        }
        // console.log('gallery', gallery)
        gallery = gallery.slice()
        // const breakpoint = this.$vuetify.breakpoint.name
        // const sizeMap = {
        //   xs: 3,
        //   sm: 2,
        //   md: 3,
        //   lg: 4,
        //   xl: 4,
        // }
        // console.log(gallery.slice(0, sizeMap[breakpoint]))
        return gallery // .slice(0, sizeMap[breakpoint])
      },
    },
    mounted () {
      this.$store.dispatch('setArrayLength', this.gallery.length)
    },
  }
</script>

<style lang="scss" scoped>

</style>
