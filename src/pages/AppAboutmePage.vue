<!-- OtraPagina.vue -->
<template>
  <div class="app-home">
    <!-- Fondo estelar reutilizado -->
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

    <!-- Usando TUS mismos componentes -->
    <AppHeader />

    <div class="layout-container">
      <AppSidebar />

      <main class="main-content">
        <!-- Tus secciones específicas de ESTA página -->
        <section class="mi-seccion-unica">
          <h2>Mira un poco sobre Howard</h2>
          <div class="contenido-unico">
            <h3>Este es un resumen de las etapas de Howard en su formación</h3>
            <p>Telefono, WhatsApp, LinkedIn, Correo y más</p>
          </div>
        </section>

        <section>
        <AppAboutme />

        </section>
        <section>
        <AppContact />

        </section>

      </main>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppSidebar from '../components/AppSidebar.vue'
import AppFooter from '../components/AppFooter.vue'
import AppContact from '../components/AppContact.vue'
import AppAboutme from '../components/AppAboutme.vue'





export default {
  name: 'AppAboutmePage',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    AppContact,
    AppAboutme,
  },
  setup() {
    const stars = ref([])

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

    return { stars }
  }
}
</script>

<style scoped>
/* Importas los mismos estilos del Home */
@import '../styles/AppHome.css';

/* Agregas solo estilos específicos para esta página si necesitas */
h2 {
margin-top: 100px;}

.contenido-unico {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
}
</style>
