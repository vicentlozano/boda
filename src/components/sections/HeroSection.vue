<script setup>
import { useLocale } from '@/composables/useLocale'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()
</script>

<template>
  <SectionCard variant="cream" floral class="hero">
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
  </SectionCard>
</template>

<style scoped>
.hero :deep(.section-card__content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: min(115vw, 680px);
  padding-top: 3.25rem;
  padding-bottom: 3.5rem;
}

.hero__text {
  max-width: 88%;
  margin: 0 auto;
  padding: 0 0.25rem;
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
</style>
