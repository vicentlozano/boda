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
})

const resolvedSrc = computed(() => resolvePublicAsset(props.src))
</script>

<template>
  <div class="photo" :class="{ 'photo--tall': tall }">
    <img v-if="resolvedSrc" :src="resolvedSrc" :alt="alt" />
    <div v-else class="photo__placeholder">
      <span>{{ alt }}</span>
    </div>
  </div>
</template>

<style scoped>
.photo {
  width: 100%;
  overflow: hidden;
}

.photo--tall {
  min-height: 320px;
}

.photo img,
.photo__placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  background: linear-gradient(160deg, #d4cfc4 0%, #b8b0a0 100%);
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-serif);
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.photo--tall .photo__placeholder {
  min-height: 320px;
}
</style>
