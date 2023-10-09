import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../locales/en/translation.json';
import fr from '../../locales/fr/translation.json';
import ar from '../../locales/ar/translation.json';
import { fetchLanguage } from '../utils/layoutStorage';

const initializeI18n = async () => {
  const storedLanguage = await fetchLanguage();

  console.log('storedLanguage', storedLanguage);

  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      resources: {
        en: { translation: en },
        fr: { translation: fr },
        ar: { translation: ar }
      },
      lng: storedLanguage,
      fallbackLng: 'fr',
      interpolation: {
        escapeValue: false
      }
    });
};

initializeI18n();

export default i18n;
