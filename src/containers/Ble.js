import React, {Component} from 'react';
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
  return (
    <View style={styles.container}>
    </View>
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
