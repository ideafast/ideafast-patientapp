const defaultImage = require('../assets/devices/default.png');
import device_metrics from '../api/mock-data/devices.json';
import {Colors} from '../styles';

const DEVICES = [
  {
    id: 0,
    name: 'Axivity',
    image: defaultImage,
    color: Colors.DEVICES.AX6,
    setSelection: false,
    isSelected: false,
  },
  {
    id: 1,
    name: 'Byteflies',
    image: defaultImage,
    color: Colors.DEVICES.BYTEFLIES,
    setSelection: false,
    isSelected: false,
  },
  {
    id: 2,
    name: 'Dreem',
    image: defaultImage,
    color: Colors.DEVICES.DREEM,
    setSelection: false,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Think Fast',
    image: defaultImage,
    color: Colors.DEVICES.THINKFAST,
    setSelection: false,
    isSelected: false,
  },
  {
    id: 4,
    name: 'Everion',
    image: defaultImage,
    color: Colors.DEVICES.EVERION,
    setSelection: false,
    isSelected: false,
  },
  {
    id: 5,
    name: 'Move Monitor',
    image: defaultImage,
    color: Colors.DEVICES.null,
    setSelection: false,
    isSelected: false,
  },
  {
    id: 6,
    name: 'Samsung Smartphone',
    image: defaultImage,
    color: Colors.DEVICES.null,
  },
  {
    id: 7,
    name: 'Stress Monitor',
    image: defaultImage,
    color: Colors.DEVICES.null,
  },
  {id: 8, name: 'eBedSensor', image: defaultImage, color: Colors.DEVICES.null},
  {
    id: 9,
    name: 'Vital Patch',
    image: defaultImage,
    color: Colors.DEVICES.null,
  },
  {
    id: 10,
    name: 'ZKOne YOLI',
    image: defaultImage,
    color: Colors.DEVICES.null,
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
