<template>
  <div class="flex justify-center space-x-4">
    <a v-for="link in links" :key="link.url" :href="link.url" class="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition duration-300 shadow-lg group">
      <component :is="link.icon" class="h-6 w-6 text-gray-400 group-hover:text-white" />
    </a>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import GithubIcon from 'vue-material-design-icons/Github.vue'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'

export default defineComponent({
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    EmailIcon
  },
  props: {
    links: {
      type: Array,
      default: () => [
        { url: 'https://github.com/yourusername', icon: 'GithubIcon' },
        { url: 'https://linkedin.com/in/yourusername', icon: 'LinkedinIcon' },
        { url: 'https://twitter.com/yourusername', icon: 'TwitterIcon' },
        { url: 'mailto:your@email.com', icon: 'EmailIcon' }
      ]
    }
  }
})
</script>

<style>
.material-design-icon {
  width: 24px;
  height: 24px;
}
</style>