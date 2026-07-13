<script setup>
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'
import LocationCard from '@/components/sections/LocationCard.vue'

const { t } = useLocale()

const locations = computed(() =>
  wedding.locations.map((location) => ({
    ...location,
    title: t.value.locations[location.id].title,
  })),
)
</script>

<template>
  <SectionCard variant="cream" floral-edges floral-position="top-left">
    <LocationCard
      v-for="location in locations"
      :key="location.id"
      :title="location.title"
      :venue="location.venue"
      :address="location.address"
      :maps-url="location.mapsUrl"
      :view-map-label="t.locations.viewMap"
    />
  </SectionCard>
</template>
