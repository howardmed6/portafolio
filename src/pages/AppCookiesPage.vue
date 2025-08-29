<!-- CookiesPage.vue -->
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
        <!-- Sección específica de cookies -->
        <section class="cookies-hero-section">
          <h2>Política de Cookies</h2>
          <div class="cookies-intro">
            <h3>Información sobre el uso de cookies en este sitio</h3>
            <p>Transparencia y privacidad en howardev.site</p>
          </div>
        </section>

        <section class="cookies-content-section">
          <div class="cookies-policy-content">
            <p>
              Este sitio (<strong>howardev.site</strong>) no utiliza cookies de seguimiento ni análisis.
              Las únicas cookies son técnicas (funcionamiento básico del sitio).
            </p>
            <br>
            <p>
              Si me contactas a través del formulario, solo guardaré tu <strong>nombre</strong> y <strong>correo</strong> para responder tu mensaje. No los compartiré con terceros.
            </p>
            <br>
            <p>
              No hay cuentas de usuario ni inicio de sesión.
            </p>
          </div>
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

export default {
  name: 'AppCookiesPage',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
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

/* Estilos específicos para la página de cookies */
h2 {
  margin-top: 70px;
}

.cookies-intro {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
}

.cookies-content-section {
  margin-top: 3rem;
}

.cookies-policy-content {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  line-height: 1.6;
}

.cookies-policy-content p {
  margin-bottom: 0;
  font-size: 1.1rem;
}

.cookies-policy-content strong {
  color: #fff;
  font-weight: 600;
}
</style>
