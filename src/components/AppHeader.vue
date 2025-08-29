<template>
  <header :class="['cosmic-header', { scrolled: isScrolled }]">
    <div class="logo">Howard Medina Pineda</div>
    <nav>
      <button @click="toggleMenu" class="hamburger">☰</button>
      <ul :class="{ show: menuOpen }">
        <li><a @click="closeMenu" href="/">Inicio</a></li>
        <li><a @click="closeMenu" href="/about-me">Sobre mí</a></li>
        <li><a @click="closeMenu" href="/contact">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const menuOpen = ref(false)
    const isScrolled = ref(false)

    const toggleMenu = () => menuOpen.value = !menuOpen.value
    const closeMenu = () => {
      if (window.innerWidth <= 768) menuOpen.value = false
    }

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const handleResize = () => {
      if (window.innerWidth > 768) menuOpen.value = false
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    })

    return { menuOpen, isScrolled, toggleMenu, closeMenu }
  }
}
</script>

<style scoped>
@import './AppHeader.css';
</style>
