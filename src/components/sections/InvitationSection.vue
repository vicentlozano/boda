<script setup>
import { ref, computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { wedding } from '@/config/wedding'
import { resolvePublicAsset } from '@/utils/assets'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()
const audioSrc = computed(() => resolvePublicAsset(wedding.music.src))

const audioRef = ref(null)
const isPlaying = ref(false)

function togglePlay() {
  const audio = audioRef.value
  if (!audio) return

  if (isPlaying.value) {
    audio.pause()
  } else {
    audio.play().catch(() => {})
  }
  isPlaying.value = !isPlaying.value
}
</script>

<template>
  <SectionCard>
    <p class="music__intro">{{ t.invitation }}</p>

    <div class="music__player">
      <p class="music__title">{{ t.music.title }}</p>

      <audio ref="audioRef" :src="audioSrc" preload="none" @ended="isPlaying = false" />

      <div class="music__controls">
        <button type="button" class="music__btn" aria-label="Anterior" disabled>⏮</button>
        <button type="button" class="music__btn music__btn--play" aria-label="Reproducir" @click="togglePlay">
          {{ isPlaying ? '⏸' : '▶' }}
        </button>
        <button type="button" class="music__btn" aria-label="Siguiente" disabled>⏭</button>
      </div>
    </div>
  </SectionCard>
</template>

<style scoped>
.music__intro {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
}

.music__player {
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.music__title {
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.music__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.music__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-white);
  color: var(--color-text);
  font-size: 0.9rem;
}

.music__btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.music__btn--play {
  width: 48px;
  height: 48px;
  background: var(--color-sage-dark);
  border-color: var(--color-sage-dark);
  color: var(--color-white);
}
</style>
