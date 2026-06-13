<!-- components/AppAboutme.vue -->
<template>
  <section class="futuristic-timeline-section">
    <div class="futuristic-timeline-container">
      <div class="futuristic-timeline-header">
        <h2 class="futuristic-section-title">Cronología Profesional</h2>
        <p class="futuristic-subtitle">Haz clic para expandir cada etapa</p>

        <!-- Toggle de idioma -->
        <div class="lang-toggle">
          <button
            :class="['lang-btn', { active: lang === 'es' }]"
            @click="lang = 'es'"
          >ES</button>
          <span class="lang-divider">|</span>
          <button
            :class="['lang-btn', { active: lang === 'en' }]"
            @click="lang = 'en'"
          >EN</button>
        </div>
      </div>

      <div class="futuristic-timeline" id="timeline">
        <div v-for="(item, index) in currentTimeline" :key="index" class="futuristic-timeline-item">
          <div class="futuristic-timeline-content">
            <div class="futuristic-timeline-year">{{ item.year }}</div>
            <h3
              class="futuristic-timeline-title"
              :class="{ 'collapsed': collapsedItems[index] }"
              @click="toggleDetails(index)"
            >
              {{ item.title }}
            </h3>
            <div
              class="futuristic-timeline-details"
              :class="{ 'expanded': !collapsedItems[index] }"
            >
              <template v-if="Array.isArray(item.text)">
                <p
                  v-for="(paragraph, pIndex) in item.text"
                  :key="pIndex"
                  class="futuristic-timeline-text"
                >
                  {{ paragraph }}
                </p>
              </template>
              <template v-else>
                <p class="futuristic-timeline-text">{{ item.text }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'AppAboutme',
  setup() {
    const lang = ref('es')
    const collapsedItems = ref({})

    const timelineES = ref([
      {
        year: "2003-2017",
        title: "Infancia",
        text: "Yo nací en un pueblo del pacífico de Colombia, lugar donde actualmente vivo. Desde Buenaventura, Colombia, siempre tuve curiosidad por cómo funcionan las cosas a mi alrededor. Esa curiosidad me llevó a interesarme en la tecnología y, poco a poco, a descubrir mi pasión por el desarrollo de software."
      },
      {
        year: "2008-2015",
        title: "Adolescencia",
        text: "Durante mi adolescencia comencé a involucrarme en el mundo de la tecnología. Fue en esa etapa cuando desarrollé mis primeras páginas web y mi primera aplicación móvil. Desde entonces nació en mí una gran curiosidad por comprender los servicios gratuitos y todo su potencial, lo que me motivó a explorar, aprender y experimentar constantemente en el ámbito digital."
      },
      {
        year: "2015-2024",
        title: "Juventud",
        text: "Al cumplir 18 años, en plena pandemia en diciembre de 2021, conseguí mi primer trabajo en Telecom como Full Stack Developer a jornada parcial, diseñando y publicando sitios web y blogs con herramientas gratuitas, además de brindar soporte técnico y mantenimiento de equipos. En abril de 2022 pasé a jornada completa como QA Automation Associate, donde evolucioné del desarrollo web hacia la automatización, trabajando con Selenium y Playwright en entornos SAP. En enero de 2023 entré en un período sabático de cinco meses trabajando de forma autónoma, desarrollando sitios web personalizados para clientes a través de plataformas digitales. En mayo de 2023 regresé a Telecom como QA Automation Associate, liderando la implementación estratégica de soluciones de automatización con Playwright, Selenium y Ranorex, integrando suites de pruebas en pipelines CI/CD y trabajando con JavaScript y MongoDB."
      },
      {
        year: "2022-Presente",
        title: "Vida Actual",
        text: [
          "Desde 2022 inicié mis estudios profesionales en Análisis y Desarrollo de Software en el SENA y simultáneamente la Ingeniería en Sistemas en la UNAD, donde actualmente curso los últimos semestres, todo esto mientras seguía trabajando en Telecom como QA Automation Associate, lo que me permitió aplicar en tiempo real los conocimientos adquiridos. A finales de 2024 Telecom cerró sus puertas, lo que marcó el fin de mi etapa allí. Ese mismo año culminé mi tecnólogo en el SENA, especializándome en programación orientada a objetos y gestión de proyectos de software.",
          "En enero de 2025 comencé en SQDM, Bogotá (remoto), como QA Automation Associate, participando en entornos productivos de diferentes empresas, utilizando Microsoft Azure y DevOps para manejo de máquinas virtuales, pipelines y work items. Ocasionalmente colaboré en pruebas manuales y en la creación de Historias de Usuario y casos de prueba, adaptando las soluciones a las necesidades específicas de cada cliente. En agosto de 2025 fui promovido a QA Automation Engineer, rol que desempeño actualmente, donde diseño, desarrollo y mantengo suites de pruebas end-to-end, funcionales y de regresión con Selenium, Cypress y Playwright. Aplico patrones como Page Object Model, realizo pruebas de API, pruebas de rendimiento con JMeter e integro automatizaciones en pipelines CI/CD dentro de equipos ágiles.",
          "Paralelamente completé el curso ONE Tech Foundation G8 – Back End (Alura/Oracle, 2025), avanzo en cursos de análisis de datos de Google, mejoro mi nivel de inglés y sigo ampliando mis conocimientos en herramientas TIC."
        ]
      }
    ])

    const timelineEN = ref([
      {
        year: "2003-2017",
        title: "Childhood",
        text: "I was born in a town on the Pacific coast of Colombia, where I currently live. From Buenaventura, Colombia, I always had curiosity about how things around me worked. That curiosity led me to develop an interest in technology and, little by little, to discover my passion for software development."
      },
      {
        year: "2008-2015",
        title: "Teenage Years",
        text: "During my teenage years I started getting involved in the world of technology. It was during that stage that I developed my first web pages and my first mobile application. From then on, a great curiosity grew in me to understand free services and all their potential, which motivated me to constantly explore, learn and experiment in the digital space."
      },
      {
        year: "2015-2024",
        title: "Youth",
        text: "At 18, during the pandemic in December 2021, I landed my first job at Telecom as a part-time Full Stack Developer, designing and publishing websites and blogs using free tools, while also providing technical support and equipment maintenance. In April 2022 I moved to a full-time position as QA Automation Associate, where I evolved from web development into automation, working with Selenium and Playwright in SAP environments. In January 2023 I entered a five-month sabbatical period working independently, developing custom websites for clients through digital platforms. In May 2023 I returned to Telecom as QA Automation Associate, leading the strategic implementation of automation solutions using Playwright, Selenium and Ranorex, integrating test suites into CI/CD pipelines and working with JavaScript and MongoDB."
      },
      {
        year: "2022-Present",
        title: "Present",
        text: [
          "Since 2022 I began my professional studies in Software Analysis and Development at SENA and simultaneously Systems Engineering at UNAD, where I am currently completing my final semesters, all while continuing to work at Telecom as a QA Automation Associate, which allowed me to apply my knowledge in real time. At the end of 2024 Telecom closed its doors, marking the end of that chapter. That same year I completed my technologist degree at SENA, specializing in object-oriented programming and software project management.",
          "In January 2025 I joined SQDM, Bogotá (remote), as a QA Automation Associate, participating in productive environments across different companies, using Microsoft Azure and DevOps for virtual machine management, pipelines and work items. I occasionally collaborated on manual testing and the creation of User Stories and test cases, adapting solutions to each client's specific needs. In August 2025 I was promoted to QA Automation Engineer, my current role, where I design, develop and maintain end-to-end, functional and regression test suites using Selenium, Cypress and Playwright. I apply patterns such as Page Object Model, perform API testing, load and stress testing with JMeter and integrate automations into CI/CD pipelines within agile teams.",
          "In parallel I completed the ONE Tech Foundation G8 – Back End course (Alura/Oracle, 2025), I am advancing in Google data analytics courses, improving my English level and continuously expanding my knowledge in ICT tools."
        ]
      }
    ])

    const currentTimeline = computed(() => {
      return lang.value === 'es' ? timelineES.value : timelineEN.value
    })

    const initializeCollapsedStates = () => {
      currentTimeline.value.forEach((item, index) => {
        collapsedItems.value[index] = index !== 0
      })
    }

    const toggleDetails = (index) => {
      collapsedItems.value[index] = !collapsedItems.value[index]
    }

    onMounted(() => {
      initializeCollapsedStates()
    })

    return {
      lang,
      currentTimeline,
      collapsedItems,
      toggleDetails
    }
  }
}
</script>

<style src="./AppAboutme.css"></style>