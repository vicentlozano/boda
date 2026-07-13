<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import InvitationSection from '@/components/sections/InvitationSection.vue'
import DateCountdownSection from '@/components/sections/DateCountdownSection.vue'
import PhotoFadeSection from '@/components/sections/PhotoFadeSection.vue'
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
    <PhotoFadeSection />
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
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 auto;
}
</style>
