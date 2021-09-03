<template>
  <base-section
    id="story-alt"
    space="0"
  >
    <v-row
      v-if="wideScreen"
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
      >
        <carousel
          :height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 100px)' : 'calc(100vh - 60px)'"
          :src="currentGallery"
        />
      </v-col>
    </v-row>
    <v-row
      justify="start"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in currentGallery">
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
    data () {
      return {
        activeProject: {
          title: 'title',
          subtitle: 'subtitle',
          description: 'description',
          tags: 'tags',
          date: 'date',
        },
        raccolta: {},
      }
    },
    computed: {
      wideScreen () {
        return this.$vuetify.breakpoint.name !== 'xs'
      },
      currentGallery () {
        const galleria = []
        const slug = this.$route.params.slug
        const proj = this.$store.state.raccolta.find(prj => {
          return prj.slug === slug 
        })
        for (const key in proj.acf) {
          console.log(key, proj.acf[key])
          if (key.includes('foto')) {
            galleria.push(proj.acf[key].url)
          }
          console.log('galleria', galleria)
        }  
        return galleria
      }
    },
    mounted () {
      this.$store.dispatch('setArrayLength', this.currentGallery.length)
    },
  }
</script>
