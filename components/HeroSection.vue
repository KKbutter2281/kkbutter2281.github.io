<template>
    <section id="about" class="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
          <div class="bg-gray-900 rounded-full p-2">
            <span class="text-sm font-medium tracking-wider text-blue-300">{{ role }}</span>
          </div>
        </div>
        <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{{ greeting }}</h2>
        <p class="text-xl max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed">{{ bio }}</p>
        
        <SocialLinks :links="socialLinks" class="mb-12" />
        
        <div class="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          <div v-for="(skill, index) in skills" :key="index" class="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-lg border border-gray-700">
            <span class="text-blue-400 font-medium">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import SocialLinks from './SocialLinks.vue'
  
  export default {
    components: {
      SocialLinks
    },
    props: {
      role: {
        type: String,
        default: 'FULL-STACK DEVELOPER'
      },
      greeting: {
        type: String,
        default: 'Hello, I\'m Your Name'
      },
      bio: {
        type: String,
        default: 'I\'m a developer based in City, Country. Passionate about creating elegant solutions to complex problems.'
      },
      socialLinks: {
        type: Array,
        default: () => []
      },
      skills: {
        type: Array,
        default: () => ['JavaScript', 'Vue.js', 'React', 'Node.js', 'Python']
      }
    }
  }
  </script>
  