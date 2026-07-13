<script setup>
import HomeView from '@/views/HomeView.vue'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher.vue'
</script>

<template>
  <div class="app">
    <header class="app__lang">
      <LanguageSwitcher />
    </header>
    <HomeView />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background-color: var(--color-cream);
}

.app__lang {
  position: fixed;
  top: 0.85rem;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
  pointer-events: none;
}

.app__lang :deep(.lang-switch) {
  pointer-events: auto;
}
</style>
