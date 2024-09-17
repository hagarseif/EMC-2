import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import enHome from './languages/English/enHome.json'
import arHome from './languages/Arabic/arHome.json'
const resources = {
    en: {
      translation: enHome
    },
    ar: {
      translation: arHome
    }
  };
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'ar',
    // debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react:{
        useSuspense:false
    }
  });
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
  });

export default i18n;