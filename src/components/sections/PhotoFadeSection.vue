<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { resolvePublicAsset } from '@/utils/assets'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()

const photos = computed(() => [
  {
    src: resolvePublicAsset('public/images/d68899c5-87b4-45ff-affe-b00a4a355f32.JPG'),
    alt: t.value.photos.closing,
  },
  {
    src: resolvePublicAsset('public/images/PHOTO-2026-07-12-21-13-15.jpg'),
    alt: t.value.photos.gallery,
  },
])

const activeIndex = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % photos.value.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <SectionCard variant="cream" flush>
    <div class="photo-fade" aria-live="polite">
      <img
        v-for="(photo, index) in photos"
        :key="photo.src"
        :src="photo.src"
        :alt="photo.alt"
        class="photo-fade__img"
        :class="{ 'photo-fade__img--active': index === activeIndex }"
        loading="lazy"
      />
    </div>
  </SectionCard>
</template>

<style scoped>
.photo-fade {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  max-height: min(75vh, 540px);
  background: var(--color-cream);
  line-height: 0;
}

.photo-fade__img {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%) scale(1.1);
  object-fit: cover;
  opacity: 0;
  transition: opacity 1.4s ease-in-out;
}

.photo-fade__img--active {
  opacity: 1;
  z-index: 1;
}
</style>
