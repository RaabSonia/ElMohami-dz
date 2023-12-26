// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';

const resources = {
  fr: {
    translation: frTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Set the default language here
    fallbackLng: 'fr', // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false,
    },
  })
  .then((t) => {
    console.log('Resources loaded:', t);
  });

export default i18n;
