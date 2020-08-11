/**
 * @format
 * @flow strict-local
 */
import {NativeModules} from 'react-native';

const BleManagerModule = NativeModules.BleManager;

const simpleDataCallback = (fulfill, reject) => (error, success) =>
  error ? reject(error) : fulfill(success);
const nullSuccessDataCallback = (fulfill, reject) => (
  error,
  success,
  nullAlternate,
) =>
  error ? reject(error) : fulfill(success != null ? success : nullAlternate);
const isErrorNotNullCallback = (fulfill, reject) => error =>
  error != null ? reject(error) : fulfill();

const replaceIfNull = (value, replaceWithIfNull) =>
  value != null ? value : replaceWithIfNull;

class BleManager {
  constructor() {
    this.isPeripheralConnected = this.isPeripheralConnected.bind(this);
  }

  read(peripheralId, serviceUUID, characteristicUUID) {
    return new Promise((f, r) => {
      BleManagerModule.read(
        peripheralId,
        serviceUUID,
        characteristicUUID,
        simpleDataCallback(f, r),
      );
    });
  }

  readRSSI(peripheralId) {
    return new Promise((f, r) => {
      BleManagerModule.readRSSI(peripheralId, simpleDataCallback(f, r));
    });
  }

  refreshCache(peripheralId) {
    return new Promise((f, r) => {
      BleManagerModule.refreshCache(peripheralId, simpleDataCallback(f, r));
    });
  }

  retrieveServices(peripheralId, services) {
    return new Promise((f, r) => {
      BleManagerModule.retrieveServices(
        peripheralId,
        services,
        simpleDataCallback(f, r),
      );
    });
  }

  write(peripheralId, serviceUUID, characteristicUUID, data, maxByteSize) {
    return new Promise((f, r) => {
      BleManagerModule.write(
        peripheralId,
        serviceUUID,
        characteristicUUID,
        data,
        replaceIfNull(maxByteSize, 20),
        simpleDataCallback(f, r),
      );
    });
  }

  writeWithoutResponse(
    peripheralId,
    serviceUUID,
    characteristicUUID,
    data,
    maxByteSize,
    queueSleepTime,
  ) {
    if (maxByteSize == null) {
      maxByteSize = 20;
    }
    return new Promise((f, r) => {
      BleManagerModule.writeWithoutResponse(
        peripheralId,
        serviceUUID,
        characteristicUUID,
        data,
        replaceIfNull(maxByteSize, 20),
        replaceIfNull(queueSleepTime, 10),
        simpleDataCallback(f, r),
      );
    });
  }

  connect(peripheralId) {
    return new Promise((f, r) => {
      BleManagerModule.connect(peripheralId, simpleDataCallback(f, r));
    });
  }

  createBond(peripheralId) {
    return new Promise((f, r) => {
      BleManagerModule.createBond(peripheralId, simpleDataCallback(f, r));
    });
  }

  removeBond(peripheralId) {
    return new Promise((f, r) => {
      BleManagerModule.removeBond(peripheralId, simpleDataCallback(f, r));
    });
  }

  disconnect(peripheralId, force = true) {
    return new Promise((f, r) => {
      BleManagerModule.disconnect(
        peripheralId,
        force,
        simpleDataCallback(f, r),
      );
    });
  }

  startNotification(peripheralId, serviceUUID, characteristicUUID) {
    return new Promise((f, r) => {
      BleManagerModule.startNotification(
        peripheralId,
        serviceUUID,
        characteristicUUID,
        simpleDataCallback(f, r),
      );
    });
  }

  startNotificationUseBuffer(
    peripheralId,
    serviceUUID,
    characteristicUUID,
    buffer,
  ) {
    return new Promise((f, r) => {
      BleManagerModule.startNotificationUseBuffer(
        peripheralId,
        serviceUUID,
        characteristicUUID,
        buffer,
        simpleDataCallback(f, r),
      );
    });
  }

  stopNotification(peripheralId, serviceUUID, characteristicUUID) {
    return new Promise((f, r) => {
      BleManagerModule.stopNotification(
        peripheralId,
        serviceUUID,
        characteristicUUID,
        simpleDataCallback(f, r),
      );
    });
  }

  checkState() {
    BleManagerModule.checkState();
  }

  start(options) {
    return new Promise((f, r) => {
      BleManagerModule.start(
        replaceIfNull(options, {}),
        simpleDataCallback(f, r),
      );
    });
  }

  scan(serviceUUIDs, seconds, allowDuplicates, scanningOptions = {}) {
    return new Promise((f, r) => {
      // (ANDROID) Match as many advertisement per filter as hw could allow
      // dependes on current capability and availability of the resources in hw.
      // (ANDROID) Defaults to MATCH_MODE_AGGRESSIVE
      // (ANDROID) Defaults to SCAN_MODE_LOW_POWER on android
      const modifiedScanningOptions = {
        ...scanningOptions,
        numberOfMatches: replaceIfNull(scanningOptions.numberOfMatches, 3),
        matchMode: replaceIfNull(scanningOptions.matchMode, 1),
        scanMode: replaceIfNull(scanningOptions.scanMode, 0),
        reportDelay: replaceIfNull(scanningOptions.reportDelay, 0),
      };

      BleManagerModule.scan(
        serviceUUIDs,
        seconds,
        replaceIfNull(allowDuplicates, false),
        modifiedScanningOptions,
        simpleDataCallback(f, r),
      );
    });
  }

  stopScan() {
    return new Promise((f, r) => {
      BleManagerModule.stopScan(isErrorNotNullCallback(f, r));
    });
  }

  enableBluetooth() {
    return new Promise((f, r) => {
      BleManagerModule.enableBluetooth(isErrorNotNullCallback(f, r));
    });
  }

  getConnectedPeripherals(serviceUUIDs) {
    return new Promise((f, r) => {
      BleManagerModule.getConnectedPeripherals(
        serviceUUIDs,
        nullSuccessDataCallback(f, r, []),
      );
    });
  }

  getBondedPeripherals() {
    return new Promise((f, r) => {
      BleManagerModule.getBondedPeripherals(nullSuccessDataCallback(f, r, []));
    });
  }

  getDiscoveredPeripherals() {
    return new Promise((f, r) => {
      BleManagerModule.getDiscoveredPeripherals(
        nullSuccessDataCallback(f, r, []),
      );
    });
  }

  removePeripheral(peripheralId) {
    return new Promise((f, r) => {
      BleManagerModule.removePeripheral(peripheralId, simpleDataCallback(f, r));
    });
  }

  isPeripheralConnected(peripheralId, serviceUUIDs) {
    return this.getConnectedPeripherals(serviceUUIDs).then(result =>
      result.find(p => p.id === peripheralId) ? true : false,
    );
  }

  requestConnectionPriority(peripheralId, connectionPriority) {
    return new Promise((f, r) => {
      BleManagerModule.requestConnectionPriority(
        peripheralId,
        connectionPriority,
        simpleDataCallback(f, r),
      );
    });
  }

  requestMTU(peripheralId, mtu) {
    return new Promise((fulfill, reject) => {
      BleManagerModule.requestMTU(peripheralId, mtu, error =>
        error ? reject(error) : fulfill(mtu),
      );
    });
  }
}

export default new BleManager();
