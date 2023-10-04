import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Load translation files
import enTranslation from "../locales/en.json";
import frTranslation from "../locales/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation }
  },
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false // React components can be used in translations
  }
});
export default i18n;