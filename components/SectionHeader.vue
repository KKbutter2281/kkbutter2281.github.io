<template>
    <div class="text-center mb-16">
      <span v-if="subtitle" class="inline-block px-3 py-1 bg-blue-900 bg-opacity-30 rounded-full text-blue-400 text-sm font-medium tracking-wider mb-2">{{ subtitle }}</span>
      <h2 class="text-3xl font-bold">{{ title }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        default: ''
      }
    }
  }
  </script>