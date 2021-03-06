import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  AppState,
  FlatList,
  Dimensions,
  Button,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';

import BleItemRow from '../components/BleItemRow';
import {mapDispatchToProps} from '../ducks/actions';
import BleManager from '../util/BleManager';
import BleManagerEmitter from '../util/BleManagerEmitter';
import {useTranslation} from 'react-i18next';

const Ble: () => React$Node = props => {
  const {t} = useTranslation('ble');
  const [scanning, setScanning] = useState(false);
  const [peripherals, setPeripherals] = useState(new Map());
  const [appState, setAppState] = useState('');

  const [handlerDiscover, setHandlerDiscover] = useState(null);
  const [handlerStop, setHandlerStop] = useState(null);
  const [handlerDisconnect, setHandlerDisconnect] = useState(null);
  const [handlerUpdate, setHandlerUpdate] = useState(null);

  const handleAppStateChange = async nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log(t('foreground'));
      const peripheralsArray = await BleManager.getConnectedPeripherals([]);
      console.log(t('connectedPer') + peripheralsArray.length);
    }
    setAppState(nextAppState);
  };

  const handleDiscoverPeripheral = peripheral => {
    let newperipherals = peripherals;
    console.log(t('gotPer'), peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    newperipherals.set(peripheral.id, peripheral);
    setPeripherals(newperipherals);
  };

  const handleStopScan = () => {
    console.log(t('ScanStop'));
    setScanning(false);
  };

  const handleDisconnectedPeripheral = data => {
    let newperipherals = peripherals;
    let peripheral = newperipherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setPeripherals(newperipherals);
    }
    console.log(t('disconnect') + data.peripheral);
  };

  const handleUpdateValueForCharacteristic = data => {
    console.log(
      t('dataReceived') +
        data.peripheral +
        t('characteristic') +
        data.characteristic,
      data.value,
    );
  };

  // Component Did Mount
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    BleManager.start({showAlert: false});

    setHandlerDiscover(
      BleManagerEmitter.addListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral,
      ),
    );
    setHandlerStop(
      BleManagerEmitter.addListener('BleManagerStopScan', handleStopScan),
    );
    setHandlerDisconnect(
      BleManagerEmitter.addListener(
        'BleManagerDisconnectPeripheral',
        handleDisconnectedPeripheral,
      ),
    );
    setHandlerUpdate(
      BleManagerEmitter.addListener(
        'BleManagerDidUpdateValueForCharacteristic',
        handleUpdateValueForCharacteristic,
      ),
    );

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ).then(result => {
        if (result) {
          console.log(t('permission'));
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ).then(requestResult => {
            if (requestResult) {
              console.log(t('userA'));
            } else {
              console.log(t('userR'));
            }
          });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Component Will Unmount
  useEffect(() => {
    return () => {
      if (handlerDiscover) {
        handlerDiscover.remove();
      }
      if (handlerStop) {
        handlerStop.remove();
      }
      if (handlerDisconnect) {
        handlerDisconnect.remove();
      }
      if (handlerUpdate) {
        handlerUpdate.remove();
      }
      setHandlerDiscover(null);
      setHandlerStop(null);
      setHandlerDisconnect(null);
      setHandlerUpdate(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startScan = async () => {
    if (!scanning) {
      await BleManager.scan([], 3, true);
      console.log(t('scanning'));
      setScanning(true);
    }
  };

  const retrieveConnected = async () => {
    const results = await BleManager.getConnectedPeripherals([]);
    if (results.length === 0) {
      console.log(t('noPer'));
    }
    console.log(results);
    let newperipherals = peripherals;
    for (let i = 0; i < results.length; i++) {
      let peripheral = results[i];
      peripheral.connected = true;
      newperipherals.set(peripheral.id, peripheral);
      setPeripherals(newperipherals);
    }
  };

  const test = async peripheral => {
    if (peripheral && peripheral.connected) {
      BleManager.disconnect(peripheral.id);
    } else {
      await BleManager.connect(peripheral.id);
      let newperipherals = peripherals;
      let p = peripherals.get(peripheral.id);
      if (p) {
        p.connected = true;
        newperipherals.set(peripheral.id, p);
        setPeripherals(newperipherals);
      }
      console.log(t('connect') + peripheral.id);
    }
  };

  const renderItem = item => {
    return <BleItemRow {...item} testFn={test} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Button
            title={t('bluetooth') + (scanning ? t('on') : t('off')) + ')'}
            onPress={() => startScan()}
          />
        </View>

        <View style={styles.row}>
          <Button
            title={t('peripherals')}
            onPress={() => retrieveConnected()}
          />
        </View>

        <FlatList
          style={styles.scroll}
          ListHeaderComponent={
            peripherals.size === 0 && (
              <View style={styles.NoPeripherals}>
                <Text>No peripherals</Text>
              </View>
            )
          }
          data={Array.from(peripherals.values())}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: window.width,
    height: window.height,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 10,
  },
  NoPeripherals: {
    flex: 1,
    margin: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = state => state;

const BleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ble);

export default BleContainer;
