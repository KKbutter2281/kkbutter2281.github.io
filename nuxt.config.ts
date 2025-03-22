// nuxt.config.js
export default {
  // Global page headers
  head: {
    title: 'Kaleb A - Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio website for Kaleb A - IT Consultant, DevOps Specialist, and CS Student' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
    ]
  },

  // Plugins to run before rendering page
  plugins: [
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
  ],

  // Modules
  modules: ['@nuxtjs/tailwindcss'],

  // Build Configuration
  build: {
  },

  compatibilityDate: '2025-03-22'
};