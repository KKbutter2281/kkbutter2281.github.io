<template>
    <section id="experience" class="py-24 bg-gray-900">
      <div class="container mx-auto px-4">
        <SectionHeader title="Professional Experience" subtitle="CAREER PATH" />
        
        <div class="space-y-12 max-w-3xl mx-auto relative">
          <div class="absolute left-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 ml-6 md:ml-8 hidden md:block"></div>
          
          <ExperienceItem 
            v-for="(item, index) in experiences" 
            :key="index" 
            :year="item.year" 
            :title="item.title" 
            :company="item.company" 
            :duration="item.duration" 
            :description="item.description" 
            :skills="item.skills" 
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import SectionHeader from './SectionHeader.vue'
  import ExperienceItem from './ExperienceItem.vue'
  
  export default {
    components: {
      SectionHeader,
      ExperienceItem
    },
    props: {
      experiences: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>