import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './src/locales/es.json';
import en from './src/locales/en.json';

const instance = i18n.use(initReactI18next);

if (typeof window !== 'undefined') {
    instance.use(LanguageDetector);
}

instance.init({
    resources: {
        es: { translation: es },
        en: { translation: en }
    },
    lng: typeof window === 'undefined' ? 'es' : undefined, // Force 'es' on server, detect on client
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false // React already escapes values
    }
});

export default i18n;
