<template>
  <!-- Singola immagine della galleria -->
  <v-hover #default="{ hover }">
    <v-card
      max-height="400"
      width="auto"
      class="px-auto"
      flat
      tile
    >
      <v-img
        min-height="300"
        max-height="300"
        fill
        :src="src"
        :style="active ? 'border: 2px solid #6c99d1' : 'border: 2px solid transparent'"
        class="pointer"
        @click="setSlide(index)"
      >
        <v-fade-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal primary"
            style="height: 100%; opacity: .8"
          >
            <v-row
              class="flex-column"
              justify="center"
              align="center"
            />
          </div>
        </v-fade-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'BaseProjectAlt',

    props: {
      id: [String, Number],
      src: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
    methods: {
      setSlide (index) {
        this.$store.dispatch('setCounter', index)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .pointer{
    cursor: pointer
  }
</style>
