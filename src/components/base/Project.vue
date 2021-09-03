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
        :src="src.url"
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
            >
              <v-btn
                :to="{ name: 'ProjectDetailWp', params: { slug } }"
                class="mx-2 mb-2"
                icon
                dark
                x-large
              >
                <v-icon
                  class="mx-0"
                  x-large
                  v-text="'mdi-link'"
                />
              </v-btn>
              <div
                class="font-weight-black mb-2 text-left"
                v-text="title.rendered"
              />
              <!-- <div
                class="mb-2 text-left"
                v-text="subtitle"
              /> -->
            </v-row>
          </div>
        </v-fade-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'BaseProject',

    props: {
      slug: [String, Number],
      title: {
        type: Object,
        required: true,
      },
      subtitle: String,
      src: {
        type: Object,
        required: true,
      },
    },
  }
</script>
