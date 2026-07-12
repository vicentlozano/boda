<script setup>
import LeafDecoration from '@/components/ui/LeafDecoration.vue'

defineProps({
  withLeaves: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <section class="section-card">
    <LeafDecoration v-if="withLeaves" class="section-card__leaf section-card__leaf--tl" />
    <LeafDecoration v-if="withLeaves" class="section-card__leaf section-card__leaf--br" flip />

    <div class="section-card__content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-card {
  position: relative;
  background: var(--color-cream);
  border-radius: var(--card-radius);
  overflow: hidden;
}

.section-card__content {
  position: relative;
  z-index: 1;
  padding: 2rem 1.5rem;
}

.section-card__leaf {
  position: absolute;
  z-index: 0;
}

.section-card__leaf--tl {
  top: -8px;
  left: -8px;
}

.section-card__leaf--br {
  bottom: -8px;
  right: -8px;
}
</style>
