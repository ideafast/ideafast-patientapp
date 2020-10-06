const defaultImage = require('../assets/devices/default.png');
import device_metrics from '../api/mock-data/devices.json';
import {Colors} from '../styles';

const DEVICES = [
  {
    id: 'AXIVITY',
    name: 'Axivity',
    image: defaultImage,
    color: Colors.DEVICES.AX6,
    setSelection: false,
    isSelected: true,
  },
  {
    id: 'BYTEFLIES',
    name: 'Byteflies',
    image: defaultImage,
    color: Colors.DEVICES.BYTEFLIES,
    setSelection: false,
    isSelected: true,
  },
  {
    id: 'DREEM',
    name: 'Dreem',
    image: defaultImage,
    color: Colors.DEVICES.DREEM,
    setSelection: false,
    isSelected: true,
  },
  {
    id: 'THINK FAST',
    name: 'Think Fast',
    image: defaultImage,
    color: Colors.DEVICES.THINKFAST,
    setSelection: false,
    isSelected: true,
  },
  {
    id: 'EVERION',
    name: 'Everion',
    image: defaultImage,
    color: Colors.DEVICES.EVERION,
    setSelection: false,
    isSelected: true,
  },
  {
    id: 'MOVE MONITOR',
    name: 'Move Monitor',
    image: defaultImage,
    color: Colors.DEVICES.null,
    setSelection: false,
    isSelected: true,
  },
  // {
  //   id: 6,
  //   name: 'Samsung Smartphone',
  //   image: defaultImage,
  //   color: Colors.DEVICES.null,
  //   setSelection: false,
  //   isSelected: true,
  // },
  {
    id: 'STRESS MONITOR',
    name: 'Stress Monitor',
    image: defaultImage,
    color: Colors.DEVICES.STRESSMONITOR,
    setSelection: false,
    isSelected: true,
  },
  {id: 8, name: 'eBedSensor', image: defaultImage, color: Colors.DEVICES.null},
  {
    id: 'VITAL PATCH',
    name: 'Vital Patch',
    image: defaultImage,
    color: Colors.DEVICES.VITALPATCH,
    setSelection: false,
    isSelected: true,
  },
  {
    id: 'ZKONE ROLI',
    name: 'ZKOne YOLI',
    image: defaultImage,
    color: Colors.DEVICES.ZKONEYOLI,
    setSelection: false,
    isSelected: true,
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
