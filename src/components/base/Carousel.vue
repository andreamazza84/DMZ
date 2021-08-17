<template>
  <v-carousel
    :cycle="false"
    :height="height"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
    :touch="touch"
  >
    <template v-slot:prev>
      <v-btn
        color="primary"
        fab
        @click="prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </template>
    <template v-slot:next>
      <v-btn
        color="primary"
        fab
        @click="next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </template>
    <v-carousel-item
      v-for="(item, i) in src"
      :key="i"
    >
      <v-img
        :src="src[count]"
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
        type: Array,
        required: true,
      },
    },
    data () {
      return {
        touch: {
          left: () => this.next(),
          right: () => this.prev(),
        },
      }
    },
    computed: {
      count: function () {
        return this.$store.state.count
      },
    },
    methods: {
      prev: function () {
        return this.$store.dispatch('previous')
      },
      next: function () {
        return this.$store.dispatch('next')
      },
      log: function (element) {
        console.log('element', element)
      },
    },
  }
</script>
