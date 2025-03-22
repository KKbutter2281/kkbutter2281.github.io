<template>
    <div class="group">
      <div class="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 shadow-xl group-hover:shadow-2xl transition duration-300 h-full flex flex-col">
        <div :class="`h-48 ${gradient} relative overflow-hidden`">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <button class="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium transform -translate-y-4 group-hover:translate-y-0 transition duration-300">View Details</button>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition duration-300">{{ title }}</h3>
          <p class="text-gray-400 mb-4 flex-1">{{ description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="(skill, index) in skills" 
              :key="index" 
              class="bg-blue-900 bg-opacity-40 px-2 py-1 rounded text-xs text-blue-300"
            >
              {{ skill }}
            </span>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-gray-700">
            <a :href="projectUrl" class="text-blue-400 hover:text-blue-300 flex items-center group-hover:font-medium transition duration-300">
              <span>View Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a :href="repoUrl" class="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
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
      },
      projectUrl: {
        type: String,
        default: '#'
      },
      repoUrl: {
        type: String,
        default: '#'
      },
      gradient: {
        type: String,
        default: 'bg-gradient-to-br from-blue-500 to-purple-600'
      }
    }
  }
  </script>