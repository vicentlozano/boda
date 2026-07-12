<script setup>
defineProps({
  flip: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <svg
    class="leaf"
    :class="{ 'leaf--flip': flip }"
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M40 5C25 25 10 55 15 85C18 100 30 110 40 115C50 110 62 100 65 85C70 55 55 25 40 5Z"
      fill="currentColor"
      opacity="0.35"
    />
    <path
      d="M40 20V100M40 35C30 45 22 60 25 75M40 50C50 58 58 70 55 82"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity="0.5"
    />
  </svg>
</template>

<style scoped>
.leaf {
  width: 64px;
  height: auto;
  color: var(--color-sage-dark);
  pointer-events: none;
}

.leaf--flip {
  transform: scaleX(-1);
}
</style>
