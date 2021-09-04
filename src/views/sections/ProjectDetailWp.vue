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
        <BottomSheet />
        <Carousel
          :height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 100px)' : 'calc(100vh - 60px)'"
          :src="galleria.immagini"
        />
      </v-col>
    </v-row>
    <v-row
      justify="start"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in galleria.immagini">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <base-project-alt
            class="my-2 mx-1"
            :src="project.src"
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
          :title="galleria.titolo"
          align="left"
        />
        <base-subheading
          :title="galleria.sottotitolo"
        />
        <base-subtitle
          title="Data"
          weight="bold"
        />
        <base-body
          space="2"
          :text="galleria.data"
        />
        <base-subtitle
          title="Descrizione"
          weight="bold"
        />
        <base-body
          :text="galleria.descrizione"
          space="3"
        />
        <!-- <base-subtitle
          title="Tags"
          weight="bold"
        /> -->
        <!-- <template v-for="(tag, i) in galleria.tags">
          <base-tag
            :key="i"
            :text="tag"
          />
        </template> -->
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  import Carousel from '@/components/base/Carousel.vue'
  import BottomSheet from '@/components/base/BottomSheet'

  export default {
    name: 'SectionProjectDetail',
    components: {
      Carousel,
      BottomSheet
    },
    data () {
      return {
      }
    },
    computed: {
      wideScreen () {
        return this.$vuetify.breakpoint.name !== 'xs'
      },
      galleria () {
        let galleria = {}
        const slug = this.$route.params.slug
        const proj = this.$store.state.raccolta.find(prj => {
          return prj.slug === slug 
        })
        // Informazioni sull'album
        // console.log(proj)
        galleria['id'] = proj.id
        galleria['slug'] = proj.slug
        galleria['data'] = proj.date
        galleria['titolo'] = proj.title.rendered
        galleria['sottotitolo'] = proj.acf.sottotitolo
        galleria['didascalia'] = proj.acf.didascalia
        galleria['descrizione'] = proj.acf.descrizione

        // Immagini
        const immagini = []
        for (const key in proj.acf) {

          if (!!proj?.acf[key]) {
            if (key.includes('immagine_') || key.includes('foto-')) {
              // console.log(key, !!proj.acf[key])
              immagini.push({
                id: proj.acf[key].id,
                src: proj.acf[key].url,
                titolo: proj.acf[key].title,
                autore: proj.acf[key].author,
                didascalia: proj.acf[key].caption,
                descrizione: proj.acf[key].description
              })
            }
          }
        }
        galleria['immagini'] = immagini  
        return galleria
      }
    },
    mounted () {
      this.$store.dispatch('setArrayLength', this.galleria.immagini.length)
    },
  }
</script>
