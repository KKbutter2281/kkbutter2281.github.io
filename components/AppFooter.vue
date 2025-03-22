<template>
    <footer class="bg-black py-10 border-t border-gray-800">
      <div class="container mx-auto px-4 text-center">
        <SocialLinks :links="socialLinks" class="mb-8" />
        
        <div class="text-gray-500 text-sm">
          <p>© {{ new Date().getFullYear() }} {{ name }}. All rights reserved.</p>
          <p class="mt-2">{{ builtWith }}</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import SocialLinks from './SocialLinks.vue'
  
  export default {
    components: {
      SocialLinks
    },
    props: {
      name: {
        type: String,
        default: 'Your Name'
      },
      socialLinks: {
        type: Array,
        default: () => []
      },
      builtWith: {
        type: String,
        default: 'Built with Vue.js, Nuxt, and TailwindCSS'
      }
    }
  }
  </script>