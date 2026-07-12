<script setup>
import { useLocale } from '@/composables/useLocale'
import PhotoFrame from '@/components/ui/PhotoFrame.vue'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()

const photos = [
  { src: 'public/images/PHOTO-2026-07-12-21-13-15.jpg' },
  { src: '' },
  { src: '' },
]
</script>

<template>
  <SectionCard :with-leaves="false">
    <PhotoFrame :alt="`${t.photos.gallery} 1`" :src="photos[0].src" tall />

    <div class="gallery__row">
      <PhotoFrame :alt="`${t.photos.gallery} 2`" :src="photos[1].src" />
      <PhotoFrame :alt="`${t.photos.gallery} 3`" :src="photos[2].src" />
    </div>
  </SectionCard>
</template>

<style scoped>
.gallery__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
</style>
