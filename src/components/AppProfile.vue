<!-- components/AppProfile.vue -->
<template>
  <div class="futuristic-profile-wrapper">
    <!-- Sección del Perfil -->
    <div class="futuristic-profile-card">
      <div class="futuristic-profile-header">
      <img src="/image/FOTO.jpeg" alt="Howard Medina Pineda" class="futuristic-profile-image">        <h1 class="futuristic-profile-name">Howard Medina Pineda</h1>
      </div>

      <ul class="futuristic-profile-info">
        <li class="futuristic-info-item">
          <span class="futuristic-info-label">Edad:</span>
          <span class="futuristic-info-value">23</span>
        </li>
        <li class="futuristic-info-item">
          <span class="futuristic-info-label">Nacionalidad:</span>
          <span class="futuristic-info-value">Colombia</span>
        </li>
        <li class="futuristic-info-item">
          <span class="futuristic-info-label">Profesión:</span>
          <div class="futuristic-info-value">
            <div class="futuristic-profession-item">QA Automation Engineer</div>
            <div class="futuristic-profession-item">Full Stack Developer</div>
            <div class="futuristic-profession-item">Data Analyst</div>
          </div>
        </li>
        <li class="futuristic-info-item">
          <span class="futuristic-info-label">Nivel de inglés:</span>
          <span class="futuristic-info-value">B2</span>
        </li>
      </ul>
    </div>

    <!-- Sección del Carrusel de Certificados -->
    <div class="futuristic-carousel-section">
      <h2 class="futuristic-section-title">Certificados</h2>
      <div class="futuristic-carousel-container">
        <div class="futuristic-carousel-wrapper">
          <div
            v-for="(certificate, index) in certificates"
            :key="index"
            class="futuristic-slide"
            :class="{ 'futuristic-active': currentSlide === index }"
          >
            <img
              :src="certificate.url"
              :alt="certificate.titulo"
              @error="handleImageError"
            >
            <div class="futuristic-slide-title">{{ certificate.titulo }}</div>
          </div>
        </div>

        <!-- Navegación -->
        <div class="futuristic-navigation">
          <button
            @click="previousSlide"
            class="futuristic-nav-button"
            aria-label="Imagen anterior"
          >
            &#10094;
          </button>
          <button
            @click="nextSlide"
            class="futuristic-nav-button"
            aria-label="Siguiente imagen"
          >
            &#10095;
          </button>
        </div>

        <!-- Indicadores -->
        <div class="futuristic-indicators">
          <span
            v-for="(certificate, index) in certificates"
            :key="`indicator-${index}`"
            class="futuristic-indicator"
            :class="{ 'futuristic-active': currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppProfile',
  setup() {
    const currentSlide = ref(0)
    let autoplayInterval = null

    const certificates = ref([
      // ── Oracle / Alura ──
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576927/logicadeprogramacion_adhfgh.png", titulo: "LÓGICA DE PROGRAMACIÓN: EXPLORAR FUNCIONES Y LISTAS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576925/javascriptlogicadeprogramacion_dwwnov.png", titulo: "LÓGICA DE PROGRAMACIÓN: SUMÉRGETE EN LA PROGRAMACIÓN CON JAVASCRIPT" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576922/amigosecreto_d2wh0b.png", titulo: "PRACTICANDO LÓGICA DE PROGRAMACIÓN: CHALLENGE AMIGO SECRETO" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576919/htmlycssresponsividad_vpwwfh.png", titulo: "HTML Y CSS: TRABAJANDO CON RESPONSIVIDAD Y PUBLICACIÓN DE PROYECTOS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576920/headerfooter_zqg5uh.png", titulo: "HTML Y CSS: HEADER, FOOTER Y VARIABLES CSS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576920/htmlycssposicionamiento_okvx6v.png", titulo: "HTML Y CSS: CLASES, POSICIONAMIENTO Y FLEXBOX" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576922/htmlycssambientesdedesarrollo_melmj5.png", titulo: "HTML Y CSS: AMBIENTES DE DESARROLLO, ESTRUCTURA DE ARCHIVOS Y TAGS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576919/gitygithubs_hrflzc.png", titulo: "GIT Y GITHUB: REPOSITORIO, COMMIT Y VERSIONES" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576924/chatgpt_aw8ezu.png", titulo: "CHATGPT: OPTIMIZANDO LA CALIDAD DE LOS RESULTADOS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576923/chatgptprogramacion_kqwgsg.png", titulo: "CHATGPT Y PROGRAMACIÓN: AUMENTA TU PRODUCTIVIDAD" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576923/condicionalesjava_xfsjlq.png", titulo: "PRACTICANDO JAVA: CONDICIONALES CON IF/ELSE" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576921/creandomiaplicacion_c3zrms.png", titulo: "JAVA: CREANDO TU PRIMERA APLICACIÓN" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576922/fundamentosdeagilidad_mlbljj.png", titulo: "FUNDAMENTOS DE AGILIDAD: PRIMEROS PASOS PARA LA TRANSFORMACIÓN ÁGIL" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576925/ides_b8iggh.png", titulo: "HTML Y CSS: AMBIENTES DE DESARROLLO, ESTRUCTURA DE ARCHIVOS Y TAGS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576926/posicionamientoyflexbos_ukmgwv.png", titulo: "HTML Y CSS: CLASES, POSICIONAMIENTO Y FLEXBOX" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576925/integraciondeunaaplicacion_g7y5mq.png", titulo: "SPRING AI: INTEGRA UNA APLICACIÓN CON OPENAI" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576926/javaapiarchivos_lixqn4.png", titulo: "JAVA: CONSUMIR API, ESCRIBIR ARCHIVOS Y MANEJAR ERRORES" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576921/javalombandos_ayayww.png", titulo: "JAVA: TRABAJAR CON LISTAS Y COLECCIONES DE DATOS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576921/javalombandos_ayayww.png", titulo: "JAVA: TRABAJANDO CON LAMBDAS, STREAMS Y SPRING FRAMEWORK" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576923/javapersistenciadedatosyconsultas_emi6sr.png", titulo: "JAVA: PERSISTENCIA DE DATOS Y CONSULTAS CON SPRING DATA JPA" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576924/javaporgramacionorientada_xnuulh.png", titulo: "JAVA: APLICANDO LA ORIENTACIÓN A OBJETOS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576928/surmergeteenlaprogramaci%C3%B2nconjavascript_iohigg.png", titulo: "LÓGICA DE PROGRAMACIÓN: SUMÉRGETE EN LA PROGRAMACIÓN CON JAVASCRIPT" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576922/funcionesylistas_lgha5x.png", titulo: "LÓGICA DE PROGRAMACIÓN: EXPLORAR FUNCIONES Y LISTAS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1756576926/practicandoconjava_rpukpl.png", titulo: "PRACTICANDO CON JAVA: CHALLENGE CONVERSOR DE MONEDAS" },
      // ── Google Data Analytics ──
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450219/Google_Data_Analytics_Capstone_Complete_a_Case_Study_oaf20h.png", titulo: "GOOGLE DATA ANALYTICS CAPSTONE: COMPLETE A CASE STUDY" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450217/Data_Analysis_with_R_Programming_tfgp5e.png", titulo: "DATA ANALYSIS WITH R PROGRAMMING" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450217/Share_Data_Through_the_Art_of_Visualization_k8pfnb.png", titulo: "SHARE DATA THROUGH THE ART OF VISUALIZATION" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450218/Analyze_Data_to_Answer_Questions_s8widj.png", titulo: "ANALYZE DATA TO ANSWER QUESTIONS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450217/Process_Data_from_Dirty_to_Clean_s9z2cd.png", titulo: "PROCESS DATA FROM DIRTY TO CLEAN" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450218/Prepare_Data_for_Exploration_uswmmx.png", titulo: "PREPARE DATA FOR EXPLORATION" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450217/Developing_Interpersonal_Skills_oyngdh.png", titulo: "DEVELOPING INTERPERSONAL SKILLS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450217/Ask_Questions_to_Make_Data-Driven_Decisions_ni9u1u.png", titulo: "ASK QUESTIONS TO MAKE DATA-DRIVEN DECISIONS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450218/Generative_AI_Prompt_Engineering_Basics_mxbyky.png", titulo: "GENERATIVE AI PROMPT ENGINEERING BASICS" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450218/Foundations_Data_Everywhere_jspiip.png", titulo: "FOUNDATIONS: DATA, DATA, EVERYWHERE" },
      { url: "https://res.cloudinary.com/dpj17zdr2/image/upload/v1781450218/Accelerate_Your_Job_Search_with_AI_q4ux78.png", titulo: "ACCELERATE YOUR JOB SEARCH WITH AI" },
    ])

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % certificates.value.length
    }

    const previousSlide = () => {
      currentSlide.value = (currentSlide.value - 1 + certificates.value.length) % certificates.value.length
    }

    const goToSlide = (index) => {
      currentSlide.value = index
      pauseAutoplay()
    }

    const startAutoplay = () => {
      autoplayInterval = setInterval(nextSlide, 4000)
    }

    const pauseAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
        setTimeout(startAutoplay, 6000)
      }
    }

    const handleImageError = (event) => {
      event.target.src = '/api/placeholder/800/450'
    }

    onMounted(() => {
      startAutoplay()
    })

    onUnmounted(() => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
    })

    return {
      certificates,
      currentSlide,
      nextSlide,
      previousSlide,
      goToSlide,
      handleImageError
    }
  }
}
</script>

<style src="./AppProfile.css"></style>