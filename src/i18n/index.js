import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ContributionsDE from './resources/de/Contributions.json';
import ContributionsEN from './resources/en/Contributions.json';
import ContributionsNL from './resources/nl/Contributions.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      contributions: ContributionsEN,
    },
    nl: {
      contributions: ContributionsNL,
    },
    de: {
      contributions: ContributionsDE,
    },
  },
});

export default i18n;
