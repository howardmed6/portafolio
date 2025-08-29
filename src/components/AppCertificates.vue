<!-- components/AppCertificates.vue -->
<template>
  <section class="futuristic-certificates-section">
    <div class="futuristic-certificates-container">
      <h2 class="futuristic-section-title">Certificaciones y Logros</h2>

      <div class="futuristic-certificates-grid">
        <div
          v-for="(certificate, index) in certificates"
          :key="index"
          class="futuristic-certificate-item"
          :class="{ 'in-progress': certificate.inProgress }"
        >
          <div class="futuristic-certificate-icon">
            <span v-if="certificate.inProgress">🔄</span>
            <span v-else-if="certificate.type === 'degree'">🎓</span>
            <span v-else-if="certificate.type === 'course'">📜</span>
            <span v-else-if="certificate.type === 'experience'">💼</span>
            <span v-else>🏆</span>
          </div>

          <div class="futuristic-certificate-content">
            <h3 class="futuristic-certificate-title">{{ certificate.title }}</h3>
            <p class="futuristic-certificate-issuer">{{ certificate.issuer }}</p>
            <p class="futuristic-certificate-year">{{ certificate.year }}</p>

            <div v-if="certificate.skills" class="futuristic-certificate-skills">
              <span
                v-for="skill in certificate.skills"
                :key="skill"
                class="futuristic-skill-tag"
              >
                {{ skill }}
              </span>
            </div>

            <div v-if="certificate.inProgress" class="futuristic-progress-indicator">
              <div class="futuristic-progress-bar">
                <div
                  class="futuristic-progress-fill"
                  :style="{ width: certificate.progress + '%' }"
                ></div>
              </div>
              <span class="futuristic-progress-text">{{ certificate.progress }}% completado</span>
            </div>
          </div>

          <div class="futuristic-certificate-status">
            <span v-if="certificate.inProgress" class="futuristic-status-badge in-progress">
              En Progreso
            </span>
            <span v-else class="futuristic-status-badge completed">
              Completado
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppCertificates',
  setup() {
    const certificates = ref([
      {
        title: 'Tecnólogo en Análisis y Desarrollo de Software',
        issuer: 'SENA',
        year: '2024',
        type: 'degree',
        inProgress: false,
        skills: ['Java', 'Python', 'Base de Datos', 'Metodologías Ágiles']
      },
      {
        title: 'ONE Tech Foundation G8 - Back End',
        issuer: 'Alura/Oracle',
        year: '2025',
        type: 'course',
        inProgress: false,
        skills: ['Spring Boot', 'JPA', 'MySQL', 'API REST']
      },
      {
        title: 'Microsoft Azure DevOps',
        issuer: 'Experiencia práctica - SQDM',
        year: '2025',
        type: 'experience',
        inProgress: false,
        skills: ['Azure', 'DevOps', 'CI/CD', 'Testing']
      },
      {
        title: 'Google Data Analytics',
        issuer: 'Google',
        year: '2025',
        type: 'course',
        inProgress: true,
        progress: 65,
        skills: ['Python', 'R', 'SQL', 'Tableau']
      },
      {
        title: 'Ingeniería en Sistemas',
        issuer: 'UNAD',
        year: '2025',
        type: 'degree',
        inProgress: true,
        progress: 80,
        skills: ['Arquitectura Software', 'Redes', 'Seguridad', 'IA']
      }
    ])

    // Método para agregar certificaciones dinámicamente
    const addCertificate = (certificate) => {
      certificates.value.push(certificate)
    }

    return {
      certificates,
      addCertificate
    }
  }
}
</script>

<style src="./AppCertificates.css"></style>
