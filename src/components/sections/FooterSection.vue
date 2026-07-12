<script setup>
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'
</script>

<template>
  <SectionCard>
    <p class="footer__message">{{ wedding.footer.message }}</p>
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
