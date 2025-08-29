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
          <h2>Bienvenido al Cosmos Digital</h2>
          <div class="futuristic-card">
            <h3>Mi Portfolio Cósmico</h3>
            <p>Explora el universo del desarrollo de software...</p>
          </div>
        </section>
      </main>
    </div>

    <AppFooter />
  </div>
</template>

<script>
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

  }
}
</script>

<style scoped>
@import '../styles/AppHome.css';

.layout-container {
  display: flex;
}
</style>
