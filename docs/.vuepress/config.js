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
          { text: 'GitHub', link: 'https://github.com/scenaristeur/vue2_solid' }
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
              'SolidItem'
            ]
          }
        ]
      }
    }
  }
}
}
