<script setup>
import { ref } from 'vue'
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'

const showForm = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

const form = ref({
  name: '',
  email: '',
  attending: 'yes',
  guests: 1,
  message: '',
})

function buildPayload() {
  const attending = form.value.attending === 'yes' ? 'Sí, asistiré' : 'No podré asistir'

  return {
    name: form.value.name,
    email: form.value.email,
    _replyto: form.value.email,
    _subject: `RSVP boda Teresa & Vicent: ${form.value.name}`,
    attending,
    guests: form.value.attending === 'yes' ? form.value.guests : 0,
    message: form.value.message || '(sin mensaje)',
  }
}

async function handleSubmit() {
  if (!wedding.rsvp.formspreeId) return

  submitting.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(`https://formspree.io/f/${wedding.rsvp.formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(buildPayload()),
    })

    if (response.ok) {
      submitted.value = true
      showForm.value = false
      return
    }

    const data = await response.json().catch(() => ({}))
    errorMessage.value =
      data.error || 'No se pudo enviar la confirmación. Inténtalo de nuevo en unos minutos.'
  } catch {
    errorMessage.value = 'Error de conexión. Comprueba tu internet e inténtalo de nuevo.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <SectionCard>
    <h2 class="rsvp__title">{{ wedding.rsvp.title }}</h2>

    <template v-if="submitted">
      <p class="rsvp__success">¡Gracias por confirmar! Nos vemos pronto.</p>
    </template>

    <template v-else-if="!showForm">
      <button type="button" class="rsvp__button" @click="showForm = true">
        {{ wedding.rsvp.buttonLabel }}
      </button>
    </template>

    <form v-else class="rsvp__form" @submit.prevent="handleSubmit">
      <label>
        Nombre completo
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        Email
        <input v-model="form.email" type="email" required />
      </label>

      <fieldset>
        <legend>¿Asistirás?</legend>
        <label class="rsvp__radio">
          <input v-model="form.attending" type="radio" value="yes" />
          Sí, ahí estaré
        </label>
        <label class="rsvp__radio">
          <input v-model="form.attending" type="radio" value="no" />
          No podré asistir
        </label>
      </fieldset>
      <fieldset>
        <legend>Plato principal</legend>
        <label class="rsvp__radio">
          <input v-model="form.mainCourse" type="radio" value="fish" />
          Pescado (Rodaballo)
        </label>
        <label class="rsvp__radio">
          <input v-model="form.mainCourse" type="radio" value="meat" />
          Carne (Entrecot)
        </label>
        <label class="rsvp__radio">
          <input v-model="form.mainCourse" type="radio" value="vegetarian" />
          Vegetariano
        </label>
      </fieldset>

      <label v-if="form.attending === 'yes'">
        Número de acompañantes (incluyéndote)
        <input v-model.number="form.guests" type="number" min="1" max="10" />
      </label>

      <label>
        Mensaje (alergias, comentarios…)
        <textarea v-model="form.message" rows="3" />
      </label>

      <button type="submit" class="rsvp__button" :disabled="submitting">
        {{ submitting ? 'Enviando…' : 'Enviar confirmación' }}
      </button>

      <p v-if="errorMessage" class="rsvp__error" role="alert">{{ errorMessage }}</p>

      <p v-if="!wedding.rsvp.formspreeId" class="rsvp__config-hint">
        Configura <code>rsvp.formspreeId</code> en <code>src/config/wedding.js</code>
      </p>
    </form>

    <p class="rsvp__note">{{ wedding.rsvp.note }}</p>
  </SectionCard>
</template>

<style scoped>
.rsvp__title {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.rsvp__button {
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 999px;
  background: var(--color-sage-dark);
  color: var(--color-white);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.rsvp__button:disabled {
  opacity: 0.6;
  cursor: wait;
}

.rsvp__success {
  margin-top: 1.5rem;
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--color-sage-dark);
}

.rsvp__form {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.rsvp__form label,
.rsvp__form fieldset {
  display: grid;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.rsvp__form input[type='text'],
.rsvp__form input[type='email'],
.rsvp__form input[type='number'],
.rsvp__form textarea {
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-white);
  font-family: inherit;
  font-size: 1rem;
  color: var(--color-text);
}

.rsvp__form fieldset {
  border: none;
}

.rsvp__form legend {
  margin-bottom: 0.35rem;
}

.rsvp__radio {
  display: flex !important;
  align-items: center;
  gap: 0.5rem;
  flex-direction: row;
  color: var(--color-text);
}

.rsvp__note {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.rsvp__config-hint {
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.rsvp__error {
  text-align: center;
  font-size: 0.85rem;
  color: #b42318;
}

.rsvp__config-hint code {
  font-size: 0.75rem;
}
</style>
