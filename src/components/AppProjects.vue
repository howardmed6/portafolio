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
            @click="openProject(project.url)"
          >
            <!-- Carousel de imágenes -->
            <div class="futuristic-iframe-container">
              <div class="futuristic-images-wrapper">
                <img
                  v-for="(image, imgIndex) in project.images"
                  :key="imgIndex"
                  :src="image"
                  :alt="`${project.title} - Vista ${imgIndex + 1}`"
                  class="futuristic-project-iframe"
                  :class="{ 'active': project.currentImageIndex === imgIndex }"
                  @error="handleImageError"
                >
              </div>
              
              <!-- Indicadores de imágenes (solo si hay más de 1) -->
              <div class="futuristic-image-indicators" v-if="project.images.length > 1">
                <span
                  v-for="(image, imgIndex) in project.images"
                  :key="`img-indicator-${imgIndex}`"
                  class="futuristic-image-indicator"
                  :class="{ 'active': project.currentImageIndex === imgIndex }"
                  @click.stop="changeProjectImage(pairIndex * 2 + index, imgIndex)"
                ></span>
              </div>

              <div class="futuristic-iframe-overlay">
                <span class="futuristic-visit-link">
                  Visitar Proyecto
                </span>
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
    // Array de proyectos - Aquí pones tus URLs de Cloudinary
    const projects = ref([
      {
        url: 'https://www.rehistoria.com',
        title: 'Rehistoria',
        description: 'Plataforma web interactiva para explorar y compartir historias.',
        technologies: ['Vue.js', 'Node.js', 'SupaBase'],
        images: [
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/rehistoria-1.jpg',
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/rehistoria-2.jpg',
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/rehistoria-3.jpg'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://www.corquark.com',
        title: 'E-commerce App Form',
        description: 'Aplicación de comercio y formatos.',
        technologies: ['React', 'Firebase', 'React Native Móvil'],
        images: [
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/corquark-1.jpg',
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/corquark-2.jpg'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://sobrefrancia.com',
        title: 'Sobre Francia, Viajes, Noticias',
        description: 'Portal informativo sobre Francia con noticias y guías de viaje.',
        technologies: ['Angular', 'D3.js', 'Express'],
        images: [
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/francia-1.jpg',
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/francia-2.jpg',
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/francia-3.jpg'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://www.teamgeneralizado.com',
        title: 'Tienda Online Paraguaya',
        description: 'Plataforma de e-commerce completa para el mercado paraguayo.',
        technologies: ['Python', 'API REST Backend', 'PostgreSQL'],
        images: [
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/team-1.jpg',
          'https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/team-2.jpg'
        ],
        currentImageIndex: 0
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

    // Cambiar imagen de un proyecto específico SIN AUTOPLAY
    const changeProjectImage = (projectIndex, imageIndex) => {
      if (projects.value[projectIndex]) {
        projects.value[projectIndex].currentImageIndex = imageIndex
      }
    }

    // Abrir proyecto
    const openProject = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    // Manejo de errores de imagen con imagen por defecto
    const handleImageError = (event) => {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDYwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMUEyMzM5Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTI1IiBmaWxsPSIjNjM3Mzg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+Cjwvc3ZnPg=='
    }

    return {
      projects,
      projectPairs,
      changeProjectImage,
      openProject,
      handleImageError
    }
  }
}
</script>

<style src="./AppProjects.css"></style>
