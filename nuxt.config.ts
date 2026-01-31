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
      title: 'MiniPlayParty - Where Friends Meet to Play',
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
})