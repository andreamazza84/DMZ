<template>
  <base-section class="offblack">
    <v-theme-provider dark>
      <v-row
        no-gutters
        class="px-3"
        align="start"
        justify="space-between"
      >
        <!-- About -->
        <v-col
          cols="12"
          class="px-3 py-3"
        >
          <base-subheading title="Davide Mancini Zanchi" />
          <!-- <base-divider
            color="white"
            align="left"
          /> -->
          <!-- <base-body text="Nato a Fermignano il 28 Luglio 1986, è uno degli artisti più fighi del cosmo." /> -->
          <!-- <base-body text="Citazione preferita: 'Arcordate che i ladre inchiava la mechina'" /> -->
        </v-col>

        <!-- Contatti -->
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="12"
          class="px-3 py-3"
        >
          <base-subheading title="Contatti" />
          <base-divider
            color="primary"
            align="left"
          />
          <base-subtitle
            title="Telefono:"
            weight="bold"
          />
          <base-body
            space="2"
            :text="`${appData.contact.phone.value.toLowerCase()}`"
          />
          <base-subtitle
            title="Email:"
            weight="bold"
          />
          <base-body
            space="2"
            :text="`${appData.contact.email.value.toLowerCase()}`"
          />
          <!-- <base-subtitle
            title="Twitter:"
            weight="bold"
          />
          <base-body
            space="2"
            text="@twitter"
          /> -->
        </v-col>

        <!-- Social -->
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="12"
          class="px-3 py-3"
        >
          <base-subheading title="Social" />
          <base-divider
            color="primary"
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
  .offblack{
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    background-color: #1e1e1e !important;
  }
</style>
