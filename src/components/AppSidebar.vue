<template>
  <aside :class="['cosmic-sidebar', { active: isActive }]">
    <nav>
      <ul>
        <li v-for="social in socials" :key="social.name">
          <a :href="social.url" class="social-icon" :title="social.name" target="_blank">
            <img :src="social.icon" :alt="social.name">
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppSidebar',
  setup() {
    const isActive = ref(false)

    const socials = [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/howardmed7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: '../icons/linkedin.png' },
      { name: 'Facebook', url: 'https://www.facebook.com/howard.medina.98837', icon: '/icons/facebook.png' },
      { name: 'Github', url: 'https://github.com/howardmed6', icon: '/icons/github.png' },
      { name: 'X', url: 'https://x.com/howiekun1', icon: '/icons/x.png' },
      { name: 'Instagram', url: 'https://www.instagram.com/howiekun/', icon: '/icons/instagram.png' },
      { name: 'Telegram', url: 'https://t.me/howardmed', icon: '../icons/telegram.png' },
      { name: 'Quora', url: 'https://es.quora.com/profile/Howard-Medina', icon: '/icons/quora.png' },
      { name: 'Pinterest', url: 'https://co.pinterest.com/howardmed/', icon: '/icons/pinterest.png' },
      { name: 'YouTube', url: 'https://www.youtube.com/@doomframe1', icon: '/icons/youtube.png' },
      { name: 'Correo', url: 'mailto:howardmed7@gmail.com', icon: '/icons/correo.png' }
    ]

    const toggleSidebar = () => {
      isActive.value = !isActive.value
    }

    return { isActive, socials, toggleSidebar }
  }
}
</script>

<style scoped>
@import './AppSidebar.css';
</style>
