<!-- PrivacyPage.vue -->
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
        <!-- Secciones específicas de política de privacidad -->
        <section class="mi-seccion-unica">
          <h1>Política de Privacidad</h1>
          <div class="contenido-unico">
            <h2>1. Responsable</h2>
            <p>Howard Medina Pineda (<strong>howardev.site</strong>)<br>
            Contacto: <a href="mailto:howardmed7@gmail.com">howardmed7@gmail.com</a></p>
          </div>
        </section>

        <section>
          <div class="contenido-unico">
            <h2>2. Datos Recopilados</h2>
            <ul>
              <li><strong>Formulario de contacto</strong>:
                <ul>
                  <li>Nombre</li>
                  <li>Correo electrónico</li>
                  <li>Mensaje (opcional)</li>
                </ul>
              </li>
            </ul>

            <h2>3. Finalidad del Tratamiento</h2>
            <p>Los datos proporcionados se utilizarán <strong>exclusivamente</strong> para:</p>
            <ul>
              <li>Responder a consultas laborales o profesionales</li>
              <li>Mantener comunicación relacionada con oportunidades de trabajo</li>
            </ul>

            <h2>4. Protección de Datos</h2>
            <p>Garantizo que:</p>
            <ul>
              <li>No compartiré tus datos con <strong>terceros</strong></li>
              <li>No utilizaré tu información para <strong>marketing</strong> o fines no autorizados</li>
              <li>Los datos se conservarán solo durante el tiempo <strong>necesario</strong></li>
            </ul>

            <h2>5. Cookies</h2>
            <p>Este portafolio utiliza únicamente:</p>
            <ul>
              <li><strong><router-link to="/cookies">Cookies</router-link> técnicas</strong> esenciales para el funcionamiento del sitio</li>
              <li>No se emplean <router-link to="/cookies">cookies</router-link> de análisis, publicidad o seguimiento</li>
            </ul>

            <h2>6. Tus Derechos</h2>
            <p>Puedes:</p>
            <ul>
              <li>Solicitar acceso, rectificación o eliminación de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p>Para ejercer estos derechos, contáctame a <a href="mailto:howardmed7@gmail.com">howardmed7@gmail.com</a></p>

            <hr>
            <p><small>Última actualización: 05-05-2025</small></p>
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
  name: 'AppPrivacyPage',
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

/* Agregas solo estilos específicos para esta página si necesitas */
h1 {
  margin-top: 200px;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  color: #fff;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.contenido-unico {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
}

.contenido-unico h2:first-child {
  margin-top: 0;
}

.contenido-unico ul {
  margin-left: 1rem;
}

.contenido-unico li {
  margin-bottom: 0.5rem;
}

.contenido-unico a {
  color: #64ffda;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contenido-unico a:hover {
  color: #fff;
}

.contenido-unico hr {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 2rem 0;
}
</style>
