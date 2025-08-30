<!-- components/AppProjects.vue -->
<template>
  <section class="futuristic-projects-section">
    <div class="futuristic-projects-container">
      <h2 class="futuristic-section-title">Proyectos Destacados</h2>

      <div class="futuristic-projects-grid">
        <div
          v-for="(pair, pairIndex) in projectPairs"
          :key="`pair-${pairIndex}`"
          class="futuristic-project-pair"
        >
          <div
            v-for="(project, index) in pair"
            :key="`project-${pairIndex}-${index}`"
            class="futuristic-project-item"
          >
            <div class="futuristic-iframe-container">
              <iframe
                :src="project.url"
                :title="project.title"
                class="futuristic-project-iframe"
                frameborder="0"
                loading="lazy"
                @load="handleIframeLoad"
                @error="handleIframeError"
              ></iframe>
              <div class="futuristic-iframe-overlay">
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="futuristic-visit-link"
                >
                  Visitar Proyecto
                </a>
              </div>
            </div>
            <div class="futuristic-project-info">
              <h3 class="futuristic-project-title">{{ project.title }}</h3>
              <p class="futuristic-project-description">{{ project.description }}</p>
              <div class="futuristic-project-tech">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="futuristic-tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'AppProjects',
  setup() {
    // Array de proyectos - Aquí puedes agregar más proyectos
    const projects = ref([
       {
         url: 'https://www.rehistoria.com',
         title: 'Rehistoria',
         description: 'Plataforma web interactiva para explorar y compartir historias.',
         technologies: ['Vue.js', 'Node.js', 'SupaBase']
       },
       {
         url: 'https://www.corquark.com',
         title: 'E-commerce App Form',
         description: 'Aplicación de comercio y formatos.',
         technologies: ['React', 'Firebase', 'Reac Native Movil']
       },
       {
         url: 'https://sobrefrancia.com',
         title: 'Sobre Francia, Viajes, Noticias',
         description: 'Panel de control para análisis de datos en tiempo real.',
         technologies: ['Angular', 'D3.js', 'Express']
       },
       {
         url: 'https://www.teamgeneralizado.com',
         title: 'Tienda Online paraguaya',
         description: 'API robusta para gestión de usuarios y autenticación.',
         technologies: ['Python', 'API REST Backend', 'API REST Backend']
       }
    ])

    // Computed para agrupar proyectos de dos en dos
    const projectPairs = computed(() => {
      const pairs = []
      for (let i = 0; i < projects.value.length; i += 2) {
        pairs.push(projects.value.slice(i, i + 2))
      }
      return pairs
    })

    const handleIframeLoad = (event) => {
      console.log('Iframe cargado:', event.target.src)
    }

    const handleIframeError = (event) => {
      console.error('Error cargando iframe:', event.target.src)
      // Podrías mostrar un mensaje de error o una imagen placeholder
    }

    // Método para agregar más proyectos dinámicamente
    const addProject = (project) => {
      projects.value.push(project)
    }

    return {
      projects,
      projectPairs,
      handleIframeLoad,
      handleIframeError,
      addProject
    }
  }
}
</script>

<style src="./AppProjects.css"></style>
