<script setup>
import { ref, watch } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { wedding } from '@/config/wedding'
import SectionCard from '@/components/layout/SectionCard.vue'

const { t } = useLocale()

const showForm = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const errorMessage = ref('')

function createGuest() {
  return { name: '', mainCourse: 'fish', ageGroup: 'adult' }
}

const maxGuests = 10
const guestCountOptions = Array.from({ length: maxGuests }, (_, index) => index + 1)

const form = ref({
  email: '',
  attending: 'yes',
  guestCount: 1,
  guests: [createGuest()],
  message: '',
})

watch(
  () => form.value.guestCount,
  (count) => {
    const total = Math.min(maxGuests, Math.max(1, Number(count) || 1))
    form.value.guestCount = total

    while (form.value.guests.length < total) {
      form.value.guests.push(createGuest())
    }
    while (form.value.guests.length > total) {
      form.value.guests.pop()
    }
  },
)

function guestLabel(index) {
  if (index === 0) return t.value.rsvp.primaryGuest
  return t.value.rsvp.guestNumber.replace('{n}', String(index + 1))
}

function courseLabel(value) {
  const labels = {
    fish: t.value.rsvp.fish,
    meat: t.value.rsvp.meat,
    vegetarian: t.value.rsvp.vegetarian,
  }
  return labels[value] ?? value
}

function ageLabel(value) {
  return value === 'child' ? t.value.rsvp.child : t.value.rsvp.adult
}

function buildPayload() {
  const rsvp = t.value.rsvp
  const attending = form.value.attending === 'yes' ? rsvp.attendingYesValue : rsvp.attendingNoValue
  const primaryName = form.value.guests[0]?.name?.trim() ?? ''

  const payload = {
    name: primaryName,
    email: form.value.email,
    _replyto: form.value.email,
    _subject: `${rsvp.subject}: ${primaryName}`,
    attending,
    message: form.value.message || rsvp.noMessage,
  }

  if (form.value.attending !== 'yes') {
    payload.guestCount = 0
    return payload
  }

  payload.guestCount = form.value.guestCount
  payload.guestsDetails = form.value.guests
    .map(
      (guest, index) =>
        `${index + 1}. ${guest.name.trim()} — ${courseLabel(guest.mainCourse)} — ${ageLabel(guest.ageGroup)}`,
    )
    .join('\n')

  form.value.guests.forEach((guest, index) => {
    const n = index + 1
    payload[`guest_${n}_name`] = guest.name.trim()
    payload[`guest_${n}_mainCourse`] = courseLabel(guest.mainCourse)
    payload[`guest_${n}_ageGroup`] = ageLabel(guest.ageGroup)
  })

  return payload
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
  <SectionCard variant="cream" floral-edges floral-position="bottom-left">
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

      <template v-if="form.attending === 'yes'">
        <label>
          {{ t.rsvp.guests }}
          <select v-model.number="form.guestCount" required>
            <option v-for="count in guestCountOptions" :key="count" :value="count">
              {{ count }}
            </option>
          </select>
        </label>

        <fieldset
          v-for="(guest, index) in form.guests"
          :key="index"
          class="rsvp__guest"
        >
          <legend>{{ guestLabel(index) }}</legend>

          <label>
            {{ t.rsvp.guestName }}
            <input v-model="guest.name" type="text" required />
          </label>

          <fieldset class="rsvp__guest-fieldset">
            <legend>{{ t.rsvp.mainCourse }}</legend>
            <label class="rsvp__radio">
              <input v-model="guest.mainCourse" type="radio" value="fish" />
              {{ t.rsvp.fish }}
            </label>
            <label class="rsvp__radio">
              <input v-model="guest.mainCourse" type="radio" value="meat" />
              {{ t.rsvp.meat }}
            </label>
            <label class="rsvp__radio">
              <input v-model="guest.mainCourse" type="radio" value="vegetarian" />
              {{ t.rsvp.vegetarian }}
            </label>
          </fieldset>

          <fieldset class="rsvp__guest-fieldset">
            <legend>{{ t.rsvp.ageGroup }}</legend>
            <label class="rsvp__radio">
              <input v-model="guest.ageGroup" type="radio" value="adult" />
              {{ t.rsvp.adult }}
            </label>
            <label class="rsvp__radio">
              <input v-model="guest.ageGroup" type="radio" value="child" />
              {{ t.rsvp.child }}
            </label>
          </fieldset>
        </fieldset>

        <p class="rsvp__child-note">{{ t.rsvp.childMenuNote }}</p>
      </template>

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
  color: var(--color-text);
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
.rsvp__form select,
.rsvp__form textarea {
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-white);
  font-family: inherit;
  font-size: 1rem;
  color: var(--color-text);
}

.rsvp__form select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
}

.rsvp__form fieldset {
  border: none;
}

.rsvp__form legend {
  margin-bottom: 0.35rem;
  font-weight: 600;
  color: var(--color-text);
}

.rsvp__guest {
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
}

.rsvp__guest-fieldset {
  margin-top: 0.25rem;
}

.rsvp__child-note {
  margin-top: 0.35rem;
  font-size: 0.8rem;
  font-style: italic;
  line-height: 1.45;
  color: var(--color-text-muted);
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

.rsvp__error {
  text-align: center;
  font-size: 0.85rem;
  color: #b42318;
}
</style>
