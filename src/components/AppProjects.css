<!-- components/AppProjects.vue -->
<template>
  <section class="futuristic-projects-section">
    <div class="futuristic-projects-container">
      <h2 class="futuristic-section-title">Proyectos Destacados</h2>

      <div class="futuristic-carousel-container">
        <div class="futuristic-carousel-wrapper">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="futuristic-project-slide"
            :class="{ 'futuristic-active': currentSlide === index }"
            @click="openProject(project.url)"
          >
            <!-- Carousel de imágenes del proyecto -->
            <div class="futuristic-project-images">
              <div class="futuristic-image-container">
                <div class="futuristic-images-wrapper">
                  <img
                    v-for="(image, imgIndex) in project.images"
                    :key="imgIndex"
                    :src="image"
                    :alt="`${project.title} - Vista ${imgIndex + 1}`"
                    class="futuristic-project-image"
                    :class="{ 'active': project.currentImageIndex === imgIndex }"
                    @error="handleImageError"
                  >
                </div>
                
                <!-- Indicadores de imágenes -->
                <div class="futuristic-image-indicators" v-if="project.images.length > 1">
                  <span
                    v-for="(image, imgIndex) in project.images"
                    :key="`img-indicator-${imgIndex}`"
                    class="futuristic-image-indicator"
                    :class="{ 'active': project.currentImageIndex === imgIndex }"
                    @click.stop="changeProjectImage(index, imgIndex)"
                  ></span>
                </div>

                <!-- Overlay de hover -->
                <div class="futuristic-iframe-overlay">
                  <span class="futuristic-visit-link">
                    Visitar Proyecto
                  </span>
                </div>
              </div>
            </div>

            <!-- Información del proyecto -->
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

        <!-- Navegación del carousel -->
        <div class="futuristic-navigation">
          <button
            @click="previousSlide"
            class="futuristic-nav-button"
            aria-label="Proyecto anterior"
          >
            &#10094;
          </button>
          <button
            @click="nextSlide"
            class="futuristic-nav-button"
            aria-label="Siguiente proyecto"
          >
            &#10095;
          </button>
        </div>

        <!-- Indicadores del carousel -->
        <div class="futuristic-indicators">
          <span
            v-for="(project, index) in projects"
            :key="`indicator-${index}`"
            class="futuristic-indicator"
            :class="{ 'futuristic-active': currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppProjects',
  setup() {
    const currentSlide = ref(0)
    let autoplayInterval = null
    let imageAutoplayIntervals = {}

    // Array de proyectos con imágenes (máximo 5 por proyecto)
    const projects = ref([
      {
        url: 'https://www.rehistoria.com',
        title: 'Rehistoria',
        description: 'Plataforma web interactiva para explorar y compartir historias.',
        technologies: ['Vue.js', 'Node.js', 'SupaBase'],
        images: [
          '/api/placeholder/600/300?text=Rehistoria-1',
          '/api/placeholder/600/300?text=Rehistoria-2',
          '/api/placeholder/600/300?text=Rehistoria-3',
          '/api/placeholder/600/300?text=Rehistoria-4',
          '/api/placeholder/600/300?text=Rehistoria-5'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://www.corquark.com',
        title: 'E-commerce App Form',
        description: 'Aplicación de comercio y formatos.',
        technologies: ['React', 'Firebase', 'React Native Móvil'],
        images: [
          '/api/placeholder/600/300?text=Corquark-1',
          '/api/placeholder/600/300?text=Corquark-2',
          '/api/placeholder/600/300?text=Corquark-3',
          '/api/placeholder/600/300?text=Corquark-4'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://sobrefrancia.com',
        title: 'Sobre Francia, Viajes, Noticias',
        description: 'Portal informativo sobre Francia con noticias y guías de viaje.',
        technologies: ['Angular', 'D3.js', 'Express'],
        images: [
          '/api/placeholder/600/300?text=SobreFrancia-1',
          '/api/placeholder/600/300?text=SobreFrancia-2',
          '/api/placeholder/600/300?text=SobreFrancia-3',
          '/api/placeholder/600/300?text=SobreFrancia-4',
          '/api/placeholder/600/300?text=SobreFrancia-5'
        ],
        currentImageIndex: 0
      },
      {
        url: 'https://www.teamgeneralizado.com',
        title: 'Tienda Online Paraguaya',
        description: 'Plataforma de e-commerce completa para el mercado paraguayo.',
        technologies: ['Python', 'API REST Backend', 'PostgreSQL'],
        images: [
          '/api/placeholder/600/300?text=TeamGeneralizado-1',
          '/api/placeholder/600/300?text=TeamGeneralizado-2',
          '/api/placeholder/600/300?text=TeamGeneralizado-3'
        ],
        currentImageIndex: 0
      }
    ])

    // Navegación del carousel principal
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % projects.value.length
    }

    const previousSlide = () => {
      currentSlide.value = (currentSlide.value - 1 + projects.value.length) % projects.value.length
    }

    const goToSlide = (index) => {
      currentSlide.value = index
      pauseAutoplay()
    }

    // Navegación de imágenes de proyecto
    const changeProjectImage = (projectIndex, imageIndex) => {
      projects.value[projectIndex].currentImageIndex = imageIndex
    }

    const nextProjectImage = (projectIndex) => {
      const project = projects.value[projectIndex]
      project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length
    }

    // Abrir proyecto
    const openProject = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    // Autoplay del carousel principal
    const startAutoplay = () => {
      autoplayInterval = setInterval(nextSlide, 6000)
    }

    const pauseAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
        setTimeout(startAutoplay, 8000)
      }
    }

    // Autoplay de imágenes de cada proyecto
    const startImageAutoplay = () => {
      projects.value.forEach((project, index) => {
        if (project.images.length > 1) {
          imageAutoplayIntervals[index] = setInterval(() => {
            nextProjectImage(index)
          }, 3000)
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
      event.target.src = '/api/placeholder/600/300?text=Error-Loading-Image'
    }

    onMounted(() => {
      startAutoplay()
      startImageAutoplay()
    })

    onUnmounted(() => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
      stopImageAutoplay()
    })

    return {
      projects,
      currentSlide,
      nextSlide,
      previousSlide,
      goToSlide,
      changeProjectImage,
      openProject,
      handleImageError
    }
  }
}
</script>

<style src="./AppProjects.css"></style>
