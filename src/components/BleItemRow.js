/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';

const BleItemRow: () => React$Node = ({connected, name, rssi, id, testFn}) => {
  const backgroundColor = connected ? 'green' : '#fff';
  return (
    <TouchableHighlight onPress={() => testFn({connected, name, rssi, id})}>
      <View style={[styles.row, {backgroundColor}]}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rssi}>RSSI: {rssi}</Text>
        <Text style={styles.id}>{id}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  row: {
    margin: 10,
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
    padding: 10,
  },
  rssi: {
    fontSize: 10,
    textAlign: 'center',
    color: '#333333',
    padding: 2,
  },
  id: {
    fontSize: 8,
    textAlign: 'center',
    color: '#333333',
    padding: 2,
    paddingBottom: 20,
  },
});

export default BleItemRow;
