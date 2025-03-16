import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importar los archivos de traducción
import enTranslation from "../locales/en.json";
import esTranslation from "../locales/es.json";

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
};
const fallbackLnq = ['en'];
const avalaibleLanguages = ['en', 'es'];

const options = {
    // order and from where user language should be detected
    order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],
  
    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
  
    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  
    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain',
  
    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,
  
    // only detect languages that are in the whitelist
    checkWhitelist: true
  }

i18n.use(LanguageDetector)
.use(initReactI18next) 
.init({
  resources,
  fallbackLnq,
  whitelist: avalaibleLanguages,
  detection: options,

  interpolation: { escapeValue: false },
});

export default i18n;