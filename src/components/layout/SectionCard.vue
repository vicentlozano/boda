<script setup>
import { computed } from 'vue'
import { resolvePublicAsset } from '@/utils/assets'

const props = defineProps({
  variant: {
    type: String,
    default: 'cream',
    validator: (value) => ['cream', 'sage'].includes(value),
  },
  flush: {
    type: Boolean,
    default: false,
  },
  floral: {
    type: Boolean,
    default: false,
  },
  floralEdges: {
    type: Boolean,
    default: false,
  },
  floralPosition: {
    type: String,
    default: 'center',
    validator: (value) =>
      ['center', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right'].includes(
        value,
      ),
  },
})

const floralPositions = {
  center: 'center center',
  'top-left': 'left top',
  'top-right': 'right top',
  'bottom-left': 'left bottom',
  'bottom-right': 'right bottom',
  left: 'left center',
  right: 'right center',
}

const floralMaskCenters = {
  center: '50% 50%',
  'top-left': '28% 22%',
  'top-right': '72% 22%',
  'bottom-left': '28% 78%',
  'bottom-right': '72% 78%',
  left: '22% 50%',
  right: '78% 50%',
}

const showFloralStyle = computed(() => props.floral || props.floralEdges)

const cardStyle = computed(() => {
  if (!showFloralStyle.value) return undefined

  return {
    '--floral-image': `url(${resolvePublicAsset('public/images/magnific__quita-el-textp__30618.png')})`,
    '--floral-position': floralPositions[props.floralPosition],
    '--floral-mask-center': floralMaskCenters[props.floralPosition],
  }
})
</script>

<template>
  <section
    class="section-card"
    :class="[
      `section-card--${variant}`,
      {
        'section-card--flush': flush,
        'section-card--floral': floral,
        'section-card--floral-edges': floralEdges,
      },
    ]"
    :style="cardStyle"
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
  background-color: var(--color-cream);
  color: var(--color-text);
  --color-text: #3a3a3a;
  --color-text-muted: #666666;
  --color-border: #e4e0d8;
}

.section-card--floral {
  background-image: var(--floral-image);
  background-size: cover;
  background-position: var(--floral-position);
  background-repeat: no-repeat;
}

.section-card--floral-edges::before {
  content: '';
  position: absolute;
  inset: -12px;
  background-image: var(--floral-image);
  background-size: 125% 125%;
  background-position: var(--floral-position);
  background-repeat: no-repeat;
  opacity: 0.9;
  mask-image: radial-gradient(
    ellipse 78% 74% at var(--floral-mask-center),
    transparent 62%,
    black 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 78% 74% at var(--floral-mask-center),
    transparent 62%,
    black 100%
  );
  z-index: 0;
  pointer-events: none;
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
