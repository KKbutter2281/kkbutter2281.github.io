<template>
    <div class="relative flex">
      <div class="hidden md:flex md:items-center">
        <div class="h-16 w-16 rounded-full border-4 border-gray-800 bg-blue-500 flex items-center justify-center shadow-lg z-10">
          <span class="text-white font-bold">{{ year }}</span>
        </div>
      </div>
      <div class="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-xl ml-0 md:ml-10 w-full border border-gray-700">
        <div class="md:hidden mb-2 inline-block bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">{{ duration }}</div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
        <p class="text-blue-400 mb-3">{{ company }} • {{ duration }}</p>
        <p class="text-gray-300 leading-relaxed">{{ description }}</p>
        <div class="flex flex-wrap gap-2 mt-4">
          <span 
            v-for="(skill, index) in skills" 
            :key="index" 
            class="bg-blue-900 bg-opacity-40 px-2 py-1 rounded text-xs text-blue-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      year: {
        type: [String, Number],
        required: true
      },
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      skills: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>