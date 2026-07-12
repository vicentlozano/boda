<script setup>
import PhotoFrame from '@/components/ui/PhotoFrame.vue'
import SectionCard from '@/components/layout/SectionCard.vue'
</script>

<template>
  <SectionCard :with-leaves="false">
    <PhotoFrame alt="Foto de despedida" tall />
  </SectionCard>
</template>
