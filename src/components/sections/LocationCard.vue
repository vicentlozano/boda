<script setup>
import { MapPin } from '@lucide/vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mapsUrl: {
    type: String,
    required: true,
  },
  viewMapLabel: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="location">
    <div class="location__icon" aria-hidden="true">
      <MapPin :size="24" :stroke-width="1.75" />
    </div>

    <h3 class="location__title">{{ title }}</h3>
    <p class="location__venue">{{ venue }}</p>
    <p class="location__address">{{ address }}</p>

    <a class="location__link" :href="mapsUrl" target="_blank" rel="noopener noreferrer">
      {{ viewMapLabel }}
    </a>
  </article>
</template>

<style scoped>
.location {
  text-align: center;
  padding: 1.25rem 0;
}

.location + .location {
  border-top: 1px solid var(--color-border);
}

.location__icon {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  color: var(--color-sage-dark);
}

.location__title {
  font-family: var(--font-serif);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text);
}

.location__venue {
  margin-top: 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
}

.location__address {
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.location__link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  border: 1px solid var(--color-sage-dark);
  border-radius: 999px;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-sage-dark);
  transition: background 0.2s, color 0.2s;
}

.location__link:hover {
  background: var(--color-sage-dark);
  color: var(--color-white);
}
</style>
