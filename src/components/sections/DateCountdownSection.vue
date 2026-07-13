<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()

const now = ref(Date.now())
let intervalId

const targetDate = new Date(wedding.date.iso)

const timeLeft = computed(() => {
  const diff = targetDate.getTime() - now.value
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  }
})

function pad(value) {
  return String(value).padStart(2, '0')
}

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <SectionCard variant="sage">
    <div class="date">
      <span class="date__month">{{ t.date.month }}</span>
      <span class="date__day-name">{{ t.date.dayName }}</span>
      <span class="date__day">{{ wedding.date.day }}</span>
      <span class="date__year">{{ wedding.date.year }}</span>
    </div>

    <div class="countdown">
      <p class="countdown__label">{{ t.countdown.label }}</p>

      <div v-if="timeLeft.expired" class="countdown__expired">{{ t.countdown.expired }}</div>

      <div v-else class="countdown__grid">
        <div class="countdown__unit">
          <span class="countdown__value">{{ pad(timeLeft.days) }}</span>
          <span class="countdown__name">{{ t.countdown.days }}</span>
        </div>
        <span class="countdown__sep">:</span>
        <div class="countdown__unit">
          <span class="countdown__value">{{ pad(timeLeft.hours) }}</span>
          <span class="countdown__name">{{ t.countdown.hours }}</span>
        </div>
        <span class="countdown__sep">:</span>
        <div class="countdown__unit">
          <span class="countdown__value">{{ pad(timeLeft.minutes) }}</span>
          <span class="countdown__name">{{ t.countdown.minutes }}</span>
        </div>
        <span class="countdown__sep">:</span>
        <div class="countdown__unit">
          <span class="countdown__value">{{ pad(timeLeft.seconds) }}</span>
          <span class="countdown__name">{{ t.countdown.seconds }}</span>
        </div>
      </div>
    </div>
  </SectionCard>
</template>

<style scoped>
.date {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  gap: 0.25rem 1rem;
  align-items: center;
  text-align: center;
  font-family: var(--font-serif);
}

.date__month {
  grid-column: 1 / -1;
  font-size: 0.9rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.date__day-name {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.date__day {
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--color-text);
}

.date__year {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
}

.countdown {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.countdown__label {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.countdown__grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.75rem;
}

.countdown__unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
}

.countdown__value {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1;
}

.countdown__name {
  margin-top: 0.25rem;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.countdown__sep {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--color-text-muted);
  padding-bottom: 1rem;
}

.countdown__expired {
  margin-top: 0.75rem;
  font-family: var(--font-script);
  font-size: 2rem;
  color: var(--color-text);
}
</style>
