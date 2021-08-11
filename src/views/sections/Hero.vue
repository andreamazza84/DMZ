<template>
  <base-section
    id="hero"
    space="0"
  >
    <v-img
      :src="require('@/assets/background.png')"
      min-height="695px"
    >
      <v-theme-provider dark>
        <v-container class="fill-height px-5 py-12">
          <v-responsive
            class="d-flex align-center justify-center"
            height="100%"
            width="99%"
          >
            <v-row align="center">
              <v-col
                cols="12"
                md="6"
              >
                <base-heading
                  class="text-uppercase font-weight-bold"
                  :title="`Why ${appData.title}?`"
                />
                <base-subheading
                  title="Awesome, Clean & Unique"
                />
                <base-body
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
                />
                <base-btn
                  rounded
                  height="50px"
                  color="white"
                  class="primary--text font-weight-bold text-none mr-4 mb-1"
                  href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                  target="_blank"
                >
                  <span v-text="`Purchase ${appData.title}`" />
                </base-btn>
                <base-btn
                  outlined
                  rounded
                  height="50px"
                  color="white"
                  class="font-weight-bold text-none mr-4 mb-1"
                  href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                  target="_blank"
                >
                  <span v-text="`Purchase ${appData.title}`" />
                </base-btn>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-img
                  :src="require('@/assets/camping.svg')"
                  min-height="365px"
                  max-width="650px"
                />
              </v-col>
            </v-row>
          </v-responsive>
        </v-container>
      </v-theme-provider>
    </v-img>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionHero',
  }
</script>

<style lang="scss" scoped>

</style>
