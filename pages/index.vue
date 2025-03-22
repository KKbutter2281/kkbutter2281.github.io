<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <AppHeader :name="profileData.name" />
      <HeroSection 
        :role="profileData.role" 
        :greeting="profileData.greeting" 
        :bio="profileData.bio"
        :social-links="profileData.socialLinks"
        :skills="profileData.skills"
      />
      <ExperienceSection :experiences="profileData.experiences" />
      <ProjectsSection :projects="profileData.projects" />
      <AppFooter 
        :name="profileData.name" 
        :social-links="profileData.socialLinks" 
        :built-with="profileData.builtWith"
      />
    </div>
  </template>
  
  <script>
  import AppHeader from '~/components/AppHeader.vue';
  import HeroSection from '~/components/HeroSection.vue';
  import ExperienceSection from '~/components/ExperienceSection.vue';
  import ProjectsSection from '~/components/ProjectsSection.vue';
  import AppFooter from '~/components/AppFooter.vue';
  
  export default {
    components: {
      AppHeader,
      HeroSection,
      ExperienceSection,
      ProjectsSection,
      AppFooter
    },
    data() {
      return {
        profileData: {
          name: 'Butter/Kaleb',
          role: 'DEV-OPS CONSULTANT',
          greeting: 'Hello, I\'m Butter/Kaleb',
          bio: `I'm a DevOps consultant. I work with several clients optimizing systems and offering advice. I'm an incoming member of the Gator Nation in the Herbert Werthiem College of Engineering at the University of Florida.`,
          socialLinks: [
            { 
              url: 'https://github.com/kkbutter2281', 
              icon: 'GithubIcon' 
            },
            { 
              url: 'https://linkedin.com/in/kalebarora', 
              icon: 'LinkedinIcon' 
            },
            { 
              url: 'mailto://personal@kkbutter.me', 
              icon: 'EmailIcon' 
            }
          ],
          skills: ['DevOps', 'Server Administration', 'Git', 'Excel', 'Virtualization'],
          experiences: [
            {
              year: '2025',
              title: 'Head of Enterprise Marketing',
              company: 'Sahara Compute',
              duration: 'Mar 2025 - Present',
              description: 'Marketed to medium and large businesses across multiple platforms, effectively expanding audience reach. Developed and implemented strategies to promote services, enhancing brand visibility.',
              skills: ['Marketing', 'SEO', 'Business Strategy']
            },
            {
              year: '2024',
              title: 'DevOps Consultant',
              company: 'Sahara Compute',
              duration: 'Nov 2024 - Mar 2025',
              description: 'Designed websites for internal and external needs, helped market services effectively, reduced website costs by utilizing open-source projects, and set up Pterodactyl and Virtfusion panels for customers.',
              skills: ['Web Design', 'DevOps', 'Pterodactyl', 'Virtfusion', 'Open-source Technologies']
            },
            {
              year: '2024',
              title: 'Front Service Clerk',
              company: 'Publix Super Markets',
              duration: 'Oct 2024 - Present',
              description: 'Assisted customers with bagging, maintained cleanliness and organization of the front service area, and managed cart retrieval efficiently to enhance customer satisfaction.',
              skills: ['Customer Service', 'Soft Skills', 'Time Management']
            },
            {
              year: '2024',
              title: 'Student Volunteer',
              company: 'Palm Beach County Library System',
              duration: 'Aug 2024 - Present',
              description: 'Helped shelve books, assisted with event setup, maintained cleanliness, and provided assistance to students using library services.',
              skills: ['Organization', 'Communication', 'Event Setup']
            },
            {
              year: '2024',
              title: 'Student Volunteer',
              company: "SAINT RITA'S CATHOLIC CHURCH",
              duration: 'Jun 2020 - Present',
              description: 'Assisted with music for student activities, managed PowerPoints during mass, helped with setup for games, and organized fundraisers for various causes.',
              skills: ['Event Management', 'Fundraising', 'Presentation Skills']
            },
            {
              year: '2024',
              title: 'Founder & CEO',
              company: 'ButterSMP',
              duration: 'Jan 2024 - Nov 2024',
              description: 'Increased server revenue by 400%, reduced lag by 75%, improved player relations, grew the server to around 200 members, and optimized plugin setup.',
              skills: ['Minecraft Development', 'DevOps', 'Server Management', 'Community Growth']
            }
          ],
          projects: [
            {
              title: 'Aeteau College',
              description: 'A portal built with TypeScript to manage and streamline the college application process. Developed features like user management, real-time updates, and integration with external APIs.',
              skills: ['TypeScript', 'Node.js', 'Express'],
              projectUrl: 'https://www.aeteau.college',
              repoUrl: 'https://github.com/KKbutter2281/aeteau_college',
              gradient: 'bg-gradient-to-br from-blue-500 to-purple-600'
            },
            {
              title: 'Soulevity',
              description: 'A community-driven platform designed to help educate users. Focused on user experience and scalability, built using TypeScript and Node.js.',
              skills: ['TypeScript', 'Node.js', 'Express'],
              projectUrl: 'soulevity.org',
              repoURL: 'https://github.com/soulevity.org',
              gradient: 'bg-gradient-to-br from-green-500 to-blue-500'
            },
            {
              title: 'MyUCF Portal',
              description: 'A student portal designed to help students track their academic progress and access resources. Built using TypeScript and designed with a focus on simplicity and efficiency.',
              skills: ['TypeScript', 'Vue', 'TailwindCSS'],
              projectUrl: 'https://github.com/KKbutter2281/myucf-portal',
              repoUrl: 'https://github.com/KKbutter2281/myucf-portal',
              gradient: 'bg-gradient-to-br from-teal-600 to-green-600'
            },
            {
              title: 'Sahara Compute',
              description: 'A cloud computing platform designed to provide users with a seamless experience. Built using Vue and TailwindCSS, focusing on user interface and performance.',
              skills: ['Cloud Computing', 'Vue', 'TailwindCSS'],
              projectUrl: 'https://saharacompute.com',
              repoUrl: 'https://github.com/SaharaCompute',
              gradient: 'bg-gradient-to-br from-indigo-500 to-blue-700'
            },
          ]
        }
      };
    },
    head() {
      return {
        title: `${this.profileData.name} - ${this.profileData.role}`,
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Personal website showcasing my experience, projects, and professional portfolio.' },
          { hid: 'keywords', name: 'keywords', content: 'developer, portfolio, web development, full-stack developer' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      };
    }
  };
  </script>
  
  <style>
  :root {
    --darkblue: #0a1929;
  }
  
  .bg-darkblue {
    background-color: var(--darkblue);
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  .bg-grid-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  </style>
  