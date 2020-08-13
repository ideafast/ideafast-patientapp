import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  PermissionsAndroid,
  ScrollView,
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

const Ble: () => React$Node = props => {
  const [scanning, setScanning] = useState(false);
  const [peripherals, setPeripherals] = useState(new Map());
  const [appState, setAppState] = useState('');

  const [handlerDiscover, setHandlerDiscover] = useState(null);
  const [handlerStop, setHandlerStop] = useState(null);
  const [handlerDisconnect, setHandlerDisconnect] = useState(null);
  const [handlerUpdate, setHandlerUpdate] = useState(null);

  const handleDisconnectedPeripheral = data => {
    let newperipherals = peripherals;
    let peripheral = newperipherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setPeripherals(newperipherals);
    }
    console.log('Disconnected from ' + data.peripheral);
  };

  const handleUpdateValueForCharacteristic = data => {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  };

  const handleStopScan = () => {
    console.log('Scan is stopped');
    setScanning(false);
  };

  const handleDiscoverPeripheral = peripheral => {
    var newperipherals = peripherals;
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    newperipherals.set(peripheral.id, peripheral);
    setPeripherals(newperipherals);
  };

  // Component Did Mount
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    BleManager.start({showAlert: false});

    setHandlerDiscover(BleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    ));
    setHandlerStop(BleManagerEmitter.addListener(
      'BleManagerStopScan',
      handleStopScan,
    ));
    setHandlerDisconnect(BleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      handleDisconnectedPeripheral,
    ));
    setHandlerUpdate(BleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      handleUpdateValueForCharacteristic,
    ));

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ).then(requestResult => {
            if (requestResult) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }
  }, []);

  // Component Will Unmount
  useEffect(() => {
    return () => {
      handlerDiscover.remove();
      handlerStop.remove();
      handlerDisconnect.remove();
      handlerUpdate.remove();
      setHandlerDiscover(null);
      setHandlerStop(null);
      setHandlerDisconnect(null);
      setHandlerUpdate(null);
    }
  }, []);

  const handleAppStateChange = nextAppState => {
    if (
      appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      BleManager.getConnectedPeripherals([]).then(peripheralsArray => {
        console.log('Connected peripherals: ' + peripheralsArray.length);
      });
    }
    setAppState(nextAppState);
  };

  const startScan = () => {
    if (!scanning) {
      //this.setState({peripherals: new Map()});
      BleManager.scan([], 3, true).then(results => {
        console.log('Scanning...');
        setScanning(true);
      });
    }
  };

  const retrieveConnected = () => {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length === 0) {
        console.log('No connected peripherals');
      }
      console.log(results);
      var newperipherals = peripherals;
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        newperipherals.set(peripheral.id, peripheral);
        setPeripherals(newperipherals);
      }
    });
  };

  const test = peripheral => {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let newperipherals = peripherals;
            let p = peripherals.get(peripheral.id);
            if (p) {
              p.connected = true;
              newperipherals.set(peripheral.id, p);
              setPeripherals(newperipherals);
            }
            console.log('Connected to ' + peripheral.id);
          });
      }
    }
  };

  const list = Array.from(peripherals.values());
  const btnScanTitle =
    'Scan Bluetooth (' + (scanning ? 'on' : 'off') + ')';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Button title={btnScanTitle} onPress={() => startScan()} />
        </View>

        <View style={styles.row}>
          <Button
            title="Retrieve connected peripherals"
            onPress={() => retrieveConnected()}
          />
        </View>

        <ScrollView style={styles.scroll}>
          {list.length === 0 && (
            <View style={styles.NoPeripherals}>
              <Text>No peripherals</Text>
            </View>
          )}
          <FlatList
            data={list}
            renderItem={({item}) => {<BleItemRow {...item} testFn={test} />}}
            keyExtractor={item => item.id}
          />
        </ScrollView>
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
