<script setup>
import { useLocale } from '@/composables/useLocale'
import { locales } from '@/i18n'

const { locale, t, setLocale } = useLocale()
</script>

<template>
  <nav class="lang-switch" :aria-label="t.language.switchLabel">
    <button
      v-for="item in locales"
      :key="item.code"
      type="button"
      class="lang-switch__btn"
      :class="{ 'lang-switch__btn--active': locale === item.code }"
      @click="setLocale(item.code)"
    >
      {{ item.label }}
    </button>
  </nav>
</template>

<style scoped>
.lang-switch {
  display: inline-flex;
  padding: 0.2rem;
  background: rgba(246, 243, 239, 0.95);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.lang-switch__btn {
  padding: 0.35rem 0.75rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.lang-switch__btn--active {
  background: var(--color-sage);
  color: var(--color-white);
}
</style>
