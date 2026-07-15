<script setup>
import {
  Cake,
  Camera,
  Church,
  HandHeart,
  Home,
  Landmark,
  Music2,
  UtensilsCrossed,
  Wine,
} from '@lucide/vue'
import { useLocale } from '@/composables/useLocale'
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()

const icons = {
  departure: Home,
  civil: Landmark,
  cocktail: Wine,
  dance: Music2,
  church: Church,
  camera: Camera,
  cake: Cake,
  dinner: UtensilsCrossed,
  toast: Wine,
  farewell: HandHeart,
}
</script>

<template>
  <SectionCard variant="sage">
    <h2 class="itinerary__title">{{ t.itinerary.title }}</h2>

    <ol class="itinerary__list">
      <li v-for="(item, index) in wedding.itinerary" :key="item.key" class="itinerary__item">
        <div class="itinerary__marker">
          <span class="itinerary__icon">
            <component
              :is="icons[item.icon]"
              :size="16"
              :stroke-width="1.75"
              aria-hidden="true"
            />
          </span>
          <span v-if="index < wedding.itinerary.length - 1" class="itinerary__line" />
        </div>

        <div class="itinerary__content">
          <time class="itinerary__time">{{ item.time }}</time>
          <p class="itinerary__label">{{ t.itinerary.items[item.key] }}</p>
        </div>
      </li>
    </ol>
  </SectionCard>
</template>

<style scoped>
.itinerary__title {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text);
}

.itinerary__list {
  list-style: none;
  margin-top: 1.5rem;
}

.itinerary__item {
  display: flex;
  gap: 1rem;
}

.itinerary__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32px;
  flex-shrink: 0;
}

.itinerary__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  color: var(--color-sage-dark);
}

.itinerary__line {
  flex: 1;
  width: 1px;
  min-height: 24px;
  margin: 4px 0;
  background: var(--color-border);
}

.itinerary__content {
  padding-bottom: 1.25rem;
}

.itinerary__time {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.itinerary__label {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
}
</style>
