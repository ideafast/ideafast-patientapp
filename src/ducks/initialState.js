import i18n from 'i18next';
// TODO: remove when API integration implemented
import mock_devices from '../api/mock-data/devices.json';
import {Colors} from '../styles';

const defaultImage = require('../assets/devices/default.png');
const userLang = i18n.languages?.includes(i18n.language) ? i18n.language : 'en';

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

let devices = [
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

// TODO: remove when API integration implemented
const userDevices = devices.map(deviceLocal => {
  // Find the remote object for this device based on unique key (ID)
  const deviceRemote = mock_devices.find(d => d.id === deviceLocal.id);
  // Merge objects: as we will ship icons, deviceLocal comes second
  // as its properties are used if both objects have the same key, e.g. image.
  return {...deviceLocal, ...deviceRemote};
});

export default {
  userID: null,
  userLang,
  devices,
  userDevices: userDevices.slice(0, 5),
  deviceErrors: DEVICE_ERRORS,
};
