<script setup>
import { useLocale } from '@/composables/useLocale'
import PhotoFrame from '@/components/ui/PhotoFrame.vue'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()
</script>

<template>
  <SectionCard :with-leaves="false">
    <PhotoFrame :alt="t.photos.hero" tall src="public/images/PHOTO-2026-07-12-21-02-59.jpg" />

    <blockquote class="hero__quote">
      <p>{{ t.quote.text }}</p>
      <cite>{{ t.quote.reference }}</cite>
    </blockquote>

    <h1 class="hero__names">
      {{ t.couple.bride }}
      <span class="hero__ampersand">&</span>
      {{ t.couple.groom }}
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
