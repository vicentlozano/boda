<script setup>
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'
import LocationCard from '@/components/sections/LocationCard.vue'
</script>

<template>
  <SectionCard>
    <LocationCard
      v-for="location in wedding.locations"
      :key="location.id"
      :title="location.title"
      :venue="location.venue"
      :address="location.address"
      :maps-url="location.mapsUrl"
    />
  </SectionCard>
</template>
