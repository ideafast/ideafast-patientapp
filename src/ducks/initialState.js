const defaultImage = require('../assets/devices/default.png');

const DEVICES = [
  {id: 'AX6', name: 'Axivity', image: defaultImage},
  {id: 'BTF', name: 'Byteflies', image: defaultImage},
  {id: 'DRM', name: 'Dreem', image: defaultImage},
  {id: 'BED', name: 'eBedSensor', image: defaultImage},
  {id: 'BVN', name: 'Everion', image: defaultImage},
  {id: 'MMM', name: 'Move Monitor', image: defaultImage},
  {id: 'SMP', name: 'Samsung A40', image: defaultImage},
  {id: 'TMA', name: 'Stress Monitor', image: defaultImage},
  {id: 'TFA', name: 'Think Fast', image: defaultImage},
  {id: 'VTP', name: 'Vital Patch', image: defaultImage},
  {id: 'YSM', name: 'ZKOne YOLI', image: defaultImage},
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
