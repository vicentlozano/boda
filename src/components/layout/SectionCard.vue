<script setup>
defineProps({
  variant: {
    type: String,
    default: 'cream',
    validator: (value) => ['cream', 'sage'].includes(value),
  },
  flush: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section
    class="section-card"
    :class="[`section-card--${variant}`, { 'section-card--flush': flush }]"
  >
    <div class="section-card__content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-card {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.section-card--cream {
  background: var(--color-cream);
  color: var(--color-text);
  --color-text: #3a3a3a;
  --color-text-muted: #666666;
  --color-border: #e4e0d8;
}

.section-card--sage {
  background: var(--color-sage);
  color: var(--color-white);
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.88);
  --color-border: rgba(255, 255, 255, 0.28);
}

.section-card__content {
  position: relative;
  z-index: 1;
  padding: 2.25rem 1.75rem;
}

.section-card--flush .section-card__content {
  padding: 0;
}
</style>
