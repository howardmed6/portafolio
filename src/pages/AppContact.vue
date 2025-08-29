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

    <!-- Tus componentes específicos -->
    <AppOtraPaginaHeader />

    <div class="layout-container">
      <AppOtraPaginaSidebar />

      <main class="main-content">
        <!-- Tus secciones específicas -->
        <section class="contenido-especial">
          <h2>Mi Otra Página</h2>
          <div class="card-especial">
            <h3>Contenido único aquí</h3>
            <p>Este es el contenido específico de esta página...</p>
          </div>
        </section>
      </main>
    </div>

    <AppOtraPaginaFooter />
  </div>
</template>

<script>
import { useStellarBackground } from '../components/useStellarBackground'
import AppOtraPaginaHeader from '../components/AppOtraPaginaHeader.vue'
import AppOtraPaginaSidebar from '../components/AppOtraPaginaSidebar.vue'
import AppOtraPaginaFooter from '../components/AppOtraPaginaFooter.vue'

export default {
  name: 'OtraPagina',
  components: {
    AppOtraPaginaHeader,
    AppOtraPaginaSidebar,
    AppOtraPaginaFooter
  },
  setup() {
    const { stars } = useStellarBackground()

    return { stars }
  }
}
</script>

<style scoped>
/* Importas los estilos del fondo */
@import '../styles/AppHome.css';

/* Tus estilos específicos para esta página */
.contenido-especial {
  padding: 2rem;
}

.card-especial {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
}
</style>
