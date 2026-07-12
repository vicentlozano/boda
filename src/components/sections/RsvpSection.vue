<script setup>
import { ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()

const showForm = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

const form = ref({
  name: '',
  email: '',
  attending: 'yes',
  guests: 1,
  mainCourse: 'fish',
  message: '',
})

function buildPayload() {
  const rsvp = t.value.rsvp
  const attending = form.value.attending === 'yes' ? rsvp.attendingYesValue : rsvp.attendingNoValue

  return {
    name: form.value.name,
    email: form.value.email,
    _replyto: form.value.email,
    _subject: `${rsvp.subject}: ${form.value.name}`,
    attending,
    mainCourse: form.value.attending === 'yes' ? form.value.mainCourse : '',
    guests: form.value.attending === 'yes' ? form.value.guests : 0,
    message: form.value.message || rsvp.noMessage,
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
    errorMessage.value = data.error || t.value.rsvp.errorSubmit
  } catch {
    errorMessage.value = t.value.rsvp.errorConnection
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <SectionCard>
    <h2 class="rsvp__title">{{ t.rsvp.title }}</h2>

    <template v-if="submitted">
      <p class="rsvp__success">{{ t.rsvp.success }}</p>
    </template>

    <template v-else-if="!showForm">
      <button type="button" class="rsvp__button" @click="showForm = true">
        {{ t.rsvp.buttonLabel }}
      </button>
    </template>

    <form v-else class="rsvp__form" @submit.prevent="handleSubmit">
      <label>
        {{ t.rsvp.fullName }}
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        {{ t.rsvp.email }}
        <input v-model="form.email" type="email" required />
      </label>

      <fieldset>
        <legend>{{ t.rsvp.attending }}</legend>
        <label class="rsvp__radio">
          <input v-model="form.attending" type="radio" value="yes" />
          {{ t.rsvp.attendingYes }}
        </label>
        <label class="rsvp__radio">
          <input v-model="form.attending" type="radio" value="no" />
          {{ t.rsvp.attendingNo }}
        </label>
      </fieldset>
      <fieldset v-if="form.attending === 'yes'">
        <legend>{{ t.rsvp.mainCourse }}</legend>
        <label class="rsvp__radio">
          <input v-model="form.mainCourse" type="radio" value="fish" />
          {{ t.rsvp.fish }}
        </label>
        <label class="rsvp__radio">
          <input v-model="form.mainCourse" type="radio" value="meat" />
          {{ t.rsvp.meat }}
        </label>
        <label class="rsvp__radio">
          <input v-model="form.mainCourse" type="radio" value="vegetarian" />
          {{ t.rsvp.vegetarian }}
        </label>
      </fieldset>

      <label v-if="form.attending === 'yes'">
        {{ t.rsvp.guests }}
        <input v-model.number="form.guests" type="number" min="1" max="10" />
      </label>

      <label>
        {{ t.rsvp.message }}
        <textarea v-model="form.message" rows="3" />
      </label>

      <button type="submit" class="rsvp__button" :disabled="submitting">
        {{ submitting ? t.rsvp.submitting : t.rsvp.submit }}
      </button>

      <p v-if="errorMessage" class="rsvp__error" role="alert">{{ errorMessage }}</p>
    </form>

    <p class="rsvp__note">{{ t.rsvp.note }}</p>
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
