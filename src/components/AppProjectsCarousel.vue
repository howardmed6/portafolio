<!-- components/AppProjectsCarousel.vue -->
<template>
  <section class="futuristic-carousel-section">
    <div class="futuristic-carousel-container">
      <h2 class="futuristic-carousel-title">Proyectos Destacados</h2>

      <div class="futuristic-main-carousel">
        <div class="futuristic-carousel-wrapper">
          <!-- Slides de proyectos -->
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="futuristic-project-slide"
            :class="{ 'futuristic-active': currentSlide === index }"
            @click="openProject(project.url)"
          >
            <!-- Carousel interno de imágenes del proyecto -->
            <div class="futuristic-project-images">
              <div class="futuristic-images-container">
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

              <!-- Indicadores de imágenes del proyecto activo -->
              <div 
                class="futuristic-image-indicators" 
                v-if="project.images.length > 1 && currentSlide === index"
              >
                <span
                  v-for="(image, imgIndex) in project.images"
                  :key="`img-indicator-${imgIndex}`"
                  class="futuristic-image-indicator"
                  :class="{ 'active': project.currentImageIndex === imgIndex }"
                  @click.stop="changeProjectImage(index, imgIndex)"
                ></span>
              </div>

              <!-- Overlay para visitar proyecto -->
              <div class="futuristic-project-overlay">
                <span class="futuristic-visit-text">Visitar Proyecto</span>
              </div>
            </div>

            <!-- Info del proyecto -->
            <div class="futuristic-project-content">
              <h3 class="futuristic-project-title">{{ project.title }}</h3>
              <p class="futuristic-project-description">{{ project.description }}</p>
              <div class="futuristic-project-technologies">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="futuristic-tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navegación principal del carousel -->
        <div class="futuristic-main-navigation">
          <button
            @click="previousSlide"
            class="futuristic-nav-btn"
            aria-label="Proyecto anterior"
          >
            &#10094;
          </button>
          <button
            @click="nextSlide"
            class="futuristic-nav-btn"
            aria-label="Siguiente proyecto"
          >
            &#10095;
          </button>
        </div>

        <!-- Indicadores principales -->
        <div class="futuristic-main-indicators">
          <span
            v-for="(project, index) in projects"
            :key="`main-indicator-${index}`"
            class="futuristic-main-indicator"
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
  name: 'AppProjectsCarousel',
  setup() {
    const currentSlide = ref(0)
    let autoplayInterval = null
    let imageAutoplayInterval = null

    // Mismos proyectos que tu grid manual
    const projects = ref([
      {
        url: 'https://www.rehistoria.com',
        title: 'Rehistoria',
        description: 'Plataforma web interactiva para explorar y compartir historias.',
        technologies: ['Vue.js', 'Node.js', 'SupaBase'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598576/msedge_kwSUBDRcn8_bvuxgq.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598711/msedge_aveJfy6YRX_lzzyxc.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598818/msedge_sSzMTZMFHM_vperne.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598903/msedge_0DoBx9d8nK_gvjyvs.png'
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

    // Cambiar imagen dentro del proyecto activo
    const changeProjectImage = (projectIndex, imageIndex) => {
      if (projects.value[projectIndex]) {
        projects.value[projectIndex].currentImageIndex = imageIndex
      }
    }

    // Autoplay principal (como tu AppProfile)
    const startAutoplay = () => {
      autoplayInterval = setInterval(nextSlide, 6000) // 6 segundos por proyecto
    }

    const pauseAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
        setTimeout(startAutoplay, 8000) // Pausa y reinicia
      }
    }

    // Autoplay para imágenes del proyecto activo
    const startImageAutoplay = () => {
      imageAutoplayInterval = setInterval(() => {
        const activeProject = projects.value[currentSlide.value]
        if (activeProject && activeProject.images.length > 1) {
          activeProject.currentImageIndex = (activeProject.currentImageIndex + 1) % activeProject.images.length
        }
      }, 3000) // 3 segundos por imagen
    }

    const openProject = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    const handleImageError = (event) => {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDYwMCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjMUEyMzM5Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTc1IiBmaWxsPSIjNjM3Mzg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+Cjwvc3ZnPg=='
    }

    onMounted(() => {
      startAutoplay()
      startImageAutoplay()
    })

    onUnmounted(() => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
      if (imageAutoplayInterval) {
        clearInterval(imageAutoplayInterval)
      }
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

<style src="./AppProjectsCarousel.css"></style>
