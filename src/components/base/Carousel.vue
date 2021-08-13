<template>
  <v-carousel
    :cycle="false"
    :height="height"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="primary"
        fab
        v-bind="attrs"
        v-on="on"
        @click="prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="primary"
        fab
        v-bind="attrs"
        v-on="on"
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
        :src="item"
        height="100%"
        contain
        @active="log(i)"
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
