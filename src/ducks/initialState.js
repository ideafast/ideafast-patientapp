const defaultImage = require('../assets/devices/default.png');

const DEVICES = [
  {
    id: 0,
    name: 'Axivity',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: false,
        hasBLE: false,
      },
      data: {
        isOnDevice: false, // NOTE: this indicates that no data is on server, which is OKAY for some elements
        size: null, // NOTE: this also needs to be null or zero in that case
        isUploading: false,
        startRecorded: null,
        endRecorded: null,
        lastUploaded: null,
      },
      errors: [],
    },
  },
  {
    id: 1,
    name: 'Byteflies',
    image: defaultImage,
    status: {
      device: {
        // note these were added to inform UI changes
        battery: null,
        isBleOn: false,
        hasBLE: false,
        hasWiFi: true,
        isWiFiOn: true,
        hasWallCharging: true,
        isOnline: true,
      },
      data: {
        isOnDevice: true,
        size: 100000000,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: [],
    },
  },
  {
    id: 2,
    name: 'Dreem',
    image: defaultImage,
    status: {
      device: {
        battery: 20,
        isBleOn: true,
        hasBLE: true,
        hasWiFi: true,
        isWiFiOn: false,
        hasWallCharging: true,
        isOnline: true,
      },
      data: {
        isOnDevice: true,
        size: 100000000,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-09-20T18:25:43.511Z',
      },
      errors: ['WIFI_OFFLINE'],
    },
  },
  {
    id: 3,
    name: 'eBedSensor',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: null,
        hasBLE: null,
        hasWiFi: null,
        isWiFiOn: null,
        hasWallCharging: true,
        isOnline: true,
      },
      data: {
        isOnDevice: false,
        size: null,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: [],
    },
  },
  {
    id: 4,
    name: 'Everion',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: false,
        hasBLE: true,
        isOnline: false,
      },
      data: {
        isOnDevice: true,
        size: 100000000,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: ['BLE_DISCONNECTED'],
    },
  },
  {
    id: 5,
    name: 'Move Monitor',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: false,
        hasBLE: false,
        isOnline: false,
      },
      data: {
        isOnDevice: true,
        size: 89182900,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: [],
    },
  },
  {
    id: 6,
    name: 'Samsung Smartphone',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: false,
        hasBLE: false,
        isOnline: false,
      },
      data: {
        isOnDevice: true,
        size: 891829,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: [],
    },
  },
  {
    id: 7,
    name: 'Stress Monitor',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: false,
        hasBLE: false,
        isOnline: false,
      },
      data: {
        isOnDevice: true,
        size: 9918919,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: [],
    },
  },
  {
    id: 8,
    name: 'Think Fast',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: false,
        hasBLE: false,
        isOnline: false,
      },
      data: {
        isOnDevice: true,
        size: 20024101,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: ['SURVEY_INCOMPLETE'],
    },
  },
  {
    id: 9,
    name: 'Vital Patch',
    image: defaultImage,
    status: {
      device: {
        battery: 40,
        isBleOn: true,
        hasBLE: true,
        isOnline: false,
      },
      data: {
        isOnDevice: true,
        size: 20024100,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      errors: [],
    },
  },
  {
    id: 10,
    name: 'ZKOne YOLI',
    image: defaultImage,
    status: {
      device: {
        battery: null,
        isBleOn: null,
        hasBLE: null,
        hasWiFi: null,
        isWiFiOn: null,
        hasWallCharging: true,
        isOnline: true,
      },
      data: {
        isOnDevice: false,
        // no data is on device
        size: null,
        isUploading: false,
        startRecorded: null,
        endRecorded: null,
        lastUploaded: null,
      },
      errors: [],
    },
  },
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
