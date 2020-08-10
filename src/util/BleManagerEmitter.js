import {NativeEventEmitter, NativeModules} from 'react-native';

const BleManagerModule = NativeModules.BleManager;
export default new NativeEventEmitter(BleManagerModule);
