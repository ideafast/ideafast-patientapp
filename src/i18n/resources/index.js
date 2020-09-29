import ContributionsDE from './de/contributions.json';
import ContributionsEN from './en/contributions.json';
import ContributionsNL from './nl/contributions.json';

import DevicesDE from './de/devices.json';
import DevicesEN from './en/devices.json';
import DevicesNL from './nl/devices.json';

import LoginDE from './de/verify.json';
import LoginEN from './en/verify.json';
import LoginNL from './nl/verify.json';

import SupportDE from './de/support.json';
import SupportEN from './en/support.json';
import SupportNL from './nl/support.json';

export default {
  contributionsContainer: {
    en: ContributionsEN,
    de: ContributionsDE,
    nl: ContributionsNL,
  },
  devicesContainer: {
    en: DevicesEN,
    de: DevicesDE,
    nl: DevicesNL,
  },
  loginContainer: {
    en: LoginEN,
    de: LoginDE,
    nl: LoginNL,
  },
  SupportContainer: {
    en: SupportEN,
    de: SupportDE,
    nl: SupportNL,
  },
};
