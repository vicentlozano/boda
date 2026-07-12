import { computed, ref, watch } from 'vue'
import { messages } from '@/i18n'

const STORAGE_KEY = 'boda-locale'

function getInitialLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && messages[saved]) return saved
  return 'va'
}

const locale = ref(getInitialLocale())

function applyDocumentLocale(code) {
  document.documentElement.lang = messages[code].meta.htmlLang
  document.title = messages[code].meta.title
}

applyDocumentLocale(locale.value)

watch(locale, (code) => {
  localStorage.setItem(STORAGE_KEY, code)
  applyDocumentLocale(code)
})

export function useLocale() {
  const t = computed(() => messages[locale.value])

  function setLocale(code) {
    if (messages[code]) locale.value = code
  }

  return { locale, t, setLocale }
}
