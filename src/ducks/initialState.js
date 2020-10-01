const defaultImage = require('../assets/devices/default.png');

const DEVICES = [
  {id: 0, name: 'Axivity', image: defaultImage},
  {id: 1, name: 'Byteflies', image: defaultImage},
  {id: 2, name: 'Dreem', image: defaultImage},
  {id: 3, name: 'eBedSensor', image: defaultImage},
  {id: 4, name: 'Everion', image: defaultImage},
  {id: 5, name: 'Move Monitor', image: defaultImage},
  {id: 6, name: 'Samsung Smartphone', image: defaultImage},
  {id: 7, name: 'Stress Monitor', image: defaultImage},
  {id: 8, name: 'Think Fast', image: defaultImage},
  {id: 9, name: 'Vital Patch', image: defaultImage},
  {id: 10, name: 'ZKOne YOLI', image: defaultImage},
];

// Note: this will be in i18n in PR
const DEVICE_ERRORS = {
  WIFI_OFFLINE: {
    en: {message: 'WiFi Disconnected', action: 'CONNECT'},
    de: {message: 'WiFi Disconnected', action: 'CONNECT'},
    nl: {message: 'WiFi Disconnected', action: 'CONNECT'},
  },
  SURVEY_INCOMPLETE: {
    en: {message: 'Survey Incomplete', action: 'COMPLETE'},
    de: {message: 'Survey Incomplete', action: 'COMPLETE'},
    nl: {message: 'Survey Incomplete', action: 'COMPLETE'},
  },
  BLE_DISCONNECTED: {
    en: {message: 'Bluetooth Disabled', action: 'ENABLE'},
    de: {message: 'Bluetooth Disabled', action: 'ENABLE'},
    nl: {message: 'Bluetooth Disabled', action: 'ENABLE'},
  },
  POWER_OFF: {
    en: {message: 'Device is unplugged from power.', action: 'TURN ON'},
    de: {message: 'Device is unplugged from power.', action: 'TURN ON'},
    nl: {message: 'Device is unplugged from power.', action: 'TURN ON'},
  },
};

const SUPPORTED_LANGUAGES = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'de',
    name: 'German',
  },
  {
    code: 'nl',
    name: 'Dutch',
  },
];

export default {
  userID: null,
  userLang: 'en',
  languages: SUPPORTED_LANGUAGES,
  devices: DEVICES,
  deviceErrors: DEVICE_ERRORS,
};
