import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      common: {
        title: 'This is a container for contributions.',
      },
    },
    nl: {
      common: {
        title: 'Dit is een container voor bijdragen.',
      },
    },
    de: {
      common: {
        title: 'Dies ist ein Container für Beiträge.',
      },
    },
  },
});

export default i18n;
