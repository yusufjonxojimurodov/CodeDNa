import { createI18n } from 'vue-i18n'
import en from './en.js';
import uz from './uz.js';
import ru from './ru.js';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'uz',
  fallbackLocale: 'en',
  messages: {
    en,
    uz,
    ru,
  },
})

export default i18n