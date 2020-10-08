const defaultImage = require('../assets/devices/default.png');
import device_metrics from '../api/mock-data/devices.json';
import {Colors} from '../styles';

const DEVICES = [
  {
    id: 'AX6',
    name: 'Axivity',
    image: defaultImage,
    color: Colors.DEVICES.AX6,
  },
  {
    id: 'BTF',
    name: 'Byteflies',
    image: defaultImage,
    color: Colors.DEVICES.BYTEFLIES,
  },
  {
    id: 'DRM',
    name: 'Dreem',
    image: defaultImage,
    color: Colors.DEVICES.DREEM,
  },
  {
    id: 'TFA',
    name: 'Think Fast',
    image: defaultImage,
    color: Colors.DEVICES.THINKFAST,
  },
  {
    id: 'BVN',
    name: 'Everion',
    image: defaultImage,
    color: Colors.DEVICES.EVERION,
  },
  {
    id: 'MMM',
    name: 'Move Monitor',
    image: defaultImage,
    color: Colors.DEVICES.null,
  },
  {
    id: 'SMP',
    name: 'Samsung Smartphone',
    image: defaultImage,
    color: Colors.DEVICES.null,
    setSelection: false,
    isSelected: true,
  },
  {
    id: 'TMA',
    name: 'Stress Monitor',
    image: defaultImage,
    color: Colors.DEVICES.STRESSMONITOR,
  },
  {
    id: 'BED',
    name: 'eBedSensor',
    image: defaultImage,
    color: Colors.DEVICES.null,
  },
  {
    id: 'VTP',
    name: 'Vital Patch',
    image: defaultImage,
    color: Colors.DEVICES.VITALPATCH,
  },
  {
    id: 'YSM',
    name: 'ZKOne YOLI',
    image: defaultImage,
    color: Colors.DEVICES.ZKONEYOLI,
  },
];

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
  deviceMetrics: device_metrics,
};
