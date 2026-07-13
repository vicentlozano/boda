<script setup>
import { useLocale } from '@/composables/useLocale'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()
</script>

<template>
  <SectionCard variant="cream">
    <h2 class="dresscode__title">{{ t.dressCode.title }}</h2>

    <div class="dresscode__icons" aria-hidden="true">
      <span class="dresscode__icon">🤵</span>
      <span class="dresscode__icon dresscode__icon--female">👗</span>
    </div>

    <p class="dresscode__description">{{ t.dressCode.description }}</p>
  </SectionCard>
</template>

<style scoped>
.dresscode__title {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.dresscode__icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.dresscode__icon {
  font-size: 3rem;
}

.dresscode__icon--female {
  margin-top: 0.25rem;
}

.dresscode__description {
  margin-top: 1.25rem;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
