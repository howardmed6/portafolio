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
            <!-- Carousel de imágenes reemplazando iframe -->
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
                  @click.stop="changeProjectImage(project, imgIndex)"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppProjects',
  setup() {
    let imageAutoplayIntervals = {}

    // Array de proyectos - Aquí puedes agregar más proyectos
    const projects = ref([
      {
        url: 'https://www.rehistoria.com',
        title: 'Rehistoria',
        description: 'Plataforma web interactiva para explorar y compartir historias.',
        technologies: ['Vue.js', 'Node.js', 'SupaBase'],
        images: [
          '/api/placeholder/600/250?text=Rehistoria-1',
          '/api/placeholder/600/250?text=Rehistoria-2',
          '/api/placeholder/600/250?text=Rehistoria-3',
          '/api/placeholder/600/250?text=Rehistoria-4',
          '/api/placeholder/600/250?text=Rehistoria-5'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://www.corquark.com',
        title: 'E-commerce App Form',
        description: 'Aplicación de comercio y formatos.',
        technologies: ['React', 'Firebase', 'React Native Móvil'],
        images: [
          '/api/placeholder/600/250?text=Corquark-1',
          '/api/placeholder/600/250?text=Corquark-2',
          '/api/placeholder/600/250?text=Corquark-3',
          '/api/placeholder/600/250?text=Corquark-4'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://sobrefrancia.com',
        title: 'Sobre Francia, Viajes, Noticias',
        description: 'Portal informativo sobre Francia con noticias y guías de viaje.',
        technologies: ['Angular', 'D3.js', 'Express'],
        images: [
          '/api/placeholder/600/250?text=SobreFrancia-1',
          '/api/placeholder/600/250?text=SobreFrancia-2',
          '/api/placeholder/600/250?text=SobreFrancia-3',
          '/api/placeholder/600/250?text=SobreFrancia-4',
          '/api/placeholder/600/250?text=SobreFrancia-5'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://www.teamgeneralizado.com',
        title: 'Tienda Online Paraguaya',
        description: 'Plataforma de e-commerce completa para el mercado paraguayo.',
        technologies: ['Python', 'API REST Backend', 'PostgreSQL'],
        images: [
          '/api/placeholder/600/250?text=TeamGeneralizado-1',
          '/api/placeholder/600/250?text=TeamGeneralizado-2',
          '/api/placeholder/600/250?text=TeamGeneralizado-3'
        ],
        currentImageIndex: 0
      }
    ])

    // Computed para agrupar proyectos de dos en dos (mantiene tu layout original)
    const projectPairs = computed(() => {
      const pairs = []
      for (let i = 0; i < projects.value.length; i += 2) {
        pairs.push(projects.value.slice(i, i + 2))
      }
      return pairs
    })

    // Cambiar imagen de un proyecto específico
    const changeProjectImage = (project, imageIndex) => {
      project.currentImageIndex = imageIndex
    }

    // Avanzar imagen automáticamente para un proyecto
    const nextProjectImage = (project) => {
      project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length
    }

    // Abrir proyecto
    const openProject = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    // Autoplay de imágenes para cada proyecto individual
    const startImageAutoplay = () => {
      projects.value.forEach((project, index) => {
        if (project.images.length > 1) {
          imageAutoplayIntervals[index] = setInterval(() => {
            nextProjectImage(project)
          }, 3000) // Cambia cada 3 segundos
        }
      })
    }

    const stopImageAutoplay = () => {
      Object.values(imageAutoplayIntervals).forEach(interval => {
        clearInterval(interval)
      })
      imageAutoplayIntervals = {}
    }

    // Manejo de errores de imagen
    const handleImageError = (event) => {
      event.target.src = '/api/placeholder/600/250?text=Error-Loading-Image'
    }

    // Método para agregar más proyectos dinámicamente (mantiene tu funcionalidad original)
    const addProject = (project) => {
      projects.value.push({
        ...project,
        currentImageIndex: 0
      })
    }

    onMounted(() => {
      startImageAutoplay()
    })

    onUnmounted(() => {
      stopImageAutoplay()
    })

    return {
      projects,
      projectPairs,
      changeProjectImage,
      openProject,
      handleImageError,
      addProject
    }
  }
}
</script>

<style src="./AppProjects.css"></style>
