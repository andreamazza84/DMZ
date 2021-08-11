<template>
  <v-carousel
    :cycle="false"
    :height="height"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        Precedente
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        Successiva
      </v-btn>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img
        :src="src"
        height="100%"
        contain
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    props: {
      height: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
    },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],

      }
    },
    mounted () {
      console.log(this.src)
      // console.log(this.$route)
    },
  }
</script>
