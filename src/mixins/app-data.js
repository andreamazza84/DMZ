export default {
  methods: {
    mapFiles: function (context) {
      const keys = context.keys()
      const values = keys.map(context)
      return keys.reduce((accumulator, key, index) => ({
        ...accumulator,
        [index]: values[index],
      }), {})
    },
    colorName: function () {
      const name = 'DAVIDE MANCINI ZANCHI'
      const color = [
        '#c00000',
        '#ff0000',
        '#ffc000',
        '#ffff00',
        '#92d050',
        '#00b050',
        '',
        '#00b0f0',
        '#0070c0',
        '#002060',
        '#7030a0',
        '#002060',
        '#0070c0',
        '#00b0f0',
        '',
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
        if (color[i] === '') {
          colorLetter = '&nbsp;'
        } else {
          colorLetter = `<span class="title-effect" style="color: ${color[i]}">${name.charAt(i)}<span>`
        }
        colorName = colorName.concat(colorLetter)
      }
      // console.log(colorName)
      return colorName
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
      // :height="$vuetify.breakpoint.mdAndUp ? '100px' : '60px'"
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
        // name1:
        // name2:
        // name3:
        socialLinks: [
          { name: 'Facebook', icon: 'mdi-facebook', link: 'https://www.facebook.com/tuxay.khjoson', color: '#0F98F6' },
          { name: 'Instagram', icon: 'mdi-instagram', link: 'https://instagram.com', color: '#EF0075' },
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
          // {
          //   id: 1,
          //   slug: 'ciao1',
          //   src: require('@/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg'),
          //   title: 'Adrian',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'mountain',
          // },
          // {
          //   id: 2,
          //   slug: 'ciao2',
          //   src: require('@/assets/projects/aliaksei-lepik-8qTBHezzF8I-unsplash.jpg'),
          //   title: 'Aliaksei Lepik',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'fire',
          // },
          // {
          //   id: 3,
          //   slug: 'ciao3',
          //   src: require('@/assets/projects/carlos-hevia-qhB6S2dts8A-unsplash.jpg'),
          //   title: 'Carlos Hevia',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'mountain',
          // },
          // {
          //   id: 4,
          //   slug: 'ciao4',
          //   src: require('@/assets/projects/cindy-chen-EP4VrAn-WaY-unsplash.jpg'),
          //   title: 'Cindy Chen',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'night',
          // },
          // {
          //   id: 5,
          //   slug: 'ciao5',
          //   src: require('@/assets/projects/everett-mcintire-BPCsppbNRMI-unsplash.jpg'),
          //   title: 'Everett Mcintire',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'day',
          // },
          // {
          //   id: 6,
          //   slug: 'ciao6',
          //   src: require('@/assets/projects/jamison-mcandie-waZEHLRP98s-unsplash.jpg'),
          //   title: 'Jamison Mcandie',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'night',
          // },
          // {
          //   id: 7,
          //   slug: 'ciao7',
          //   src: require('@/assets/projects/jerome-bertaux-tRkBF9Ujqw4-unsplash.jpg'),
          //   title: 'Jerome Bertaux',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'day',
          // },
          // {
          //   id: 8,
          //   slug: 'ciao8',
          //   src: require('@/assets/projects/kimson-doan-AZMmUy2qL6A-unsplash.jpg'),
          //   title: 'Kimson Doan',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'night',
          // },
          // {
          //   id: 9,
          //   slug: 'ciao9',
          //   src: require('@/assets/projects/kseniya-petukhova-_wj5Jd-AaK4-unsplash.jpg'),
          //   title: 'Kseniya Petukhova',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'mountain',
          // },
          // {
          //   id: 10,
          //   slug: 'ciao10',
          //   src: require('@/assets/projects/mike-erskine-S_VbdMTsdiA-unsplash.jpg'),
          //   title: 'Mike Erskine',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'fire',
          // },
          // {
          //   id: 11,
          //   slug: 'ciao11',
          //   src: require('@/assets/projects/patrick-boucher-0ccc00jMW1U-unsplash.jpg'),
          //   title: 'Patrick Boucher',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'day',
          // },
          // {
          //   id: 12,
          //   slug: 'ciao12',
          //   src: require('@/assets/projects/robson-hatsukami-morgan-RTKaEcGKarQ-unsplash.jpg'),
          //   title: 'Robson Hatsukami Morgan',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'fire',
          // },
          // {
          //   id: 13,
          //   slug: 'ciao13',
          //   src: require('@/assets/projects/sahin-yesilyaprak-V7uP-XzqX18-unsplash.jpg'),
          //   title: 'Sahin Yesilyaprak',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'fire',
          // },
          // {
          //   id: 14,
          //   slug: 'ciao14',
          //   src: require('@/assets/projects/sayan-nath-MCfy9IZivT0-unsplash.jpg'),
          //   title: 'Sayan Nath',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'mountain',
          // },
          // {
          //   id: 15,
          //   slug: 'ciao15',
          //   src: require('@/assets/projects/thomas-aeschleman-BG8te7fVCqU-unsplash.jpg'),
          //   title: 'Thomas Aeschleman',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'night',
          // },
          // {
          //   id: 16,
          //   slug: 'ciao16',
          //   src: require('@/assets/projects/twitter-praizist-PDNc3fFFrYk-unsplash.jpg'),
          //   title: '@praizist Twitter',
          //   subtitle: 'Unsplash',
          //   date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          //   description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
          //   tags: ['tag', 'tag', 'tag'],
          //   category: 'day',
          // },
          {
            id: 17,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-00/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: '@praizist Twitter',
            subtitle: 'Unsplash',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2019',
          },
          {
            id: 18,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-01/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: '@praizist Twitter',
            subtitle: 'Unsplash',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2020',
          },
          {
            id: 19,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-02/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: '@praizist Twitter',
            subtitle: 'Unsplash',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
            tags: ['tag', 'tag', 'tag'],
            category: '2021',
          },
          {
            id: 20,
            slug: 'ciao16',
            src: this.mapFiles(require.context('@/assets/projects/folder-03/', true, /\.(png|gif|ico|jpg|jpeg)$/)),
            title: '@praizist Twitter',
            subtitle: 'Unsplash',
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
