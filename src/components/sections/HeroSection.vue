<script setup>
import { wedding } from '@/config/wedding'
import PhotoFrame from '@/components/ui/PhotoFrame.vue'
import SectionCard from '@/components/layout/SectionCard.vue'
</script>

<template>
  <SectionCard :with-leaves="false">
    <PhotoFrame alt="Foto de la pareja" tall />

    <blockquote class="hero__quote">
      <p>{{ wedding.quote.text }}</p>
      <cite>{{ wedding.quote.reference }}</cite>
    </blockquote>

    <h1 class="hero__names">
      {{ wedding.couple.bride }}
      <span class="hero__ampersand">&</span>
      {{ wedding.couple.groom }}
    </h1>
  </SectionCard>
</template>

<style scoped>
.hero__quote {
  margin-top: 1.75rem;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.hero__quote cite {
  display: block;
  margin-top: 0.5rem;
  font-style: normal;
  font-size: 0.85rem;
}

.hero__names {
  margin-top: 1.5rem;
  text-align: center;
  font-family: var(--font-script);
  font-size: clamp(2.5rem, 10vw, 3.25rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text);
}

.hero__ampersand {
  display: block;
  font-size: 0.85em;
}
</style>
