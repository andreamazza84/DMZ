<template>
  <base-section class="offblack">
    <v-theme-provider dark>
      <v-row
        no-gutters
        class="px-12"
        align="start"
        justify="center"
      >
        <v-col
          cols="12"
          md="3"
          class="px-3"
        >
          <base-subheading :title="`About ${appData.title}`" />
          <base-divider
            color="white"
            align="left"
          />
          <base-body text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus varius, malesuada nulla sed, ultrices est. Proin sed nisl tortor. Sed ex mi, volutpat et lobortis sit amet, fringilla at leo." />
          <base-body text="Proin sed nisl tortor. Sed ex mi, volutpat et lobortis sit amet, fringilla at leo." />
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="3"
          class="px-3"
        >
          <base-subheading title="Recent News" />
          <base-divider
            color="white"
            align="left"
          />
          <template v-for="(news, i) in appData.recentNews">
            <base-body
              :key="`news-text-${i}`"
              tag="div"
              space="0"
              class="py-3"
              :text="news"
            />
            <v-divider :key="`news-divider-${i}`" />
          </template>
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="3"
          class="px-3"
        >
          <base-subheading title="Recent Posts" />
          <base-divider
            color="white"
            align="left"
          />
          <template v-for="(post, i) in appData.recentPosts">
            <v-row :key="`post-row-${i}`">
              <v-col
                v-if="$vuetify.breakpoint.mdAndUp"
                cols="3"
              >
                <base-avatar
                  :key="`post-date-${i}`"
                  color="primary"
                  outlined
                  size="60"
                  class="ma-2"
                  :text="post.date"
                />
              </v-col>
              <v-col
                cols="12"
                md="9"
              >
                <base-body
                  :key="`post-text-${i}`"
                  tag="span"
                  space="0"
                  class="py-3"
                  :text="post.text"
                />
              </v-col>
            </v-row>
            <v-divider
              :key="`divider-${i}`"
              color="grey"
              max-width="100%"
            />
          </template>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="px-3"
        >
          <base-subheading title="Contact Us" />
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
          <base-subheading title="Follow Us" />
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
