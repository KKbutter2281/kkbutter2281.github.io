<template>
  <header class="bg-opacity-90 backdrop-filter backdrop-blur-lg bg-gray-900 py-4 sticky top-0 z-10 shadow-lg">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{{ name }}</h1>
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href" class="hover:text-blue-400 transition duration-300 text-sm uppercase tracking-wider font-medium">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
      <button class="md:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Your Name'
    },
    navItems: {
      type: Array,
      default: () => [
        { href: '#about', text: 'About' },
        { href: '#experience', text: 'Experience' },
        { href: '#projects', text: 'Projects' },
      ]
    }
  }
}
</script>