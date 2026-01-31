// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'MiniPlayParty - Where Friends Meet to Play',
      link: [
        {
          rel: 'icon',
          type:'image/vnd.microsoft.icon',
          href: '/favicon.ico'
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'MiniPlayParty - A multi mini-game app for playing with friends. Create rooms, invite friends, and enjoy endless mini-games together!',
        },
      ],
    },
  },

  ui: {
    theme: {
      colors: ['primary', 'green', 'blue', 'purple'],
    },
  },

  runtimeConfig: {
    public: {
      site: {
        name: 'MiniPlayParty',
        url: 'https://miniplay.realezio.com',
        defaultTitle: 'MiniPlayParty - Where Friends Meet to Play',
        defaultDescription:
          'MiniPlayParty - A multi mini-game app for playing with friends. Create rooms, invite friends, and enjoy endless mini-games together!',
        defaultImage: '/logo.svg',
        twitterHandle: '@miniplayparty'
      }
    }
  }
})