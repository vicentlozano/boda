<script setup>
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'
</script>

<template>
  <SectionCard>
    <h2 class="gifts__title">{{ wedding.gifts.title }}</h2>

    <div class="gifts__transfer">
      <h3 class="gifts__subtitle">{{ wedding.gifts.transferLabel }}</h3>
      <dl class="gifts__details">
        <div>
          <dt>Banco</dt>
          <dd>{{ wedding.gifts.bankName }}</dd>
        </div>
        <div>
          <dt>Titular</dt>
          <dd>{{ wedding.gifts.accountHolder }}</dd>
        </div>
        <div>
          <dt>Cuenta</dt>
          <dd>{{ wedding.gifts.accountNumber }}</dd>
        </div>
      </dl>
    </div>
  </SectionCard>
</template>

<style scoped>
.gifts__title {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.gifts__transfer {
  margin-top: 1.5rem;
  text-align: center;
}

.gifts__subtitle {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.gifts__qr {
  margin: 1.25rem auto 0;
  width: 140px;
  height: 140px;
}

.gifts__qr img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gifts__qr-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px dashed var(--color-border);
  border-radius: 8px;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--color-text-muted);
}

.gifts__details {
  margin-top: 1.25rem;
  display: grid;
  gap: 0.75rem;
  text-align: center;
}

.gifts__details dt {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.gifts__details dd {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 600;
}
</style>
