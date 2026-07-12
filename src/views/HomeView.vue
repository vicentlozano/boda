<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import InvitationSection from '@/components/sections/InvitationSection.vue'
import DateCountdownSection from '@/components/sections/DateCountdownSection.vue'
import ClosingPhotoSection from '@/components/sections/ClosingPhotoSection.vue'
import PhotoGallerySection from '@/components/sections/PhotoGallerySection.vue'
import LocationsSection from '@/components/sections/LocationsSection.vue'
import ItinerarySection from '@/components/sections/ItinerarySection.vue'
import DressCodeSection from '@/components/sections/DressCodeSection.vue'
import GiftsSection from '@/components/sections/GiftsSection.vue'
import RsvpSection from '@/components/sections/RsvpSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>

<template>
  <main class="home">
    <HeroSection />
    <InvitationSection />
    <DateCountdownSection />
    <ClosingPhotoSection />
    <PhotoGallerySection />
    <LocationsSection />
    <ItinerarySection />
    <DressCodeSection />
    <GiftsSection />
    <RsvpSection />
    <FooterSection />
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding: 1.5rem 1rem 2.5rem;
}
</style>
