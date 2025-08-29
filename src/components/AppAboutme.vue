<!-- components/AppSobreMi.vue -->
<template>
  <section class="futuristic-timeline-section">
    <div class="futuristic-timeline-container">
      <div class="futuristic-timeline-header">
        <h2 class="futuristic-section-title">Cronología Profesional</h2>
        <p class="futuristic-subtitle">Haz clic para expandir cada etapa</p>
      </div>
      <div class="futuristic-timeline" id="timeline">
        <div v-for="(item, index) in timelineData" :key="index" class="futuristic-timeline-item">
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
              <!-- Si es un array de textos, mostrar cada párrafo -->
              <template v-if="Array.isArray(item.text)">
                <p
                  v-for="(paragraph, pIndex) in item.text"
                  :key="pIndex"
                  class="futuristic-timeline-text"
                >
                  {{ paragraph }}
                </p>
              </template>
              <!-- Si es un string simple -->
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
import { ref, onMounted } from 'vue'

export default {
  name: 'AppAboutme',
  setup() {
    const collapsedItems = ref({})

    // Datos del timeline
    const timelineData = ref([
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
        year: "2015-2022",
        title: "Juventud",
        text: "Al cumplir 18 años, conseguí mi primer trabajo en Telecom, una pequeña empresa en Buenaventura. Allí me desempeñé como Desarrollador Web Full Stack en un puesto de tiempo completo, donde diseñaba y publicaba sitios web y blogs utilizando principalmente herramientas y servicios gratuitos, ofreciendo soluciones directas a los clientes. Durante esta etapa también desarrollé habilidades en hardware, realizando montaje, desmontaje y reparación de equipos computacionales para asegurar su óptimo funcionamiento. Esta experiencia me permitió potenciarme como profesional, integrando desarrollo web y manejo de sistemas de manera práctica y efectiva."
      },
      {
        year: "2022-Presente",
        title: "Vida Actual",
        text: [
          "Desde 2022 inicié mis estudios profesionales en Análisis y Desarrollo de Software en el SENA y simultáneamente inicié la Ingeniería en Sistemas en la UNAD, donde actualmente sigo cursando los últimos semestres. Durante esta etapa desarrollé profundamente las buenas prácticas de las TIC, comprendí el funcionamiento de los sistemas globales y las ideas de negocio, y consolidé mi formación en programación para el desarrollo de software. A finales de 2024 culminé mi tecnólogo en el SENA, especializándome en programación orientada a objetos y gestión de proyectos de software.",
          "En el primer semestre de 2025 trabajé en SQDM, Bogotá (remoto), como Tester QA, donde me involucré en entornos productivos de diferentes compañías. Utilicé Microsoft Azure y Microsoft DevOps como herramientas principales, manejando máquinas virtuales, pipelines y work items. También desarrollé automatizaciones de casos de prueba junto a equipos de QA, adaptándome a las necesidades específicas de cada cliente, especialmente en procesos de ETB.",
          "Paralelamente, desarrollé mi experiencia freelance durante los años 2023 y 2024, diseñando y desarrollando sitios web para clientes individuales, siempre pensando en los problemas de las personas en Colombia y Latinoamérica y sacando el máximo provecho de los servicios gratuitos disponibles.",
          "Durante este periodo también completé cursos relevantes, incluyendo ONE Tech Foundation G8 – Back End (Alura/Oracle, 2025) y actualmente avanzo en cursos de análisis de datos de Google, fortaleciendo mi capacidad para trabajar con información real y generar soluciones útiles. Además, mejoro mi nivel de inglés y sigo ampliando mis conocimientos en herramientas TIC y servicios gratuitos."
        ]
      }
    ])

    // Inicializar estados colapsados (primer elemento expandido, resto colapsado)
    const initializeCollapsedStates = () => {
      timelineData.value.forEach((item, index) => {
        collapsedItems.value[index] = index !== 0 // Primer elemento expandido
      })
    }

    const toggleDetails = (index) => {
      collapsedItems.value[index] = !collapsedItems.value[index]
    }

    onMounted(() => {
      initializeCollapsedStates()
    })

    return {
      timelineData,
      collapsedItems,
      toggleDetails
    }
  }
}
</script>

<style src="./AppAboutme.css"></style>
