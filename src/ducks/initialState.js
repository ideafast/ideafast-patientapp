const defaultImage = require('../assets/devices/default.png');

const DEVICES = [
  {
    id: 0,
    name: 'Axivity',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: false,
          wifi: false,
          wired: false,
        },
        connection: {
          battery: null,
          ble: null,
          wifi: null,
        },
      },
      data: {
        isOnDevice: false, // NOTE: this indicates that no data is on server, which is OKAY for some elements
        size: null, // NOTE: this also needs to be null or zero in that case
        isUploading: false,
        startRecorded: null,
        endRecorded: null,
        lastUploaded: null,
      },
      error: null,
    },
  },
  {
    id: 1,
    name: 'Byteflies',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: false,
          wifi: true,
          wired: true,
        },
        connection: {
          battery: null,
          ble: null,
          wifi: false,
        },
      },
      data: {
        isOnDevice: true,
        size: 100000000,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: null,
    },
  },
  {
    id: 2,
    name: 'Dreem',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: true,
          wifi: true,
          wired: false,
        },
        connection: {
          battery: 20,
          ble: true,
          wifi: true,
        },
      },
      data: {
        isOnDevice: true,
        size: 100000000,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-09-20T18:25:43.511Z',
      },
      error: 'WIFI_OFFLINE',
    },
  },
  {
    id: 3,
    name: 'eBedSensor',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: false,
          wifi: false,
          wired: true,
        },
        connection: {
          battery: null,
          ble: null,
          wifi: null,
        },
      },
      data: {
        isOnDevice: false,
        size: null,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: null,
    },
  },
  {
    id: 4,
    name: 'Everion',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: true,
          wifi: true,
          wired: false,
        },
        connection: {
          battery: 40,
          ble: {
            uuid: '',
          },
          wifi: true,
        },
      },
      data: {
        isOnDevice: true,
        size: 100000000,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: 'BLE_DISCONNECTED',
    },
  },
  {
    id: 5,
    name: 'Move Monitor',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: false,
          wifi: false,
          wired: false,
        },
        connection: {
          battery: null,
          ble: null,
          wifi: null,
        },
      },
      data: {
        isOnDevice: true,
        size: 89182900,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: null,
    },
  },
  {
    id: 6,
    name: 'Samsung Smartphone',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: true,
          wifi: true,
          wired: false,
        },
        connection: {
          battery: 80,
          ble: {
            uuid: null,
          },
          wifi: true,
        },
      },
      data: {
        isOnDevice: true,
        size: 891829,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: null,
    },
  },
  {
    id: 7,
    name: 'Stress Monitor',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: false,
          wifi: true,
          wired: false,
        },
        connection: {
          battery: null,
          ble: null,
          wifi: true,
        },
      },
      data: {
        isOnDevice: true,
        size: 9918919,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: null,
    },
  },
  {
    id: 8,
    name: 'Think Fast',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: false,
          wifi: true,
          wired: false,
        },
        connection: {
          battery: null,
          ble: null,
          wifi: true,
        },
      },
      data: {
        isOnDevice: true,
        size: 20024101,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: 'SURVEY_INCOMPLETE',
    },
  },
  {
    id: 9,
    name: 'Vital Patch',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: true,
          wifi: true,
          wired: false,
        },
        connection: {
          battery: 40,
          ble: {
            uuid: 'u0101010',
          },
          wifi: true,
        },
      },
      data: {
        isOnDevice: true,
        size: 20024100,
        isUploading: false,
        startRecorded: '2020-04-23T18:25:43.511Z',
        endRecorded: '2020-04-26T18:25:43.511Z',
        lastUploaded: '2020-04-29T18:25:43.511Z',
      },
      error: null,
    },
  },
  {
    id: 10,
    name: 'ZKOne YOLI',
    image: defaultImage,
    status: {
      hardware: {
        features: {
          ble: false,
          wifi: true,
          wired: true,
        },
        connection: {
          battery: null,
          ble: null,
          wifi: true,
        },
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
      error: null,
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
