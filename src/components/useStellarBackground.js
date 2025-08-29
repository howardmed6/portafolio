// composables/useStellarBackground.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useStellarBackground() {
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
