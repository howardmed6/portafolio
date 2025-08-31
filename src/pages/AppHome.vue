<template>
  <div class="app-home">
    <!-- Estrellas como elementos reales -->
    <div class="stars">
      <div v-for="(star, index) in stars" :key="index"
           class="star"
           :style="{
             left: star.x + 'px',
             top: star.y + 'px',
             width: star.size + 'px',
             height: star.size + 'px',
             animationDelay: star.delay + 's',
             animationDuration: star.duration + 's'
           }">
      </div>
    </div>

    <AppHeader />

    <div class="layout-container">
      <AppSidebar />

      <main class="main-content">




        <section class="demo-section">
          <h2>Bienvenido al Portafolio de Howard</h2>
          <div class="futuristic-card">
            <h3>Logros</h3>
            <p>Mira mi perfil, mis certificaciones y algunos proyectos en los que trabajé</p>
          </div>
        </section>
      </main>
    </div>

     <section >
        <AppProfile />
     </section>


     <section >
        <AppCertificates />
     </section>

     <section>
      <AppProjects />
     </section>

     <section>
      <AppProjectsCarousel />
     </section>

     <section>
      <AppContact />
     </section>

    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppSidebar from '../components/AppSidebar.vue'
import AppFooter from '../components/AppFooter.vue'
import AppContact from '@/components/AppContact.vue'
import AppProfile from '@/components/AppProfile.vue'
import AppProjects from '@/components/AppProjects.vue'
import AppCertificates from '@/components/AppCertificates.vue'
import AppProjectsCarousel from '@/components/AppProjectsCarousel.vue'




export default {
  name: 'AppHome',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    AppContact,
    AppProfile,
    AppProjects,
    AppCertificates,
    AppProjectsCarousel
  },
  setup() {
    const stars = ref([])

    const certificates = ref([
      { title: 'Tecnólogo en Análisis y Desarrollo de Software', institution: 'SENA', year: '2024' },
      { title: 'ONE Tech Foundation G8 - Back End', institution: 'Alura/Oracle', year: '2025' },
      { title: 'Microsoft Azure DevOps', institution: 'Experiencia práctica - SQDM', year: '' },
      { title: 'Google Data Analytics', institution: 'En progreso', year: '2025' }
    ])

    const projectPairs = ref([
      [
        { src: '/projects/project1.html', title: 'Sistema de Gestión Web' },
        { src: '/projects/project2.html', title: 'App Móvil E-commerce' }
      ],
      [
        { src: '/projects/project3.html', title: 'Dashboard Analytics' },
        { src: '/projects/project4.html', title: 'API REST Backend' }
      ]
    ])

    const createStars = () => {
      const newStars = []
      const starCount = 150

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 4 + 2
        })
      }

      stars.value = newStars
    }

    onMounted(() => {
      createStars()
      window.addEventListener('resize', createStars)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', createStars)
    })

    return { stars, certificates, projectPairs }
  }
}
</script>

<style scoped>
@import '../styles/AppHome.css';

.layout-container {
  display: flex;
}
</style>
