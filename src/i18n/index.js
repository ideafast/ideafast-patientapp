import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ContributionsDE from './resources/de/contributions.json';
import ContributionsEN from './resources/en/contributions.json';
import ContributionsNL from './resources/nl/contributions.json';

import DevicesDE from './resources/de/devices.json';
import DevicesEN from './resources/en/devices.json';
import DevicesNL from './resources/nl/devices.json';

import LoginDE from './resources/de/verify.json';
import LoginEN from './resources/en/verify.json';
import LoginNL from './resources/nl/verify.json';

import SupportDE from './resources/de/support.json';
import SupportEN from './resources/en/support.json';
import SupportNL from './resources/nl/support.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      contributions: ContributionsEN,
      devices: DevicesEN,
      login: LoginEN,
      support: SupportEN,
    },
    nl: {
      contributions: ContributionsNL,
      devices: DevicesNL,
      login: LoginNL,
      support: SupportNL,
    },
    de: {
      contributions: ContributionsDE,
      devices: DevicesDE,
      login: LoginDE,
      support: SupportDE,
    },
  },
});

export default i18n;
