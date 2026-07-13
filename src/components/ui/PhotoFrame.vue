<script setup>
import { computed } from 'vue'
import { resolvePublicAsset } from '@/utils/assets'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    required: true,
  },
  tall: {
    type: Boolean,
    default: false,
  },
  tone: {
    type: String,
    default: 'cream',
    validator: (value) => ['cream', 'sage'].includes(value),
  },
  zoom: {
    type: Number,
    default: 1.12,
  },
})

const resolvedSrc = computed(() => resolvePublicAsset(props.src))
</script>

<template>
  <div class="photo" :class="[`photo--${tone}`, { 'photo--tall': tall }]">
    <img
      v-if="resolvedSrc"
      :src="resolvedSrc"
      :alt="alt"
      loading="lazy"
      :style="{ transform: `translate(-50%, -50%) scale(${zoom})` }"
    />
  </div>
</template>

<style scoped>
.photo {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  font-size: 0;
}

.photo--cream {
  background: var(--color-cream);
}

.photo--sage {
  background: var(--color-sage);
}

.photo--tall {
  aspect-ratio: 4 / 5;
  max-height: min(75vh, 540px);
}

.photo img {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>
