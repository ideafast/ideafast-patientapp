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
    color: Colors.DEVICES.DRM,
  },
  {
    id: 'TFA',
    name: 'Think Fast',
    image: defaultImage,
    color: Colors.DEVICES.TFA,
  },
  {
    id: 'BVN',
    name: 'Everion',
    image: defaultImage,
    color: Colors.DEVICES.BVN,
  },
  {
    id: 'MMM',
    name: 'Move Monitor',
    image: defaultImage,
    color: Colors.DEVICES.MMM,
  },
  {
    id: 'SMP',
    name: 'Samsung Smartphone',
    image: defaultImage,
    color: Colors.DEVICES.SMP,
  },
  {
    id: 'TMA',
    name: 'Stress Monitor',
    image: defaultImage,
    color: Colors.DEVICES.TMA,
  },
  {
    id: 'BED',
    name: 'eBedSensor',
    image: defaultImage,
    color: Colors.DEVICES.BED,
  },
  {
    id: 'VTP',
    name: 'Vital Patch',
    image: defaultImage,
    color: Colors.DEVICES.VTP,
  },
  {
    id: 'YSM',
    name: 'ZKOne YOLI',
    image: defaultImage,
    color: Colors.DEVICES.YSM,
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
