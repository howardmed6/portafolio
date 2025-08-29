<template>
  <div>
    <AppHeader />

    <div class="layout-container">
      <AppSidebar />

      <main class="main-content">
      <!-- Sección de Perfil -->
      <section class="profile-section">
        <div class="profile-card">
          <div class="profile-avatar">
            <img src="/image/icon.svg" alt="Howard Medina" />
          </div>
          <div class="profile-info">
            <h1>Howard Medina</h1>
            <h2>Desarrollador Full Stack & QA Tester</h2>
            <p>Especializado en desarrollo web, testing y análisis de datos. Experiencia en Azure DevOps y automatización de pruebas.</p>
            <div class="profile-links">
              <a href="https://linkedin.com/in/howardmedina" target="_blank">LinkedIn</a>
              <a href="https://github.com/howardmed7" target="_blank">GitHub</a>
              <a href="tel:+573126303088">+57 312 630 3088</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección de Certificados -->
      <section class="certificates-section">
        <h2>Certificaciones y Logros</h2>
        <div class="certificates-grid">
          <div v-for="cert in certificates" :key="cert.title" class="certificate-item">
            <h3>{{ cert.title }}</h3>
            <p>{{ cert.institution }} - {{ cert.year }}</p>
          </div>
        </div>
      </section>

      <!-- Sección de Proyectos -->
      <section class="projects-section">
        <h2>Proyectos Destacados</h2>
        <div class="projects-grid">
          <div v-for="(pair, index) in projectPairs" :key="index" class="project-pair">
            <div v-for="project in pair" :key="project.title" class="project-item">
              <iframe :src="project.src" :title="project.title"></iframe>
              <h3>{{ project.title }}</h3>
            </div>
          </div>
        </div>
              </section>
      </main>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppSidebar from '../components/AppSidebar.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'AppHome',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  setup() {
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

    return { certificates, projectPairs }
  }
}
</script>

<style scoped>
@import '@/styles/AppHome.css';

.layout-container {
  display: flex;
}
</style>
