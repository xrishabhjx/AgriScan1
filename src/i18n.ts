// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our landing page!",
      description: "This is a brief description of our services."
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur notre page d'accueil!",
      description: "Ceci est une brève description de nos services."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false // React already escapes variables
  }
});

export default i18n;
