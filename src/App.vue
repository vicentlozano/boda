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
.app__lang {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 0.75rem 1rem;
  background: transparent;
}
</style>
