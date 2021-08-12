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
    },
  }
</script>

<style lang="scss" scoped>

</style>
