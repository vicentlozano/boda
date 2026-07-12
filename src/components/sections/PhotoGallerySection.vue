<script setup>
import PhotoFrame from '@/components/ui/PhotoFrame.vue'
import SectionCard from '@/components/layout/SectionCard.vue'

const photos = [
  { alt: 'Foto 1', src: 'public/images/PHOTO-2026-07-12-21-13-15.jpg' },
  { alt: 'Foto 2', src: '' },
  { alt: 'Foto 3', src: '' },
]
</script>

<template>
  <SectionCard :with-leaves="false">
    <PhotoFrame :alt="photos[0].alt" :src="photos[0].src" tall />

    <div class="gallery__row">
      <PhotoFrame :alt="photos[1].alt" :src="photos[1].src" />
      <PhotoFrame :alt="photos[2].alt" :src="photos[2].src" />
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
