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
        fab
        v-bind="attrs"
        v-on="on"
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
        type: Object,
        required: true,
      },
    },
  }
</script>
