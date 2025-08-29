<template>
  <section class="futuristic-contact-section">
    <div class="futuristic-contact-form">
      <h2 class="futuristic-section-title">Envíame un mensaje</h2>
      <form @submit.prevent="submitForm">
        <div class="futuristic-form-group">
          <label for="futuristicNombre" class="futuristic-label">Nombre *</label>
          <input
            type="text"
            id="futuristicNombre"
            v-model="formData.nombre"
            class="futuristic-input"
            placeholder="Tu nombre completo"
            required
          />
        </div>
        <div class="futuristic-form-group">
          <label for="futuristicCorreo" class="futuristic-label">Correo electrónico *</label>
          <input
            type="email"
            id="futuristicCorreo"
            v-model="formData.correo"
            class="futuristic-input"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div class="futuristic-form-group">
          <label for="futuristicNumero" class="futuristic-label">Número de teléfono (opcional)</label>
          <input
            type="tel"
            id="futuristicNumero"
            v-model="formData.numero"
            class="futuristic-input"
            placeholder="+57 123 456 7890"
          />
        </div>
        <div class="futuristic-form-group">
          <label for="futuristicMensaje" class="futuristic-label">Mensaje (opcional)</label>
          <textarea
            id="futuristicMensaje"
            v-model="formData.mensaje"
            class="futuristic-textarea"
            placeholder="Cuéntame sobre tu proyecto..."
          ></textarea>
        </div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="futuristic-submit-btn"
        >
          {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
        </button>
      </form>
      <div
        v-if="statusMessage.message"
        :class="['futuristic-status-message', `futuristic-${statusMessage.type}`]"
      >
        {{ statusMessage.message }}
      </div>
    </div>

    <div class="futuristic-contact-info">
      <h2 class="futuristic-section-title">Mis datos de contacto</h2>

      <div class="futuristic-info-item">
        <div class="futuristic-info-icon">📞</div>
        <div class="futuristic-info-content">
          <h3 class="futuristic-info-title">Teléfono</h3>
          <p class="futuristic-info-text">+57 3126303088</p>
        </div>
      </div>

      <div class="futuristic-info-item">
        <div class="futuristic-info-icon">💼</div>
        <div class="futuristic-info-content">
          <h3 class="futuristic-info-title">LinkedIn</h3>
          <p class="futuristic-info-text">
            <a href="https://www.linkedin.com/in/howardmedina" target="_blank">linkedin.com/in/howardmedina</a>
          </p>
        </div>
      </div>

      <div class="futuristic-info-item">
        <div class="futuristic-info-icon">💬</div>
        <div class="futuristic-info-content">
          <h3 class="futuristic-info-title">WhatsApp</h3>
          <p class="futuristic-info-text">
            <a href="https://wa.me/573126303088" target="_blank">Enviar mensaje</a>
          </p>
        </div>
      </div>

      <div class="futuristic-info-item">
        <div class="futuristic-info-icon">🐙</div>
        <div class="futuristic-info-content">
          <h3 class="futuristic-info-title">GitHub</h3>
          <p class="futuristic-info-text">
            <a href="https://github.com/howardmed7" target="_blank">github.com/howardmed7</a>
          </p>
        </div>
      </div>

      <div class="futuristic-info-item">
        <div class="futuristic-info-icon">📧</div>
        <div class="futuristic-info-content">
          <h3 class="futuristic-info-title">Email</h3>
          <p class="futuristic-info-text">
            <a href="mailto:howard@ejemplo.com">howard@ejemplo.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppContact',
  data() {
    return {
      formData: {
        nombre: '',
        correo: '',
        numero: '',
        mensaje: ''
      },
      isSubmitting: false,
      statusMessage: {
        message: '',
        type: ''
      },
      // Configuración de Supabase
      SUPABASE_URL: 'https://rmyfeoitroxfxibjatqf.supabase.co',
      SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteWZlb2l0cm94ZnhpYmphdHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NDY4NDAsImV4cCI6MjA2MjEyMjg0MH0.9pfMH4X6fFv-haqv42oqIhTZUB-eUzfc5oz4O5dUCvU',
      // Validadores
      validators: {
        nombre: (value) => {
          const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
          return regex.test(value) || 'El nombre solo debe contener letras';
        },
        correo: (value) => {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regex.test(value) || 'Correo electrónico inválido';
        },
        numero: (value) => {
          if (!value) return true;
          const regex = /^[0-9+\s-]+$/;
          return regex.test(value) || 'Formato de teléfono inválido';
        }
      }
    }
  },
  methods: {
    async enviarContacto(datos) {
      try {
        const response = await fetch(`${this.SUPABASE_URL}/rest/v1/contactos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': this.SUPABASE_KEY,
            'Authorization': `Bearer ${this.SUPABASE_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(datos)
        });

        if (!response.ok) throw new Error('Error al enviar datos');
        return { success: true };
      } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
      }
    },

    showMessage(message, type) {
      this.statusMessage = { message, type };
    },

    resetForm() {
      this.formData = {
        nombre: '',
        correo: '',
        numero: '',
        mensaje: ''
      };
    },

    async submitForm() {
      // Validar campos obligatorios
      if (!this.formData.nombre.trim() || !this.formData.correo.trim()) {
        this.showMessage('Por favor completa los campos obligatorios.', 'error');
        return;
      }

      // Validar cada campo
      for (const [field, value] of Object.entries(this.formData)) {
        if (field === 'mensaje') continue;

        const validation = this.validators[field]?.(value.trim());
        if (validation !== true) {
          this.showMessage(validation, 'error');
          return;
        }
      }

      // Enviar datos
      this.isSubmitting = true;

      const result = await this.enviarContacto(this.formData);

      if (result.success) {
        this.showMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.', 'success');
        this.resetForm();
      } else {
        this.showMessage('Error al enviar. Intenta nuevamente.', 'error');
      }

      this.isSubmitting = false;
    }
  }
}
</script>

<style src="./AppContact.css"></style>
