<template>
  <footer class="cosmic-footer">
    <div class="footer-links">
      <a href="/cookies">Cookies</a>
      <a href="/privacy">Políticas</a>
    </div>
    <p>© HowardMedina {{ currentYear }}</p>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = ref(new Date().getFullYear())
    return { currentYear }
  }
}
</script>

<style scoped>
@import './AppFooter.css';
</style>
