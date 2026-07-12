<script setup>
import { useLocale } from '@/composables/useLocale'
import PhotoFrame from '@/components/ui/PhotoFrame.vue'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()
</script>

<template>
  <SectionCard :with-leaves="false">
    <PhotoFrame
      :alt="t.photos.closing"
      tall
      src="public/images/d68899c5-87b4-45ff-affe-b00a4a355f32.JPG"
    />
  </SectionCard>
</template>
