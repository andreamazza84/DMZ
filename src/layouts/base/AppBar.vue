<template>
  <v-app-bar
    app
    hide-on-scroll
    style="right: 0"
    :color="color || 'white'"
    height="158px"
    class="px-6"
  >
    <v-toolbar-title class="text-h5">
      <v-row class="justify-center">
        <v-col
          class="col"
          cols="12"
          sm="4"
          md="4"
        >
          <router-link
            :to="{ name: 'Portfolio' }"
            :tag="$vuetify.breakpoint.mdAndUp ? 'h2' : 'h4'"
            style="cursor: pointer"
            v-html="appData.title1"
          />
        </v-col>
        <v-col
          class="col"
          cols="12"
          sm="4"
          md="4"
        >
          <router-link
            :to="{ name: 'Portfolio' }"
            :tag="$vuetify.breakpoint.mdAndUp ? 'h2' : 'h4'"
            style="cursor: pointer"
            v-html="appData.title2"
          />
        </v-col>
        <v-col
          class="col"
          cols="12"
          sm="4"
          md="4"
        >
          <router-link
            :to="{ name: 'Portfolio' }"
            :tag="$vuetify.breakpoint.mdAndUp ? 'h2' : 'h4'"
            style="cursor: pointer"
            v-html="appData.title3"
          />
        </v-col>
      </v-row>
    </v-toolbar-title>
    <v-spacer />
    <div>
      <v-tabs
        hide-slider
        optional
        background-color="transparent"
        v-bind="tabAttrs"
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
          :to="{ name: item.name }"
          :exact="item.name === 'Home'"
          :ripple="false"
          active-class="primary--text"
          class="font-weight-medium text-none"
          min-width="120px"
          text
        >
          <span v-text="item.name" />
          <v-icon
            v-if="item.icon && $vuetify.breakpoint.mdAndUp"
            small
            right
            v-text="item.icon"
          />
        </v-tab>
      </v-tabs>
    </div>
    <!-- <div v-else>
      <v-btn
        icon
        @click="drawer = true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <blog-sidebar
        v-if="$route.name === 'Blog'"
        :value="drawer"
        @input="drawer = $event"
      />
      <base-sidebar
        v-else
        :items="items"
        :value="drawer"
        @input="drawer = $event"
      />
    </div> -->
  </v-app-bar>
</template>

<script>
  export default {
    name: 'BaseAppBar',

    components: {
      // BlogSidebar: () => import('@/layouts/base/BlogSidebar'),
      // BaseSidebar: () => import('@/layouts/base/BaseSidebar'),
    },

    props: {
      block: Boolean,
      search: Boolean,
      color: String,
    },

    data () {
      return {
        drawer: false,
        items: [
          // { name: 'Home', icon: 'mdi-home' },
          // { name: 'Portfolio', icon: 'mdi-book' },
        ],
      }
    },

    computed: {
      tabAttrs () {
        const attrs = {}
        if (this.block) attrs.height = '150px'
        return attrs
      },
    },

    watch: {
      '$route.name' (val) {
        this.drawer = false
      },
    },
  }
</script>
<style lang="scss">
  .title-effect{
    &{
      font-family: 'Monoton';
      letter-spacing: 5px;
      transition: all 300ms;
    }
    &:hover{
      color: #ffffff !important;
    }
  }
  .v-toolbar__content{
    padding-left: 12px;
    padding-right: 12px;
  }
</style>
