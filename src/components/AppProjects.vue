<!-- components/AppProjects.vue -->
<template>
  <section class="futuristic-projects-section">
    <div class="futuristic-projects-container">
      <h2 class="futuristic-section-title">
        {{ lang === 'en' ? 'Featured Projects' : 'Proyectos Destacados' }}
      </h2>

      <!-- Toggle idioma global -->
      <div class="proj-lang-toggle">
        <button :class="['proj-lang-btn', { active: lang === 'en' }]" @click="lang = 'en'">
          <svg class="proj-flag" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="14" fill="#B22234"/>
            <rect width="20" height="1.08" y="1.08" fill="#fff"/>
            <rect width="20" height="1.08" y="3.23" fill="#fff"/>
            <rect width="20" height="1.08" y="5.38" fill="#fff"/>
            <rect width="20" height="1.08" y="7.54" fill="#fff"/>
            <rect width="20" height="1.08" y="9.69" fill="#fff"/>
            <rect width="20" height="1.08" y="11.85" fill="#fff"/>
            <rect width="8" height="7.54" fill="#3C3B6E"/>
          </svg>
          English
        </button>
        <span class="proj-lang-divider">|</span>
        <button :class="['proj-lang-btn', { active: lang === 'es' }]" @click="lang = 'es'">
          <svg class="proj-flag" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="4.67" y="0" fill="#FCD116"/>
            <rect width="20" height="4.67" y="4.67" fill="#003893"/>
            <rect width="20" height="4.67" y="9.33" fill="#CE1126"/>
          </svg>
          Español
        </button>
      </div>

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
          >
            <!-- Media: imágenes o video -->
            <div class="futuristic-iframe-container" @click="openProject(project.url)">
              <!-- Video si existe -->
              <template v-if="project.video">
                <video
                  class="futuristic-project-video"
                  :src="project.video"
                  muted
                  loop
                  playsinline
                  @mouseenter="e => e.target.play()"
                  @mouseleave="e => e.target.pause()"
                ></video>
              </template>

              <!-- Imágenes carousel -->
              <template v-else>
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
                <div class="futuristic-image-indicators" v-if="project.images && project.images.length > 1">
                  <span
                    v-for="(image, imgIndex) in project.images"
                    :key="`img-indicator-${imgIndex}`"
                    class="futuristic-image-indicator"
                    :class="{ 'active': project.currentImageIndex === imgIndex }"
                    @click.stop="changeProjectImage(pairIndex * 2 + index, imgIndex)"
                  ></span>
                </div>
              </template>

              <div class="futuristic-iframe-overlay">
                <span class="futuristic-visit-link">
                  {{ lang === 'en' ? 'Visit Project' : 'Visitar Proyecto' }}
                </span>
              </div>
            </div>

            <!-- Info del proyecto -->
            <div class="futuristic-project-info">
              <h3 class="futuristic-project-title">{{ project.title }}</h3>

              <!-- Descripción corta -->
              <p class="futuristic-project-description">
                {{ lang === 'en' ? project.descriptionEN : project.descriptionES }}
              </p>

              <!-- Tecnologías -->
              <div class="futuristic-project-tech">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="futuristic-tech-tag"
                >{{ tech }}</span>
              </div>

              <!-- Botón desplegar más info -->
              <button
                class="proj-expand-btn"
                @click="toggleExpand(pairIndex * 2 + index)"
              >
                {{ expandedProjects[pairIndex * 2 + index]
                  ? (lang === 'en' ? '▲ Less info' : '▲ Menos info')
                  : (lang === 'en' ? '▼ More info' : '▼ Más info') }}
              </button>

              <!-- Panel expandible -->
              <div
                class="proj-expand-panel"
                :class="{ 'open': expandedProjects[pairIndex * 2 + index] }"
              >
                <p class="proj-expand-text">
                  {{ lang === 'en' ? project.detailEN : project.detailES }}
                </p>
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
    const lang = ref('en')
    const expandedProjects = ref({})

    const toggleExpand = (index) => {
      expandedProjects.value[index] = !expandedProjects.value[index]
    }

    const projects = ref([
      // ── PROYECTOS EXISTENTES ──
      {
        url: 'https://www.rehistoria.com',
        title: 'Rehistoria',
        descriptionEN: 'Interactive web platform to explore and share stories.',
        descriptionES: 'Plataforma web interactiva para explorar y compartir historias.',
        detailEN: 'A full-stack web application built with Vue.js and Node.js, using Supabase as the backend database. Users can create, share and explore stories in an immersive interface.',
        detailES: 'Aplicación web full-stack construida con Vue.js y Node.js, usando Supabase como base de datos. Los usuarios pueden crear, compartir y explorar historias en una interfaz inmersiva.',
        technologies: ['Vue.js', 'Node.js', 'Supabase'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598576/msedge_kwSUBDRcn8_bvuxgq.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598711/msedge_aveJfy6YRX_lzzyxc.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598818/msedge_sSzMTZMFHM_vperne.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598903/msedge_0DoBx9d8nK_gvjyvs.png'
        ],
        video: null,
        currentImageIndex: 0
      },
      {
        url: 'https://www.corquark.com',
        title: 'E-commerce App Form',
        descriptionEN: 'Commerce and forms management application.',
        descriptionES: 'Aplicación de comercio y gestión de formatos.',
        detailEN: 'Built with React and Firebase, this platform handles e-commerce flows and dynamic form management. The mobile version was developed with React Native.',
        detailES: 'Construida con React y Firebase, esta plataforma gestiona flujos de comercio electrónico y formularios dinámicos. La versión móvil fue desarrollada con React Native.',
        technologies: ['React', 'Firebase', 'React Native'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598974/msedge_sT2aX7w83J_vwaq7x.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756599034/msedge_sVwVC0oquA_o6ccwb.png'
        ],
        video: null,
        currentImageIndex: 0
      },
      {
        url: 'https://sobrefrancia.com',
        title: 'Sobre Francia',
        descriptionEN: 'Informational portal about France with news and travel guides.',
        descriptionES: 'Portal informativo sobre Francia con noticias y guías de viaje.',
        detailEN: 'A content-rich portal with news, culture and travel guides about France. Built with Angular and D3.js for data visualizations, backed by an Express API.',
        detailES: 'Portal con noticias, cultura y guías de viaje sobre Francia. Construido con Angular y D3.js para visualizaciones de datos, respaldado por una API en Express.',
        technologies: ['Angular', 'D3.js', 'Express'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756599088/msedge_Scu4CfYEoT_msh19n.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756599220/msedge_bj5VhqTktl_nbxlpi.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756599277/msedge_O9X0WGP3Ts_t0tr4e.png'
        ],
        video: null,
        currentImageIndex: 0
      },
      {
        url: 'https://www.teamgeneralizado.com',
        title: 'Team Generalizado — Podcast Web',
        descriptionEN: 'Podcast website built for a psychology student at UNAD.',
        descriptionES: 'Sitio web de podcast desarrollado para una estudiante de psicología en la UNAD.',
        detailEN: 'A clean and professional podcast site built with Vue.js for a client studying psychology at UNAD. Focused on accessibility, free tools and quick deployment.',
        detailES: 'Sitio web limpio y profesional construido con Vue.js para una clienta que estudia psicología en la UNAD. Enfocado en accesibilidad, herramientas gratuitas y despliegue rápido.',
        technologies: ['Vue.js', 'CSS3', 'Free Hosting'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781457238/Jp6g9cWI0Q_i1nnuk.png',
        ],
        video: null,
        currentImageIndex: 0
      },

      // ── PROYECTOS NUEVOS ──
      {
        url: '#',
        title: 'YouTube Automation Pipeline',
        descriptionEN: 'Automated YouTube channel managed entirely from Telegram using AI and cloud services.',
        descriptionES: 'Canal de YouTube automatizado gestionado desde Telegram usando IA y servicios en la nube.',
        detailEN: 'A 32-script Python pipeline that automates trailer detection, video editing, metadata generation and YouTube uploads. Integrates YouTube Data API, TikTok Research API, FFmpeg, AWS Lambda, AWS CodePipeline, Azure Logic Apps, OpenAI (DALL-E, GPT), Claude (Anthropic) and Cloud Video Intelligence. Copyright detection and Supabase storage included. Controlled end-to-end via Telegram bot.',
        detailES: 'Pipeline de 32 scripts en Python que automatiza la detección de trailers, edición de video, generación de metadatos y subida a YouTube. Integra YouTube Data API, TikTok Research API, FFmpeg, AWS Lambda, AWS CodePipeline, Azure Logic Apps, OpenAI (DALL-E, GPT), Claude (Anthropic) y Cloud Video Intelligence. Incluye detección de copyright y almacenamiento en Supabase. Controlado desde Telegram.',
        technologies: ['Python', 'FFmpeg', 'Azure Functions', 'Google Cloud', 'AWS Lambda', 'AWS CodePipeline', 'OpenAI', 'Claude API', 'Firebase', 'Telegram Bot'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781453427/msedge_3YTVnpswFG_dyhbwk.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781454951/ZoomIt64_eE9tKefDp9_xwtx5u.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781453165/Gemini_Generated_Image_9re88p9re88p9re8_m567h9.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781453156/1777658882271_uvdbmc.jpg',
        ],
        video: null,
        currentImageIndex: 0
      },
      {
        url: '#',
        title: 'Shorts Automation — Movie & Series',
        descriptionEN: 'Automated short-video generator for movies and series content, deployed on the cloud.',
        descriptionES: 'Generador automatizado de videos cortos para contenido de películas y series, desplegado en la nube.',
        detailEN: 'Uses TheMovieDB API to fetch metadata, posters and content. Generates edited short videos with Python and JavaScript, deployed on Google Cloud Run and Render. A Cloudflare Worker wakes up Render on demand. Poster design, captions and publishing are all automated and controlled via Telegram.',
        detailES: 'Usa la API de TheMovieDB para obtener metadatos, posters y contenido. Genera videos cortos editados con Python y JavaScript, desplegados en Google Cloud Run y Render. Un worker de Cloudflare despierta a Render bajo demanda. El diseño de posters, subtítulos y publicación están automatizados y se controlan desde Telegram.',
        technologies: ['Python', 'JavaScript', 'TheMovieDB API', 'Google Cloud Run', 'TikTok Developer', 'Render', 'Cloudflare', 'Telegram Bot'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781455125/ZoomIt64_96uSbC2mGy_m8dvvr.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781455292/ZoomIt64_aXzR2eUUeR_kvbjz4.png',
        ],
        video: null,
        currentImageIndex: 0
      },
      {
        url: '#',
        title: 'Web Automation — Claude AI + AWS',
        descriptionEN: 'Intelligent web automation powered by Claude API, Python and AWS serverless services.',
        descriptionES: 'Automatización web inteligente impulsada por la API de Claude, Python y servicios serverless de AWS.',
        detailEN: 'A cloud-native automation system built with Python and the Claude (Anthropic) API. Runs on AWS Lambda and S3, handling intelligent web workflows triggered and controlled via Telegram. Designed for scalability with a fully serverless architecture.',
        detailES: 'Sistema de automatización nativo en la nube construido con Python y la API de Claude (Anthropic). Corre en AWS Lambda y S3, gestionando flujos web inteligentes disparados y controlados desde Telegram. Diseñado para escalar con arquitectura completamente serverless.',
        technologies: ['Python', 'Claude API', 'AWS Lambda', 'AWS S3', 'Supabase', 'Telegram Bot'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1756598576/msedge_kwSUBDRcn8_bvuxgq.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781455470/msedge_W2d6yYYSnW_bnma46.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781456749/ZoomIt64_APi0zfvmtt_bmornb.png',
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781456751/ZoomIt64_FENEFdNX9C_azsutc.png',
        ],
        video: null,
        currentImageIndex: 0
      },
      {
        url: '#',
        title: 'QA Automation — Cypress & Selenium',
        descriptionEN: 'End-to-end test automation framework integrated into CI/CD pipelines.',
        descriptionES: 'Framework de automatización de pruebas end-to-end integrado en pipelines CI/CD.',
        detailEN: 'Designed and maintained automated test suites using Cypress and Selenium, applying the Page Object Model pattern. Integrated into CI/CD pipelines for continuous quality assurance. Included API testing, regression and functional test coverage across multiple client environments.',
        detailES: 'Diseño y mantenimiento de suites de pruebas automatizadas con Cypress y Selenium, aplicando el patrón Page Object Model. Integradas en pipelines CI/CD para aseguramiento continuo de calidad. Incluyó pruebas de API, regresión y cobertura funcional en múltiples entornos de clientes.',
        technologies: ['Cypress', 'Selenium', 'JavaScript', 'CI/CD', 'Page Object Model'],
        images: [
          'https://res.cloudinary.com/dpj17zdr2/image/upload/v1781456922/qa_automation_pipeline_gw9vcl.png',
        ],
        video: null,
        currentImageIndex: 0
      },
    ])

    const projectPairs = computed(() => {
      const pairs = []
      for (let i = 0; i < projects.value.length; i += 2) {
        pairs.push(projects.value.slice(i, i + 2))
      }
      return pairs
    })

    const changeProjectImage = (projectIndex, imageIndex) => {
      if (projects.value[projectIndex]) {
        projects.value[projectIndex].currentImageIndex = imageIndex
      }
    }

    const openProject = (url) => {
      if (url && url !== '#') {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    }

    const handleImageError = (event) => {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDYwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMUEyMzM5Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTI1IiBmaWxsPSIjNjM3Mzg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+Cjwvc3ZnPg=='
    }

    return {
      lang,
      projects,
      projectPairs,
      expandedProjects,
      toggleExpand,
      changeProjectImage,
      openProject,
      handleImageError
    }
  }
}
</script>

<style src="./AppProjects.css"></style>