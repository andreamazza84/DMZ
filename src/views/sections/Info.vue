<template>
  <base-section class="offblack">
    <v-theme-provider dark>
      <v-row
        no-gutters
        class="px-12"
        align="start"
        justify="space-between"
      >
        <!-- About -->
        <v-col
          cols="12"
          lg="4"
          md="12"
          sm="12"
          class="px-3 py-3"
        >
          <base-subheading title="Davide Mancini Zanchi" />
          <base-divider
            color="white"
            align="left"
          />
          <base-body text="Nato a Fermignano il 28 Luglio 1986, è uno degli artisti più fighi del cosmo." />
          <base-body text="Citazione preferita: 'Arcordate che i ladre inchiava la mechina'" />
        </v-col>

        <!-- Contatti -->
        <v-col
          cols="12"
          lg="4"
          md="6"
          sm="12"
          class="px-3 py-3"
        >
          <base-subheading title="Contatti" />
          <base-divider
            color="white"
            align="left"
          />
          <base-subtitle
            title="Phone:"
            weight="bold"
          />
          <base-body
            space="2"
            text="(555) 555-5555"
          />
          <base-subtitle
            title="Email:"
            weight="bold"
          />
          <base-body
            space="2"
            :text="`email@${appData.title.toLowerCase()}.com`"
          />
          <base-subtitle
            title="Twitter:"
            weight="bold"
          />
          <base-body
            space="2"
            text="@twitter"
          />
        </v-col>

        <!-- Social -->
        <v-col
          cols="12"
          lg="4"
          md="6"
          sm="12"
          class="px-3 py-3"
        >
          <base-subheading title="Social" />
          <base-divider
            color="white"
            align="left"
          />
          <base-btn
            v-for="media in appData.socialLinks"
            :key="media.link"
            :href="media.link"
            target="_blank"
            class="ma-1"
            min-width="40px"
            width="40px"
            depressed
            :color="media.color"
            :icon="media.icon"
          />
        </v-col>
      </v-row>
    </v-theme-provider>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionInfo',
  }
</script>

<style lang="scss" scoped>

</style>
