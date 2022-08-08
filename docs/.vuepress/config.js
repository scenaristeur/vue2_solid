module.exports = {
  base: "/vue2_solid/",
  // base : '/',
  // base: process.env.VUEPRESS_BASE || '/',
  // base = process.env.NODE_ENV === 'production' ? '/vue2_solid/' : '/'
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue2Solid 🥂',
      description: 'Documentation site for the Vue2Solid component library plugin'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Vue2Solid 🥂',
      description: "Site de documentation du plugin Vue2Solid pour faciliter la création d'application decentralisées basées sur le projet Solid de Tim Berners Lee"
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repoLabel: 'Contribute!',
    // git repo here... gitlab, github
    repo: '',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide/getting_started' },
          { text: 'Components', link: '/components/using_components' },
          // external link to git repo...again
          { text: 'GitHub', link: 'https://github.com/scenaristeur/vue2_solid' },
          { text: 'Discussion', link: 'https://forum.solidproject.org/'},
          { text: 'I need help', link: 'https://gitter.im/solid/home'}

        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: ['SolidLogin',
              'SolidProfile',
              'SolidFriends',
              'SolidChat',
              'SolidList',
              'SolidItem',
              'SolidBrowser',
              'SolidGraph2D',
              'SolidGraph3D'
            ]
          }
        ]
      }
    },
    '/fr/': {
      label: 'Français',
      selectText: 'Langues',
      lastUpdated: 'Dernière màj',
      // service worker is configured but will only register in production
      serviceWorker: {
        updatePopup: {
          message: 'Un nouveau contenu est disponible.',
          buttonText: 'Rafraîchir'
        }
      },
      nav: [
        { text: 'Bien Démarrer', link: '/fr/guide/getting_started' },
        { text: 'Composants', link: '/fr/components/using_components' },
        // external link to git repo...again
        { text: 'GitHub', link: 'https://github.com/scenaristeur/vue2_solid' },
        { text: 'Discussion', link: 'https://forum.solidproject.org/'},
        { text: "J'ai besoin d'aide", link: 'https://gitter.im/solid/home'}

      ],
      sidebar: {
        '/fr/components/': [
          {
            title: 'Composants',
            collapsable: false,
            children: ['SolidLogin',
            'SolidProfile',
            'SolidFriends',
            'SolidChat',
            'SolidList',
            'SolidItem',
            'SolidBrowser',
            'SolidGraph2D',
            'SolidGraph3D'
          ]
        }
      ]
    }
  }
  }
}
}
