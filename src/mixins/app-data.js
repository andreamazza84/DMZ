export default {
  // :height="$vuetify.breakpoint.mdAndUp ? '100px' : '60px'"
  methods: {
    mapFiles: function (context) {
      const keys = context.keys()
      const values = keys.map(context)
      return keys.reduce((accumulator, key, index) => ({
        ...accumulator,
        [index]: values[index],
      }), {})
    },
    colorName1: function () {
      const name = 'DAVIDE'
      const color = [
        '#c00000',
        '#ff0000',
        '#ffc000',
        '#ffff00',
        '#92d050',
        '#00b050',
      ]
      let colorLetter = ''
      let colorName = ''
      for (let i = 0; i < name.length; i++) {
        colorLetter = `<span class="title-effect" style="color: ${color[i]}">${name.charAt(i)}<span>`
        colorName = colorName.concat(colorLetter)
      }
      return colorName
    },
    colorName2: function () {
      const name = 'MANCINI'
      const color = [
        '#00b0f0',
        '#0070c0',
        '#002060',
        '#7030a0',
        '#002060',
        '#0070c0',
        '#00b0f0',
      ]
      let colorLetter = ''
      let colorName = ''
      for (let i = 0; i < name.length; i++) {
        colorLetter = `<span class="title-effect" style="color: ${color[i]}">${name.charAt(i)}<span>`
        colorName = colorName.concat(colorLetter)
      }
      return colorName
    },
    colorName3: function () {
      const name = 'ZANCHI'
      const color = [
        '#00b050',
        '#92d050',
        '#ffff00',
        '#ffc000',
        '#ff0000',
        '#c00000',
      ]
      let colorLetter = ''
      let colorName = ''
      for (let i = 0; i < name.length; i++) {
        colorLetter = `<span class="title-effect" style="color: ${color[i]}">${name.charAt(i)}<span>`
        colorName = colorName.concat(colorLetter)
      }
      return colorName
    },
  },
  computed: {
    appData () {
      return {
        title: 'DAVIDE MANCINI ZANCHI',
        title1: this.colorName1(),
        title2: this.colorName2(),
        title3: this.colorName3(),
        socialLinks: [
          { name: 'Facebook', icon: 'mdi-facebook', link: 'https://www.facebook.com/tuxay.khjoson', color: '#0F98F6' },
          { name: 'Instagram', icon: 'mdi-instagram', link: 'https://www.instagram.com/davidemancinizanchi/', color: '#EF0075' },
          // { name: 'Youtube', icon: 'mdi-youtube', link: 'https://youtube.com', color: '#FE0200' },
          // { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://linkedin.com', color: '#0077B5' },
          // { name: 'Twitter', icon: 'mdi-twitter', link: 'https://twitter.com', color: '#1A91DA' },
          // { name: 'Soundcloud', icon: 'mdi-soundcloud', link: 'https://soundcloud.com', color: '#FF5501' },
          // { name: 'Twitch', icon: 'mdi-twitch', link: 'https://twitch.tv', color: '#9147FF' },
        ],
        contact: {
          phone: { value: '+39 329 955 71 13', icon: 'mdi-phone' },
          email: { value: 'davidemancinizanchi@gmail.com', icon: 'mdi-email' },
        },
        recentNews: [
          'Lorem ipsum dolor sit amet, consectetur.',
          'Donec at nunc eget massa bibendum ultrices.',
          'Donec non sem fermentum, malesuada augue.',
          'Sed pharetra metus vitae diam blandit.',
          'Proin quis lacus lobortis, semper arcu.',
        ],
        blogPosts: [
          {
            title: 'Lorem ipsum dolor sit amet',
            text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
            date: new Date().toLocaleDateString(),
            to: { name: 'Home' },
          },
          {
            title: 'Lorem ipsum dolor sit amet',
            text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString(),
            to: { name: 'Home' },
          },
          {
            title: 'Lorem ipsum dolor sit amet',
            text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toLocaleDateString(),
            to: { name: 'Home' },
          },
        ],
        recentPosts: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur. Donec at nunc eget massa bibendum ultrices.',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
          },
          {
            text: 'Donec non sem fermentum, malesuada augue. Sed pharetra metus vitae diam blandit.',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
          },
        ],
        projects: [
          // TEMPLATE
          // {
          //   id: 1,
          //   slug: 'folder-00',
          //   src: require('@/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg'),
          //   title: 'Adrian',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'mountain',
          // },
          // /TEMPLATE
          {
            id: 1,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-00/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: 'Demo',
            subtitle: 'Unsplash',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2019',
          },
          {
            id: 2,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-01/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: 'Prova',
            subtitle: 'Unsplash',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2020',
          },
          {
            id: 3,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-02/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: 'Test',
            subtitle: 'Unsplash',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2021',
          },
          {
            id: 4,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-03/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: 'Template',
            subtitle: 'Unsplash',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2021',
          },
          {
            id: 5,
            slug: 'prova-00',
            src: this.mapFiles(require.context('@/assets/projects/prova-00/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: 'Prova',
            subtitle: 'Random',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2021',
          },
          {
            id: 6,
            slug: 'prova-01',
            src: this.mapFiles(require.context('@/assets/projects/', false, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: 'Projects',
            subtitle: 'Folder',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2021',
          },
        ],
        instagramPosts: [
          // {
          //   id: 1,
          //   src: require('@/assets/instagram/ahmad-kadhim-GeHVEDrqMB8-unsplash.jpg'),
          // },
          // {
          //   id: 2,
          //   src: require('@/assets/instagram/ciocan-ciprian-XGny9I-k9RM-unsplash.jpg'),
          // },
          // {
          //   id: 3,
          //   src: require('@/assets/instagram/lukasz-szmigiel-dAgtO5H8cXg-unsplash.jpg'),
          // },
          // {
          //   id: 4,
          //   src: require('@/assets/instagram/malka-l0m2p_k5VJ8-unsplash.jpg'),
          // },
          // {
          //   id: 5,
          //   src: require('@/assets/instagram/max-delsid-8-Aght_oHog-unsplash.jpg'),
          // },
          // {
          //   id: 6,
          //   src: require('@/assets/instagram/ricardo-gomez-angel-SAJD-Q4FntE-unsplash.jpg'),
          // },
        ],
        tweets: [
          // {
          //   id: 1,
          //   author: '@vuetifyjs',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus sit amet nisl sollicitudin auctor. Nam dapibus odio neque, sed proin.',
          // },
          // {
          //   id: 2,
          //   author: '@vuetifyjs',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus sit amet nisl sollicitudin auctor. Nam dapibus odio neque, sed proin.',
          // },
        ],
        tags: [
          'Portfolio',
          'Theme',
          'Camping',
          'Forest',
          'Hiking',
        ],
        relatedPosts: [
          // {
          //   id: 1,
          //   title: 'Title',
          //   author: 'John Smith',
          //   src: require('@/assets/projects/everett-mcintire-BPCsppbNRMI-unsplash.jpg'),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
          //   date: new Date().toLocaleDateString(),
          //   commentCount: 10,
          // },
          // {
          //   id: 2,
          //   title: 'Title',
          //   author: 'John Smith',
          //   src: require('@/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg'),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
          //   date: new Date().toLocaleDateString(),
          //   commentCount: 10,
          // },
          // {
          //   id: 3,
          //   title: 'Title',
          //   author: 'John Smith',
          //   src: require('@/assets/projects/robson-hatsukami-morgan-RTKaEcGKarQ-unsplash.jpg'),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
          //   date: new Date().toLocaleDateString(),
          //   commentCount: 10,
          // },
        ],
      }
    },
  },
}
