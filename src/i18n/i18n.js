import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsInEng from "../locales/en/translation.json";
import translationsInFrench from "../locales/fr/translation.json";
import translationsInRussian from "../locales/ru/translation.json";

// the translations
const resources = {
  en: {
    translation: translationsInEng,
  },
  fr: {
    translation: translationsInFrench,
  },
  ru: {
    translation: translationsInRussian,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    lng: localStorage.getItem("lang"), // It acts as default language. When the site loads, content is shown in this language.
    fallbackLng: "fr",
    returnObjects: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
