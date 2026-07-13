<script setup>
import { useLocale } from '@/composables/useLocale'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()
</script>

<template>
  <SectionCard variant="sage">
    <p class="footer__message">{{ t.footer.message }}</p>
  </SectionCard>
</template>

<style scoped>
.footer__message {
  text-align: center;
  font-family: var(--font-script);
  font-size: clamp(2rem, 8vw, 2.75rem);
  color: var(--color-text);
}
</style>
