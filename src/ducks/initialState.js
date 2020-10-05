import i18n from 'i18next';

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

export default {
  userID: null,
  userLang: i18n.language,
  devices: DEVICES,
};
