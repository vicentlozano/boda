<script setup>
import { useLocale } from '@/composables/useLocale'
import PhotoFrame from '@/components/ui/PhotoFrame.vue'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()
</script>

<template>
  <SectionCard variant="sage" class="hero">
    <div class="hero__text">
      <h1 class="hero__names">
        {{ t.couple.bride }}
        <span class="hero__ampersand">&</span>
        {{ t.couple.groom }}
      </h1>

      <blockquote class="hero__quote">
        <p>{{ t.quote.text }}</p>
        <cite>{{ t.quote.reference }}</cite>
      </blockquote>
    </div>

    <div class="hero__photo">
      <PhotoFrame
        :alt="t.photos.hero"
        tall
        tone="sage"
        :zoom="1.16"
        src="public/images/PHOTO-2026-07-12-21-02-59.jpg"
      />
    </div>
  </SectionCard>
</template>

<style scoped>
.hero :deep(.section-card__content) {
  padding-top: 3.25rem;
}

.hero__text {
  padding: 2.3rem  0.25rem;
}

.hero__names {
  text-align: center;
  font-family: var(--font-script);
  font-size: clamp(2.75rem, 11vw, 3.5rem);
  font-weight: 400;
  line-height: 1.15;
  color: var(--color-text);
}

.hero__ampersand {
  display: block;
  font-size: 0.8em;
  margin: 0.1em 0;
}

.hero__quote {
  margin-top: 1.25rem;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1rem;
  font-style: italic;
  line-height: 1.75;
  color: var(--color-text-muted);
}

.hero__quote cite {
  display: block;
  margin-top: 0.5rem;
  font-style: normal;
  font-size: 0.85rem;
}

.hero__photo {
  margin: 1.75rem -1.75rem -2.25rem;
}
</style>
