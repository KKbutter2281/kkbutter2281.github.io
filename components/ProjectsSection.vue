<template>
    <section id="projects" class="py-24 bg-black relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container mx-auto px-4 relative z-10">
        <SectionHeader title="Featured Projects" subtitle="SHOWCASE" />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="(project, index) in projects" 
            :key="index" 
            :title="project.title" 
            :description="project.description" 
            :skills="project.skills"
            :project-url="project.projectUrl"
            :repo-url="project.repoUrl"
            :gradient="project.gradient"
          />
        </div>
        
        <div class="text-center mt-12">
          <a href="#" class="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition duration-300 group">
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import SectionHeader from './SectionHeader.vue'
  import ProjectCard from './ProjectCard.vue'
  
  export default {
    components: {
      SectionHeader,
      ProjectCard
    },
    props: {
      projects: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>