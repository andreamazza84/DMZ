<template>
  <base-section
    id="story-alt"
    space="0"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
      >
        <v-img
          :height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 100px)' : 'calc(100vh - 60px)'"
          :src="activeProject.src"
        />
      </v-col>
      <v-col
        cols="12"
        class="px-5 py-2"
      >
        <base-heading
          class="font-weight-bold"
          :title="activeProject.title"
          align="left"
        />
        <base-subheading
          :title="activeProject.subtitle"
        />
        <base-subtitle
          title="Date"
          weight="bold"
        />
        <base-body
          space="2"
          :text="activeProject.date"
        />
        <base-subtitle
          title="Description"
          weight="bold"
        />
        <base-body
          :text="activeProject.description"
          space="3"
        />
        <base-subtitle
          title="Tags"
          weight="bold"
        />
        <template v-for="(tag, i) in activeProject.tags">
          <base-tag
            :key="i"
            :text="tag"
          />
        </template>
        <div />
        <base-btn
          class="mt-10 elevation-0 mx-1"
          color="black"
          dark
          depressed
        >
          <span
            class="font-weight-black text-none"
            v-text="'Order Work'"
          />
        </base-btn>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProjectDetail',
    computed: {
      activeProject () {
        const id = this.$route.params.id
        return this.appData.projects.find(prj => +prj.id === +id)
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
