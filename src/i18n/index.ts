import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'es', // Idioma por defecto si no se detecta ninguno
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
    detection: {
      order: ['localStorage', 'navigator'], // Primero revisa localStorage, luego idioma del navegador
      caches: ['localStorage'], // Guarda el idioma elegido en localStorage
    },
  });

export default i18n;

