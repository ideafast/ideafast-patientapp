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

import NavigationDE from './resources/de/nav.json';
import NavigationEN from './resources/en/nav.json';
import NavigationNL from './resources/nl/nav.json';

import LanguagesDE from './resources/de/languages.json';
import LanguagesEN from './resources/en/languages.json';
import LanguagesNL from './resources/nl/languages.json';

import BleDE from './resources/de/ble.json';
import BleEN from './resources/en/ble.json';
import BleNL from './resources/nl/ble.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      contributions: ContributionsEN,
      devices: DevicesEN,
      login: LoginEN,
      support: SupportEN,
      nav: NavigationEN,
      languages: LanguagesEN,
      ble: BleEN,
    },
    nl: {
      contributions: ContributionsNL,
      devices: DevicesNL,
      login: LoginNL,
      support: SupportNL,
      nav: NavigationNL,
      languages: LanguagesNL,
      ble: BleNL,
    },
    de: {
      contributions: ContributionsDE,
      devices: DevicesDE,
      login: LoginDE,
      support: SupportDE,
      nav: NavigationDE,
      languages: LanguagesDE,
      ble: BleDE,
    },
  },
});

export default i18n;
