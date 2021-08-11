<template>
  <base-section
    id="gallery"
    space="0"
  >
    <div class="justify-center align-center">
      <v-tabs
        v-model="selectedTab"
        centered
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.category"
          :href="`#${tab.category.toLowerCase()}`"
          v-text="tab.title"
        />
      </v-tabs>
    </div>
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in visibleProjects">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <base-project
            v-bind="project"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProjectGallery',
    data () {
      return {
        selectedTab: 'all',
        tabs: [
          { title: 'Tutti', category: 'all' },
          { title: '2021', category: 'fire' },
          { title: '2020', category: 'mountain' },
          { title: '2019', category: 'day' },
          { title: '2018', category: 'night' },
        ],
      }
    },
    computed: {
      visibleProjects () {
        return this.appData.projects.filter(project => {
          if (this.selectedTab.toLowerCase() === 'all') return true

          return project.category.toLowerCase() === this.selectedTab.toLowerCase()
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
