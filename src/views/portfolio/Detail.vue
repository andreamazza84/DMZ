<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'ProjectDetail',

    metaInfo: { title: 'Project Details' },

    extends: View,

    mixins: [
      LoadSections([
        'project-detail-Wp',
        'project-gallery-alt',
        'info',
      ]),
    ],

    props: {
      id: [Number, String],
    },
  }
</script>
